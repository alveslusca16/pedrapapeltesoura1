const tela = document.getElementById('inicio');
const nomes = document.getElementById('nomes');
function iniciar(){
    tela.style.display= "none";
    nomes.style.display= "flex";
}

const jgdr1 = document.getElementById('nome1');
const jgdr2 = document.getElementById('nome2');
const principal = document.getElementById('principal')
function coletarNomeJogadores(){
    nomes.style.display = 'none';
    principal.style.display='block';
    document.getElementById('jgdr1').innerHTML = `${jgdr1.value}`;
    document.getElementById('jgdr2').innerHTML = `${jgdr2.value}`;
}

const pedraPapelTesoura1 = document.getElementById('PPT1');
const pedraPapelTesoura2 = document.getElementById('PPT2');
const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');

const win1 = document.querySelector('#win1');
const win2 = document.querySelector('#win2');

var aleatorio;
var aleatorio2;
var pontosJgd1 = 0;
var pontosJgd2 = 0;

function escolhaAleatoria1(){
    aleatorio = Math.floor(Math.random() * 3 + 1); 
    if (aleatorio === 1) {
        img1.innerHTML = `<img id="img1" src="images/p1.png" alt="">`;
        pedraPapelTesoura1.innerText=`PEDRA`;
    }
    if (aleatorio === 2) {
        img1.innerHTML = `<img id="img1" src="images/p2.png" alt="">`;
        pedraPapelTesoura1.innerText =`PAPEL`;
    }
    if (aleatorio === 3) {
        img1.innerHTML = `<img id="img1" src="images/p3.png" alt="">`;
        pedraPapelTesoura1.innerText= `TESOURA`;
    }

    console.log(aleatorio)
}



function escolhaAleatoria2(){
    aleatorio2 = Math.floor(Math.random() * 3 + 1);
    if (aleatorio2 === 1) {
        img2.innerHTML = `<img id="img2" src="images/p1.png" alt="">`;
        pedraPapelTesoura2.innerText=`PEDRA`;
    }
    if (aleatorio2 === 2) {
        img2.innerHTML = `<img id="img2" src="images/p2.png" alt="">`;
        pedraPapelTesoura2.innerText =`PAPEL`;
    }
    if (aleatorio2 === 3) {
        img2.innerHTML = `<img id="img2" src="images/p3.png" alt="">`;
        pedraPapelTesoura2.innerText= `TESOURA`;
    }

    console.log(aleatorio2)

    if (aleatorio === aleatorio2) {
        setTimeout(function() {
            alert("Houve um empate!");
          }, 500);
    }
    
    if (aleatorio === 1 && aleatorio2 === 2) {
        setTimeout(function() {
            alert("O jogador 2 ganhou!");
            win2.innerHTML = `${parseInt(win2.innerText) + parseInt(1)}`;
          }, 500);
        pontosJgd2++;
    } 
    
    if (aleatorio === 2 && aleatorio2 === 1) {
        setTimeout(function() {
            alert("O jogador 1 ganhou!");
            win1.innerHTML = `${parseInt(win1.innerText) + parseInt(1)}`;
          }, 500);
          pontosJgd1++;
    } 
    
    if (aleatorio === 3 && aleatorio2 === 2) {
        setTimeout(function() {
            alert("O jogador 1 ganhou!");
            win1.innerHTML = `${parseInt(win1.innerText) + parseInt(1)}`;
          }, 500);
          pontosJgd1++;
    } 
    
    if (aleatorio === 2 && aleatorio2 === 3) {
        setTimeout(function() {
            alert("O jogador 2 ganhou!");
            win2.innerHTML = `${parseInt(win2.innerText) + parseInt(1)}`;
          }, 500);
          pontosJgd2++;
    }
    
    if (aleatorio === 3 && aleatorio2 === 1) {
        setTimeout(function() {
            alert("O jogador 2 ganhou!");
            win2.innerHTML = `${parseInt(win2.innerText) + parseInt(1)}`;
          }, 500);
          pontosJgd2++;
    }
    
    if (aleatorio === 1 && aleatorio2 === 3) {
        setTimeout(function() {
            alert("O jogador 1 ganhou!");
            win1.innerHTML = `${parseInt(win1.innerText) + parseInt(1)}`;
          }, 500);
          pontosJgd1++;
    }

    if (pontosJgd1 === 5) {
        setTimeout(function() {
            alert("O jogador 1 foi campeão!");
          }, 2000);
    }

    if (pontosJgd2 === 5) {
        setTimeout(function() {
            alert("O jogador 2 foi campeão!");
          }, 2000);
    }
}


function reiniciar() {
    principal.style.display = 'none';
    nomes.style.display = 'flex';
    pontosJgd1 = 0;
    pontosJgd2 = 0;

    win1.innerHTML = `${parseInt(0)}`;
    win2.innerHTML = `${parseInt(0)}`;

    img1.innerHTML = `<img id="img1" src="images/interrogacao.png" alt="">`;
    pedraPapelTesoura1.innerText =`???`;

    img2.innerHTML = `<img id="img2" src="images/interrogacao.png" alt="">`;
    pedraPapelTesoura2.innerText =`???`;
}
