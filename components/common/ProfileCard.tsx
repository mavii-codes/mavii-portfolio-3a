"use client";

import { useState } from "react";

const PLACEHOLDER_IMAGE = "https://ui-avatars.com/api/?name=Marvin+Barro&size=400&background=81c784&color=fff";

type ProfileCardProps = {
  /** "home" uses homepic.png, "about" uses aboutpic.jpg */
  variant?: "home" | "about";
};

const IMAGES = {
  home: ["/homepic.png", "/homepic.jpg"],
  about: ["/aboutpic.jpg", "/aboutpic.png"],
} as const;

export function ProfileCard({ variant = "home" }: ProfileCardProps) {
  const sources = IMAGES[variant];
  const [src, setSrc] = useState(sources[0]);
  const [tryIndex, setTryIndex] = useState(0);

  const handleError = () => {
    const next = tryIndex + 1;
    if (sources[next]) {
      setTryIndex(next);
      setSrc(sources[next]);
    } else {
      setSrc(PLACEHOLDER_IMAGE);
    }
  };

  return (
    <div className="relative flex justify-end">
      <div className="relative w-full max-w-[380px]">
        <div className="absolute -inset-4 bg-primary/20 rounded-[2rem] blur-xl" />
        <div className="relative bg-card rounded-[1.75rem] overflow-hidden shadow-sm border border-border/50">
          <div className="aspect-[3/4] relative bg-muted overflow-hidden">
            <img
              src={src}
              alt="Marvin Barro"
              className="absolute inset-0 w-full h-full object-cover"
              onError={handleError}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
