//Variaveis da Bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 13;
let raio = diametro / 2;

//Variaveis da Velocidade da Bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//Variaveis da Minha Raquete
let xRaquete = 10;
let yRaquete = 150;
let wRaquete = 10;
let hRaquete = 80;
let colidiu = false;

//Variaveis da Raquete do Oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;
// singleplayer
//let chanceDeErrar = 0;

//placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;

//sons do jogo
let raquetada;
let ponto;
let trilha;

function preload() {
  trilha = loadSound("trilha.mp3")
  ponto = loadSound("ponto.mp3")
  raquetada = loadSound("raquetada.mp3")
}

function setup() {
  createCanvas(600, 400);
  trilha.loop()
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  tocaBorda();
  mostraRaquete(xRaquete, yRaquete);
  movimentaMinhaRaquete();
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente();
  colisaoRaquete(xRaquete, yRaquete)
  colisaoRaquete(xRaqueteOponente, yRaqueteOponente)
  incluiPlacar();
  marcaPonto();
  
}

function mostraBolinha() {
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha() {
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function tocaBorda() {
  if (xBolinha + raio > width || xBolinha - raio < 0) {
    velocidadeXBolinha *= -1
  } if(yBolinha + raio > height || yBolinha -raio < 0) {
    velocidadeYBolinha *= -1
  }
  
}

function mostraRaquete(x, y) {
  rect(x, y, wRaquete, hRaquete);
}

function movimentaMinhaRaquete() {
  if (keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;
  }
}

function colisaoRaquete(x, y) {
  colidiu =
  collideRectCircle(x, y, wRaquete, hRaquete, xBolinha, yBolinha, raio);
  if(colidiu){
    velocidadeXBolinha *= -1
    raquetada.play()
  }
  
}

function bolinhaNaoFicaPresa(){
    if (XBolinha - raio < 0){
    XBolinha = 23
    }
}


function movimentaRaqueteOponente() {
 if (keyIsDown(87)) {
   yRaqueteOponente -= 10
 }
 if (keyIsDown(83))
   yRaqueteOponente += 10
}
/*singleplayer
function movimentaRaqueteOponente(){
  velocidadeYOponente = yBolinha -yRaqueteOponente - raqueteComprimento / 2 - 30;
  yRaqueteOponente += velocidadeYOponente + chanceDeErrar
  calculaChanceDeErrar()
}
function calculaChanceDeErrar() {
  if (pontosDoOponente >= meusPontos) {
    chanceDeErrar += 1
    if (chanceDeErrar >= 39){
    chanceDeErrar = 40
    }
  } else {
    chanceDeErrar -= 1
    if (chanceDeErrar <= 35){
    chanceDeErrar = 35
    }
  }
}
*/
function incluiPlacar() {
    stroke(255);
    textAlign(CENTER);
    textSize(16);
    fill(color(255, 140, 0))
    rect(150, 10, 40, 20)
    fill(255)
    text(meusPontos, 170, 26);
    fill(color(255, 140, 0))
    rect(450, 10, 40, 20)
    fill(255);
    text(pontosDoOponente, 470, 26);
    
}

function marcaPonto() {
    if (xBolinha > 590) {
        meusPontos += 1;
      ponto.play()
    }
    if (xBolinha < 10) {
        pontosDoOponente += 1;
      ponto.play()
    }
}