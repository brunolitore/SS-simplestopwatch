window.onload = function () {
    var seconds = 00; 
    var milisec = 00; 
    var appendMilisec = document.getElementById("milisec")
    var appendSeconds = document.getElementById("seconds")
    var buttonStart = document.getElementById('button-start');
    var buttonStop = document.getElementById('button-stop');
    var buttonReset = document.getElementById('button-reset');
    var interval ;

    buttonStart.onclick = function() {
        clearInterval(interval);
        interval = setInterval(startTimer, 10);
    }
    buttonStop.onclick = function() {
        clearInterval(interval);
    }
    buttonReset.onclick = function() {
        clearInterval(interval);
        milisec = "00";
        seconds = "00";
        appendMilisec.innerHTML = milisec;
        appendSeconds.innerHTML = seconds;
    }
    function startTimer () {
        milisec++; 
        if(milisec < 9){
            appendMilisec.innerHTML = "0" + milisec;
        }
        if (milisec > 9){
            appendMilisec.innerHTML = milisec; 
        }
        if (milisec > 99) {
            console.log("seconds");
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            milisec = 0;
            appendMilisec.innerHTML = "0" + 0;
        }
        if (seconds > 9){
            appendSeconds.innerHTML = seconds;
        }
    }
}