"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const GITHUB_URL = "https://github.com/mavii-codes";
const EMAIL = "barromrvn@gmail.com";
const PHONE = "09150388050";

export function Header() {
  return (
    <header className="border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="rounded-full bg-primary px-5 py-2 text-sm font-bold text-primary-foreground">
            Portfolio
          </Link>
          <nav>
            <ul className="flex items-center gap-5 text-sm font-medium text-foreground">
              <li><Link href="/" className="hover:text-primary">Home</Link></li>
              <li><Link href="/about" className="hover:text-primary">About</Link></li>
              <li><Link href="/projects" className="hover:text-primary">Projects</Link></li>
            </ul>
          </nav>
          <div className="flex gap-3 items-center">
            <ThemeToggle />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="rounded-lg">Contact</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-64 rounded-lg">
                <DropdownMenuItem asChild>
                  <a href={`tel:${PHONE}`}>Phone: {PHONE}</a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href={`mailto:${EMAIL}`}>Email: {EMAIL}</a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">GitHub</a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
}
