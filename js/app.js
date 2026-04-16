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

// Inicializar animaciones de AOS (Repitiéndose al subir y bajar)
        AOS.init({
            once: false, 
            mirror: true, 
            offset: 100, 
            duration: 800
        });

        // Inicializar Lightbox para la Galería
        Fancybox.bind('[data-fancybox="gallery"]', {
            hideScrollbar: false,
        });

        // Inicializar el Carrusel (Swiper)
        var swiper = new Swiper(".myHeroSwiper", {
            loop: true,
            effect: "fade",
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });