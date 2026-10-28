/**
 * =========================================================
 * MÓDULO: NAVEGACIÓN PRINCIPAL (SPA)
 * Control de cambio de secciones activas y desplazamiento
 * =========================================================
 */

/**
 * Desplaza la vista suavemente hasta una sección específica
 * @param {string} id - ID de la sección destino
 */
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function initNavigation() {
  const sections = document.querySelectorAll('main section');
  const links = document.querySelectorAll('nav a');
  let currentSection = '';

  function showSection(id) {
    let found = false;
    sections.forEach((section) => {
      if (section.id === id) {
        section.classList.add('active');
        found = true;
      } else {
        section.classList.remove('active');
      }
    });

    // Si la sección solicitada no existe, activar la primera por defecto
    if (!found && sections.length > 0) {
      sections[0].classList.add('active');
      currentSection = sections[0].id;
    } else {
      currentSection = id;
    }
  }

  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const href = link.getAttribute('href');
      if (!href || !href.startsWith('#')) return;

      const targetId = href.substring(1);
      if (targetId !== currentSection) {
        showSection(targetId);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  });

  // Mostrar la sección correspondiente al hash de la URL o la primera ('quienes') por defecto
  const initialSection = (window.location.hash && window.location.hash.substring(1)) || 'quienes';
  showSection(initialSection);
}

document.addEventListener('DOMContentLoaded', initNavigation);
