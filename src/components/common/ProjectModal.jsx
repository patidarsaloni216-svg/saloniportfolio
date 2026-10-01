import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Cpu, GitBranch, Layers, CheckCircle2, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

export default function ProjectModal({ project, isOpen, onClose }) {
  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 overflow-y-auto bg-[#08090e]/90 backdrop-blur-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="relative w-full max-w-4xl bg-[#0e111a] border border-indigo-500/30 rounded-2xl shadow-2xl p-6 sm:p-8 space-y-8 my-auto overflow-hidden text-slate-100 max-h-[90vh] overflow-y-auto custom-scrollbar"
        >
          {/* Header Bar */}
          <div className="flex items-start justify-between border-b border-white/10 pb-6">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/40">
                  PROJECT {project.number}
                </span>
                <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 uppercase tracking-wider">
                  {project.tag}
                </span>
              </div>
              <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-white tracking-tight">
                {project.title}
              </h2>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-900 border border-white/10 text-slate-400 hover:text-white hover:border-white/30 transition-all"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Key Metadata Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-950/60 border border-white/5 space-y-1">
              <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest">// ASSIGNED ROLE</span>
              <p className="font-sans text-sm font-semibold text-cyan-300">
                {project.caseStudy?.role || "Lead Developer"}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/60 border border-white/5 space-y-2">
              <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest">// TECH STACK</span>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="font-mono text-[11px] px-2 py-0.5 rounded bg-indigo-950/60 text-indigo-300 border border-indigo-500/30"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Interactive Workflow Node Diagram Visualization */}
          <div className="p-6 rounded-2xl bg-slate-950/90 border border-indigo-500/30 space-y-4">
            <div className="flex items-center justify-between font-mono text-xs text-indigo-400 font-bold border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <GitBranch className="w-4 h-4 text-cyan-400" />
                <span>GRAPH WORKFLOW TOPOLOGY</span>
              </div>
              <span className="text-[10px] text-slate-500">// LANGGRAPH NODES & STATE EDGES</span>
            </div>

            <div className="flex flex-wrap md:flex-nowrap items-center justify-between gap-3 py-2">
              {project.nodes.map((node, idx) => (
                <React.Fragment key={node.id}>
                  <div className="flex-1 min-w-[130px] p-3 rounded-xl bg-slate-900 border border-white/10 text-center space-y-1 relative group hover:border-cyan-400 transition-all">
                    <div className="font-mono text-[11px] font-bold text-cyan-300">
                      {node.label}
                    </div>
                    <div className="font-sans text-[10px] text-slate-400">
                      {node.sub}
                    </div>
                  </div>
                  {idx < project.nodes.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-indigo-400 shrink-0 hidden md:block animate-pulse" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Detailed Problem & Approach Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-slate-950/40 border border-white/5 space-y-2">
              <div className="font-mono text-xs text-rose-400 font-bold uppercase tracking-wider flex items-center gap-2">
                <Layers className="w-4 h-4" />
                <span>PROBLEM STATEMENT</span>
              </div>
              <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.caseStudy?.problem}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-950/40 border border-white/5 space-y-2">
              <div className="font-mono text-xs text-cyan-400 font-bold uppercase tracking-wider flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                <span>SYSTEM APPROACH</span>
              </div>
              <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.caseStudy?.approach}
              </p>
            </div>
          </div>

          {/* Architecture & Key Learnings */}
          <div className="space-y-4 pt-2">
            <div className="p-5 rounded-xl bg-slate-950/60 border border-white/10 space-y-2">
              <div className="font-mono text-xs text-indigo-300 font-bold uppercase tracking-wider">
                // SYSTEM ARCHITECTURE
              </div>
              <p className="font-mono text-xs text-slate-300 bg-slate-900 p-3 rounded-lg border border-white/5">
                {project.caseStudy?.architecture}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-emerald-950/20 border border-emerald-500/20 space-y-2">
              <div className="font-mono text-xs text-emerald-400 font-bold uppercase tracking-wider flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" />
                <span>KEY TECHNICAL LEARNINGS</span>
              </div>
              <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.caseStudy?.learning}
              </p>
            </div>
          </div>

          {/* Features List */}
          <div className="space-y-3 pt-2 border-t border-white/10">
            <div className="font-mono text-xs text-slate-400 uppercase tracking-widest">
              // IMPLEMENTED CAPABILITIES
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
              {project.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/60 border border-white/5 font-mono text-xs text-slate-300"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
