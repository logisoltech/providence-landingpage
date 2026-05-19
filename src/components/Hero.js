"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const TASTING_COURSES = [
  {
    name: "Oysters On The Half Shell",
    desc: "Tarragon mignonette, citrus notes",
    thumbSrc:
      "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&w=320&q=85",
  },
  {
    name: "King Salmon",
    desc: "Porcini butter, smoked roe",
    thumbSrc:
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=320&q=85",
  },
  {
    name: "A5 Wagyu",
    desc: "Stuffed morel, black garlic",
    thumbSrc:
      "https://images.pexels.com/photos/725997/pexels-photo-725997.jpeg?auto=compress&cs=tinysrgb&w=320&h=320&fit=crop",
  },
];

/** Slide 1: existing hero art (local). */
const HERO_SLIDE_1_SRC = "/heroimg1.png";

/** Slide 2: remote — luxury restaurant interior (Unsplash). */
const HERO_SLIDE_2_SRC =
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=2400&q=85";

/** Slide 3: remote — fine-dining kitchen / chef prep (Mixkit CDN). */
const HERO_SLIDE_3_VIDEO_SRC =
  "https://assets.mixkit.co/videos/13262/13262-720.mp4";

const HOLD_MS = [2000, 2000, 5000];
const FADE_MS = 900;

