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

const form = document.getElementById("form-absurdo");

if (form) {
    const sospechaInput = document.getElementById("sospecha");
    const valorSospecha = document.getElementById("valor-sospecha");
    const resultado = document.getElementById("resultado");

    sospechaInput.addEventListener("input", () => {
        valorSospecha.textContent = sospechaInput.value;
    });

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const mascota = document.getElementById("mascota").value;
        const reflejo = document.getElementById("reflejo").value;
        const sospecha = sospechaInput.value;
        const excusa = document.getElementById("excusa").value;
        const lunes = document.getElementById("lunes").value;

        resultado.innerHTML = `
            <strong>Resumen del disparate:</strong><br>
            🐾 Mascota: ${mascota}<br>
            🪞 Charlas con tu reflejo: ${reflejo}<br>
            🕊️ Sospecha de palomas: ${sospecha}/10<br>
            🕐 Excusa: ${excusa}<br>
            🎨 Color del lunes: <span style="color:${lunes}">${lunes}</span>
        `;
    });
}
document.addEventListener("DOMContentLoaded", () => {
    const boton = document.getElementById("btn-caos");

    boton.addEventListener("click", () => {
        boton.style.backgroundColor = "red";
    });
});
const baraja = document.getElementById("baraja");
const botonMezclar = document.getElementById("mezclar");
const aviso = document.getElementById("aviso");

if (baraja && botonMezclar) {
    baraja.addEventListener("click", (e) => {
        const carta = e.target.closest(".carta");

        if (!carta) return;

        const volteada = carta.classList.toggle("volteada");
        carta.setAttribute("aria-pressed", volteada);
    });
    botonMezclar.addEventListener("click", () => {
        const huecos = Array.from(baraja.children);

        baraja.querySelectorAll(".carta").forEach((carta) => {
            carta.classList.remove("volteada");
            carta.setAttribute("aria-pressed", "false");
        });

        for (let i = huecos.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [huecos[i], huecos[j]] = [huecos[j], huecos[i]];
        }

        baraja.classList.add("mezclando");
        baraja.addEventListener("animationend", () => {
            baraja.classList.remove("mezclando");
        }, { once: true });

        huecos.forEach((hueco) => baraja.appendChild(hueco));

        aviso.textContent = "Baraja revuelta. Las " + huecos.length + " cartas están boca abajo.";
    });
}

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

