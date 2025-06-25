# BrainBytes AI Tutor Frontend

## Overview

This is the frontend application for the BrainBytes AI tutoring platform, built with Next.js. BrainBytes is designed to make academic help more accessible for Filipino students through an AI-powered tutoring solution.

## Features

- Interactive chat interface for students
- Message history management
- Responsive design for mobile and desktop
- Authentication and session management

## Local Development

### Prerequisites

- [Bun](https://bun.sh/)
- [Docker](https://www.docker.com/products/docker-desktop)

### Setup

1. From the root directory, install dependencies:

   ```
   bun install
   ```

2. Create a `.env` file in the root directory with required environment variables

3. Start the development server:

   ```
   docker compose up --watch --build
   ```

4. Access the application:
   - Frontend: http://localhost:3000

## Architecture

The frontend application follows a component-based architecture built with Next.js. Key components include:

- Chat interface for student-AI interaction
- Authentication components
- Learning materials display

## Contributing

Please follow the contribution guidelines in the root README.md for branching strategy and commit message conventions.
