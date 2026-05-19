"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";

const LEFT_LINKS = [
  { label: "Home", href: "/" },
  { label: "Menus", href: "/menus" },
  { label: "News + Events", href: "/news-events" },
  { label: "Gift Certificates", href: "/gift-certificates" },
];

const RIGHT_LINKS = [
  { label: "Hours + Directions", href: "/hours-directions" },
  { label: "Reservations", href: "/reservations" },
  { label: "About", href: "/about" },
  { label: "Team", href: "/team" },
];

const MOBILE_LINKS = [...LEFT_LINKS, ...RIGHT_LINKS];

const TOP_SCROLL = 12;
const DIR_EPS = 6;

function isActive(pathname, href) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function NavLink({ href, label, pathname, onNavigate }) {
  const active = isActive(pathname, href);
  const className = ["nav-link", active ? "nav-link-active" : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <li className="nav-item">
      <Link
        href={href}
        className={className}
        onClick={onNavigate}
        aria-current={active ? "page" : undefined}
      >
        {label}
      </Link>
    </li>
  );
}

function MobileOverlayLink({ href, label, pathname, onNavigate }) {
  const active = isActive(pathname, href);
  const className = [
    "nav-mobile-overlay__link",
    active ? "nav-mobile-overlay__link--active" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <li className="nav-mobile-overlay__item">
      <Link
        href={href}
        className={className}
        onClick={onNavigate}
        aria-current={active ? "page" : undefined}
      >
        {label}
      </Link>
    </li>
  );
}

function MobileMenuOverlay({ menuId, pathname, onClose }) {
  return (
    <div
      id={menuId}
      className="nav-mobile-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
    >
      <button
        type="button"
        className="nav-mobile-overlay__close"
        aria-label="Close menu"
        onClick={onClose}
      >
        <span className="nav-mobile-overlay__close-icon" aria-hidden="true">
          <span className="nav-mobile-overlay__close-bar" />
          <span className="nav-mobile-overlay__close-bar" />
        </span>
      </button>

      <Link
        href="/"
        className="nav-mobile-overlay__logo-link"
        aria-label="Home"
        onClick={onClose}
      >
        <Image
          src="/providence.png"
          alt=""
          width={200}
          height={60}
          className="nav-mobile-overlay__logo"
          priority
        />
      </Link>

      <nav className="nav-mobile-overlay__nav" aria-label="Mobile">
        <ul className="nav-mobile-overlay__list">
          {MOBILE_LINKS.map((item) => (
            <MobileOverlayLink
              key={item.href}
              href={item.href}
              label={item.label}
              pathname={pathname}
              onNavigate={onClose}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const menuId = useId();
  const [menuOpen, setMenuOpen] = useState(false);
  const [navMode, setNavMode] = useState("top");
  const [mounted, setMounted] = useState(false);
  const lastYRef = useRef(0);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    closeMenu();
  }, [pathname, closeMenu]);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKeyDown = (e) => {
      if (e.key === "Escape") closeMenu();
    };
    document.addEventListener("keydown", onKeyDown);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.classList.add("mobile-nav-open");
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prev;
      document.documentElement.classList.remove("mobile-nav-open");
    };
  }, [menuOpen, closeMenu]);

  useEffect(() => {
    lastYRef.current = typeof window !== "undefined" ? window.scrollY : 0;

    const applyHydrate = () => {
      const y = window.scrollY;
      if (y <= TOP_SCROLL) setNavMode("top");
      else setNavMode("logo");
    };

    const onScroll = () => {
      const y = window.scrollY;
      const dy = y - lastYRef.current;
      lastYRef.current = y;

      if (y <= TOP_SCROLL) {
        setNavMode("top");
        return;
      }
      if (dy > DIR_EPS) {
        setNavMode("logo");
      } else if (dy < -DIR_EPS) {
        setNavMode("pill");
      }
    };

    applyHydrate();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleClass = ["nav-menu-toggle", menuOpen ? "nav-menu-toggle-open" : ""]
    .filter(Boolean)
    .join(" ");

  const linksHidden = navMode === "logo";

  const navbarClass = [
    "navbar",
    `navbar--mode-${navMode}`,
    menuOpen ? "navbar--mobile-menu-open" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={navbarClass}>
      <div className="navbar-inner">
        <ul
          className="nav-list nav-list-left"
          aria-label="Primary"
          {...(linksHidden ? { "aria-hidden": true } : {})}
        >
          {LEFT_LINKS.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              label={item.label}
              pathname={pathname}
            />
          ))}
        </ul>

        <Link href="/" className="nav-logo-link" aria-label="Home">
          <Image
            src="/providence.png"
            alt=""
            width={200}
            height={60}
            className="nav-logo"
            priority
          />
        </Link>

        <ul
          className="nav-list nav-list-right"
          aria-label="Secondary"
          {...(linksHidden ? { "aria-hidden": true } : {})}
        >
          {RIGHT_LINKS.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              label={item.label}
              pathname={pathname}
            />
          ))}
        </ul>

        <button
          type="button"
          className={toggleClass}
          aria-expanded={menuOpen}
          aria-controls={menuId}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span className="nav-menu-icon" aria-hidden>
            <span className="nav-menu-icon-bar" />
            <span className="nav-menu-icon-bar" />
            <span className="nav-menu-icon-bar" />
          </span>
        </button>
      </div>

      {mounted &&
        menuOpen &&
        createPortal(
          <MobileMenuOverlay
            menuId={menuId}
            pathname={pathname}
            onClose={closeMenu}
          />,
          document.body
        )}
    </header>
  );
}
