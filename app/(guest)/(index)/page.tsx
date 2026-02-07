"use client";

import { Button } from "@/components/ui/button";
import { ProfileCard } from "@/components/common/ProfileCard";

export default function HomePage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 items-start max-w-6xl mx-auto">
        <div className="space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">
            Hi, I&apos;m Marvin Barro • Frontend Developer
          </h1>
          <p className="text-foreground italic">Your vision, my code.</p>
          <Button className="rounded-lg">Button Here</Button>
        </div>
        <ProfileCard variant="home" />
      </div>
    </div>
  );
}
