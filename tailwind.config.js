/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './lib/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        headline: ['var(--font-headline)', 'Space Grotesk', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        label: ['var(--font-headline)', 'Space Grotesk', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      colors: {
        primary: '#ff7cf5',
        'primary-dim': '#ff51fa',
        'on-surface': '#ffffff',
        'surface-dim': '#0e0e0e',
        'surface-container': '#1a1919',
        'surface-container-highest': '#262626',
        'outline-variant': '#484847',
        'neon-pink': '#FF00FF',
        'neon-cyan': '#00F0FF',
        'neon-purple': '#BC13FE',
        'neon-green': '#39FF14',
        'neon-orange': '#FF8C00',
        'neon-yellow': '#FFFF33',
        'neon-red': '#FF3131',
        'neon-blue': '#0096FF',
        'neon-gold': '#FFD700',
        'neon-amber': '#FFBF00'
      }
    }
  },
  plugins: []
};
