let jogador = '<img src = "/images/lula.jpg">'


function checkWinner() {
  let elements = document.getElementById("container").children;
  if (
    elements[0].innerHTML === elements[1].innerHTML &&
    elements[1].innerHTML === elements[2].innerHTML &&
    elements[2].innerHTML.length !== 0
  ) {
    elements[0].style = "filter: contrast(150%)";
    elements[1].style = "filter: contrast(150%)";
    elements[2].style = "filter: contrast(150%)";
    return true;
  } else if (
    elements[3].innerHTML === elements[4].innerHTML &&
    elements[4].innerHTML === elements[5].innerHTML &&
    elements[5].innerHTML.length !== 0
  ) {
    elements[3].style = "filter: contrast(150%)";
    elements[4].style = "filter: contrast(150%)";
    elements[5].style = "filter: contrast(150%)";
    return true;
  } else if (
    elements[6].innerHTML === elements[7].innerHTML &&
    elements[7].innerHTML === elements[8].innerHTML &&
    elements[8].innerHTML.length !== 0
  ) {
    elements[6].style = "filter: contrast(150%)";
    elements[7].style = "filter: contrast(150%)";
    elements[8].style = "filter: contrast(150%)";
    return true;
  } else if (
    elements[0].innerHTML === elements[3].innerHTML &&
    elements[3].innerHTML === elements[6].innerHTML &&
    elements[6].innerHTML.length !== 0
  ) {
    elements[0].style = "filter: contrast(150%)";
    elements[3].style = "filter: contrast(150%)";
    elements[6].style = "filter: contrast(150%)";
    return true;
  } else if (
    elements[1].innerHTML === elements[4].innerHTML &&
    elements[4].innerHTML === elements[7].innerHTML &&
    elements[7].innerHTML.length !== 0
  ) {
    elements[1].style = "filter: contrast(150%)";
    elements[4].style = "filter: contrast(150%)";
    elements[7].style = "filter: contrast(150%)";
    return true;
  } else if (
    elements[2].innerHTML === elements[5].innerHTML &&
    elements[5].innerHTML === elements[8].innerHTML &&
    elements[8].innerHTML.length !== 0
  ) {
    elements[2].style = "filter: contrast(150%)";
    elements[5].style = "filter: contrast(150%)";
    elements[8].style = "filter: contrast(150%)";
    return true;
  } else if (
    elements[0].innerHTML === elements[4].innerHTML &&
    elements[4].innerHTML === elements[8].innerHTML &&
    elements[8].innerHTML.length !== 0
  ) {
    elements[0].style = "filter: contrast(150%)";
    elements[4].style = "filter: contrast(150%)";
    elements[8].style = "filter: contrast(150%)";
    return true;
  } else if (
    elements[2].innerHTML === elements[4].innerHTML &&
    elements[4].innerHTML === elements[6].innerHTML &&
    elements[6].innerHTML.length !== 0
  ) {
    elements[2].style = "filter: contrast(150%)";
    elements[4].style = "filter: contrast(150%)";
    elements[6].style = "filter: contrast(150%)";
    return true;
  }
  return false;
}

function checkGameOver() {
  let elements = document.getElementById("container").children;
  let gameOver = true;
  for(let indice = 0; indice < elements.length; indice++) {
    if(elements[indice].innerHTML.length === 0) {
      gameOver = false;
    }
  }
  return gameOver;
}

let winner = false;
let gameOver = false;

function mark(element) {
  if (!winner && !gameOver) {
    if (element.innerHTML.length === 0) {
      element.innerHTML = jogador;

      winner = checkWinner();
      if (winner) {
        document.getElementById("messages").innerHTML = "Vencedor: " + jogador;
        document.getElementById("containerMsgs").style = "background-color: yellow";
        document.getElementById("messages").style = "padding: 60px";
        document.getElementById("button").style.visibility = "visible";
      } else {
        

        if (!winner)
        document.getElementById("messages").innerText = "Ainda não há ganhadores!";
        document.getElementById("messages").style = "padding: 60px";
      document.getElementById("button").style.visibility = "visible";



        gameOver = checkGameOver();

        
        if(gameOver) {
          document.getElementById("messages").innerText = "Fim de jogo!";

 
          
          document.getElementById("c0").innerHTML = '';
          document.getElementById("c0").style = "background-color: black";
          document.getElementById("c1").innerHTML = '';
          document.getElementById("c1").style = "background-color: black";
          document.getElementById("c2").innerHTML = '';
          document.getElementById("c2").style = "background-color: black";
          document.getElementById("c3").innerHTML = '';
          document.getElementById("c3").style = "background-color: black";
          document.getElementById("c4").innerHTML = '';
          document.getElementById("c4").style = "background-color: black";
          document.getElementById("c5").innerHTML = '';
          document.getElementById("c5").style = "background-color: black";
          document.getElementById("c6").innerHTML = '';
          document.getElementById("c6").style = "background-color: black";
          document.getElementById("c7").innerHTML = '';
          document.getElementById("c7").style = "background-color: black";
          document.getElementById("c8").innerHTML = '';
          document.getElementById("c8").style = "background-color: black";
          document.getElementById("containerMsgs").style = "background-color: yellow";
          document.getElementById("messages").style = "padding: 60px";
          document.getElementById("button").style.visibility = "visible";
          return;
        }
      

      }
      if (jogador === '<img src = "/images/lula.jpg">') {
        jogador = '<img src = "/images/bozo.jpg">';
      } else {
        jogador = '<img src = "/images/lula.jpg">';
      }

      


    } else {
      alert("Elemento já preenchido");
    }
  }
}
