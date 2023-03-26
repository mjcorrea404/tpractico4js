function juego() {
    
    let usuario = prompt("¿Piedra, papel o tijera?");
    usuario = usuario.toLowerCase();
    
    
    let computadora = Math.random();
    if (computadora < 0.34) {
      computadora = "piedra";
    } else if(computadora <= 0.67) {
      computadora = "papel";
    } else {
      computadora = "tijera";
    }
    
    
    console.log("Usuario: " + usuario);
    console.log("Computadora: " + computadora);
    
    
    let resultado = "";
    if (usuario === computadora) {
      resultado = "Empate!";
    } else if (usuario === "piedra") {
      if (computadora === "tijera") {
        resultado = "Ganaste!";
      } else {
        resultado = "Perdiste!";
      }
    } else if (usuario === "papel") {
      if (computadora === "piedra") {
        resultado = "Ganaste!";
      } else {
        resultado = "Perdiste!";
      }
    } else if (usuario === "tijera") {
      if (computadora === "papel") {
        resultado = "Ganaste!";
      } else {
        resultado = "Perdiste!";
      }
    } else {
      resultado = "Movimiento inválido";
    }
    
    
    console.log(resultado);
    
    
    let jugarOtraVez = confirm("¿Quieres jugar otra vez?");
    if (jugarOtraVez) {
      juego();
    }
  }
  
  juego(); 
  