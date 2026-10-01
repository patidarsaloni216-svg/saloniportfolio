export const PORTFOLIO_DATA = {
  personalInfo: {
    name: "SALONI PATIDAR",
    role: "Agentic AI Engineer",
    subRole: "Final Year B.Tech Computer Science Student",
    location: "Indore, India",
    institution: "LNCT Bhopal Indore Campus",
    degree: "B.Tech — Computer Science Engineering",
    status: "Final Year",
    expectedGraduation: "2027",
    phone: "+91-7879424944",
    email: "patidarsaloni216@gmail.com",
    linkedin: "https://linkedin.com/in/saloni-patidar", // Replace with your actual URL
    github: "https://github.com/saloni-patidar",     // Replace with your actual URL
    resumeUrl: "/Saloni_Patidar_Resume.pdf",        // Place your PDF in the public folder as Saloni_Patidar_Resume.pdf
    tagline: "I build practical AI systems that reason, retrieve, collaborate and respond.",
    careerObjective:
      "Final-year B.Tech Computer Science student with hands-on exposure to building agentic AI applications using LangChain and LangGraph. Comfortable with core CS fundamentals including DSA, DBMS and OOP, and actively building practical skills in LLM-based application development through self-driven and academic projects."
  },

  systemStatus: {
    agentNetwork: "ONLINE",
    llmPipeline: "ACTIVE",
    ragEngine: "READY",
    langGraph: "CONNECTED",
    apiLayer: "STABLE",
    currentFocus: ["Agentic AI", "RAG Systems", "LLM Applications"],
    uptime: "99.9%",
    latencies: {
      graphExecution: "< 45ms",
      vectorSearch: "< 12ms",
      llmStream: "Active"
    }
  },

  aiStack: [
    {
      id: "programming",
      categoryNum: "01",
      categoryName: "PROGRAMMING",
      description: "Core languages used for algorithm design, data structures, and script automation.",
      items: [
        { name: "Python", desc: "Primary language for AI agent orchestrations, LangGraph pipelines, and backend logic." },
        { name: "C++", desc: "Solid foundation for core CS, data structures, and high-speed algorithm design." },
        { name: "SQL", desc: "Relational querying, schema design, and database interaction." }
      ]
    },
    {
      id: "agentic",
      categoryNum: "02",
      categoryName: "AGENTIC AI & LLM",
      description: "Frameworks and patterns for multi-agent state machines, context retrieval, and prompt engineering.",
      items: [
        { name: "LangChain", desc: "Chaining prompts, document loaders, vector stores, and output parsers." },
        { name: "LangGraph", desc: "Building stateful multi-agent workflows with graph-based nodes and conditional edges." },
        { name: "LLM API Integration", desc: "Connecting OpenAI, Anthropic, and local LLM endpoints into production workflows." },
        { name: "Prompt Engineering", desc: "Structuring system prompts, zero/few-shot examples, and JSON output constraints." },
        { name: "Basic RAG Concepts", desc: "Understanding document chunking strategies, embeddings, and similarity search." }
      ]
    },
    {
      id: "web-backend",
      categoryNum: "03",
      categoryName: "WEB & BACKEND",
      description: "Building light REST endpoints, managing API integrations, and code versioning.",
      items: [
        { name: "REST API Concepts", desc: "HTTP methods, payload serialization, JSON communication, and status codes." },
        { name: "Flask / FastAPI Fundamentals", desc: "Creating microservices to serve LLM inference pipelines and agent nodes." },
        { name: "Git", desc: "Branching workflows, commit discipline, and local repository version control." },
        { name: "GitHub", desc: "Remote code hosting, pull requests, and collaborative repository management." }
      ]
    },
    {
      id: "databases",
      categoryNum: "04",
      categoryName: "DATABASES",
      description: "Storing structured data and optimizing database queries.",
      items: [
        { name: "MySQL", desc: "Relational database management system for structured data storage." },
        { name: "Basic Query Optimization", desc: "Indexing, join optimizations, and efficient query structuring." }
      ]
    },
    {
      id: "core-cs",
      categoryNum: "05",
      categoryName: "CORE CS",
      description: "Foundational computer science principles essential for scalable software engineering.",
      items: [
        { name: "Data Structures & Algorithms", desc: "Arrays, trees, graphs, dynamic programming, and space/time complexity analysis." },
        { name: "Object-Oriented Programming", desc: "Encapsulation, inheritance, polymorphism, and clean design patterns." },
        { name: "DBMS", desc: "ACID properties, normalization, transaction management, and indexing." },
        { name: "Operating Systems", desc: "Process management, memory allocation, multithreading, and concurrency." },
        { name: "Computer Networks", desc: "TCP/IP stack, HTTP/HTTPS protocols, OSI model, and socket basics." }
      ]
    },
    {
      id: "tools",
      categoryNum: "06",
      categoryName: "TOOLS",
      description: "Daily developer environment, API testing, and prototyping platforms.",
      items: [
        { name: "VS Code", desc: "Primary IDE configured for Python debugging and modern web stacks." },
        { name: "Jupyter Notebook", desc: "Interactive prototyping for LLM experiments and data parsing." },
        { name: "Postman", desc: "Testing REST API endpoints and inspecting HTTP requests/responses." },
        { name: "GitHub", desc: "Version control and project hosting." }
      ]
    }
  ],

  projects: [
    {
      id: "multi-agent-study-assistant",
      number: "01",
      title: "MULTI-AGENT STUDY ASSISTANT",
      tag: "FINAL YEAR PROJECT",
      tech: ["Python", "LangChain", "LangGraph", "LLM APIs"],
      institution: "LNCT (Bhopal) Indore Campus",
      shortDescription:
        "Designing a multi-agent study/research assistant using LangGraph, with separate agents for query planning, information retrieval, and answer drafting, coordinated through a shared workflow graph.",
      features: [
        "Multi-agent workflow",
        "Query planning",
        "Information retrieval",
        "Answer drafting",
        "Shared workflow graph",
        "LLM API integration",
        "Conversation state handling"
      ],
      nodes: [
        { id: "u", label: "USER QUERY", sub: "Input Prompt" },
        { id: "qp", label: "QUERY PLANNER", sub: "Task Decomposition" },
        { id: "ra", label: "RETRIEVAL AGENT", sub: "Study Material Fetch" },
        { id: "aa", label: "ANSWER AGENT", sub: "Drafting & Structuring" },
        { id: "fr", label: "FINAL RESPONSE", sub: "Structured Output" }
      ],
      caseStudy: {
        role: "Lead Student Developer",
        problem:
          "Complex academic queries require structured multi-step research rather than single-shot LLM responses, which often lack coherence or omit key study material.",
        approach:
          "Utilized LangGraph to build a state-machine graph where specialist agents pass shared state. The Query Planner breaks down complex topics into sub-questions, the Retrieval Agent fetches relevant context, and the Answer Agent synthesizes the result.",
        architecture:
          "Graph State Object → Node 1 (Planner) → Node 2 (Retriever) → Node 3 (Draft Writer) → Evaluator Edge → Output",
        learning:
          "Gained deep understanding of state persistence, agent hand-offs, conditional routing based on retrieval quality, and prompt isolation."
      }
    },
    {
      id: "document-qa-assistant",
      number: "02",
      title: "DOCUMENT Q&A ASSISTANT",
      tag: "RAG-BASED PERSONAL PROJECT",
      tech: ["Python", "LangChain", "FAISS", "Chroma", "LLM APIs"],
      shortDescription:
        "Built a retrieval-augmented Q&A tool that ingests PDF documents, chunks and embeds them, and stores vectors in a local FAISS/Chroma index.",
      features: [
        "LangChain retrieval chain",
        "Context retrieval",
        "Embedding generation",
        "Similarity search",
        "Prompt construction",
        "Grounded responses"
      ],
      nodes: [
        { id: "pdf", label: "PDF DOCUMENT", sub: "Raw Input" },
        { id: "chunk", label: "DOCUMENT CHUNKING", sub: "Text Splitting" },
        { id: "embed", label: "EMBEDDINGS", sub: "Vector Space" },
        { id: "vstore", label: "VECTOR STORE", sub: "FAISS / Chroma" },
        { id: "sim", label: "SIMILARITY SEARCH", sub: "Top-K Chunks" },
        { id: "llm", label: "LLM INFERENCE", sub: "Context-Aware" },
        { id: "ans", label: "GROUNDED ANSWER", sub: "Fact-Based Output" }
      ],
      caseStudy: {
        role: "Individual Creator",
        problem:
          "Large PDF technical documents cannot fit within token context limits or risk hallucinated answers when directly pasted into raw chat prompts.",
        approach:
          "Implemented an end-to-end RAG pipeline using LangChain. Ingested PDFs were recursively chunked into overlapping passages, embedded using vector models, and indexed in FAISS/Chroma. Queries perform top-K similarity search to feed exact context chunks into an LLM prompt.",
        architecture:
          "PDF Ingestion → Recursive Character Splitting → Vector Indexing → Query Embedding → Similarity Search → Grounded LLM Response",
        learning:
          "Mastered vector storage internals, chunk overlap tuning, similarity score thresholds, and strict prompt grounding to prevent hallucinations."
      }
    },
    {
      id: "multi-agent-code-review-assistant",
      number: "03",
      title: "MULTI-AGENT CODE REVIEW ASSISTANT",
      tag: "PERSONAL PROJECT",
      tech: ["Python", "LangGraph", "LLM APIs"],
      shortDescription:
        "Built a small multi-agent pipeline with separate agents for static code analysis, bug/issue detection, and improvement suggestions, coordinated through LangGraph.",
      features: [
        "Shared state object",
        "Agent hand-offs",
        "State passing",
        "Conditional routing",
        "Multi-agent workflow"
      ],
      nodes: [
        { id: "ci", label: "CODE INPUT", sub: "Source File" },
        { id: "sa", label: "STATIC ANALYSIS", sub: "AST & Syntax Check" },
        { id: "bd", label: "BUG DETECTION", sub: "Logic & Safety Flags" },
        { id: "is", label: "IMPROVEMENT SUGGESTIONS", sub: "Refactoring Advice" }
      ],
      caseStudy: {
        role: "Individual Creator",
        problem:
          "Single-prompt code reviews often miss subtle edge-case bugs or focus heavily on style while ignoring performance bottlenecks.",
        approach:
          "Designed a modular LangGraph state machine with dedicated review agents. The Static Analysis agent inspects code syntax, the Bug Detector tests edge cases and error paths, and the Refactor Agent produces actionable improvements.",
        architecture:
          "Code State Input → Static Analyzer Agent → Bug Detection Agent → Refactor Agent → Aggregated Code Audit Report",
        learning:
          "Understood agent delegation patterns, state updates in graph nodes, and how to format structured output for dev tool integrations."
      }
    }
  ],

  howIBuild: [
    {
      step: "01",
      name: "UNDERSTAND",
      summary: "Break the problem into smaller components.",
      detail:
        "Deconstruct user requirements, define domain constraints, identify state dependencies, and model raw inputs into structured formats."
    },
    {
      step: "02",
      name: "DESIGN",
      summary: "Define agents, workflows, retrieval and system architecture.",
      detail:
        "Map agent responsibilities, choose vector retrieval strategies, design graph node transitions, and establish clear prompt boundaries."
    },
    {
      step: "03",
      name: "BUILD",
      summary: "Implement APIs, prompts, state handling and integrations.",
      detail:
        "Write clean Python modules, implement LangChain/LangGraph graphs, configure LLM parameters, and connect API layer endpoints."
    },
    {
      step: "04",
      name: "ITERATE",
      summary: "Test responses, improve workflows and refine the system.",
      detail:
        "Evaluate retrieval precision, eliminate hallucinations, optimize execution latency, and refine agent prompt structures."
    }
  ],

  education: {
    degree: "B.Tech — Computer Science Engineering",
    institution: "LNCT Bhopal Indore Campus",
    status: "Final Year",
    expectedGraduation: "Expected Graduation: 2027",
    details:
      "Core focus on Computer Science Fundamentals including Algorithms, Object-Oriented Programming, Database Systems, and Operating Systems alongside practical research in Agentic AI architectures."
  }
};
