/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './public/index.html'
  ],
  theme: {
    extend: {
      // 配置宽度
      maxWidth: {
        '140': '35rem',
        '142': '35.5rem',
      },
      borderWidth: {
        '1': '1px',
      },
      fontSize: {
        '12': '12px',
        '16': '16px',
      }
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
}

