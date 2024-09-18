/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './client/**/*.tsx'],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#cb2f43',

          secondary: '#57534e',

          accent: '#e2625e',

          neutral: '#D8C3A5',

          'base-100': '#EBE9E1',

          info: '#8E8D8A',

          success: '#d9f99d',

          warning: '#fde047',

          error: '#881337',
          'base-content': '#cb2f43',
          'primary-content': '#ffff',
          'secondary-content': '#ffff',
          'accent-content': '#ffff',
          'neutral-content': '#ffff',
          'info-content': '#ffff',
          'success-content': '#ffff',
          'warning-content': '#ffff',

          'error-content': '#ffff',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
}
