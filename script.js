
var A1= document.getElementById("A1");
var A2= document.getElementById("A2");
var A3= document.getElementById("A3");
var A4= document.getElementById("A4");
var A5= document.getElementById("A5");

var B1= document.getElementById("B1");
var B2= document.getElementById("B2");
var B3= document.getElementById("B3");
var B4= document.getElementById("B4");
var B5= document.getElementById("B5");

var C1= document.getElementById("C1");
var C2= document.getElementById("C2");
var C3= document.getElementById("C3");
var C4= document.getElementById("C4");
var C5= document.getElementById("C5");

var D1= document.getElementById("D1");
var D2= document.getElementById("D2");
var D3= document.getElementById("D3");
var D4= document.getElementById("D4");
var D5= document.getElementById("D5");

var E1= document.getElementById("E1");
var E2= document.getElementById("E2");
var E3= document.getElementById("E3");
var E4= document.getElementById("E4");
var E5= document.getElementById("E5");

var goatKilled=document.getElementById("goatKilled");
var tigerTrapped=document.getElementById("tigerTrapped");
var sound=document.getElementById("sound");
var music=document.getElementById("music");
var soundOn=true;
var musicOn=false;

goatKilled.textContent = "Goat Killed: 0";
tigerTrapped.textContent = "Tiger Trapped: 0";
var goatKilledCount=0;
var tigerTrappedCount=0;
//CLONE ARRAY FOR THE BAAG-CHAAL BOARD. 
var board = [
    [2,0,0,0,2],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [2,0,0,0,2]
];
var boardposition = [
    ["A1","A2","A3","A4","A5"],
    ["B1","B2","B3","B4","B5"],
    ["C1","C2","C3","C4","C5"],
    ["D1","D2","D3","D4","D5"],
    ["E1","E2","E3","E4","E5"]
];




//FOR TIGER
var turn=0;
var clickedCount=0;
var goatClickedCount=0;
var firstClicKed="";
var lastClicked="";

//image for soundon
var S_On= document.createElement("img");
S_On.src = "icons/sound_on.png";
S_On.style.height = "30px";
sound.appendChild(S_On.cloneNode());

//image for soundoff
var S_Off= document.createElement("img");
S_Off.src = "icons/sound_off.png";
S_Off.style.height = "30px";

//image for music on
var M_On= document.createElement("img");
M_On.src = "icons/music_on.png";
M_On.style.height = "30px";


//image for music off
var M_Off= document.createElement("img");
M_Off.src = "icons/music_off.png";
M_Off.style.height = "30px";
music.appendChild(M_Off.cloneNode());

//image for tiger
var T_img = document.createElement("img");
T_img.src = "images/tiger.png";
T_img.style.width = "100%";
T_img.style.height = "100%";

//image for goat..
var G_img = document.createElement("img");
G_img.src = "images/goat.png";
G_img.style.width = "100%";
G_img.style.height = "100%";



//PUTTING DEFAULT TIGER AT STARTING.
A1.appendChild(T_img.cloneNode());
A5.appendChild(T_img.cloneNode());
E1.appendChild(T_img.cloneNode());
E5.appendChild(T_img.cloneNode());

var elementIds = ["A1", "A2", "A3", "A4", "A5", 
                  "B1", "B2", "B3", "B4", "B5", 
                  "C1", "C2", "C3", "C4", "C5", 
                  "D1", "D2", "D3", "D4", "D5", 
                  "E1", "E2", "E3", "E4", "E5"];



//for sound icon clicked
sound.addEventListener("click",function(){
    if(soundOn)
    {
        soundOn=false;
        sound.innerHTML="";
        sound.appendChild(S_Off.cloneNode());
        
    }else{
        soundOn=true;
        sound.innerHTML="";
        sound.appendChild(S_On.cloneNode());
    }
})

//for background music
var musicplay=new Audio('sounds/background music.mp3');
musicplay.loop = false; 
musicplay.currentTime = 0; 
musicplay.play();
musicplay.volume=0.2;
//for music icon clicked 
music.addEventListener("click",function(){
    if(musicOn)
    {
       musicOn=false;
        music.innerHTML="";
        music.appendChild(M_Off.cloneNode());
        musicplay.pause();
        musicplay.currentTime = 0;
        musicplay.volume=0.2;



    }else{
        musicOn=true;
        music.innerHTML="";
        music.appendChild(M_On.cloneNode()); 
        musicplay.currentTime = 0; 
        musicplay.play();
        musicplay.loop = true; 
        musicplay.volume=0.2;
    }
})



