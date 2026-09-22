/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: '#070810',
          950: '#05060c',
          900: '#0a0b16',
          800: '#0f111f',
          700: '#161827',
          600: '#1e2132',
        },
        accent: {
          DEFAULT: '#6d8dff',
          300: '#a8baff',
          400: '#8aa2ff',
          500: '#6d8dff',
          600: '#4f6ef2',
          700: '#3b55d8',
        },
        violet: {
          DEFAULT: '#8b7bff',
          400: '#9f91ff',
          500: '#8b7bff',
          600: '#6f5ff0',
        },
        ink: {
          DEFAULT: '#e7e9f5',
          muted: '#9aa1bd',
          faint: '#6b7290',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(109, 141, 255, 0.25), 0 8px 32px -8px rgba(109, 141, 255, 0.35)',
        card: '0 1px 0 0 rgba(255,255,255,0.03) inset, 0 12px 40px -12px rgba(0,0,0,0.6)',
        lift: '0 20px 48px -16px rgba(0,0,0,0.7)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}