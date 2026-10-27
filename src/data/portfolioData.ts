import {
  SiPython, SiPytorch, SiScikitlearn, SiPandas, SiNumpy,
  SiFastapi, SiDocker, SiGit, SiJupyter,
  SiStreamlit, SiApachekafka, SiSelenium, SiSqlite, SiTensorflow, SiFlask, SiCanvas
} from "react-icons/si";
import { Brain, Database, LineChart, Code2, BarChart3 } from "lucide-react";
import type { ProjectCoverData } from "@/components/ProjectCover";

export interface Project {
  title: string;
  category: string;
  tag: string;
  desc: string;
  tech: string[];
  cover: ProjectCoverData;
  codeUrl: string;
  deployUrl: string;
  metrics?: string;
  featured: boolean;
  context?: string;
}


export const PORTFOLIO_DATA = {
  personal: {
    name: "Andika Putra Perdana",
    tagline:
      "I build machine learning systems that make it to production — not just notebooks.",
    description:
      "7th-semester Informatics student at Universitas Gunadarma and a Data & AI Engineer. Experienced in public-sector data analysis at Diskominfo Depok, clinical ML research (SiPEKA, 99.34% accuracy), industry capstones (SignBank AI), and production MLOps architectures built on FastAPI, Docker, and vector search.",
    location: "Jakarta, Indonesia",
    email: "andikaputh1@gmail.com",
    socials: {
      github: "https://github.com/Andikaputh",
      linkedin: "https://www.linkedin.com/in/andikaputraperdana/",
      instagram: "https://www.instagram.com/andika.p.p/",
    },
    cvPath: "/assets/cv.pdf",
    profileImage: "/assets/profile.webp",
    statusText: "Open to Data & AI roles",
  },

  metrics: [
    { label: "Best Model Accuracy", value: "99.34%", sub: "SiPEKA test accuracy (XGBoost)" },
    { label: "Usability Validation", value: "85 SUS", sub: "Grade A / Excellent" },
    { label: "Documented Projects", value: "9 Projects", sub: "API, dashboard & web app" },
  ],

  education: {
    institution: "Universitas Gunadarma",
    program: "B.Sc. Informatics",
    status: "7th semester · Active",
    location: "Depok, West Java",
    focus: "Machine Learning, Data Engineering, Distributed Systems",
  },

  skills: [
    {
      category: "Data Engineering, Analytics & AI",
      badge: "PRIMARY FOCUS",
      featured: true,
      groups: [
        {
          label: "Core Competencies",
          items: [
            { name: "Machine Learning", Icon: Brain, color: "text-rose-400" },
            { name: "Data Analysis & Visualization", Icon: BarChart3, color: "text-blue-400" },
            { name: "Deep Learning", Icon: SiTensorflow, color: "text-orange-400" },
            { name: "RAG & Vector Search", Icon: Database, color: "text-sky-400" },
            { name: "Statistical & Trend Analysis", Icon: LineChart, color: "text-amber-400" },
          ],
        },
        {
          label: "Libraries & Frameworks",
          items: [
            { name: "Pandas", Icon: SiPandas, color: "text-indigo-400" },
            { name: "NumPy", Icon: SiNumpy, color: "text-blue-400" },
            { name: "Scikit-Learn", Icon: SiScikitlearn, color: "text-orange-400" },
            { name: "PyTorch", Icon: SiPytorch, color: "text-rose-500" },
            { name: "FastAPI", Icon: SiFastapi, color: "text-emerald-400" },
            { name: "Flask", Icon: SiFlask, color: "text-neutral-300" },
          ],
        },
        {
          label: "Visualization & Tools",
          items: [
            { name: "Tableau", Icon: BarChart3, color: "text-blue-500" },
            { name: "Jupyter", Icon: SiJupyter, color: "text-orange-500" },
            { name: "Docker", Icon: SiDocker, color: "text-sky-400" },
            { name: "Git", Icon: SiGit, color: "text-orange-600" },
            { name: "Canva", Icon: SiCanvas, color: "text-teal-400" },
          ],
        },
      ],
    },
    {
      category: "Backend & Data Pipelines",
      badge: "SYSTEMS & PIPELINES",
      featured: false,
      groups: [
        {
          label: "Languages & Core",
          items: [
            { name: "Python", Icon: SiPython, color: "text-yellow-400" },
            { name: "SQL", Icon: Database, color: "text-sky-300" },
          ],
        },
        {
          label: "Frameworks & API",
          items: [
            { name: "FastAPI", Icon: SiFastapi, color: "text-emerald-400" },
            { name: "Streamlit", Icon: SiStreamlit, color: "text-rose-400" },
            { name: "RESTful API", Icon: Code2, color: "text-purple-400" },
          ],
        },
        {
          label: "Data Pipelines & Scraping",
          items: [
            { name: "Redpanda / Kafka", Icon: SiApachekafka, color: "text-rose-500" },
            { name: "Selenium Scraping", Icon: SiSelenium, color: "text-emerald-500" },
            { name: "SQLite", Icon: SiSqlite, color: "text-sky-400" },
          ],
        },
      ],
    },
  ],

  experiences: [
    // --- TECHNICAL & AI EXPERIENCE ---
    {
      type: "technical",
      title: "Data Analyst Intern",
      role: "Data Analyst Intern",
      company: "Department of Communication and Information Technology (Diskominfo), Depok City",
      period: "Sep 2026 - Present",
      location: "Depok, West Java · On-site",
      highlights: [
        "Contributed to the management, processing, and analysis of sectoral statistical data for the City of Depok to support effective public information delivery.",
        "Built interactive Tableau dashboards to visualize key statistical indicators and communicate data-driven insights.",
        "Designed data-driven infographics in Canva to present statistical information in a clear, communicative, and visually engaging way.",
        "Transformed raw data into informative visual outputs to support public information dissemination and data-driven decision-making."
      ],
      skills: ["Data Analysis", "Tableau", "Data Processing", "Canva", "Sectoral Statistics", "Data Visualization"]
    },
    {
      type: "technical",
      title: "Data Science & AI Capstone Team Lead",
      role: "Team Leader & AI Engineer",
      company: "Asah Bootcamp by Dicoding",
      period: "Oct 2026 - Present",
      location: "Remote",
      highlights: [
        "Led a cross-functional team in designing and building data analytics and AI-based systems for local MSMEs."
      ],
      skills: ["Team Leadership", "Data Analytics", "AI System Design"]
    },
    {
      type: "technical",
      title: "Cohort: AI Engineer",
      role: "AI & Deep Learning Participant",
      company: "Coding Camp powered by DBS Foundation",
      period: "Feb 2026 - Jul 2026",
      location: "Remote",
      highlights: [
        "Studied Machine Learning, Deep Learning, NLP, Computer Vision, and MLOps using TensorFlow.",
        "Built SignBank as the capstone project: a real-time Computer Vision sign-language-to-text platform that helps bank tellers communicate with Deaf customers."
      ],
      skills: ["TensorFlow", "Deep Learning", "Computer Vision", "NLP", "MLOps", "Python"]
    },
    {
      type: "technical",
      title: "Assistant of High Performance Computing (HPC)",
      role: "Teaching Assistant & Lab Support",
      company: "HPC Universitas Gunadarma",
      period: "Oct 2024 - May 2025",
      location: "Depok, West Java · Hybrid",
      highlights: [
        "Provided technical support, supercomputer/DGX access troubleshooting, and lab guidance for students.",
        "Coordinated lab operations, focus group discussions (FGD), and divisional events."
      ],
      skills: ["High-Performance Computing", "Python", "Data Science", "Troubleshooting"]
    },

    // --- LEADERSHIP & ORGANIZATIONAL VOLUNTEER ---
    {
      type: "leadership",
      title: "Event Operations Coordinator",
      role: "Coordinator & Liaison Officer",
      company: "BEM FTI Universitas Gunadarma",
      period: "Jul 2024 - Sep 2024",
      location: "Depok, West Java",
      highlights: [
        "PKKMB FTI 2024: Designed route mapping and parade closing flows to keep crowd movement smooth.",
        "It's Sociart 2024: Managed Mobile Legends tournament operations and served as the participants' Liaison Officer."
      ],
      skills: ["Event Operations", "Problem Solving", "Crowd Control", "Communication"]
    },
    {
      type: "leadership",
      title: "Paranovo Batch 3 (TikTok Content Management)",
      role: "Team Leader & Video Editor",
      company: "Novo Club by Paragon Corp",
      period: "Mar 2024 - Sep 2024",
      location: "Jakarta, Indonesia · Hybrid",
      highlights: [
        "Led the TikTok content management team, from ideation and production flow to content performance evaluation.",
        "Developed leadership, problem-solving, and creative project management skills."
      ],
      skills: ["Team Leadership", "Project Management", "Digital Strategy"]
    }
  ],

  projects: [
    {
      title: "SiPEKA: Early Preeclampsia Risk Prediction",
      category: "Academic & Machine Learning",
      tag: "UNDERGRADUATE THESIS",
      desc: "An XGBoost + SMOTE preeclampsia risk prediction web app with 99.34% accuracy and 0.9993 AUC. Includes clinical safety-override rules, automatic MAP/BMI calculation, and print-ready medical reports. Validated with an SUS score of 85 (Excellent).",
      tech: ["Python", "Flask", "XGBoost", "SMOTE", "Scikit-Learn"],
      cover: { label: "CLINICAL ML · XGBOOST", icon: "brain" },
      codeUrl: "https://github.com/Andikaputh/sipeka",
      deployUrl: "https://sipeka.onrender.com/",
      metrics: "Accuracy: 99.34% | SUS: 85 (Excellent)",
      featured: true,
      context: "Undergraduate Thesis: Universitas Gunadarma"
    },
    {
      title: "SignBank: AI Sign Language Translation",
      category: "Bootcamp Capstone & AI",
      tag: "DBS CAMP CAPSTONE",
      desc: "A real-time Computer Vision and Deep Learning sign-language-to-text platform that helps bank tellers communicate with Deaf customers.",
      tech: ["Python", "TensorFlow", "Deep Learning", "Computer Vision", "OpenCV", "Next.js"],
      cover: { label: "COMPUTER VISION · REAL-TIME", icon: "scan" },
      codeUrl: "",
      deployUrl: "https://signbank-ai.vercel.app/",
      metrics: "Real-time Vision Inference",
      featured: true,
      context: "Capstone Project: Coding Camp by DBS Foundation"
    },
    {
      title: "Production-Grade Recommendation System",
      category: "MLOps & AI Engineering",
      tag: "PROD-GRADE MLOPS",
      desc: "An end-to-end personalized recommendation system with an offline pipeline (SVD, MLflow, SQLite) and online serving (FastAPI, Docker, Render PaaS).",
      tech: ["Python", "TruncatedSVD", "MLflow", "FastAPI", "SQLite", "Docker", "Render"],
      cover: { label: "OFFLINE PIPELINE · ONLINE SERVING", icon: "layers" },
      codeUrl: "https://github.com/Andikaputh/production-recommendation-system",
      deployUrl: "https://production-recommendation-system.onrender.com/recommendations/123",
      metrics: "Precision@10 & Cold-Start Fallback",
      featured: true,
    },
    {
      title: "AI-Powered PDF Q&A (RAG Lite)",
      category: "GenAI & LLM Workflows",
      tag: "RAG & VECTOR SEARCH",
      desc: "An interactive PDF question-answering app using Hugging Face local embeddings, ChromaDB vector search, and the Groq LLM inference API.",
      tech: ["Python", "Streamlit", "LangChain", "ChromaDB", "Hugging Face", "Groq API"],
      cover: { label: "RETRIEVAL · VECTOR SEARCH", icon: "file" },
      codeUrl: "https://github.com/Andikaputh/rag-lite-pdf",
      deployUrl: "",
      metrics: "Local Embeddings + Fast LLM",
      featured: false,
    },
    {
      title: "Hugging Face FastAPI Sentiment Microservice",
      category: "ML Microservices & NLP",
      tag: "NLP MICROSERVICE",
      desc: "A high-performance REST API microservice for text sentiment analysis using a pretrained Hugging Face Transformer and Pydantic validation.",
      tech: ["Python", "FastAPI", "Transformers", "PyTorch", "Pydantic", "Uvicorn"],
      cover: { label: "NLP · REST API", icon: "chat" },
      codeUrl: "https://github.com/Andikaputh/fastapi-huggingface-sentiment-service",
      deployUrl: "",
      metrics: "Swagger UI + Local Inference",
      featured: false,
    },
    {
      title: "Real-time Anomaly Detection Engine",
      category: "Streaming & Pipelines",
      tag: "DATA PIPELINE",
      desc: "A real-time anomaly detection system for transaction streams built with Kafka/Redpanda, FastAPI, and Docker Compose.",
      tech: ["Python", "Redpanda", "FastAPI", "Docker", "SQLite"],
      cover: { label: "STREAMING · KAFKA", icon: "activity" },
      codeUrl: "https://github.com/Andikaputh/fraud-detection-engine",
      deployUrl: "",
      metrics: "Throughput: 12K events/s",
      featured: false,
    },
    {
      title: "Credit Card Customer Segmentation",
      category: "Machine Learning & Analytics",
      tag: "MACHINE LEARNING",
      desc: "A customer profile segmentation app using K-Means and PCA, deployed to Streamlit Community Cloud.",
      tech: ["Scikit-Learn", "Streamlit", "Pandas", "Python"],
      cover: { label: "CLUSTERING · PCA", icon: "chart" },
      codeUrl: "https://github.com/Andikaputh/credit-card-segmentation",
      deployUrl: "https://credit-card-cluster.streamlit.app",
      metrics: "Silhouette Score: 0.74",
      featured: false,
    },
    {
      title: "MarkItDown Web Converter (Doc2MD)",
      category: "Tools & AI Preprocessing",
      tag: "AI DATA PREPROCESSING",
      desc: "A privacy-first web converter that turns PDF, DOCX, PPTX, and XLSX files into clean Markdown ready for LLM or RAG pipelines.",
      tech: ["Python", "FastAPI", "Microsoft MarkItDown", "React", "Vite"],
      cover: { label: "DOCUMENT → MARKDOWN", icon: "document" },
      codeUrl: "https://github.com/Andikaputh/doc2md-converter",
      deployUrl: "https://doc2md-nu.vercel.app/",
      metrics: "In-Memory Batch Processing",
      featured: false,
    },
    {
      title: "TypeHybrid: Touch Typing Platform",
      category: "Interactive Web Apps",
      tag: "WEB APP & ANALYTICS",
      desc: "An interactive touch-typing practice app with a learning curriculum, visual keyboard guide, real-time statistics, and mechanical keyboard sound effects.",
      tech: ["Next.js", "Tailwind CSS", "Web Audio API", "Vercel"],
      cover: { label: "WEB APP · TYPING ENGINE", icon: "keyboard" },
      codeUrl: "https://github.com/Andikaputh/typehybrid",
      deployUrl: "https://typehybrid.vercel.app/",
      metrics: "Adaptive UI + Audio Profiles",
      featured: false,
    },
  ] satisfies Project[],
};
