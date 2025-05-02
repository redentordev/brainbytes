# BrainBytes AI Tutoring Platform

## Project Overview

BrainBytes is an AI-powered tutoring platform designed to provide accessible academic assistance to Filipino students. This project implements the platform using modern DevOps practices and containerization.

## System Architecture

![System Architecture](./docs/architecture.png)

## CI/CD Pipeline

![CI/CD Architecture](./docs/ci-cd-architecture.png)

## Team Members

- Neiña Jeizrei Burce - Space Manager - [lr.njburce@mmdc.mcl.edu.ph]
- Michael Angel Lu - Team Member - [lr.malu@mmdc.mcl.edu.ph]
- Redentor Valerio - Team Member - [lr.rvalerio@mmdc.mcl.edu.ph]

## Project Goals

- Implement a containerized application with proper networking
- Create an automated CI/CD pipeline using GitHub Actions
- Deploy the application to AWS
- Set up monitoring and observability tools

## Technology Stack

- Monorepo: NodeJS Workspaces
- Frontend: Next.js
- Backend: NodeJS / Hono
- Database: PostgreSQL
- Containerization: Docker / ECS+Fargate
- IaC: SST/Pulumi
- Cloud Provider: AWS
- Monitoring: Prometheus, Grafana

## Directory Structure

```
docs/
  ├── architecture.png      # System architecture diagram
  └── ci-cd-architecture.png # CI/CD pipeline diagram
```
