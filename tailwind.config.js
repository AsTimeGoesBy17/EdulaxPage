module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
      require('daisyui'),
      require('@tailwindcss/typography')
  ],

  daisyui: {
    themes: [
      {
        'light': {
          "primary": '#111111',
          "primary-content": '#223232',
          "primary-focus": '#432332',

          "secondary": '#111111',
          "secondary-content": '#223232',
          "secondary-focus": '#432332',

          "neutral": '#ffffff',
          "neutral-content": "#123123",

          "base-100": "#ffffff",
          "base-200": "#eeeeee",
          "base-300": "#dddddd",

          "info": "#123123",
          "success": "#00ff00",
          "warning": "#ff00ff",
          "error": "#ff0000"
        },
        "dark": {
          "primary": '#111111',
          "primary-content": '#223232',
          "primary-focus": '#432332',

          "secondary": '#111111',
          "secondary-content": '#223232',
          "secondary-focus": '#432332',

          "neutral": '#ffffff',
          "neutral-content": "#123123",

          "base-100": "#ffffff",
          "base-200": "#eeeeee",
          "base-300": "#dddddd",

          "info": "#123123",
          "success": "#00ff00",
          "warning": "#ff00ff",
          "error": "#ff0000"
        }
        
      }
    ]
  }
}
