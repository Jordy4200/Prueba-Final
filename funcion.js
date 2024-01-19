let bloque1 = document.getElementById("bloque1");
let bloque2 = document.getElementById("bloque2");
bloque1.addEventListener("mouseover", () => {
    bloque2.style.backgroundColor = "grey";
});

bloque1.addEventListener("mouseout", () => {
    bloque2.style.backgroundColor = "white";
});
