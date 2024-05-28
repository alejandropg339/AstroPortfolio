/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin.js';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'radial-gradient':
          'linear-gradient(to right bottom, #364358, #3c4b63, #42536f, #485c7b, #4e6487)',
        'orange-gradient': 'radial-gradient(#fe7a0da2 20%, #198ba455 100%)',
        'bottom-gradient':
          'radial-gradient(at center bottom, #7C7BCA4D, #FFFFFF00)',
        'button-gradient':
          'linear-gradient(to right bottom, #f06c09, #e8622c, #dc5c3e, #cd584c, #bc5656)',
        'card-gradient':
          'linear-gradient(rgba(255, 255, 255, 0.015) 0%, rgba(255, 255, 255, 0.05) 100%)',
        'carousel-gradient':
          'linear-gradient(to right, rgba(18, 18, 18, 1) 0%, rgba(18, 18, 18, 0) 100%)',
      },
      keyframes: {
        animatedgradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        infiniteSlider: {
          '0%': { transform: 'translateX(0)' },
          '100%': {
            transform: 'translateX(calc(-250px * 8.2))',
          },
        },
        meteor: {
          '0%': { transform: 'rotate(215deg) translateX(0)', opacity: 1 },
          '70%': { opacity: 1 },
          '100%': {
            transform: 'rotate(215deg) translateX(-500px)',
            opacity: 0,
          },
        },
      },
      backgroundSize: {
        '300%': '300%',
      },
      animation: {
        gradient: 'animatedgradient 6s ease infinite alternate',
        ['infinite-slider']: 'infiniteSlider 30s linear infinite',
        'meteor-effect': 'meteor 5s linear infinite',
      },
    },
  },
  plugins: [
    plugin(({ addUtilities, theme }) => {
      const neonUtilities = {};
      const colors = theme('colors');
      for (const color in colors) {
        if (typeof colors[color] === 'object') {
          const color1 = colors[color]['600'];
          const color2 = colors[color]['700'];
          neonUtilities[`.neon-${color}`] = {
            boxShadow: `0 1px 1px ${color1}, 0 20px 20px ${color2}`,
          };
        }
      }
      addUtilities(neonUtilities);
    }),

    plugin(({ addUtilities, theme }) => {
      const neonUtilities = {};
      const colors = theme('colors');
      for (const color in colors) {
        if (typeof colors[color] === 'object') {
          const color1 = colors[color]['500'];
          const color2 = colors[color]['700'];
          neonUtilities[`.neon-smooth-${color}`] = {
            boxShadow: `0 1px 5px ${color1}, 0 4px 10px ${color2}`,
          };
        }
      }
      addUtilities(neonUtilities);
    }),
  ],
};
