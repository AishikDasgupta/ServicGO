/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: '#0078D4', // Blue
          teal: '#00C7A8',    // Teal
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: '#FF8C42', // Vibrant Orange
          purple: '#6A0DAD',  // Royal Purple
          yellow: '#FFC107',  // Bright Yellow
          foreground: 'hsl(var(--secondary-foreground))',
        },
        neutral: {
          DEFAULT: '#6E6E6E', // Neutral Gray
          light: '#F4F4F4',   // Light mode background
        },
        bg: {
          light: '#FFFFFF',   // Light mode primary background
          offWhite: '#F9FAFB', // Off-white for light mode
          dark: '#121212',    // Dark mode background
          darkBlue: '#1C1E26', // Dark Blue secondary
        },
        text: {
          light: '#333333',   // Charcoal Black for light mode text
          dark: '#E0E0E0',    // Light Gray for dark mode text
          muted: '#BDBDBD',   // Muted white
        },
        accent: {
          DEFAULT: '#2DCCD3', // Cyan
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },
        gradient: {
          lightStart: '#0078D4', // Gradient start for light mode
          lightEnd: '#00C7A8',   // Gradient end for light mode
          darkStart: '#1C1E26',  // Gradient start for dark mode
          darkEnd: '#2DCCD3',    // Gradient end for dark mode
        },
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
};
