import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, CheckCircle2 } from "lucide-react";
import { PORTFOLIO_DATA } from "../../data/portfolioData";

export default function EducationSection() {
  const { education } = PORTFOLIO_DATA;

  return (
    <section id="education" className="py-24 relative bg-[#090a0f] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Marker */}
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono text-xs font-semibold px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
            06 / EDUCATION
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Title */}
          <div className="lg:col-span-5 space-y-4">
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
              Academic{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                Foundation.
              </span>
            </h2>
            <p className="font-sans text-slate-400 text-base">
              Formal computer science education background and institution details.
            </p>
          </div>

          {/* Right Column Timeline Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="glass-panel p-8 rounded-3xl border border-white/10 relative shadow-2xl space-y-6">
              <div className="flex items-start justify-between border-b border-white/10 pb-6">
                <div className="space-y-2">
                  <span className="font-mono text-xs font-bold text-emerald-400 px-3 py-1 rounded bg-emerald-950/40 border border-emerald-500/30 inline-block">
                    UNDERGRADUATE DEGREE
                  </span>
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
                    {education.degree}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-slate-300 font-medium">
                    <span className="flex items-center gap-1.5">
                      <GraduationCap className="w-4 h-4 text-cyan-400" />
                      {education.institution}
                    </span>
                  </div>
                </div>

                <div className="hidden sm:flex flex-col items-end text-right font-mono text-xs text-slate-400">
                  <span className="px-3 py-1 rounded-full bg-slate-900 border border-white/10 text-emerald-400 font-semibold">
                    {education.status}
                  </span>
                  <span className="mt-2 text-indigo-300">{education.expectedGraduation}</span>
                </div>
              </div>

              {/* Mobile Timeline info badge */}
              <div className="sm:hidden flex flex-wrap items-center justify-between font-mono text-xs p-3 rounded-xl bg-slate-900 border border-white/5">
                <span className="text-emerald-400 font-semibold">{education.status}</span>
                <span className="text-indigo-300">{education.expectedGraduation}</span>
              </div>

              {/* Coursework & CS Fundamentals Summary */}
              <div className="space-y-3 pt-2">
                <div className="font-mono text-xs text-slate-500 uppercase tracking-widest">
                  // CORE CS CURRICULUM HIGHLIGHTS
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Data Structures & Algorithms",
                    "Object-Oriented Programming (OOP)",
                    "Database Management Systems (DBMS)",
                    "Operating Systems (OS)",
                    "Computer Networks",
                    "Software Engineering Principles"
                  ].map((subject, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 p-3 rounded-xl bg-slate-900/60 border border-white/5 font-mono text-xs text-slate-200"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{subject}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
