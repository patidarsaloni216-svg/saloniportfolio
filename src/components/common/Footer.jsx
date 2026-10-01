import React from "react";
import { Cpu } from "lucide-react";
import { PORTFOLIO_DATA } from "../../data/portfolioData";
import { LinkedinIcon, GithubIcon } from "./SocialIcons";

export default function Footer() {
  const { personalInfo } = PORTFOLIO_DATA;

  return (
    <footer className="bg-[#050609] border-t border-white/10 py-12 text-slate-400 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Brand */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-cyan-400">
            <Cpu className="w-4 h-4" />
          </div>
          <div>
            <div className="font-display font-bold text-sm text-slate-200">
              {personalInfo.name}
            </div>
            <div className="text-[11px] text-slate-400">
              {personalInfo.role}
            </div>
          </div>
        </div>

        {/* Center: Social Links & Copyright */}
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-4 text-slate-300">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-indigo-400 transition-colors"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LINKEDIN</span>
            </a>

            <span>•</span>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GITHUB</span>
            </a>
          </div>

          <div className="text-center text-slate-500 text-[11px]">
            © 2026 {personalInfo.name}
          </div>
        </div>

        {/* Right: Technical Credits */}
        <div className="flex items-center gap-3 text-[10px] tracking-wider text-slate-400">
          <span className="px-2.5 py-1 rounded bg-slate-900 border border-white/5">
            BUILT WITH REACT
          </span>
          <span>•</span>
          <span className="px-2.5 py-1 rounded bg-slate-900 border border-white/5">
            DESIGNED FOR THE WEB
          </span>
        </div>
      </div>
    </footer>
  );
}
