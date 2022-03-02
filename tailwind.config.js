/* eslint-disable @typescript-eslint/no-var-requires */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    darkMode: "class",
    content: [
        "./index.html",
        "./src/*.vue",
        "./src/components/*.vue",
        "./src/views/*.vue",
    ],
    theme: {
        fontFamily: {
            sans: ["Barlow", ...defaultTheme.fontFamily.sans],
            serif: [...defaultTheme.fontFamily.serif],
            mono: [...defaultTheme.fontFamily.mono],
        },
        extend: {
            colors: {
                "ut-blue": { DEFAULT: "#367BBC", dark: "#2D69A1" },
                "ut-green": { DEFAULT: "#4CAF50", dark: "#3F9142" },
                background: "#0F1316",
            },
            minHeight: { 96: "24em" },
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
