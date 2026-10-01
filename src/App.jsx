import React, { useState, useEffect } from "react";
import Navbar from "./components/common/Navbar";
import HeroSection from "./components/sections/HeroSection";
import ProfileSection from "./components/sections/ProfileSection";
import AiStackSection from "./components/sections/AiStackSection";
import ProjectLabSection from "./components/sections/ProjectLabSection";
import HowIBuildSection from "./components/sections/HowIBuildSection";
import EducationSection from "./components/sections/EducationSection";
import ContactSection from "./components/sections/ContactSection";
import Footer from "./components/common/Footer";
import ResumeModal from "./components/common/ResumeModal";

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // Permanently lock dark mode class on <html> element
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  // Section observer on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "profile", "stack", "lab", "process", "education", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-[#08090e] min-h-screen text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950">
      {/* Floating Sticky Navigation */}
      <Navbar
        activeSection={activeSection}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Content Flow */}
      <main>
        {/* 01 — INTRO / SYSTEM STATUS */}
        <HeroSection onOpenResume={() => setIsResumeOpen(true)} />

        {/* 02 — ABOUT / PROFILE */}
        <ProfileSection />

        {/* 03 — AI STACK */}
        <AiStackSection />

        {/* 04 — PROJECT LAB */}
        <ProjectLabSection />

        {/* 05 — HOW I BUILD (PROCESS) */}
        <HowIBuildSection />

        {/* 06 — EDUCATION */}
        <EducationSection />

        {/* 07 — CONTACT */}
        <ContactSection onOpenResume={() => setIsResumeOpen(true)} />
      </main>

      {/* Signature Footer */}
      <Footer />

      {/* Resume Viewer & Download Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
