import Image from "next/image";
import Link from "next/link";

const EXPLORE_LINKS = [
  { label: "Home", href: "/" },
  { label: "Menus", href: "/menus" },
  { label: "News + Events", href: "/news-events" },
  { label: "Gift Certificates", href: "/gift-certificates" },
  { label: "Reservations", href: "/reservations" },
];

const ABOUT_LINKS = [
  { label: "Our Story", href: "/about" },
  { label: "Our Team", href: "/team" },
  { label: "Private Dining", href: "/private-dining" },
  { label: "Careers", href: "/careers" },
  { label: "Press", href: "/press" },
];

const INFO_LINKS = [
  { label: "Hours & Directions", href: "/hours-directions" },
  { label: "Policies", href: "/policies" },
  { label: "FAQs", href: "/faqs" },
  { label: "Accessibility", href: "/accessibility" },
  { label: "Contact Us", href: "/contact" },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Accessibility", href: "/accessibility" },
];

function IconCalendar() {
  return (
    <svg className="site-footer-book-icon-svg" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="5" width="18" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="1.35" />
      <path d="M8 3v3M16 3v3M3 10h18" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" />
      <path
        d="M9 14l2 2 4-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconPin() {
  return (
    <svg className="site-footer-info-icon-svg" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 21s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.35"
      />
      <circle cx="12" cy="11" r="2.2" fill="currentColor" />
    </svg>
  );
}

function IconClock() {
  return (
    <svg className="site-footer-info-icon-svg" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.35" />
      <path d="M12 7v5l3 2" fill="none" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" />
    </svg>
  );
}

function IconPhone() {
  return (
    <svg className="site-footer-info-icon-svg" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M8.5 5.5c.5 2.2 1.8 4.5 3.5 6.2s4 3 6.2 3.5l1.3-1.3c.4-.4 1-.5 1.5-.3 1.6.6 3.4.9 5.2.9.6 0 1 .4 1 1v2.2c0 .6-.4 1-1 1C10.4 22 2 13.6 2 3c0-.6.4-1 1-1h2.2c.6 0 1 .4 1 1 0 1.8.3 3.6.9 5.2.2.5.1 1.1-.3 1.5l-1.3 1.3z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconEnvelope() {
  return (
    <svg className="site-footer-info-icon-svg" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="2" y="5" width="20" height="14" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.35" />
      <path d="M2 7l10 7 10-7" fill="none" stroke="currentColor" strokeWidth="1.35" strokeLinejoin="round" />
    </svg>
  );
}

function IconInstagram() {
  return (
    <svg className="site-footer-social-svg" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="2.5" y="2.5" width="19" height="19" rx="5" fill="none" stroke="currentColor" strokeWidth="1.35" />
      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.35" />
      <circle cx="17" cy="7" r="1.1" fill="currentColor" />
    </svg>
  );
}

function IconFacebook() {
  return (
    <svg className="site-footer-social-svg" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M14 8h3V5h-3c-2.2 0-4 1.8-4 4v2H7v3h3v7h3v-7h2.5l.5-3H13V9c0-.6.4-1 1-1z"
        fill="currentColor"
      />
    </svg>
  );
}

function IconX() {
  return (
    <svg className="site-footer-social-svg" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M6 6l12 12M18 6L6 18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function FooterNavColumn({ title, links }) {
  return (
    <div className="site-footer-nav-col">
      <h3 className="site-footer-nav-heading">{title}</h3>
      <ul className="site-footer-nav-list">
        {links.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="site-footer-nav-link">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="site-footer" aria-label="Site footer">
      <div className="site-footer-bg" aria-hidden="true" />

      <div className="site-footer-inner">
        <div className="site-footer-top">
          <div className="site-footer-brand">
            <Link href="/" className="site-footer-logo-link" aria-label="Providence home">
              <Image
                src="/providence.png"
                alt="Providence"
                width={200}
                height={52}
                className="site-footer-logo"
              />
            </Link>
            <div className="site-footer-brand-rule" aria-hidden="true" />
            <p className="site-footer-brand-text">
              Providence is an award-winning Los Angeles restaurant celebrated for refined
              seafood cuisine, exceptional hospitality, and unforgettable dining experiences.
            </p>
            <Link href="/about" className="site-footer-btn site-footer-btn--outline">
              LEARN MORE ABOUT US
              <span className="site-footer-btn-arrow" aria-hidden="true">
                →
              </span>
            </Link>
          </div>

          <FooterNavColumn title="EXPLORE" links={EXPLORE_LINKS} />
          <FooterNavColumn title="ABOUT" links={ABOUT_LINKS} />
          <FooterNavColumn title="INFORMATION" links={INFO_LINKS} />

          <aside className="site-footer-book">
            <span className="site-footer-book-icon" aria-hidden="true">
              <IconCalendar />
            </span>
            <h3 className="site-footer-book-title">Book Your Table</h3>
            <p className="site-footer-book-text">
              Reserve your table for an unforgettable fine dining experience at Providence.
            </p>
            <Link href="/reservations" className="site-footer-btn site-footer-btn--outline">
              MAKE A RESERVATION
              <span className="site-footer-btn-arrow" aria-hidden="true">
                →
              </span>
            </Link>
          </aside>
        </div>

        <div className="site-footer-divider" aria-hidden="true" />

        <div className="site-footer-info">
          <div className="site-footer-info-block">
            <span className="site-footer-info-icon" aria-hidden="true">
              <IconPin />
            </span>
            <div className="site-footer-info-body">
              <p className="site-footer-info-label">VISIT US</p>
              <p className="site-footer-info-text">
                5955 Melrose Avenue
                <br />
                Los Angeles, CA 90038
              </p>
            </div>
          </div>

          <div className="site-footer-info-block">
            <span className="site-footer-info-icon" aria-hidden="true">
              <IconClock />
            </span>
            <div className="site-footer-info-body">
              <p className="site-footer-info-label">HOURS</p>
              <p className="site-footer-info-text">
                Tue – Thu: 5:45 PM – 9:15 PM
                <br />
                Fri – Sat: 5:30 PM – 9:15 PM
                <br />
                Sun – Mon: Closed
              </p>
            </div>
          </div>

          <div className="site-footer-info-block">
            <span className="site-footer-info-icon" aria-hidden="true">
              <IconPhone />
            </span>
            <div className="site-footer-info-body">
              <p className="site-footer-info-label">CALL US</p>
              <p className="site-footer-info-text">
                <a href="tel:+13234604170" className="site-footer-info-link">
                  (323) 460-4170
                </a>
              </p>
            </div>
          </div>

          <div className="site-footer-info-block">
            <span className="site-footer-info-icon" aria-hidden="true">
              <IconEnvelope />
            </span>
            <div className="site-footer-info-body">
              <p className="site-footer-info-label">EMAIL US</p>
              <p className="site-footer-info-text">
                <a href="mailto:info@providencela.com" className="site-footer-info-link">
                  info@providencela.com
                </a>
              </p>
            </div>
          </div>

          <div className="site-footer-info-block site-footer-info-block--social">
            <p className="site-footer-info-label">FOLLOW US</p>
            <ul className="site-footer-social-list">
              <li>
                <a
                  href="https://www.instagram.com/"
                  className="site-footer-social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <IconInstagram />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/"
                  className="site-footer-social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <IconFacebook />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/"
                  className="site-footer-social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X"
                >
                  <IconX />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="site-footer-divider site-footer-divider--subtle" aria-hidden="true" />

        <div className="site-footer-legal">
          <p className="site-footer-copy">© 2026 Providence. All rights reserved.</p>
          <ul className="site-footer-legal-list">
            {LEGAL_LINKS.map((item, i) => (
              <li key={item.href}>
                {i > 0 && <span className="site-footer-legal-sep" aria-hidden="true">|</span>}
                <Link href={item.href} className="site-footer-legal-link">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
