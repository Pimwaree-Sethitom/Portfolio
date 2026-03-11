"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X, Github, Linkedin, Globe, Mail, MapPin, Gitlab } from "lucide-react";
import { cn } from "@/lib/utils";

const socialLinks = [
  { icon: Github, href: "https://github.com/Pimwaree-Sethitom", label: "GitHub" },
  { icon: Gitlab, href: "https://gitlab.com/Pimwaree-Sethitom", label: "GitLab" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/pimwaree-sethitom-8352813b4/", label: "LinkedIn" },
  { icon: Globe, href: "#", label: "Portfolio" },
];

export function MobileSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-full border border-border overflow-hidden">
              <Image src="/image/profile.jpeg" alt="Profile" fill className="object-cover" />
            </div>
            <div>
              <p className="font-semibold text-foreground text-sm">Pimwaree Sethitom</p>
              <p className="text-xs text-primary">Software Developer</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 z-40 bg-background transition-transform duration-300",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="pt-20 p-6 h-full overflow-auto">
          {/* Profile */}
          <div className="text-center mb-8">
            <div className="relative w-24 h-24 mx-auto rounded-full border-2 border-border mb-4 overflow-hidden">
              <Image src="/image/profile.jpeg" alt="Profile" fill className="object-cover" />
            </div>
            <h2 className="text-xl font-bold text-foreground">Pimwaree Sethitom</h2>
            <p className="text-primary">Software Developer</p>
          </div>

          {/* Info */}
          <div className="space-y-3 mb-8">
            <div className="flex items-center gap-3 text-muted-foreground justify-center">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm">337 Moo 7, Ban Kha, Lampang, Thailand</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground justify-center">
              <Mail className="w-4 h-4 text-primary" />
              <span className="text-sm">pimwareesethitom@gmail.com</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="mb-8">
            <ul className="space-y-2">
              {["About", "Education", "Projects", "Tech Stack", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    onClick={() => setIsOpen(false)}
                    className="block py-3 px-4 rounded-lg bg-secondary text-foreground hover:bg-primary/10 hover:text-primary transition-colors text-center"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Links */}
          <div className="flex justify-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-lg bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
