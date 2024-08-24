/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,jsx}",
		"./components/**/*.{js,jsx}",
		"./app/**/*.{js,jsx}",
		"./src/**/*.{js,jsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "15px",
		},
		screens: {
			sm: "640px",
			md: "768px",
			lg: "960px",
			xl: "1200px",
		},
		fontFamily: {
			primary: "var(--font-jetbrainsMono)",
			theYoungest: "var(--font-theYoungest)",
			mavka: "var(--font-mavka)",
		},
		extend: {
			colors: {
				primary: "#a21caf",
				accent: {
					DEFAULT: "#FFD700",
					hover: "#25a18e",
				},
			},

			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
				moveText: {
					"0%": { left: "0%" },
					"100%": { left: "-100%" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				moveText: "moveText 15s linear infinite",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
};
