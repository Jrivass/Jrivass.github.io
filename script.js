let palabraSecreta; // Variable para almacenar la palabra secreta
let intentos = 6;

// Función para obtener una palabra aleatoria de la API
async function obtenerPalabraAleatoria() {
    try {
        const response = await fetch("https://random-word-api.herokuapp.com/word?number=1");
        const data = await response.json();
        palabraSecreta = data[0].toLowerCase(); // Almacenar la palabra secreta en minúsculas
        console.log("Palabra secreta:", palabraSecreta);

        // Mostrar una pista sobre la palabra
        const hint = document.getElementById("hint");
        hint.textContent = `Pista: La palabra tiene ${palabraSecreta.length} letras.`;

        // Inicializar el juego con la palabra secreta
        initGame();
    } catch (error) {
        console.error("Error al obtener la palabra:", error);
    }
}

// Llamar a la función para obtener la palabra al cargar la página
obtenerPalabraAleatoria();

function initGame() {
    const guessButton = document.getElementById("guess-button");
    guessButton.addEventListener("click", checkGuess);
}

function leerIntento() {
    return document.getElementById("guess-input").value.toLowerCase();
}

function checkGuess() {
    const INTENTO = leerIntento();

    if (INTENTO === palabraSecreta) {
        terminar("<h1>¡GANASTE!😀</h1>");
        return;
    }

    if (intentos === 0) {
        terminar("<h1>¡PERDISTE!😖</h1>");
        return;
    }

    const feedbackElement = document.getElementById("feedback");

    for (let i in palabraSecreta) {
        const SPAN = document.createElement('span');
        SPAN.className = 'letter';

        if (INTENTO[i] === palabraSecreta[i]) { //VERDE
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = '#79b851'; // Verde
        } else if (palabraSecreta.includes(INTENTO[i])) { //AMARILLO
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = '#f3c237'; // Amarillo
        } else { //GRIS
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = '#a4aec4'; // Gris
        }

        feedbackElement.appendChild(SPAN);
    }

    intentos--;

    if (intentos === 0) {
        terminar("<h1>¡PERDISTE!😖</h1>");
    }
}

function terminar(mensaje) {
    const INPUT = document.getElementById("guess-input");
    const BOTON = document.getElementById("guess-button");

    INPUT.disabled = true;
    BOTON.disabled = true;

    let contenedor = document.getElementById('guesses');
    contenedor.innerHTML = mensaje;
}

