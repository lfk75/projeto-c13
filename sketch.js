var fundo;
var fundoimg;
var arco;
var arcoimg;
var balon;
var flecha;
var skin;
var skin2;
var skin3;
var skin4;
var tiro;

var grupoBaloes = new Group();
function preload(){
  fundoimg = loadImage("background0.png");
 
  arcoimg = loadImage("bow0.png");
 
  tiro = loadImage("arrow0.png")

  skin = loadImage("blue_balloon0.png");
  skin2 = loadImage("green_balloon0.png");
  skin3 = loadImage("pink_balloon0.png");
  skin4 = loadImage("red_balloon0.png");
}



function setup() {
  createCanvas(400, 400);
  //criando fundo
 fundo = createSprite(200,200,1,1);
 fundo.addImage("campo" , fundoimg);


  // criando arco para atirar flecha
  arco = createSprite(380,200,10,10);
  arco.addImage("shot" , arcoimg);
  
   
}

function draw() {
 background(0);
  
  
  
  //movendo arco
  arco.y = World.mouseY
  



   // soltar flecha quando barra de espaço é pressionada
  if (keyDown("SPACE")) {
  flechada();

  }
    
  //balao estora quando flecha tocar ERRO
  //if (flecha.isTouching(grupoBaloes)) {
  //grupoBaloes.destroy();}
  



  if (frameCount % 60 === 0) { 
  gerarbaloes();
  }
   
  
  
  drawSprites();
}


 //gerando baloes
 function gerarbaloes() {
  balon = createSprite(200,410,10,10);
  balon.x = Math.round(random(10,360));
  balon.velocityY = -3
  balon.lifetime = 140;
  var aleatorio = Math.round(random(1,4))
  switch(aleatorio){
  case 1:balon.addImage("blue" , skin);
  balon.scale = 0.1;
  break;

  case 2:balon.addImage("green" , skin2);
  balon.scale = 0.1;
  break;

  case 3:balon.addImage("pink" , skin3);
  break;

  case 4:balon.addImage("red" , skin4);
  balon.scale = 0.1;
  break;
  default:break;
  }


}


 function flechada() {
  flecha = createSprite(380,200,10,10);
  flecha.addImage("flech" , tiro);
  flecha.y = arco.y
  flecha.scale = 0.2
  flecha .velocityX = -4
  flecha.lifetime = 100;
  }



