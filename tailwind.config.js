/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line no-undef
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
}
