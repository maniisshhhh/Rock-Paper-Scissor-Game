//Selecting variables...
const chooseOptions =['Rock','Paper','Scissor'];
const playerText = document.getElementById("playerText");
const computerText = document.getElementById("computerText");
const resultText = document.getElementById("resultText");
const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore");
let player = 0;
let computer = 0;

//Declaring function :-
function startGame(playerChoice){
    const computerChoice = chooseOptions[Math.floor(Math.random()*3)];//using floor & random to make the no in b/w 0,1,2
    let result = "";

    //Defining the condition...
    if(playerChoice === computerChoice){
        result = ("It's a Draw!");
        
    }
    else {
        switch(playerChoice){
            case 'Rock' :
                result = (computerChoice === 'Scissor') ? "You Win" : "You Lose";
                break;
                
            case 'Paper' :
                result = (computerChoice === 'Rock') ? "You Win" : "You Lose";
                break;

            case 'Scissor' :
                result = (computerChoice === 'Paper') ? "You Win" : "You Lose";
                break;
    

        }

    }

    //Displaying the choices of user and computer both...
    playerText.textContent = `Player Choice : ${playerChoice}`;
    computerText.textContent = `Computer Choice : ${computerChoice}`;
    resultText.textContent = result;

    resultText.classList.remove("greenText","redText");//making the result text black after every refresh..

    //For the updation of score on screen....
    switch(result){
        case "You Win":
            resultText.classList.add("greenText");
            player++;
            playerScore.textContent = player;
            break;

        case "You Lose":
            resultText.classList.add("redText");
            computer++;
            computerScore.textContent = computer;
            break;

        
    }

}

function mode(){
    let btn = document.body;
    btn.classList.toggle("dark");
}
