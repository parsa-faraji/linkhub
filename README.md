<div align="center">

![Header](https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=26,27,29&height=200&section=header&text=LinkHub&fontSize=50&fontAlignY=35&desc=Beautiful%20Link-in-Bio%20Pages&descAlignY=55&animation=twinkling)



A beautiful, customizable link-in-bio page. Self-hosted alternative to Linktree.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-blue?style=for-the-badge&logo=github)](https://parsa-faraji.github.io/linkhub)
[![Status](https://img.shields.io/badge/Status-Live-brightgreen?style=for-the-badge)](https://parsa-faraji.github.io/linkhub)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)

### Themes Preview

| Default | Dark | Ocean |
|:-------:|:----:|:-----:|
| Purple gradient | Cyan accents | Blue professional |

**[Try It](https://parsa-faraji.github.io/linkhub)** | **[View All Themes](#themes)**

</div>

---

## Features

- **6 Beautiful Themes** - Default, Dark, Minimal, Ocean, Sunset, Forest
- **Easy Configuration** - Just edit `config.js`
- **Social Icons** - GitHub, LinkedIn, Twitter, Instagram, YouTube, Email
- **Smooth Animations** - Elegant hover effects and transitions
- **Mobile Responsive** - Looks great on all devices
- **Self-Hosted** - Own your links, no third-party tracking
- **SEO Friendly** - Clean HTML structure
- **Zero Dependencies** - Pure HTML, CSS, JavaScript

## Quick Start

1. **Clone the repo**
   ```bash
   git clone https://github.com/parsa-faraji/linkhub.git
   ```

2. **Edit `config.js`** with your info:
   ```javascript
   const CONFIG = {
       theme: "dark",  // or "default", "minimal", "ocean", "sunset", "forest"
       profile: {
           name: "Your Name",
           bio: "Your bio here",
           avatar: "https://your-avatar-url.com/image.jpg"
       },
       socials: [...],
       links: [...]
   };
   ```

3. **Deploy** to GitHub Pages, Netlify, or any static host

## Themes

| Theme | Description |
|-------|-------------|
| `default` | Purple gradient with white cards |
| `dark` | Dark mode with cyan accents |
| `minimal` | Clean white background |
| `ocean` | Blue gradient, professional |
| `sunset` | Pink to purple gradient |
| `forest` | Green nature-inspired |

## Customization

### Adding Links
```javascript
links: [
    {
        title: "My Website",
        url: "https://example.com",
        icon: "🌐"  // Emoji or leave empty
    }
]
```

### Adding Social Icons
Supported: `github`, `linkedin`, `twitter`, `instagram`, `youtube`, `email`, `website`

```javascript
socials: [
    { platform: "github", url: "https://github.com/username" }
]
```

## Deploy to GitHub Pages

1. Go to repo Settings → Pages
2. Set source to `main` branch
3. Your site will be at `https://username.github.io/linkhub`

## Tech Stack

- Vanilla JavaScript (no frameworks)
- CSS3 with CSS Variables for theming
- Google Fonts (Inter)

## Why LinkHub?

- **Free** - No monthly fees
- **No Tracking** - Unlike Linktree, your visitors aren't tracked
- **Customizable** - Full control over design
- **Fast** - Static site, loads instantly

## Author

Built by [Parsa Faraji Alamouti](https://github.com/parsa-faraji)

## License

MIT License - Use it however you want!
