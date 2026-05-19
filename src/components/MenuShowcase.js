"use client";

import Link from "next/link";
import { useState } from "react";

const TABS = [
  { id: "signature", label: "SIGNATURE MENU", Icon: IconUtensils },
  { id: "dinner", label: "DINNER MENU", Icon: IconCloche },
  { id: "lunch", label: "LUNCH MENU", Icon: IconSun },
  { id: "dessert", label: "DESSERT MENU", Icon: IconCake },
  { id: "wine", label: "WINE LIST", Icon: IconWine },
];

const MENU_BY_TAB = {
  signature: [
    {
      num: "01",
      title: "Oysters On The Half Shell",
      description: "Daily selection, tarragon mignonette.",
      image:
        "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&w=1200&q=85",
      fallback:
        "https://images.unsplash.com/photo-1559847844-53156997659?auto=format&fit=crop&w=1200&q=85",
    },
    {
      num: "02",
      title: "Santa Barbara Spot Prawns",
      description: "Rosemary, olive oil, lemon.",
      image:
        "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=1200&q=85",
      fallback:
        "https://images.unsplash.com/photo-1519708221-053da5824f44?auto=format&fit=crop&w=1200&q=85",
    },
    {
      num: "03",
      title: "King Salmon",
      description: "Porcini, ramp butter, smoked roe.",
      image:
        "https://images.unsplash.com/photo-1467003909585-41f8a0ba7891?auto=format&fit=crop&w=1200&q=85",
      fallback:
        "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=85",
    },
    {
      num: "04",
      title: "A5 Wagyu",
      description: "Kohlrabi, stuffed morel, black garlic.",
      image:
        "https://images.unsplash.com/photo-1565680018434-b0d5fb022f7d?auto=format&fit=crop&w=1200&q=85",
      fallback:
        "https://images.unsplash.com/photo-1559847844-53156997659?auto=format&fit=crop&w=1200&q=85",
    },
  ],
  dinner: [
    {
      num: "01",
      title: "Kaluga Caviar",
      description: "Country ham, giant clam, soy milk.",
      image:
        "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=85",
      fallback:
        "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=1200&q=85",
    },
    {
      num: "02",
      title: "Sashimi",
      description: "Hibiscus, crÃ¨me fraÃ®che, cucumber.",
      image:
        "https://images.unsplash.com/photo-1432139575988-1e991efc5ce7?auto=format&fit=crop&w=1200&q=85",
      fallback:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=85",
    },
    {
      num: "03",
      title: "Abalone",
      description: "Green asparagus, snap peas, white truffle.",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85",
      fallback:
        "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=85",
    },
    {
      num: "04",
      title: "Liberty Farms Duck",
      description: "Cherry glaze, smoked turnip, herbs.",
      image:
        "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=1200&q=85",
      fallback:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=85",
    },
  ],
  lunch: [
    {
      num: "01",
      title: "Citrus Cured Salmon",
      description: "Avocado, cucumber, dill crÃ¨me fraÃ®che.",
      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=85",
      fallback:
        "https://images.unsplash.com/photo-1467003909585-41f8a0ba7891?auto=format&fit=crop&w=1200&q=85",
    },
    {
      num: "02",
      title: "Garden Greens",
      description: "Heirloom lettuce, goat cheese, champagne vinaigrette.",
      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=85",
      fallback:
        "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1200&q=85",
    },
    {
      num: "03",
      title: "Lobster Roll",
      description: "Butter-poached lobster, brioche, herb aioli.",
      image:
        "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=1200&q=85",
      fallback:
        "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&w=1200&q=85",
    },
    {
      num: "04",
      title: "Seasonal Soup",
      description: "Chef's daily preparation with fresh herbs.",
      image:
        "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=1200&q=85",
      fallback:
        "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=1200&q=85",
    },
  ],
  dessert: [
    {
      num: "01",
      title: "Valrhona SoufflÃ©",
      description: "Dark chocolate, crÃ¨me anglaise, raspberry.",
      image:
        "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1200&q=85",
      fallback:
        "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1200&q=85",
    },
    {
      num: "02",
      title: "Lemon Tart",
      description: "Meyer lemon curd, Italian meringue, candied zest.",
      image:
        "https://images.unsplash.com/photo-1519915028121-7d346bb8f304?auto=format&fit=crop&w=1200&q=85",
      fallback:
        "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=1200&q=85",
    },
    {
      num: "03",
      title: "Seasonal Sorbet",
      description: "Rotating fruit selection, mint, prosecco granita.",
      image:
        "https://images.unsplash.com/photo-1488900128323-a215a8a6922f?auto=format&fit=crop&w=1200&q=85",
      fallback:
        "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1200&q=85",
    },
    {
      num: "04",
      title: "CrÃ¨me BrÃ»lÃ©e",
      description: "Madagascar vanilla, caramelized sugar, berry compote.",
      image:
        "https://images.unsplash.com/photo-1470124182917-cc6e71b22aec?auto=format&fit=crop&w=1200&q=85",
      fallback:
        "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1200&q=85",
    },
  ],
  wine: [
    {
      num: "01",
      title: "Dom PÃ©rignon",
      description: "Champagne, France â€” citrus, brioche, fine mousse.",
      image:
        "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=85",
      fallback:
        "https://images.unsplash.com/photo-1553361373-0896056f270a?auto=format&fit=crop&w=1200&q=85",
    },
    {
      num: "02",
      title: "Burgundy Pinot Noir",
      description: "CÃ´te de Nuits â€” red cherry, earth, silky tannins.",
      image:
        "https://images.unsplash.com/photo-1553361373-0896056f270a?auto=format&fit=crop&w=1200&q=85",
      fallback:
        "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=85",
    },
    {
      num: "03",
      title: "Napa Cabernet",
      description: "Oakville â€” cassis, cedar, structured finish.",
      image:
        "https://images.unsplash.com/photo-1506377247377-894ca44695c3?auto=format&fit=crop&w=1200&q=85",
      fallback:
        "https://images.unsplash.com/photo-1553361373-0896056f270a?auto=format&fit=crop&w=1200&q=85",
    },
    {
      num: "04",
      title: "Sancerre Blanc",
      description: "Loire Valley â€” gooseberry, mineral, crisp acidity.",
      image:
        "https://images.unsplash.com/photo-1553361373-0896056f270a?auto=format&fit=crop&w=1200&q=85",
      fallback:
        "https://images.unsplash.com/photo-1506377247377-894ca44695c3?auto=format&fit=crop&w=1200&q=85",
    },
  ],
};

