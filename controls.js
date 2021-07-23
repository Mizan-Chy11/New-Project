//variables

//variables intermédiaires qui gèrent le déplacement et l'état des touches.
var kPressed = false; 
var lPressed = false;
var mPressed = false; 
var enterPressed = false ;
var shiftPressed = false ;
var controlPressed = false ;
var aPressed = false ;
var upPressed = false ;
var downPressed = false ;
var leftPressed = false ;
var rightPressed = false ;

var mouseX = 0 ;
var mouseY = 0 ;

var littleTest = "it's ok" ;
//centre de déplacement


//détection de l'état des touches

function keyDownHandler(e){ // les touches sont enfoncés
  if(e.keyCode === 75){
    kPressed = true;
  } else if (e.keyCode === 76){
    lPressed = true ;
  } else if (e.keyCode === 77){
    mPressed = true;
  } else if (e.keyCode === 13){
    enterPressed = true ;
  } else if (e.keyCode === 16){
    shiftPressed = true ;
  } else if (e.keyCode === 17){
    controlPressed = true ;
  } else if (e.keyCode === 65){
    aPressed = true ;
  } else if (e.keyCode === 38){
    upPressed = true ;
  } else if (e.keyCode === 39){
    rightPressed = true ;
  } else if (e.keyCode === 40){
    downPressed = true ;
  } else if (e.keyCode === 37){
    leftPressed = true ;
  }
}


function keyUpHandler(e){
  if(e.keyCode === 13){
    enterPressed = false;
  } else if (e.keyCode === 16){
    shiftPressed = false ;
  } else if (e.keyCode === 17){
    controlPressed = false ;
  } else if (e.keyCode === 65){
    aPressed = false ;
  } else if (e.keyCode === 37){
    leftPressed = false ;
  } else if (e.keyCode === 38){
    upPressed = false ;
  } else if (e.keyCode === 39){
    rightPressed = false ;
  } else if (e.keyCode === 40){
    downPressed = false ;
  }
}


//bugs au niveau de la souris. Utiliser la touche entrée ? Curseur ingame ? (comme dans apex)
/*
function mouseMoveHandler(e){
  mouseX = e.clientX ;
  mouseY = e.clientY ;
}
*/

document.addEventListener("keydown", keyDownHandler, false); 
document.addEventListener("keyup", keyUpHandler, false);
//document.addEventListener("mousemove", mouseMoveHandler, false);

function checkKeyboard(){
  if(kPressed === true){ //K
    squareX = xLeft ;
    kPressed = false ;
  } else if (lPressed === true){ //L
    squareX = xCenter ;
    lPressed = false;
  } else if (mPressed === true){ //M
    squareX = xRight ;
    mPressed = false;
  } else if ((rightPressed === true)&&(squareX === xCenter)){
    squareX = xRight ;
    rightPressed = false ;
  } else if ((rightPressed === true)&&(squareX === xLeft)){
    squareX = xCenter ;
    rightPressed = false ;
  }  else if ((leftPressed === true)&&(squareX === xCenter)){
    squareX = xLeft ;
    leftPressed = false ;
  } else if ((leftPressed === true)&&(squareX === xRight)){
    squareX = xCenter ;
    leftPressed = false ;
  }
}

setInterval(checkKeyboard, 10);
//setInterval(mouseMoveHandler, 10);