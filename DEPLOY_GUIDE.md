# Quick Deploy Guide for Tea Time with Monique ☕

## Option 1: Drag & Drop (Fastest)

1. Open Netlify.com and sign in
2. Go to "Sites" tab
3. Open the project folder in Finder
4. Drag the entire `monique-mind-blowers-v3` folder to Netlify's drop zone
5. Your tea house is open! ☕

## Option 2: GitHub + Netlify (Recommended)

1. **Create GitHub repo:**
   ```bash
   cd monique-mind-blowers-v3
   git init
   git add .
   git commit -m "Initial commit - Tea Time with Monique ☕"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Connect to Netlify:**
   - Go to Netlify > New site from Git
   - Choose GitHub
   - Select your repository
   - Deploy settings: Leave all defaults
   - Click "Deploy site"

## Testing Your Tea Service

1. Visit your Netlify URL
2. Click the test button (🧪) in floating menu - should show tea-themed modal
3. Click on any topic card - should load content with tea styling
4. Watch the floating tea leaves animation
5. Check browser console for any errors

## Troubleshooting

If topics don't brew properly:
- Check: YOUR_SITE_URL/topics.json (should show tea menu)
- Check: YOUR_SITE_URL/topics/politics/big-beautiful-bill-2025.html (should show content)
- Verify all files were included in deployment

## Success! 🫖

Your tea house should now be serving:
- Elegant tea-themed design
- Floating tea leaves animation
- Working modal system
- All topics brewing perfectly

## Custom Domain

Want teatimewithmonique.com? 
1. Buy domain from Namecheap/GoDaddy
2. In Netlify: Domain settings > Add custom domain
3. Follow DNS setup instructions

Enjoy serving hot topics with style! ☕✨
