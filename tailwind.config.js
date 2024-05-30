const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {

            width: {
                'full-16': 'calc(100% - 16px)',
            },

            colors: {
                blueObscuro: {
                    50: "#f0f9ff",
                    100: "#e0f2fe",
                    200: "#bae6fd",
                    300: "#7dd3fc",
                    400: "#38bdf8",
                    500: "#0ea5e9",
                    600: "#0284c7",
                    700: "#001F3F",
                    800: "#075985",
                    900: "#0c4a6e",
                },
                // Puedes añadir más colores personalizados si lo necesitas
            },
        },
    },
    plugins: [
        function ({ addUtilities }) {
            const newUtilities = {
                '.new-email-bx': {
                    background: '#fff',
                    padding: '5px',
                    borderRadius: '20px',
                    position: 'relative',
                    zIndex: '10',
                    display: 'flex',
                    alignItems: 'center',
                },
                '.new-email-bx::before': {
                    content: '""',
                    background: 'linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)',
                    borderRadius: '20px',
                    position: 'absolute',
                    zIndex: '-1',
                    top: '-1px',
                    left: '-1px',
                    bottom: '-1px',
                    right: '-1px',
                },
                '.new-email-bx::after': {
                    content: '""',
                    background: '#fff',
                    borderRadius: '20px',
                    position: 'absolute',
                    zIndex: '-1',
                    top: '0',
                    left: '0',
                    bottom: '0',
                    right: '0',
                },
                '.new-email-bx input': {
                    width: '100%',
                    color: '#121212',
                    fontWeight: '500',
                    background: 'transparent',
                    border: '0',
                    padding: '0 15px',
                },
                '.new-email-bx button': {
                    background: 'linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)',
                    padding: '20px 65px',
                    color: '#fff',
                    fontWeight: '500',
                    letterSpacing: '0.5px',
                    borderRadius: '18px',
                },


                // Agrega las clases para la versión sm
                'new-email-bx-sm': {
                    background: '#fff',
                    borderRadius: '20px',
                    position: 'relative',
                    zIndex: '10',
                },

                '.new-email-bx-sm input': {
                    width: '100%',
                    color: '#121212',
                    fontWeight: '500',
                    background: 'transparent',
                    border: '0',
                    padding: '0 15px',
                },
                '.new-email-bx-sm button': {
                    background: 'linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)',
                    padding: '20px 65px',
                    marginTop: '25px',
                    width: '100%',
                    color: '#fff',
                    fontWeight: '500',
                    letterSpacing: '0.5px',
                    borderRadius: '18px',
                },
            };
            addUtilities(newUtilities, ['responsive', 'hover']);
        },
    ],
});
