var mago;
var magoimg;
var pulando;
var solo;
var soloimg;
var wand1;
var wandimg;
var fogo;
var fireimg;
var fireGroup; //grupo

function preload()
{
magoimg = loadImage("Sprites/Mago.png");
pulando = loadImage ("Sprites/pulando.png");
soloimg = loadImage("Sprites/Solo.png");
wandimg = loadImage ("Sprites/wand1.png");
fireimg = loadImage ("Sprites/fire.gif")
}

function setup() {
	//criando tela
	createCanvas(1200, 700);
	//criando sprites

	mago = createSprite(40, 550);
	mago.addImage("mago", magoimg);
  mago.addImage("pulando", pulando);
	mago.scale = 0.4;

	solo = createSprite(600, 650);
	solo.addImage(soloimg);
	solo.scale = 5;

  wand1 = createSprite(mago.x, mago.y-150);
  wand1.addImage("wand1", wandimg);
  wand1.scale = 0.5;

  //criando grupo
  fireGroup = new Group()
}


function draw() {
  background("gray");

  //colisão do mago com o solo
  mago.collide(solo);

  //movimentação do mago
  if (keyDown("w") && mago.y == 483.6){

	mago.velocityY = -10;
	mago.changeImage("pulando");

  
  

  }
  else{
	setTimeout(()=> {
    mago.changeImage("mago");
  }, 200);
  
    
  }

  if (keyDown("d")){

	mago.x += 15;

  }

  if (keyDown("a")){

	mago.x -= 15;

  }
  console.log(mago.y);
  mago.velocityY += 2;

//ataque do mago
if (keyDown("SPACE")){
shooting();
}

  //movimentação da varinha
wand1.x = mago.x-20;
wand1.y = mago.y-30;

//if(wand1.rotation < 90 && wand1.rotation > -90) {
wand1.rotation = mouseX;

//}


  drawSprites();
 
}

function shooting(){
fogo = createSprite(wand1.x, wand1.y)
fogo.addImage("fire", fireimg)
fogo.setSpeedAndDirection(5, mouseX)
}


