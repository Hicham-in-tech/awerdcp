/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          50: '#f0f5ff',
          100: '#e0ebff',
          200: '#c2daff',
          300: '#94c1ff',
          400: '#5c9dff',
          500: '#2b7fff',
          600: '#0055d4',
          700: '#003380', // Base
          800: '#002661',
          900: '#001a42',
          950: '#000d21',
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          50: '#f4fce8',
          100: '#e7f8d0',
          200: '#ceefa3',
          300: '#b2e273',
          400: '#76b82d', // Base
          500: '#5a991b',
          600: '#447a12',
          700: '#366011',
          800: '#2d4d13',
          900: '#264115',
          950: '#13200b',
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        nature: {
          light: '#F4F7F6', // Soft Light
          sand: '#F4F7F6', // Mapped to background for compatibility
          green: '#76B82D', // Leaf Green
          dark: '#003380', // Deep Navy
          ocean: '#5DADE2', // Sky Blue
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Suitable for modern look
        heading: ['Playfair Display', 'serif'], // Elegant serif for headings
        arabic: ['Noto Sans Arabic', 'sans-serif'], // For Arabic
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
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        scroll: "scroll 40s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
