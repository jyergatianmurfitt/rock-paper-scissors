//Display Score Board//
let playerScore = 0;
let computerScore = 0;

const playerScoreBoard = document.querySelector('.playerScore');
const computerScoreBoard = document.querySelector('.computerScore');

playerScoreBoard.textContent = 'Player: ' + playerScore;
computerScoreBoard.textContent = 'Computer: ' + computerScore;



const play = playerChoice => {
  //Computer's choice//
  const getRandomInt = max => {
  return Math.floor(Math.random() * max);
}
  const choiceArr = ['rock', 'paper', 'scissors'];
  const randomChoice = getRandomInt(2);
  const computerChoice = choiceArr[randomChoice];

  //Check Choices//
  if (playerChoice === computerChoice) {
      console.log('Draw! Play again.')
    } else if (playerChoice === 'rock' ) {
      if (computerChoice === 'scissors') {
        console.log('You won! Rock crushes scissors');
        playerScore++;
      } else if (computerChoice === 'paper') {
        console.log('You lose! Paper covers rock');
        computerScore++;
      }
    } else if (playerChoice === 'paper') {
      if (computerChoice === 'rock') {
        console.log('You won! Paper covers rock');
        playerScore++;
      } else if (computerChoice === 'scissors') {
        console.log('You lose! Scissors cut paper');
        computerScore++;
      }
    } else if (playerChoice === 'scissors') {
      if (computerChoice === 'rock') {
        console.log('You lose! Rock crushes scissors');
        computerScore++;
      } else if (computerChoice === 'paper') {
        console.log('You won! Scissors cut paper');
        playerScore++;
      }
    }

    //Update Score Board//
    playerScoreBoard.textContent = 'Player: ' + playerScore;
    computerScoreBoard.textContent = 'Computer: ' + computerScore;


}
