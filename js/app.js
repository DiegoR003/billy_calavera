document.addEventListener('DOMContentLoaded', () => {
    
    // Lógica para la Biografía Modular
    const btnBio = document.getElementById('btn-bio');
    const bioExtendida = document.getElementById('bio-extendida');
    const flechaBio = document.getElementById('flecha-bio');

    if (btnBio && bioExtendida) {
        btnBio.addEventListener('click', () => {
            // Alternar la clase 'hidden' de Tailwind
            bioExtendida.classList.toggle('hidden');
            
            // Cambiar el texto y la flecha del botón
            if (bioExtendida.classList.contains('hidden')) {
                btnBio.innerHTML = 'Leer biografía completa <span id="flecha-bio">↓</span>';
            } else {
                btnBio.innerHTML = 'Mostrar menos <span id="flecha-bio">↑</span>';
            }
        });
    }

});