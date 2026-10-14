export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: "ai" | "frontend" | "fullstack";
  featured: boolean;
  problem: string;
  architecture: string;
  contributions: string[];
  keyDecisions: string[];
  stack: string[];
  liveUrl?: string;
  githubUrl?: string;
  status: "Production" | "Live Demo" | "Case Study" | "Completed";
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  workType: string;
  teamSize?: string;
  summary: string;
  highlights: string[];
  stack: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  score: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; highlight?: boolean; context?: string }[];
}

export const PERSONAL_INFO = {
  name: "Asad Anwar",
  title: "Senior Software Engineer",
  specialization: "AI / GenAI & Frontend Architecture",
  tagline:
    "Building intelligent applications and thoughtful digital experiences.",
  subheadline:
    "Senior Software Engineer specializing in Generative AI, RAG systems, and intelligent multi-agent workflows — backed by 8+ years of enterprise frontend engineering and component-driven architecture.",
  email: "asadanwar60@gmail.com",
  phone: "+91 7278903558",
  calendarEmail: "asadanwar601@gmail.com",
  calendarScheduleUrl:
    "https://calendar.google.com/calendar/render?action=TEMPLATE&text=AI%20Strategy%20%26%20Project%20Discussion%20with%20Asad%20Anwar&details=Discussion%20on%20AI%20solutions%2C%20architecture%2C%20and%20engineering%20collaboration.%20Host%3A%20asadanwar601%40gmail.com&add=asadanwar601%40gmail.com&location=Google%20Meet",
  whatsapp:
    "https://wa.me/917278903558?text=Hi%20Asad%2C%20I%20would%20like%20to%20discuss%20a%20project%20with%20you.",
  location: "Kolkata, India",
  availability:
    "Available for AI Solutions, System Architecture & Engineering Opportunities",
  github: "https://github.com/asadanwar60",
  linkedin: "https://linkedin.com/in/asadanwar60",
  experienceYears: "8+",
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "AI & Generative AI",
    description:
      "Production LLM applications, retrieval architectures, and autonomous agent systems.",
    skills: [
      {
        name: "Retrieval-Augmented Generation (RAG)",
        highlight: true,
        context: "Hybrid Dense + Lexical",
      },
      {
        name: "AI Agents & Multi-Agent Systems",
        highlight: true,
        context: "CrewAI & LangChain",
      },
      {
        name: "Vector Databases",
        highlight: true,
        context: "Qdrant & ChromaDB",
      },
      {
        name: "Embeddings & Reranking",
        context: "FlashRank Cross-Encoder & BM25 / RRF",
      },
      { name: "LLM Serving & Inference", context: "Groq, LiteLLM, Ollama" },
      {
        name: "Prompt Engineering & Evaluation",
        context: "Evidence Provenance & Verification",
      },
      { name: "Text-to-SQL", context: "Schema-conditioned Query Generation" },
    ],
  },
  {
    title: "Frontend Engineering",
    description:
      "Scalable, high-performance web applications and enterprise design systems.",
    skills: [
      {
        name: "Vue.js (Vue 3 / Composition API)",
        highlight: true,
        context: "8+ Years Enterprise Experience",
      },
      {
        name: "React & Next.js",
        highlight: true,
        context: "App Router, Hooks, SSR",
      },
      {
        name: "TypeScript",
        highlight: true,
        context: "Strict typing across all layers",
      },
      {
        name: "Design Systems & Component Libraries",
        highlight: true,
        context: "Quasar, PrimeVue, Custom UI",
      },
      {
        name: "State Management",
        context: "Pinia, TanStack Query, Context API",
      },
      {
        name: "Performance Optimization",
        context: "API Debouncing, Code Splitting, Virtualization",
      },
      {
        name: "CSS Architecture & Responsive UI",
        context: "Vanilla CSS, CSS Modules, Tailwind",
      },
    ],
  },
  {
    title: "Backend & Full-Stack",
    description:
      "Robust REST APIs, data persistence, and application infrastructure.",
    skills: [
      {
        name: "Python",
        highlight: true,
        context: "FastAPI, Data Pipelines, AI Tooling",
      },
      {
        name: "FastAPI",
        highlight: true,
        context: "High-throughput async endpoints",
      },
      { name: "Node.js & AdonisJS", context: "Enterprise API servers" },
      {
        name: "PostgreSQL & SQLite",
        context: "Relational modeling & indexing",
      },
      {
        name: "REST API Architecture",
        context: "JWT/OTP Auth, Rate Limiting, Schemas",
      },
      {
        name: "Docker",
        context: "Containerization & reproducible environments",
      },
    ],
  },
  {
    title: "AI-Assisted Workflow & Tooling",
    description:
      "Accelerated development using modern agentic coding and engineering workflows.",
    skills: [
      {
        name: "Agentic Development Tools",
        highlight: true,
        context: "Antigravity, Cursor, Claude Code, GitHub Copilot",
      },
      {
        name: "Version Control & CI/CD",
        context: "Git, GitHub, GitLab Pipelines",
      },
      {
        name: "Testing & Quality Assurance",
        context: "Cypress (E2E), TDD practices, Code Review",
      },
      {
        name: "Workflow Automation",
        context: "n8n, Webhook triggers, Automation scripts",
      },
      { name: "Project Delivery", context: "Agile / Scrum, Notion, ClickUp" },
    ],
  },
];

