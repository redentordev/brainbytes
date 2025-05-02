FROM oven/bun:latest as builder
WORKDIR /app
COPY package*.json ./
RUN bun install
COPY . .
RUN bun run build

FROM oven/bun:latest
WORKDIR /app
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist
RUN bun install --production
EXPOSE 3001
CMD ["bun", "run", "dist/index.js"]