// Loop through each ID
elementIds.forEach(function(id) {
    var element = document.getElementById(id);
    element.addEventListener("click", function() {
        if (turn % 2 == 0) {
            if (goatClickedCount <= 19) {
                if (board[ClickedIndexinBoard_IF(id)][ClickedIndexinBoard_IL(id)] == 0) {
                    element.appendChild(G_img.cloneNode());
                    board[ClickedIndexinBoard_IF(id)][ClickedIndexinBoard_IL(id)] = 1;
                    goatClickedCount++;
                    turn++;
                    tigerTrapped.textContent = "Tiger Trapped: "+TTC();
                    var ttc=TTC();


                    if(soundOn)
                    {
                        var audio=new Audio('sounds/move.mp3');
                        audio.loop = false; 
                        audio.currentTime = 0; 
                        audio.play();
                    }
                     if(ttc==4)
                     {
                           if(soundOn)
                             {
                             var audio1=new Audio('sounds/gameover.mp3');
                             audio1.loop = false; 
                             audio1.currentTime = 0; 
                             audio1.play();
                        }
                     }
                   

                }
            }else{
                if(clickedCount==0)
                {   
                    if(board[ClickedIndexinBoard_IF(id)][ClickedIndexinBoard_IL(id)]==1)
                    {
                    firstClicKed=id;
                    clickedCount=1;
                      if(soundOn)
                      {
                        var audio=new Audio('sounds/pick.mp3');
                        audio.loop = false; 
                        audio.currentTime = 0; 
                        audio.play();
                      }
                    }
                    
                }else{ 
                    if(board[ClickedIndexinBoard_IF(id)][ClickedIndexinBoard_IL(id)]==0)
                    {
                       lastClicked=id;
                       if(possibleMovesGoat(firstClicKed,lastClicked)){
                          
                          var firstClicKed1=document.getElementById(firstClicKed);
                          board[ClickedIndexinBoard_IF(lastClicked)][ClickedIndexinBoard_IL(lastClicked)]=1;
                          board[ClickedIndexinBoard_IF(firstClicKed)][ClickedIndexinBoard_IL(firstClicKed)]=0;
                          element.appendChild(G_img.cloneNode());
                          firstClicKed1.innerHTML = "";
                          firstClicKed="";
                          lastClicked="";
                          turn++;
                          clickedCount=0;
                          tigerTrapped.textContent = "Tiger Trapped: "+TTC();
                          var ttc=TTC();
                            if(soundOn)
                             {
                               var audio=new Audio('sounds/move.mp3');
                               audio.loop = false; 
                               audio.currentTime = 0; 
                               audio.play();
                         }

                         if(ttc==4)
                           {
                           if(soundOn)
                             {
                             var audio1=new Audio('sounds/gameover.mp3');
                             audio1.loop = false; 
                             audio1.currentTime = 0; 
                              audio1.play();
                        }
                       }
                          
                      }else{
                          if(soundOn)
                             {
                             var audio=new Audio('sounds/error.mp3');
                             audio.loop = false; 
                             audio.currentTime = 0; 
                             audio.play();
                             }
                      }
                    
                      
                    }else if(board[ClickedIndexinBoard_IF(id)][ClickedIndexinBoard_IL(id)]==1){
                        firstClicKed=id;
                        clickedCount=1;
                          if(soundOn)
                      {
                        var audio=new Audio('sounds/pick.mp3');
                        audio.loop = false; 
                        audio.currentTime = 0; 
                        audio.play();
                      }
                    }
                 
                    
                }

            }
        }else if(turn%2==1)
        {
           if(clickedCount==0)
                {   
                    if(board[ClickedIndexinBoard_IF(id)][ClickedIndexinBoard_IL(id)]==2)
                    {
                    firstClicKed=id;
                    clickedCount=1;
                      if(soundOn)
                      {
                        var audio=new Audio('sounds/pick.mp3');
                        audio.loop = false; 
                        audio.currentTime = 0; 
                        audio.play();
                      }
                    }
                    
                }else{ 
                    if(board[ClickedIndexinBoard_IF(id)][ClickedIndexinBoard_IL(id)]==0)
                    {
                       lastClicked=id;
                       if(possibleMovesTiger(firstClicKed,lastClicked)){
                       var a=(ClickedIndexinBoard_IF(firstClicKed)+ClickedIndexinBoard_IF(lastClicked))/2;
                       var b=(ClickedIndexinBoard_IL(firstClicKed)+ClickedIndexinBoard_IL(lastClicked))/2;
                       if( isMiddleIndexExist(a,b) && board[a][b]==1)
                       { 
                          var goatPosition=document.getElementById(boardposition[a][b]);
                          var firstClicKed1=document.getElementById(firstClicKed);
                          board[ClickedIndexinBoard_IF(lastClicked)][ClickedIndexinBoard_IL(lastClicked)]=2;
                          board[ClickedIndexinBoard_IF(firstClicKed)][ClickedIndexinBoard_IL(firstClicKed)]=0;
                          board[a][b]=0;
                          element.appendChild(T_img.cloneNode());
                          firstClicKed1.innerHTML = "";
                          goatPosition.innerHTML="";
                          goatKilledCount++;
                          goatKilled.textContent = "Goat Killed: "+goatKilledCount;
                          tigerTrapped.textContent = "Tiger Trapped: "+TTC();
                          firstClicKed="";
                          lastClicked="";
                          turn++;
                          clickedCount=0;
                            if(soundOn)
                             {
                             var audio=new Audio('sounds/move.mp3');
                             audio.loop = false; 
                             audio.currentTime = 0; 
                             audio.play();
                             }

                    if(goatKilledCount==5)
                         {
                           if(soundOn)
                             {
                             var audio1=new Audio('sounds/gameover.mp3');
                             audio1.loop = false; 
                             audio1.currentTime = 0; 
                             audio1.play();
                        }
                     }
                          
                       }else{
                          if(!isMiddleIndexExist(a,b)){
                          var firstClicKed1=document.getElementById(firstClicKed);
                          board[ClickedIndexinBoard_IF(lastClicked)][ClickedIndexinBoard_IL(lastClicked)]=2;
                          board[ClickedIndexinBoard_IF(firstClicKed)][ClickedIndexinBoard_IL(firstClicKed)]=0;
                          element.appendChild(T_img.cloneNode());
                          firstClicKed1.innerHTML = "";
                          firstClicKed="";
                          lastClicked="";
                          tigerTrapped.textContent = "Tiger Trapped: "+TTC();
                          turn++;
                          clickedCount=0;
                             if(soundOn)
                             {
                             var audio=new Audio('sounds/move.mp3');
                             audio.loop = false; 
                             audio.currentTime = 0; 
                             audio.play();
                             }
                          }else{
                            if(soundOn)
                             {
                             var audio=new Audio('sounds/error.mp3');
                             audio.loop = false; 
                             audio.currentTime = 0; 
                             audio.play();
                             }
                          }
                       }
                          
                        
                      }else{
                         if(soundOn)
                             {
                             var audio=new Audio('sounds/error.mp3');
                             audio.loop = false; 
                             audio.currentTime = 0; 
                             audio.play();
                             }
                      }
                    
                      
                    }else if(board[ClickedIndexinBoard_IF(id)][ClickedIndexinBoard_IL(id)]==2){
                        firstClicKed=id;
                        clickedCount=1;
                           if(soundOn)
                             {
                             var audio=new Audio('sounds/pick.mp3');
                             audio.loop = false; 
                             audio.currentTime = 0; 
                             audio.play();
                             }
                    }
                 
                    
                }
        }
    });
});


