function openNav() {
    var sideNav = document.getElementById("sideNavigation");
    var mainContent = document.getElementById("main");

    // Abrir la barra de navegación para pantallas más pequeñas
    sideNav.style.width = "375px";
    mainContent.style.marginLeft = "250px";

    // Comprobar si la pantalla es lo suficientemente grande
    var isDesktop = window.matchMedia("(min-width: 490px)").matches;

    // Eliminar estilos si es una pantalla de escritorio
    if (isDesktop) {
        sideNav.style.width = ""; // Eliminar el ancho
        mainContent.style.marginLeft = ""; // Eliminar el margen izquierdo
    }
}

function closeNav() {
    var sideNav = document.getElementById("sideNavigation");
    var mainContent = document.getElementById("main");

    // Cerrar la barra de navegación
    sideNav.style.width = "0";
    mainContent.style.marginLeft = "0";

    // Comprobar si la pantalla es lo suficientemente grande
    var isDesktop = window.matchMedia("(min-width: 490px)").matches;

    // Eliminar estilos si es una pantalla de escritorio
    if (isDesktop) {
        sideNav.style.width = ""; // Eliminar el ancho
        mainContent.style.marginLeft = ""; // Eliminar el margen izquierdo
    }
}


function scrollToTop() {
    document.documentElement.classList.add('scroll-top-transition');
    document.documentElement.scrollTop = 0;
}

window.onscroll = function() {
    var button = document.querySelector('.back-to-top');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
};
