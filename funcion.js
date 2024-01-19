// Obtener los elementos div por su id
let bloque1 = document.getElementById("bloque1");
let bloque2 = document.getElementById("bloque2");

// Asignar un evento de mouseover al primer div
bloque1.addEventListener("mouseover", () => {
    // Cambiar el color de fondo del segundo div a gris
    bloque2.style.backgroundColor = "grey";
});

// Asignar un evento de mouseout al primer div
bloque1.addEventListener("mouseout", () => {
    // Restaurar el color de fondo del segundo div a blanco
    bloque2.style.backgroundColor = "white";
});
