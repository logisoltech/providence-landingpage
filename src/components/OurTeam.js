"use client";

import { useCallback, useId, useState } from "react";

const TEAM = [
  {
    name: "Michael Cimarusti",
    role: "Co-owner & Chef",
    image: "/michael-scaled.jpg",
    objectPosition: "58% 12%",
  },
  {
    name: "Donato Poto",
    role: "Co-owner & General Manager",
    image: "/donato.jpg",
    objectPosition: "52% 14%",
  },
  {
    name: "Tristan Aitchison",
    role: "Chef de Cuisine",
    image: "/tristan.png",
    objectPosition: "60% 12%",
  },
  {
    name: "David Osenbach",
    role: "Wine Director",
    image: "/david.png",
    objectPosition: "48% 18%",
  },
];

function ArrowIcon({ direction }) {
  const isPrev = direction === "prev";
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path
        d={isPrev ? "M14 7l-5 5 5 5" : "M10 7l5 5-5 5"}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function OurTeam() {
  const [activeIndex, setActiveIndex] = useState(0);
  const liveId = useId();
  const slideCount = TEAM.length;

  const goToPrevious = useCallback(() => {
    setActiveIndex((i) => (i - 1 + slideCount) % slideCount);
  }, [slideCount]);

  const goToNext = useCallback(() => {
    setActiveIndex((i) => (i + 1) % slideCount);
  }, [slideCount]);

  const member = TEAM[activeIndex];

  return (
    <section className="our-team" aria-labelledby="our-team-heading">
      <div className="our-team-inner">
        <h2 id="our-team-heading" className="our-team-title">
          The People Behind Providence
        </h2>

        <div
          className="our-team-carousel"
          role="region"
          aria-roledescription="carousel"
          aria-labelledby="our-team-heading"
        >
          <span id={liveId} className="our-team-visually-hidden" aria-live="polite">
            {member.name}, {member.role}
          </span>

          <div className="our-team-carousel-stage">
            <button
              type="button"
              className="our-team-nav-btn our-team-nav-btn--left"
              onClick={goToPrevious}
              aria-label="Previous team member"
            >
              <ArrowIcon direction="prev" />
            </button>

            <button
              type="button"
              className="our-team-nav-btn our-team-nav-btn--right"
              onClick={goToNext}
              aria-label="Next team member"
            >
              <ArrowIcon direction="next" />
            </button>

            <div
              className="our-team-slide"
              key={`${member.name}-${activeIndex}`}
            >
              <div className="our-team-portrait" aria-hidden="true">
                <img
                  className="our-team-portrait-img"
                  src={member.image}
                  alt=""
                  loading={activeIndex === 0 ? "eager" : "lazy"}
                  decoding="async"
                  style={{ objectPosition: member.objectPosition }}
                />
                <div className="our-team-portrait-fade" />
              </div>

              <div className="our-team-copy">
                <p className="our-team-name">{member.name}</p>
                <p className="our-team-role">{member.role}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
