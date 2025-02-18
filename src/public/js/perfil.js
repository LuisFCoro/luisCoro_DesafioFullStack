// Mostrar/ocultar el menú de usuario al hacer clic en el ícono de corazón
document.getElementById('wishlist').addEventListener('click', function(event) {
    event.preventDefault(); // Evita que el enlace redirija
    const userMenu = document.getElementById('user-menu');
    userMenu.classList.toggle('visible'); // Alternar la clase "visible"
});

// Cerrar el menú si se hace clic fuera de él
document.addEventListener('click', function(event) {
    const userMenu = document.getElementById('user-menu');
    const wishlist = document.getElementById('wishlist');

    if (!wishlist.contains(event.target) && !userMenu.contains(event.target)) {
        userMenu.classList.remove('visible'); // Oculta el menú
    }
});