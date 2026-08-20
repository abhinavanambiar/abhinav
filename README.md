# Abhinav A Nambiar — Portfolio Site

A static, single-page portfolio. No build step, no dependencies — just
`index.html`, `style.css`, and `script.js`.

## Files
- `index.html` — page content
- `style.css` — all styling
- `script.js` — one small motion guard, safe to ignore/delete

## Editing content
Open `index.html` in any text editor. All text (summary, experience
bullets, links) lives directly in the markup — search for the section
you want (`<!-- ... -->` comments aren't included, but section `id`s
like `experience` and `education` mark each block).

## Hosting on GitHub Pages (free)

1. **Create a repository**
   Go to [github.com/new](https://github.com/new). Name it anything —
   if you name it exactly `your-username.github.io`, your site will
   live at the root domain (e.g. `abhinav.github.io`) instead of a
   subpath.

2. **Upload the files**
   On the repo page, click **Add file → Upload files**, drag in
   `index.html`, `style.css`, and `script.js`, then commit.

   *(Or via git, if you have it installed locally:)*
   ```bash
   git init
   git add index.html style.css script.js
   git commit -m "Add portfolio site"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
   git push -u origin main
   ```

3. **Turn on Pages**
   In the repo, go to **Settings → Pages**. Under "Build and
   deployment," set **Source** to `Deploy from a branch`, branch
   `main`, folder `/ (root)`. Click **Save**.

4. **Visit your site**
   GitHub will show a URL like:
   `https://YOUR-USERNAME.github.io/YOUR-REPO/`
   It usually goes live within a minute or two of the first deploy.

5. **Optional: custom domain**
   If you own a domain, add it under **Settings → Pages → Custom
   domain**, then point your domain's DNS to GitHub's Pages servers
   (GitHub shows the exact records to add once you enter the domain).

## Notes
- The site is fully responsive and respects `prefers-reduced-motion`.
- Update the LinkedIn URL in `index.html` (currently a placeholder
  guess: `linkedin.com/in/abhinavanambiar`) to your real profile link.
