/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */
const config = {
  mode: "jit",
  purge: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    colors: {
      gray: {
        DEFAULT: "#cccccc",
        dark: "#333340",
      },
      green: {
        light: "#00cc00",
        DEFAULT: "#009900",
      },
      blue: {
        darker: "#10101a",
        darkest: "#0f0f23",
      },
      yellow: {
        DEFAULT: "#ffff66",
      },
      red: {
        DEFAULT: "#ff005c",
      },
    },
    fontFamily: {
      sans: ['Source Code Pro', 'Helvetica', 'Arial', 'sans-serif'],
    },
    extend: {},
  },

  plugins: [],
};

module.exports = config;
