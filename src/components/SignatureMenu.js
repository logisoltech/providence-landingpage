import Link from "next/link";

const DISHES = [
  {
    num: "01",
    title: "Seasonal Strawberry Tartlet",
    description: "with herbs & rooftop blossoms.",
    image:
      "/one.jpg",
  },
  {
    num: "02",
    title: "Red Abalone with Winter Squash",
    description: "Red Abalone, Egg Sabayon & Abalone Dashi.",
    image:
      "/two.jpg",
  },
  {
    num: "03",
    title: "Wild-Caught Japanese Tai Snapper",
    description: "Tai snapper with Sungold tomato and basil.",
    image:
      "three.jpg",
  },
  {
    num: "04",
    title: "King Salmon",
    description: "Chanterelles, pickled grapes, and rooftop herbs.",
    image:
      "four.jpg",
  },
];

export default function SignatureMenu() {
  return (
    <section className="signature-menu" aria-labelledby="signature-menu-heading">
      <div className="signature-menu-bg" aria-hidden="true" />

      <div className="page-container signature-menu-inner">
        <header className="signature-menu-header">
          <p className="signature-menu-kicker">SIGNATURE MENU</p>
          <h2 id="signature-menu-heading" className="signature-menu-title">
            A Celebration of Seasonal Excellence
          </h2>
          <Link href="/menus" className="signature-menu-header-cta">
            EXPLORE THE MENU →
          </Link>
        </header>

        <div className="signature-menu-grid">
          {DISHES.map((dish) => (
            <article className="signature-card" key={dish.num}>
              <div className="signature-card-image-wrap">
                <img
                  className="signature-card-img"
                  src={dish.image}
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
                <div className="signature-card-image-scrim" aria-hidden="true" />
                <span className="signature-card-badge">{dish.num}</span>
              </div>
              <div className="signature-card-body">
                <h3 className="signature-card-title">{dish.title}</h3>
                <p className="signature-card-desc">{dish.description}</p>
                <Link href="/menus" className="signature-card-footer">
                  <span className="signature-card-footer-label">VIEW DISH</span>
                  <span className="signature-card-footer-arrow" aria-hidden="true">
                    →
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
