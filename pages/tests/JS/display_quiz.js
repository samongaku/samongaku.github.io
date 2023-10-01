function display_players()
{
    if (players.length < 2)
    {
        display_quiz();
        return ;
    }
    for (let i = 0; players[i]; i++)
        document.getElementById("profiles").innerHTML += "<div><img src='img_profil/" + players[i][1] + "'><p>" + players[i][0] + "</p></div>";
    document.getElementById("quiz").style.display = "none";
}

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

function generate_random_answers()
{
    var n;
    var pos;
    var char = get_char_index();
    
    if (level == "1")
        n = [0, 1];
    else if (level == "2")
        n = [0, 1, 3, 4];
    else if (level == "3")
        n = [0, 1, 3, 4, 6, 7];
    else if (level == "4")
        n = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    else
        return ;
    
    for (let i = 0; i < n.length; i++)
    {
        pos = Math.floor(Math.random() * kanas.length);
        while (kanas[pos][1] == kanas[char][1])
            pos = Math.floor(Math.random() * kanas.length);
        answer.getElementsByTagName("button")[n[i]].innerHTML = kanas[pos][1];
    }
    
    pos = Math.floor(Math.random() * n.length);
    answer.getElementsByTagName("button")[n[pos]].innerHTML = kanas[char][1];
}

function print_answer()
{
    answer.style.display = "block";
    if (level == "5")
    {
        answer.getElementsByTagName("input")[0].style.display = "inline";
        answer.getElementsByTagName("input")[0].value = "";
        answer.getElementsByTagName("input")[0].focus();
    }
    else
        document.getElementById("lineBT1").style.display = "block";
    if (level == "2" || level == "3" || level == "4")
        document.getElementById("lineBT2").style.display = "block";
    if (level == "3" || level == "4")
        document.getElementById("lineBT3").style.display = "block";
    if (level == "1" || level == "2" || level == "3")
    {
        answer.getElementsByTagName("button")[2].style.display = "none";
        answer.getElementsByTagName("button")[5].style.display = "none";
        answer.getElementsByTagName("button")[8].style.display = "none";
    }
    generate_random_answers();
}

var num = 0;
var cpy = new Array();

function print_quiz_elements()
{
    document.getElementById("question").innerHTML = "Question " + (num + 1) + "/" + len;
    document.getElementById("bt").style.display = "none";
    document.getElementById("countdown").style.display = "block";
    document.getElementById("score").style.display = "none";
    print_answer();
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
    
    print_random_char();
    print_quiz_elements();
    print_player_profile();
    num++;
}