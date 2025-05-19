# Troubleshooting Guide

This document provides solutions for common issues that may arise while setting up or running the BrainBytes AI tutoring platform.

## Container Issues

### Containers Won't Start

**Symptoms:**

- `docker compose up` fails
- Containers exit immediately after starting

**Possible Causes and Solutions:**

1. **Port Conflicts**

   - **Symptom:** Error message about port already in use
   - **Solution:** Check if other applications are using ports 3000, 3001, or 5432

     ```bash
     # On Windows
     netstat -ano | findstr "3000"
     netstat -ano | findstr "3001"
     netstat -ano | findstr "5432"

     # On macOS/Linux
     lsof -i :3000
     lsof -i :3001
     lsof -i :5432
     ```

2. **Insufficient Permissions**

   - **Symptom:** Permission denied errors
   - **Solution:**
     ```bash
     # On Linux
     sudo chmod 666 /var/run/docker.sock
     ```

3. **Insufficient Resources**
   - **Symptom:** Containers start and then immediately stop
   - **Solution:** Increase Docker resource limits in Docker Desktop settings

### Container Communication Problems

**Symptoms:**

- Frontend shows connection errors
- Backend logs show database connection failures

**Solutions:**

1. **Check Network Configuration**

   ```bash
   docker network ls
   docker network inspect devops_default
   ```

2. **Verify Services Are Running**

   ```bash
   docker compose ps
   ```

3. **Check Container Logs**

   ```bash
   docker compose logs frontend
   docker compose logs backend
   docker compose logs postgres
   ```

4. **Restart Containers**
   ```bash
   docker compose restart
   ```

## Application Issues

### Authentication Problems

**Symptoms:**

- Unable to log in
- OAuth flow not working

**Solutions:**

1. **Check Environment Variables**

   - Verify that `GITHUB_CLIENT_ID` and `GITHUB_CLIENT_SECRET` are set correctly in `.env`
   - Ensure `BETTER_AUTH_SECRET` is set

2. **Inspect Network Requests**
   - Use browser developer tools to check for failed network requests

### Chat Messages Not Displaying

**Symptoms:**

- No response from AI
- Messages not appearing in the chat

**Solutions:**

1. **Backend API Connection Issue**

   - **Check:** Browser developer console for network errors
   - **Solution:** Verify API routes and backend service is running

2. **OpenAI API Issue**

   - **Check:** Backend logs for OpenAI API errors
   - **Solution:** Verify `OPENAI_API_KEY` is valid

3. **Database Connection Issue**
   - **Check:** Backend logs for PostgreSQL connection errors
   - **Solution:** Verify PostgreSQL container is running and connection string is correct

## Database Issues

### Database Migration Problems

**Symptoms:**

- Error when running drizzle commands
- Backend fails to start with database schema errors

**Solutions:**

1. **Run Migration Commands in the Right Order**

   ```bash
   docker-compose exec backend bunx drizzle-kit generate
   docker-compose exec backend bunx drizzle-kit push
   ```

2. **Check Database Connection**
   - Verify `DATABASE_URL` in `.env` is correct
   - Check if PostgreSQL container is running

### Data Persistence Problems

**Symptoms:**

- Data disappears after container restart
- Unable to see previous messages

**Solutions:**

1. **Check Volume Configuration**

   - Ensure the PostgreSQL volume is properly configured in `docker-compose.yaml`

   ```yaml
   volumes: postgres_data:/var/lib/postgresql/data
   ```

2. **Verify Data Is Being Saved**

   - Connect to PostgreSQL container and check tables:

   ```bash
   docker-compose exec postgres psql -U postgres -d brainbytes

   # Inside PostgreSQL
   \dt
   SELECT * FROM users LIMIT 5;
   SELECT * FROM threads LIMIT 5;
   ```

## Development Environment Issues

### Hot Reload Not Working

**Symptoms:**

- Changes to code are not reflected in the running application

**Solutions:**

1. **Check Docker Watch Configuration**

   - Verify that the watch configurations in `docker-compose.yaml` are correct

2. **Restart Containers**

   ```bash
   docker compose down
   docker compose up --watch --build
   ```

3. **Check for Build Errors**
   - Look for compilation errors in the logs

### Package Dependency Issues

**Symptoms:**

- `Module not found` errors
- Unexpected application behavior

**Solutions:**

1. **Reinstall Dependencies**

   ```bash
   # From project root
   rm -rf node_modules
   rm -rf packages/*/node_modules
   bun install
   ```

2. **Rebuild Containers**
   ```bash
   docker compose down
   docker compose up --watch --build
   ```
