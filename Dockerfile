FROM node:20-alpine AS builder

WORKDIR /app

# Configure npm for better network reliability
RUN npm config set fetch-retries 5 && \
    npm config set fetch-retry-mintimeout 20000 && \
    npm config set fetch-retry-maxtimeout 120000 && \
    npm config set fetch-timeout 600000 && \
    npm config set maxsockets 5

# Copy package files first for better caching
COPY package*.json ./

# Install dependencies with npm ci for faster, more reliable builds
# Using retry logic to handle network issues in production
RUN npm ci --legacy-peer-deps --no-audit --progress=true || \
    (sleep 10 && npm ci --legacy-peer-deps --no-audit --progress=true) || \
    (sleep 20 && npm ci --legacy-peer-deps --no-audit --progress=true)

# Copy source code
COPY . .

# Build the application for production
RUN npm run build

# Production stage
FROM node:20-alpine AS runner

WORKDIR /app

# Create a non-root user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy the built application from builder stage
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Set ownership to nextjs user
RUN chown -R nextjs:nodejs /app

USER nextjs

# Expose the port
EXPOSE 3010

# Set environment variable
ENV PORT=3010
ENV HOSTNAME="0.0.0.0"
ENV NODE_ENV=production

# Start the production server
CMD ["node", "server.js"]
