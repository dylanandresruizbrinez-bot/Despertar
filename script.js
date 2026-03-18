console.log("Sitio cargado correctamente");
// script.js - Implementación del Protocolo Despertar
// Seleccionamos todos los artículos de usuario
const mensajes = document.querySelectorAll('#chat-container article.usuario');

mensajes.forEach(mensaje => {
    mensaje.addEventListener('mouseenter', () => {
        // Al pasar el mouse sobre uno, agrandamos este y reducimos los demás
        mensajes.forEach(m => {
            if (m === mensaje) {
                m.style.transform = 'scale(1.05)'; // ligeramente más grande
                m.style.transition = 'transform 0.3s ease';
                m.style.zIndex = 10; // para que quede arriba
            } else {
                m.style.transform = 'scale(0.95)'; // ligeramente más pequeño
                m.style.transition = 'transform 0.3s ease';
                m.style.zIndex = 1;
            }
        });
    });

    mensaje.addEventListener('mouseleave', () => {
        // Restauramos todos al tamaño normal al salir el mouse
        mensajes.forEach(m => {
            m.style.transform = 'scale(1)';
            m.style.transition = 'transform 0.3s ease';
            m.style.zIndex = 1;
        });
    });
});
