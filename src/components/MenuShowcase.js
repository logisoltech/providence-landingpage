"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const TABS = [
  { id: "signature", label: "SIGNATURE MENU", Icon: IconUtensils },
  { id: "dinner", label: "DINNER MENU", Icon: IconCloche },
  { id: "lunch", label: "LUNCH MENU", Icon: IconSun },
  { id: "dessert", label: "DESSERT MENU", Icon: IconCake },
  { id: "wine", label: "BEVERAGES", Icon: IconWine },
];

const MENU_BY_TAB = {
  signature: [
    {
      id: "signature-01",
      num: "01",
      title: "Fat Bastard Oyster",
      description: "Golden Kaluga caviar, dongchimi, rooftop herbs & edible flowers.",
      image:
        "/five.jpg",
      fallback:
        "https://images.unsplash.com/photo-1559847844-53156997659?auto=format&fit=crop&w=1200&q=85",
    },
    {
      id: "signature-02",
      num: "02",
      title: "Hokkaido Scallop",
      description: "Scallop-infused XO, scallop broth, chayote greens, oceanic brine sweetness.",
      image:
        "/six.jpg",
    },
    {
      id: "signature-03",
      num: "03",
      title: "House Smoked Wild Alaskan King Salmon",
      description: "Horseradish, ikura, rooftop dill, delicately dry-aged preparation.",
      image:
        "/salmon.jpg",
    },
    {
      id: "signature-04",
      num: "04",
      title: "The Uni Egg",
      description: "Sea urchin, Golden Kaluga caviar, Champagne beurre blanc, brioche croutons.",
      image:
        "8.jpg",
    },
  ],
  dinner: [
    {
      id: "dinner-01",
      num: "01",
      title: "Matsutake Sashimi",
      description: "Late autumn sashimi, matsutake mushroom, yuzu, delicate floral garnish.",
      image:
        "9.jpg",
    },
    {
      id: "dinner-02",
      num: "02",
      title: "Wild Japanese Tai Sashimi",
      description: "Celtuce, passion fruit, citrus broth, delicate floral garnish.",
      image:
        "/10.jpg",
    },
    {
      id: "dinner-03",
      num: "03",
      title: "California Box Crab",
      description: "Prawn, summer squash blossom, tomato broth, delicate seasonal seafood composition.",
      image:
        "/11.jpg",
    },
    {
      id: "dinner-04",
      num: "04",
      title: "Smoked Swordfish Belly",
      description: "Gloucester swordfish, flambo shelling beans, preserved black truffle, rich winter broth.",
      image:
        "/12.jpg",
    },
  ],
  lunch: [
    {
      id: "lunch-01",
      num: "01",
      title: "Kombu Jime Wild Japanese Tai Sashimi",
      description: "Celtuce, jicama, passion fruit, pickled ginger, rooftop herbs.",
      image:
        "/13.jpg",
    },
    {
      id: "lunch-02",
      num: "02",
      title: "Salt Spring Island Mussel",
      description: "Savory mussel broth, gratiné finish, delicate chawanmushi custard.",
      image:
        "/14.jpg",
    },
    {
      id: "lunch-03",
      num: "03",
      title: "Red Abalone with Winter Squash",
      description: "Red Abalone, Egg Sabayon & Abalone Dashi.",
      image:
        "/two.jpg",
    },
    {
      id: "lunch-04",
      num: "04",
      title: "King Salmon",
      description: "Chanterelles, pickled grapes, and rooftop herbs.",
      image:
        "/four.jpg",
    },
  ],
  dessert: [
    {
      id: "dessert-01",
      num: "01",
      title: "Pecan Hojicha Chocolate Sphere",
      description: "Japanese black sugar, roasted pecan, hojicha, handcrafted dark chocolate confection.",
      image:
        "/d1.jpg",
    },
    {
      id: "dessert-02",
      num: "02",
      title: "Hawaiian Chocolate Peanut Miso",
      description: "Dessert featuring kinako ice cream, chocolate, peanut miso, and caramel-style sauce by Pastry Chef Mac Daniel Dimla.",
      image:
        "/d2.jpg",
    },
    {
      id: "dessert-03",
      num: "03",
      title: "California Citrus Sorbet",
      description: "Dessert featuring seasonal California citrus, citrus sorbet, and delicate fruit elements crafted in Providence’s signature Michelin-starred style.",
      image:
        "/d3.jpg",
    },
    {
      id: "dessert-04",
      num: "04",
      title: "Thomcorde Grape Sorbet",
      description: "Pre-dessert featuring Thomcorde grape sorbet, cognac granita, warm spice notes, fall fruits, and mint, crafted in Providence’s elegant Michelin-starred pastry style.",
      image:
        "/d4.jpg",
    },
  ],
  wine: [
    {
      id: "wine-01",
      num: "01",
      title: "Vesper In Disguise",
      description: "Gin, vodka, Cap Corse aperitif, lacto-fermented pearl onions, rooftop nasturtium.",
      image:
        "/w1.jpg",
    },
    {
      id: "wine-02",
      num: "02",
      title: "Dom Pérignon Vintage 2012",
      description: "Luxury champagne gifted by The French Laundry to celebrate Providence’s Michelin stars.",
      image:
        "/w2.jpg",
    },
    {
      id: "wine-03",
      num: "03",
      title: "Japanese Penicillin",
      description: "Cocktail featuring Hibiki Harmony whisky, lemon, ginger, maras tunuki float, and Providence honey, crafted in Providence’s refined signature cocktail style.",
      image:
        "/w3.jpg",
    },
    {
      id: "wine-04",
      num: "04",
      title: "Electric Margarita",
      description: "Cocktail featuring Casa Dragones tequila, Grand Marnier Cuvée du Centenaire, passionfruit cordial, agave, and verjus, crafted in Providence’s elevated signature cocktail style.",
      image:
        "/w4.jpg",
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

  useEffect(() => {
    setCurrentSrc(src);
    setFailed(false);
  }, [src, fallback]);

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

function getDishesForTab(tabId) {
  const items = MENU_BY_TAB[tabId];
  if (!Array.isArray(items)) return MENU_BY_TAB.signature;
  return items.slice(0, 4);
}

export default function MenuShowcase() {
  const [activeTab, setActiveTab] = useState("signature");
  const dishes = getDishesForTab(activeTab);

  return (
    <section className="menu-showcase" aria-labelledby="menu-showcase-heading">
      <div className="menu-showcase-bg" aria-hidden="true" />

      <div className="menu-showcase-inner">
        <header className="menu-showcase-header">
          <p className="menu-showcase-kicker">OUR MENU</p>
          <h2 id="menu-showcase-heading" className="menu-showcase-title">
            A Celebration of Seasonal Excellence
          </h2>
          {/* <p className="menu-showcase-lede">
            Explore our seasonal menus, inspired by the finest ingredients and culinary
            artistry.
          </p> */}
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
          key={activeTab}
          id="menu-showcase-panel"
          role="tabpanel"
          aria-labelledby={`menu-tab-${activeTab}`}
          className="menu-showcase-panel"
        >
          <ul className="menu-showcase-grid">
            {dishes.map((dish) => (
              <li key={`${activeTab}-${dish.id}`} className="menu-showcase-card-wrap">
                <article className="menu-showcase-card">
                  <div className="menu-showcase-card-media">
                    <DishImage
                      key={`${activeTab}-${dish.id}`}
                      src={dish.image}
                      fallback={dish.fallback}
                      alt=""
                    />
                    <span className="menu-showcase-card-badge">{dish.num}</span>
                  </div>
                  <div className="menu-showcase-card-body">
                    <h3 className="menu-showcase-card-title">{dish.title}</h3>
                    <p className="menu-showcase-card-desc">{dish.description}</p>
                    <div className="menu-showcase-card-footer">
                      <Link href="/menus" className="menu-showcase-card-cta">
                        VIEW DISH
                        <span className="menu-showcase-card-cta-arrow" aria-hidden="true">
                          →
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
            <span className="menu-showcase-cta-icon" aria-hidden="true">
              <span className="menu-showcase-cta-plus">+</span>
            </span>
            <span className="menu-showcase-cta-label">EXPLORE THE FULL MENU</span>
          </Link>
        </footer>
      </div>
    </section>
  );
}
