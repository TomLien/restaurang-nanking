import type { MenuCategory, MenuItem } from "./menu";
import { menuCategories as fallbackMenu } from "./menu";

type SheetTab = { gid: string; name: string };

let cachedMenu: MenuCategory[] | null = null;

function labelToId(label: string): string {
  return label
    .toLowerCase()
    .replace(/å/g, "a")
    .replace(/ä/g, "a")
    .replace(/ö/g, "o")
    .replace(/&/g, "och")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

async function fetchSheetTabs(spreadsheetId: string): Promise<SheetTab[]> {
  const url = `https://docs.google.com/spreadsheets/d/${spreadsheetId}/htmlview`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Sheet HTML fetch failed: ${res.status}`);
  const html = await res.text();

  const tabs: SheetTab[] = [];
  const re = /items\.push\(\{name:\s*"([^"]+)"[^}]*gid:\s*"([^"]+)"/g;
  for (const match of html.matchAll(re)) {
    tabs.push({ name: match[1], gid: match[2] });
  }
  return tabs;
}

function parseCsv(raw: string): Record<string, string>[] {
  const lines = raw.trim().split("\n");
  if (lines.length < 2) return [];

  const headers = parseCsvLine(lines[0]);
  return lines.slice(1).map((line) => {
    const values = parseCsvLine(line);
    const row: Record<string, string> = {};
    headers.forEach((h, i) => {
      row[h.trim()] = (values[i] ?? "").trim();
    });
    return row;
  });
}

function parseCsvLine(line: string): string[] {
  const result: string[] = [];
  let current = "";
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (inQuotes) {
      if (char === '"' && line[i + 1] === '"') {
        current += '"';
        i++;
      } else if (char === '"') {
        inQuotes = false;
      } else {
        current += char;
      }
    } else if (char === '"') {
      inQuotes = true;
    } else if (char === ",") {
      result.push(current);
      current = "";
    } else {
      current += char;
    }
  }
  result.push(current);
  return result;
}

async function fetchSheetTab(
  spreadsheetId: string,
  gid: string,
): Promise<Record<string, string>[]> {
  const url = `https://docs.google.com/spreadsheets/d/${spreadsheetId}/export?format=csv&gid=${gid}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Sheet fetch failed: ${res.status}`);
  return parseCsv(await res.text());
}

function rowToMenuItem(row: Record<string, string>): MenuItem | null {
  const number = row.number;
  const takeawayPrice = row.takeawayPrice?.trim();
  const aLaCartePrice = row.aLaCartePrice?.trim();
  const title = row.title;
  const description = row.description;
  if (!title || !takeawayPrice || !aLaCartePrice) return null;
  const heat = Number(row.heat) || 0;
  return {
    ...(number ? { number } : {}),
    title,
    description: description ?? "",
    takeawayPrice,
    aLaCartePrice,
    heat,
  };
}

async function fetchAllCategories(spreadsheetId: string): Promise<MenuCategory[]> {
  const tabs = await fetchSheetTabs(spreadsheetId);
  const categories = await Promise.all(
    tabs.map(async (tab) => {
      const rows = await fetchSheetTab(spreadsheetId, tab.gid);
      const items = rows.map(rowToMenuItem).filter((item): item is MenuItem => item !== null);
      return { id: labelToId(tab.name), label: tab.name, items };
    }),
  );
  return categories.filter((c) => c.items.length > 0);
}

export async function getMenuCategories(): Promise<MenuCategory[]> {
  const sheetId = "1CBpbWHcQZR7IoQoTaVWzrPWh2XH6knHTCBH712xo9Fg";

  try {
    const categories = await fetchAllCategories(sheetId);
    return categories;
  } catch (error) {
    console.error("Failed to fetch menu from Google Sheets, using fallback:", error);
    return cachedMenu ?? fallbackMenu;
  }
}
