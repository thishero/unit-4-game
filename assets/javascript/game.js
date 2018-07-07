
var winsCounter = 0;
var lossCounter = 0;
var totalScore = 0;
// var lockGame = false;

$(document).ready(function() {
    var computerNumber = Math.floor(Math.random() * 101) + 19;
    $('#cpuNumber').append(computerNumber);
    var red = Math.floor(Math.random()* 11) + 1;
    $('#red').attr('value', red);
    var blue = Math.floor(Math.random()* 11) + 1;
    $('#blue').attr('value', blue);
    var green = Math.floor(Math.random()* 11) + 1;
    $('#green').attr('value', green);
    var yellow = Math.floor(Math.random()* 11) + 1;
    $('#yellow').attr('value', yellow);

    // reset the values of the totalScore, computerNumber, and button values
    var reset = function() {
        totalScore = 0;
        computerNumber = Math.floor(Math.random() * 101) + 19;
        $('#cpuNumber').text("");
        $('#cpuNumber').append(computerNumber);
        red = Math.floor(Math.random()* 11) + 1;
        $('#red').attr('value', red);
        blue = Math.floor(Math.random()* 11) + 1;
        $('#blue').attr('value', blue);
        green = Math.floor(Math.random()* 11) + 1;
        $('#green').attr('value', green);
        yellow = Math.floor(Math.random()* 11) + 1;
        $('#yellow').attr('value', yellow);
    };

    $('.color').on('click', function() {
        var yourPick = $(this).attr("value");
        totalScore += parseInt(yourPick);
        if (totalScore > computerNumber) {
            lossCounter++;
            $('#lossTally').text(lossCounter);
            // Call a reset function here
            reset();
        } else if (totalScore === computerNumber) {
            winsCounter++;
            $('#winTally').text(winsCounter);
            // Call a reset function here
            reset();
        } else (totalScore < computerNumber)
            $('#yourScore').text(totalScore);
    })
});

            // this was my old incorrect way of adding value to totalScore
            // totalScore = totalScore + $(this).val();