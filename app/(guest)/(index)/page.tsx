"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  const [showContent, setShowContent] = useState(false);

  return (
    <div className="p-8 max-w-3xl mx-auto text-center">
      <h1 className="text-3xl font-bold mb-6">Home Page</h1>

    
        <div className="mt-6">
          <h2 className="text-3xl font-bold mb-4">Hi, I’m Marvin Barro • Frontend Developer</h2>
          <p className="mb-4">
            𝙔𝙤𝙪𝙧 𝙫𝙞𝙨𝙞𝙤𝙣, 𝙢𝙮 𝙘𝙤𝙙𝙚.
          </p>
          <Button>Button Here</Button>
        </div>
      
    </div>
  );
}
