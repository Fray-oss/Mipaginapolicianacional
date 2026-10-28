/**
 * =========================================================
 * MÓDULO: MODALES
 * Control de apertura, cierre y eventos de accesibilidad
 * =========================================================
 */

/**
 * Abre una ventana modal por su ID
 * @param {string} id - ID del elemento modal
 */
function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.add('modal-open');
    document.body.style.overflow = 'hidden';
  }
}

/**
 * Cierra una ventana modal por su ID
 * @param {string} id - ID del elemento modal
 */
function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.remove('modal-open');
    document.body.style.overflow = '';
  }
}

/**
 * Cierra todos los modales abiertos actualmente
 */
function closeAllModals() {
  document.querySelectorAll('.modal.modal-open').forEach((modal) => {
    modal.classList.remove('modal-open');
  });
  document.body.style.overflow = '';
}

// Cerrar modal al hacer clic en el fondo oscuro exterior
window.addEventListener('click', (e) => {
  if (e.target && e.target.classList.contains('modal-open')) {
    e.target.classList.remove('modal-open');
    document.body.style.overflow = '';
  }
});

// Cerrar modal al presionar la tecla Escape
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeAllModals();
  }
});