function TTC(){ //TTC=tiger trapped count
       var count = 0;
       for(var i=0;i<5;i++)
       {   
        
        for(var j=0;j<5;j++)
        {  
            
            if(board[i][j]==2)
            {   
                if(isValidPositionReserved(i,j))
                {
                    count++;
                }
            }
        }
       }
       return count;
}
function isValidPositionReserved(p,q){
const validMoves = {
        "A1": ["A2", "A3", "B2", "C3", "B1", "C1"],
        "A2": ["A1", "A3", "A4", "B2", "C2"],
        "A3": ["A1", "A2", "A4", "A5", "B2", "B4", "B3", "C1", "C5", "C3"],
        "A4": ["A3", "A5", "B4", "A2", "C4"],
        "A5": ["A4", "B4", "C3", "C5", "B5", "A3"],
        "B1": ["A1", "B2", "C1", "B3", "D1"],
        "B2": ["A1", "A2", "A3", "B1", "B3", "B4", "C3", "D4", "C1", "C2", "D2"],
        "B3": ["A3", "B2", "B4", "B1", "B5", "C3", "D3"],
        "B4": ["A4", "A5", "A3", "B2", "B3", "B5", "C5", "C4", "D4", "C3", "D2"],
        "B5": ["A5", "B3", "B4", "C5", "D5"],
        "C1": ["A1", "B1", "B2", "D1", "E1", "A3", "C2", "C3", "D2", "E3"],
        "C2": ["B2", "C1", "C3", "D2", "E2", "C4", "A2"],
        "C3": ["A3", "A5", "B2", "B3", "B4", "C2", "C4", "D3", "D2", "A1", "C1", "C5", "E3", "D4", "E5", "E1"],
        "C4": ["B4", "C3", "C5", "A4", "C2", "E4", "D4"],
        "C5": ["A5", "B5", "C4", "D5", "E5", "A3", "B4", "E3", "D4", "C3"],
        "D1": ["C1", "D2", "E1", "B1", "D3"],
        "D2": ["C2", "D1", "D3", "E2", "C1", "B2", "C3", "B4", "D4", "E2", "E3"],
        "D3": ["C3", "D2", "D4", "E3", "D1", "B3", "D5"],
        "D4": ["C4", "D3", "D5", "E4", "D2", "C5", "E5", "E3", "B4", "C3", "B2"],
        "D5": ["C5", "D4", "E5", "D3", "B5"],
        "E1": ["C1", "D1", "D2", "C3", "E2", "E3"],
        "E2": ["D2", "E1", "E3", "C2", "E4"],
        "E3": ["C3", "D3", "E1", "E2", "E4", "E5", "D4", "C5", "D2", "C1"],
        "E4": ["E2", "E3", "E5", "C4", "D4"],
        "E5": ["C5", "D5", "E4", "C3", "D4", "E3"]
    };

    // Check if the move is valid
    var checkcount=0;
  validMoves[boardposition[p][q]].forEach(newPosition => {
        if (board[ClickedIndexinBoard_IF(newPosition)][ClickedIndexinBoard_IL(newPosition)]!=0) {
        checkcount++;
    }
    });
   if(validMoves[boardposition[p][q]].length==checkcount)
   {
    return true;
   }

    return false;
}
function ClickedIndexinBoard_IF(element){
  var element1=element;
  //for indexFirst
  if(element=="A1" ||element=="A2" || element=="A3" ||element=="A4" ||element=="A5")
  {
    return 0;
  }else if(element=="B1" ||element=="B2" || element=="B3" ||element=="B4" ||element=="B5") {
     return 1;
  }
  else if(element=="C1" ||element=="C2" || element=="C3" ||element=="C4" ||element=="C5") {
     return 2;
  }else if(element=="D1" ||element=="D2" || element=="D3" ||element=="D4" ||element=="D5") {
     return 3;
  }
  else if(element=="E1" ||element=="E2" || element=="E3" ||element=="E4" ||element=="E5") {
     return 4;
  }

}
function ClickedIndexinBoard_IL(element){
  var element1=element;
   //FOR LAST INDEX  
   if(element=="A1" ||element=="B1" || element=="C1" ||element=="D1" ||element=="E1")
  {
    return 0;
  }else if(element=="A2" ||element=="B2" || element=="C2" ||element=="D2" ||element=="E2") {
    return 1;
  }
  else if(element=="A3" ||element=="B3" || element=="C3" ||element=="D3" ||element=="E3") {
     return 2;
  }else if(element=="A4" ||element=="B4" || element=="C4" ||element=="D4" ||element=="E4") {
     return 3;
  }
  else if(element=="A5" ||element=="B5" || element=="C5" ||element=="D5" ||element=="E5") {
     return 4;
  }  
}

