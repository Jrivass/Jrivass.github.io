let intentos = 6;
let diccionario = ['APPLE', 'HURLS', 'WINGS', 'YOUTH'];
let palabra = diccionario[Math.floor(Math.random() * diccionario.length)];

window.addEventListener('load', init);

function init() {
  const button = document.getElementById("guess-button");
  button.addEventListener("click", intentar);
  const resetButton = document.getElementById("reset-button");
  resetButton.addEventListener("click", reiniciarJuego);

  // Activar los botones al presionar "Enter"
  const input = document.getElementById("guess-input");
  input.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
      if (input.disabled) {
        reiniciarJuego();
      } else {
        intentar();
      }
    }
  });
}

function leerIntento() {
  let intento = document.getElementById("guess-input");
  intento = intento.value.toUpperCase();
  return intento;
}

function terminar(mensaje, ganaste) {
    const INPUT = document.getElementById("guess-input");
    INPUT.disabled = true;
    const BOTON = document.getElementById("guess-button");
    BOTON.disabled = true;
  
    let contenedor = document.getElementById('guesses');
    contenedor.innerHTML = mensaje;
  
    const reiniciarBoton = document.createElement('button');
    reiniciarBoton.innerHTML = 'Reiniciar';
    reiniciarBoton.id = 'reiniciar-button';
    reiniciarBoton.addEventListener('click', function() {
      location.reload(); // Recarga la página al hacer clic en el botón de reinicio
    });
    contenedor.appendChild(reiniciarBoton);
  
    // Escuchar el evento keydown en el documento
    document.addEventListener('keydown', function(event) {
      if (event.key === 'Enter' && event.target === reiniciarBoton) {
        location.reload(); // Recarga la página cuando se presiona Enter en el botón de reinicio
      }
    });
  }
  
  

function reiniciarJuego() {
    intentos = 6;
    palabra = diccionario[Math.floor(Math.random() * diccionario.length)];
  
    const contenedor = document.getElementById('guesses');
    contenedor.innerHTML = '';
  
    const INPUT = document.getElementById("guess-input");
    INPUT.disabled = false;
    INPUT.value = ''; // Esto limpia el campo de entrada
  
    const BOTON = document.getElementById("guess-button");
    BOTON.disabled = false;
  
    const reiniciarBoton = document.getElementById('reset-button');
    reiniciarBoton.style.display = 'none';
  }
  
  function intentar() {
    const INTENTO = leerIntento();
    if (INTENTO === palabra) {
      terminar("<h1>¡GANASTE! 😀</h1>");
      return;
    }
  
    const GRID = document.getElementById("grid");
    const ROW = document.createElement('div');
    ROW.className = 'row';
  
    for (let i in palabra) {
      const SPAN = document.createElement('span');
      SPAN.className = 'letter';
      if (INTENTO[i] === palabra[i]) {
        SPAN.innerHTML = INTENTO[i];
        SPAN.style.backgroundColor = '#79b851'; // Verde
      } else if (palabra.includes(INTENTO[i])) {
        SPAN.innerHTML = INTENTO[i];
        SPAN.style.backgroundColor = '#f3c237'; // Amarillo
      } else {
        SPAN.innerHTML = INTENTO[i];
        SPAN.style.backgroundColor = '#a4aec4'; // Gris
      }
      ROW.appendChild(SPAN);
    }
    GRID.appendChild(ROW);
  
    intentos--;
  
    // Limpia el campo de entrada
    const INPUT = document.getElementById("guess-input");
    INPUT.value = '';
  
    if (intentos === 0) {
      terminar("<h1>¡PERDISTE! 😖</h1>");
    }
  }
  
