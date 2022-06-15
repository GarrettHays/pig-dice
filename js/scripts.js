//Business Logic
const turnArray = [];
const totalArray = [];

const player1 = new Player();
const player2 = new Player();

function dieRoll(){
  return Math.floor(Math.random() * (7-1) + 1);
}

function Player(name) {
  this.name = name;
  this.totalScore = 0;
  this.turnScore = 0;
  this.playerId = 0;
  // this.activePlayer = false; 
}

Player.prototype.rolling = function() {
  let roll = dieRoll();

  if (roll === 1) {
    turnArray.splice(0, turnArray.length);
    roll = "Whoops you rolled a 1!";
  } else { (roll != 1) 
    turnArray.push(roll);
  }
  return roll;
}

Player.prototype.addTurnScore = function(){
  for (let i = 0; i < turnArray.length; i++) {
    this.turnScore += turnArray[i];
  }
  return this.turnScore;
}

Player.prototype.hold = function () {
  turnArray.splice(0, turnArray.length);
  turnScore = 0
  return this.totalScore += this.turnScore;
}

// player1.rolling();



//UI Logic