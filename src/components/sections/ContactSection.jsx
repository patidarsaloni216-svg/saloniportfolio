import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Copy, Check, Sparkles, Terminal, FileText } from "lucide-react";
import { PORTFOLIO_DATA } from "../../data/portfolioData";
import { LinkedinIcon, GithubIcon } from "../common/SocialIcons";

export default function ContactSection({ onOpenResume }) {
  const { personalInfo } = PORTFOLIO_DATA;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 relative bg-[#08090e] border-t border-white/5 overflow-hidden">
      {/* Background glowing circle */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Marker */}
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono text-xs font-semibold px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
            07 / CONTACT
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent"></div>
        </div>

        {/* Content Box Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Side: Call to action heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-white tracking-tight leading-[1.05]">
              Let's build something{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-emerald-400">
                intelligent.
              </span>
            </h2>

            <p className="font-sans text-base sm:text-xl text-slate-300 max-w-xl font-normal leading-relaxed">
              Open to entry-level Software Engineering and AI Engineering opportunities, internships, and meaningful projects.
            </p>

            {/* Direct Email & Resume Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 via-cyan-600 to-teal-500 text-white font-mono text-xs sm:text-sm font-bold tracking-widest uppercase shadow-xl shadow-cyan-500/20 hover:opacity-95 transition-all flex items-center gap-3 group"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>EMAIL ME</span>
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenResume}
                className="px-6 py-4 rounded-2xl glass-panel text-slate-200 font-mono text-xs font-semibold tracking-wider uppercase hover:bg-white/10 transition-all border border-white/10 flex items-center gap-2 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-indigo-400" />
                <span>VIEW RESUME PDF</span>
              </button>
            </div>

            {/* Social Links Row (LinkedIn & GitHub) */}
            <div className="pt-2 flex flex-wrap items-center gap-3 font-mono text-xs">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl glass-panel text-slate-300 hover:text-indigo-400 border border-white/10 transition-all flex items-center gap-2"
              >
                <LinkedinIcon className="w-4 h-4 text-indigo-400" />
                <span>LINKEDIN PROFILE</span>
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl glass-panel text-slate-300 hover:text-cyan-400 border border-white/10 transition-all flex items-center gap-2"
              >
                <GithubIcon className="w-4 h-4 text-cyan-400" />
                <span>GITHUB REPOSITORY</span>
              </a>
            </div>
          </motion.div>

          {/* Right Side: Terminal / HUD Contact Metadata Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-6 shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-white/10 pb-4 font-mono text-xs">
                <div className="flex items-center gap-2 text-slate-200 font-bold">
                  <Terminal className="w-4 h-4 text-cyan-400" />
                  <span>DIRECT CHANNELS</span>
                </div>
                <span className="text-emerald-400 font-semibold">// AVAILABLE</span>
              </div>

              {/* Information Rows */}
              <div className="space-y-4 font-mono text-xs">
                {/* Phone */}
                <div className="p-4 rounded-xl bg-slate-900/80 border border-white/5 flex items-center justify-between hover:border-cyan-500/30 transition-all">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-indigo-950/60 text-indigo-400">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-500 uppercase">// PHONE</div>
                      <a href={`tel:${personalInfo.phone}`} className="font-bold text-slate-100 hover:text-cyan-400 transition-colors">
                        {personalInfo.phone}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="p-4 rounded-xl bg-slate-900/80 border border-white/5 flex items-center justify-between hover:border-cyan-500/30 transition-all">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-cyan-950/60 text-cyan-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-500 uppercase">// EMAIL</div>
                      <a href={`mailto:${personalInfo.email}`} className="font-bold text-slate-100 hover:text-cyan-400 transition-colors">
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="p-4 rounded-xl bg-slate-900/80 border border-white/5 flex items-center justify-between hover:border-cyan-500/30 transition-all">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-emerald-950/60 text-emerald-400">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-500 uppercase">// LOCATION</div>
                      <div className="font-bold text-slate-100">{personalInfo.location}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Status Note */}
              <div className="p-4 rounded-xl bg-slate-950 border border-white/10 text-xs font-mono text-slate-400 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>RESPONSE TIME: WITHIN 24 HOURS</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
