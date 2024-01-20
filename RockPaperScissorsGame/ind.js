const totalScore =  { computerScore : 0 , playerScore : 0}

function getComputerChoice(){
   let rpsChoices = ['Rock' , 'Paper' ,'Scissors']
   let computerChoice = rpsChoices[Math.floor(Math.random()*3)];
   return computerChoice;
}

function getResult(playerChoice, computerChoice){
  let score ;

  if(computerChoice == playerChoice){
    score = 0;

  } else if (computerChoice === 'Rock' && playerChoice === 'Scissors') {
    score = 1;
  } else if (computerChoice === 'Paper' && playerChoice === 'Rock'){
    score = 1;
  } else if (computerChoice === 'Scissors' && playerChoice === 'Paper') {
    score = 1;
  } else {
    score = -1;
  }
  return score;
}

function showResult(score, playerChoice, computerChoice){
  const resultDiv = document.getElementById('result')
  const handsDiv = document.getElementById('hands')
  const playerScoreDiv = document.getElementById('player-score')

  if(score == -1){
    resultDiv.innerText = 'You Lose !'
  } else if (score == 0) {
    resultDiv.innerText = "It's tie !"
  } else {
    resultDiv.innerText = 'You won !'
  }
  handsDiv.innerText = `🧑‍🦰${playerChoice} vs 🤖${computerChoice}`
  playerScoreDiv.innerText = `Your Score${totalScore['playerScore']}`
}

function onClickRPS(playerChoice){
  const computerChoice = getComputerChoice ()
   const score = getResult (playerChoice,computerChoice)
   totalScore['playerScore'] += score;
   showResult(score,playerChoice,computerChoice)
}
function playGame(){
  let rpsButtons = document.querySelectorAll('.rpsButton')
  rpsButtons[0].onclick = () => console.log(rpsButtons[0].value)

  rpsButtons.forEach(rpsButton  => { rpsButton.onclick =() => onClickRPS(rpsButton.value)

  })

  const endGameButton = document.getElementById('endGameButton')
  endGameButton.onclick = () => endGame(totalScore)
}

function endGame(totalScore){
   totalScore['playerScore'] = 0;
   totalScore['computerScore'] = 0;

   const resultDiv = document.getElementById('result')
   const handsDiv = document.getElementById('hands')
   const playerScoreDiv = document.getElementById('player-score')
   
   resultDiv.innerText = '';
   handsDiv.innerText = '';
   playerScoreDiv = '';
}
playGame();
