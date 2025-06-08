# Tea Time with Monique ☕

An elegant, tea-themed knowledge hub where complex topics are served with style and sophistication. Sip the hottest topics while we spill the most fascinating truths!

## 🫖 Features

- **Tea-Themed Design**: Warm browns, rose golds, and floating tea leaves
- **Elegant Typography**: Georgia serif font for that sophisticated tea house feel
- **Steam Animations**: Rising steam effects for that fresh-brewed ambiance
- **Category Navigation**: Browse topics like a tea menu
- **Search Functionality**: Find your perfect brew
- **Modal Tea Service**: Topics served in beautiful overlay windows
- **View Tracking**: Count how many cups have been served
- **Responsive Design**: Perfect for tea time on any device
- **Dark/Light Mode**: Adjust the ambiance to your preference

## 📁 Project Structure

```
tea-time-with-monique/
├── index.html          # Main tea house
├── topics.json         # Tea menu (topic metadata)
├── css/
│   └── styles.css      # Elegant tea-themed styles
├── js/
│   ├── main.js         # Tea service functionality
│   └── particles.js    # Floating tea leaves animation
└── topics/             # Hot topics to serve
    ├── politics/       # Political tea
    ├── science/        # Scientific brews
    ├── technology/     # Tech infusions
    ├── culture/        # Cultural blends
    ├── health/         # Wellness teas
    └── finance/        # Financial flavors
```

## 🌸 The Tea Experience

- **Warm Color Palette**: Rich tea browns (#d4a574) and rose tea pinks (#f4a0c4)
- **Floating Tea Leaves**: Interactive particles that swirl away from your cursor
- **Elegant Cards**: Each topic presented like a fine tea selection
- **Steam Effects**: Subtle rising steam animations
- **Tea Cup Icons**: Delightful tea-themed iconography throughout

## 🌐 Deployment

### Deploy to Netlify

1. Push to GitHub
2. Connect your GitHub repo to Netlify
3. Deploy with default settings
4. Your tea house is open for business!

### Why This Works

- All paths are relative and simple
- No server dependencies needed
- Static files served directly
- Perfect for Netlify's hosting

## 🍵 Adding New Topics

1. Create the HTML file in the appropriate category:
   ```
   topics/[category]/[topic-name].html
   ```

2. Update `topics.json` with the new blend:
   ```json
   {
     "id": "unique-topic-id",
     "title": "Spicy New Topic",
     "category": "category-name",
     "description": "A delightful blend of...",
     "date": "YYYY-MM-DD",
     "views": 0,
     "readTime": "X min steep time",
     "file": "topics/category/filename.html"
   }
   ```

3. Style with tea-themed HTML

## 🎨 Customization

### Tea Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary: #d4a574;      /* Warm tea brown */
    --secondary: #f4a0c4;    /* Rose tea pink */
    --accent: #8b5a3c;       /* Dark tea */
    --bg-dark: #2b1810;      /* Dark wood */
}
```

### Tea Leaf Animation
Adjust the floating tea leaves in `particles.js`

### Categories
Add new tea categories in `index.html`

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## 🐛 Troubleshooting

### Topics not loading?
1. Check browser console
2. Verify file paths in topics.json
3. Ensure all files are committed
4. Check Netlify logs

### Tea getting cold?
- Verify topic HTML files exist
- Check network tab for 404s
- Ensure proper file structure

## 💕 Credits

Created with love for Monique's sophisticated tea time discussions. Where every topic is served with elegance and a side of sass!

*"Sip the tea, spill the truth!"* ☕✨

