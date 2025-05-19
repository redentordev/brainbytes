# Application Architecture

This document describes the architecture of the BrainBytes AI tutoring platform.

## Architecture Overview

BrainBytes follows a modern containerized microservices-ready architecture with three main components:

1. **Frontend Container (Next.js)**

   - Provides the user interface for students
   - Communicates with backend via RESTful API
   - Implements responsive design for mobile/desktop access

2. **Backend Container (Node.js/Hono)**

   - Processes chat messages
   - Implements AI response generation using OpenAI
   - Manages database operations
   - Provides RESTful API endpoints

3. **Database Container (PostgreSQL)**
   - Stores message history
   - Maintains user data and session information
   - Enables persistence between app restarts

## Communication Flow

1. User sends a message through the frontend interface
2. Frontend sends HTTP request to backend API
3. Backend processes the message and generates AI response through OpenAI
4. Backend stores both user message and AI response in PostgreSQL
5. Backend returns AI response to frontend
6. Frontend displays the response to the user

## Network Configuration

- Internal container communication happens through Docker network
- Frontend exposes port 3000 for web access
- Backend exposes port 3001 for API access
- PostgreSQL uses standard port 5432 (accessible within the Docker network)

## Code Structure

The project follows a monorepo structure using Node.js workspaces:

```
devops/
├── packages/
│   ├── frontend/             # Next.js frontend
│   │   ├── src/
│   │   │   ├── app/          # Next.js app directory
│   │   │   ├── components/   # React components
│   │   │   ├── contexts/     # React contexts
│   │   │   ├── hooks/        # Custom React hooks
│   │   │   └── lib/          # Utility functions
│   │   ├── public/           # Static assets
│   │   └── Dockerfile.dev    # Development container config
│   │
│   └── backend/              # Node.js/Hono backend
│       ├── src/
│       │   ├── routes/       # API routes
│       │   ├── thread/       # Thread management
│       │   ├── material/     # Learning materials
│       │   ├── user/         # User management
│       │   └── drizzle/      # Database schema
│       ├── migrations/       # Database migrations
│       └── Dockerfile.dev    # Development container config
│
├── docker-compose.yaml       # Container orchestration
└── package.json              # Workspace configuration
```

## Database Schema

The application uses PostgreSQL with Drizzle ORM for database operations. Key entities include:

1. **Users**: Stores user authentication and profile information
2. **Threads**: Represents conversation threads
3. **Messages**: Individual messages within threads
4. **Materials**: Educational resources and references

## Development Environment

The development environment is containerized using Docker Compose with the following features:

- Hot reload for both frontend and backend code changes
- Volume mapping for persistent database storage
- Environment variable configuration for service connections
- Drizzle Studio for database management

## Production Environment

For production deployment, the application is designed to be deployed on AWS using:

- AWS ECS with Fargate for container orchestration
- AWS ECR for container image storage
- AWS RDS for managed PostgreSQL database
- GitHub Actions for CI/CD pipeline
