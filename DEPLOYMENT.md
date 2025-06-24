# Deployment Instructions

This document provides instructions for deploying your portfolio to both GitHub Pages and Netlify.

## GitHub Pages Deployment

### Automatic Deployment (GitHub Actions)

This repository is set up with GitHub Actions to automatically deploy to GitHub Pages whenever you push to the main branch.

1. Simply push your changes to the main branch:

   ```
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```

2. The GitHub Action will automatically build and deploy your site to the gh-pages branch.

3. Your site will be available at: https://rajdip1805.github.io/portfolio/

### Manual Deployment

You can also manually deploy to GitHub Pages:

1. Make sure you have the gh-pages package installed:

   ```
   npm install gh-pages --save-dev
   ```

2. Run the deploy script:

   ```
   npm run deploy
   ```

3. This will build your project and push the built files to the gh-pages branch.

## Netlify Deployment

To deploy to Netlify:

1. Create a Netlify account if you don't have one: [Netlify Sign Up](https://app.netlify.com/signup)

2. Log in to Netlify and go to the dashboard.

3. Click "New site from Git".

4. Connect to your GitHub account and select your portfolio repository.

5. Configure the build settings:

   - Build command: `npm run build`
   - Publish directory: `dist`

6. Add these environment variables if needed:

   - No specific environment variables are needed for this project

7. Click "Deploy site".

8. Once deployed, you can set up a custom domain in the Netlify dashboard if desired.

### Netlify Configuration

For Vite projects, you should add a `netlify.toml` file to the root of your project:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

This handles routing for your single-page application.

## Troubleshooting

### GitHub Pages

- If your assets aren't loading, make sure the `base` property in `vite.config.ts` is set correctly to `/portfolio/`.
- If your links don't work, check that you're using relative paths or adjust them to work with the base path.

### Netlify

- If you see a "Page Not Found" error when navigating directly to a route, make sure your `netlify.toml` file is properly configured.
- Check the Netlify build logs if your deployment fails.

## Prerequisites

Make sure your project has been built and tested locally:

```bash
# Install dependencies
npm install

# Run in development mode
npm run dev

# Build the project
npm run build
```

## Images Configuration

If you're experiencing issues with images not displaying, please ensure:

1. All images in the `assets` folder are placed in the correct location:

   - For Vite projects (like this one), place them in the `public/assets/` directory
   - Make sure the file names match exactly (case-sensitive)

2. Verify that the paths in the code are correct:
   - The project is configured to use `./assets/filename.ext` format
   - This works for both development and production deployments

## Deployment Options

### 1. Netlify (Recommended)

1. Create an account on [Netlify](https://www.netlify.com/)
2. From your Netlify dashboard, click "New site from Git"
3. Connect to your GitHub repository
4. Use these build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click "Deploy site"

#### Environment Variables (if needed)

- Add any environment variables in Netlify's dashboard under "Site settings" > "Build & deploy" > "Environment"

### 2. Vercel

1. Create an account on [Vercel](https://vercel.com/)
2. From your dashboard, click "New Project"
3. Import your GitHub repository
4. The build settings should be auto-detected, but verify:
   - Framework preset: Vite
   - Build command: `npm run build`
   - Output directory: `dist`
5. Click "Deploy"

### 3. GitHub Pages

1. Install the GitHub Pages dependency:

   ```bash
   npm install --save-dev gh-pages
   ```

2. Add these scripts to your package.json:

   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. Create a `vite.config.js` file or modify your existing one:

   ```javascript
   export default {
     base: "/your-repo-name/", // Replace with your GitHub repository name
   };
   ```

4. Run the deploy script:

   ```bash
   npm run deploy
   ```

5. Configure GitHub Pages in your repository settings:
   - Go to Settings > Pages
   - Set the source branch to `gh-pages`

## Post-Deployment

After successful deployment:

1. Test all functionality on the live site
2. Verify that all links work correctly
3. Check if images and assets are loading properly
4. Test the responsive design on different devices
5. Set up a custom domain if desired (available in settings of most deployment platforms)
