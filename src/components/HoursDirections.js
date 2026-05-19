"use client";

import Link from "next/link";
import { Fragment, useState } from "react";

const MAP_IMAGE =
  "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=85";
const MAP_FALLBACK =
  "https://images.unsplash.com/photo-1569336417950-0bb80fdeb80e?auto=format&fit=crop&w=1200&q=85";

const HOURS = [
  { day: "Tuesday – Thursday", time: "5:45 PM – 9:15 PM" },
  { day: "Friday – Saturday", time: "5:30 PM – 9:15 PM" },
  { day: "Sunday – Monday", time: "Closed" },
];

function IconClock() {
  return (
    <svg className="hours-directions-icon" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M12 7v5l3 2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconCalendar() {
  return (
    <svg className="hours-directions-icon hours-directions-icon--sm" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="4" y="5" width="16" height="15" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.3" />
      <path d="M8 3v3M16 3v3M4 10h16" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function IconPin() {
  return (
    <svg className="hours-directions-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 21s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <circle cx="12" cy="11" r="2.2" fill="currentColor" />
    </svg>
  );
}

function IconCar() {
  return (
    <svg className="hours-directions-icon hours-directions-icon--sm" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M5 16v2h2v-2h10v2h2v-2l1.2-4.5a1 1 0 0 0-.95-.8H4.75a1 1 0 0 0-.95.8L5 16z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <circle cx="7.5" cy="16.5" r="1.2" fill="currentColor" />
      <circle cx="16.5" cy="16.5" r="1.2" fill="currentColor" />
      <path d="M5 12h14l-1.2-3.5H6.2L5 12z" fill="none" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

function IconPhone() {
  return (
    <svg className="hours-directions-icon hours-directions-icon--sm" viewBox="0 0 24 24" aria-hidden="true">
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

function IconNav() {
  return (
    <svg className="hours-directions-icon hours-directions-icon--sm" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M5 19l14-7-7-3-3-7-4 17z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DirectionsMap() {
  const [src, setSrc] = useState(MAP_IMAGE);

  return (
    <div className="hours-directions-map-wrap">
      <img
        className="hours-directions-map-img"
        src={src}
        alt=""
        loading="lazy"
        decoding="async"
        width={600}
        height={400}
        onError={() => {
          if (src !== MAP_FALLBACK) setSrc(MAP_FALLBACK);
        }}
      />
      <div className="hours-directions-map-pin" aria-hidden="true">
        <span className="hours-directions-map-pin-mark">P</span>
      </div>
    </div>
  );
}

export default function HoursDirections() {
  return (
    <section className="hours-directions" aria-labelledby="hours-directions-heading">
      <div className="hours-directions-inner">
        <header className="hours-directions-header">
          <p className="hours-directions-kicker">VISIT US</p>
          <div className="hours-directions-ornament" aria-hidden="true">
            <span className="hours-directions-ornament-line" />
            <span className="hours-directions-ornament-diamond" />
            <span className="hours-directions-ornament-line" />
          </div>
          <h2 id="hours-directions-heading" className="hours-directions-title">
            Hours &amp; Directions
          </h2>
          <p className="hours-directions-lede">
            We look forward to welcoming you.
          </p>
        </header>

        <div className="hours-directions-cards">
          <article className="hours-directions-card hours-directions-card--hours">
            <header className="hours-directions-card-head">
              <IconClock />
              <h3 className="hours-directions-card-label">HOURS</h3>
            </header>

            <dl className="hours-directions-schedule">
              {HOURS.map((row) => (
                <Fragment key={row.day}>
                  <dt>{row.day}</dt>
                  <dd>{row.time}</dd>
                </Fragment>
              ))}
            </dl>

            <div className="hours-directions-card-divider" aria-hidden="true" />

            <p className="hours-directions-note">
              <IconCalendar />
              <span>
                Holiday hours may vary. Please call for updated information.
              </span>
            </p>
          </article>

          <article className="hours-directions-card hours-directions-card--directions">
            <div className="hours-directions-directions-body">
              <header className="hours-directions-card-head">
                <IconPin />
                <h3 className="hours-directions-card-label">DIRECTIONS</h3>
              </header>

              <address className="hours-directions-address">
                5955 Melrose Avenue
                <br />
                Los Angeles, CA 90038
              </address>

              <div className="hours-directions-card-divider" aria-hidden="true" />

              <ul className="hours-directions-details">
                <li>
                  <IconCar />
                  <span>Valet parking available</span>
                </li>
                <li>
                  <IconPhone />
                  <a href="tel:+13234604170">(323) 460-4170</a>
                </li>
                <li>
                  <IconNav />
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=5955+Melrose+Avenue+Los+Angeles+CA+90038"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hours-directions-link"
                  >
                    Get Directions
                    <span className="hours-directions-link-arrow" aria-hidden="true">
                      →
                    </span>
                  </a>
                </li>
              </ul>
            </div>

            <DirectionsMap />
          </article>
        </div>

        <div className="hours-directions-footer">
          <Link href="/reservations" className="hours-directions-cta">
            MAKE A RESERVATION
            <span className="hours-directions-cta-arrow" aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
