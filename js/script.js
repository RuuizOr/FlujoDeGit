// ===== Navegación (Misión 1) =====
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

// ===== Formulario absurdo (Misión 3) =====
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
