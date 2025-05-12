# 🧠 BrainBytes — DevOps Project Documentation

BrainBytes is an **AI-powered tutoring platform** developed to make academic help more accessible for Filipino students. This project focuses on the deployment infrastructure using modern **DevOps practices**, containerization, automation, and cloud services.

---

## 📌 Table of Contents

1. [Project Overview](#project-overview)
2. [System Architecture](#system-architecture)
3. [Technology Stack](#technology-stack)
4. [CI/CD Pipeline](#ci-cd-pipeline)
5. [Monitoring & Observability](#monitoring--observability)
6. [Project Setup (Local)](#project-setup-local)
7. [Team Members](#team-members)
8. [License](#license)

---

## 🧩 Project Overview

BrainBytes is designed to streamline academic support using AI technologies. This project implements the backend and frontend application layers, infrastructure, automation pipelines, and cloud deployment architecture.

---

## 🏗️ System Architecture

The system follows a microservices-ready monorepo pattern using Bun and Node.js. Key components include:

- **Frontend**: Next.js web application
- **Backend**: Node.js server using Hono (ultrafast JS web framework)
- **Database**: PostgreSQL
- **Containerization**: Docker with ECS Fargate
- **Infrastructure**: Managed via SST or Pulumi
- **Monitoring**: Prometheus and Grafana

---

## 🛠️ Technology Stack

| Component            | Tool/Framework           |
| -------------------- | ------------------------ |
| **Monorepo**         | Node.js Workspaces + Bun |
| **Frontend**         | Next.js                  |
| **Backend**          | Node.js + Hono           |
| **Database**         | PostgreSQL               |
| **ORM**              | Drizzle                  |
| **Containerization** | Docker + ECS + Fargate   |
| **Infrastructure**   | SST or Pulumi            |
| **CI/CD**            | GitHub Actions           |
| **Monitoring**       | Prometheus + Grafana     |
| **Cloud Provider**   | AWS                      |

---

## 🔁 CI/CD Pipeline

GitHub Actions is used to automate testing, containerization, and deployment. The workflow:

1. **Build**: Validate code, install dependencies, and build Docker images
2. **Test**: Run backend and frontend unit/integration tests
3. **Deploy**: Push Docker image to AWS ECR, trigger ECS deployment via Pulumi or SST

---

## 📈 Monitoring & Observability

| Tool           | Purpose                                |
| -------------- | -------------------------------------- |
| **Prometheus** | Collects backend/API/container metrics |
| **Grafana**    | Visualizes logs, metrics, alerts       |
| **CloudWatch** | Stores ECS logs and cloud events       |

---

## 💻 Project Setup (Local)

Here is the full step-by-step setup guide for running BrainBytes locally:

### ✅ Prerequisites

Ensure the following are installed:

- [GitHub Desktop](https://desktop.github.com/)
- [Bun](https://bun.sh/)
- [Docker](https://www.docker.com/products/docker-desktop)
- [Node.js](https://nodejs.org/en) (if needed)

---

### 1. Clone the Repository

Using **GitHub Desktop**:

1. Open GitHub Desktop → `File > Clone Repository`
2. Paste the URL:
   ```
   https://github.com/redentordev/devops.git
   ```
3. Choose a local path and click **Clone**.

---

### 2. Create Environment Files

Create `.env` files in the following directories:

#### 📁 `apps/frontend/.env`

```env
NEXT_PUBLIC_API_URL=http://localhost:3001
```

#### 📁 `packages/backend/.env`

```env
PORT=3001
DATABASE_URL=postgres://postgres:postgres@localhost:5432/brainbytes
```

---

### 3. Install Dependencies

From the root of the project, run:

```bash
bun install
```

---

### 4. Run the App with Docker

To spin up frontend, backend, and Postgres containers:

```bash
docker compose up --watch --build
```

---

### 5. Database Setup Using Drizzle

Open a **new terminal**, navigate to the backend directory:

```bash
cd packages/backend
```

To open the **Drizzle Studio** GUI:

```bash
docker-compose exec backend bunx drizzle-kit studio
```

To apply migrations instead:

```bash
docker-compose exec backend bunx drizzle-kit migrate
```

---

### 6. Access the App

| Service         | URL                   |
| --------------- | --------------------- |
| **Frontend**    | http://localhost:3000 |
| **Backend API** | http://localhost:3001 |

---

### 🔁 Common Commands Summary

| Task                    | Command                                                |
| ----------------------- | ------------------------------------------------------ |
| Install packages        | `bun install`                                          |
| Start local dev env     | `docker compose up --watch --build`                    |
| View database (Drizzle) | `docker-compose exec backend bunx drizzle-kit studio`  |
| Run DB migration        | `docker-compose exec backend bunx drizzle-kit migrate` |
| Stop all services       | `docker compose down`                                  |

---

## 👥 Team Members

| Name                | Role          | Email                       |
| ------------------- | ------------- | --------------------------- |
| Neiña Jeizrei Burce | Space Manager | lr.njburce@mmdc.mcl.edu.ph  |
| Abigail Galilo      | Team Member   | lr.agalilo@mmdc.mcl.edu.ph  |
| Michael Angel Lu    | Team Member   | lr.malu@mmdc.mcl.edu.ph     |
| Redentor Valerio    | Team Member   | lr.rvalerio@mmdc.mcl.edu.ph |

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).
