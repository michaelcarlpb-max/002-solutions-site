import typography from '@tailwindcss/typography';

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
      typography: ({ theme }) => ({
        invert: {
          css: {
            '--tw-prose-body': theme('colors.fog'),
            '--tw-prose-headings': '#ffffff',
            '--tw-prose-lead': theme('colors.fog'),
            '--tw-prose-links': theme('colors.brand-yellow'),
            '--tw-prose-bold': '#ffffff',
            '--tw-prose-counters': theme('colors.fog-2'),
            '--tw-prose-bullets': theme('colors.fog-2'),
            '--tw-prose-hr': 'rgba(255,255,255,0.08)',
            '--tw-prose-quotes': theme('colors.fog'),
            '--tw-prose-quote-borders': theme('colors.brand-yellow'),
            '--tw-prose-captions': theme('colors.fog-2'),
            '--tw-prose-code': '#ffffff',
            '--tw-prose-pre-code': theme('colors.fog'),
            '--tw-prose-pre-bg': theme('colors.ink-2'),
            '--tw-prose-th-borders': 'rgba(255,255,255,0.15)',
            '--tw-prose-td-borders': 'rgba(255,255,255,0.08)',
            a: {
              textDecoration: 'none',
              fontWeight: '500',
              transition: 'opacity 0.15s',
              '&:hover': { textDecoration: 'underline' },
            },
            'h1, h2, h3, h4': {
              fontFamily: theme('fontFamily.display').join(','),
              letterSpacing: '-0.01em',
            },
            'code::before': { content: '""' },
            'code::after': { content: '""' },
            code: {
              fontFamily: theme('fontFamily.mono').join(','),
              fontWeight: '500',
              backgroundColor: 'rgba(255,255,255,0.06)',
              padding: '0.15em 0.4em',
              borderRadius: '0.25rem',
              fontSize: '0.9em',
            },
            pre: {
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '0.5rem',
            },
            blockquote: {
              fontStyle: 'normal',
              fontWeight: '400',
              borderLeftWidth: '2px',
            },
            hr: { borderTopWidth: '1px' },
          },
        },
      }),
    },
  },
  plugins: [typography],
};
