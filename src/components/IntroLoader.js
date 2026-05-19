"use client";

import Image from "next/image";
import { useCallback, useLayoutEffect, useRef, useState } from "react";

/** Remote only — Mixkit CDN (professional chef in restaurant kitchen). */
const INTRO_VIDEO_SRC =
  "https://assets.mixkit.co/videos/39535/39535-720.mp4";

const LOGO_PHASE_MS = 2000;
const MAIN_END_MS = 4000;
const EXIT_DURATION_MS = 700;
const MAIN_EXIT_START_MS = MAIN_END_MS - EXIT_DURATION_MS;
const FALLBACK_LOGO_MS = 2000;

export default function IntroLoader() {
  const [finished, setFinished] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [hideVideo, setHideVideo] = useState(false);

  const timersRef = useRef([]);
  const cancelledRef = useRef(false);
  const fallbackUsedRef = useRef(false);
  const prevOverflowRef = useRef("");

  const clearTimers = useCallback(() => {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
  }, []);

  const finalize = useCallback(() => {
    if (cancelledRef.current) return;
    document.body.style.overflow = prevOverflowRef.current || "";
    setFinished(true);
  }, []);

  const scheduleFallback = useCallback(() => {
    clearTimers();
    setHideVideo(true);
    setShowLogo(true);
    timersRef.current.push(
      setTimeout(() => {
        if (cancelledRef.current) return;
        setIsExiting(true);
      }, FALLBACK_LOGO_MS)
    );
    timersRef.current.push(
      setTimeout(() => {
        if (cancelledRef.current) return;
        finalize();
      }, FALLBACK_LOGO_MS + EXIT_DURATION_MS)
    );
  }, [clearTimers, finalize]);

  const scheduleMain = useCallback(() => {
    clearTimers();
    timersRef.current.push(
      setTimeout(() => {
        if (cancelledRef.current) return;
        setShowLogo(true);
      }, LOGO_PHASE_MS)
    );
    timersRef.current.push(
      setTimeout(() => {
        if (cancelledRef.current) return;
        setIsExiting(true);
      }, MAIN_EXIT_START_MS)
    );
    timersRef.current.push(
      setTimeout(() => {
        if (cancelledRef.current) return;
        finalize();
      }, MAIN_END_MS)
    );
  }, [clearTimers, finalize]);

  const scheduleRef = useRef({ scheduleFallback, scheduleMain });
  scheduleRef.current.scheduleFallback = scheduleFallback;
  scheduleRef.current.scheduleMain = scheduleMain;

  useLayoutEffect(() => {
    cancelledRef.current = false;
    prevOverflowRef.current = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    scheduleMain();

    return () => {
      cancelledRef.current = true;
      clearTimers();
      document.body.style.overflow = prevOverflowRef.current || "";
    };
  }, [clearTimers, scheduleMain]);

  const onVideoError = useCallback(() => {
    if (fallbackUsedRef.current) return;
    fallbackUsedRef.current = true;
    scheduleRef.current.scheduleFallback();
  }, []);

  if (finished) return null;

  return (
    <div
      className={[
        "intro-loader",
        showLogo ? "intro-loader--show-logo" : "",
        isExiting ? "intro-loader--exit" : "",
      ]
        .filter(Boolean)
        .join(" ")}
      aria-label="Site introduction"
    >
      <div className="intro-loader-video-shell" aria-hidden>
        {!hideVideo && (
          <video
            className="intro-loader-video"
            src={INTRO_VIDEO_SRC}
            autoPlay
            muted
            loop={false}
            playsInline
            preload="auto"
            onError={onVideoError}
          />
        )}
        <div className="intro-loader-cinematic-overlay" />
        <div className="intro-loader-vignette" />
      </div>

      <div className="intro-loader-logo-wrap">
        <Image
          src="/providence.png"
          alt="Providence"
          width={280}
          height={84}
          className="intro-loader-logo"
          priority
        />
      </div>
    </div>
  );
}
