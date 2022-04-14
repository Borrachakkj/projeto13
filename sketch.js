var garden,rabbit;
var gardenImg,rabbitImg;
var maca;
var macaImg;
var folhaLaranja;
var folhaLaranjaImg;
var folhaVermelha;
var folhaVermelhaImg;
var selectSprites;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  macaImg = loadImage("apple.png");
  folhaLaranjaImg = loadImage("orangeLeaf.png");
  folhaVermelhaImg = loadImage("redImage.png"); 
}

function setup(){
  
  createCanvas(400,400);
  
// mover o fundo
garden=createSprite(200,200);
garden.addImage(gardenImg);

//criar sprite do coelho
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);


  edges= createEdgeSprites();
  rabbit.collide(edges);

  selectSprites=Math.round(random(1,3));
  if(frameCount % 80==2){
    if(selectSprites==1){
      criarMaçãs();
    }
    else if(selectSprites==2){
      criarFolhasLaranjas();
    }
    else{
      criarFolhasVermelhas();
    }
  }
  
  rabbit.x=World.mouseX;
 
  drawSprites();
}

function criarMaçãs(){
  maca = createSprite(random(50, 350), 40, 40, 10)
  maca.addImage(macaImg);
  maca.scale=0.07;
  maca.velocityY=3;
  maca.lifetime=150;

}

function criarFolhasLaranjas(){
  folhaLaranja = createSprite(random(50, 350), 40, 40, 10)
  folhaLaranja.addImage(folhaLaranjaImg);
  folhaLaranja.scale=0.08;
  folhaLaranja.velocityY=3;
  folhaLaranja.lifetime=150;

}

function criarFolhasVermelhas(){
  folhaVermelha = createSprite(random(50, 350), 40, 40, 10)
  folhaVermelha.addImage(folhaVermelhaImg);
  folhaVermelha.scale=0.06;
  folhaVermelha.velocityY=3;
  folhaVermelha.lifetime=150;

}