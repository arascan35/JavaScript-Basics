// css selector 
const topLeft = document.querySelector("#topleft");
const topRight = document.querySelector("#topright");
const bottomLeft = document.querySelector("#bottomleft");
const bottomRight = document.querySelector("#bottomright");
const powerButton = document.querySelector("#on");
const startButton = document.querySelector("#start");
const counter = document.querySelector("#turn");
const strictButton = document.querySelector("#strict");


let strict=false;
strictButton.addEventListener('click',(event) =>{
    if(strictButton.checked == true){
        strict = true;  
    }
    else{
        strict = false;
    }
});

let power=false;
powerButton.addEventListener('click',(event)=>{
    if(powerButton.checked == true){
        power=true;
        counter.innerHTML="-";
    }
    else{
        power=false;
        counter.innerHTML="";   
        clearColor();
        clearInterval(intervalId);
    }
});

let start = false;
let win;
startButton.addEventListener('click',(event)=>{
    if(power == true || win){
        console.log("start button clicked");
       play();
    }

});

let order=[]; //blue,red,yellow,blue
let playerOrder=[];
let flash=0;
let intervalId =0;
let turn=1;
let good;
let compTurn;


function play(){
    console.log("in play function");
    win=false;
    order = [];
    playerOrder=[];
    flash=0;
    intervalId=0;
    turn=1;
    counter.innerHTML="1";
    good =true;

    for(var i=0;i<20;i++){
        order.push(Math.floor(Math.random()*4)+1);
    }
    
    console.log("order: ",order);
    compTurn=true;

    intervalId=setInterval(gameTurn,800);       //lighting 800ms

}

function gameTurn(){
    console.log("in gameTurn function");
    console.log("flash : ",flash,"turn : ",turn, "compTurn",compTurn);

    power=false;
    if(flash==turn){
        clearInterval(intervalId);
        compTurn=false;
        clearColor();
        power=true;
    }
    if(compTurn==true){
        clearColor();
        setTimeout(()=>{
            if(order[flash]==1){    //for green lightining
                one();
            }
            if(order[flash]==2){    //for red lightining
                two();
            }
            if(order[flash]==3){    //for yellow lightining
                three();
            }
            if(order[flash]==4){    //for blue lightining
                four();
            }
            flash++;
        },200);             //wait 200ms
    }
}

// button actions 
// one -> green
// two -> red
// three -> yellow
// four -> blue

let noise=false;
function one(){
    if(noise){
        let audio = document.getElementById("clip1");   //html id's taken
        audio.play();
    }
    noise=true;
    topLeft.style.backgroundColor="lightgreen";
}

function two(){
    if(noise){
        let audio = document.getElementById("clip2");   //html id's taken
        audio.play();
    }
    noise=true;
    topRight.style.backgroundColor="tomoto";
}
function three(){
    if(noise){
        let audio = document.getElementById("clip3");   //html id's taken
        audio.play();
    }
    noise=true;
    bottomLeft.style.backgroundColor="yellow";
}

function four(){
    if(noise){
        let audio = document.getElementById("clip4");   //html id's taken
        audio.play();
    }
    noise=true;
    bottomRight.style.backgroundColor="lightskyblue";
}

function clearColor(){
    topLeft.style.backgroundColor="darkgreen";
    topRight.style.backgroundColor="darkred";
    bottomLeft.style.backgroundColor="goldenrod";
    bottomRight.style.backgroundColor="darkblue";
}




//player clicks

topLeft.addEventListener('click',(event)=>{
    console.log("green click");
    if(power=true){
        playerOrder.push(1);
        console.log("playerOrder : ",playerOrder);
        check();        //player selection true ?
        one();
        if(!win){
            setTimeout(()=>{
                clearColor();
            },300);
        }
    }

})

topRight.addEventListener('click',(event)=>{
    console.log("red click");
    if(power=true){
        playerOrder.push(2);
        console.log("playerOrder : ",playerOrder);
        check();        //player selection true ?
        two();
        if(!win){
            setTimeout(()=>{
                clearColor();
            },300);
        }
    }

})


bottomLeft.addEventListener('click',(event)=>{
    console.log("yellow click");
    if(power=true){
        playerOrder.push(3);
        console.log("playerOrder : ",playerOrder);
        check();        //player selection true ?
        three();
        if(!win){
            setTimeout(()=>{
                clearColor();
            },300);
        }
    }

})

bottomRight.addEventListener('click',(event)=>{
    console.log("blue click");
    if(power=true){
        playerOrder.push(4);
        console.log("playerOrder : ",playerOrder);
        check();        //player selection true ?
        four();
        if(!win){
            setTimeout(()=>{
                clearColor();
            },300);
        }
    }

})


function check(){
    console.log("in check function ");
    console.log("playerOrder : ",playerOrder[playerOrder.length-1]," order : ", order[playerOrder.length-1]);
    if(playerOrder[playerOrder.length-1] !== order[playerOrder.length-1] ){ //check nums of player selection
        good=false;
    }
    if(playerOrder.length==20 && good==true){   //player selections true?
        winGame();
    }
    if(good==false){            //player selections false?
        flashColor();
        counter.innerHTML="NO!";
        setTimeout(()=>{
            counter.innerHTML=turn;
            clearColor();
            if(strict==true){
                play();
            }
            else{           //repeat round
                compTurn==true;
                flash=0;
                playerOrder=[];
                good=true;
                intervalId=setInterval(gameTurn,800);
            }
        },800);
        noise=false;     //click right selection makes noise, not for wrongs
    }

    if(turn==playerOrder.length && good && !win){
        console.log("if(turn==playerOrder.length && good && !win){");
        turn++;
        playerOrder=[];
        compTurn=true;
        flash=0;
        counter.innerHTML="turn";
        intervalId=setInterval(gameTurn,800);
    }
}

function flashColor(){
    topLeft.style.backgroundColor="lightgreen";
    topRight.style.backgroundColor="tomato";
    bottomLeft.style.backgroundColor="yellow";
    bottomRight.style.backgroundColor="lightskyblue";
}

function winGame(){
    flashColor();
    counter.innerHTML="WIN!";
    power=false;
    win=true;
}
