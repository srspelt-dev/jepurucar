# Performance Optimization Guide for Slow Filesystem

## Problem
You're experiencing slow filesystem detection warnings in Next.js development. This is common on macOS, especially with:
- Network drives
- Cloud storage (Dropbox, Google Drive, etc.)
- Antivirus software
- APFS with certain configurations

## Solutions Implemented

### 1. Next.js Configuration Optimizations ✅
- Added experimental features for better performance
- Optimized package imports for `lucide-react` and `react-icons`
- Added webpack optimizations for development mode
- Configured watch options to reduce filesystem polling

### 2. New Development Scripts ✅
```bash
# Use this for faster development
npm run dev:fast

# Clean cache when experiencing issues
npm run clean
```

### 3. Environment Variables (Manual Setup)
Add these to your `.env.local` file:
```bash
# Performance optimizations
NEXT_TELEMETRY_DISABLED=1
CHOKIDAR_USEPOLLING=true
CHOKIDAR_INTERVAL=1000
NODE_OPTIONS="--max-old-space-size=4096 --optimize-for-size"
```

## Additional Solutions

### 4. macOS-Specific Optimizations

#### Check if your project is on a network drive:
```bash
df -h .
```

#### If using APFS, consider these optimizations:
```bash
# Check APFS settings
diskutil info / | grep "File System Personality"

# If on APFS, you might want to move to a local folder
```

### 5. Antivirus Exclusions
If you have antivirus software, exclude these directories:
- `/Users/edspelt/Developer/Develop/jepuru`
- `/Users/edspelt/Developer/Develop/jepuru/.next`
- `/Users/edspelt/Developer/Develop/jepuru/node_modules`

### 6. Alternative Development Approaches

#### Use a local development folder:
```bash
# Move project to a local folder (if currently on network drive)
cp -r /Users/edspelt/Developer/Develop/jepuru ~/Desktop/jepuru-local
cd ~/Desktop/jepuru-local
npm install
npm run dev:fast
```

#### Use Docker for development:
```dockerfile
# Create a Dockerfile.dev
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev:fast"]
```

### 7. Monitoring Performance

#### Check filesystem performance:
```bash
# Test read/write speed
dd if=/dev/zero of=testfile bs=1m count=100
dd if=testfile of=/dev/null bs=1m
rm testfile
```

#### Monitor Next.js build times:
```bash
# Use the build analyzer
npm run build:analyze
```

## Quick Fixes to Try

1. **Restart your development server** with the new configuration
2. **Clear Next.js cache**: `npm run clean`
3. **Use the fast development script**: `npm run dev:fast`
4. **Check if you're on a network drive** and move to local if possible
5. **Disable antivirus scanning** for your project directory temporarily

## Expected Results

After implementing these solutions, you should see:
- Faster file watching
- Reduced filesystem polling
- Better development server performance
- Fewer or no slow filesystem warnings

## Troubleshooting

If issues persist:
1. Check if your project is on a network drive
2. Temporarily disable antivirus
3. Move project to a local SSD
4. Consider using Docker for development
5. Monitor system resources during development

## Commands to Run

```bash
# Apply all optimizations
npm run clean
npm run dev:fast

# If still slow, try moving to local folder
cp -r . ~/Desktop/jepuru-local && cd ~/Desktop/jepuru-local && npm run dev:fast
``` 