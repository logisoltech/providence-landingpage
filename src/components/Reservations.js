"use client";

import { useState } from "react";

const TABLE_IMAGE =
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1600&q=85";
const TABLE_IMAGE_FALLBACK =
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1600&q=85";

const FEATURES = [
  {
    title: "Easy Booking",
    text: "Simple and seamless reservation process.",
    Icon: IconCalendarFeature,
  },
  {
    title: "Exceptional Service",
    text: "Our team ensures a refined dining experience.",
    Icon: IconExperience,
  },
  {
    title: "Memorable Evenings",
    text: "Experience award-winning hospitality and cuisine.",
    Icon: IconHeart,
  },
];

function TableImage() {
  const [src, setSrc] = useState(TABLE_IMAGE);
  const [failed, setFailed] = useState(false);

  if (failed) {
    return <div className="reservations-visual-fallback" aria-hidden="true" />;
  }

  return (
    <img
      className="reservations-visual-img"
      src={src}
      alt=""
      loading="lazy"
      decoding="async"
      onError={() => {
        if (src !== TABLE_IMAGE_FALLBACK) setSrc(TABLE_IMAGE_FALLBACK);
        else setFailed(true);
      }}
    />
  );
}

function IconCalendar() {
  return (
    <svg className="reservations-field-icon-svg" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="5" width="18" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="1.35" />
      <path d="M8 3v3M16 3v3M3 10h18" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" />
    </svg>
  );
}

function IconClock() {
  return (
    <svg className="reservations-field-icon-svg" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.35" />
      <path d="M12 7v5l3 2" fill="none" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" />
    </svg>
  );
}

