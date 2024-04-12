//Piedra papel o tijera

const opciones = ["piedra", "papel", "tijera"];
const playerdisplay = document.getElementById("playerdisplay");
const robotdisplay = document.getElementById("robotdisplay");
const resultadodisplay = document.getElementById("resultadodisplay");

function playgame(jugadoropcion){

const robotopcion = opciones[Math.floor(Math.random() * 3)];
let result = "";

if(jugadoropcion === robotopcion){
result = "Es un empate!";
}

else{

switch(jugadoropcion){
    case "piedra":
    result = (robotopcion === "tijera") ? "GANASTE!!" : "PERDISTE";
    break;
    case "papel":
    result = (robotopcion === "piedra") ? "GANASTE!!" : "PERDISTE";
    break;
    case "tijera":
    result = (robotopcion === "papel") ? "GANASTE!!" : "PERDISTE";
    break;

}

}

playerdisplay.textContent = 'JUGADOR: ${jugadoropcion}';
robotdisplay.textContent = 'MR.ROBOT: ${robotopcion}}';
resultadodisplay.textContent = result;

}

