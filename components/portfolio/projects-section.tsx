"use client";

import { Github, ExternalLink, Folder } from "lucide-react";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";

const projects = [
  {
    title: "Research Management System",
    description: "A full-stack e-commerce solution with real-time inventory management, secure payments, and admin dashboard.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com",
    demo: "https://example.com",
    image: "/image/profile.jpeg",
  },
  {
    title: "Nash_GUI",
    description: "Collaborative task management application with drag-and-drop interface, team features, and real-time updates.",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    github: "https://github.com",
    demo: "https://example.com",
    image: "/image/profile.jpeg",
  }
];

function AnimatedCard({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0) scale(1)" : "translateY(32px) scale(0.96)",
        transition: "opacity 0.55s ease, transform 0.55s ease",
      }}
    >
      {children}
    </div>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 px-8">
      <AnimatedCard delay={-200}>
        <h2 className="text-3xl font-bold text-foreground mb-2">Projects</h2>
        <div className="w-16 h-1 bg-primary rounded-full mb-8" />
      </AnimatedCard>

      <div className="grid grid-cols-1 gap-6">
        {projects.map((project, index) => (
          <AnimatedCard key={index} delay={index * 150}>
            <div className="card-hover overflow-hidden rounded-xl bg-card border border-border group flex flex-col h-full">
              {project.image && (
                <div className="relative w-full h-64 overflow-hidden border-b border-border">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              )}

              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Folder className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex items-center gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="View GitHub repository"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="View live demo"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="font-semibold text-foreground text-lg mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border/50">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-muted-foreground border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedCard>
        ))}
      </div>
    </section>
  );
}
