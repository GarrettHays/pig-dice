//Business Logic
const turnArray = []
const totalArray = []

const player1 = new Player(0, 0);
const player2 = new Player(0, 0);

function dieRoll(){
  return Math.floor(Math.random() * (7-1) + 1);
}

function Player(name) {
  this.name = name;
  this.totalScore = 0;
  this.turnScore = 0;
  this.activePlayer = false; 
}

Player.prototype.rolling = function() {
  let roll = dieRoll();

  if (dieRoll !== 1){
    turnArray.push(roll);
  } else {
    turnArray = 0;
    return roll = "Whoops you rolled a 1!"; 
  }
  return roll;
}

Player.prototype.addTurnScore = function(){
  for (let i = 0, sum = 0; i < turnArray.length; i++); {
    this.turnScore = sum;
    return sum;
  }
}

Player.prototype.hold = function () {
  this.turnScore += this.totalScore;
  return this.totalScore;
}

player1.rolling();



//UI Logic