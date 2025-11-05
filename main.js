// Obtener elementos del DOM
const book = document.getElementById("book");
const pages = document.querySelectorAll(".page");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let currentPage = 0; // Índice de la página actual

// Función para actualizar el estado de las páginas
function updatePages() {
    pages.forEach((page, index) => {
        if (index < currentPage) {
            page.classList.add("flipped");
            page.style.zIndex = index;  // Asegurar que las páginas anteriores tengan un z-index menor
        } else if (index === currentPage) {
            page.classList.remove("flipped");
            page.style.zIndex = pages.length; // La página actual debe estar al frente
        } else {
            page.classList.remove("flipped");
            page.style.zIndex = pages.length - index;  // Las siguientes páginas deben estar detrás
        }
    });
    
    // Deshabilitar botones si estamos en el inicio o en el final
    prevBtn.disabled = currentPage === 0;
    nextBtn.disabled = currentPage === pages.length - 1;
}

// Evento para ir a la página anterior
prevBtn.addEventListener("click", () => {
    if (currentPage > 0) {
        currentPage--;
        updatePages();
    }
});

// Evento para ir a la página siguiente
nextBtn.addEventListener("click", () => {
    if (currentPage < pages.length - 1) {
        currentPage++;
        updatePages();
    }
});

// Actualizar la vista inicial
updatePages();
