import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Terminal, CheckCircle2, ChevronRight } from "lucide-react";
import { PORTFOLIO_DATA } from "../../data/portfolioData";

export default function AiStackSection() {
  const { aiStack } = PORTFOLIO_DATA;
  const [selectedCategory, setSelectedCategory] = useState(aiStack[1].id); // Default to AGENTIC AI
  const [activeHoveredTech, setActiveHoveredTech] = useState(null);

  const activeCategoryObj = aiStack.find((cat) => cat.id === selectedCategory) || aiStack[0];
  const activeTechObj = activeHoveredTech || activeCategoryObj.items[0];

  return (
    <section id="stack" className="py-24 relative bg-[#08090e] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Marker */}
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono text-xs font-semibold px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
            03 / AI STACK
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent"></div>
        </div>

        {/* Heading */}
        <div className="max-w-3xl mb-12">
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
            Tools I use to turn{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400">
              ideas into AI systems.
            </span>
          </h2>
          <p className="font-sans text-slate-400 mt-3 text-base">
            Categorized technical stack focused on agentic graph construction, LLM APIs, retrieval pipelines, and core CS principles.
          </p>
        </div>

        {/* Vertical Categorized Interactive Stack Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Category Navigation Tabs */}
          <div className="lg:col-span-5 space-y-3">
            <div className="font-mono text-xs text-slate-500 mb-2 uppercase tracking-widest px-1">
              // SELECT CATEGORY TO INSPECT
            </div>

            {aiStack.map((cat) => {
              const isSelected = cat.id === selectedCategory;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    setActiveHoveredTech(cat.items[0]);
                  }}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-300 border flex items-center justify-between group cursor-pointer ${
                    isSelected
                      ? "bg-slate-900 border-cyan-500/50 shadow-[0_0_20px_rgba(56,189,248,0.15)] text-white"
                      : "bg-slate-950/50 border-white/5 text-slate-400 hover:bg-slate-900/60 hover:text-slate-200"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`font-mono text-xs font-bold px-2 py-0.5 rounded ${
                        isSelected
                          ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                          : "bg-slate-900 text-slate-500"
                      }`}
                    >
                      {cat.categoryNum}
                    </span>
                    <span className="font-mono text-sm font-semibold tracking-wider">
                      {cat.categoryName}
                    </span>
                  </div>

                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected
                        ? "text-cyan-400 translate-x-1"
                        : "text-slate-600 group-hover:text-slate-400"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Interactive Category Details & Tech Inspector Panel */}
          <div className="lg:col-span-7 space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategoryObj.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 space-y-6 shadow-2xl relative overflow-hidden"
              >
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div>
                    <span className="font-mono text-xs text-indigo-400 font-semibold tracking-widest uppercase">
                      CATEGORY {activeCategoryObj.categoryNum}
                    </span>
                    <h3 className="font-display font-bold text-2xl text-white mt-1">
                      {activeCategoryObj.categoryName}
                    </h3>
                  </div>
                  <Cpu className="w-6 h-6 text-cyan-400" />
                </div>

                <p className="font-sans text-sm text-slate-300 leading-relaxed">
                  {activeCategoryObj.description}
                </p>

                {/* Technology Pill Grid */}
                <div className="space-y-3 pt-2">
                  <div className="font-mono text-xs text-slate-500 uppercase tracking-widest">
                    // TECHNOLOGIES & TOOLS (HOVER TO INSPECT)
                  </div>

                  <div className="flex flex-wrap gap-2.5">
                    {activeCategoryObj.items.map((item, idx) => {
                      const isActiveTech = activeTechObj.name === item.name;
                      return (
                        <button
                          key={idx}
                          onMouseEnter={() => setActiveHoveredTech(item)}
                          onClick={() => setActiveHoveredTech(item)}
                          className={`px-4 py-2 rounded-xl font-mono text-xs font-semibold tracking-wider transition-all border flex items-center gap-2 cursor-pointer ${
                            isActiveTech
                              ? "bg-gradient-to-r from-indigo-600 to-cyan-600 text-white border-cyan-400 shadow-[0_0_15px_rgba(56,189,248,0.3)] scale-105"
                              : "bg-slate-900/80 text-slate-300 border-white/10 hover:border-indigo-500/40 hover:text-white"
                          }`}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${
                              isActiveTech ? "bg-white animate-pulse" : "bg-indigo-400"
                            }`}
                          ></span>
                          <span>{item.name}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Live Inspector Box for Hovered Tech */}
                <div className="p-5 rounded-xl bg-slate-950/80 border border-indigo-500/30 relative overflow-hidden space-y-2 mt-6">
                  <div className="flex items-center justify-between border-b border-white/10 pb-2">
                    <div className="flex items-center gap-2">
                      <Terminal className="w-4 h-4 text-cyan-400" />
                      <span className="font-mono text-xs font-bold text-cyan-300">
                        {activeTechObj.name}
                      </span>
                    </div>
                    <span className="font-mono text-[10px] text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" /> VERIFIED TOOL
                    </span>
                  </div>

                  <p className="font-sans text-xs sm:text-sm text-slate-200 leading-relaxed pt-1">
                    {activeTechObj.desc}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