function possibleMovesTiger(first_position, last_position) {
    const validMoves = {
        "A1": ["A2", "A3", "B2", "C3", "B1", "C1"],
        "A2": ["A1", "A3", "A4", "B2", "C2"],
        "A3": ["A1", "A2", "A4", "A5", "B2", "B4", "B3", "C1", "C5", "C3"],
        "A4": ["A3", "A5", "B4", "A2", "C4"],
        "A5": ["A4", "B4", "C3", "C5", "B5", "A3"],
        "B1": ["A1", "B2", "C1", "B3", "D1"],
        "B2": ["A1", "A2", "A3", "B1", "B3", "B4", "C3", "D4", "C1", "C2", "D2"],
        "B3": ["A3", "B2", "B4", "B1", "B5", "C3", "D3"],
        "B4": ["A4", "A5", "A3", "B2", "B3", "B5", "C5", "C4", "D4", "C3", "D2"],
        "B5": ["A5", "B3", "B4", "C5", "D5"],
        "C1": ["A1", "B1", "B2", "D1", "E1", "A3", "C2", "C3", "D2", "E3"],
        "C2": ["B2", "C1", "C3", "D2", "E2", "C4", "A2"],
        "C3": ["A3", "A5", "B2", "B3", "B4", "C2", "C4", "D3", "D2", "A1", "C1", "C5", "E3", "D4", "E5", "E1"],
        "C4": ["B4", "C3", "C5", "A4", "C2", "E4", "D4"],
        "C5": ["A5", "B5", "C4", "D5", "E5", "A3", "B4", "E3", "D4", "C3"],
        "D1": ["C1", "D2", "E1", "B1", "D3"],
        "D2": ["C2", "D1", "D3", "C1", "B2", "C3", "B4", "D4", "E2", "E3","E1"],
        "D3": ["C3", "D2", "D4", "E3", "D1", "B3", "D5"],
        "D4": ["C4", "D3", "D5", "E4", "D2", "C5", "E5", "E3", "B4", "C3", "B2"],
        "D5": ["C5", "D4", "E5", "D3", "B5"],
        "E1": ["C1", "D1", "D2", "C3", "E2", "E3"],
        "E2": ["D2", "E1", "E3", "C2", "E4"],
        "E3": ["C3", "D3", "E1", "E2", "E4", "E5", "D4", "C5", "D2", "C1"],
        "E4": ["E2", "E3", "E5", "C4", "D4"],
        "E5": ["C5", "D5", "E4", "C3", "D4", "E3"]
    };

    // Check if the move is valid
    if (validMoves[first_position] && validMoves[first_position].includes(last_position)) {
        return true;
    }

    return false;
}
function possibleMovesGoat(first_position, last_position) {
    const validMoves = {
        "A1": ["A2", "B2", "B1"],
        "A2": ["A1", "A3", "B2"],
        "A3": ["A2", "A4", "B3","B2","B4"],
        "A4": ["A3", "A5", "B4"],
        "A5": ["A4", "B4", "B5"],
        "B1": ["A1", "B2", "C1"],
        "B2": ["A1", "A2", "A3", "B1", "B3","C1", "C2", "C3"],
        "B3": ["A3", "B2", "B4", "C3"],
        "B4": ["A3","A4", "A5", "B3", "B5", "C4","C3","C5"],
        "B5": ["A5", "B4", "C5"],
        "C1": ["B1", "C2", "D1","B2","D2"],
        "C2": ["B2", "C1", "C3", "D2"],
        "C3": ["B3", "C2", "C4", "B4","B2","D2","D3","D4"],
        "C4": ["B4", "C3", "C5", "D4"],
        "C5": ["B5", "C4", "D5","B4","D4"],
        "D1": ["C1", "D2", "E1"],
        "D2": ["C2","C1","C3", "D1", "D3","E1", "E2", "E3"],
        "D3": ["C3", "D2", "D4", "E3"],
        "D4": ["C3","C4", "D3", "D5", "E3","E5", "E4", "C5"],
        "D5": ["C5", "D4", "E5"],
        "E1": ["D1", "E2", "D2"],
        "E2": ["D2", "E1", "E3"],
        "E3": ["D2","D4","D3", "E2", "E4"],
        "E4": ["D4", "E3", "E5"],
        "E5": ["D5", "E4", "D4"]
    };

    // Check if the move is valid
    if (validMoves[first_position] && validMoves[first_position].includes(last_position)) {
        return true;
    }

    return false;
}
function isMiddleIndexExist(a,b){
    for(var i=0;i<5;i++)
    {
        for(var j=0;j<5;j++)
        {
            if(i==a&&j==b)
            {
              return true;
            }
        }
    }
    return false;
}
