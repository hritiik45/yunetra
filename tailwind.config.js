/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Semantic color system tied to CSS variables
        background: {
          DEFAULT: 'var(--bg-primary)',
          secondary: 'var(--bg-secondary)',
        },
        surface: {
          DEFAULT: 'var(--surface-primary)',
          secondary: 'var(--surface-secondary)',
          tertiary: 'var(--surface-tertiary)',
        },
        foreground: {
          DEFAULT: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          muted: 'var(--text-muted)',
        },
        border: {
          DEFAULT: 'var(--border-default)',
          strong: 'var(--border-strong)',
        },
        accent: {
          DEFAULT: 'var(--accent-primary)',
          hover: 'var(--accent-hover)',
          pressed: 'var(--accent-pressed)',
        },
        ring: {
          DEFAULT: 'var(--focus-ring)',
        },
        // Core brand palette
        brand: {
          obsidian: '#080808',
          champagne: '#F5F1E8',
          gold: '#C6A66B',
          silver: '#BFC4C8',
          graphite: '#252525',
        },
      },
      fontFamily: {
        display: ['Anton', 'var(--font-display)', 'Barlow Condensed', 'sans-serif'],
        sans: ['var(--font-sans)', 'Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        DEFAULT: 'var(--radius-md)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
        full: '9999px',
      },
      boxShadow: {
        sm: 'var(--shadow-sm)',
        DEFAULT: 'var(--shadow-md)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        glow: 'var(--shadow-glow)',
      },
      transitionDuration: {
        fast: 'var(--duration-fast)',
        DEFAULT: 'var(--duration-normal)',
        normal: 'var(--duration-normal)',
        slow: 'var(--duration-slow)',
      },
    },
  },
  plugins: [],
};
