"use client";
import { useEffect, useState } from "react";

export default function FlightPath() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
      <svg
        className="w-full h-full"
        viewBox="0 0 1440 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <path
          d="M-100,600 C300,500 600,200 1500,100"
          stroke="#0A2A66"
          strokeWidth="1.5"
          strokeDasharray="1000"
          strokeDashoffset="1000"
          className="animate-flight-path"
        />
      </svg>
    </div>
  );
}