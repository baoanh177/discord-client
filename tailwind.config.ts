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
            },
            backgroundColor: {
                dark: {
                    50: "#7d8292",
                    100: "#767d8f",
                    200: "#656a77",
                    300: "#636770",
                    400: "#505359",
                    500: "#313338",
                    600: "#252629",
                    700: "#1e1f22",
                    800: "#171719",
                    900: "#111111"
                }
            },
            borderColor: {
                dark: {
                    50: "#7d8292",
                    100: "#767d8f",
                    200: "#656a77",
                    300: "#636770",
                    400: "#505359",
                    500: "#313338",
                    600: "#252629",
                    700: "#1e1f22",
                    800: "#171719",
                    900: "#111111"
                }
            }
        },
    },
    darkMode: "class",
    plugins: [nextui()],
}
export default config
