console.log('test')

var winsCounter = 0;
var lossesCounter = 0;
var totalScore = 0;

var computerNumber = Math.floor(Math.random()*11);
$('#cpuNumber').append(computerNumber);

$(document).ready(function() {
   var random = Math.floor(Math.random()*40);
   $('#cpuNumber').text(random);
   
   var red = Math.floor(Math.random()*11+1)
   var blue = Math.floor(Math.random()*11+1)
   var green = Math.floor(Math.random()*11+1)
   var yellow = Math.floor(Math.random()*11+1)

   $('#winTally').text(winsCounter);
   $('#lossTally').text(lossesCounter);
   
function winner() {
    winsCounter++;
    $('#numberWins').text(winsCounter);
    reset();
    }
   
function loser() {
    lossesCounter++;
    $('#numberLosses').text(lossesCounter);
    reset()
    }

function reset() {
    random = Math.floor(Math.random()*40);
    $('#cpuNumber').text(random);
    num1 = Math.floor(Math.random()*11+1);
    num2 = Math.floor(Math.random()*11+1);
    num3 = Math.floor(Math.random()*11+1);
    num4 = Math.floor(Math.random()*11+1);
    totalScoreCounter = 0;
    $('#yourScoreBox').text(totalScoreCounter);
    }
});