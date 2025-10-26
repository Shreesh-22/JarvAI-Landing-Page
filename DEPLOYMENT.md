# Cloudflare Pages Deployment Guide

This guide will help you deploy your JarvAI landing page to Cloudflare Pages.

## Prerequisites

1. A Cloudflare account (free tier is sufficient)
2. Your project code in a Git repository (GitHub, GitLab, or Bitbucket)

## Deployment Methods

### Method 1: Direct Upload (Quick Start)

1. **Build your project locally:**
   ```bash
   npm run build
   ```

2. **Go to Cloudflare Pages:**
   - Visit [dash.cloudflare.com](https://dash.cloudflare.com)
   - Navigate to "Pages" in the sidebar
   - Click "Create a project"

3. **Upload your build:**
   - Choose "Upload assets" 
   - Upload the contents of your `out` folder (created after `npm run build`)
   - Set the build output directory to `out`

### Method 2: Git Integration (Recommended)

1. **Connect your repository:**
   - Go to Cloudflare Pages dashboard
   - Click "Create a project"
   - Choose "Connect to Git"
   - Select your Git provider and repository

2. **Configure build settings:**
   - **Framework preset:** Next.js (Static HTML Export)
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
   - **Root directory:** `/` (or leave empty)

3. **Environment variables (if needed):**
   - Add any environment variables in the Pages dashboard
   - No additional variables needed for this static site

## Configuration Files Created

The following files have been created/updated for Cloudflare Pages deployment:

### `wrangler.toml`
- Cloudflare Pages configuration
- Defines build settings and environment

### `next.config.js` (updated)
- Added `output: 'export'` for static site generation
- Set `distDir: 'out'` for Cloudflare Pages compatibility
- Added `trailingSlash: true` for better routing

### `public/_headers`
- Security headers for your site
- Cache control for static assets
- Performance optimizations

### `public/_redirects`
- Client-side routing support
- SPA fallback configuration

### `package.json` (updated)
- Added `pages:build` script for Cloudflare Pages
- Added `preview` script for local testing

## Local Testing

Before deploying, test your build locally:

```bash
# Build the project
npm run build

# Preview the built site
npm run preview
```

## Custom Domain (Optional)

1. In Cloudflare Pages dashboard, go to your project
2. Click "Custom domains"
3. Add your domain
4. Update DNS records as instructed
5. Enable SSL/TLS (automatic with Cloudflare)

## Build Settings Summary

- **Framework:** Next.js (Static HTML Export)
- **Build command:** `npm run build`
- **Build output directory:** `out`
- **Node.js version:** 18.x (default)

## Troubleshooting

### Common Issues:

1. **Build fails:** Ensure all dependencies are in `package.json`
2. **404 errors:** Check that `_redirects` file is in the `public` folder
3. **Images not loading:** Verify image paths and that images are in the `public` folder
4. **Routing issues:** Ensure `_redirects` file contains the SPA fallback rule

### Build Logs:
- Check the build logs in Cloudflare Pages dashboard
- Look for any missing dependencies or build errors
- Ensure the build output directory is set to `out`

## Performance Tips

1. **Optimize images:** Use WebP format when possible
2. **Enable compression:** Cloudflare automatically compresses assets
3. **Use CDN:** Cloudflare Pages includes global CDN
4. **Cache headers:** Already configured in `_headers` file

## Security

The `_headers` file includes:
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- Referrer-Policy: strict-origin-when-cross-origin
- Permissions-Policy for camera/microphone/geolocation

## Support

For issues with Cloudflare Pages:
- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Cloudflare Community](https://community.cloudflare.com/)
