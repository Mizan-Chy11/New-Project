//Fichier contenant les évènements de collisions, de game over et de respawn de paddles.
//bugs !!!!!!!!!!
                                      //transition et game over

                                      function drawCache(){
                                        context.fillStyle = color1 ;
                                        context.fillRect(0, 0, chromeWidth, chromeHeight);
                                      }
                                      
                                      //bugs au niveau de la souris. Utiliser la touche entrée ? Curseur ingame ? (comme dans apex)
                                      function drawButtonRetry(){
                                        context.strokeStyle = strokeColor ;
                                        context.lineWidth = 10 ;
                                        context.strokeRect(xCenter - buttonRetryWidth/2, chromeHeight/1.64, buttonRetryWidth, buttonRetryHeight);
                                      
                                        context.fillStyle = rectColor ;
                                        context.fillRect(xCenter - buttonRetryWidth/2, chromeHeight/1.64, buttonRetryWidth, buttonRetryHeight);
                                      
                                        context.fillStyle = buttonMessageColor ;
                                        context.textAlign = "center";
                                        context.font = '50px Courier New' ;
                                        context.fillText(buttonMessage, xCenter, chromeHeight/1.46);
                                      /*
                                        if((536 < mouseX)&& (mouseX < 536 + 300)&&(653 < mouseY)&& (mouseY < 653 + 100)){
                                          littleTest = "change lol" ;
                                          strokeColor = color1 ;
                                          rectColor = color2 ;
                                          buttonMessageColor = color1 ;
                                        } else {
                                          strokeColor = color2 ;
                                          rectColor = color1 ;
                                          buttonMessageColor = color2 ;
                                        }
                                      */
                                      }
                                      
                                      //((chromeWidth/2.88 < mouseX)&& (mouseX < chromeWidth/2.88 + buttonRetryWidth)&&(chromeHeight/1.64 < mouseY)&& (mouseY < chromeHeight/1.64 + buttonRetryHeight))
                                      
                                      function textTransition(){
                                        context.fillStyle = color2; //couleur du texte
                                        context.textAlign = "center";
                                        context.font = '100px Courier New';//police et taille
                                        context.fillText(message, xCenter, messageY);
                                        context.font = '75px Courier New';//police et taille
                                        context.fillText(message1, xCenter, message1Y);
                                        // context.font = '10px Courier New';
                                        // context.fillText(message2, xCenter - chromeWidth/14.1, chromeHeight/2.5 -chromeHeight/24 + chromeHeight/4.3);
                                      }
                                      
                                      
                                      function restartAfterStopping(){
                                        if(oneTime1 === false){
                                          color1 = "#000";
                                          color2 = "#FFFFFF";
                                          color3 = "#000";
                                          color4 = "#FFFFFF";
                                          paddleLeftY = chromeHeight ;
                                          paddleCenterY = chromeHeight ;
                                          paddleRightY = chromeHeight ;
                                          vitessePaddleRight = 2 ;
                                          vitessePaddleLeft = 2 ;
                                          vitessePaddleCenter = 2 ;
                                          rightAcce = 0.002 ;
                                          leftAcce = 0.002 ;
                                          centerAcce = 0.002 ;
                                          squareX = xCenter ;
                                          random = Math.floor(Math.random()*3);
                                          randomColor = Math.floor(Math.random()*5);
                                          littleTest = "retry !" ;
                                          score = -3 ;
                                          rushScore = 0 ;
                                          level = 1 ;
                                          oneTime = false ;
                                          endTimeout1 = false ;
                                          gameOver = false ;
                                          oneTime1 = true ;
                                        }
                                      }
                                      
                                      function restartAfterLevelUp(){
                                        if(rushingTheGold === true){
                                          vitessePaddleRight = 10 ;
                                          vitessePaddleLeft = 10 ;
                                          vitessePaddleCenter = 10 ;
                                        } else {
                                          vitessePaddleRight = 2 ;
                                          vitessePaddleLeft = 2 ;
                                          vitessePaddleCenter = 2 ;
                                        }
                                        rightAcce = 0.002 ;
                                        leftAcce = 0.002 ;
                                        centerAcce = 0.002 ;
                                        random = Math.floor(Math.random()*3);
                                        randomColor = Math.floor(Math.random()*6);
                                        oneTime = false ;
                                        endTimeout2 = false ;
                                        upLevel = false ;
                                        oneTimeRandom = false ;
                                        oneTimeUp = false ;
                                      }
                                      
                                      function game_over(){ // note : ne pas nommer une fonction comme une variable
                                        drawCache();
                                        drawButtonRetry();
                                        //drawText(); //à enlever
                                        message = "Game Over !";
                                        message1 = score + rushScore ;
                                        textTransition();
                                        endTimeout1 = true ;
                                        if(enterPressed === true){
                                            oneTime1 = false ;
                                            //littleTest = "change lol" ;
                                            strokeColor = color1 ;
                                            rectColor = color2 ;
                                            buttonMessageColor = color1 ;
                                            setTimeout(restartAfterStopping, 1000);
                                        } else {
                                            strokeColor = color2 ;
                                            rectColor = color1 ;
                                            buttonMessageColor = color2 ;
                                        }
                                      }
                                      
                                      
                                      function stopping(){
                                        vitessePaddleRight = 0 ;
                                        vitessePaddleLeft = 0 ;
                                        vitessePaddleCenter = 0 ;
                                        rightAcce = 0 ;
                                        leftAcce = 0 ;
                                        centerAcce = 0 ;
                                        //littleTest = "GAME OVER";
                                      }
                                      
                                      
                                      
                                      function scoring(){
                                        if (score >= 0){
                                          if(rushingTheGold === true){
                                            trackScore = "+" + rushScore ;
                                          } else {
                                            trackScore = score ;
                                          }
                                          context.fillStyle = color5; //couleur du texte
                                          context.font = '70px Courier New';//police et taille
                                          context.fillText(trackScore, xCenter, chromeHeight/3.5);
                                        }
                                      }
                                      
                                      
                                      function levelUp(){
                                        endTimeout2 = true ;
                                        if((oneTimeRandom === false)&&(rushingTheGold === false)){
                                          randomColoring();
                                          message = "Level Up !";
                                          message1 = level ;
                                          oneTimeRandom = true ;
                                        } else if(rushingTheGold === true){
                                          message = "Gold Rush !";
                                          message1 = "" ;
                                          goldRush();
                                        }
                                        drawCache();
                                        paddleRightY = chromeHeight ;
                                        paddleCenterY = chromeHeight ;
                                        paddleLeftY = chromeHeight ;
                                        textTransition();
                                        setTimeout(restartAfterLevelUp, 3000);
                                      }
                                      
                                      //version temporaire des changements de couleurs
                                      //refonte pour changer les couleurs de manière random en fonction des niveaux.
                                      /*
                                      function changeColor(){
                                        if (score >= 60){
                                          color1 = "#36C5F0";
                                          color2 = "#FA7298";
                                          color3 = "#36C5F0";
                                          color4 = "#FA7298";
                                        } else if(level === 2){
                                          color1 = "#FA7298" ; 
                                          color2 = "#36C5F0";
                                          color3 = "#FA7298" ;
                                          color4 = "#36C5F0";
                                        } else if ((score >= 20)&&(level === 1)){
                                          color1 = "#FFFFFF";
                                          color2 = "#000";
                                          color3 = "#FFFFFF";
                                          color4 = "#000";
                                        } else if ((score < 20)&&(level === 1)){
                                          color1 = "#000";
                                          color2 = "#FFFFFF";
                                          color3 = "#000";
                                          color4 = "#FFFFFF";
                                        }
                                      }
                                      
                                      function changeLevel(){
                                        if(score === 39){
                                          score = 39 ;
                                          upLevel = true ;
                                          stopping();
                                          level = 2 ;
                                          score = 40 ;
                                        }
                                      }
                                      */
                                      
                                      
                                                                              //collisions
                                      
                                      function collisionPaddleLeft(){
                                        if((paddleLeftY <= squareY)&&(squareY <= paddleLeftY + paddleHeight)&&((paddleLeftX < squareX)&&(squareX < paddleLeftX + paddleWidth))){
                                          if(rushingTheGold === true){
                                            rushScore += 10 ;
                                            paddleLeftY = chromeHeight ;
                                          } else {
                                            gameOver= true;
                                            stopping();
                                          }
                                        } else if ((paddleLeftY <= squareYHitTop)&&(squareYHitTop <= paddleLeftY + paddleHeight)&&((paddleLeftX < squareX)&&(squareX < paddleLeftX + paddleWidth))){
                                          if(rushingTheGold === true){
                                            rushScore += 10 ;
                                            paddleLeftY = chromeHeight ;
                                          } else {
                                            gameOver= true;
                                            stopping();
                                          }
                                        } else if ((paddleLeftY <= squareYHitLow)&&(squareYHitLow <= paddleLeftY + paddleHeight)&&((paddleLeftX < squareX)&&(squareX < paddleLeftX + paddleWidth))){
                                          if(rushingTheGold === true){
                                            rushScore += 10 ;
                                            paddleLeftY = chromeHeight ;
                                          } else {
                                            gameOver= true;
                                            stopping();
                                          }
                                        }
                                      }
                                      
                                      function collisionPaddleRight(){
                                        if((paddleRightY <= squareY)&&(squareY <= paddleRightY + paddleHeight)&&((paddleRightX < squareX)&&(squareX < paddleRightX + paddleWidth))){
                                          if(rushingTheGold === true){
                                            rushScore += 10 ;
                                            paddleRightY = chromeHeight ;
                                          } else {
                                            gameOver= true;
                                            stopping();
                                          }
                                        } else if ((paddleRightY <= squareYHitTop)&&(squareYHitTop <= paddleRightY + paddleHeight)&&((paddleRightX < squareX)&&(squareX < paddleRightX + paddleWidth))){
                                          if(rushingTheGold === true){
                                            rushScore += 10 ;
                                            paddleRightY = chromeHeight ;
                                          } else {
                                            gameOver= true;
                                            stopping();
                                          }
                                        } else if ((paddleRightY <= squareYHitLow)&&(squareYHitLow <= paddleRightY + paddleHeight)&&((paddleRightX < squareX)&&(squareX < paddleRightX + paddleWidth))){
                                          if(rushingTheGold === true){
                                            rushScore += 10 ;
                                            paddleRightY = chromeHeight ;
                                          } else {
                                            gameOver= true;
                                            stopping();
                                          }
                                        }
                                      }
                                      
                                      function collisionPaddleCenter(){
                                        if((paddleCenterY <= squareY)&&(squareY <= paddleCenterY + paddleHeight)&&((paddleCenterX < squareX)&&(squareX < paddleCenterX + paddleWidth))){
                                          if(rushingTheGold === true){
                                            rushScore += 10 ;
                                            paddleCenterY = chromeHeight ;
                                          } else {
                                            gameOver= true;
                                            stopping();
                                          }
                                        } else if ((paddleCenterY <= squareYHitTop)&&(squareYHitTop <= paddleCenterY + paddleHeight)&&((paddleCenterX < squareX)&&(squareX < paddleCenterX + paddleWidth))){
                                          if(rushingTheGold === true){
                                            rushScore += 10 ;
                                            paddleCenterY = chromeHeight ;
                                          } else {
                                            gameOver= true;
                                            stopping();
                                          }
                                        } else if ((paddleCenterY <= squareYHitLow)&&(squareYHitLow <= paddleCenterY + paddleHeight)&&((paddleCenterX < squareX)&&(squareX < paddleCenterX + paddleWidth))){
                                          if(rushingTheGold === true){
                                            rushScore += 10 ;
                                            paddleCenterY = chromeHeight ;
                                          } else {
                                            gameOver= true;
                                            stopping();
                                          }
                                        }
                                      }
                                      
                                      
                                                                    //Respawn
                                      
                                      function respawnPaddleLeft(){ //lorsque les paddles arrives à la zone de fin, ils réapparaissent à la zone de début.
                                        if (paddleLeftY > chromeHeight){
                                          //littleTest = "AWAWAW" ;
                                          score ++ ;
                                          if(random === 0){
                                            paddleLeftY = 0 ;
                                          } else if (random === 1){
                                            paddleLeftY = -chromeHeight/3.5 ;
                                          } else if (random === 2){
                                            paddleLeftY = -chromeHeight/1.7 ;
                                            vitessePaddleLeft += speedBoost ;
                                          }
                                        }
                                      }
                                      
                                      function respawnPaddleCenter(){
                                        if (paddleCenterY > chromeHeight){
                                          //littleTest = "AWAWAW" ;
                                          score ++ ;
                                          if(random === 0){
                                            paddleCenterY = -chromeHeight/3.5 ;
                                          } else if (random === 1){
                                            paddleCenterY = -chromeHeight/1.7 ;
                                            vitessePaddleCenter += speedBoost ;
                                          } else if (random === 2){
                                            paddleCenterY = 0 ;
                                          }
                                        }
                                      }
                                      
                                      function respawnPaddleRight(){
                                        if (paddleRightY > chromeHeight){
                                          //littleTest = "AWAWAW" ;
                                          score ++ ;
                                          if(random === 0){
                                            paddleRightY = -chromeHeight/1.7 ;
                                            vitessePaddleRight += speedBoost ;
                                          } else if (random === 1){
                                            paddleRightY = 0 ;
                                          } else if (random === 2){
                                            paddleRightY = -chromeHeight/3.5 ;
                                          }
                                        }
                                      }
                                      
                                      /*
                                      
                                      function game_over(){
                                          //functionTransition
                                          endTimeout = true ;
                                      }
                                      
                                      function drawAll(){
                                          //function...
                                          if((gameOver === true)&&(endTimeout === false)){
                                              setTimeout(game_over);
                                          } else if((gameOver === true)&&(endTimeout === true)){
                                              game_over();
                                          }
                                      }
                                      
                                      */