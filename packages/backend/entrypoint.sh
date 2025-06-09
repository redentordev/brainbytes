#!/bin/bash
set -e

echo "🔄 Starting backend with automatic database migration..."

# Function to wait for PostgreSQL to be ready
wait_for_postgres() {
    echo "⏳ Waiting for PostgreSQL to be ready..."
    
    while ! pg_isready -h postgres -p 5432 -U postgres; do
        echo "PostgreSQL is not ready yet. Waiting..."
        sleep 2
    done
    
    echo "✅ PostgreSQL is ready!"
}

# Function to run database migrations
run_migrations() {
    echo "🗃️ Running database migrations..."
    
    # Push schema to database (creates tables if they don't exist)
    bun run db:push
    
    echo "✅ Database migrations completed!"
}

# Main execution
echo "🚀 Backend initialization started..."

# Wait for database to be ready
wait_for_postgres

# Run migrations
run_migrations

# Start the application
echo "🎯 Starting the application..."
exec bun run --hot src/index.ts 