// Palabras para el juego (puedes agregar más palabras)
const words = ["apple", "banana", "cherry", "grape", "lemon"];

// Palabra secreta aleatoria
const secretWord = words[Math.floor(Math.random() * words.length)];

// Intentos restantes
let attempts = 6;

// Letras usadas
const usedLetters = [];

// Elementos del DOM
const attemptsElement = document.getElementById("attempts");
const secretWordElement = document.getElementById("secret-word");
const guessElement = document.getElementById("guess");
const feedbackElement = document.getElementById("feedback");
const usedLettersElement = document.getElementById("used-letters");

// Inicializar la palabra secreta en el DOM
secretWordElement.textContent = secretWord;

function checkGuess() {
    const guess = guessElement.value.toLowerCase();
    
    // Verificar si la adivinanza es correcta
    if (guess === secretWord) {
        feedbackElement.textContent = "¡Ganaste!";
        feedbackElement.classList.add("correct");
        guessElement.disabled = true;
    } else {
        // Comparar cada letra en la adivinanza
        let feedback = "";
        for (let i = 0; i < secretWord.length; i++) {
            const letter = secretWord[i];
            if (guess.includes(letter)) {
                if (guess[i] === letter) {
                    feedback += `<span class="correct">${letter}</span>`;
                } else {
                    feedback += `<span class="incorrect-position">${letter}</span>`;
                }
            } else {
                feedback += `<span class="incorrect">${guess[i]}</span>`;
            }
        }

        // Mostrar el feedback
        feedbackElement.innerHTML = feedback;
    }

    // Actualizar letras usadas
    usedLetters.push(guess);
    usedLettersElement.textContent = `Letras usadas: ${usedLetters.join(", ")}`;

    // Reducir los intentos restantes
    attempts--;
    attemptsElement.textContent = attempts;

    // Verificar si se agotaron los intentos
    if (attempts === 0) {
        feedbackElement.textContent = `¡Perdiste! La palabra secreta era "${secretWord}".`;
        feedbackElement.classList.add("incorrect");
        guessElement.disabled = true;
    }
}
