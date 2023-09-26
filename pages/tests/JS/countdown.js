var countdownSeconds = 10;
var countdownInterval;
var timer = parseInt(localStorage.getItem("timer"));

function updateCountdown()
{
    var countdownElement = document.getElementById("countdown");
    countdownElement.textContent = "00:";
    if (countdownSeconds < 10)
        countdownElement.textContent += "0";
    countdownElement.textContent += countdownSeconds;
    if (countdownSeconds == 0)
    {
        var n = get_char_index();
        clearInterval(countdownInterval);
        document.getElementById("soluce").innerHTML = kanas[n][1];
        document.getElementById("answer").style.display = "none";
        document.getElementById("bt").style.display = "block";
        document.getElementById("bt").innerHTML = "NEXT";
        document.getElementById("bt").focus();
        countdownElement.textContent = "Time's up !";
        players[get_player_index()][2][1]--;
    }
    countdownSeconds--;
}