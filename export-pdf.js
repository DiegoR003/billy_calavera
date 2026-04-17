const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  await page.setViewport({
    width: 1440,
    height: 1200,
    deviceScaleFactor: 1
  });

  // ✅ Cambia esta ruta si tu index.html está en otro lugar
  const filePath = path.resolve(__dirname, 'index.html');
  await page.goto(`file://${filePath}`, {
    waitUntil: 'networkidle2',
    timeout: 60000
  });

  // Espera a que carguen fuentes/imágenes locales
  await new Promise(resolve => setTimeout(resolve, 3000));

  await page.emulateMediaType('screen');

  // Oculta elementos interactivos innecesarios para el PDF
  await page.addStyleTag({
    content: `
      .swiper-button-next,
      .swiper-button-prev,
      .swiper-pagination,
      #btn-bio,
      button,
      [data-fancybox] {
        pointer-events: none !important;
      }
      * {
        animation: none !important;
        transition: none !important;
      }
    `
  });

  const bodyHeight = await page.evaluate(() => {
    return Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight
    );
  });

  await page.pdf({
    path: 'billy-calavera.pdf',
    printBackground: true,
    width: '1440px',
    height: `${bodyHeight}px`,
    margin: {
      top: '0px',
      right: '0px',
      bottom: '0px',
      left: '0px'
    }
  });

  console.log('✅ PDF generado: billy-calavera.pdf');
  await browser.close();
})();