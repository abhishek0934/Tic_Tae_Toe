let playerOscore=0;
let playerXscore=0;
let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newgamebutton=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let playerOscoredisplay=document.querySelector("#player0-score");
let playerXscoredisplay=document.querySelector("#playerX-score");


let turn=true;

const winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box) => {
box.addEventListener("click",()=>{
    // box.innerText="ab";
    console.log("box was clicked");
    if(turn){
        box.innerText="O";
        turn=false;
    }
    else{
        box.innerText="X";
        turn=true;
    }
    box.disabled=true;
    checkwinner();
 });
});

const resetgame=()=>{
    turn=true;
    boxes.forEach((box)=> {
        box.innerText="";

    });
    enabledboxes();
    msgcontainer.classList.add("hide");
}

const disabledboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enabledboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
    }
}

const showwinner=(winner)=>{
    msg.innerText=`Congratulation, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disabledboxes();

    if(winner==="O"){
        playerOscore++;
        playerOscoredisplay.innerText=playerOscore;
    }
    else if(winner=== "X"){
        playerXscore++;
        playerXscoredisplay.innerText=playerXscore;
    }

}

const checkwinner =()=>{
    for(let pattern of  winpattern) {
        
           let post1 = boxes[pattern[0]].innerText;
           let post2 = boxes[pattern[1]].innerText;
           let post3 = boxes[pattern[2]].innerText;

           if(post1!=="" && post2!=="" && post3!==""){
            if(post1=== post2 && post2 ===post3){
                console.log("Wineer",post1);
                showwinner(post1);
            }
           }
    }
}

newgamebutton.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);



