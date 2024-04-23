let compScore =0;
let userScore=0;
let msg= document.querySelector("#msg");
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





const drawgame=()=>{
    msg.innerText="Game Draw";
    msg.style.backgroundColor="blue";
    console.log("Game Draw");
}

const showwinner=(userwin)=>{
    if(userwin)
    {   msg.innerText="You Win";
    msg.style.backgroundColor=" rgb(6, 201, 38)";
    // msg.classList.remove("lose");
    //     msg.classList.add("won");
        
        console.log("You win");
    }else{
        msg.innerText="You lose";
        msg.style.backgroundColor="red";
        // msg.classList.remove("won");
        // msg.classList.add("lose");
        console.log("you lose");
    }
}
                 


const playGame=(userChoice)=>{
    let compChoice= compChoicefun();
    console.log("user choice",userChoice);
    console.log("comp choice",compChoice);

    if(userChoice===compChoice)
    {
        drawgame();
    }
    else 
    {
        let userwin= true;
        if(userChoice==="rock")
        {
         userwin = compChoice==="paper"?false:true; 
        }
        else if(userChoice==="paper") {
            userwin=compChoice==="scissor"?false:true;
        }
        else{
            userwin= compChoice==="rock"?false:true;
        }

        showwinner(userwin);
    }

    
    
};
