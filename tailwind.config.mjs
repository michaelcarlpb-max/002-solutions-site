/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'brand-blue': '#1B4B8F',
        'brand-green': '#3A8A3E',
        'brand-yellow': '#F5C518',
        ink: '#0A0E1A',
        'ink-2': '#111827',
        fog: '#E5E7EB',
        'fog-2': '#9CA3AF',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #3A8A3E 0%, #F5C518 100%)',
      },
      animation: {
        'grid-drift': 'grid-drift 20s linear infinite',
      },
      keyframes: {
        'grid-drift': {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '40px 40px' },
        },
      },
    },
  },
  plugins: [],
};
