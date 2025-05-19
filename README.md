# 🧠 Questionnaire Application

A modern, step-by-step questionnaire application built with **Next.js** and **TypeScript**, featuring responsive design, component-driven architecture, and customizable themes.

---

## 🚀 Features

- ⚡️ Modern and responsive UI with MUI
- 🔐 Type-safe development with TypeScript
- 🧠 Zustand for global state management
- 🎨 Theme customization (colors, typography, layout)
- 🧩 Component-based, modular architecture
- 🌐 Built with the Next.js App Router

---

## 📋 Prerequisites

Ensure the following tools are installed before starting:

- **Node.js** (v18 or higher)
- **npm** or **Yarn**

---

## 🛠️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```
### 2. Install dependencies

```bash
npm install
# or
yarn install
```
### 3. Start the development server

```bash
npm run dev
# or
yarn dev
```

## 🗂 Project Structure

```bash
src/
├── app/             # Next.js app router 
├── components/      # Reusable UI components
├── constants/       # Static data (e.g., questions)
├── providers/       # Context and global providers
├── store/           # Zustand store for global state
├── theme/           # Theme configuration for MUI
├── types/           # Global TypeScript definitions
└── utils/           # Helper and utility functions
```

## ⚙️ Configuration Files
```md
| File                           | Purpose                      |
| ------------------------------ | ---------------------------- |
| `next.config.ts`               | Next.js configuration        |
| `tsconfig.json`                | TypeScript compiler settings |
| `eslint.config.mjs`            | ESLint rules and formatting  |
```

## 🎨 Customization

### 🎨 Theming

Modify `src/theme/` to customize:

- Primary and secondary colors  
- Typography and spacing  
- Component overrides  

**Example:**

```ts
// src/theme/theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#9c27b0',
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
    fontSize: 14,
  },
});

export default theme;
```

## 📦 Available Scripts

| Script               | Description                 |
| -------------------- | --------------------------- |
| `npm run dev`        | Start development server    |
| `npm run build`      | Build for production        |
| `npm run start`      | Start production server     |
| `npm run lint`       | Run ESLint for code quality |
| `npm run type-check` | Run TypeScript type checker |

## 👤 Author

**Mohammad Javad Kohankan**  
🔗 [GitHub](https://github.com/mjkohan)  



