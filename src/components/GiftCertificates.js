"use client";

import Link from "next/link";
import { useState } from "react";

const IMG_THOUGHTFUL =
  "https://images.unsplash.com/photo-1513885535751-228dcbbd630e?auto=format&fit=crop&w=1400&q=85";
const IMG_THOUGHTFUL_FALLBACK =
  "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1400&q=85";

const IMG_PURCHASE =
  "https://images.unsplash.com/photo-1607083206869-6314a287b8a9?auto=format&fit=crop&w=1400&q=85";
const IMG_PURCHASE_FALLBACK =
  "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=1400&q=85";

function FeatureImage({ src, fallback, alt }) {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [failed, setFailed] = useState(false);

  function handleError() {
    if (fallback && currentSrc !== fallback) {
      setCurrentSrc(fallback);
      return;
    }
    setFailed(true);
  }

  if (failed) {
    return <div className="gift-certificates-feature-media-fallback" aria-hidden="true" />;
  }

  return (
    <img
      className="gift-certificates-feature-media-img"
      src={currentSrc}
      alt={alt}
      loading="lazy"
      decoding="async"
      onError={handleError}
    />
  );
}

function IconGift() {
  return (
    <svg className="gift-certificates-feature-icon-svg" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="8" width="18" height="13" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.35" />
      <path d="M12 8v13M3 12h18" stroke="currentColor" strokeWidth="1.35" />
      <path
        d="M12 8c-2.2 0-4-1.35-4-3.2S9.8 2 12 2s4 1.35 4 3.2S14.2 8 12 8z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.35"
      />
    </svg>
  );
}

function IconCard() {
  return (
    <svg className="gift-certificates-feature-icon-svg" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="2" y="5" width="20" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="1.35" />
      <path d="M2 10h20" stroke="currentColor" strokeWidth="1.35" />
      <path d="M6 15h4" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" />
    </svg>
  );
}

function IconEnvelope() {
  return (
    <svg className="gift-certificates-balance-icon-svg" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="2" y="5" width="20" height="14" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.35" />
      <path
        d="M2 7l10 7 10-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function GiftCertificates() {
  return (
    <section className="gift-certificates" aria-labelledby="gift-certificates-heading">
      <div className="gift-certificates-bg" aria-hidden="true" />

      <div className="gift-certificates-inner">
        <header className="gift-certificates-header">
          <p className="gift-certificates-kicker">THE PERFECT GIFT</p>
          <h2 id="gift-certificates-heading" className="gift-certificates-title">
            Gift Certificates
          </h2>
          <p className="gift-certificates-lede">
            Share an unforgettable dining experience.
          </p>
        </header>

        <div className="gift-certificates-features">
          <article className="gift-certificates-feature-card gift-certificates-feature-card--thoughtful">
            <div className="gift-certificates-feature-media">
              <FeatureImage
                src={IMG_THOUGHTFUL}
                fallback={IMG_THOUGHTFUL_FALLBACK}
                alt=""
              />
            </div>
            <div className="gift-certificates-feature-body">
              <span className="gift-certificates-feature-icon" aria-hidden="true">
                <IconGift />
              </span>
              <h3 className="gift-certificates-feature-heading">Elegant &amp; Memorable</h3>
              <p className="gift-certificates-feature-text">
                Providence gift certificates create unforgettable fine dining experiences for
                every special occasion.
              </p>
              <Link href="/gift-certificates" className="gift-certificates-feature-cta">
                PURCHASE NOW
                <span className="gift-certificates-feature-cta-arrow" aria-hidden="true">
                  →
                </span>
              </Link>
            </div>
          </article>

          <article className="gift-certificates-feature-card gift-certificates-feature-card--purchase">
            <div className="gift-certificates-feature-body">
              <span className="gift-certificates-feature-icon" aria-hidden="true">
                <IconCard />
              </span>
              <h3 className="gift-certificates-feature-heading">Flexible &amp; Convenient</h3>
              <p className="gift-certificates-feature-text">
                Available in custom amounts and redeemable for dining experiences at Providence.
              </p>
              <Link href="/gift-certificates" className="gift-certificates-feature-cta">
                ORDER ONLINE
                <span className="gift-certificates-feature-cta-arrow" aria-hidden="true">
                  →
                </span>
              </Link>
            </div>
            <div className="gift-certificates-feature-media">
              <FeatureImage
                src={IMG_PURCHASE}
                fallback={IMG_PURCHASE_FALLBACK}
                alt=""
              />
            </div>
          </article>
        </div>

        <footer className="gift-certificates-footer">
          <Link href="/gift-certificates/balance" className="gift-certificates-balance-cta">
            <IconEnvelope />
            <span>CHECK BALANCE</span>
            <span className="gift-certificates-balance-cta-arrow" aria-hidden="true">
              →
            </span>
          </Link>
        </footer>
      </div>
    </section>
  );
}
