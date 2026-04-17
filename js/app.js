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

        function generarPressKitPDF() {
    // 1. Ocultamos la navegación y elementos que no van en el PDF
    const nav = document.querySelector('nav');
    nav.classList.add('hidden');

    // 2. APAGAMOS los recortes para que NO salga cortado
    const elementosOcultos = document.querySelectorAll('.overflow-hidden, .overflow-x-hidden');
    elementosOcultos.forEach(el => {
        el.style.setProperty('overflow', 'visible', 'important');
    });

    // 3. Configuración del PDF (Formato A4, Alta Calidad)
    const elemento = document.body;
    const opciones = {
        margin:       0, // Sin márgenes blancos feos
        filename:     'Billy_Calavera_PressKit.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { 
            scale: 2, // Mejora la resolución
            useCORS: true, // Permite cargar imágenes externas
            windowWidth: 1200 // Fuerza a que tome el diseño de computadora, no el de celular
        },
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    // 4. Generar y descargar
    html2pdf().set(opciones).from(elemento).save().then(() => {
        // 5. RESTAURAMOS la página a la normalidad
        nav.classList.remove('hidden');
        elementosOcultos.forEach(el => {
            el.style.removeProperty('overflow');
        });
    });
}