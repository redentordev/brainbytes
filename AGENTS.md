# Agent Guidelines for BrainBytes

## Build/Test Commands

- `bun run dev` - Start frontend in development mode
- `bun run test` - Run frontend tests (Jest)
- `bun run test --watch` - Run tests in watch mode
- `bun run test path/to/test/file.test.ts` - Run single test file
- `bun run lint` - Lint with ESLint + Prettier check
- `bun run format` - Format code with Prettier
- `bun run typecheck` - TypeScript type checking
- `bun run build` - Build production bundle
- `bun run db:generate` - Generate Drizzle migrations
- `bun run db:migrate` - Run database migrations
- `bun run db:push` - Push schema changes to database

## Code Style

- **Formatting**: Prettier with 2-space indentation, double quotes, semicolons, 80 char width
- **Imports**: Use `@/` for absolute imports, organize external → internal → relative
- **Types**: Strict TypeScript, explicit return types, use interfaces for objects
- **Naming**: camelCase for variables/functions, PascalCase for components/types, kebab-case for files
- **Components**: React functional components with TypeScript, "use client" for client components
- **Error Handling**: Zod validation, proper error boundaries, type-safe error handling
- **State**: Zustand for global state, React Query for server state, Context for component trees
- **UI**: shadcn/ui + Radix UI components, Tailwind CSS, cn() utility for conditional classes

## Architecture

- Monorepo: `packages/app` (Next.js 15) + `packages/core` (Drizzle ORM)
- Database: Drizzle ORM with PostgreSQL, better-auth for authentication
- Frontend: React 19, TypeScript strict mode, Tailwind CSS v4
