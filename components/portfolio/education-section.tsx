"use client";

import { GraduationCap, Calendar } from "lucide-react";
import { useRef, useEffect, useState } from "react";

const education = [
  {
    degree: "Bachelor of Science in Information Technology",
    institution: "University of Phayao",
    period: "2022 - 2026",
    description: "Focused on software development, web technologies, and building practical applications. Graduated with GPA 3.74.",
  },
  {
    degree: "Software Developer Intern",
    institution: "National Astronomical Research Institute of Thailand (NARIT)",
    period: "Nov 2025 - Feb 2026",
    description: "Developed and improved software related to astronomical observation systems and research support tools.",
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

export function EducationSection() {
  return (
    <section id="education" className="py-16 px-8">
      <AnimatedCard delay={-200}>
        <h2 className="text-3xl font-bold text-foreground mb-2">Education & Experience</h2>
        <div className="w-16 h-1 bg-primary rounded-full mb-8" />
      </AnimatedCard>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-6 top-0 bottom-0 w-px bg-border" />

        <div className="space-y-8">
          {education.map((item, index) => (
            <AnimatedCard key={index} delay={index * 150}>
              <div className="relative pl-16">
                {/* Timeline dot */}
                <div className="absolute left-4 top-2 w-5 h-5 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>

                <div className="card-hover p-6 rounded-xl bg-card border border-border">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <GraduationCap className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{item.degree}</h3>
                        <p className="text-sm text-primary">{item.institution}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{item.period}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
