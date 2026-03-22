---
description: Deploying the Magic Team Portal
---

# Deploying the Magic Team Portal

Since your app uses **React + Vite**, the best way to publish it for free is through **Vercel** or **Netlify**.

## Option 1: Vercel (Easiest & Smoothest)

1.  **Push to GitHub**:
    Ensure your latest code is on GitHub:
    ```bash
    git add .
    git commit -m "pre-deployment: magic team overhaul"
    git push origin main
    ```
2.  **Go to Vercel**: Sign up at [vercel.com](https://vercel.com) using your GitHub account.
3.  **Import Project**: Click **"Add New"** -> **"Project"** and select your team repository.
4.  **Auto-Detect**: Vercel will see it's a **Vite** project. Keep the default settings and click **"Deploy"**.
5.  **Done!** You'll get a professional URL like `yourproject.vercel.app`.

## Option 2: Netlify

1.  Sign in at [netlify.com](https://netlify.com) via GitHub.
2.  Click **"Add new site"** -> **"Import from Git"**.
3.  Choose your repository.
4.  Set the build settings (Build Command: `npm run build`, Publish Directory: `build` or `dist`).
5.  Click **"Deploy site"**.

## Option 3: Firebase Hosting
If you need more advanced backend integration later:
1.  Run `npm install -g firebase-tools`.
2.  `firebase login`.
3.  `firebase init hosting` (Choose `build` as public directory).
4.  `firebase deploy`.
