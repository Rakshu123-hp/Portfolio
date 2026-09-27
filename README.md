# Hi, I'm Rakshitha H P

**Data Science Undergraduate · Bangalore, India**

I build practical, working software where **AI**, **data**, and **backend engineering** meet — systems that turn raw information into decisions, and ideas into software people can actually use.

I'm most interested in the gap between *a model that works in a notebook* and *a system that works for real users*. Retrieval pipelines, APIs, caching, evaluation, and deployment are where I like to spend my time.

---

## About Me

I got into computing through the practical side of things — working with data, writing code that actually has to run, and building systems that other people depend on.

Over the past few years I've been able to work across that spectrum: an internship where I cleaned, validated, and processed real business datasets; coursework that pushed me into AI/ML fundamentals; and project work where I designed backend architecture for AI applications.

What keeps me interested is turning messy input into something reliable. I'm comfortable in the whole path — preprocessing and validation, model development, and the backend and retrieval plumbing that makes an AI feature usable.

**How I work:** practical over flashy, clear over clever. The best work is boring where it should be — structure, clean data, measurable evaluation, and code someone else can read. I also care about the work nobody asks for: event logistics, documentation, and the details that make a project survive contact with reality.

## What I Work With

| Area | Tools |
| --- | --- |
| **Programming & Data** | Python, SQL, MySQL |
| **Backend & APIs** | Flask, Node.js, Express, REST APIs |
| **AI / ML** | Scikit-Learn, Machine Learning, Deep Learning (CNNs), RAG, LangChain |
| **Data & Visualization** | Power BI, Tableau, Excel, Google Sheets, Data Cleaning & Validation, KPI Tracking |

## Education

**B.E. – Data Science** · MVJ College of Engineering, Bangalore · 2024 – 2027
AI/ML · Data Structures · DBMS · Data Visualization · Big Data Analytics

**Diploma – Computer Science / IT** · Siddaganga Polytechnic, Tumkur · 2021 – 2024
Programming · Networking · Full Stack Development

## Experience

**Python Intern** · EmbeddedFru · Remote · July 2023 – January 2024

- Organized and processed business datasets using Python
- Performed data cleaning and validation on real-world data
- Wrote SQL queries for extraction, filtering, and aggregation
- Built data processing and workflow automation pipelines
- Applied OOP principles to design modular, maintainable pipelines

*Certificates earned:* Machine Learning with Python · SQL with Python · OOPs Concepts with Python

## Projects

### 🧠 Brain Tumor Detection — *Completed*
Detecting and classifying brain tumors from MRI scan images using a CNN-based pipeline covering preprocessing, augmentation, classification, and evaluation.
**Stack:** Python · Deep Learning · CNN · OpenCV
**[Live Demo →](https://brain-tumar-detection-1.onrender.com/)**

### ⚖️ Nyaya Sathi — *In Progress*
An AI-powered legal-guidance assistant that answers user queries using Indian legal sources, with traceable citations, built on retrieval-augmented generation.
**Stack:** Python · LangChain · RAG · ChromaDB · Redis

### 🔐 SIM Swap Attack Detection — *In Progress*
A security-and-machine-learning project aimed at detecting SIM swap attack patterns. Implementation specifics are being finalized and documented.

## Beyond the Code

- **Hackathons & expos** — 3+ events, including Maharaja Institute of Technology, Sapthagiri NPS University, and a project expo at MVJ College of Engineering
- **Leadership** — Department Coordinator for the Vertechx event; managed logistics end-to-end
- **Campus involvement** — Web Solutions Strategist at Toastmasters International, District 92; Content Member, Software Development Club

## Let's Connect

I'm always open to conversations about internships, collaborations, and projects that need a practical, data-driven approach.

| | |
| --- | --- |
| **Email** | [rakshurakshitha182@gmail.com](mailto:rakshurakshitha182@gmail.com) |
| **LinkedIn** | [linkedin.com/in/rakshitha-hp-25ab63300](https://www.linkedin.com/in/rakshitha-hp-25ab63300/) |
| **GitHub** | [github.com/Rakshu123-hp](https://github.com/Rakshu123-hp) |
| **LeetCode** | [leetcode.com/u/Rakshu31](https://leetcode.com/u/Rakshu31/) |

---

## About This Repository

This is the source for my personal portfolio website — a single-page React app with client-side routing, code-split route chunks, scroll reveals, and full dark-theme design.

**Built with**

- React 18 + TypeScript
- Vite 5
- Tailwind CSS 3
- React Router 6
- Framer Motion
- lucide-react

### Getting started

```bash
git clone https://github.com/Rakshu123-hp/Portfolio.git
cd Portfolio
npm install
npm run dev
```

Open http://localhost:5173.

### Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server with hot reload |
| `npm run build` | Typecheck (`tsc -b`) and build for production into `dist/` |
| `npm run preview` | Preview the production build locally |

### Project structure

```
src/
├── components/   # layout, navigation, ui, animations, project cards
├── data/         # profile, skills, projects, experience, education, achievements
├── hooks/        # reusable React hooks
├── pages/        # Home, About, Skills, Projects, Experience, Education, ...
├── projects/     # individual project detail pages + shared detail layout
├── styles/       # global styles and Tailwind layers
├── utils/        # helpers (cn, links)
├── App.tsx       # routes
└── main.tsx      # app entry point
```

**Content lives in `src/data/`.** To update anything shown on the site — bio, skills, projects, links — edit those files; the pages read from them.

> **Adding a live demo:** set `liveDemo` on a project in `src/data/projects.ts` to its deployed URL. The **Live Demo** button on the project card and project page becomes clickable automatically. Leave it `null` and the button shows a "coming soon" placeholder.
