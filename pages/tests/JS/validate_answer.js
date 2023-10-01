function validate_answer(answerVal)
{
    var j = get_char_index();
    var p = get_player_index();
    
    if (answerVal == kanas[j][1])
    {
        document.getElementById("result").style.color = "green";
        document.getElementById("result").innerHTML = "'" + answerVal + "' is correct";
        answer.style.display = "none";
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
        document.getElementById("result").innerHTML = "'" + answerVal + "' is a wrong answer";
        players[p][2][0]--;
    }
}

function Enter(event)
{
    var answerVal = answer.getElementsByTagName("input")[0].value;
    if (event.which == 13) // le code de la touche Enter
    {
        validate_answer(answerVal);
        answer.getElementsByTagName("input")[0].value = "";
    }
}
   
function check_answer(BTnum)
{
    var answerVal = answer.getElementsByTagName("button")[BTnum].innerHTML;
    validate_answer(answerVal);
}