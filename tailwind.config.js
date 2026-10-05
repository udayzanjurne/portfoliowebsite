/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        aws: {
          orange: '#FF9900',
          amber: '#FFA41C',
          dark: '#CC7A00',
          glow: 'rgba(255, 153, 0, 0.15)',
        },
        cloud: {
          bg: '#070A12',
          surface: '#0D1322',
          card: '#121A2F',
          cardHover: '#16223D',
          border: '#1F2D4A',
          borderHover: '#2E416B',
          cyan: '#00B4D8',
          sky: '#38BDF8',
          blue: '#3B82F6',
          indigo: '#6366F1',
          emerald: '#10B981',
          slate: '#94A3B8',
          muted: '#64748B',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern': "radial-gradient(rgba(255, 255, 255, 0.07) 1px, transparent 1px)",
        'mesh-glow': "radial-gradient(circle at 50% 0%, rgba(255, 153, 0, 0.08) 0%, rgba(56, 189, 248, 0.05) 50%, transparent 80%)",
      },
      boxShadow: {
        'aws-glow': '0 0 25px -5px rgba(255, 153, 0, 0.25)',
        'cyan-glow': '0 0 25px -5px rgba(0, 180, 216, 0.25)',
        'card-glow': '0 10px 30px -10px rgba(0, 0, 0, 0.5), 0 0 1px 1px rgba(255, 255, 255, 0.05)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
    },
  },
  plugins: [],
}
