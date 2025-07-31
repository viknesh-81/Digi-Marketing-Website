// Tailwind CSS Configuration
tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                green: {
                    50: '#f0fdf4',
                    100: '#dcfce7',
                    200: '#bbf7d0',
                    300: '#86efac',
                    400: '#4ade80',
                    500: '#22c55e',
                    600: '#16a34a',
                    700: '#15803d', // Primary color (Royal Green)
                    800: '#166534',
                    900: '#14532d',
                    950: '#052e16',
                },
            },
            fontFamily: {
                sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
            },
            boxShadow: {
                'custom': '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-in-out',
                'slide-up': 'slideUp 0.5s ease-in-out',
                'pulse-slow': 'pulse 3s infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
            },
            transitionProperty: {
                'height': 'height',
                'spacing': 'margin, padding',
            },
        },
    },
    variants: {
        extend: {
            opacity: ['dark'],
            backgroundColor: ['dark', 'dark-hover'],
            textColor: ['dark', 'dark-hover'],
            borderColor: ['dark', 'dark-focus'],
            outline: ['dark-focus'],
            ringColor: ['dark-focus'],
            ringOffsetColor: ['dark-focus'],
            ringOffsetWidth: ['dark-focus'],
            ringOpacity: ['dark-focus'],
            ringWidth: ['dark-focus'],
        },
    },
    plugins: [],
};

tailwind.config = {
    darkMode: 'class',
    // other configuration
}
