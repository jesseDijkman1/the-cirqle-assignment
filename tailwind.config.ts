const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        blue: "#2125ff",
        "light-grey": "#c7c7c7",
      },
    },
  },
  plugins: [
    plugin(({ addComponents }: any) => {
      addComponents({
        ".section": {
          "@apply flex flex-col p-4 lg:p-10 rounded lg:rounded-xl bg-[#1a1a1a] [&>*:not(:first-child)]:mt-4 [&>*]:border [&>*]:border-[rgba(255,255,255,.2)] [&>*]:p-4 [&>*]:rounded-lg":
            {},
        },
        button: {
          "@apply w-full px-4 py-2 rounded": {},
        },
      });
    }),
  ],
};
