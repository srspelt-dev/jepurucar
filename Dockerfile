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
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Security: Create secure /tmp directory with proper permissions
# Nota: /tmp será montado como tmpfs en docker-compose, pero creamos la estructura aquí
RUN mkdir -p /tmp /var/tmp && \
    chmod 1777 /tmp /var/tmp && \
    chown root:root /tmp /var/tmp

# Copy the built application from builder stage
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Set ownership and permissions to nextjs user
RUN chown -R nextjs:nodejs /app && \
    # Asegurar que server.js tenga permisos de ejecución
    chmod +x /app/server.js || true && \
    # Asegurar que node esté disponible y tenga permisos correctos
    chmod +x /usr/local/bin/node || true && \
    # Remove unnecessary packages and clean up
    apk del --no-cache || true && \
    rm -rf /var/cache/apk/* /tmp/* /var/tmp/*

# Security: Switch to non-root user
USER nextjs

# Expose the port
EXPOSE 3010

# Set environment variable
ENV PORT=3010
ENV HOSTNAME="0.0.0.0"
ENV NODE_ENV=production

# Security: Set Node.js to run with minimal privileges
ENV NODE_OPTIONS="--disable-proto=delete"

# Override entrypoint to avoid docker-entrypoint.sh issues
ENTRYPOINT []

# Start the production server
CMD ["node", "server.js"]
