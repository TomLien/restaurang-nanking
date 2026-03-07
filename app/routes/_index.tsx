import type { LoaderFunctionArgs } from "react-router";
import { useLoaderData } from "react-router";
import About from "~/components/About";
import Carousel from "~/components/Carousel";
import Hero from "~/components/Hero";
import Location from "~/components/Location";
import Menu from "~/components/Menu";
import Nav from "~/components/Nav";
import OpeningHours from "~/components/OpeningHours";
import { getMenuCategories } from "~/data/sheets.server";

export async function loader(_args: LoaderFunctionArgs) {
  const categories = await getMenuCategories();
  return {
    categories,
    defaultCategoryId: categories[0].id,
  };
}

export default function Index() {
  const { categories, defaultCategoryId } = useLoaderData<typeof loader>();

  return (
    <>
      <Nav />
      <Hero />
      <Carousel />
      <main>
        <Menu categories={categories} defaultCategoryId={defaultCategoryId} />
        <About />
        <OpeningHours />
        <Location />
      </main>
      <footer className="site-footer">
        <a href="/" className="nav-logo">
          <span className="nav-logo-cn">南京故店</span>
          <span className="nav-logo-en">Restaurang Nanking</span>
        </a>
        <nav className="footer-links" aria-label="Sidfot">
          <a href="#meny" className="footer-link">
            Meny
          </a>
          <a href="#om-oss" className="footer-link">
            Om oss
          </a>
          <a href="#oppettider" className="footer-link">
            Öppettider
          </a>
          <a href="#hitta-hit" className="footer-link">
            Hitta hit
          </a>
          <a href="tel:+4631230391" className="footer-link">
            031-23 03 91
          </a>
        </nav>
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} Restaurang Nanking &mdash; Lantmätaregatan 12, Göteborg
        </p>
      </footer>
    </>
  );
}
