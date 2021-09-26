const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    mode: "jit",
    purge: [
        "./index.html",
        "./src/*.vue",
        "./src/components/*.vue",
        "./src/views/*.vue",
    ],
    darkMode: "class",
    theme: {
        fontFamily: {
            sans: ["Barlow", ...defaultTheme.fontFamily.sans],
            serif: [...defaultTheme.fontFamily.serif],
            mono: [...defaultTheme.fontFamily.mono],
        },
        extend: {
            colors: {
                "ut-blue": "#367BBC",
                "ut-green": "#4CAF50",
                background: "#0F1316",
            },
            minHeight: { 96: "24em" },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
