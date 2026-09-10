const enlaces = document.querySelectorAll("nav a");

enlaces.forEach((enlace) => {
    enlace.addEventListener("click", () => {
        enlaces.forEach((item) => {
            item.classList.remove("activo");
        });

        enlace.classList.add("activo");

        console.log("Navegando a: " + enlace.textContent);
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const boton = document.getElementById("btn-caos");

    boton.addEventListener("click", () => {
        boton.style.backgroundColor = "red";
    });
});