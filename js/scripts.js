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
}

Player.prototype.hold = function () {
  turnArray.splice(0, turnArray.length);
  turnScore = 0
  return this.totalScore += this.turnScore;
}

Player.prototype.rolling = function() {
  let roll = dieRoll();

  if (roll !== 1) {
    turnArray.push(roll);
  } 
  if (roll === 1) {
    this.hold();
  }
  //   turnArray.splice(0, turnArray.length);
  //   roll = "Whoops you rolled a 1!";
  //   this.hold();
  // } else { (roll != 1) 
  //   turnArray.push(roll);
  // }
  return roll;
}

Player.prototype.addTurnScore = function(){
//   let sum = 0;

//   for (let i = 0; i < turnArray.length; i++) {
//     sum += turnArray[i];
//     this.turnScore = sum;
//   }
//   return this.turnScore;
// }

  for (let i = 0; i < turnArray.length; i++) {
    console.log(this.turnScore);
    this.turnScore = turnArray[i] + this.turnScore;
  }
  return this.turnScore;
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
    let player1Roll = player1.rolling();
    let player1TurnScore = player1.addTurnScore();

    $("#player1-roll").text(player1Roll);
    $("#player1-score").text(player1TurnScore);
  });

  $("#hold-one").click(function() {
    let player1Score = player1.hold();
    $("#player1-total-score").text(player1Score);

    $("#play-one").fadeOut("slow");
    $("#hold-one").fadeOut("slow");
    $("#play-two").fadeIn("slow");
    $("#hold-two").fadeIn("slow");
  });

  $("#play-two").click(function() {
    let player2Roll = player2.rolling();
    let player2TurnScore = player2.addTurnScore();

    $("#player2-roll").text(player2Roll);
    $("#player2-score").text(player2TurnScore);
  });

  $("#hold-two").click(function() {
    let player2Score = player2.hold();
    $("#player2-total-score").text(player2Score);

    $("#play-two").fadeOut("slow");
    $("#hold-two").fadeOut("slow");
    $("#play-one").fadeIn("slow");
    $("#hold-one").fadeIn("slow");

  });

});