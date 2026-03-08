tailwind.config = {
    theme: {
        extend: {
            colors: {
                banda: {
                    dark: '#0a0a0a',      // Mantenemos un fondo oscuro base para el contraste
                    light: '#d9e0e0',     //  nuevo color hueso/gris claro para textos generales
                    primary: '#cf9e28',   // El mostaza/dorado para botones, iconos y textos a resaltar
                    secondary: '#8e5110', // El marrón para efectos hover (pasar el mouse) o bordes
                    blueLight: '#aac2cc', // Azul claro para detalles secundarios
                    blueDark: '#86a7b4',  // Azul medio para fondos de secciones alternativas
                }
            },
            fontFamily: {
                display: ['Oswald', 'sans-serif'],
                body: ['Inter', 'sans-serif'],
            }
        }
    }
}