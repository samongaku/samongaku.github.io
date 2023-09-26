function Enter(event)
{
    var j = get_char_index();
    var p = get_player_index();
    var answer = document.getElementById("answer").value;
    if (event.which == 13) // le code de la touche Enter
    {
        if (answer == kanas[j][1])
        {
            document.getElementById("result").style.color = "green";
            document.getElementById("result").innerHTML = "'" + answer + "' is correct";
            document.getElementById("answer").style.display = "none";
            document.getElementById("bt").style.display = "block";
            document.getElementById("bt").innerHTML = "NEXT";
            document.getElementById("bt").focus();
            players[p][2][2]++;
            if (countdownSeconds >= timer - 5)
                players[p][2][3]++;
            clearInterval(countdownInterval);
        }
        else
        {
            document.getElementById("result").style.color = "red";
            document.getElementById("result").innerHTML = "'" + answer + "' is a wrong answer";
            players[p][2][0]--;
        }
        document.getElementById("answer").value = "";
    }
}