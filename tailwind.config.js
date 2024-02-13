module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}', './docs/**/*.{md,mdx}'],
  dark: 'class',
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter'],
        'fira-code': ["'Fira Code'"],
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
