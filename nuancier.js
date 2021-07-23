//duos de couleurs pour les niveaux.
/*
Noir Blanc

Rose Bleu (Spark)

Bleu Orange (Spitfire)

Noir Jaune (Dynasty)

Blanc Bleu (Uprising)

Jaune Rouge (Mayhem)

Bleu Vert (Titans)

Blanc Vert (Outlaws)

Rouge Bleu (Justice)
*/


function randomColoring(){
    if(randomColor === 1){
      spark();
    } else if(randomColor === 2){
      spitfire();
    } else if (randomColor === 3){
      uprising();
    } else if (randomColor === 4){
      outlaws();
    } else if (randomColor === 5){
      mayhem();
    } else if (randomColor === 0){
      dynasty();
    }
  }
  
                              //GOLD RUSH
  
  function goldRush(){
    goldColors();
  }
  
  
  function switching(){
    randomColor = Math.floor(Math.random()*5);
    if((score % 40 === 20)&&(oneTime === false)){
      inverseColors();
    } else if ((score % 40 === 0)&&(score != 0)){
      upLevel = true ;
      stopping();
      if(oneTimeUp === false){
        score ++ ;
        level ++ ;
        oneTimeUp = true ;
      }
      if(level % 3 === 0){
        rushingTheGold = true ;
      } else {
        rushingTheGold = false ;
      }
    }
  }
  
  
  function inverseColors(){
    colorStack1 = color1 ;
    colorStack2 = color2 ;
    color2 = colorStack1 ;
    color4 = colorStack1 ;
    color1 = colorStack2 ;
    color3 = colorStack2 ;
    oneTime = true ;
  }
  
  function goldColors(){
    color1 = "#efe15a" ; 
    color2 = "#fba615";
    color3 = "#efe15a" ;
    color4 = "#fba615";
  }
  
  function spark(){
    color1 = "#FA7298" ; 
    color2 = "#36C5F0";
    color3 = "#FA7298" ;
    color4 = "#36C5F0";
  }
  
  function spitfire(){
    color1 = "#CC751B";
    color2 = "#86CAE6";
    color3 = "#CC751B";
    color4 = "#86CAE6";
  }
  
  function uprising(){
    color1 = "#124999";
    color2 = "#FFFFFF";
    color3 = "#124999";
    color4 = "#FFFFFF";
  }
  
  function outlaws(){
    color1 = "#97d700";
    color2 = "#FFFFFF";
    color3 = "#97d700";
    color4 = "#FFFFFF";
  }
  
  function mayhem(){
    color1 = "#ad2826";
    color2 = "#fee600";
    color3 = "#ad2826";
    color4 = "#fee600";
  }
  
  function dynasty(){
    color1 = "#aa8a01";
    color2 = "#000";
    color3 = "#aa8a01";
    color4 = "#000";
  }