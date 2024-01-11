/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        light: {
          primary: "#faef9b",
          // secondary: "#f6d776",
          secondary: "#AD840B",
          accent: "#6da4aa",
          neutral: "#dddddd",
          "base-100": "#6da4aa",
          info: "#06b6d4",
          success: "#22c55e",
          warning: "#dc2626",
          error: "#b91c1c",
        },
        dark: {
          primary: "#6F25F8",
          secondary: "#3B3486",
          accent: "#ffffff",
          neutral: "#333333",
          "base-100": "#332941",
          info: "#06b6d4",
          success: "#22c55e",
          warning: "#dc2626",
          error: "#b91c1c",
        },
      },
    ],
  },
  plugins: [daisyui],
};
