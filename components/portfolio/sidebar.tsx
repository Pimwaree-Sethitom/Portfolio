"use client";

import Image from "next/image";
import { Github, Linkedin, Globe, Mail, MapPin, Gitlab, Phone } from "lucide-react";

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/Pimwaree-Sethitom",
    label: "GitHub",
  },
  {
    icon: Gitlab,
    href: "https://gitlab.com/Pimwaree-Sethitom",
    label: "GitLab",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/pimwaree-sethitom-8352813b4/",
    label: "LinkedIn",
  },
  {
    icon: Globe,
    href: "#",
    label: "Portfolio",
  },
];

export function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-96 bg-sidebar border-r border-sidebar-border p-8 flex flex-col justify-between overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/5 pointer-events-none" />

      <div className="relative z-10">
        {/* Profile Photo */}
        <div className="mb-6 flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full blur opacity-30 group-hover:opacity-60 transition-opacity duration-300" />
            <div className="relative w-32 h-32 rounded-full bg-secondary border-2 border-border overflow-hidden">
              <Image
                src="/image/profile.jpeg"
                alt="Profile Photo"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Name and Title */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-foreground mb-1">Pimwaree Sethitom</h1>
          <p className="text-primary font-medium">Software Developer</p>
        </div>

        {/* Tagline */}
        <p className="text-muted-foreground text-sm text-center mb-6 leading-relaxed">
          Passionate about building modern web applications and exploring new technologies.
        </p>

        {/* Location and Email */}
        <div className="space-y-4 mb-8">
          <div className="flex items-start gap-3 text-muted-foreground">
            <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <span className="text-sm leading-relaxed">337 Moo 7, Ban Kha, Mueang Lampang, Lampang 52100, Thailand</span>
          </div>
          <div className="flex items-center gap-3 text-muted-foreground">
            <Mail className="w-5 h-5 text-primary shrink-0" />
            <a
              href="mailto:pimwareesethitom@gmail.com"
              className="text-sm hover:text-primary transition-colors truncate"
            >
              pimwareesethitom@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-3 text-muted-foreground">
            <Phone className="w-5 h-5 text-primary shrink-0" />
            <a
              href="tel:0989611341"
              className="text-sm hover:text-primary transition-colors"
            >
              098-961-1341
            </a>
          </div>
        </div>

        {/* Status indicator */}
        <div className="flex items-center gap-2 justify-center mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-xs text-muted-foreground">Available for work</span>
        </div>
      </div>

      {/* Social Links */}
      <div className="relative z-10">
        <div className="flex justify-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
              aria-label={link.label}
            >
              <link.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
          ))}
        </div>

        <p className="text-xs text-muted-foreground text-center mt-6">
          © 2026 Pimwaree Sethitom. All rights reserved.
        </p>
      </div>
    </aside>
  );
}
