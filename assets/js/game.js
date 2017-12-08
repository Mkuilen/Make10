var button1;
var button2;
var button3;
var button4;
var uitslag;
var punten = 0;

function randomButtons() {
    var randomButton = Math.floor(Math.random() * 4) + 2;
    while (randomButton === 5) {
        randomButton = Math.floor(Math.random() * 4) + 2;
    }
    console.log(randomButton);
    var randomNumber1;
    var randomNumber2;
    var randomNumber3;
    var randomNumber4;
    if(randomButton === 2){
        randomNumber1 = Math.floor(Math.random() * 5) + 1;
        randomNumber2 = 10-randomNumber1;
        document.getElementById("button1").value = randomNumber1;
        document.getElementById("button2").value = randomNumber2;
        document.getElementById("button3").value = Math.floor(Math.random() * 10) + 1;
        document.getElementById("button4").value = Math.floor(Math.random() * 10) + 1;
    }else if(randomButton === 3){
        randomNumber1 = Math.floor(Math.random() * 4) + 1;
        randomNumber2 = Math.floor(Math.random() * 4) + 1;
        randomNumber3 = 10 - (randomNumber1 + randomNumber2);
        document.getElementById("button1").value = randomNumber1;
        document.getElementById("button2").value = randomNumber2;
        document.getElementById("button3").value = randomNumber3;
        document.getElementById("button4").value = Math.floor(Math.random() * 10) + 1;
    }else if(randomButton === 4){
        randomNumber1 = Math.floor(Math.random() * 4) + 1;
        randomNumber2 = Math.floor(Math.random() * 4) + 1;
        randomNumber3 = Math.floor(Math.random() * 4) + 1;
        randomNumber4 = 10 - (randomNumber1 + randomNumber2 + randomNumber3);
        document.getElementById("button1").value = randomNumber1;
        document.getElementById("button2").value = randomNumber2;
        document.getElementById("button3").value = randomNumber3;
        document.getElementById("button4").value = randomNumber4;
    }
}

function getButton(clicked_id){
    if(clicked_id === "button1"){
        button1 = parseInt(document.getElementById(clicked_id).value);
        if(uitslag == null){
            uitslag = button1;
        }else{
            uitslag = uitslag + button1;
        }
    }else if(clicked_id === "button2"){
        button2 = parseInt(document.getElementById(clicked_id).value);
        if(uitslag == null){
            uitslag = button2;
        }else{
            uitslag = uitslag + button2;
        }
    }else if(clicked_id === "button3"){
        button3 = parseInt(document.getElementById(clicked_id).value);
        if(uitslag == null){
            uitslag = button3;
        }else{
            uitslag = uitslag + button3;
        }
    }else if(clicked_id === "button4"){
        button4 = parseInt(document.getElementById(clicked_id).value);
        if(uitslag == null){
            uitslag = button4;
        }else{
            uitslag = uitslag + button4;;
        }
    }
    console.log(button1, button2, button3, button4);
    console.log(uitslag);
    if(uitslag === 10){
        punten++;
        uitslag = 0;
        randomButtons();
    }else if(uitslag > 10){
        uitslag = 0;
        randomButtons();
    }
}

var timeLeft = 30;
var elem = document.getElementById("timer");

var interval = setInterval(function() {
 
    var timer = document.getElementById("timer");
 
    if (Number(timeLeft) === 0) {
        clearInterval(interval);
        /*document.write("<form action='/insert.php' method='post'>")
        document.write("<h1>Jouw aantal punten was: <span id='points'>" + punten + "</span></h1>");
        document.write("<p>Druk op verzenden om in het scoreboard te komen!</p>");
        document.write("<input type='submit' id='btn'>");
        document.write("</form>");*/
        window.location.href = '../../end.html';
        document.cookie = "points=" + punten;
    }
    else {
        timer.innerHTML = 'Tijd: ' + timeLeft + " " + 'sec';
        timeLeft--;
    }
}, 1000);