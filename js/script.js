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

const colorFooter = ["#FF5733", "#33FF57", "#3357FF", "#F333FF", "#33FFF5"];
const frasesFooter = [
    "¡Bienvenido a nuestro sitio web!",
    "Explora nuestro botón del caos.",
    "Gracias por visitarnos.",
    "¡Disfruta de tu experiencia!",
    "No nos mande a extra profe, porfa :b"
];

const cambiarColoryFraseEnElFooter = () => {
    const footer = document.getElementById("footer-id");
    footer.style.minHeight = "100px"; 
    footer.style.display = "flex";
    footer.style.justifyContent = "center";
    footer.style.alignItems = "center";

    const randomIndexTexto = Math.floor(Math.random() * frasesFooter.length);
    footer.style.backgroundColor = colorFooter[randomIndexTexto];
    footer.innerHTML = frasesFooter[randomIndexTexto];

    let randomIndexColor = Math.floor(Math.random() * colorFooter.length);
    footer.style.backgroundColor = colorFooter[randomIndexColor];
};

cambiarColoryFraseEnElFooter();

