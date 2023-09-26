function sort_tab()
{
    var tmp, t1, t2;
    
    for (let i = 0; players[i + 1]; i++)
    {
        t1 = players[i][2][0] + players[i][2][1] + players[i][2][2] + players[i][2][3];
        t2 = players[i + 1][2][0] + players[i + 1][2][1] + players[i + 1][2][2] + players[i + 1][2][3];
        if (t1 < t2)
        {
            tmp = players[i];
            players[i] = players[i + 1];
            players[i + 1] = tmp;
            i = -1;
        }
    }
}

function print_score_table()
{
    var total;
    var score = document.getElementById("score-table");
    score.innerHTML = "<tr><th>PLAYERS</th><th>ERRORS</th><th>TIME'S UP</th><th>CORRECT</th><th>BONUS</th><th>TOTAL</th></tr>";
    
    for (let i = 0; players[i]; i++)
    {
        total = 0;
        score.innerHTML += "<tr>";
        score.getElementsByTagName("tr")[i + 1].innerHTML += "<td>" + (i + 1) + ". " + players[i][0] + "</td>";
        for (let j = 0; j < 4; j++)
        {
            score.getElementsByTagName("tr")[i + 1].innerHTML += "<td>" + players[i][2][j] + "</td>";
            total += players[i][2][j];
            players[i][2][j] = 0;
        }
        score.getElementsByTagName("tr")[i + 1].innerHTML += "<td>" + total + "</td>";
        score.getElementsByTagName("tr")[i + 1].innerHTML += "</tr>";
    }
}

function print_score()
{
    document.getElementById("test").innerHTML = "END";
    document.getElementById("bt").innerHTML = "AGAIN";
    document.getElementById("profil").src = "";
    document.getElementById("login").innerHTML = "";
    document.getElementById("question").innerHTML = "";
    document.getElementById("countdown").style.display = "none";
    document.getElementById("score").style.display = "block";
    sort_tab();
    print_score_table();
}

var num = 0;
var cpy = new Array();

function print_quiz_elements()
{
    document.getElementById("question").innerHTML = "Question " + (num + 1) + "/" + len;
    document.getElementById("answer").style.display = "inline";
    document.getElementById("answer").value = "";
    document.getElementById("answer").focus();
    document.getElementById("bt").style.display = "none";
    document.getElementById("countdown").style.display = "block";
    document.getElementById("score").style.display = "none";
}

function print_random_char()
{
    var j = 0;
    var rand = Math.floor(Math.random() * len);
    while (j < cpy.length)
    {
        if (cpy[j] == rand)
        {
            rand = Math.floor(Math.random() * len);
            j = 0;
        }
        else
            j++;
    }
    cpy.push(rand);
    document.getElementById("test").innerHTML = kanas[rand][0];
}

function print_player_profile()
{
    if (myList.length < 2)
        return ;
    var p = (num) % players.length;
    document.getElementById("login").innerHTML = players[p][0];
    document.getElementById("profil").src = "img_profil/" + players[p][1];
}

function display_quiz()
{
    countdownSeconds = timer;
    updateCountdown();
    countdownInterval = setInterval(updateCountdown, 1000);
    document.getElementById("quiz").style.display = "flex";
    document.getElementById("start").style.display = "none";
    document.getElementById("result").innerHTML = "";
    document.getElementById("soluce").innerHTML = "";
    
    if (num == len)
    {
        cpy = [];
        num = 0;
        print_score();
        clearInterval(countdownInterval);
        return ;
    }
    
    print_quiz_elements();
    print_random_char();
    print_player_profile();
    num++;
}