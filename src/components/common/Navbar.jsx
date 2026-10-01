import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Cpu, ArrowUpRight, FileText } from "lucide-react";
import { PORTFOLIO_DATA } from "../../data/portfolioData";
import { LinkedinIcon, GithubIcon } from "./SocialIcons";

export default function Navbar({ activeSection, onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { personalInfo } = PORTFOLIO_DATA;

  const navLinks = [
    { id: "profile", label: "01 PROFILE", href: "#profile" },
    { id: "stack", label: "02 STACK", href: "#stack" },
    { id: "lab", label: "03 LAB", href: "#lab" },
    { id: "process", label: "04 PROCESS", href: "#process" },
    { id: "contact", label: "05 CONTACT", href: "#contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#08090e]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Name */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero")}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500/20 group-hover:border-indigo-400 transition-all">
              <Cpu className="w-4 h-4 animate-pulse" />
            </div>
            <span className="font-display font-bold text-sm sm:text-base tracking-wider text-slate-100 group-hover:text-cyan-400 transition-colors">
              SALONI.PATIDAR
            </span>
          </a>

          {/* Desktop Nav Items & Control Group */}
          <nav className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-4 glass-panel px-4 py-1.5 rounded-full border border-white/10">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`font-mono text-xs tracking-wider transition-colors py-1 px-2 rounded-md ${
                    activeSection === link.id
                      ? "text-cyan-400 bg-cyan-500/10 font-medium"
                      : "text-slate-400 hover:text-slate-100"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Social Icons (LinkedIn & GitHub) */}
            <div className="flex items-center gap-1.5 glass-panel px-2.5 py-1 rounded-full border border-white/10">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn Profile"
                className="p-1.5 text-slate-400 hover:text-indigo-400 transition-colors rounded-lg"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub Profile"
                className="p-1.5 text-slate-400 hover:text-cyan-400 transition-colors rounded-lg"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            </div>

            {/* Resume Action Button */}
            <button
              onClick={onOpenResume}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-mono text-xs font-semibold tracking-wider transition-all shadow-md cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>RESUME</span>
            </button>

            {/* Status indicator badge */}
            <div className="flex items-center gap-2 glass-panel px-3 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-950/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-mono text-[10px] font-semibold tracking-wider text-emerald-400 uppercase">
                AVAILABLE FOR OPPORTUNITIES
              </span>
            </div>
          </nav>

          {/* Mobile Navigation controls */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Resume button for mobile */}
            <button
              onClick={onOpenResume}
              className="p-2 rounded-lg bg-indigo-600 text-white flex items-center gap-1 font-mono text-xs"
            >
              <FileText className="w-4 h-4" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900 border border-white/10 text-slate-300"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Animated Overlay Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-[#08090e]/98 backdrop-blur-2xl flex flex-col justify-between p-6 pt-24 lg:hidden border-b border-white/10"
          >
            <div className="space-y-6">
              <div className="font-mono text-xs text-indigo-400 tracking-widest border-b border-white/10 pb-2">
                // SYSTEM DIRECTORY
              </div>
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link, idx) => (
                  <motion.a
                    key={link.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + idx * 0.05 }}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="flex items-center justify-between group py-2 text-lg font-display font-medium text-slate-200 hover:text-cyan-400 border-b border-white/5"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                  </motion.a>
                ))}
              </nav>

              {/* Social Links Row in Mobile Menu */}
              <div className="flex items-center gap-4 pt-2">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-500/10 text-indigo-400 font-mono text-xs border border-indigo-500/30"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LINKEDIN</span>
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500/10 text-cyan-400 font-mono text-xs border border-cyan-500/30"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GITHUB</span>
                </a>
              </div>
            </div>

            <div className="space-y-4 pt-6 border-t border-white/10">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full py-3 rounded-xl bg-indigo-600 text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4" />
                <span>VIEW & DOWNLOAD RESUME</span>
              </button>

              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="font-mono text-xs text-emerald-400 font-semibold tracking-wider">
                  STATUS: AVAILABLE FOR OPPORTUNITIES
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
