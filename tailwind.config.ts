import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      height: {
        header: '4rem',
      },
      colors: {
        header: 'rgb(var(--header-background-color))',
        primary: 'rgb(var(--primary-color))',
        primaryText: 'rgb(var(--primary-text-color))',
        accent: 'rgb(var(--accent-color))',
        accentText: 'rgb(var(--accent-text-color))',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
export default config;
