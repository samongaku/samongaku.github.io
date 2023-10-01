function init_player_list()
{
    var j, rand;
    var imgGuest = new Array();
    for (let n = 0; myList[n]; n++)
    {
        players[n] = new Array(3);
        players[n][0] = myList[n];
        players[n][2] = [0, 0, 0, 0];
        
        rand = Math.floor(Math.random() * img.length);
        j = 0;
        while (j < imgGuest.length)
        {
            if (imgGuest[j] == img[rand])
            {
                rand = Math.floor(Math.random() * img.length);
                j = 0;
            }
            else
                j++;
        }
        imgGuest.push(img[rand]);
        
        if (myList[n] == pseudoList[0])
            players[n][0] = img[rand].substring(0, img[rand].length - 4).replace(/%20/g, ' ');
        players[n][1] = img[rand];
    }
}