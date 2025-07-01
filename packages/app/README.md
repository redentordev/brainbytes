# BrainBytes Frontend Application

The frontend application for the BrainBytes AI-powered tutoring platform, built with Next.js 15 and React 19.

## 🎯 Overview

This package contains the user-facing web application that provides:

- **Interactive AI Chat Interface**: Real-time conversations with AI tutors
- **Learning Materials Management**: Upload and organize study materials
- **Authentication System**: Secure login via GitHub and Google OAuth
- **Responsive Design**: Optimized for desktop and mobile devices
- **Real-time Features**: Streaming AI responses and live updates

## 🛠️ Technology Stack

| Component            | Technology      | Purpose                      |
| -------------------- | --------------- | ---------------------------- |
| **Framework**        | Next.js 15      | React-based web framework    |
| **UI Library**       | React 19        | User interface components    |
| **Styling**          | Tailwind CSS    | Utility-first CSS framework  |
| **Components**       | shadcn/ui       | Pre-built component library  |
| **State Management** | Zustand         | Lightweight state management |
| **Forms**            | React Hook Form | Form handling and validation |
| **HTTP Client**      | TanStack Query  | Data fetching and caching    |
| **Authentication**   | better-auth     | Authentication library       |
| **AI Integration**   | Vercel AI SDK   | Streaming AI responses       |
| **Testing**          | Jest + RTL      | Unit and integration testing |

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   ├── auth/          # Authentication endpoints
│   │   ├── chat/          # Chat functionality
│   │   ├── completion/    # AI completion endpoint
│   │   ├── materials/     # Learning materials API
│   │   └── threads/       # Chat thread management
│   ├── chat/              # Chat interface pages
│   ├── login/             # Authentication pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── chat/              # Chat-related components
│   │   ├── chat-form.tsx  # Main chat interface
│   │   └── login-form.tsx # Authentication form
│   ├── learning-materials/ # Material management
│   ├── shared/            # Shared components
│   ├── thread/            # Thread management
│   └── ui/                # shadcn/ui components
├── contexts/              # React contexts
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions
│   ├── auth.ts           # Authentication configuration
│   ├── llm.ts            # AI/LLM integration
│   └── utils.ts          # General utilities
└── middleware.ts          # Next.js middleware
```

## 🚀 Development

### Prerequisites

- Bun (latest version)
- Node.js 20+
- Environment variables configured

### Getting Started

1. **Install dependencies** (from project root):

   ```bash
   bun install
   ```

2. **Set up environment variables**:
   Create `.env.local` in the project root with required variables.

3. **Start development server**:

   ```bash
   bun run dev
   ```

4. **Access the application**:
   - Frontend: http://localhost:3000

### Available Scripts

| Command             | Description              |
| ------------------- | ------------------------ |
| `bun run dev`       | Start development server |
| `bun run build`     | Build for production     |
| `bun run start`     | Start production server  |
| `bun run lint`      | Run ESLint               |
| `bun run test`      | Run Jest tests           |
| `bun run typecheck` | Check TypeScript types   |

## 🧪 Testing

The frontend includes comprehensive test coverage using Jest and React Testing Library:

### Test Structure

```
src/components/chat/__tests__/
├── chat-form.test.tsx     # Chat interface tests
└── login-form.test.tsx    # Authentication tests
```

### Test Coverage

- **89.58% overall coverage**
- **Component testing**: User interactions, form submissions
- **Integration testing**: API calls, authentication flows
- **Accessibility testing**: Screen reader compatibility

### Running Tests

```bash
# Run all tests
bun run test

# Run tests in watch mode
bun run test --watch

