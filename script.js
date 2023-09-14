// Vector de palabras aleatorias de 5 letras
const palabras = ["TIGER", "LEMON", "MANGO", "GRAPE", "APPLE", "SNAKE", "BREAD", "PAPER"];

// Palabra aleatoria para adivinar
let palabra = palabras[Math.floor(Math.random() * palabras.length)];

let intentosRestantes = 6;
let letrasUsadas = [];

document.addEventListener('DOMContentLoaded', function() {
    mostrarPalabra();
});

function mostrarPalabra(){
    const wordDisplay = document.getElementById("word-display");
    wordDisplay.textContent = palabra;
}

function intentar(){
    const intento = leerIntento();
    letrasUsadas.push(intento);
    const resultado = compararPalabra(intento);
    mostrarResultado(resultado);
    actualizarIntentosRestantes();
    
    if (intentosRestantes === 0) {
        terminarJuego("PERDISTE");
    }
}

function leerIntento(){
    const intento = document.getElementById("guess-input").value.toUpperCase();
    return intento;
}

function compararPalabra(intento){
    if (intento === palabra) {
        return "GANASTE";
    } else {
        let resultado = "";
        for (let i = 0; i < palabra.length; i++) {
            if (intento[i] === palabra[i]) {
                resultado += "VERDE";
            } else if (palabra.includes(intento[i])) {
                resultado += "AMARILLO";
            } else {
                resultado += "GRIS";
            }
        }
        return resultado;
    }
}

function mostrarResultado(resultado){
    const grid = document.getElementById("word-display");
    const letras = grid.getElementsByClassName("letter");
    for (let i = 0; i < resultado.length; i++) {
        letras[i].textContent = resultado[i];
        letras[i].classList.add(resultado[i].toLowerCase());
    }
}

function actualizarIntentosRestantes(){
    intentosRestantes--;
    const guesses = document.getElementById("guesses");
    guesses.textContent = `Attempts left: ${intentosRestantes}`;
}

function terminarJuego(mensaje){
    const input = document.getElementById("guess-input");
    const button = document.getElementById("guess-button");
    input.disabled = true;
    button.disabled = true;
    const guesses = document.getElementById("guesses");
    guesses.textContent = mensaje;
}

