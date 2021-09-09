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
        alert('You won! Rock crushes scissors');
      } else if (computerChoice === 'paper') {
        alert('You lose! Paper covers rock');
      }
    } else if (playerChoice === 'paper') {
      if (computerChoice === 'rock') {
        alert('You won! Paper covers rock');
      } else if (computerChoice === 'scissors') {
        alert('You lose! Scissors cut paper');
      }
    } else if (playerChoice === 'scissors') {
      if (computerChoice === 'rock') {
        alert('You lose! Rock crushes scissors');
      } else if (computerChoice === 'paper') {
        alert('You won! Scissors cut paper');
      }
    }



}
