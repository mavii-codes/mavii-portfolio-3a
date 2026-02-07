"use client";

import { Button } from "@/components/ui/button";
import { ProfileCard } from "@/components/common/ProfileCard";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 items-start max-w-6xl mx-auto">
        <div className="space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">
            About Me
          </h1>
          <p className="text-foreground leading-relaxed">
            Hi, I&apos;m Marvin Barro—an aspiring frontend developer building modern, flexible layouts for portfolios, landing pages, and product ideas. My approach: think like a designer, code like an engineer, and keep empathy at the center.
          </p>
          <p className="text-foreground leading-relaxed">
            Outside of code, I lean on music and gaming to recharge, drawing inspiration from pacing, color palettes, and storytelling. All of that informs how I re-arrange interfaces to feel balanced and memorable.
          </p>
          <Button className="rounded-lg">Button Here</Button>
        </div>
        <ProfileCard variant="about" />
      </div>
    </div>
  );
}
