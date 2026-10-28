/**
 * =========================================================
 * MÓDULO: MAPA INTERACTIVO
 * Coordenadas responsivas y activación de modales del mapa
 * =========================================================
 */

function initMapResize() {
  const img = document.getElementById('mapaImagen');
  const map = document.querySelector('map[name="image-map"]');
  if (!img || !map) return;

  const areas = map.querySelectorAll('area');
  const originalCoords = [];

  // Guardar coordenadas originales
  areas.forEach((area) => {
    originalCoords.push(area.getAttribute('coords'));
  });

  function resizeMap() {
    // Dimensiones nativas de la imagen de referencia (1458 x 818)
    const originalWidth = 1458;
    const originalHeight = 818;

    const currentWidth = img.clientWidth;
    const currentHeight = img.clientHeight;

    if (!currentWidth || !currentHeight) return;

    const widthRatio = currentWidth / originalWidth;
    const heightRatio = currentHeight / originalHeight;

    areas.forEach((area, index) => {
      const coords = originalCoords[index].split(',');
      const newCoords = coords.map((coord, i) => {
        return Math.round(Number(coord) * (i % 2 === 0 ? widthRatio : heightRatio));
      });
      area.setAttribute('coords', newCoords.join(','));
    });
  }

  // Ejecutar al cargar la imagen y en cada cambio de tamaño de ventana
  if (img.complete) {
    resizeMap();
  } else {
    img.addEventListener('load', resizeMap);
  }

  window.addEventListener('resize', resizeMap);
}

/**
 * Abre el modal correspondiente a un municipio desde el mapa interactivo
 * @param {string} municipio - Nombre del municipio (ej: 'Zipaquira', 'Cogua', etc.)
 */
function openMapModal(municipio) {
  const modalId = 'modalMapa' + municipio;
  openModal(modalId);
}

document.addEventListener('DOMContentLoaded', initMapResize);
