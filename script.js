//Display Score Board//
let playerScore = 0;
let computerScore = 0;

const playerScoreBoard = document.querySelector('.playerScore');
const computerScoreBoard = document.querySelector('.computerScore');

playerScoreBoard.textContent = 'Player: ' + playerScore;
computerScoreBoard.textContent = 'Computer: ' + computerScore;



const play = playerChoice => {
  //Reset Computer controls//
  const rockComp = document.querySelector('.rockComp');
  const paperComp = document.querySelector('.paperComp');
  const scissorsComp = document.querySelector('.scissorsComp');
  const textResult = document.querySelector('.textResult');

  rockComp.style.transform = 'scale(1)';
  paperComp.style.transform = 'scale(1)';
  scissorsComp.style.transform = 'scale(1)';

  //Computer's choice//
  const getRandomInt = max => {
  return Math.floor(Math.random() * max);
}
  const choiceArr = ['rock', 'paper', 'scissors'];
  const randomChoice = getRandomInt(3);
  const computerChoice = choiceArr[randomChoice];

  //Check Choices//
  if (playerChoice === computerChoice) {
      if (computerChoice === 'rock') {
        rockComp.style.transform = 'scale(2)';
      } else if (computerChoice === 'paper') {
        paperComp.style.transform = 'scale(2)';
      } else if (computerChoice === 'paper') {
        scissorsComp.style.transform = 'scale(2)';
      }
      textResult.textContent = 'Draw! Play again';
    } else if (playerChoice === 'rock' ) {
      if (computerChoice === 'scissors') {
        scissorsComp.style.transform = 'scale(2)';
        textResult.textContent = 'You won! Rock crushes scissors';
        playerScore++;
      } else if (computerChoice === 'paper') {
        paperComp.style.transform = 'scale(2)';
        textResult.textContent = 'You lose! Paper covers rock';
        computerScore++;
      }
    } else if (playerChoice === 'paper') {
      if (computerChoice === 'rock') {
        rockComp.style.transform = 'scale(2)';
        textResult.textContent = 'You won! Paper covers rock';
        playerScore++;
      } else if (computerChoice === 'scissors') {
        scissorsComp.style.transform = 'scale(2)';
        textResult.textContent = 'You lose! Scissors cut paper';
        computerScore++;
      }
    } else if (playerChoice === 'scissors') {
      if (computerChoice === 'rock') {
        rockComp.style.transform = 'scale(2)';
        textResult.textContent = 'You lose! Rock crushes scissors';
        computerScore++;
      } else if (computerChoice === 'paper') {
        paperComp.style.transform = 'scale(2)';
        textResult.textContent = 'You won! Scissors cut paper';
        playerScore++;
      }
    }

    //Update Score Board//
    playerScoreBoard.textContent = 'Player: ' + playerScore;
    computerScoreBoard.textContent = 'Computer: ' + computerScore;


}
