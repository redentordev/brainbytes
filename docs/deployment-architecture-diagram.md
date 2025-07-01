# BrainBytes Deployment Architecture Diagram

## Architecture Overview

This document describes the deployment architecture for BrainBytes, a serverless AI-powered learning platform deployed on AWS using SST (Serverless Stack).

## High-Level Architecture Diagram

```mermaid
graph TB
    subgraph "User Layer"
        U[Users/Browsers]
    end

    subgraph "DNS & CDN Layer"
        CF[Cloudflare DNS]
        CDN[AWS CloudFront]
    end

    subgraph "AWS Cloud Infrastructure"
        subgraph "Compute Layer"
            LAMBDA[AWS Lambda<br/>Next.js App]
        end

        subgraph "Storage Layer"
            S3[AWS S3<br/>Static Assets]
        end

        subgraph "Security & Configuration"
            IAM[AWS IAM<br/>Roles & Policies]
            SSM[AWS Systems Manager<br/>Parameter Store]
        end

        subgraph "Monitoring & Logging"
            CW[AWS CloudWatch<br/>Logs & Metrics]
        end
    end

    subgraph "External Services"
        DB[(PostgreSQL Database)]
        OPENAI[OpenAI API]
        GITHUB[GitHub OAuth]
    end

    subgraph "CI/CD Pipeline"
        GHA[GitHub Actions]
        SST_CLI[SST CLI]
    end

    %% User Flow
    U --> CF
    CF --> CDN
    CDN --> LAMBDA
    CDN --> S3

    %% Application Dependencies
    LAMBDA --> DB
    LAMBDA --> OPENAI
    LAMBDA --> GITHUB
    LAMBDA --> SSM

    %% Security & Monitoring
    LAMBDA --> CW
    IAM --> LAMBDA
    IAM --> S3

    %% Deployment Flow
    GHA --> SST_CLI
    SST_CLI --> LAMBDA
    SST_CLI --> S3
    SST_CLI --> CDN
    SST_CLI --> SSM

    %% Styling
    classDef aws fill:#FF9900,stroke:#232F3E,stroke-width:2px,color:#fff
    classDef external fill:#4CAF50,stroke:#2E7D32,stroke-width:2px,color:#fff
    classDef cicd fill:#2196F3,stroke:#1565C0,stroke-width:2px,color:#fff
    classDef user fill:#9C27B0,stroke:#6A1B9A,stroke-width:2px,color:#fff
    classDef dns fill:#FF5722,stroke:#D84315,stroke-width:2px,color:#fff

    class LAMBDA,S3,IAM,SSM,CW,CDN aws
    class DB,OPENAI,GITHUB external
    class GHA,SST_CLI cicd
    class U user
    class CF,CDN dns
```

## Detailed Component Architecture

### 1. Frontend Layer

```mermaid
graph LR
    subgraph "Next.js Application"
        APP[App Router]
        PAGES[Pages & Components]
        API[API Routes]
        MW[Middleware]
    end

    subgraph "UI Components"
        CHAT[Chat Interface]
        AUTH[Authentication]
        MATERIALS[Learning Materials]
        THEME[Theme System]
    end

    APP --> PAGES
    APP --> API
    APP --> MW
    PAGES --> CHAT
    PAGES --> AUTH
    PAGES --> MATERIALS
    PAGES --> THEME

    classDef frontend fill:#61DAFB,stroke:#20232A,stroke-width:2px,color:#20232A
    class APP,PAGES,API,MW,CHAT,AUTH,MATERIALS,THEME frontend
```

### 2. Backend Services Architecture

```mermaid
graph TB
    subgraph "API Layer"
        AUTH_API[Authentication API]
        CHAT_API[Chat API]
        MATERIALS_API[Materials API]
        COMPLETION_API[Completion API]
    end

    subgraph "Business Logic"
        AUTH_SERVICE[Auth Service]
        CHAT_SERVICE[Chat Service]
        MATERIAL_SERVICE[Material Service]
        AI_SERVICE[AI Service]
    end

    subgraph "Data Layer"
        ORM[Drizzle ORM]
        SCHEMA[Database Schema]
    end

    AUTH_API --> AUTH_SERVICE
    CHAT_API --> CHAT_SERVICE
    MATERIALS_API --> MATERIAL_SERVICE
    COMPLETION_API --> AI_SERVICE

    AUTH_SERVICE --> ORM
    CHAT_SERVICE --> ORM
    MATERIAL_SERVICE --> ORM

    ORM --> SCHEMA

    classDef api fill:#FF6B6B,stroke:#C92A2A,stroke-width:2px,color:#fff
    classDef service fill:#4ECDC4,stroke:#0CA678,stroke-width:2px,color:#fff
    classDef data fill:#45B7D1,stroke:#1971C2,stroke-width:2px,color:#fff

    class AUTH_API,CHAT_API,MATERIALS_API,COMPLETION_API api
    class AUTH_SERVICE,CHAT_SERVICE,MATERIAL_SERVICE,AI_SERVICE service
    class ORM,SCHEMA data
```

