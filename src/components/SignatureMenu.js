import Link from "next/link";

const DISHES = [
  {
    num: "01",
    title: "Oysters On The Half Shell",
    description: "Daily selection, tarragon mignonette.",
    image:
      "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&w=1800&q=88",
  },
  {
    num: "02",
    title: "Santa Barbara Spot Prawns",
    description: "Rosemary, olive oil, lemon.",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1800&q=88",
  },
  {
    num: "03",
    title: "King Salmon",
    description: "Porcini, ramp butter, smoked roe.",
    image:
      "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1800&q=88",
  },
  {
    num: "04",
    title: "A5 Wagyu",
    description: "Kohlrabi, stuffed morel, black garlic.",
    image:
      "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=1800&q=88",
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
