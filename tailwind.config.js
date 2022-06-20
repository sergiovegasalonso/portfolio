/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line no-undef
module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            mono: ["RobotoMono", "monospace"],
        },
        colors: {
            transparent: "transparent",
            current: "currentColor",
            black: "#222222",
            white: "#ffffff",
        },
        extend: {},
    },
    plugins: [],
};
