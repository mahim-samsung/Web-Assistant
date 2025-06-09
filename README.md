# Web Assistant Chrome Extension

A Chromium extension that provides AI-powered assistance for web browsing developed by Ontology Studio - Samsung Research.

## Installation

### Method 1: Direct Installation from Build

1. Download or clone this repository:

```bash
git clone https://github.com/mahim-samsung/Web-Assistant.git
```

2. Open Chrome/Chromium browser
3. Go to `chrome://extensions/`
4. Enable "Developer mode" (toggle in the top right corner)
5. Click "Load unpacked"
6. Navigate to and select the `build/chrome-mv3-prod` folder from the downloaded repository

### Method 2: Build from Source

1. Clone the repository:

```bash
git clone https://github.com/mahim-samsung/Web-Assistant.git
cd Web-Assistant
```

2. Install dependencies:

```bash
npm install
# or
pnpm install
```

3. Build the extension:

```bash
npm run build
# or
pnpm build
```

## Requirements

- Chromium browser
