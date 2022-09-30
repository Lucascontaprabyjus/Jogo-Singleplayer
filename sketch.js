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
var robot;
var robotimg;
var robotGroup; //grupo
var robotHp = 4;
var defesaimg;
var potencializadorimg;
var velocidadeimg;
var invulnerabilidadeimg;
var defesa;
var invulnerabilidade;
var velocidade;
var potencializador;

function preload()
{
magoimg = loadImage("Sprites/Mago.png");
pulando = loadImage ("Sprites/pulando.png");
soloimg = loadImage("Sprites/Solo.png");
wandimg = loadImage ("Sprites/wand1.png");
fireimg = loadImage ("Sprites/fire.gif")
robotimg = loadAnimation ("Sprites/robot1.png", "Sprites/robot2.png", "Sprites/robot3.png", "Sprites/robot4.png", "Sprites/robot5.png", "Sprites/robot6.png", "Sprites/robot7.png")
velocidadeimg = loadImage ("Sprites/velocidade.png");
invulnerabilidadeimg = loadImage ("Sprites/invulnerabilidade.png");
potencializadorimg = loadImage ("Sprites/potencializador.png");
defesaimg = loadImage ("Sprites/defesa.png");
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
  wand1.scale = 0.06;

  //criando grupo
  fireGroup = new Group();
  robotGroup = new Group();
  wave();
}


function draw() {
  background("gray");

  //colisão do mago com o solo
  mago.collide(solo);

  //movimentação do mago
  if (keyDown("w") && mago.y == 483.6){

	mago.velocityY = -10;
	mago.changeImage("pulando");

  cards();
  

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
  //console.log(mago.y);
  mago.velocityY += 2;

//ataque do mago
if (keyDown("SPACE")){
shooting();
}

  //movimentação da varinha
wand1.x = mago.x-20;
wand1.y = mago.y-30;

//if(wand1.rotation < 90 && wand1.rotation > -90) {
//wand1.pointTo(mouseX, mouseY);
wand1.rotation = mouseX/6-90;
//console.log("mouse", mouseX);
//console.log("mouse wand", wand1.rotation);

console.log(robotHp);
//}
//wave();
robotGroup.setSpeedAndDirectionEach(4,mago.x);
if(robotGroup.collide(fireGroup)){
robotHp -=1;
fogo.destroy();


}

if(robotHp == 0){
robot.destroy();
robotHp = 4;

}


  drawSprites();
 
}

function shooting(){
fogo = createSprite(wand1.x, wand1.y-55);
fogo.addImage("fire", fireimg);
fogo.setSpeedAndDirection(10, mouseX/6+180);
console.log("fogoX", fogo.x);
console.log("fogoY", fogo.y);
fogo.lifeTime = 120;
fireGroup.add(fogo);

}
function wave(){
 // if(frameCount%120==0){

for(var i = 1; i<=4; i++){
//colocar life time
robot = createSprite (250*i, 100);
robot.addAnimation ("robô", robotimg);
robot.scale = 0.07;
robotGroup.add(robot);
}
//robotGroup.setSpeedAndDirectionEach(4,mago.x);

//}
}

function cards(){
defesa = createImg("Sprites/defesa.png");
defesa.position(600, 350);
defesa.size(80, 100);
defesa.mouseClicked(fcDefesa);


}
function fcDefesa(){
background ("gray");
console.log("clicou")

}