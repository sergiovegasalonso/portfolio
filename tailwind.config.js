/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            mono: ["RobotoMono", "monospace"],
        },
        colors: {
            black: "#111",
            white: "#fff",
        },
        extend: {},
    },
    plugins: [],
};
