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
  this.activePlayer = 1;
}

Player.prototype.hold = function () {
  turnArray.splice(0, turnArray.length);
  this.activePlayer = 0;
  return this.totalScore += this.turnScore;
}

// Player.prototype.active = function () {
//   this.activePlayer = 1;
// }

Player.prototype.addTurnScore = function(){
  let sum = 0;

  for (let i = 0; i < turnArray.length; i++) {
    sum += turnArray[i];
    this.turnScore = sum;
  }
  return this.turnScore;
}


Player.prototype.rolling = function() {
  let roll = Math.floor(Math.random() * (7-1) + 1);
  this.activePlayer = 1;

  if (this.activePlayer === 1 && roll !== 1) {
    turnArray.push(roll);
  } else if (this.activePlayer ===1 && roll === 1){
    this.turnScore = 0;
    this.activePlayer = 0;
    turnArray.splice(0, turnArray.length);
  }
  return roll;
}

//UI Logic
$(document).ready(function() {
  $("#names").submit(function(event) {
    event.preventDefault();

    let player1Name = $('input#player1-name').val();
    let player2Name = $('input#player2-name').val();
    $(".player1-input").text(player1Name);
    $(".player2-input").text(player2Name);

    $("#names").hide();
    $("#game").show();

  });

  $("#play-one").click(function() {
    if (player1.activePlayer === 1) { 
      let player1Roll = player1.rolling();
      let player1TurnScore = player1.addTurnScore();
      
      $("#player1-roll").text(player1Roll);
      $("#player1-score").text(player1TurnScore);
    } else {
      $("#play-one").toggle("fast");
      $("#hold-one").toggle("fast");
      $("#play-two").toggle("fast");
      $("#hold-two").toggle("fast");
      player1.activePlayer = 0;
      player2.activePlayer = 1;
    }
  });

  $("#hold-one").click(function() {
    let player1Score = player1.hold();
    $("#player1-total-score").text(player1Score);

    $("#play-one").toggle("fast");
    $("#hold-one").toggle("fast");
    $("#play-two").toggle("fast");
    $("#hold-two").toggle("fast");
    player1.activePlayer = 0;
    player2.activePlayer = 1;
  });

  $("#play-two").click(function() {
    if (player2.activePlayer === 1) { 
      let player2Roll = player2.rolling();
      let player2TurnScore = player2.addTurnScore();
      
      $("#player2-roll").text(player2Roll);
      $("#player2-score").text(player2TurnScore);
    } else {
      $("#play-two").toggle("fast");
      $("#hold-two").toggle("fast");
      $("#play-one").toggle("fast");
      $("#hold-one").toggle("fast");
      player2.activePlayer = 0;
      player1.activePlayer = 1; 
    }
  });

  $("#hold-two").click(function() {
    let player2Score = player2.hold();
    $("#player2-total-score").text(player2Score);

    $("#play-two").toggle("fast");
    $("#hold-two").toggle("fast");
    $("#play-one").toggle("fast");
    $("#hold-one").toggle("fast");
    player2.activePlayer = 0;
    player1.activePlayer = 1;
  });
});