export interface Service {
  id: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  stack: string[];
  icon: "Bot" | "Database" | "Layers" | "Workflow";
}

export const SERVICES: Service[] = [
  {
    id: "ai-workflow-automation",
    title: "AI Workflow & Operations Automation",
    tagline:
      "Eliminate repetitive manual work across your business operations.",
    description:
      "Automate time-consuming, multi-step business workflows so your team can focus on high-value initiatives. From intelligent document parsing to 24/7 background agent execution.",
    deliverables: [
      "Document & Invoice processing: invoices, contracts, and PDFs automatically parsed, summarized, and routed",
      "Email & communication automation: intelligent monitoring, priority categorization, and AI-drafted replies",
      "Internal operations automation: task routing, approval flows, notifications, and data entry via n8n",
      "CRM & pipeline automation: lead qualification, automated follow-up sequences, and activity tracking",
    ],
    stack: ["n8n", "Python", "FastAPI", "Webhooks", "LangChain", "Groq"],
    icon: "Workflow",
  },
  {
    id: "omnichannel-ai-agents",
    title: "Omnichannel AI Agents & Customer Engagement",
    tagline: "Never leave a customer waiting or an inquiry unresolved.",
    description:
      "Custom conversational AI agents across Web Chat, Telegram, and messaging platforms that understand customer intent, verify accounts, and perform real actions safely.",
    deliverables: [
      "Three-tier role-based agents (Public guest, Verified customer, Admin operations) with strict permission guardrails",
      "Model Context Protocol (MCP) tool integration: giving agents secure access to live inventory and orders",
      "Telegram Bot & Web Chat interfaces with shared, role-isolated conversation memory",
      "24/7 autonomous support triage, inquiry handling, appointment booking, and automated escalation",
    ],
    stack: ["LangChain", "CrewAI", "MCP", "Telegram API", "Next.js", "FastAPI"],
    icon: "Bot",
  },
  {
    id: "rag-knowledge-systems",
    title: "Enterprise RAG & Private Knowledge Systems",
    tagline:
      "Accurate, grounded answers from your private company data — zero hallucinations.",
    description:
      "Transform sprawling internal documentation, product manuals, and enterprise databases into grounded conversational search engines that your team and customers can trust.",
    deliverables: [
      "Hybrid retrieval architectures: combining lexical search (BM25 / Full-Text Search) with dense semantic embeddings",
      "Vector database implementation & indexing (PostgreSQL pgvector, Qdrant, ChromaDB)",
      "FlashRank cross-encoder reranking & Reciprocal Rank Fusion for maximum precision",
      "Claim-level citation provenance ensuring every answer links back to verified source text",
    ],
    stack: [
      "PostgreSQL",
      "pgvector",
      "Qdrant",
      "ChromaDB",
      "FlashRank",
      "LiteLLM",
    ],
    icon: "Database",
  },
  {
    id: "custom-ai-software",
    title: "Custom Software & Full-Stack AI Development",
    tagline:
      "Purpose-built software that fits your exact workflow, not a generic template.",
    description:
      "End-to-end full-stack development combining responsive, polished frontend interfaces with intelligent AI backend infrastructure and robust database architecture.",
    deliverables: [
      "Full-stack web applications with native AI integrations and real-time streaming token UI",
      "Enterprise frontend architecture: reusable design systems in Vue 3 (Composition API) and React / Next.js",
      "High-performance async APIs in Python (FastAPI) and Node.js with PostgreSQL",
      "Secure multi-tenant data architecture with JWT, OAuth, and OTP authentication",
    ],
    stack: [
      "Vue 3",
      "React",
      "Next.js",
      "TypeScript",
      "FastAPI",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    icon: "Layers",
  },
];

export const CLIENT_PROCESS = [
  {
    step: "01",
    title: "Listen & Discover",
    description:
      "We start by understanding your existing workflows, bottlenecks, current toolstack, and where AI creates immediate operational leverage and cost savings.",
  },
  {
    step: "02",
    title: "Map & Architect",
    description:
      "I design the technical blueprint: agent boundaries, database schemas, hybrid retrieval strategies, and tool integrations (MCP/APIs) before writing code.",
  },
  {
    step: "03",
    title: "Build & Deploy",
    description:
      "Phased implementation where each milestone delivers a functional, tested component into your environment with thorough documentation and handoff.",
  },
];

export const WHY_WORK_WITH_ME = [
  {
    title: "End-to-End Delivery",
    description:
      "Strategy, architecture, frontend UI, backend APIs, agent orchestration, and deployment — one dedicated engineering partner throughout.",
  },
  {
    title: "Production Rigor, Not Demos",
    description:
      "8+ years engineering scalable enterprise FinTech and workflow automation platforms applied directly to AI reliability and uptime.",
  },
  {
    title: "Privacy & Control First",
    description:
      "Role-isolated session memories, strict Model Context Protocol (MCP) permission boundaries, and private deployment options.",
  },
  {
    title: "Grounded & Verifiable",
    description:
      "Precision hybrid retrieval (dense + lexical BM25) and claim-level verification to prevent hallucinations and keep responses trustworthy.",
  },
  {
    title: "Transparent Collaboration",
    description:
      "Clear milestone demos, regular updates, documented schemas, and clean maintainable code — no black boxes or vendor lock-in.",
  },
  {
    title: "Cost & Speed Optimized",
    description:
      "Architected for low latency (sub-500ms token generation with Groq) and cost-effective token utilization without unnecessary bloat.",
  },
];

export const PROJECTS: Project[] = [
  {
    id: "omnichannel-commerce-agent",
    title: "Omnichannel Autonomous Commerce & Operations Agent",
    tagline:
      "AI-powered commerce and store operations platform for guests, customers, and admins via Web Chat and Telegram.",
    category: "ai",
    featured: true,
    status: "Completed",
    problem:
      "E-commerce stores and retail operations struggle with fragmented touchpoints: guests require instant product guidance, customers require real-time verified order tracking, and store managers need secure, audited administration across both web and mobile messaging channels without disjointed context.",
    architecture:
      "Engineered a three-tier role-based agent system (Public, Customer, Admin) orchestrating LangChain and n8n with Groq LLM inference. Implements hybrid RAG combining PostgreSQL pgvector embeddings and PostgreSQL Full-Text Search. Integrates Model Context Protocol (MCP) for controlled, secure access to business tools, with role-isolated conversation memory and omnichannel messaging across Next.js Web Chat and Telegram Bot API.",
    contributions: [
      "Architected three-tier role-based agent personas (Public, Customer, Admin) with granular permission boundaries and isolated conversation memories.",
      "Built hybrid RAG combining PostgreSQL pgvector dense semantic retrieval with PostgreSQL Full-Text Search (tsvector/tsquery) and Reciprocal Rank Fusion.",
      "Integrated Model Context Protocol (MCP) clients to securely bridge the LLM agent to internal store inventory and transaction systems.",
      "Engineered bidirectional omnichannel workflows spanning Next.js web chat and Telegram Bot API using n8n and FastAPI.",
      "Optimized inference throughput using Groq for near-instant sub-500ms responses across all communication channels.",
    ],
    keyDecisions: [
      "Standardized on PostgreSQL + pgvector + Full-Text Search to run relational data, vector search, and lexical matching in a unified ACID database, eliminating synchronization lag.",
      "Adopted Model Context Protocol (MCP) to enforce strict schema validation and permission guardrails around administrative store actions.",
      "Enforced role-isolated session storage so guest and customer interactions cannot inspect or execute internal management tools.",
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Python",
      "FastAPI",
      "n8n",
      "LangChain",
      "Groq",
      "PostgreSQL",
      "pgvector",
      "MCP",
      "Telegram Bot API",
    ],
  },
  {
    id: "medical-ai-assistant",
    title: "Medical AI Clinical Assistant",
    tagline:
      "Evidence-conditioned medical assistant with hybrid RAG and cross-encoder reranking.",
    category: "ai",
    featured: true,
    status: "Case Study",
    problem:
      "Clinical query answering requires near-zero hallucination rates, strict grounding in peer-reviewed medical literature, and traceable citations for clinical verification.",
    architecture:
      "Engineered a two-stage hybrid retrieval pipeline combining dense semantic search (PubMedBERT) and lexical search (BM25) fused via Reciprocal Rank Fusion (RRF). Retrieved candidate chunks are reranked using FlashRank cross-encoder models before being passed to Groq/LiteLLM for grounded synthesis with claim-level evidence citations.",
    contributions: [
      "Designed the complete ingestion and chunking strategy optimized for clinical papers and biomedical text.",
      "Implemented hybrid retrieval fusing sparse (BM25) and dense embeddings in ChromaDB using Reciprocal Rank Fusion.",
      "Integrated FlashRank cross-encoder reranker, significantly improving top-k precision for domain-specific queries.",
      "Built a claim-level verification layer that attaches verifiable evidence provenance to every generated medical insight.",
    ],
    keyDecisions: [
      "Chose hybrid retrieval (BM25 + PubMedBERT) over dense-only to prevent missing critical clinical acronyms and exact drug dosages.",
      "Applied local cross-encoder reranking to keep latency under 450ms while maximizing context relevance.",
      "Used Groq-accelerated inference with LiteLLM fallback to balance blazing generation speed with high availability.",
    ],
    stack: [
      "Python",
      "FastAPI",
      "ChromaDB",
      "PubMedBERT",
      "BM25",
      "RRF",
      "FlashRank",
      "Groq",
      "LiteLLM",
    ],
  },
  {
    id: "ai-newsletter-agent",
    title: "AI Newsletter Multi-Agent System",
    tagline:
      "Autonomous multi-agent system orchestrating research, drafting, and editorial review.",
    category: "ai",
    featured: true,
    status: "Case Study",
    problem:
      "Creating high-signal technical newsletters manually takes 8-12 hours per issue, suffering from inconsistent sourcing, editorial bias, and repetitive manual synthesis.",
    architecture:
      "Built with CrewAI to orchestrate three specialized autonomous agents: a Researcher agent querying Serper API for emerging breakthroughs, a Writer agent synthesizing findings into compelling technical prose, and a Proofreader agent checking fact claims, grammar, and link provenance before final markdown generation.",
    contributions: [
      "Defined explicit role-based personas, task delegation rules, and validation guardrails using CrewAI.",
      "Integrated Serper search API with custom filtering to exclude paywalls and low-quality syndicated content.",
      "Designed a deterministic validation step ensuring all claims reference genuine URLs discovered during research.",
      "Automated the end-to-end pipeline from topic prompt to publish-ready newsletter in under 3 minutes.",
    ],
    keyDecisions: [
      "Separated research, writing, and editorial critique into distinct agents to prevent single-turn LLM bias and hallucination.",
      "Implemented strict output schemas for each agent handoff, ensuring zero malformed payload failures.",
    ],
    stack: [
      "Python",
      "CrewAI",
      "Groq",
      "Serper API",
      "Multi-Agent Systems",
      "Prompt Engineering",
    ],
  },
  {
    id: "rag-document-chat-cold-email",
    title: "RAG Document Chat & AI Cold Email Generator",
    tagline:
      "Contextual document Q&A and personalized outreach generator powered by vector search.",
    category: "ai",
    featured: true,
    status: "Case Study",
    problem:
      "Professionals waste hours parsing dense PDF manuals and crafting personalized outreach that resonates with job descriptions and company initiatives.",
    architecture:
      "Dual-capability AI tool: (1) Ingests complex PDFs, parses semantic structures, indexes embeddings in Qdrant, and runs grounded contextual Q&A; (2) Uses Firecrawl to scrape target job postings, extracts key requirements, and performs vector search over candidate portfolio experience to draft tailored, high-converting outreach.",
    contributions: [
      "Engineered document ingestion, recursive chunking, and Hugging Face embedding generation.",
      "Implemented Qdrant vector storage with payload filtering for tenant and document isolation.",
      "Integrated Firecrawl web scraper to dynamically ingest live target websites and parse employment criteria.",
      "Built personalized cold-email generator connecting prospect requirements to relevant candidate experience.",
    ],
    keyDecisions: [
      "Adopted Qdrant vector database for its lightweight footprint, payload filtering, and high search throughput.",
      "Used LangChain LCEL (LangChain Expression Language) for deterministic streaming response chains.",
    ],
    stack: [
      "Python",
      "LangChain",
      "Qdrant",
      "Hugging Face Embeddings",
      "Groq",
      "Firecrawl",
    ],
  },
  {
    id: "text-to-sql-ai",
    title: "Text-to-SQL Natural Language Query Engine",
    tagline:
      "Converts natural language business questions into safe, executable SQL with structured results.",
    category: "ai",
    featured: false,
    status: "Case Study",
    problem:
      "Non-technical stakeholders frequently depend on data teams to write ad-hoc SQL queries for everyday reporting and exploratory data analysis.",
    architecture:
      "FastAPI service connecting natural language inputs to database schemas. Injects database metadata into a constrained LangChain generation pipeline powered by Groq, validates generated SQL against a read-only execution harness, runs the query against SQLite/PostgreSQL, and returns tabular data with natural language explanations.",
    contributions: [
      "Built dynamic schema introspection that injects table definitions and foreign keys without exceeding context limits.",
      "Implemented SQL AST validation to restrict execution strictly to safe read-only SELECT operations.",
      "Added query error recovery: if an execution error occurs, the error traceback is reflected to the model for self-correction.",
    ],
    keyDecisions: [
      "Enforced read-only transaction wrappers and query parameterization to eliminate SQL injection risks.",
      "Utilized Groq inference for sub-second generation times, enabling interactive querying UX.",
    ],
    stack: ["Python", "FastAPI", "LangChain", "Groq", "SQLite", "SQLAlchemy"],
  },
  {
    id: "ai-enterprise-chat-platform",
    title: "AI Enterprise Chat & Knowledge Workspace",
    tagline:
      "Multi-tenant, cross-platform AI assistant workspace with organization and persona management.",
    category: "fullstack",
    featured: true,
    status: "Completed",
    problem:
      "Enterprise teams require a centralized, secure AI assistant platform supporting custom departmental knowledge bases, role-based personas, and uniform mobile/web access.",
    architecture:
      "Engineered an organization → role → user → knowledge hierarchical multi-tenant architecture. Built a single shared Vue 3 / Quasar codebase compiled to Web, PWA, and iOS via Capacitor. Secured with JWT and Google OAuth / OTP authentication with real-time streaming LLM response tokens.",
    contributions: [
      "Architected the frontend multi-tenant state and workspace switching logic in Pinia.",
      "Implemented real-time streaming chat rendering with markdown syntax highlighting and code block copy actions.",
      "Shipped cross-platform builds across Web, PWA, and iOS from one clean unified codebase.",
      "Integrated role-based AI persona selectors and context-aware conversation threading.",
    ],
    keyDecisions: [
      "Used Quasar Framework + Capacitor to achieve 100% UI code reuse across web, desktop, and mobile iOS apps.",
      "Standardized on SSE (Server-Sent Events) for resilient streaming token delivery across mobile networks.",
    ],
    stack: [
      "Vue 3",
      "Quasar",
      "Pinia",
      "Vue Router",
      "JWT / OTP",
      "Capacitor",
      "PWA",
      "Docker",
    ],
  },
  {
    id: "enterprise-fintech-trading-platform",
    title: "Enterprise Private Asset Trading Platform",
    tagline:
      "Multi-repo FinTech platform handling multi-currency institutional transactions and asset management.",
    category: "frontend",
    featured: true,
    status: "Production",
    problem:
      "Complex institutional asset management required coordinating three large enterprise applications (Admin Portal, Investor Portal, Asset Manager) across 5 repositories with strict financial accuracy and zero UI redundancy.",
    architecture:
      "Spearheaded frontend engineering within a 24-person team (1 of 3 frontend engineers). Built a centralized reusable component library adopted across all 3 portals, optimized high-frequency financial API requests using TanStack Query debouncing, and implemented mission-critical workflows for deposits, withdrawals, and capital raises.",
    contributions: [
      "Architected and maintained a platform-wide shared component library (tables, dialogs, forms, tooltips) eliminating duplicated UI development.",
      "Engineered multi-currency deposit, withdrawal, real-time FX conversion, and capital raise workflows.",
      "Optimized API query invalidation and request debouncing with TanStack Query, drastically reducing network overhead.",
      "Embedded AI-assisted workflows (GitHub Copilot, Cursor, Antigravity) into daily development, testing, and documentation.",
    ],
    keyDecisions: [
      "Decoupled common UI components into an internal package to ensure consistent design and behavior across 5 repositories.",
      "Implemented strict request debouncing and caching layers to prevent duplicate transactional submissions in high-latency network conditions.",
    ],
    stack: [
      "Vue.js",
      "TypeScript",
      "Quasar Framework",
      "Pinia",
      "TanStack Query",
      "REST APIs",
      "Webpack",
      "GitLab",
    ],
  },
  {
    id: "workflow-automation-saas",
    title: "Workflow Automation & Project Management SaaS",
    tagline:
      "Jira/ClickUp-style project management SaaS with Kanban, sprint planning, and interactive analytics.",
    category: "frontend",
    featured: false,
    status: "Completed",
    problem:
      "Teams needed an agile, highly responsive project management tool with unified sprint planning, rich documentation editing, and activity tracking.",
    architecture:
      "Delivered 6 core workflow automation modules: sprint planning, task boards, activity timelines, dashboards, notes/wiki, and reporting. Integrated TipTap rich text editor with markdown support and ApexCharts for real-time velocity metrics. Extended backend features using AdonisJS and PostgreSQL.",
    contributions: [
      "Engineered high-performance Kanban and interactive list views supporting drag-and-drop task reorganizations.",
      "Integrated TipTap rich text editor and built real-time analytics dashboards with ApexCharts.",
      "Expanded test coverage with Cypress E2E testing and strengthened release reliability in GitLab CI/CD pipelines.",
      "Owned both frontend components and backend AdonisJS services, handling database schema updates in PostgreSQL.",
    ],
    keyDecisions: [
      "Chose TipTap headless editor for custom extension support and clean JSON document storage.",
      "Utilized Cypress E2E suites for mission-critical sprint transition and workflow automation paths.",
    ],
    stack: [
      "Vue.js",
      "TypeScript",
      "Quasar",
      "Pinia",
      "TipTap",
      "ApexCharts",
      "AdonisJS",
      "PostgreSQL",
      "Cypress",
    ],
  },
  {
    id: "react-productivity-ecommerce",
    title: "React Productivity Hub & E-Commerce Platform",
    tagline:
      "Full-featured e-commerce and task management application with real-time cart and filtering.",
    category: "frontend",
    featured: false,
    status: "Completed",
    problem:
      "Demonstrating clean React state architecture, full loading/error/empty lifecycle management, and seamless e-commerce checkout flows.",
    architecture:
      "Built with React, TypeScript, Context API, and Tailwind CSS. Features full catalog search, category filtering, cart persistence, guest/authenticated checkouts, and clean UI feedback states across all user flows.",
    contributions: [
      "Implemented decoupled cart state with localStorage persistence and optimistic item count updates.",
      "Designed defensive loading, error, and empty states across all interactive views.",
      "Deployed and maintained live production build on Netlify.",
    ],
    keyDecisions: [
      "Maintained zero external state dependencies by utilizing native React Context and custom hooks.",
    ],
    // liveUrl: "https://reactcrudtaskflow.netlify.app/",
    stack: [
      "React",
      "TypeScript",
      "Context API",
      "Tailwind CSS",
      "Vite",
      "REST APIs",
    ],
  },
];

export const EXPERIENCES: Experience[] = [
  {
    company: "EviDev LLP",
    role: "Software Engineer",
    period: "Apr 2024 – Jul 2026",
    location: "Kolkata, India",
    workType: "Remote",
    teamSize: "24-person team · 3-person frontend team · 5 repositories",
    summary:
      "Spearheaded frontend development across 3 enterprise applications (Admin Portal, Investor Portal, Asset Manager) within a 5-repository FinTech platform.",
    highlights: [
      "Engineered portfolio management workflows covering multi-currency deposits, withdrawals, real-time currency conversion, capital raise, and institutional asset management.",
      "Optimized API interactions using debouncing and TanStack Query, cutting unnecessary network requests and improving responsiveness across portfolio workflows.",
      "Architected a platform-wide reusable component library (dialogs, tooltips, buttons, tables, forms) adopted across all 3 applications, eliminating duplicated UI development.",
      "Modernized complex legacy modules into a maintainable, component-driven architecture standardizing engineering patterns across 5 repositories.",
      "Designed and integrated secure REST APIs supporting enterprise-grade financial workflows in close collaboration with backend engineering.",
      "Accelerated engineering productivity by embedding GitHub Copilot, Cursor, Codex, Trae, Antigravity, and agent-based workflows into daily development, debugging, and documentation.",
    ],
    stack: [
      "Vue.js",
      "TypeScript",
      "Quasar Framework",
      "Pinia",
      "TanStack Query",
      "REST APIs",
      "Axios",
      "Webpack",
      "GitLab",
      "ClickUp",
      "Notion",
    ],
  },
  {
    company: "Han River Technology Pvt Ltd",
    role: "Software Engineer",
    period: "Nov 2023 – Jan 2024",
    location: "Kolkata, India",
    workType: "Remote",
    teamSize: "10-person team · 3 repositories · Delivered in 3 weeks",
    summary:
      "Shipped hotel booking and Business Park Management applications end-to-end using Vue.js and PrimeVue, completing full delivery within a tight 3-week deadline.",
    highlights: [
      "Built reusable administrator and customer-facing UI modules across 3 repositories — including a comprehensive admin panel for user registration, leasing inquiries, and sub-admin management.",
      "Implemented robust form validation with Vue Validator and integrated Vue Cropper for image upload and cropping workflows.",
      "Integrated secure REST APIs for booking and application management workflows.",
    ],
    stack: [
      "Vue.js",
      "PrimeVue",
      "Vue Cropper",
      "Vue Validator",
      "REST APIs",
      "Vite",
    ],
  },
  {
    company: "Struxe",
    role: "Software Developer",
    period: "Jul 2022 – Oct 2023",
    location: "Kolkata, India",
    workType: "Hybrid",
    teamSize: "8-person engineering team",
    summary:
      "Delivered 6 core workflow automation modules (sprint planning, project tracking, notes management, activity timelines, dashboards, reporting) as part of an 8-person engineering team.",
    highlights: [
      "Launched a shared UI component library adopted across all product modules, driving consistency and cutting redundant development platform-wide.",
      "Enabled rich text editing by integrating TipTap Editor and built interactive analytics dashboards using ApexCharts.",
      "Strengthened release reliability by extending GitLab CI/CD pipelines and expanding Cypress end-to-end test coverage.",
      "Expanded into backend development alongside frontend ownership, building services with AdonisJS, PostgreSQL, and Docker.",
    ],
    stack: [
      "Vue.js",
      "TypeScript",
      "Quasar Framework",
      "Pinia",
      "TipTap",
      "ApexCharts",
      "AdonisJS",
      "PostgreSQL",
      "Docker",
      "GitLab",
      "Cypress",
    ],
  },
  {
    company: "WiseBoxs Technologies",
    role: "Frontend Developer (Part-time)",
    period: "Mar 2020 – Aug 2022",
    location: "Kolkata, India",
    workType: "Hybrid",
    summary:
      "Delivered frontend features using HTML, CSS, Bootstrap, and jQuery, with backend exposure to PHP, CodeIgniter, MySQL, and server administration.",
    highlights: [
      "Developed responsive client-facing interfaces across e-commerce and business portals.",
      "Managed server administration tasks including cPanel, WHM, and domain setups.",
      "Connected frontend forms and views with PHP/CodeIgniter backend systems.",
    ],
    stack: [
      "HTML5",
      "CSS3",
      "Bootstrap",
      "jQuery",
      "PHP",
      "CodeIgniter",
      "MySQL",
    ],
  },
  {
    company: "Independent / Freelance",
    role: "Software Engineer",
    period: "Feb 2019 – Jun 2022",
    location: "Kolkata, India",
    workType: "Client Projects",
    summary:
      "Planned, developed, and deployed custom web applications for clients across multiple business domains, owning the full project lifecycle from requirements gathering to production release.",
    highlights: [
      "Engineered responsive frontend solutions using Vue.js, JavaScript, HTML, CSS, Bootstrap, and CodeIgniter.",
      "Maintained and enhanced live applications alongside ongoing feature delivery and performance optimization.",
    ],
    stack: [
      "Vue.js",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "PHP (CodeIgniter)",
      "MySQL",
    ],
  },
  {
    company: "Codeclouds IT Solutions Pvt. Ltd.",
    role: "Frontend Developer",
    period: "Jun 2017 – Jul 2018",
    location: "Greater Kolkata Area",
    workType: "On-site",
    summary:
      "Transformed PSD designs into responsive, cross-browser web pages and partnered with backend developers to connect interfaces with PHP applications.",
    highlights: [
      "Ensured pixel-perfect implementation of visual designs across standard desktop and mobile browsers.",
      "Partnered with backend engineers to integrate REST/PHP endpoints seamlessly.",
    ],
    stack: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "jQuery", "PHP"],
  },
];

export const EDUCATION_LIST: Education[] = [
  {
    degree: "B.Tech, Computer Science & Engineering",
    institution: "Seacom Engineering College",
    period: "2019 – 2022",
    score: "CGPA: 8.68 / 10",
  },
  {
    degree: "Diploma, Computer Science & Technology",
    institution: "The Calcutta Technical School",
    period: "2014 – 2017",
    score: "CGPA: 7.00 / 10",
  },
  {
    degree: "Higher Secondary (Science)",
    institution: "Shree Jain Vidyalaya",
    period: "2014",
    score: "Grade: 55.2%",
  },
  {
    degree: "Secondary Examination",
    institution: "Bodhiacarya Senior Secondary School",
    period: "2011",
    score: "CGPA: 7.4 / 10",
  },
];

export const CERTIFICATIONS = [
  { name: "J2EE Enterprise Application Development" },
  { name: "Android Application Development" },
  { name: "Web Page Design & UI Engineering" },
];

export const LANGUAGES = [
  { name: "English", level: "Professional working proficiency" },
  { name: "Hindi", level: "Native / Bilingual" },
  { name: "Bengali", level: "Native / Bilingual" },
  { name: "Urdu", level: "Professional working proficiency" },
];
