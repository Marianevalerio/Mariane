// Let const var 
let xbolinha =300; // Padrão camelCase 
let ybolinha = 200;
let diametro = 25;
let raio = diametro / 2 ;
let velocidadeXbolinha = 2;
let velocidadeYbolinha = 3;

// Variáveis da raquete 
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90; 

// Váriaveis da raquete do oponente 
let xRaqueteOponente = 585;
let yRaqueteOponente = 150; 

// Pontuação 
let meusPontos =0; 
let pontosOponente = 0; 

function setup() {
  createCanvas(600, 400);
  console.log("iniciou o setup")
}

 function draw() {
  background(0); 
  mostraBolinha(); // Chamando a função mostra bolinha
  movimentabolinha();
  verificaColisaoBorda();
  mostraRaquete();
  movimentaRaquete();
  verificaColisaoRaquete();
  mostraRaqueteOponente();
  movimentaRaqueteOponente();
  verificaColisaoRaqueteOponente();
  incluirPlacar();
  marcaPontos();
  movimentaRaqueteOponenteCimaBaixo();
 }

// Cria a função mostraBolinha
function mostraBolinha (){}
 circle(xBolinha,yBolinha,diametro);{
}
 
function movimentabolinha() {
 xbolinha += velocidadeXbolinha;  
 ybolinha += velocidadeYbolinha; 
}

function verificaColisaoBorda(){}
if (xbolinha > width ||xBolinha < 0){
   velocidadeXBolinha *= -1;
  }
   
 if (ybolinha + raio> height || yBolinha - raio < 0){
   velocidadeYBolinha *= -1;  
  
 }   

function mostraRaquete() { 
 rect(xRaquete, yRaquete, raqueteComprimento,raqueteAltura);
}

function movimentoRaquete()  {
 if (keyIsDown(UP_ARROWp_)) {
     yRaquete -= 10; 
 }
  if (keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;
  }
}

function verificaColisaoRaquete() {
  if (
    xBolinha - raio < xRaquete + raqueteComprimento &&
    yBolinha - raio < yRaqueteAltura &&
    yBolinha + raio > yRaquete 
) {
    velocidadeXbolinha *= -1;
  }
}

function mostraRaqueteOponente() {
  rect(xRaqueteOponente, yRaqueteOponente,raqueteComprimento, raqueteAltura);
 }

function movimentaRaqueteOponente() { 
  velocidadeYOponetente = yBolinha - yRaqueteOponente - raqueteAltura / 2; 
  yRaqueteOponente += velocidadeYOponente; 
 }

function verificaColisaoRaqueteOponente() {
  colidiu = collideRectCircle( 
    xRaqueteOponente,
    yRaqueteOponente,
    raqueteComprimento,
    raqueteAltura,
    xBolinha,
    yBolinha,
    raio
 );
  if(colidiu) {
    velocidadeXbolinha *= -1;
  }
}

 function incluirPlacar(){
 fill("white");
 textSize(32)
 text(meusPontos, width * 0.35,25);
 text(pontosOponente,width * 0.65,25);
 }

function marcaPontos(){
 if (xBolinha > 590){
  meusPontos++;
 }

 if(xBolinha < 10){
   pontosOponente++;
  }
} 

 function movimentaRaqueteOponenteCimaBaixo(){
  if (keyIsDown (104)){
    yRaqueteOponente -=10;
  }
  if (keyIsDown (98)){
      yRaquetOponente +=10;
  }
 }