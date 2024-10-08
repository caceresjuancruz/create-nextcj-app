import type { Config } from 'tailwindcss'

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      screens: {
        xs: '375px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px'
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        md: '1rem',
        lg: '1.125rem',
        xl: '1.25rem'
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        warning: {
          DEFAULT: 'hsl(var(--warning))',
          foreground: 'hsl(var(--warning-foreground))'
        },
        info: {
          DEFAULT: 'hsl(var(--info))',
          foreground: 'hsl(var(--info-foreground))'
        },
        success: {
          DEFAULT: 'hsl(var(--success))',
          foreground: 'hsl(var(--success-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        buttonheartbeat: {
          '0%': {
            'box-shadow': '0 0 0 0 theme("colors.neutral.500")',
            transform: 'scale(1)'
          },
          '50%': {
            'box-shadow': '0 0 0 7px theme("colors.neutral.500/0")',
            transform: 'scale(1.05)'
          },
          '100%': {
            'box-shadow': '0 0 0 0 theme("colors.neutral.500/0")',
            transform: 'scale(1)'
          }
        },
        spin: {
          from: {
            transform: 'rotate(0deg)'
          },
          to: {
            transform: 'rotate(360deg)'
          }
        },
        pulse: {
          '0%, 100%': {
            opacity: '0.9'
          },
          '50%': {
            opacity: '0.75'
          }
        },
        ping: {
          '75%, 100%': {
            transform: 'scale(2)',
            opacity: '0'
          }
        },
        bounce: {
          '0%, 100%': {
            transform: 'translateY(-25%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)'
          },
          '50%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'
          }
        },
        moveUp: {
          '0%': { transform: 'translateY(5%)', opacity: '0' },
          '100%': { transform: 'translateY(0%)', opacity: '1' }
        },
        moveDown: {
          '0%': { transform: 'translateY(-5%)', opacity: '0' },
          '100%': { transform: 'translateY(0%)', opacity: '1' }
        },
        moveRight: {
          '0%': { transform: 'translateX(-5%)', opacity: '0' },
          '100%': { transform: 'translateX(0%)', opacity: '1' }
        },
        moveLeft: {
          '0%': { transform: 'translateX(5%)', opacity: '0' },
          '100%': { transform: 'translateX(0%)', opacity: '1' }
        },
        appear: {
          from: { opacity: '0' },
          to: { opacity: '1' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        buttonheartbeat: 'buttonheartbeat 2s infinite ease-in-out',
        spin: 'spin 1s linear infinite',
        pulse: 'pulse 4s infinite',
        ping: 'ping 1s infinite',
        bounce: 'bounce 1s infinite',
        moveUp: 'moveUp 1.4s ease forwards',
        moveDown: 'moveDown 1.4s ease forwards',
        moveRight: 'moveRight 1.4s ease forwards',
        moveLeft: 'moveLeft 1.4s ease forwards',
        appear: 'appear 1s 1s forwards'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
} satisfies Config

export default config
