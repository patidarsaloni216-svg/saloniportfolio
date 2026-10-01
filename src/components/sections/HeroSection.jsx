import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Activity, Terminal, ArrowDown, ShieldCheck, Zap, Layers, FileText } from "lucide-react";
import { PORTFOLIO_DATA } from "../../data/portfolioData";
import SignatureAgentNetwork from "../common/SignatureAgentNetwork";
import { LinkedinIcon, GithubIcon } from "../common/SocialIcons";

export default function HeroSection({ onOpenResume }) {
  const { personalInfo, systemStatus } = PORTFOLIO_DATA;
  const [pulseCount, setPulseCount] = useState(1048);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulseCount((prev) => prev + Math.floor(Math.random() * 3) + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex flex-col justify-between overflow-hidden bg-grid-pattern bg-[#08090e]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        {/* Asymmetric Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Hero Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Section Index Marker */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-white/10 font-mono text-xs text-indigo-400">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
              <span>01 / INTRO</span>
            </div>

            {/* Massive Editorial Name */}
            <div className="space-y-1">
              <h1 className="font-display font-extrabold text-5xl sm:text-7xl xl:text-8xl tracking-tight text-white leading-[0.95]">
                SALONI
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-indigo-200 to-cyan-400">
                  PATIDAR
                </span>
              </h1>
            </div>

            {/* Sub-titles */}
            <div className="space-y-2 pt-2 border-l-2 border-indigo-500/40 pl-4">
              <p className="font-display font-semibold text-xl sm:text-2xl text-cyan-400">
                {personalInfo.role}
              </p>
              <p className="font-mono text-sm sm:text-base text-slate-400">
                {personalInfo.subRole}
              </p>
            </div>

            {/* Statement Quote */}
            <p className="font-sans text-lg sm:text-xl text-slate-300 max-w-xl font-normal leading-relaxed pt-2">
              "{personalInfo.tagline}"
            </p>

            {/* Quick Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <a
                href="#lab"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 text-white font-mono text-xs font-semibold tracking-wider uppercase hover:opacity-95 shadow-lg shadow-indigo-500/20 transition-all flex items-center gap-2 group"
              >
                <span>EXPLORE LAB</span>
                <Zap className="w-4 h-4 text-cyan-300 group-hover:translate-x-0.5 transition-transform" />
              </a>

              {/* View Resume Button */}
              <button
                onClick={onOpenResume}
                className="px-5 py-3.5 rounded-xl glass-panel text-slate-200 font-mono text-xs font-semibold tracking-wider uppercase hover:bg-white/10 transition-all border border-white/10 flex items-center gap-2 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-indigo-400" />
                <span>VIEW RESUME</span>
              </button>

              {/* Social Buttons */}
              <div className="flex items-center gap-2">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl glass-panel text-slate-300 hover:text-indigo-400 border border-white/10 transition-all"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl glass-panel text-slate-300 hover:text-cyan-400 border border-white/10 transition-all"
                  title="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive AI System Status HUD Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="glass-panel rounded-2xl p-6 border border-white/10 relative shadow-2xl overflow-hidden">
              {/* Top Panel Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-cyan-400" />
                  <span className="font-mono text-xs font-bold text-slate-200 tracking-wider">
                    SYSTEM.STATUS
                  </span>
                </div>
                <div className="flex items-center gap-1.5 font-mono text-[10px] text-slate-400">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>VERIFIED ARCHITECTURE</span>
                </div>
              </div>

              {/* Status List */}
              <div className="mt-5 space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between py-2 border-b border-white/5">
                  <span className="text-slate-400">AGENT NETWORK</span>
                  <span className="flex items-center gap-2 text-emerald-400 font-semibold">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    {systemStatus.agentNetwork}
                  </span>
                </div>

                <div className="flex items-center justify-between py-2 border-b border-white/5">
                  <span className="text-slate-400">LLM PIPELINE</span>
                  <span className="flex items-center gap-2 text-emerald-400 font-semibold">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    {systemStatus.llmPipeline}
                  </span>
                </div>

                <div className="flex items-center justify-between py-2 border-b border-white/5">
                  <span className="text-slate-400">RAG ENGINE</span>
                  <span className="flex items-center gap-2 text-cyan-400 font-semibold">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                    {systemStatus.ragEngine}
                  </span>
                </div>

                <div className="flex items-center justify-between py-2 border-b border-white/5">
                  <span className="text-slate-400">LANGGRAPH</span>
                  <span className="flex items-center gap-2 text-indigo-400 font-semibold">
                    <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
                    {systemStatus.langGraph}
                  </span>
                </div>

                <div className="flex items-center justify-between py-2 border-b border-white/5">
                  <span className="text-slate-400">API LAYER</span>
                  <span className="flex items-center gap-2 text-emerald-400 font-semibold">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    {systemStatus.apiLayer}
                  </span>
                </div>
              </div>

              {/* Current Focus Block */}
              <div className="mt-6 pt-4 border-t border-white/10 space-y-3">
                <div className="font-mono text-[11px] font-bold text-indigo-300 uppercase tracking-wider flex items-center gap-2">
                  <Layers className="w-3.5 h-3.5 text-indigo-400" />
                  <span>CURRENT FOCUS</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {systemStatus.currentFocus.map((focus, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-lg bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 font-mono text-xs font-medium"
                    >
                      {focus}
                    </span>
                  ))}
                </div>
              </div>

              {/* Telemetry live counter */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-slate-500">
                <div className="flex items-center gap-1.5">
                  <Activity className="w-3 h-3 text-cyan-400 animate-pulse" />
                  <span>EVENTS PROCESSED: {pulseCount}</span>
                </div>
                <span>LATENCY: {systemStatus.latencies.graphExecution}</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Signature Visual Element: Agent Topology Section */}
        <div className="mt-14 lg:mt-16">
          <SignatureAgentNetwork />
        </div>

        {/* Scroll Indicator */}
        <div className="mt-12 flex justify-center">
          <a
            href="#profile"
            className="flex flex-col items-center gap-2 text-slate-500 hover:text-cyan-400 transition-colors group"
          >
            <span className="font-mono text-[10px] tracking-widest uppercase">
              SCROLL FOR SYSTEM DATA
            </span>
            <ArrowDown className="w-4 h-4 animate-bounce text-indigo-400 group-hover:text-cyan-400" />
          </a>
        </div>
      </div>
    </section>
  );
}
