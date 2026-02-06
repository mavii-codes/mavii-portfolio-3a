"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  const [showContent, setShowContent] = useState(false);

  return (
    <div className="p-8 max-w-3xl mx-auto text-center">
      
      <h1 className="text-3xl font-bold mb-6">About Me</h1>
        <div className="mt-6">
          <p className="mb-4">
            Hi, I’m Marvin Barro—an aspiring frontend developer building modern, flexible layouts for portfolios, landing pages, and product ideas. My approach: think like a designer, code like an engineer, and keep empathy at the center.

Outside of code, I lean on music and gaming to recharge, drawing inspiration from pacing, color palettes, and storytelling. All of that informs how I re-arrange interfaces to feel balanced and memorable.
          </p>
        </div>
  <Button>Button Here</Button>
    </div>
  );
}
