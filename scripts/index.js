let jogador = "X";



function checkWinner() {
  let elements = document.getElementById("container").children;
  if (
    elements[0].innerText === elements[1].innerText &&
    elements[1].innerText === elements[2].innerText &&
    elements[2].innerText.length !== 0
  ) {
    elements[0].style="background-color: yellow;";
    elements[1].style="background-color: yellow;";
    elements[2].style="background-color: yellow;";
    return true;
  } else if (
    elements[3].innerText === elements[4].innerText &&
    elements[4].innerText === elements[5].innerText &&
    elements[5].innerText.length !== 0
  ) {
    elements[3].style="background-color: yellow;";
    elements[4].style="background-color: yellow;";
    elements[5].style="background-color: yellow;";
    return true;
  } else if (
    elements[6].innerText === elements[7].innerText &&
    elements[7].innerText === elements[8].innerText &&
    elements[8].innerText.length !== 0
  ) {
    elements[6].style="background-color: yellow;";
    elements[7].style="background-color: yellow;";
    elements[8].style="background-color: yellow;";
    return true;
  } else if (
    elements[0].innerText === elements[3].innerText &&
    elements[3].innerText === elements[6].innerText &&
    elements[6].innerText.length !== 0
  ) {
    elements[0].style="background-color: yellow;";
    elements[3].style="background-color: yellow;";
    elements[6].style="background-color: yellow;";
    return true;
  } else if (
    elements[1].innerText === elements[4].innerText &&
    elements[4].innerText === elements[7].innerText &&
    elements[7].innerText.length !== 0
  ) {
    elements[1].style="background-color: yellow;";
    elements[4].style="background-color: yellow;";
    elements[7].style="background-color: yellow;";
    return true;
  } else if (
    elements[2].innerText === elements[5].innerText &&
    elements[5].innerText === elements[8].innerText &&
    elements[8].innerText.length !== 0
  ) {
    elements[2].style="background-color: yellow;";
    elements[5].style="background-color: yellow;";
    elements[8].style="background-color: yellow;";
    return true;
  } else if (
    elements[0].innerText === elements[4].innerText &&
    elements[4].innerText === elements[8].innerText &&
    elements[8].innerText.length !== 0
  ) {
    elements[0].style="background-color: yellow;";
    elements[4].style="background-color: yellow;";
    elements[8].style="background-color: yellow;";
    return true;
  } else if (
    elements[2].innerText === elements[4].innerText &&
    elements[4].innerText === elements[6].innerText &&
    elements[6].innerText.length !== 0
  ) {
    elements[2].style="background-color: yellow;";
    elements[4].style="background-color: yellow;";
    elements[6].style="background-color: yellow;";
    return true;
  }
  return false;
}


let winner = false;


function mark(element) {
  if (!winner) {
    if (element.innerText.length === 0) {
      element.innerText = jogador;
      
      winner = checkWinner();
      if (winner) {
        document.getElementById("messages").innerText = "Vencedor: " + jogador;
        document.getElementById("messages").style="background-color: yellow"
        document.getElementById("button").style.visibility = "visible";


      } 
      if (jogador === "X") {
        jogador = "O";
      } else {
        jogador = "X";
      } 

      if (jogador === "X" && "O")
      document.getElementById("messages").innerText = "Não há ganhadores"
      document.getElementById("button").style.visibility = "visible";

    } else {
      alert("Elemento já preenchido");
    }
  }
}

