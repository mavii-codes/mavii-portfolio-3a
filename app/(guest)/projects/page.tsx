"use client"; // <-- Add this at the very top

import { Button } from "@/components/ui/button";

export default function ProjectsPage() {
  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Projects</h1>
      
      <p className="mb-6">
        These are some projects I’ve been working on as I dive into front-end development. I love designing clean, minimal, and user-friendly interfaces that feel calm, intuitive, and easy to navigate. You can also check out my work on my GitHub repository
.
      </p>

      <Button
        onClick={() => window.open("https://github.com/mavii-codes?tab=repositories", "_blank")}
      >
        View My GitHub Repository
      </Button>
    </div>
  );
}
