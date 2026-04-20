# Echo: B2B AI Support Platform 🚀

Echo is a comprehensive, production-grade B2B AI-powered customer support SaaS. It provides businesses with a platform to automate customer support via voice and chat, utilizing Retrieval Augmented Generation (RAG) to learn from product documentation, with seamless escalation to human agents when needed.

Built with a focus on modern, scalable architecture, Echo mirrors the capabilities of enterprise-level solutions like Intercom.

---

## 📸 Demo

_[Insert a GIF or a link to a YouTube/Loom video demo here. This is the most important part of your README!]_

---

## 🚀 Key Features

- **AI-Powered Support:** Intelligent chat and voice agents that provide accurate answers grounded in your specific product documentation.
- **Retrieval Augmented Generation (RAG):** Uses vector embeddings to "learn" product knowledge without the need for expensive model fine-tuning.
- **Human-in-the-Loop:** Automatically detects frustration or complex queries and flags them for human intervention.
- **Voice Agent Integration:** Real-time inbound and outbound phone support powered by Vapi.
- **Multi-Tenant Architecture:** Securely isolated workspaces and team management for B2B clients using Clerk.
- **Real-Time Dashboard:** A full operator dashboard to monitor sessions, view analytics, and take manual control of conversations.
- **Production-Grade Observability:** Full-stack error tracking, session replays, and log tracing via Sentry.

---

## 🛠️ Tech Stack

### Core Frameworks

- **Framework:** Next.js 15, React 19
- **Styling:** Tailwind CSS v4, Shadcn UI
- **Build System:** Turborepo (Monorepo architecture)

### Backend & Infrastructure

- **Database & Backend:** Convex
- **Authentication:** Clerk
- **Secrets Management:** AWS Secrets Manager
- **Monitoring:** Sentry

### AI & Integrations

- **Voice Agents:** Vapi
- **Embeddings/LLMs:** OpenAI / Anthropic / Gemini / Groq

---

## 🏗️ Project Architecture

Echo is built as a monorepo consisting of three distinct applications:

1. **Operator Dashboard:** The main interface for support teams to manage and monitor AI/Human interactions.
2. **Chat Widget:** A lightweight, embeddable widget that can be injected into any customer website.
3. **Embed Toolkit:** A developer-focused application to preview and configure widget scripts.

---

## ⚙️ Getting Started

### Prerequisites

- Node.js (v20 or higher)
- pnpm (v10 or higher)
- An account with Convex, Clerk, Sentry, and Vapi.

### Installation

1. **Clone the repository:**
   ```bash
   git clone [Your-Repo-Link]
   cd echo-saas
   ```
