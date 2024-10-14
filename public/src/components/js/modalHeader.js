// src/scripts/modalHandler.js

// Función para inicializar los modales
function initializeModals() {
  const loginButton = document.getElementById('login-button');
  const registerButton = document.getElementById('register-button');
  const loginModal = document.getElementById('login-modal');
  const registroModal = document.getElementById('register-modal');
  const registerLink = document.getElementById('register-link-2');

  // Verifica que los elementos existen
  if (!loginButton || !registerButton || !loginModal || !registroModal || !registerLink) {
      console.error("Algunos elementos del modal no se encontraron. Asegúrate de que todos los elementos están presentes en el DOM.");
      return;
  }
  // Función para mostrar el modal
  function showModal(modal) {
      modal.classList.remove('opacity-0', 'pointer-events-none');
      modal.classList.add('opacity-100'); 

      // Animar el contenido del modal
      setTimeout(() => {
          const modalContent = modal.querySelector('div'); 
          modalContent.classList.remove('scale-95', 'translate-y-4'); 
      }, 10);

      document.body.style.overflow = 'hidden'; 
  }

  // Función para ocultar el modal
  function hideModal(modal) {
      const modalContent = modal.querySelector('div'); 
      modalContent.classList.add('scale-95', 'translate-y-4'); 
      modal.classList.remove('opacity-100');
      modal.classList.add('opacity-0', 'pointer-events-none'); 
      document.body.style.overflow = ''; 
  }

  // Manejar la tecla de escape para cerrar los modales
  function handleEscapeKey(event) {
      if (event.key === 'Escape') {
          hideModal(loginModal); 
          hideModal(registroModal); 
      }
  }

  // Agregar eventos para mostrar los modales
  loginButton.addEventListener('click', () => showModal(loginModal)); 
  registerButton.addEventListener('click', () => showModal(registroModal)); 

  // Cambiar del modal de inicio de sesión al modal de registro
  registerLink.addEventListener('click', (e) => {
      e.preventDefault(); 
      hideModal(loginModal); 
      setTimeout(() => showModal(registroModal), 300); 
  });

  // Cerrar los modales al hacer clic fuera de ellos
  [loginModal, registroModal].forEach(modal => {
      modal.addEventListener('click', (e) => {
          if (e.target === modal) { // Verificar si se hizo clic fuera del contenido del modal
              hideModal(modal); 
          }
      });
  });

  // Manejar la tecla de escape
  document.addEventListener('keydown', handleEscapeKey); 


}

// Inicializar modales cuando se carga la página
document.addEventListener('DOMContentLoaded', initializeModals);




