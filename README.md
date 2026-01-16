<div align="center">

# PCSO 2D Lotto Generator

**Mobile-first web app for generating PCSO 2D lotto combinations with intelligent buffer system**

[![License](https://img.shields.io/github/license/warengonzaga/pcso-2d-lotto-generator)](https://github.com/warengonzaga/pcso-2d-lotto-generator/blob/main/LICENSE)
[![GitHub Stars](https://img.shields.io/github/stars/warengonzaga/pcso-2d-lotto-generator)](https://github.com/warengonzaga/pcso-2d-lotto-generator/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/warengonzaga/pcso-2d-lotto-generator)](https://github.com/warengonzaga/pcso-2d-lotto-generator/network/members)

[🚀 Live Demo](https://warengonzaga.github.io/pcso-2d-lotto-generator) • [📖 Documentation](./AGENTS.md) • [🐛 Report Bug](https://github.com/warengonzaga/pcso-2d-lotto-generator/issues) • [✨ Request Feature](https://github.com/warengonzaga/pcso-2d-lotto-generator/issues)

</div>

---

## 📋 Table of Contents

- [Features](#-features)
- [Quick Start](#-quick-start)
- [How It Works](#-how-it-works)
- [Usage Guide](#-usage-guide)
- [Tech Stack](#-tech-stack)
- [Contributing](#-contributing)
- [License](#-license)
- [Support](#-support)

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🎯 **PCSO 2D Range** | Official Philippine lotto numbers (0-31) |
| 🔢 **Smart Buffer System** | Generate ±1 or ±2 number variations automatically |
| 🎲 **Rambolito Mode** | Position-independent winning (7-26 = 26-7) |
| 💰 **Live Cost Tracker** | Real-time bet calculation (₱20/combo) |
| ➕ **Unlimited Combos** | Add as many combinations as you need |
| 📋 **Export Tools** | Copy to clipboard or download as .txt |
| 📱 **Mobile-First UI** | Responsive design with dark mode theme |
| ⚡ **Client-Side Only** | No backend needed, runs in your browser |

## 🚀 Quick Start

### 🌐 Online Access

**👉 [Launch App](https://warengonzaga.github.io/pcso-2d-lotto-generator)**

No installation needed! Use it directly in your browser.

### 💻 Local Development

```bash
# Clone repository
git clone https://github.com/warengonzaga/pcso-2d-lotto-generator.git
cd pcso-2d-lotto-generator

# Install dependencies
npm install

# Start development server
npm start

# Open browser at http://localhost:3000
```

## 🧠 How It Works

### Buffer System Logic

The buffer generates nearby number variations:

| Buffer | Output Example (for number 15) |
|--------|-------------------------------|
| **0** | `15` (exact only) |
| **1** | `14, 15, 16` (±1 variation) |
| **2** | `13, 14, 15, 16, 17` (±2 variations) |

### Rambolito Mode Behavior

| Rambolito | Buffer | Result |
|-----------|--------|--------|
| ✅ Enabled | Any | Position-independent (7-26 = 26-7) |
| ❌ Disabled | 0 | Exact position only (7-26 ≠ 26-7) |
| ❌ Disabled | ≥1 | Generates both positions + buffered variations |

### Output Format

```
07 26 20 R
│  │  │  └─ Rambolito flag (if enabled)
│  │  └──── Bet amount (₱20)
│  └─────── Second number
└────────── First number
```

## 📱 Usage Guide

1. **Enter Numbers** - Input your two lucky numbers (0-31)
2. **Set Bet Amount** - Configure cost per combination (default: ₱20)
3. **Choose Buffer** - Select 0, 1, or 2 for variation range
4. **Toggle Rambolito** - Enable/disable position-independent mode
5. **Add More** - Click "Add Combination" for additional sets
6. **Generate** - Hit "Generate Numbers" to create combinations
7. **Export** - Copy to clipboard or download as text file

**💡 Pro Tip:** Use Buffer 1-2 with Rambolito disabled to maximize coverage while managing costs.

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | Vanilla JavaScript, HTML5, CSS3 |
| **Backend** | Node.js + Express |
| **Styling** | Dark mode with neon purple aesthetic |
| **Hosting** | GitHub Pages (static) |
| **Philosophy** | No frameworks, pure web fundamentals |

<details>
<summary>📂 Project Structure</summary>

```
pcso-2d-lotto-generator/
├── public/
│   ├── css/
│   │   └── style.css          # Dark theme styles
│   ├── js/
│   │   ├── generator.js       # Core buffer logic
│   │   └── app.js             # UI interactions
│   └── index.html             # Main HTML
├── server.js                  # Express server
├── AGENTS.md                  # AI agent instructions
└── package.json
```
</details>

## 🤝 Contributing

Contributions are welcome! This project follows the **[Clean Commit Convention](https://github.com/wgtechlabs/clean-commit)** by @wgtechlabs.

### Commit Types

| Emoji | Type | Example |
|-------|------|---------|
| 📦 | `new` | `📦 new: add export to CSV feature` |
| 🔧 | `update` | `🔧 update: improve buffer calculation` |
| 🗑️ | `remove` | `🗑️ remove: unused lodash dependency` |
| 🔒 | `security` | `🔒 security: patch XSS vulnerability` |
| 🧪 | `test` | `🧪 test: add buffer edge cases` |
| 📖 | `docs` | `📖 docs: update readme examples` |

See [AGENTS.md](./AGENTS.md) for complete guidelines and all 9 commit types.

### Workflow

```bash
# 1. Fork and clone
git clone https://github.com/YOUR_USERNAME/pcso-2d-lotto-generator.git

# 2. Create feature branch
git checkout -b feature/amazing-feature

# 3. Make changes and commit
git commit -m '📦 new: add amazing feature'

# 4. Push and create PR
git push origin feature/amazing-feature
```

**Before submitting:**
- ✅ Test on mobile (375px width minimum)
- ✅ Verify buffer logic with edge cases
- ✅ Check cost calculations
- ✅ Follow clean-commit convention

## 📄 License

GNU General Public License v3.0 - see [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Waren Gonzaga**
- 🌐 Website: [warengonzaga.com](https://warengonzaga.com)
- 💼 GitHub: [@warengonzaga](https://github.com/warengonzaga)

## ⚠️ Disclaimer

This tool is for **entertainment and convenience purposes only**. Please play responsibly.

- The author is not responsible for any losses incurred from using this application
- Gambling can be addictive - seek help if needed
- This is not affiliated with or endorsed by PCSO

## 💖 Support

If you find this project helpful:

- ⭐ Star this repository
- 🔄 Share with fellow lotto players
- 🐛 [Report issues](https://github.com/warengonzaga/pcso-2d-lotto-generator/issues)
- 💡 [Suggest features](https://github.com/warengonzaga/pcso-2d-lotto-generator/issues)
- 🤝 Contribute improvements

---

<div align="center">

**Made with ❤️ for Filipino lotto players**

[⬆ Back to Top](#pcso-2d-lotto-generator)

</div>