function IconInstagram() {
  return (
    <svg
      className="hero-social-svg"
      viewBox="0 0 24 24"
      width="20"
      height="20"
      aria-hidden="true"
    >
      <rect
        x="2.5"
        y="2.5"
        width="19"
        height="19"
        rx="5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.35"
      />
      <circle
        cx="12"
        cy="12"
        r="4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.35"
      />
      <circle cx="17" cy="7" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconFacebook() {
  return (
    <svg
      className="hero-social-svg"
      viewBox="0 0 24 24"
      width="20"
      height="20"
      aria-hidden="true"
    >
      <path
        d="M14 22h-4v-8H7v-3h3V9.5C10 6.5 11.5 5 15 5h3v3h-2c-1.1 0-2 .9-2 2V11h4l-.5 3H14v8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconX() {
  return (
    <svg
      className="hero-social-svg"
      viewBox="0 0 24 24"
      width="20"
      height="20"
      aria-hidden="true"
    >
      <path
        d="M5 5l14 14M19 5L5 19"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MenuOrnament() {
  return (
    <div className="hero-menu-ornament" aria-hidden="true">
      <svg
        className="hero-menu-ornament-svg"
        viewBox="0 0 48 40"
        width="32"
        height="27"
      >
        <path
          d="M24 4v6M24 30v6M10 20H4M44 20h-6M14.5 9.5l-4-4M37.5 9.5l4-4M14.5 30.5l-4 4M37.5 30.5l4 4"
          stroke="currentColor"
          strokeWidth="1.1"
          strokeLinecap="round"
        />
        <circle cx="24" cy="20" r="3.5" fill="none" stroke="currentColor" strokeWidth="1.1" />
        <path
          d="M24 12c-3 2-5 5-5 8s2 6 5 8c3-2 5-5 5-8s-2-6-5-8z"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.9"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function HeroBannerSlideshow() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);
  const isInitialRef = useRef(true);
  const videoRef = useRef(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduceMotion(mq.matches);
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reduceMotion) {
      setActiveIndex(0);
    } else {
      isInitialRef.current = true;
    }
  }, [reduceMotion]);

  useEffect(() => {
    if (reduceMotion) return undefined;

    let cancelled = false;
    const delay =
      isInitialRef.current && activeIndex === 0
        ? HOLD_MS[0]
        : FADE_MS + HOLD_MS[activeIndex];

    if (isInitialRef.current && activeIndex === 0) {
      isInitialRef.current = false;
    }

    const id = window.setTimeout(() => {
      if (!cancelled) setActiveIndex((n) => (n + 1) % 3);
    }, delay);

    return () => {
      cancelled = true;
      window.clearTimeout(id);
    };
  }, [activeIndex, reduceMotion]);

  useEffect(() => {
    if (reduceMotion) return undefined;
    const el = videoRef.current;
    if (!el) return undefined;
    if (activeIndex === 2) {
      el.currentTime = 0;
      const p = el.play();
      if (p !== undefined) p.catch(() => {});
    } else {
      el.pause();
    }
    return undefined;
  }, [activeIndex, reduceMotion]);

  const showIndex = reduceMotion ? 0 : activeIndex;

  return (
    <>
      <div className="hero-banner" aria-hidden="true">
        <div
          className={[
            "hero-banner-slide",
            showIndex === 0 ? "hero-banner-slide--active" : "",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          <img
            src={HERO_SLIDE_1_SRC}
            alt=""
            className="hero-banner-media hero-banner-media--slide1"
            decoding="async"
            fetchPriority="high"
          />
        </div>
        <div
          className={[
            "hero-banner-slide",
            showIndex === 1 ? "hero-banner-slide--active" : "",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          <img
            src={HERO_SLIDE_2_SRC}
            alt=""
            className="hero-banner-media hero-banner-media--remote"
            decoding="async"
          />
        </div>
        <div
          className={[
            "hero-banner-slide",
            showIndex === 2 ? "hero-banner-slide--active" : "",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {!reduceMotion && (
            <video
              ref={videoRef}
              className="hero-banner-media hero-banner-media--video"
              src={HERO_SLIDE_3_VIDEO_SRC}
              autoPlay
              muted
              playsInline
              preload="metadata"
              loop={false}
            />
          )}
        </div>
      </div>
      <div className="hero-banner-scrim" aria-hidden="true" />
    </>
  );
}

export default function Hero() {
  return (
    <section className="hero-section" aria-labelledby="hero-heading">
      <HeroBannerSlideshow />

      <div className="hero-inner">
        <div className="hero-content">
          <p className="hero-label">MICHELIN-STARRED CUISINE</p>

          <h1 id="hero-heading" className="hero-title">
            <span className="hero-title-line">Where Culinary</span>
            <span className="hero-title-line">Artistry Becomes</span>
            <span className="hero-title-line">Timeless</span>
          </h1>

          <p className="hero-sub">
            An immersive journey of flavor, technique,
            <br />
            and emotion crafted for the senses.
          </p>
        </div>

        <aside className="hero-menu-card" aria-label="Tonight's tasting menu">
          <div className="hero-menu-card-inner">
            <MenuOrnament />
            <p className="hero-menu-heading">TONIGHT&apos;S JOURNEY</p>
            <p className="hero-menu-subheading">CHEF&apos;S TASTING</p>

            <ul className="hero-menu-list">
              {TASTING_COURSES.map((course) => (
                <li className="hero-menu-item" key={course.name}>
                  <div className="hero-menu-thumb" aria-hidden="true">
                    <img
                      className="hero-menu-thumb-img"
                      src={course.thumbSrc}
                      alt=""
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="hero-menu-item-text">
                    <span className="hero-menu-dish">{course.name}</span>
                    <span className="hero-menu-desc">{course.desc}</span>
                  </div>
                </li>
              ))}
            </ul>

            <div className="hero-menu-footer">
              <Link href="/menus" className="hero-menu-footer-link">
                VIEW FULL MENU
              </Link>
              <Link
                href="/menus"
                className="hero-menu-footer-icon"
                aria-label="View full menu"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="14"
                  height="14"
                  aria-hidden="true"
                  className="hero-menu-footer-arrow"
                >
                  <path
                    d="M10 7l5 5-5 5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </aside>
      </div>

      <aside className="hero-social" aria-label="Social media">
        <ul className="hero-social-list">
          <li className="hero-social-item">
            <a
              href="https://www.instagram.com/"
              className="hero-social-link social-icon"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <IconInstagram />
            </a>
          </li>
          <li className="hero-social-item">
            <a
              href="https://www.facebook.com/"
              className="hero-social-link social-icon"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <IconFacebook />
            </a>
          </li>
          <li className="hero-social-item">
            <a
              href="https://twitter.com/"
              className="hero-social-link social-icon"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
            >
              <IconX />
            </a>
          </li>
        </ul>
      </aside>
    </section>
  );
}