### 3. Database Schema Architecture

```mermaid
erDiagram
    USER {
        string id PK
        string email
        string name
        string image
        timestamp emailVerified
        timestamp createdAt
        timestamp updatedAt
    }

    SESSION {
        string id PK
        string userId FK
        timestamp expiresAt
        string token
        timestamp createdAt
        timestamp updatedAt
    }

    ACCOUNT {
        string id PK
        string userId FK
        string type
        string provider
        string providerAccountId
        string refresh_token
        string access_token
        timestamp expires_at
        string token_type
        string scope
        string id_token
        string session_state
    }

    THREAD {
        string id PK
        string userId FK
        string title
        timestamp createdAt
        timestamp updatedAt
    }

    MESSAGE {
        string id PK
        string threadId FK
        string role
        text content
        timestamp createdAt
    }

    MATERIAL {
        string id PK
        string userId FK
        string title
        string description
        string type
        timestamp createdAt
        timestamp updatedAt
    }

    TEXT_ENTRY {
        string id PK
        string materialId FK
        string title
        text content
        timestamp createdAt
        timestamp updatedAt
    }

    USER ||--o{ SESSION : has
    USER ||--o{ ACCOUNT : has
    USER ||--o{ THREAD : creates
    USER ||--o{ MATERIAL : owns
    THREAD ||--o{ MESSAGE : contains
    MATERIAL ||--o{ TEXT_ENTRY : contains
```

## Deployment Flow Architecture

```mermaid
sequenceDiagram
    participant Dev as Developer
    participant GH as GitHub
    participant GHA as GitHub Actions
    participant AWS as AWS Services
    participant CF as Cloudflare
    participant Users as End Users

    Dev->>GH: Push code changes
    GH->>GHA: Trigger workflow

    Note over GHA: Build & Test Phase
    GHA->>GHA: Install dependencies
    GHA->>GHA: Run tests
    GHA->>GHA: Run linting
    GHA->>GHA: Build application

    Note over GHA: Deploy Phase
    GHA->>AWS: Configure AWS credentials
    GHA->>AWS: Deploy with SST
    AWS->>AWS: Create/Update Lambda
    AWS->>AWS: Update S3 assets
    AWS->>AWS: Configure CloudFront
    AWS->>AWS: Update Parameter Store

    Note over CF: DNS Configuration
    AWS->>CF: Update DNS records
    CF->>CF: Propagate DNS changes

    Note over Users: Service Available
    Users->>CF: Request application
    CF->>AWS: Route to CloudFront
    AWS->>Users: Serve application
```

## Security Architecture

```mermaid
graph TB
    subgraph "Security Layers"
        subgraph "Network Security"
            HTTPS[HTTPS/TLS 1.3]
            CORS[CORS Policy]
            CSP[Content Security Policy]
        end

        subgraph "Authentication & Authorization"
            OAUTH[OAuth 2.0/GitHub]
            JWT[JWT Tokens]
            SESSION[Session Management]
        end

        subgraph "Data Protection"
            ENCRYPT[Encryption at Rest]
            TRANSIT[Encryption in Transit]
            SECRETS[AWS Parameter Store]
        end

        subgraph "Access Control"
            IAM_ROLES[IAM Roles]
            RBAC[Role-Based Access]
            API_KEYS[API Key Management]
        end
    end

    subgraph "Monitoring & Compliance"
        LOGS[CloudWatch Logs]
        METRICS[Security Metrics]
        ALERTS[Security Alerts]
        AUDIT[Audit Trails]
    end

    HTTPS --> OAUTH
    OAUTH --> JWT
    JWT --> SESSION

    ENCRYPT --> SECRETS
    TRANSIT --> SECRETS

    IAM_ROLES --> RBAC
    RBAC --> API_KEYS

    LOGS --> METRICS
    METRICS --> ALERTS
    ALERTS --> AUDIT

    classDef security fill:#E91E63,stroke:#AD1457,stroke-width:2px,color:#fff
    classDef monitoring fill:#FF9800,stroke:#F57C00,stroke-width:2px,color:#fff

    class HTTPS,CORS,CSP,OAUTH,JWT,SESSION,ENCRYPT,TRANSIT,SECRETS,IAM_ROLES,RBAC,API_KEYS security
    class LOGS,METRICS,ALERTS,AUDIT monitoring
```

## Infrastructure as Code

### SST Configuration Structure

