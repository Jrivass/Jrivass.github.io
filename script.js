// Función que determina el número mayor entre tres números
function cualEsMayor(num1, num2, num3) {
    return Math.max(num1, num2, num3);
}

// Agregar la función al objeto global (window) para que pueda ser utilizada en la consola
window.cualEsMayor = cualEsMayor;

// Controlador de eventos de carga del documento
document.addEventListener("DOMContentLoaded", function() {
    // Obtener elementos HTML después de que se haya cargado el documento
    var num1Input = document.getElementById("num1");
    var num2Input = document.getElementById("num2");
    var num3Input = document.getElementById("num3");
    var resultadoParrafo = document.getElementById("resultado");
    var calcularButton = document.getElementById("calcular");

    // Verificar si los elementos existen antes de agregar eventos
    if (num1Input && num2Input && num3Input && resultadoParrafo && calcularButton) {
        // Esta función se llama cuando se hace clic en el botón "Calcular Mayor"
        calcularButton.addEventListener("click", function() {
            // Obtener los valores ingresados por el usuario
            var num1 = parseFloat(num1Input.value);
            var num2 = parseFloat(num2Input.value);
            var num3 = parseFloat(num3Input.value);

            // Validar que se ingresaron números válidos
            if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
                alert("Por favor, ingresa tres números válidos.");
                return;
            }

            // Llamar a la función para determinar el número mayor
            var mayor = cualEsMayor(num1, num2, num3);

            // Mostrar el resultado en el párrafo
            resultadoParrafo.textContent = "El número más grande es: " + mayor;
        });
    }
});