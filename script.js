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
  if (computerChoice === playerChoice) {
    outcomeBox.innerHTML = "<p>It's a tie!</p>"
  } else if (computerChoice === 'rock')
    if (playerChoice === 'scissors'){
    outcomeBox.innerHTML = "<p>Rock crushes scissors...You lose :(</p>"
    computerScore++;
}
  else if (computerChoice === 'rock')
    if (playerChoice === 'paper') {
    outcomeBox.innerHTML = "<p>Paper covers rock. You win :)</p>"
    playerScore++;

}
  else if (computerChoice === 'scissors')
    if (playerChoice === 'rock') {
    outcomeBox.innerHTML = "<p>Rock crushes scissors. You win :)</p>"
    playerScore++;
    }

else if (computerChoice === 'paper')
  if (playerChoice === 'rock') {
    outcomeBox.innerHTML = "<p>Paper covers rock... You lose :(</p>"
    computerScore++;
  }

else if (computerChoice ==='paper')
  if (playerChoice === 'scissors') {
    outcomeBox.innerHTML = "<p>Scissors custs paper... You win :)</p>"
    playerScore++;
  }
else if (computerChoice ==='scissors')
  if (playerChoice === 'paper') {
    outcomeBox.innerHTML = "<p>Scissors custs paper... You lose :(</p>"
    computerScore++;
  }
}

var botChoice = function() {
  var randNum = randomNumber(0,100);

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

  compare();
}

rockButton.addEventListener('click', function(e) {
 playerChoice = 'rock';
  botChoice();
});

paperButton.addEventListener('click', function(e) {
  playerChoice = 'paper';
  botChoice();
});

scissorsButton.addEventListener('click', function(e) {
  playerChoice = 'scissors';
  botChoice();
});