# Run tests with coverage
bun run test --coverage
```

## 🎨 UI Components

The application uses shadcn/ui components for consistent design:

### Core Components

- **Button**: Various button styles and states
- **Input**: Form input fields with validation
- **Dialog**: Modal dialogs and overlays
- **Card**: Content containers
- **Avatar**: User profile images
- **Badge**: Status indicators
- **Tabs**: Navigation tabs
- **Textarea**: Multi-line text input

### Custom Components

- **ChatForm**: Main chat interface with AI integration
- **LoginForm**: Authentication with OAuth providers
- **MaterialManager**: Learning materials upload and management
- **ThreadList**: Chat history and thread navigation
- **Navigation**: App navigation and user menu

## 🔐 Authentication

Authentication is handled by better-auth with support for:

- **GitHub OAuth**: Login with GitHub account
- **Google OAuth**: Login with Google account
- **Session Management**: Secure session handling
- **Protected Routes**: Middleware-based route protection

### Authentication Flow

1. User clicks login button
2. Redirected to OAuth provider
3. Provider authenticates user
4. User redirected back with auth code
5. Session created and stored
6. User gains access to protected features

## 🤖 AI Integration

The chat functionality integrates with OpenAI's API:

### Features

- **Streaming Responses**: Real-time AI response streaming
- **Context Awareness**: Maintains conversation context
- **Material Integration**: AI can reference uploaded materials
- **Error Handling**: Graceful handling of API errors

### Implementation

```typescript
// AI streaming with Vercel AI SDK
import { useChat } from "@ai-sdk/react";

const { messages, input, handleInputChange, handleSubmit } = useChat({
  api: "/api/chat",
  initialMessages: threadMessages,
});
```

## 📱 Responsive Design

The application is fully responsive with:

- **Mobile-first approach**: Optimized for mobile devices
- **Breakpoint system**: Tailwind CSS responsive utilities
- **Touch-friendly**: Large touch targets and gestures
- **Progressive enhancement**: Works without JavaScript

### Breakpoints

- **sm**: 640px and up (tablets)
- **md**: 768px and up (small laptops)
- **lg**: 1024px and up (desktops)
- **xl**: 1280px and up (large screens)

## 🔧 Configuration

### Next.js Configuration

```typescript
// next.config.ts
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["@ai-sdk/openai"],
  },
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
};
```

### TypeScript Configuration

```json
// tsconfig.json
{
  "compilerOptions": {
    "strict": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

## 🚀 Deployment

The frontend is deployed using SST (Serverless Stack):

### Build Process

1. **Dependencies**: Install with Bun
2. **Type Check**: Verify TypeScript types
3. **Lint**: Check code quality
4. **Test**: Run test suite
5. **Build**: Create production bundle
6. **Deploy**: Deploy to AWS via SST

### Environment Variables

Production deployment requires these environment variables:

- `DATABASE_URL`: PostgreSQL connection string
- `BETTER_AUTH_SECRET`: Authentication secret
- `GITHUB_CLIENT_ID/SECRET`: GitHub OAuth credentials
- `GOOGLE_CLIENT_ID/SECRET`: Google OAuth credentials
- `OPENAI_API_KEY`: OpenAI API access
- `CLOUDFLARE_*`: Cloudflare configuration

## 📊 Performance

### Optimization Strategies

- **Code Splitting**: Automatic route-based splitting
- **Image Optimization**: Next.js Image component
- **Bundle Analysis**: Webpack bundle analyzer
- **Caching**: Aggressive caching strategies
- **CDN**: Cloudflare global distribution

### Metrics

- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

## 🔍 Debugging

### Development Tools

- **React DevTools**: Component inspection
- **Next.js DevTools**: Performance analysis
- **Browser DevTools**: Network and performance
- **TypeScript**: Compile-time error checking

### Common Issues

1. **Hydration Errors**: Check server/client rendering differences
2. **API Errors**: Verify environment variables and endpoints
3. **Authentication Issues**: Check OAuth configuration
4. **Build Errors**: Verify TypeScript types and imports

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [better-auth](https://www.better-auth.com/)
- [Vercel AI SDK](https://sdk.vercel.ai/)

---

**Part of the BrainBytes monorepo** - See [main README](../../README.md) for complete project information.
