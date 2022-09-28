let jogador = '<img src = "/images/lula.jpg">'


function checkWinner() {
  let elements = document.getElementById("container").children;
  if (
    elements[0].innerHTML === elements[1].innerHTML &&
    elements[1].innerHTML === elements[2].innerHTML &&
    elements[2].innerHTML.length !== 0
  ) {
    elements[0].style = "background-color: yellow;";
    elements[1].style = "background-color: yellow;";
    elements[2].style = "background-color: yellow;";
    return true;
  } else if (
    elements[3].innerHTML === elements[4].innerHTML &&
    elements[4].innerHTML === elements[5].innerHTML &&
    elements[5].innerHTML.length !== 0
  ) {
    elements[3].style = "background-color: yellow;";
    elements[4].style = "background-color: yellow;";
    elements[5].style = "background-color: yellow;";
    return true;
  } else if (
    elements[6].innerHTML === elements[7].innerHTML &&
    elements[7].innerHTML === elements[8].innerHTML &&
    elements[8].innerHTML.length !== 0
  ) {
    elements[6].style = "background-color: yellow;";
    elements[7].style = "background-color: yellow;";
    elements[8].style = "background-color: yellow;";
    return true;
  } else if (
    elements[0].innerHTML === elements[3].innerHTML &&
    elements[3].innerHTML === elements[6].innerHTML &&
    elements[6].innerHTML.length !== 0
  ) {
    elements[0].style = "background-color: yellow;";
    elements[3].style = "background-color: yellow;";
    elements[6].style = "background-color: yellow;";
    return true;
  } else if (
    elements[1].innerHTML === elements[4].innerHTML &&
    elements[4].innerHTML === elements[7].innerHTML &&
    elements[7].innerHTML.length !== 0
  ) {
    elements[1].style = "background-color: yellow;";
    elements[4].style = "background-color: yellow;";
    elements[7].style = "background-color: yellow;";
    return true;
  } else if (
    elements[2].innerHTML === elements[5].innerHTML &&
    elements[5].innerHTML === elements[8].innerHTML &&
    elements[8].innerHTML.length !== 0
  ) {
    elements[2].style = "background-color: yellow;";
    elements[5].style = "background-color: yellow;";
    elements[8].style = "background-color: yellow;";
    return true;
  } else if (
    elements[0].innerHTML === elements[4].innerHTML &&
    elements[4].innerHTML === elements[8].innerHTML &&
    elements[8].innerHTML.length !== 0
  ) {
    elements[0].style = "background-color: yellow;";
    elements[4].style = "background-color: yellow;";
    elements[8].style = "background-color: yellow;";
    return true;
  } else if (
    elements[2].innerHTML === elements[4].innerHTML &&
    elements[4].innerHTML === elements[6].innerHTML &&
    elements[6].innerHTML.length !== 0
  ) {
    elements[2].style = "background-color: yellow;";
    elements[4].style = "background-color: yellow;";
    elements[6].style = "background-color: yellow;";
    return true;
  }
  return false;
}


let winner = false;


function mark(element) {
  if (!winner) {
    if (element.innerHTML.length === 0) {
      element.innerHTML = jogador;

      winner = checkWinner();
      if (winner) {
        document.getElementById("messages").innerHTML = "Vencedor: " + jogador;
        document.getElementById("containerMsgs").style = "background-color: yellow";
        document.getElementById("messages").style = "padding: 60px";
        document.getElementById("button").style.visibility = "visible";


      }
      if (jogador === '<img src = "/images/lula.jpg">') {
        jogador = '<img src = "/images/bozo.jpg">';
      } else {
        jogador = '<img src = "/images/lula.jpg">';
      }

      if (!winner)
        document.getElementById("messages").innerText = "Não há ganhadores!";
        document.getElementById("messages").style = "padding: 60px";
      document.getElementById("button").style.visibility = "visible";


    } else {
      alert("Elemento já preenchido");
    }
  }
}
