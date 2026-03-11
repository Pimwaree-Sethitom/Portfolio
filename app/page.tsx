import { Sidebar } from "@/components/portfolio/sidebar";
import StarryBackground from "@/components/StarryBackground";
import { MouseGlow } from "@/components/portfolio/mouse-glow";
import { MobileSidebar } from "@/components/portfolio/mobile-sidebar";
import { Navigation } from "@/components/portfolio/navigation";
import { AboutSection } from "@/components/portfolio/about-section";
import { EducationSection } from "@/components/portfolio/education-section";
import { ProjectsSection } from "@/components/portfolio/projects-section";
import { TechStackSection } from "@/components/portfolio/tech-stack-section";
import { ContactSection } from "@/components/portfolio/contact-section";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-transparent">
      <StarryBackground />
      <MouseGlow />
      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      {/* Mobile Sidebar */}
      <MobileSidebar />

      {/* Main Content */}
      <main className="lg:ml-96 min-h-screen w-full lg:w-[calc(100%-24rem)]">
        {/* Desktop Navigation */}
        <div className="hidden lg:block sticky top-0 z-50">
          <Navigation />
        </div>

        {/* Mobile spacer */}
        <div className="lg:hidden h-16" />

        {/* Content Sections */}
        <div className="max-w-5xl mx-auto w-full px-4 md:px-8">
          <AboutSection />
          <EducationSection />
          <ProjectsSection />
          <TechStackSection />
          <ContactSection />
        </div>
      </main>
    </div>
  );
}