function IconUtensils() {
  return (
    <svg className="menu-showcase-tab-icon-svg" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 3v8M8 3v8M10 3v8M6 11v10M10 11v10" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" />
      <path d="M16 3c1.5 2 2 4 2 7v11" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" />
    </svg>
  );
}

function IconCloche() {
  return (
    <svg className="menu-showcase-tab-icon-svg" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 14h16v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3z" fill="none" stroke="currentColor" strokeWidth="1.35" />
      <path d="M6 14V9a6 6 0 0 1 12 0v5" fill="none" stroke="currentColor" strokeWidth="1.35" />
    </svg>
  );
}

function IconSun() {
  return (
    <svg className="menu-showcase-tab-icon-svg" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.35" />
      <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4l1.4-1.4M17 7l1.4-1.4" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" />
    </svg>
  );
}

function IconCake() {
  return (
    <svg className="menu-showcase-tab-icon-svg" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 14h16v4H4v-4zM6 10h12v4H6v-4zM8 6h8v4H8V6z" fill="none" stroke="currentColor" strokeWidth="1.35" strokeLinejoin="round" />
    </svg>
  );
}

function IconWine() {
  return (
    <svg className="menu-showcase-tab-icon-svg" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M8 4h8l-1 8a3 3 0 0 1-6 0L8 4z" fill="none" stroke="currentColor" strokeWidth="1.35" strokeLinejoin="round" />
      <path d="M12 12v8M9 20h6" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" />
    </svg>
  );
}

function DishImage({ src, fallback, alt }) {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [failed, setFailed] = useState(false);

  if (failed) {
    return <div className="menu-showcase-card-media-fallback" aria-hidden="true" />;
  }

  return (
    <img
      className="menu-showcase-card-media-img"
      src={currentSrc}
      alt={alt}
      loading="lazy"
      decoding="async"
      onError={() => {
        if (fallback && currentSrc !== fallback) setCurrentSrc(fallback);
        else setFailed(true);
      }}
    />
  );
}

export default function MenuShowcase() {
  const [activeTab, setActiveTab] = useState("signature");
  const dishes = MENU_BY_TAB[activeTab] ?? MENU_BY_TAB.signature;

  return (
    <section className="menu-showcase" aria-labelledby="menu-showcase-heading">
      <div className="menu-showcase-bg" aria-hidden="true" />

      <div className="menu-showcase-inner">
        <header className="menu-showcase-header">
          <p className="menu-showcase-kicker">OUR MENU</p>
          <h2 id="menu-showcase-heading" className="menu-showcase-title">
            A Celebration of Seasonal Excellence
          </h2>
          <p className="menu-showcase-lede">
            Explore our seasonal menus, inspired by the finest ingredients and culinary
            artistry.
          </p>
        </header>

        <div className="menu-showcase-tabs-wrap" role="tablist" aria-label="Menu categories">
          <div className="menu-showcase-tabs">
            {TABS.map(({ id, label, Icon }) => {
              const isActive = activeTab === id;
              return (
                <button
                  key={id}
                  type="button"
                  role="tab"
                  id={`menu-tab-${id}`}
                  aria-selected={isActive}
                  aria-controls="menu-showcase-panel"
                  className={`menu-showcase-tab${isActive ? " menu-showcase-tab--active" : ""}`}
                  onClick={() => setActiveTab(id)}
                >
                  <span className="menu-showcase-tab-icon" aria-hidden="true">
                    <Icon />
                  </span>
                  <span className="menu-showcase-tab-label">{label}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div
          id="menu-showcase-panel"
          role="tabpanel"
          aria-labelledby={`menu-tab-${activeTab}`}
          className="menu-showcase-panel"
        >
          <ul className="menu-showcase-grid">
            {dishes.map((dish) => (
              <li key={`${activeTab}-${dish.num}`} className="menu-showcase-card-wrap">
                <article className="menu-showcase-card">
                  <div className="menu-showcase-card-media">
                    <DishImage src={dish.image} fallback={dish.fallback} alt="" />
                    <span className="menu-showcase-card-badge">{dish.num}</span>
                  </div>
                  <div className="menu-showcase-card-body">
                    <h3 className="menu-showcase-card-title">{dish.title}</h3>
                    <p className="menu-showcase-card-desc">{dish.description}</p>
                    <div className="menu-showcase-card-footer">
                      <Link href="/menus" className="menu-showcase-card-cta">
                        VIEW DISH
                        <span className="menu-showcase-card-cta-arrow" aria-hidden="true">
                          â†’
                        </span>
                      </Link>
                    </div>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>

        <footer className="menu-showcase-footer">
          <Link href="/menus" className="menu-showcase-cta">
            EXPLORE THE FULL MENU
            <span className="menu-showcase-cta-arrow" aria-hidden="true">
              â†’
            </span>
          </Link>
        </footer>
      </div>
    </section>
  );
}
