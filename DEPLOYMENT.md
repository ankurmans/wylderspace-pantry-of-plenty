# Deployment Guide

## Vercel Deployment

This project is configured for deployment on Vercel.

### Prerequisites

1. A Vercel account
2. Git repository (GitHub, GitLab, or Bitbucket)

### Deployment Steps

1. **Push to Git Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your Git repository
   - Vercel will auto-detect Next.js

3. **Environment Variables** (if needed)
   - Go to Project Settings > Environment Variables
   - Add any required variables:
     - `FIGMA_FILE_KEY` (optional, for Figma MCP)
     - `FIGMA_ACCESS_TOKEN` (optional, for Figma MCP)

4. **Deploy**
   - Vercel will automatically deploy on every push to main
   - Or click "Deploy" to deploy immediately

### Custom Domain

1. Go to Project Settings > Domains
2. Add your custom domain
3. Follow DNS configuration instructions

### Build Configuration

The project uses the default Next.js build configuration. The `vercel.json` file includes:
- Framework detection (Next.js)
- Build command: `npm run build`
- Install command: `npm install`

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Design Token Sync

To sync design tokens from Figma:

```bash
npm run sync-tokens
```

Note: This requires Figma MCP server to be set up and configured.

