let pantalla = document.getElementById("pantalla");

function agregar(valor) {
    if (pantalla.textContent === "0" || pantalla.textContent === "Error") {
        pantalla.textContent = valor;
    } else {
        pantalla.textContent += valor;
    }
}

function limpiar() {
    pantalla.textContent = "0";
}

function borrar() {
    if (pantalla.textContent.length > 1) {
        pantalla.textContent = pantalla.textContent.slice(0, -1);
    } else {
        pantalla.textContent = "0";
    }
}

function calcular() {
    try {
        let resultado = eval(pantalla.textContent.replace("×", "*").replace("÷", "/"));
        pantalla.textContent = resultado;
    } catch {
        pantalla.textContent = "Error";
    }
}