function IconGuests() {
  return (
    <svg className="reservations-field-icon-svg" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="9" cy="8" r="3" fill="none" stroke="currentColor" strokeWidth="1.35" />
      <path
        d="M3 20c0-3.3 2.7-5 6-5s6 1.7 6 5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
      />
      <circle cx="17" cy="9" r="2.2" fill="none" stroke="currentColor" strokeWidth="1.35" />
      <path
        d="M15 20c0.2-2.2 1.6-3.5 4-3.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconPerson() {
  return (
    <svg className="reservations-field-icon-svg" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="8" r="3.5" fill="none" stroke="currentColor" strokeWidth="1.35" />
      <path
        d="M5 20c0-3.9 3.1-7 7-7s7 3.1 7 7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconPhone() {
  return (
    <svg className="reservations-field-icon-svg" viewBox="0 0 24 24" aria-hidden="true">
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
    <svg className="reservations-field-icon-svg" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="2" y="5" width="20" height="14" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.35" />
      <path d="M2 7l10 7 10-7" fill="none" stroke="currentColor" strokeWidth="1.35" strokeLinejoin="round" />
    </svg>
  );
}

function IconNote() {
  return (
    <svg className="reservations-field-icon-svg" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M4 5h12l4 4v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinejoin="round"
      />
      <path d="M16 5v4h4M8 13h8M8 17h6" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" />
    </svg>
  );
}

function IconCalendarFeature() {
  return (
    <svg className="reservations-perk-icon-svg" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="5" width="18" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="1.35" />
      <path d="M8 3v3M16 3v3M3 10h18" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" />
    </svg>
  );
}

function IconExperience() {
  return (
    <svg className="reservations-perk-icon-svg" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M4 10h16v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinejoin="round"
      />
      <path d="M4 14h16M8 10V7a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v3" fill="none" stroke="currentColor" strokeWidth="1.35" />
    </svg>
  );
}

function IconHeart() {
  return (
    <svg className="reservations-perk-icon-svg" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 20s-6.5-4.2-8.5-8.2C2.2 8.5 4.4 5 7.5 5c1.7 0 3.2 0.9 4 2.2C12.3 5.9 13.8 5 15.5 5c3.1 0 5.3 3.5 4 6.8C18.5 15.8 12 20 12 20z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FormField({ id, label, icon: Icon, type = "text", placeholder, half, children }) {
  return (
    <div className={`reservations-field${half ? " reservations-field--half" : ""}`}>
      <label className="reservations-field-label" htmlFor={id}>
        {label}
      </label>
      <div className="reservations-field-control">
        <span className="reservations-field-icon" aria-hidden="true">
          <Icon />
        </span>
        {children || (
          <input
            id={id}
            name={id}
            type={type}
            className="reservations-input"
            placeholder={placeholder}
            autoComplete={type === "email" ? "email" : type === "tel" ? "tel" : "off"}
          />
        )}
      </div>
    </div>
  );
}

export default function Reservations() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <section className="reservations" aria-labelledby="reservations-heading">
      <div className="reservations-bg" aria-hidden="true" />

      <div className="reservations-inner">
        <header className="reservations-header">
          <h2 id="reservations-heading" className="reservations-title">
            Reservations
          </h2>
          <p className="reservations-subtitle">We look forward to welcoming you.</p>
        </header>

        <div className="reservations-panel">
          <div className="reservations-visual">
            <TableImage />
            <div className="reservations-visual-overlay" aria-hidden="true" />
            <div className="reservations-visual-copy">
              <p className="reservations-visual-heading">
                <span className="reservations-visual-heading-line">Your table</span>
                <span className="reservations-visual-heading-line">awaits.</span>
              </p>
              <p className="reservations-visual-text">
                Reserve your experience for an unforgettable evening at Providence.
              </p>
            </div>
          </div>

          <div className="reservations-form-wrap">
            <div className="reservations-form-head">
              <span className="reservations-form-head-icon" aria-hidden="true">
                <IconCalendar />
              </span>
              <p className="reservations-form-kicker">BOOK A TABLE</p>
            </div>

            <form className="reservations-form" onSubmit={handleSubmit} noValidate>
              <div className="reservations-form-row reservations-form-row--split">
                <FormField
                  id="reservation-date"
                  label="DATE"
                  icon={IconCalendar}
                  type="date"
                  placeholder="Select date"
                  half
                />
                <FormField
                  id="reservation-time"
                  label="TIME"
                  icon={IconClock}
                  type="time"
                  placeholder="Select time"
                  half
                />
              </div>

              <FormField id="reservation-party" label="PARTY SIZE" icon={IconGuests}>
                <select
                  id="reservation-party"
                  name="reservation-party"
                  className="reservations-input reservations-select"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select party size
                  </option>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                    <option key={n} value={String(n)}>
                      {n} {n === 1 ? "Guest" : "Guests"}
                    </option>
                  ))}
                </select>
              </FormField>

              <div className="reservations-form-row reservations-form-row--split">
                <FormField
                  id="reservation-name"
                  label="NAME"
                  icon={IconPerson}
                  placeholder="Guest name"
                  half
                />
                <FormField
                  id="reservation-phone"
                  label="PHONE"
                  icon={IconPhone}
                  type="tel"
                  placeholder="Phone number"
                  half
                />
              </div>

              <FormField
                id="reservation-email"
                label="EMAIL"
                icon={IconEnvelope}
                type="email"
                placeholder="Email address"
              />

              <FormField id="reservation-notes" label="SPECIAL REQUESTS (OPTIONAL)" icon={IconNote}>
                <textarea
                  id="reservation-notes"
                  name="reservation-notes"
                  className="reservations-input reservations-textarea"
                  placeholder="Dietary preferences, celebration notes, or special requests"
                  rows={3}
                />
              </FormField>

              <button type="submit" className="reservations-submit">
                FIND A TABLE
                <span className="reservations-submit-arrow" aria-hidden="true">
                  →
                </span>
              </button>
            </form>
          </div>
        </div>

        <ul className="reservations-perks">
          {FEATURES.map(({ title, text, Icon }) => (
            <li key={title} className="reservations-perk">
              <span className="reservations-perk-icon-wrap" aria-hidden="true">
                <Icon />
              </span>
              <div className="reservations-perk-text">
                <p className="reservations-perk-title">{title}</p>
                <p className="reservations-perk-desc">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
