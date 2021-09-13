//Display Score Board//
let playerScore = 0;
let computerScore = 0;

const playerScoreBoard = document.querySelector('.playerScore');
const computerScoreBoard = document.querySelector('.computerScore');

playerScoreBoard.textContent = 'Player: ' + playerScore;
computerScoreBoard.textContent = 'Computer: ' + computerScore;


//Click-effect on mobile//
const obj = document.querySelectorAll('.obj');

obj.forEach((object, i) => {
  object.addEventListener('click', e = () => {
    if(window.innerWidth < 680) {
      object.style.transform = 'scale(2)';
      setTimeout(function(){
        object.style.transform = 'scale(1)';
      }, 1500);
    }
  });
});


//Main game function
const play = (playerChoice) => {

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

  //Responsive Result Message
  const overlay = document.querySelector('.overlay');

  const callResult = message => {
    if (window.innerWidth > 680) {
      textResult.textContent = message;
    } else {
      setTimeout(function(){
        overlay.style.display = 'block';
        textResult.textContent = message;
        textResult.classList.add('mobile');
        textResult.style.display = 'block';
      }, 500);
      setTimeout(function(){
        overlay.style.display = 'none';
        textResult.classList.remove('mobile');
        textResult.style.display = 'none';
      }, 1500);
      setTimeout(function(){
        rockComp.style.transform = 'scale(1)';
        paperComp.style.transform = 'scale(1)';
        scissorsComp.style.transform = 'scale(1)';
      }, 1500);
    }
  }

  //Check Choices//
  if (playerChoice === computerChoice) {
      if (computerChoice === 'rock') {
        rockComp.style.transform = 'scale(2)';
      } else if (computerChoice === 'paper') {
        paperComp.style.transform = 'scale(2)';
      } else if (computerChoice === 'scissors') {
        scissorsComp.style.transform = 'scale(2)';
      }
        callResult('Draw! Play again');
    } else if (playerChoice === 'rock' ) {
      if (computerChoice === 'scissors') {
        scissorsComp.style.transform = 'scale(2)';
        callResult('You won! Rock crushes scissors');
        playerScore++;
      } else if (computerChoice === 'paper') {
        paperComp.style.transform = 'scale(2)';
        callResult('You lose! Paper covers rock');
        computerScore++;
      }
    } else if (playerChoice === 'paper') {
      if (computerChoice === 'rock') {
        rockComp.style.transform = 'scale(2)';
        callResult('You won! Paper covers rock');
        playerScore++;
      } else if (computerChoice === 'scissors') {
        scissorsComp.style.transform = 'scale(2)';
        callResult('You lose! Scissors cut paper');
        computerScore++;
      }
    } else if (playerChoice === 'scissors') {
      if (computerChoice === 'rock') {
        rockComp.style.transform = 'scale(2)';
        callResult('You lose! Rock crushes scissors');
        computerScore++;
      } else if (computerChoice === 'paper') {
        paperComp.style.transform = 'scale(2)';
        callResult('You won! Scissors cut paper');
        playerScore++;
      }
    }

    //Update Score Board//
    playerScoreBoard.textContent = 'Player: ' + playerScore;
    computerScoreBoard.textContent = 'Computer: ' + computerScore;


}
