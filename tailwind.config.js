/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#f8fafc', // Slate 50
        card: '#ffffff',
        cardBorder: '#e2e8f0', // Slate 200
        primary: '#16a34a', // Green 600
        primaryHover: '#15803d', // Green 700
        secondary: '#0f766e', // Teal 700
        textPrimary: '#0f172a', // Slate 900
        textSecondary: '#64748b', // Slate 500
        success: '#10b981', 
        warning: '#f59e0b',
        danger: '#ef4444',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #f0fdf4 0%, #ffffff 100%)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'float': '0 10px 40px -10px rgba(0, 0, 0, 0.08)',
        'btn': '0 4px 14px 0 rgba(22, 163, 74, 0.39)',
      }
    },
  },
  plugins: [],
}
