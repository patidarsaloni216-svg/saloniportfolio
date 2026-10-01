import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, FileText, ExternalLink, Printer, ShieldCheck, Mail, Phone, MapPin } from "lucide-react";
import { PORTFOLIO_DATA } from "../../data/portfolioData";

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const { personalInfo, aiStack, projects, education } = PORTFOLIO_DATA;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-y-auto bg-black/80 backdrop-blur-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="relative w-full max-w-4xl bg-slate-900 dark:bg-[#0e111a] text-slate-100 border border-white/10 rounded-2xl shadow-2xl p-6 sm:p-8 my-auto max-h-[90vh] overflow-y-auto custom-scrollbar"
        >
          {/* Top Control Bar */}
          <div className="flex flex-wrap items-center justify-between border-b border-white/10 pb-4 mb-6 gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-indigo-500/20 text-indigo-400">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-white">
                  RESUME PREVIEW — SALONI PATIDAR
                </h3>
                <p className="font-mono text-xs text-slate-400">
                  Agentic AI Engineer • B.Tech CS Student
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {/* Direct Download Button */}
              <a
                href={personalInfo.resumeUrl}
                download="Saloni_Patidar_Resume.pdf"
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 text-white font-mono text-xs font-semibold hover:opacity-90 transition-all flex items-center gap-2 shadow-lg"
              >
                <Download className="w-4 h-4" />
                <span>DOWNLOAD PDF</span>
              </a>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-slate-800 border border-white/10 text-slate-400 hover:text-white transition-all"
                aria-label="Close resume preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable Styled Resume Sheet Document */}
          <div className="bg-white text-slate-900 rounded-xl p-6 sm:p-10 shadow-2xl space-y-6 font-sans border border-slate-200">
            {/* Document Header */}
            <div className="border-b-2 border-slate-900 pb-4 text-center sm:text-left">
              <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 uppercase">
                SALONI PATIDAR
              </h1>
              <p className="text-sm font-semibold text-slate-700 mt-1">
                Agentic AI Engineer • Final Year B.Tech CS Student
              </p>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-1 text-xs text-slate-600 mt-2 font-mono">
                <span>{personalInfo.phone}</span>
                <span>•</span>
                <span>{personalInfo.email}</span>
                <span>•</span>
                <span>{personalInfo.location}</span>
              </div>
            </div>

            {/* Career Objective */}
            <div className="space-y-2">
              <h2 className="text-xs font-bold font-mono uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1">
                CAREER OBJECTIVE
              </h2>
              <p className="text-xs leading-relaxed text-slate-700">
                {personalInfo.careerObjective}
              </p>
            </div>

            {/* Technical Skills */}
            <div className="space-y-2">
              <h2 className="text-xs font-bold font-mono uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1">
                TECHNICAL SKILLS
              </h2>
              <div className="grid grid-cols-1 gap-1.5 text-xs text-slate-700">
                <div>
                  <strong className="text-slate-900">Programming Languages:</strong> Python, C++, SQL
                </div>
                <div>
                  <strong className="text-slate-900">Agentic AI & LLM Tooling:</strong> LangChain, LangGraph (fundamentals), LLM API Integration, Prompt Engineering, Basic RAG Concepts
                </div>
                <div>
                  <strong className="text-slate-900">Web & Backend Basics:</strong> REST API Concepts, Flask/FastAPI (fundamentals), Git & GitHub
                </div>
                <div>
                  <strong className="text-slate-900">Databases:</strong> MySQL, Basic Query Optimization
                </div>
                <div>
                  <strong className="text-slate-900">Core CS Fundamentals:</strong> Data Structures & Algorithms, Object-Oriented Programming, DBMS, Operating Systems, Computer Networks
                </div>
                <div>
                  <strong className="text-slate-900">Tools & Platforms:</strong> VS Code, Jupyter Notebook, Postman, GitHub
                </div>
              </div>
            </div>

            {/* Academic & Personal Projects */}
            <div className="space-y-4">
              <h2 className="text-xs font-bold font-mono uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1">
                ACADEMIC & PERSONAL PROJECTS
              </h2>

              {projects.map((proj) => (
                <div key={proj.id} className="space-y-1 text-xs">
                  <div className="flex flex-wrap items-center justify-between font-bold text-slate-900">
                    <span>
                      {proj.title} — {proj.tag}
                    </span>
                    <span className="font-mono text-[11px] text-slate-500 font-normal">
                      {proj.tech.join(" • ")}
                    </span>
                  </div>

                  <p className="text-slate-700 text-xs italic">
                    {proj.shortDescription}
                  </p>

                  <ul className="list-disc list-inside space-y-0.5 text-slate-700 text-xs pl-1">
                    {proj.features.slice(0, 3).map((feat, i) => (
                      <li key={i}>{feat}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Education */}
            <div className="space-y-2">
              <h2 className="text-xs font-bold font-mono uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1">
                EDUCATION
              </h2>
              <div className="text-xs text-slate-800 flex justify-between items-center">
                <div>
                  <strong className="text-slate-900">{education.degree}</strong>
                  <div className="text-slate-600">{education.institution}</div>
                </div>
                <div className="text-right font-mono text-slate-600">
                  {education.status} ({education.expectedGraduation})
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bar inside Modal */}
          <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between font-mono text-xs text-slate-400 gap-3">
            <div className="flex items-center gap-2 text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              <span>OFFICIAL RESUME DOCUMENT</span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={personalInfo.resumeUrl}
                download="Saloni_Patidar_Resume.pdf"
                className="text-cyan-400 hover:underline flex items-center gap-1 font-bold"
              >
                <span>DOWNLOAD FILE</span>
                <Download className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
