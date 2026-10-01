import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { User, Cpu, Database, BrainCircuit, PenTool, Sparkles } from "lucide-react";

export default function SignatureAgentNetwork({ compact = false }) {
  const [activeNodeIndex, setActiveNodeIndex] = useState(0);

  const nodes = [
    { id: "user", label: "USER", role: "Query Dispatcher", icon: User, color: "from-blue-500 to-cyan-400" },
    { id: "planner", label: "PLANNER", role: "Task Decomposer", icon: Cpu, color: "from-indigo-500 to-purple-400" },
    { id: "retriever", label: "RETRIEVER", role: "RAG Vector Fetch", icon: Database, color: "from-cyan-500 to-teal-400" },
    { id: "reasoner", label: "REASONER", role: "State Evaluation", icon: BrainCircuit, color: "from-violet-500 to-indigo-400" },
    { id: "writer", label: "WRITER", role: "Structured Output", icon: PenTool, color: "from-emerald-500 to-cyan-400" }
  ];

  // Sequential node loop
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNodeIndex((prev) => (prev + 1) % nodes.length);
    }, 2200);
    return () => clearInterval(interval);
  }, [nodes.length]);

  return (
    <div className={`w-full glass-panel rounded-2xl p-5 border border-indigo-500/30 shadow-xl relative overflow-hidden ${compact ? "py-4 px-3" : "py-6 px-4 sm:px-6"}`}>
      {/* Background glow trace */}
      <div className="absolute -right-20 -top-20 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Header */}
      <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-200 dark:border-white/10">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-cyan-600 dark:text-cyan-400 animate-spin" style={{ animationDuration: '6s' }} />
          <span className="font-mono text-xs font-semibold text-slate-800 dark:text-slate-200 tracking-wider">
            AGENT NETWORK TOPOLOGY
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-cyan-500 dark:bg-cyan-400 animate-ping"></span>
          <span className="font-mono text-[10px] text-cyan-600 dark:text-cyan-400 uppercase tracking-widest font-bold">
            ACTIVE PIPELINE
          </span>
        </div>
      </div>

      {/* Interactive Node Graph Grid */}
      <div className="relative flex flex-col md:flex-row items-center justify-between gap-4 md:gap-2 z-10 py-2">
        {nodes.map((node, index) => {
          const Icon = node.icon;
          const isActive = index === activeNodeIndex;
          const isPassed = index < activeNodeIndex;

          return (
            <React.Fragment key={node.id}>
              {/* Node Card */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setActiveNodeIndex(index)}
                className={`cursor-pointer w-full md:w-1/5 flex flex-col items-center text-center p-3.5 rounded-xl border transition-all duration-300 relative group ${
                  isActive
                    ? "bg-white dark:bg-slate-900 border-cyan-500 dark:border-cyan-400 shadow-[0_0_20px_rgba(56,189,248,0.25)] scale-105"
                    : isPassed
                    ? "bg-slate-100 dark:bg-slate-950/60 border-indigo-500/30 text-slate-800 dark:text-slate-300"
                    : "bg-slate-50 dark:bg-slate-950/40 border-slate-200 dark:border-white/5 text-slate-500 dark:text-slate-400 opacity-80"
                }`}
              >
                {/* Active Indicator Top Light */}
                {isActive && (
                  <motion.div
                    layoutId="activeGlow"
                    className="absolute -top-1 w-12 h-1 bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full shadow-[0_0_8px_#38bdf8]"
                  />
                )}

                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center mb-2.5 transition-all ${
                    isActive
                      ? "bg-gradient-to-br " + node.color + " text-white shadow-md"
                      : "bg-slate-200 dark:bg-slate-900 border border-slate-300 dark:border-white/10 text-slate-700 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-200"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>

                <div className="font-mono text-xs font-bold tracking-wider text-slate-900 dark:text-slate-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-300">
                  {node.label}
                </div>
                <div className="font-sans text-[10px] text-slate-600 dark:text-slate-400 mt-0.5 line-clamp-1 font-medium">
                  {node.role}
                </div>

                {/* State Tag */}
                <div className="mt-2">
                  <span
                    className={`font-mono text-[9px] px-2 py-0.5 rounded-full uppercase tracking-tighter font-bold ${
                      isActive
                        ? "bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 border border-cyan-500/40"
                        : "bg-slate-200 dark:bg-slate-900 text-slate-600 dark:text-slate-500"
                    }`}
                  >
                    {isActive ? "PROCESSING" : isPassed ? "DONE" : "IDLE"}
                  </span>
                </div>
              </motion.div>

              {/* Connecting Line (Only between nodes) */}
              {index < nodes.length - 1 && (
                <div className="hidden md:flex flex-1 items-center justify-center px-1">
                  <div className="w-full h-0.5 bg-slate-300 dark:bg-slate-800 relative overflow-hidden rounded-full">
                    <motion.div
                      className="absolute top-0 bottom-0 bg-gradient-to-r from-cyan-400 to-indigo-500"
                      initial={{ left: "-100%", width: "100%" }}
                      animate={{
                        left: isActive ? "0%" : isPassed ? "100%" : "-100%"
                      }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                    />
                  </div>
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Subtext info bar */}
      <div className="mt-5 pt-3 border-t border-slate-200 dark:border-white/5 flex flex-wrap items-center justify-between font-mono text-[10px] text-slate-600 dark:text-slate-400 gap-2">
        <div className="flex items-center gap-2">
          <span className="text-slate-500">SYSTEM AGENT BUS:</span>
          <span className="text-indigo-600 dark:text-indigo-400 font-bold">LANGGRAPH STATE AGENTS</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-slate-500">CURRENT STAGE:</span>
          <span className="text-cyan-600 dark:text-cyan-400 font-bold">{nodes[activeNodeIndex].label} ({nodes[activeNodeIndex].role})</span>
        </div>
      </div>
    </div>
  );
}
