const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

// Obteniendo control del botón por su id
const btn = document.getElementById("btn");

// Obteniendo control del span que muestra el color actual
const color = document.querySelector(".color");

// Agregando el evento de clic al botón
btn.addEventListener("click", () => {
  // Generando un número aleatorio entre 0 y el tamaño del arreglo de colores
  const randomNumber = getRandomNumber();

  // Obteniendo el color seleccionado del arreglo
  const colorPicked = colors[randomNumber];

  // Cambiando el color de fondo del body
  document.body.style.backgroundColor = colorPicked;

  // Cambiando el texto del span para mostrar el color seleccionado
  color.textContent = colorPicked;
});

// Función para obtener un número aleatorio entre 0 y el tamaño del arreglo
function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}

