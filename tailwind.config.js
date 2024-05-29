/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
export default {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.jsx",
        flowbite.content(),
    ],
    theme: {
        extend: {},
    },
    plugins: [flowbite.plugin()],
};
