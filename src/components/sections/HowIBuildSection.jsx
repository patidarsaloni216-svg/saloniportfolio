import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, Compass, Cpu, RefreshCw } from "lucide-react";
import { PORTFOLIO_DATA } from "../../data/portfolioData";

export default function HowIBuildSection() {
  const { howIBuild } = PORTFOLIO_DATA;
  const [activeStep, setActiveStep] = useState(0);

  const icons = [Search, Compass, Cpu, RefreshCw];

  return (
    <section id="process" className="py-24 relative bg-[#08090e] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Marker */}
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono text-xs font-semibold px-3 py-1 rounded-md bg-purple-500/10 border border-purple-500/30 text-purple-400">
            05 / PROCESS
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent"></div>
        </div>

        {/* Heading */}
        <div className="max-w-3xl mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
            From question to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400">
              working system.
            </span>
          </h2>
          <p className="font-sans text-slate-400 mt-3 text-base">
            Systematic 4-step engineering process for designing, implementing, and evaluating agentic AI tools.
          </p>
        </div>

        {/* 4-Step Interactive Visual Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {howIBuild.map((item, idx) => {
            const Icon = icons[idx] || Cpu;
            const isCurrent = activeStep === idx;

            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => setActiveStep(idx)}
                className={`glass-panel p-6 rounded-2xl border transition-all duration-300 cursor-pointer relative overflow-hidden flex flex-col justify-between group ${
                  isCurrent
                    ? "bg-slate-900/90 border-cyan-400 shadow-[0_0_25px_rgba(56,189,248,0.2)] -translate-y-2"
                    : "bg-slate-950/50 border-white/5 hover:border-white/20 hover:-translate-y-1"
                }`}
              >
                {/* Top Header */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span
                      className={`font-mono text-xs font-bold px-3 py-1 rounded-md ${
                        isCurrent
                          ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40"
                          : "bg-slate-900 text-slate-500"
                      }`}
                    >
                      STEP {item.step}
                    </span>

                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                        isCurrent
                          ? "bg-gradient-to-br from-indigo-500 to-cyan-500 text-white shadow-md"
                          : "bg-slate-900 border border-white/10 text-slate-400 group-hover:text-slate-200"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-xl text-white group-hover:text-cyan-300 transition-colors">
                    {item.name}
                  </h3>

                  <p className="font-sans text-sm text-slate-300 font-medium leading-snug">
                    "{item.summary}"
                  </p>

                  <p className="font-sans text-xs text-slate-400 leading-relaxed pt-2 border-t border-white/5">
                    {item.detail}
                  </p>
                </div>

                {/* Progress bar line */}
                <div className="mt-6 pt-2">
                  <div className="w-full h-1 bg-slate-900 rounded-full overflow-hidden">
                    <div
                      className={`h-full transition-all duration-500 ${
                        isCurrent ? "bg-gradient-to-r from-indigo-500 to-cyan-400 w-full" : "w-0"
                      }`}
                    ></div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
