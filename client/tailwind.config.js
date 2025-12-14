/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#EF4444", // Red-500 for emergency
                secondary: "#3B82F6", // Blue-500
                dark: "#1F2937",
                light: "#F3F4F6"
            }
        },
    },
    plugins: [],
}
