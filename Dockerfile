# Build stage
FROM node:20-slim AS builder

WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy project files
COPY . .

# Build the application
# This runs vite build and esbuild for the server
RUN pnpm run build

# Final stage
FROM node:20-slim

WORKDIR /app

# Copy built assets and server
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./package.json

# Copy patches if needed (though already applied in build stage)
COPY --from=builder /app/patches ./patches

# Install only production dependencies
# Since we bundled the server, we might only need express if it was externalized.
# package.json says --packages=external for esbuild
RUN npm install --production

ENV NODE_ENV=production
ENV PORT=3000

EXPOSE 3000

CMD ["npm", "start"]
