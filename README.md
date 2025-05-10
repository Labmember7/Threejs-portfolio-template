# Interactive 3D Portfolio Template

An immersive and modern portfolio template built with Three.js, featuring interactive 3D animations, smooth scrolling effects, and responsive design. This template creates an engaging user experience by combining beautiful 3D space scenes with traditional portfolio elements.

Note : This is just a template I created to try out ThreeJS so it's very minimalistic and simple :)
## ✨ Features

- **Interactive 3D Space Environment**
  - Dynamic planet models with realistic textures
  - Animated celestial bodies (Earth, Moon, Sun)
  - Particle systems for stars and nebulae
  - Environment mapping for realistic reflections

- **Smooth Scrolling Animations**
  - Scroll-based camera movements
  - Parallax effects
  - Seamless transitions between sections

- **Responsive Design**
  - Mobile-friendly layout
  - Adaptive 3D rendering
  - Optimized performance across devices

- **Modern UI Components**
  - Project cards with hover effects
  - Timeline visualization
  - Custom CSS animations
  - SVG icons and graphics

## 🚀 Technologies Used

- [Three.js](https://threejs.org/) - 3D graphics library
- [Vite](https://vitejs.dev/) - Next generation frontend tooling
- SCSS - Advanced CSS preprocessing
- Modern JavaScript (ES6+)

## 🛠️ Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
public/
├── assets/
│   ├── css/          # Compiled CSS and SCSS files
│   ├── img/          # 3D textures and images
│   └── svg/          # Vector graphics
└── index.html        # Entry HTML file

src/
├── index.html        # Development HTML
└── main.js          # Main JavaScript entry point
```

## 🎨 Customization

### Textures
- Replace textures in `public/assets/img/` with your own
- Supported formats: jpg, png
- Recommended sizes: 2k resolution for planets, 4k for environment maps

### Colors and Styles
- Modify SCSS variables in the respective `.scss` files
- Customize card designs in `cards.scss`
- Adjust timeline styling in `timeline.scss`

### 3D Scene
- Modify camera positions and animations in `main.js`
- Add or remove 3D objects to customize the space environment
- Adjust lighting and environmental effects

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Three.js community for incredible documentation and examples
- Space textures from [Solar System Scope](https://www.solarsystemscope.com/textures/)
- Inspiration from various portfolio designs on [Awwwards](https://www.awwwards.com/)