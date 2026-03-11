"use client";

import { Code2, Rocket, Lightbulb } from "lucide-react";
import { useRef, useEffect, useState } from "react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable and scalable code",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Building fast and optimized applications",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Always exploring new technologies",
  },
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
      { threshold: 0.15 }
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
        transform: visible ? "translateY(0) scale(1)" : "translateY(24px) scale(0.96)",
        transition: "opacity 0.5s ease, transform 0.5s ease",
      }}
    >
      {children}
    </div>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="py-16 px-8">
      <AnimatedCard delay={-200}>
        <h2 className="text-3xl font-bold text-foreground mb-2">About Me</h2>
        <div className="w-16 h-1 bg-primary rounded-full mb-8" />
      </AnimatedCard>

      <div className="space-y-6">
        <p className="text-muted-foreground leading-relaxed text-lg">
          {"I'm"} a <span className="text-primary font-medium">Junior Software Developer</span> with a strong interest in building modern web applications. I enjoy turning ideas into practical solutions and creating clean, user-friendly interfaces.
        </p>

        <p className="text-muted-foreground leading-relaxed">
          My development journey started with curiosity about how websites and systems work. Over time, {"I've"} developed skills in modern web technologies and gained experience building full-stack applications. {"I'm"} passionate about improving my coding skills, learning new technologies, and continuously growing as a developer.
        </p>

        <p className="text-muted-foreground leading-relaxed">
          As a junior developer, {"I'm"} eager to gain real-world experience, collaborate with other developers, and contribute to meaningful projects that create value for users.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
          {highlights.map((item, index) => (
            <AnimatedCard key={item.title} delay={index * 100}>
              <div className="card-hover p-6 rounded-xl bg-card border border-border group h-full">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
