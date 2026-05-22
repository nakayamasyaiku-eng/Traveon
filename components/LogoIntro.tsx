"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type LogoIntroProps = {
  alt: string;
  logoSrc: string;
  videoSrc: string;
};

export default function LogoIntro({ alt, logoSrc, videoSrc }: LogoIntroProps) {
  const [introDone, setIntroDone] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const finishIntro = () => {
    setIntroDone(true);
    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      finishIntro();
      return undefined;
    }

    timeoutRef.current = window.setTimeout(finishIntro, 15000);

    return () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const syncFallbackToVideoDuration = (duration: number) => {
    if (!Number.isFinite(duration) || duration <= 0) {
      return;
    }

    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = window.setTimeout(finishIntro, Math.ceil((duration + 0.4) * 1000));
  };

  return (
    <div className="logo-intro" aria-label={alt}>
      {!introDone ? (
        <video
          aria-hidden="true"
          autoPlay
          className={`logo-intro-video ${introDone ? "is-hidden" : ""}`}
          muted
          onEnded={finishIntro}
          onError={finishIntro}
          onLoadedMetadata={(event) => syncFallbackToVideoDuration(event.currentTarget.duration)}
          playsInline
          preload="auto"
          src={videoSrc}
        />
      ) : null}
      <Image
        src={logoSrc}
        alt={alt}
        width={920}
        height={410}
        priority
        className={`brand-showcase-logo logo-intro-static ${introDone ? "is-visible" : ""}`}
        style={{ opacity: introDone ? 1 : 0 }}
      />
    </div>
  );
}
