import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
        iDonate: {
          // Green
          "green-primary": "#55A44A",
          "green-secondary": "#74DF80",
          "green-accent": "#BAF4D0",
  
          // Navy
          "navy-primary": "#1E2E4E",
          "navy-secondary": "#263A61",
          "navy-accent": "#DCE3F0",
  
          //white space
          "white-space": "#FFFFFF",
          "white-space-hovering": "#F5F5F5",
  
          // Gray
          "gray": "#808080",
          "light-gray": "#F6F6F6",
  
          // Error
          "error": "#FF0000",
        },
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
      fontFamily: {
        siemreap: ["var(--font-siemreap)", ...fontFamily.sans],
        inter: ["var(--font-inter)", ...fontFamily.sans],
      },
  		fontSize: {
  			'wide-khmer': ['60px', '110px'],
  			'heading-one-khmer': ['36px', '66px'],
  			'heading-two-khmer': ['30px', '55px'],
  			'title-khmer': ['26px', '48px'],
  			'medium-khmer': ['20px', '37px'],
  			'description-khmer': ['18px', '33px'],
  			'title-card': ['19px', '33px'],
  			'sub-description-khmer': ['14px', '26px'],
  			'wide-eng': ['60px', '90px'],
  			'heading-one-eng': ['36px', '54px'],
  			'heading-two-eng': ['30px', '45px'],
  			'title-eng': ['26px', '39px'],
  			'medium-eng': ['20px', '30px'],
  			'description-eng': ['18px', '28px'],
  			'sub-description-eng': ['14px', '21px']
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
