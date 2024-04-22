let compScore =0;
let userScore=0;

let choices= document.querySelectorAll(".choice");


choices.forEach((val)=>{
val.addEventListener("click",()=>{

    let userChoice= val.getAttribute("id");
    playGame(userChoice);
    
})
});


const compChoicefun= ()=>{
   const option =["rock","paper","scissor"];
   let indx= Math.floor(Math.random()*3);

   return option[indx];
}


const playGame=(userChoice)=>{
    let compChoice= compChoicefun();
    console.log("user choice",userChoice);
    console.log("comp choice",compChoice);
    
}
