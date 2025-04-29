import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
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
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0)'
					},
					'50%': {
						transform: 'translateY(-20px)'
					}
				},
				'pulse-glow': {
					'0%, 100%': {
						opacity: '1',
						filter: 'brightness(1)'
					},
					'50%': {
						opacity: '0.8',
						filter: 'brightness(1.3) drop-shadow(0 0 15px hsl(var(--primary)))'
					}
				},
				'magnetic-move': {
					'0%, 100%': { transform: 'translate(0px, 0px)' },
					'50%': { transform: 'translate(var(--x, 0px), var(--y, 0px))' },
				},
				'text-gradient': {
					'0%, 100%': {
						'background-size': '200% 200%',
						'background-position': '0% 50%'
					},
					'50%': {
						'background-size': '200% 200%',
						'background-position': '100% 50%'
					}
				},
				'slow-spin': {
					from: { transform: 'rotate(0deg)' },
					to: { transform: 'rotate(360deg)' },
				},
				'morph-shape': {
					'0%, 100%': { 'border-radius': '60% 40% 30% 70%/60% 30% 70% 40%' },
					'50%': { 'border-radius': '30% 60% 70% 40%/50% 60% 30% 60%' },
				},
				'noise-animation': {
					'0%': { transform: 'translate(0, 0)' },
					'10%': { transform: 'translate(-5%, -5%)' },
					'20%': { transform: 'translate(-10%, 5%)' },
					'30%': { transform: 'translate(5%, -10%)' },
					'40%': { transform: 'translate(-5%, 15%)' },
					'50%': { transform: 'translate(-10%, 5%)' },
					'60%': { transform: 'translate(15%, 0)' },
					'70%': { transform: 'translate(0, 10%)' },
					'80%': { transform: 'translate(-15%, 0)' },
					'90%': { transform: 'translate(10%, 5%)' },
					'100%': { transform: 'translate(5%, 0)' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
				'magnetic-move': 'magnetic-move 3s ease-in-out infinite',
				'text-gradient': 'text-gradient 8s ease infinite',
				'slow-spin': 'slow-spin 20s linear infinite',
				'morph-shape': 'morph-shape 8s ease-in-out infinite',
				'noise-animation': 'noise-animation 1.5s steps(10) infinite',
			},
			backgroundImage: {
				'noise': 'url("/noise.png")',
			},
			perspective: {
				'1000': '1000px',
				'2000': '2000px',
			},
			transformStyle: {
				'preserve-3d': 'preserve-3d',
			},
		}
	},
	plugins: [
		require("tailwindcss-animate"),
		require("@tailwindcss/typography"),
		function({ addUtilities }) {
			addUtilities({
				'.perspective-1000': {
					'perspective': '1000px',
				},
				'.perspective-2000': {
					'perspective': '2000px',
				},
				'.preserve-3d': {
					'transform-style': 'preserve-3d',
				},
			});
		},
	],
} satisfies Config;
