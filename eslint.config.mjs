import nextVitals from 'eslint-config-next/core-web-vitals';

export default [
  ...nextVitals,
  {
    rules: {
      // This project relies on client-side localStorage/sessionStorage hydration patterns.
      'react-hooks/set-state-in-effect': 'off',
      'react-hooks/immutability': 'off',
      'react-hooks/purity': 'off',

      // We intentionally load Material Symbols via <link> and use <img> for the stitch background.
      '@next/next/no-page-custom-font': 'off',
      '@next/next/no-img-element': 'off',

      // Flat config file itself is fine as an anonymous default export.
      'import/no-anonymous-default-export': 'off',
    },
  },
];
