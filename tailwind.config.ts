import type { Config } from "tailwindcss"
// tailwind.config.js
const { nextui } = require("@nextui-org/react")
/** @type {import('tailwindcss').Config} */

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            transitionProperty: {
                display: "opacity, visibility",
                roundedAndColors: "border-radius, color, background-color"
            }
        },
    },
    darkMode: "class",
    plugins: [nextui()],
}
export default config
