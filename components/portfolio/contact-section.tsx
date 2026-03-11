"use client";

import { Mail, Github, Linkedin, Send, MessageSquare, Gitlab } from "lucide-react";
import { useRef, useEffect, useState } from "react";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "pimwareesethitom@gmail.com",
    href: "mailto:pimwareesethitom@gmail.com",
    color: "#EA4335",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@Pimwaree-Sethitom",
    href: "https://github.com/Pimwaree-Sethitom",
    color: "#FFFFFF",
  },
  {
    icon: Gitlab,
    label: "GitLab",
    value: "@Pimwaree-Sethitom",
    href: "https://gitlab.com/Pimwaree-Sethitom",
    color: "#FC6D26",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Pimwaree Sethitom",
    href: "https://www.linkedin.com/in/pimwaree-sethitom-8352813b4/",
    color: "#0A66C2",
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
      { threshold: 0.12 }
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

export function ContactSection() {
  return (
    <section id="contact" className="py-16 px-8 pb-24">
      <AnimatedCard delay={-200}>
        <h2 className="text-3xl font-bold text-foreground mb-2">Get In Touch</h2>
        <div className="w-16 h-1 bg-primary rounded-full mb-8" />
      </AnimatedCard>

      <div className="w-full">
        <AnimatedCard delay={0}>
          <div className="card-hover p-8 rounded-xl bg-card border border-border mb-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-lg mb-2">
                  {"Let's"} work together
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {"I'm"} always interested in hearing about new projects and opportunities.
                  Whether you have a question or just want to say hi, feel free to reach out!
                </p>
              </div>
            </div>

            <div className="flex justify-end">
              <a
                href="mailto:pimwareesethitom@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity group"
              >
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                Send me an email
              </a>
            </div>
          </div>
        </AnimatedCard>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {contactLinks.map((link, index) => (
            <AnimatedCard key={link.label} delay={100 + index * 80}>
              <a
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="card-hover p-5 rounded-xl bg-card border border-border group text-center block h-full"
              >
                <div
                  className="w-10 h-10 rounded-lg mx-auto mb-3 flex items-center justify-center transition-colors"
                  style={{ backgroundColor: `${link.color}15` }}
                >
                  <link.icon
                    className="w-5 h-5 transition-colors"
                    style={{ color: link.color }}
                  />
                </div>
                <p className="font-medium text-foreground text-sm mb-1">{link.label}</p>
                <p className="text-xs text-muted-foreground group-hover:text-primary transition-colors">
                  {link.value}
                </p>
              </a>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
