# BrainBytes Cloud Environment Documentation

## Overview

BrainBytes is deployed on AWS using the SST (Serverless Stack) framework with Cloudflare for DNS management. This document provides comprehensive information about the cloud infrastructure, configuration, and deployment environment.

## Cloud Platform: AWS

### Primary Services Used

#### 1. AWS Lambda

- **Purpose**: Serverless compute for Next.js application
- **Runtime**: Node.js 20.x
- **Memory**: Auto-scaled based on demand
- **Timeout**: 30 seconds
- **Environment**: Production and development stages

#### 2. Amazon CloudFront

- **Purpose**: Global content delivery network (CDN)
- **Features**:
  - Edge caching for static assets
  - Custom domain support
  - SSL/TLS termination
  - Geographic distribution

#### 3. AWS S3

- **Purpose**: Static asset storage
- **Buckets**:
  - Application assets bucket
  - Build artifacts storage
- **Configuration**: Public read access for static assets

#### 4. AWS IAM

- **Purpose**: Identity and access management
- **Roles**:
  - Lambda execution role
  - CloudFront access role
  - S3 access permissions
- **Policies**: Least privilege principle applied

### SST Configuration

#### Application Structure

```typescript
// sst.config.ts configuration
app: {
  name: "brainbytes",
  removal: "remove",
  home: "aws",
  providers: { cloudflare: "6.3.1" }
}
```

#### Secrets Management

The application uses AWS Systems Manager Parameter Store for secure secret management:

- `DatabaseUrl`: PostgreSQL connection string
- `BetterAuthSecret`: Authentication secret key
- `GithubClientId`: GitHub OAuth application ID
- `GithubClientSecret`: GitHub OAuth application secret
- `OpenaiApiKey`: OpenAI API key for AI features
- `CloudflareApiToken`: Cloudflare API access token
- `CloudflareAccountId`: Cloudflare account identifier

#### Domain Configuration

- **Primary Domain**: `brainbytes.redentor.dev`
- **DNS Provider**: Cloudflare
- **SSL**: Automatic SSL certificate provisioning
- **CDN**: CloudFront distribution

## Environment Stages

### Development Stage

- **Stage Name**: `dev`
- **API URL**: `http://localhost:3000`
- **Database**: Development PostgreSQL instance
- **Secrets**: Development-specific values
- **Deployment**: Manual deployment for testing

### Production Stage

- **Stage Name**: `production`
- **API URL**: `https://brainbytes.redentor.dev`
- **Database**: Production PostgreSQL instance
- **Secrets**: Production values (encrypted)
- **Deployment**: Automated via GitHub Actions

## Database Configuration

### PostgreSQL Database

- **Provider**: External PostgreSQL service
- **Connection**: Secure SSL connection
- **Schema Management**: Drizzle ORM migrations
- **Backup**: Automated daily backups
- **Monitoring**: Connection pooling and query monitoring

### Database Schema

- **Users**: Authentication and user management
- **Threads**: Chat conversation storage
- **Materials**: Learning material management
- **Sessions**: User session tracking

## Security Configuration

### Authentication

- **Provider**: better-auth library
- **OAuth Providers**: GitHub integration
- **Session Management**: Secure session tokens
- **CSRF Protection**: Built-in CSRF protection

### Environment Variables

All sensitive configuration is managed through:

- AWS Systems Manager Parameter Store (production)
- Local `.env` files (development)
- GitHub Secrets (CI/CD pipeline)

### Network Security

- **HTTPS Only**: All traffic encrypted in transit
- **CORS**: Configured for secure cross-origin requests
- **Headers**: Security headers implemented
- **Rate Limiting**: API rate limiting configured

## Monitoring and Logging

### AWS CloudWatch

- **Lambda Logs**: Function execution logs
- **Metrics**: Performance and error metrics
- **Alarms**: Automated alerting for issues
- **Dashboards**: Real-time monitoring dashboards

### Application Monitoring

- **Error Tracking**: Centralized error logging
- **Performance**: Response time monitoring
- **Usage Analytics**: User interaction tracking
- **Health Checks**: Automated health monitoring

## Scaling and Performance

### Auto Scaling

- **Lambda Concurrency**: Automatic scaling based on demand
- **CloudFront**: Global edge caching
- **Database**: Connection pooling for optimal performance

### Performance Optimization

- **Static Assets**: CDN caching with long TTL
- **API Responses**: Optimized response caching
- **Database Queries**: Query optimization and indexing
- **Bundle Size**: Code splitting and tree shaking

## Backup and Disaster Recovery

### Data Backup

- **Database**: Daily automated backups
- **Application Code**: Version control in GitHub
- **Configuration**: Infrastructure as Code (SST)

### Disaster Recovery

- **RTO**: Recovery Time Objective < 1 hour
- **RPO**: Recovery Point Objective < 24 hours
- **Multi-Region**: CloudFront global distribution
- **Rollback**: Automated rollback capabilities

## Cost Optimization

### AWS Cost Management

- **Pay-per-Use**: Serverless pricing model
- **Resource Tagging**: Cost allocation tracking
- **Monitoring**: AWS Cost Explorer integration
- **Optimization**: Regular cost review and optimization

### Estimated Monthly Costs

- **Lambda**: $5-20 (based on usage)
- **CloudFront**: $1-5 (based on traffic)
- **S3**: $1-3 (storage costs)
- **Parameter Store**: $0.05 per parameter
- **Total Estimated**: $10-30/month for moderate usage

## Compliance and Governance

### Security Standards

- **Encryption**: Data encrypted at rest and in transit
- **Access Control**: Role-based access control (RBAC)
- **Audit Logging**: Comprehensive audit trails
- **Compliance**: SOC 2 Type II compliance ready

### Governance

- **Infrastructure as Code**: All infrastructure versioned
- **Change Management**: Controlled deployment process
- **Documentation**: Comprehensive documentation maintained
- **Review Process**: Regular security and architecture reviews

## Support and Maintenance

### Maintenance Windows

- **Scheduled**: Monthly maintenance windows
- **Emergency**: 24/7 emergency response capability
- **Updates**: Regular security and feature updates

### Support Contacts

- **Technical Lead**: Development team
- **Infrastructure**: DevOps team
- **Security**: Security team
- **Escalation**: Management team

## Next Steps

### Planned Improvements

1. **Multi-Region Deployment**: Implement multi-region failover
2. **Enhanced Monitoring**: Advanced APM integration
3. **Cost Optimization**: Reserved capacity planning
4. **Security Enhancements**: Additional security controls
5. **Performance**: Further performance optimizations

### Migration Considerations

- **Database Migration**: Plan for database scaling
- **Service Migration**: Evaluate additional AWS services
- **Cost Optimization**: Implement cost optimization strategies
- **Security Hardening**: Enhanced security measures
