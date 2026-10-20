import { 
  SiPython, SiPytorch, SiScikitlearn, SiPandas, SiNumpy, 
  SiFastapi, SiDocker, SiGit, SiGithub, SiJupyter, 
  SiStreamlit, SiApachekafka, SiSelenium, SiSqlite, SiTensorflow, SiFlask, SiCanvas
} from "react-icons/si";
import { Brain, Database, Network, LineChart, Code2, BarChart3, LayoutDashboard, FileSpreadsheet } from "lucide-react";

export const PORTFOLIO_DATA = {
  personal: {
    name: "Andika Putra Perdana",
    roleIntro: "and i build",
    typingWords: [
      "Production Machine Learning Systems.",
      "Interactive Tableau Analytics Dashboards.",
      "Real-time AI & Stream Pipelines.",
      "Clinical & Predictive Analytics."
    ],
    description:
      "Mahasiswa Informatika Semester 7 Universitas Gunadarma dan Data & AI Engineer. Berpengalaman dalam analisis data sektoral publik di Diskominfo Kota Depok, riset ML klinis (SiPEKA dengan akurasi 99.34%), capstone industri (SignBank AI), serta arsitektur MLOps produksi berbasis FastAPI, Docker, dan Vector Search.",
    socials: {
      github: "https://github.com/Andikaputh",
      linkedin: "https://www.linkedin.com/in/andikaputraperdana/",
      instagram: "https://www.instagram.com/andika.p.p/",
    },
    cvPath: "/assets/cv.pdf",
    profileImage: "/assets/profile.png",
    statusText: "AVAILABLE FOR DATA & AI ROLES",
  },

  metrics: [
    { label: "Best Model Performance", value: "99.34%", sub: "Test Accuracy (SiPEKA XGBoost)" },
    { label: "Usability Validation", value: "85 SUS", sub: "Grade A / Excellent Score" },
    { label: "Deployed Systems & Dashboards", value: "10+ Projects", sub: "APIs, Tableau Dashboards & Web Apps" },
  ],

  codeCard: {
    className: "AndikaDataEngine",
    roles: [
      "Data & AI Engineer",
      "Data Analyst & Visualization Specialist",
      "Machine Learning Engineer",
      "Python Backend Developer"
    ],
    focus: [
      "Sectoral Data Analysis & Tableau Dashboards",
      "Production-Grade MLOps & Serving",
      "RAG & Vector Databases (ChromaDB)",
      "Clinical Data Modeling & Analytics"
    ],
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
      company: "Dinas Komunikasi dan Informatika (Diskominfo) Kota Depok",
      period: "Sep 2026 - Present",
      location: "Depok, West Java · On-site",
      highlights: [
        "Berkontribusi dalam pengelolaan, pengolahan, dan analisis data statistik sektoral Kota Depok untuk mendukung penyajian informasi publik secara efektif.",
        "Mengembangkan dashboard interaktif menggunakan Tableau untuk memvisualisasikan indikator statistik utama dan mengomunikasikan wawasan berbasis data.",
        "Merancang infografis berbasis data menggunakan Canva untuk menyajikan informasi statistik secara komunikatif, jelas, dan menarik secara visual.",
        "Mentransformasi data mentah menjadi output visual informatif guna mendukung diseminasi informasi publik dan pengambilan keputusan berbasis data."
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
        "Memimpin tim lintas fungsi dalam merancang dan mengembangkan solusi analitik data serta sistem berbasis AI untuk UMKM lokal."
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
        "Mempelajari Machine Learning, Deep Learning, NLP, Computer Vision, dan MLOps menggunakan TensorFlow.",
        "Mengembangkan SignBank sebagai capstone project: platform AI penerjemah bahasa isyarat ke teks secara real-time berbasis Computer Vision untuk membantu teller bank berkomunikasi dengan nasabah Tuli/Tunarungu."
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
        "Memberikan bantuan teknis, troubleshooting akses supercomputer/DGX, serta bimbingan praktikum bagi mahasiswa.",
        "Mengkoordinasikan operasional lab, forum group discussion (FGD), dan kegiatan event divisi."
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
        "PKKMB FTI 2024: Merancang pemetaan rute dan alur penutupan parade untuk kelancaran arus massa.",
        "It's Sociart 2024: Mengelola operasional turnamen Mobile Legends dan bertindak sebagai Liaison Officer peserta."
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
        "Memimpin tim manajemen konten TikTok, mengatur ideasi, alur produksi, hingga evaluasi performa konten.",
        "Mengembangkan soft skill kepemimpinan, pemecahan masalah, dan manajemen proyek kreatif."
      ],
      skills: ["Kepemimpinan Tim", "Project Management", "Digital Strategy"]
    }
  ],

  projects: [
    {
      title: "SiPEKA: Early Preeclampsia Risk Prediction",
      category: "Academic & Machine Learning",
      tag: "PENULISAN ILMIAH UG",
      desc: "Web app prediktor risiko preeklamsia berbasis XGBoost + SMOTE dengan akurasi 99.34% dan AUC 0.9993. Dilengkapi clinical safety-override rules, kalkulasi otomatis MAP/IMT, dan laporan medis siap cetak. Teruji SUS score 85 (Excellent).",
      tech: ["Python", "Flask", "XGBoost", "SMOTE", "Scikit-Learn"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=700&q=80",
      codeUrl: "https://github.com/Andikaputh/sipeka",
      deployUrl: "https://sipeka.onrender.com/",
      metrics: "Accuracy: 99.34% | SUS: 85 (Excellent)",
      featured: true,
      context: "Penulisan Ilmiah: Universitas Gunadarma"
    },
    {
      title: "SignBank: AI Sign Language Translation",
      category: "Bootcamp Capstone & AI",
      tag: "DBS CAMP CAPSTONE",
      desc: "Platform AI penerjemah bahasa isyarat ke teks secara real-time berbasis Computer Vision dan Deep Learning untuk membantu teller bank berkomunikasi dengan nasabah Tuli/Tunarungu.",
      tech: ["Python", "TensorFlow", "Deep Learning", "Computer Vision", "OpenCV", "Next.js"],
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=700&q=80",
      codeUrl: "https://github.com/Andikaputh",
      deployUrl: "https://signbank-ai.vercel.app/",
      metrics: "Real-time Vision Inference",
      featured: true,
      context: "Capstone Project: Coding Camp by DBS Foundation"
    },
    {
      title: "Production-Grade Recommendation System",
      category: "MLOps & AI Engineering",
      tag: "PROD-GRADE MLOPS",
      desc: "Sistem rekomendasi personalisasi end-to-end dengan arsitektur Offline Pipeline (SVD, MLflow, SQLite) dan Online Serving (FastAPI, Docker, Render PaaS).",
      tech: ["Python", "TruncatedSVD", "MLflow", "FastAPI", "SQLite", "Docker", "Render"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=700&q=80",
      codeUrl: "https://github.com/Andikaputh/production-recommendation-system",
      deployUrl: "https://production-recommendation-system.onrender.com/recommendations/123",
      metrics: "Precision@10 & Cold-Start Fallback",
      featured: true,
    },
    {
      title: "AI-Powered PDF Q&A (RAG Lite)",
      category: "GenAI & LLM Workflows",
      tag: "RAG & VECTOR SEARCH",
      desc: "Aplikasi tanya jawab dokumen PDF interaktif menggunakan Hugging Face Local Embeddings, ChromaDB Vector Search, dan Groq LLM Inference API.",
      tech: ["Python", "Streamlit", "LangChain", "ChromaDB", "Hugging Face", "Groq API"],
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=700&q=80",
      codeUrl: "https://github.com/Andikaputh/rag-lite-pdf",
      deployUrl: "",
      metrics: "Local Embeddings + Fast LLM",
      featured: false,
    },
    {
      title: "Hugging Face FastAPI Sentiment Microservice",
      category: "ML Microservices & NLP",
      tag: "NLP MICROSERVICE",
      desc: "Microservice REST API performa tinggi untuk analisis sentimen teks menggunakan pretrained Hugging Face Transformer dan Pydantic Validation.",
      tech: ["Python", "FastAPI", "Transformers", "PyTorch", "Pydantic", "Uvicorn"],
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=700&q=80",
      codeUrl: "https://github.com/Andikaputh/fastapi-huggingface-sentiment-service",
      deployUrl: "",
      metrics: "Swagger UI + Local Inference",
      featured: false,
    },
    {
      title: "Real-time Anomaly Detection Engine",
      category: "Streaming & Pipelines",
      tag: "DATA PIPELINE",
      desc: "Sistem pendeteksi anomali pada data stream transaksi secara real-time berbasis Kafka/Redpanda, FastAPI, dan Docker Compose.",
      tech: ["Python", "Redpanda", "FastAPI", "Docker", "SQLite"],
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=700&q=80",
      codeUrl: "https://github.com/Andikaputh/fraud-detection-engine",
      deployUrl: "https://vercel.app",
      metrics: "Throughput: 12K events/s",
      featured: false,
    },
    {
      title: "Credit Card Customer Segmentation",
      category: "Machine Learning & Analytics",
      tag: "MACHINE LEARNING",
      desc: "Aplikasi segmentasi profil nasabah menggunakan algoritma K-Means & PCA yang di-deploy ke Streamlit Community Cloud.",
      tech: ["Scikit-Learn", "Streamlit", "Pandas", "Python"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=700&q=80",
      codeUrl: "https://github.com/Andikaputh/credit-card-segmentation",
      deployUrl: "https://credit-card-cluster.streamlit.app",
      metrics: "Silhouette Score: 0.74",
      featured: false,
    },
    {
      title: "MarkItDown Web Converter (Doc2MD)",
      category: "Tools & AI Preprocessing",
      tag: "AI DATA PREPROCESSING",
      desc: "Web converter privacy-first untuk mengubah PDF, DOCX, PPTX, dan XLSX menjadi Markdown bersih yang siap dimasukkan ke pipeline LLM atau RAG.",
      tech: ["Python", "FastAPI", "Microsoft MarkItDown", "React", "Vite"],
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=700&q=80",
      codeUrl: "https://github.com/Andikaputh/doc2md-converter",
      deployUrl: "https://doc2md-nu.vercel.app/",
      metrics: "In-Memory Batch Processing",
      featured: false,
    },
    {
      title: "TypeHybrid: Touch Typing Platform",
      category: "Interactive Web Apps",
      tag: "WEB APP & ANALYTICS",
      desc: "Aplikasi latihan mengetik interaktif dengan kurikulum belajar, visual keyboard guide, statistik real-time, dan efek suara mechanical keyboard.",
      tech: ["Next.js", "Tailwind CSS", "Web Audio API", "Vercel"],
      image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=700&q=80",
      codeUrl: "https://github.com/Andikaputh/typehybrid",
      deployUrl: "https://typehybrid.vercel.app/",
      metrics: "Adaptive UI + Audio Profiles",
      featured: false,
    },
  ],
};