import React, { useState } from "react";
import { motion } from "framer-motion";
import { GitBranch, Eye, CheckCircle2 } from "lucide-react";
import { PORTFOLIO_DATA } from "../../data/portfolioData";
import ProjectModal from "../common/ProjectModal";

export default function ProjectLabSection() {
  const { projects } = PORTFOLIO_DATA;
  const [activeModalProject, setActiveModalProject] = useState(null);
  const [activeHoverNode, setActiveHoverNode] = useState({});

  return (
    <section id="lab" className="py-24 relative bg-[#090a0f] border-t border-white/5">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Marker */}
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono text-xs font-semibold px-3 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/30 text-indigo-400">
            04 / PROJECT LAB
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent"></div>
        </div>

        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
            Experiments, systems{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400">
              and things I'm building.
            </span>
          </h2>
          <p className="font-sans text-slate-400 mt-3 text-base">
            Architectural breakdowns of multi-agent state machines, retrieval engines, and LLM pipelines. Click any project to open the complete case study.
          </p>
        </div>

        {/* Vertical Interactive Project Timeline */}
        <div className="space-y-16">
          {projects.map((proj, index) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-panel p-6 sm:p-8 lg:p-10 rounded-3xl border border-white/10 relative shadow-2xl overflow-hidden hover:border-indigo-500/40 transition-all duration-300 group"
            >
              {/* Subtle background number watermark */}
              <div className="absolute -right-6 -bottom-10 font-display font-extrabold text-9xl text-white/[0.02] pointer-events-none select-none">
                {proj.number}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Column: Details */}
                <div className="lg:col-span-6 space-y-6">
                  {/* Meta Bar */}
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-mono text-xs font-bold text-cyan-400 px-3 py-1 rounded-md bg-cyan-950/40 border border-cyan-500/30">
                      PROJECT {proj.number}
                    </span>
                    <span className="font-mono text-xs font-semibold text-indigo-300 px-3 py-1 rounded-md bg-indigo-950/40 border border-indigo-500/30">
                      {proj.tag}
                    </span>
                    {proj.institution && (
                      <span className="font-mono text-xs text-slate-400">
                        • {proj.institution}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-2xl sm:text-4xl text-white group-hover:text-cyan-300 transition-colors">
                    {proj.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-sm sm:text-base text-slate-300 leading-relaxed">
                    "{proj.shortDescription}"
                  </p>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {proj.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="font-mono text-xs px-3 py-1 rounded-lg bg-slate-900 border border-white/10 text-slate-300 font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Key Features Bullet Grid */}
                  <div className="pt-2">
                    <div className="font-mono text-xs text-slate-500 uppercase tracking-wider mb-3">
                      // SYSTEM CAPABILITIES
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {proj.features.slice(0, 6).map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 font-mono text-xs text-slate-400">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Inspect Case Study Button */}
                  <div className="pt-4">
                    <button
                      onClick={() => setActiveModalProject(proj)}
                      className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-indigo-600 text-white font-mono text-xs font-semibold tracking-wider uppercase border border-white/10 hover:border-cyan-400 transition-all shadow-lg flex items-center gap-2 group/btn cursor-pointer"
                    >
                      <Eye className="w-4 h-4 text-cyan-400 group-hover/btn:scale-110 transition-transform" />
                      <span>INSPECT CASE STUDY & ARCHITECTURE</span>
                    </button>
                  </div>
                </div>

                {/* Right Column: Interactive Diagram Box */}
                <div className="lg:col-span-6">
                  <div className="p-6 rounded-2xl bg-slate-950/80 border border-indigo-500/20 space-y-4 shadow-inner">
                    <div className="flex items-center justify-between border-b border-white/10 pb-3 font-mono text-xs text-indigo-400">
                      <div className="flex items-center gap-2 font-bold">
                        <GitBranch className="w-4 h-4 text-cyan-400" />
                        <span>WORKFLOW DIAGRAM</span>
                      </div>
                      <span className="text-[10px] text-slate-500">// INTERACTIVE NODES</span>
                    </div>

                    {/* Node Sequence Diagram Flow */}
                    <div className="space-y-3 pt-2">
                      {proj.nodes.map((node, nodeIdx) => {
                        const isHovered = activeHoverNode[proj.id] === node.id;
                        return (
                          <React.Fragment key={node.id}>
                            <div
                              onMouseEnter={() =>
                                setActiveHoverNode({ ...activeHoverNode, [proj.id]: node.id })
                              }
                              onMouseLeave={() =>
                                setActiveHoverNode({ ...activeHoverNode, [proj.id]: null })
                              }
                              className={`p-3.5 rounded-xl border transition-all duration-200 cursor-pointer flex items-center justify-between ${
                                isHovered
                                  ? "bg-slate-900 border-cyan-400 shadow-[0_0_15px_rgba(56,189,248,0.2)] scale-[1.02]"
                                  : "bg-slate-900/60 border-white/10 hover:border-white/20"
                              }`}
                            >
                              <div className="flex items-center gap-3">
                                <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                                  0{nodeIdx + 1}
                                </span>
                                <div>
                                  <div className="font-mono text-xs font-bold text-slate-200">
                                    {node.label}
                                  </div>
                                  <div className="font-sans text-[11px] text-slate-400">
                                    {node.sub}
                                  </div>
                                </div>
                              </div>

                              <span className="font-mono text-[10px] text-cyan-400 font-semibold uppercase">
                                NODE ACTIVE
                              </span>
                            </div>

                            {/* Signal Flow Arrow */}
                            {nodeIdx < proj.nodes.length - 1 && (
                              <div className="flex justify-center py-0.5">
                                <div className="w-0.5 h-3 bg-indigo-500/40 relative">
                                  <div className="absolute inset-0 bg-cyan-400 animate-pulse"></div>
                                </div>
                              </div>
                            )}
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case Study Modal Dialog */}
      <ProjectModal
        project={activeModalProject}
        isOpen={Boolean(activeModalProject)}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
}
