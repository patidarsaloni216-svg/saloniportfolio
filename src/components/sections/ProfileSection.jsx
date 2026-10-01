import React from "react";
import { motion } from "framer-motion";
import { MapPin, GraduationCap, Building2, Calendar, UserCheck, Code2 } from "lucide-react";
import { PORTFOLIO_DATA } from "../../data/portfolioData";

export default function ProfileSection() {
  const { personalInfo } = PORTFOLIO_DATA;

  const infoGrid = [
    { label: "LOCATION", value: personalInfo.location, icon: MapPin, color: "text-rose-400" },
    { label: "EDUCATION", value: personalInfo.degree, icon: GraduationCap, color: "text-indigo-400" },
    { label: "INSTITUTION", value: personalInfo.institution, icon: Building2, color: "text-cyan-400" },
    { label: "STATUS", value: personalInfo.status, icon: UserCheck, color: "text-emerald-400" },
    { label: "EXPECTED GRADUATION", value: personalInfo.expectedGraduation, icon: Calendar, color: "text-amber-400" }
  ];

  return (
    <section id="profile" className="py-24 relative bg-[#090a0f] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Marker */}
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono text-xs font-semibold px-3 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/30 text-indigo-400">
            02 / PROFILE
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent"></div>
        </div>

        {/* Section Heading */}
        <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight leading-tight max-w-3xl mb-12">
          Building intelligent systems,{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
            one workflow at a time.
          </span>
        </h2>

        {/* Editorial Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Biography / Objective Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Career Objective Text Block */}
            <div className="glass-panel p-8 rounded-2xl border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl"></div>
              
              <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 mb-4 pb-3 border-b border-white/10">
                <Code2 className="w-4 h-4" />
                <span>// CAREER OBJECTIVE & DIRECTION</span>
              </div>

              <p className="font-sans text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
                {personalInfo.careerObjective}
              </p>
            </div>

            {/* Core Focus Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass-panel p-5 rounded-xl border border-white/5 hover:border-indigo-500/30 transition-all">
                <div className="font-mono text-xs text-indigo-400 mb-2 font-semibold">// AGENT ORCHESTRATION</div>
                <p className="font-sans text-xs text-slate-400 leading-relaxed">
                  Focusing on multi-agent graph flows using LangGraph where nodes represent specialized reasoning tools and edges govern dynamic decision-making.
                </p>
              </div>

              <div className="glass-panel p-5 rounded-xl border border-white/5 hover:border-cyan-500/30 transition-all">
                <div className="font-mono text-xs text-cyan-400 mb-2 font-semibold">// RAG PIPELINES</div>
                <p className="font-sans text-xs text-slate-400 leading-relaxed">
                  Building context-aware retrieval architectures with vector indexes (FAISS/Chroma) for grounded, verifiable LLM responses.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Information Metadata Panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="glass-panel rounded-2xl p-6 border border-white/10 space-y-6 shadow-xl">
              <div className="flex items-center justify-between pb-3 border-b border-white/10 font-mono text-xs text-slate-300 font-bold">
                <span>SYSTEM METADATA</span>
                <span className="text-cyan-400">// VERIFIED PROFILE</span>
              </div>

              <div className="space-y-4">
                {infoGrid.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5 flex items-center justify-between hover:border-white/20 transition-all"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg bg-slate-950 ${item.color}`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="font-mono text-xs text-slate-400 tracking-wider">
                          {item.label}
                        </span>
                      </div>
                      <span className="font-sans text-xs sm:text-sm font-semibold text-slate-100 text-right">
                        {item.value}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Status Note */}
              <div className="p-4 rounded-xl bg-indigo-950/30 border border-indigo-500/20 text-xs font-mono text-indigo-300 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
                <span>OPEN TO SOFTWARE & AI ENGINEERING ROLES</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
