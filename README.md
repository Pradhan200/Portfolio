# Portfolio Website

A modern, responsive portfolio website built with React, featuring a dark theme with interactive elements and smooth animations.

## Features

- **Modern Design**: Dark theme with gradient accents and glass morphism effects
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile devices
- **Interactive Elements**: 
  - Tech stack explorer with animated search
  - Project carousel with navigation
  - Smooth scrolling navigation
  - Animated background patterns
- **Sections**:
  - Hero section with introduction
  - About me with skills and information
  - Experience timeline
  - Featured projects showcase
  - Contact form and social links

## Tech Stack

- **Frontend**: React 18
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Build Tools**: Create React App

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project Structure

```
src/
├── components/
│   ├── Header.js
│   ├── Hero.js
│   ├── About.js
│   ├── Experience.js
│   ├── Projects.js
│   ├── Contact.js
│   └── TechStackExplorer.js
├── App.js
├── index.js
└── index.css
```

## Customization

### Personal Information
Update the following files to customize with your information:

- `src/components/Hero.js` - Update name and title
- `src/components/About.js` - Update about text and skills
- `src/components/Experience.js` - Update work experience
- `src/components/Projects.js` - Update project details
- `src/components/Contact.js` - Update contact information

### Styling
- Modify `tailwind.config.js` to customize colors and animations
- Update `src/index.css` for custom styles

### Tech Stack
Update the tech stack in `src/components/TechStackExplorer.js`

## Deployment

Build the project:
```bash
npm run build
```

Deploy the `build` folder to your hosting service.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).
