import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import type { LinksFunction } from "react-router";
import "./app.css";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;600;700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Restaurang Nanking",
  description:
    "Hos restaurang Nanking serverar vi mat för alla smaker. En familjeägd restaurang grundad för över 30 år sedan, belägen ungefär 10 minuter från centrala Göteborg.",
  cuisine: "Chinese, Thai",
  url: "https://restaurangnanking.se/",
  telephone: "+46-31-23-03-91",
  email: "info@restaurangnanking.se",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Lantmätaregatan 12",
    addressLocality: "Göteborg",
    postalCode: "417 06",
    addressCountry: "SE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 57.7089,
    longitude: 11.9746,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday"],
      opens: "11:00",
      closes: "21:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Wednesday", "Thursday", "Friday"],
      opens: "11:00",
      closes: "21:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday"],
      opens: "12:00",
      closes: "21:00",
    },
  ],
  hasMenu: "https://restaurangnanking.se/#meny",
  priceRange: "$$",
  servesCuisine: ["Chinese", "Asian"],
  image: "https://restaurangnanking.se/og-image.jpg",
};

export function meta() {
  return [
    { title: "Restaurang Nanking – Äkta kinesisk mat i Göteborg" },
    {
      name: "description",
      content:
        "Restaurang Nanking serverar äkta kinesisk mat i hjärtat av Göteborg. Boka bord eller beställ takeaway. Se vår meny med över 80 rätter.",
    },
    { name: "robots", content: "index, follow" },
    { property: "og:title", content: "Restaurang Nanking – Äkta kinesisk mat i Göteborg" },
    {
      property: "og:description",
      content:
        "Restaurang Nanking serverar äkta kinesisk mat i hjärtat av Göteborg sedan 1987. Boka bord eller beställ takeaway.",
    },
    { property: "og:type", content: "restaurant" },
    { property: "og:url", content: "https://restaurangnanking.se/" },
    { property: "og:image", content: "https://restaurangnanking.se/og-image.jpg" },
    { property: "og:locale", content: "sv_SE" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Restaurang Nanking – Äkta kinesisk mat i Göteborg" },
    {
      name: "twitter:description",
      content: "Äkta kinesisk mat i hjärtat av Göteborg sedan 1987.",
    },
  ];
}

export function links2() {
  return [{ rel: "canonical", href: "https://restaurangnanking.se/" }];
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://restaurangnanking.se/" />
        <Meta />
        <Links />
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: controlled structured data
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body style={{ fontFamily: "'Libre Baskerville', Georgia, serif", background: "var(--paper)", color: "var(--ink)" }}>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
