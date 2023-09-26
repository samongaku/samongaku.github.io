function get_player_index()
{
    if (players.length < 2)
        return (0);
    var j = 0;
    var char = document.getElementById("login").innerHTML;
    while (players[j] && char != players[j][0])
        j++;
    return (j);
}

function get_char_index()
{
    var j = 0;
    var char = document.getElementById("test").innerHTML;
    while (kanas[j] && char != kanas[j][0])
        j++;
    return (j);
}