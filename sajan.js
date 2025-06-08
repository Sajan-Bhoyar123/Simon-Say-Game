let userseq = [];
let gameseq = [];
let randomchoice =["yellow","green","red","purple"];
let start = false;
let level = 0;

let h3 = document.querySelector("h3")
document.addEventListener("click",function(){
     if(start==false){
        console.log("game start");
        start = true;
        levelup();
     }
   
});
function levelup(){
    userseq = [];
     level++;
     h3.innerText = `level = ${level}`;
     randombtn();
}
function randombtn (){
    let randomval =   Math.floor(Math.random()*4);
     let randomcol = randomchoice[randomval];
     gameseq.push(randomcol);
     console.log("gameseq = ",gameseq);
     let btn = document.querySelector(`.${randomcol}`);
     gameflash(btn);
}
function gameflash(btn){
      btn.classList.add("gamechamak");
      setTimeout(function(){
        btn.classList.remove("gamechamak");
      },200)
} 
function userflash(btn){
    btn.classList.add("userchamak");
    setTimeout(function(){
      btn.classList.remove("userchamak");
    },200)
} 
function boxpress(){
     let btn = this;
     let usercol = btn.getAttribute("id");
      userseq.push(usercol);
      console.log("userseq =", userseq);
     userflash(btn);
     check(userseq.length-1);
}
function check(idx){
   if(userseq[idx]==gameseq[idx]){
         if(userseq.length==gameseq.length){
             setTimeout(levelup,1000)
         }
   }else{
    h3.innerHTML = `Game Over! <b>Your Score was ${level}</b> <br> press any key to start`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor = "white";
    },150)
    setTimeout(reset, 500);  
   }
}
let boxes = document.querySelectorAll(".box");
for(box of boxes){
      box.addEventListener("click",boxpress)
}
function reset(){
     userseq = [];
     gameseq = [];
     start = false;
     level = 0;
}