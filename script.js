var rockButton = document.getElementById('rock')
var paperButton = document.getElementById('paper')
var scissorsButton = document.getElementById('scissors')
var outcomeBox = document.getElementById('outcome');

var randomNumber = function(min,max){
  return Math.floor(Math.random ()* 100);
}

var playerChoice; 
var computerChoice;

var playerScore = 0;
var computerScore = 0; 

var compare = function(computerChoice, playerChoice) {
  console.log('computerChoice:' + computerChoice);
  console.log('playerChoice:' + playerChoice);

  if (computerChoice === playerChoice) {
    outcomeBox.innerHTML = "<p>It's a tie!</p>"
  }
  else if (computerChoice === 'rock'){
    if (playerChoice === 'scissors'){
      outcomeBox.innerHTML = "<p>Rock crushes scissors...You lose :(</p>"
      computerScore++;
    }
    else if (playerChoice === 'paper') {
      outcomeBox.innerHTML = "<p>Paper covers rock. You win :)</p>"
      playerScore++;
    }
  }
  else if (computerChoice === 'scissors') {
    if (playerChoice === 'rock') {
      outcomeBox.innerHTML = "<p>Rock crushes scissors. You win :)</p>"
      playerScore++;
    }
    else if (playerChoice === 'paper') {
      outcomeBox.innerHTML = "<p>Scissors custs paper... You lose :(</p>"
      playerScore++;
    }
  }
  else if (computerChoice === 'paper') {
    if (playerChoice === 'rock') {
      outcomeBox.innerHTML = "<p>Paper covers rock... You lose :(</p>"
      computerScore++;
    }
    else if (playerChoice === 'scissors') {
      outcomeBox.innerHTML = "<p>Scissors custs paper... You win :)</p>"
      playerScore++;
    }
  }

  document.getElementById('playerScore').innerHTML=playerScore;
  document.getElementById('computerScore').innerHTML=computerScore;
}

var botChoice = function(playerChoice) {
  var randNum = randomNumber(0,100);
  console.log('Random Number Generated for bot Choice:' + randNum);

  if (randNum <= 33) {
    document.getElementById('bot').innerHTML ='rock'
    computerChoice = 'rock';
  } else if (randNum >= 34 && 66) {
    document.getElementById('bot').innerHTML ='paper'
    computerChoice = 'paper';
  } else if (randNum >= 100) {
    document.getElementById('bot').innerHTML = 'scissors'
    computerChoice= 'scissors';
  }

  compare(computerChoice, playerChoice);
}

rockButton.addEventListener('click', function(e) {
  playerChoice = 'rock';
  botChoice(playerChoice);
});

paperButton.addEventListener('click', function(e) {
  playerChoice = 'paper';
  botChoice(playerChoice);
});

scissorsButton.addEventListener('click', function(e) {
  playerChoice = 'scissors';
  botChoice(playerChoice);
});