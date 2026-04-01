# Data Analyst Portfolio Website

A modern, interactive, and fully responsive portfolio website for data analysts. Built with vanilla HTML, CSS, and JavaScript - no frameworks required.

## 🌟 Features

- **Fully Responsive Design** - Works seamlessly on mobile, tablet, and desktop
- **Dark/Light Mode** - Toggle between themes with persistent storage
- **Smooth Animations** - Fluid transitions and engaging interactions
- **Mobile Menu** - Hamburger menu for smaller screens
- **Interactive Skills Section** - Animated progress bars
- **Project Gallery** - Showcase your best work
- **Contact Form** - Functional contact form with validation
- **SEO Optimized** - Semantic HTML and meta tags
- **Accessibility** - WCAG compliant with keyboard navigation
- **Performance** - Optimized for fast loading

## 📁 Project Structure

```
dataporto/
├── index.html          # Main HTML file with all sections
├── styles.css          # Complete CSS styling
├── script.js           # JavaScript for interactivity
├── assets/             # Folder for images and media (optional)
└── README.md           # Project documentation
```

## 🚀 Quick Start

1. **Open in Browser**
   - Simply open `index.html` in your web browser
   - No build process or dependencies required

2. **Customize Content**
   - Edit your name, email, and social links in `index.html`
   - Update project descriptions and skills
   - Add your own images to the `assets/` folder

3. **Customize Colors**
   - Edit CSS variables in `styles.css` (lines 1-17)
   - Change primary color: `--primary-color`
   - Change secondary color: `--secondary-color`

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px to 1199px
- **Mobile**: 480px to 767px
- **Small Mobile**: Below 480px

## 🎨 Customization Guide

### Edit Contact Information
In `index.html`, update the contact section:
```html
<p>Email: <a href="mailto:your.email@example.com">your.email@example.com</a></p>
<p>Phone: <a href="tel:+1234567890">+1 (234) 567-890</a></p>
<p>Location: Your City, Country</p>
```

### Add Your Projects
Add new project cards in the projects section:
```html
<div class="project-card">
    <!-- Your project content -->
</div>
```

### Update Skills
Modify skill items in the skills section. Change the percentage by adjusting the `width` style:
```html
<div class="skill-progress" style="width: 95%"></div>
```

### Customize Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --primary-color: #6366f1;  /* Change this */
    --secondary-color: #8b5cf6; /* And this */
    /* ... other colors */
}
```

## 🎯 Sections

### 1. Navigation Bar
- Sticky navbar with smooth scrolling
- Theme toggle (dark/light mode)
- Mobile-responsive hamburger menu

### 2. Hero Section
- Eye-catching introduction
- Animated chart illustration
- Call-to-action buttons

### 3. About Section
- Personal introduction
- Statistics cards
- Key achievements

### 4. Skills Section
- Technical skills with progress bars
- Organized by categories:
  - Programming Languages
  - Data Visualization
  - Databases
  - Tools & Platforms

### 5. Projects Section
- Project grid with hover effects
- Project descriptions and tags
- Links to project details

### 6. Services Section
- Six service offerings
- Icon and description for each
- Hover animations

### 7. Contact Section
- Contact form with validation
- Contact information
- Social media links

### 8. Footer
- Copyright information
- Animated heart icon

## 🔧 JavaScript Features

### Theme Toggle
- Dark/Light mode with localStorage persistence
- Smooth transitions between themes

### Mobile Menu
- Hamburger menu that opens/closes
- Auto-closes when navigating
- Keyboard support (ESC to close)

### Form Validation
- Email validation
- Required field checking
- Success/error messaging

### Scroll Animations
- Fade-in animations for elements
- Progress bar animations on scroll
- Active navigation link highlighting

### Intersection Observer
- Efficient scroll detection
- Element animations trigger on view
- Performance optimized

## 📊 How to Add Projects

1. Open `index.html`
2. Find the `<!-- Project X -->` section
3. Duplicate an existing project card
4. Update the content:
   - Title
   - Description
   - Tags
   - Links

Example:
```html
<div class="project-card">
    <div class="project-image">
        <div class="placeholder-image">📊</div>
    </div>
    <div class="project-content">
        <h3>Your Project Title</h3>
        <p>Your project description here...</p>
        <div class="project-tags">
            <span class="tag">Technology</span>
            <span class="tag">Technology</span>
        </div>
        <a href="#" class="project-link">View Project →</a>
    </div>
</div>
```

## 🌐 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## 🎨 Design Features

### Color Scheme
- **Primary**: Indigo (#6366f1)
- **Secondary**: Purple (#8b5cf6)
- **Accent**: Pink (#ec4899)
- **Success**: Green (#10b981)
- **Dark Background**: Dark slate (#0f172a)

### Typography
- Sans-serif font family for modern look
- Responsive font sizes
- Excellent readability on all devices

### Animations
- Smooth transitions for all interactive elements
- Hover effects on buttons and cards
- Fade-in animations for sections
- Progress bar animations
- Heartbeat animation in footer

## 📝 Best Practices Implemented

- ✅ Semantic HTML
- ✅ Mobile-first responsive design
- ✅ CSS custom properties (variables)
- ✅ Accessible color contrasts
- ✅ Keyboard navigation support
- ✅ Form validation
- ✅ Performance optimization
- ✅ Progressive enhancement
- ✅ Cross-browser compatibility

## 🚀 Deployment

### Deploy to GitHub Pages
1. Create a GitHub repository
2. Push all files to the repository
3. Go to Settings → Pages
4. Select "Deploy from a branch"
5. Choose the main branch
6. Your site will be live at `username.github.io/dataporto`

### Deploy to Netlify
1. Visit [netlify.com](https://netlify.com)
2. Drag and drop your folder
3. Or connect your GitHub repository
4. Your site will be live instantly

### Deploy to Vercel
1. Visit [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Click Deploy
4. Your site will be live with custom domain

## 🔒 Form Submission

The contact form currently shows a success message. To actually send emails, you'll need to:

1. **Use Formspree.io** (recommended for beginners)
   - Add this to the form tag: `action="https://formspree.io/f/YOUR_FORM_ID"`

2. **Use EmailJS** (JavaScript solution)
   - Include EmailJS library
   - Update the form submission code

3. **Use a backend service**
   - Create a simple backend to handle emails
   - Update form submission to POST to your backend

## 📱 Mobile Optimization Tips

1. Test on real devices
2. Use Chrome DevTools for responsive testing
3. Ensure touch targets are at least 48px
4. Test form input on mobile keyboards
5. Verify image sizes are optimized

## 🐛 Troubleshooting

### Dark mode not working
- Check browser's localStorage is enabled
- Clear browser cache and reload

### Form not submitting
- Check browser console for errors
- Ensure all form fields have names
- Verify email validation regex

### Mobile menu not closing
- Check JavaScript is enabled
- Verify hamburger button is visible on mobile
- Clear browser cache

## 📚 Resources

- [MDN Web Docs](https://developer.mozilla.org)
- [CSS Tricks](https://css-tricks.com)
- [Can I Use](https://caniuse.com)
- [Web Accessibility](https://www.w3.org/WAI/)

## 📄 License

This project is free to use and modify. Feel free to use it as your own portfolio.

## 👨‍💻 Contributing

Feel free to fork, modify, and use this template for your own portfolio!

## 📞 Support

If you have questions or issues:
1. Check the troubleshooting section
2. Review the code comments
3. Test in different browsers
4. Check browser console for errors

---

**Happy coding! 🚀**

Made with ❤️ for data analysts everywhere.
#   p u t r i f o l i o  
 