let userScore = 0;
let compScore = 0;
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


function compFunc () {

    let arr = ['rock', 'paper','sisscor']
    let randomvalue = Math.floor(Math.random()*arr.length);
    let compValue=arr[randomvalue]
    return compValue; 
}  
const draw = () => {
    console.log('Draw ... try again!')
}
const showWinnner = (userValue ,compChoice,userwin) => {
   if(userwin){
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You win! Your ${userValue} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
    

   }else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You lose! computer ${compChoice} beats ${userValue}`;
    msg.style.backgroundColor = "red";

   }

}


const playGame= (userValue) =>{
    console.log("user choice", userValue)
    let compChoice = compFunc();
    console.log("comp choice",compChoice)
    let userwin = true
    if (userValue === compChoice){
        draw();
    }else {
        if(userValue === "rock"){
            userwin = compChoice === "paper"?false : true;
        }else if (userValue === "paper"){
            userwin = compChoice === "sisscor"?false: true;
        }else {
            userwin = compChoice === "rock"? false: true;
        }
    }
    showWinnner(userValue ,compChoice,userwin)

}





let choices = document.querySelectorAll('.choice')
choices.forEach((choice)=>{
    choice.addEventListener('click', (e) => {
        console.log('clicked')
        let userValue = choice.getAttribute('id');
       playGame(userValue);

        
    })
});