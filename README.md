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
7. [API Documentation](packages/backend/docs/api-documentation.md)
8. [Team Members](#team-members)
9. [License](#license)

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

![System Architecture](docs/architecture.png)

![CI/CD Pipeline Architecture](docs/ci-cd-architecture.png)

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

Create a single `.env` file in the root directory using `.env.example` as reference:

#### 📁 `.env.example` (Reference)

```env
DATABASE_URL=
BETTER_AUTH_SECRET=
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=
OPENAI_API_KEY=
```

Copy this example file to create your own `.env` in the project root with appropriate values:

```bash
cp .env.example .env
```

Then fill in the values in your new `.env` file.

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

### 5. Database Setup Using Drizzle

Open a **new terminal**, navigate to the backend directory:

```bash
cd packages/backend
```

For **first-time setup**, generate schema files and push them to the database:

```bash
docker-compose exec backend bunx drizzle-kit generate
docker-compose exec backend bunx drizzle-kit push
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

| Task                    | Command                                                 |
| ----------------------- | ------------------------------------------------------- |
| Install packages        | `bun install`                                           |
| Start local dev env     | `docker compose up --watch --build`                     |
| Generate DB schema      | `docker-compose exec backend bunx drizzle-kit generate` |
| Push schema to DB       | `docker-compose exec backend bunx drizzle-kit push`     |
| View database (Drizzle) | `docker-compose exec backend bunx drizzle-kit studio`   |
| Run DB migration        | `docker-compose exec backend bunx drizzle-kit migrate`  |
| Stop all services       | `docker compose down`                                   |

---

## 🤝 Contribution Guide

### Branching Strategy

1. Always branch from the latest `main` branch:

   ```bash
   git checkout main
   git pull
   git checkout -b feature/<feature-name>
   ```

2. Make your changes, commit them with descriptive messages:

   ```bash
   git add .
   git commit -m "Add feature: description of changes"
   ```

3. Push your branch to the remote repository:
   ```bash
   git push -u origin feature/<feature-name>
   ```

### Commit Message Conventions

Follow these prefixes for your commit messages:

| Prefix        | Description                   | Example                                           |
| ------------- | ----------------------------- | ------------------------------------------------- |
| `add:`        | Adding new files or features  | `add: license file`                               |
| `change:`     | Updates to existing content   | `change: update readme.md`                        |
| `fix:`        | Bug fixes                     | `fix: docs directory`                             |
| `remove:`     | Removing content              | `remove: docker compose version`                  |
| `checkpoint:` | Significant milestone commits | `checkpoint: add frontend and backend ai chatbot` |

### Pull Request Process

1. Create a pull request against the `main` branch
2. Request a review from at least one team member
3. Address any feedback or requested changes
4. Once approved, your changes will be merged into the main branch

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
