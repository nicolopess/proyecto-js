//Piedra papel o tijera

const opciones = ["piedra", "papel", "tijera"];
const playerdisplay = document.getElementById("playerdisplay");
const robotdisplay = document.getElementById("robotdisplay");
const resultadodisplay = document.getElementById("resultadodisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const ComputerScoreDisplay = document.getElementById("ComputerScoreDisplay");

function playgame(jugadoropcion) {
  const robotopcion = opciones[Math.floor(Math.random() * 3)];
  let result = "";

  if (jugadoropcion === robotopcion) {
    result = "ES UN EMPATE";
  } else {
    switch (jugadoropcion) {
      case "piedra":
        result = robotopcion === "tijera" ? "GANASTE!!" : "HAS PERDIDO";
        break;
      case "papel":
        result = robotopcion === "piedra" ? "GANASTE!!" : "HAS PERDIDO";
        break;
      case "tijera":
        result = robotopcion === "papel" ? "GANASTE!!" : "HAS PERDIDO";
        break;
    }
  }

  playerdisplay.textContent = `Tú: ${jugadoropcion}`;
  robotdisplay.textContent = `Mr. Robot: ${robotopcion}`;
  resultadodisplay.textContent = result;


}