```mermaid
graph TB
    subgraph "SST Configuration"
        CONFIG[sst.config.ts]
        SECRETS[Secrets Definition]
        NEXTJS[Next.js Component]
        DOMAIN[Domain Configuration]
    end

    subgraph "AWS Resources Created"
        LAMBDA_FUNC[Lambda Function]
        S3_BUCKET[S3 Bucket]
        CF_DIST[CloudFront Distribution]
        IAM_ROLE[IAM Roles]
        PARAMS[Parameter Store]
    end

    CONFIG --> SECRETS
    CONFIG --> NEXTJS
    CONFIG --> DOMAIN

    SECRETS --> PARAMS
    NEXTJS --> LAMBDA_FUNC
    NEXTJS --> S3_BUCKET
    DOMAIN --> CF_DIST

    LAMBDA_FUNC --> IAM_ROLE
    S3_BUCKET --> IAM_ROLE
    CF_DIST --> IAM_ROLE

    classDef config fill:#9C27B0,stroke:#6A1B9A,stroke-width:2px,color:#fff
    classDef aws fill:#FF9900,stroke:#232F3E,stroke-width:2px,color:#fff

    class CONFIG,SECRETS,NEXTJS,DOMAIN config
    class LAMBDA_FUNC,S3_BUCKET,CF_DIST,IAM_ROLE,PARAMS aws
```

## Performance and Scaling

### Auto-Scaling Architecture

```mermaid
graph LR
    subgraph "Traffic Flow"
        USERS[Users]
        LB[CloudFront CDN]
        CACHE[Edge Cache]
    end

    subgraph "Compute Scaling"
        LAMBDA[Lambda Functions]
        CONCURRENT[Concurrent Executions]
        COLD_START[Cold Start Optimization]
    end

    subgraph "Data Scaling"
        DB_POOL[Connection Pooling]
        QUERY_OPT[Query Optimization]
        CACHING[Response Caching]
    end

    USERS --> LB
    LB --> CACHE
    CACHE --> LAMBDA

    LAMBDA --> CONCURRENT
    LAMBDA --> COLD_START

    LAMBDA --> DB_POOL
    DB_POOL --> QUERY_OPT
    QUERY_OPT --> CACHING

    classDef traffic fill:#2196F3,stroke:#1565C0,stroke-width:2px,color:#fff
    classDef compute fill:#4CAF50,stroke:#2E7D32,stroke-width:2px,color:#fff
    classDef data fill:#FF9800,stroke:#F57C00,stroke-width:2px,color:#fff

    class USERS,LB,CACHE traffic
    class LAMBDA,CONCURRENT,COLD_START compute
    class DB_POOL,QUERY_OPT,CACHING data
```

## Monitoring and Observability

```mermaid
graph TB
    subgraph "Application Metrics"
        PERF[Performance Metrics]
        ERROR[Error Tracking]
        USAGE[Usage Analytics]
    end

    subgraph "Infrastructure Metrics"
        LAMBDA_METRICS[Lambda Metrics]
        CDN_METRICS[CDN Metrics]
        DB_METRICS[Database Metrics]
    end

    subgraph "Alerting & Dashboards"
        CW_DASH[CloudWatch Dashboards]
        ALERTS[Automated Alerts]
        NOTIFICATIONS[Notifications]
    end

    PERF --> CW_DASH
    ERROR --> ALERTS
    USAGE --> CW_DASH

    LAMBDA_METRICS --> CW_DASH
    CDN_METRICS --> CW_DASH
    DB_METRICS --> ALERTS

    ALERTS --> NOTIFICATIONS

    classDef metrics fill:#607D8B,stroke:#37474F,stroke-width:2px,color:#fff
    classDef alerting fill:#F44336,stroke:#C62828,stroke-width:2px,color:#fff

    class PERF,ERROR,USAGE,LAMBDA_METRICS,CDN_METRICS,DB_METRICS metrics
    class CW_DASH,ALERTS,NOTIFICATIONS alerting
```

## Architecture Benefits

### Scalability

- **Serverless**: Automatic scaling based on demand
- **Global CDN**: Worldwide content distribution
- **Database**: Optimized connection pooling

### Reliability

- **Multi-AZ**: AWS multi-availability zone deployment
- **Redundancy**: Multiple layers of redundancy
- **Monitoring**: Comprehensive monitoring and alerting

### Security

- **Encryption**: End-to-end encryption
- **Access Control**: Fine-grained access control
- **Compliance**: Security best practices implemented

### Cost Efficiency

- **Pay-per-Use**: Only pay for actual usage
- **Optimization**: Automated cost optimization
- **Monitoring**: Cost tracking and alerts

## Future Architecture Considerations

### Planned Enhancements

1. **Multi-Region**: Deploy across multiple AWS regions
2. **Microservices**: Break down into smaller services
3. **Event-Driven**: Implement event-driven architecture
4. **AI/ML Pipeline**: Dedicated ML infrastructure
5. **Real-time**: WebSocket support for real-time features
