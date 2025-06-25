# Agent Guidelines for BrainBytes

## Build/Test Commands

- `bun run dev` - Start both frontend and backend in development mode
- `bun run test` - Run all tests (frontend Jest + backend Vitest)
- `bun run test:watch` - Run tests in watch mode
- `bun run test:frontend` - Run frontend tests only (Jest)
- `bun run test:backend` - Run backend tests only (Vitest)
- `bun run lint` - Lint all packages (ESLint + Prettier)
- `bun run format` - Format code with Prettier
- `bun run build` - Build production bundles

## Code Style

- **Formatting**: Prettier with 2-space indentation, double quotes, semicolons
- **Imports**: Use `@/` for frontend absolute imports, organize by external → internal → relative
- **Types**: Strict TypeScript, use interfaces for objects, explicit return types for functions
- **Naming**: camelCase for variables/functions, PascalCase for components/types, kebab-case for files
- **Components**: Use React functional components with TypeScript, Radix UI + Tailwind CSS
- **Error Handling**: Use proper error boundaries, validate with Zod schemas
- **State**: Zustand for global state, React Query for server state, Context for component trees

## Architecture

- Monorepo with `packages/frontend` (Next.js) and `packages/backend` (Hono + Bun)
- Database: Drizzle ORM with PostgreSQL
- Auth: better-auth library
- UI: shadcn/ui components with Tailwind CSS
