var express = require('express');
var app = express();
var port = 4000;

var leaderboardN;
var leaderboardS;
var GTNrandomNum;
var NMrandomNum;


let GTNLN = ["n/a","n/a","n/a","n/a","n/a","n/a","n/a","n/a","n/a","n/a"]; //guess the number leaderboard name
let GTNLS = [0,0,0,0,0,0,0,0,0,0]; //guess the number leaderboard score
let NMLN = ["n/a","n/a","n/a","n/a","n/a","n/a","n/a","n/a","n/a","n/a"]; //number memorization leaderboard name
let NMLS = [0,0,0,0,0,0,0,0,0,0]; //number memorization leaderboard score
let SMLN = ["n/a","n/a","n/a","n/a","n/a","n/a","n/a","n/a","n/a","n/a"]; //Slot Machine leaderboard name
let SMLS = [0,0,0,0,0,0,0,0,0,0]; //slot machine leaderboard score

app.post('/post', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    console.log("Received: ");
    console.log(JSON.parse(req.query['data']));
    var z = JSON.parse(req.query['data']);

    if (z['game']==="Guess the Number"){
        GTNrandomNum= Math.floor((Math.random() * 100) + 1);
    }
    if(z['game']==="Number Memorization"){
        var n = z['rounds'];
        var max = Math.pow(10,n+1)
        var min = Math.pow(10,n)
        NMrandomNum = Math.floor((Math.random() * max) + min)-1;
    }


    if (z['action']==="leaderboard"){
        var change = false
        if (z['game']==="Guess the Number"){
            if(z['change']==='change'){
                for (i=0;i<10;i++){
                    if(((GTNLN[i]==="n/a")||(z['score']<GTNLS[i]))&&(change==false)){
                        for (j=8;j>=i;j--){
                            GTNLN[j+1]=GTNLN[j];
                            GTNLS[j+1]=GTNLS[j];
                        }
                        GTNLN[i]=z['name'];
                        GTNLS[i]=z['score'];
                        change=true;
                    }
                }
            }
            leaderboardN=GTNLN;
            leaderboardS=GTNLS;
        }
        if(z['game']==="Number Memorization"){
            if(z['change']==='change'){    
                for (i=0;i<10;i++){
                    //window.alert("forloop checked #"+i);
                    if(((NMLN[i]==="n/a")||(z['count']>NMLS[i]))&&(change==false)){
                        //window.alert("n/a checked");
                        for (j=8;j>=i;j--){
                            NMLN[j+1]=NMLN[j];
                            NMLS[j+1]=NMLS[j];
                        }
                        NMLN[i]=z['name'];
                        NMLS[i]=z['count'];
                        change=true;
                    }
                }
            }
            leaderboardN=NMLN;
            leaderboardS=NMLS;
        }
        if (z['game']==="Slot Machine"){
            //window.alert("Title Checked");
            if(z['change']==='change'){
                for (i=0;i<10;i++){
                    //window.alert("forloop checked #"+i);
                    if(((SMLN[i]==="n/a")||(z['score1']<SMLS[i]))&&(change==false)){
                        //window.alert("n/a checked");
                        for (j=8;j>=i;j--){
                            SMLN[j+1]=SMLN[j];
                            SMLS[j+1]=SMLS[j];
                        }
                        SMLN[i]=z['name'];
                        SMLS[i]=z['score1'];
                        change=true;
                    }
                }
            }
            leaderboardN=SMLN;
            leaderboardS=SMLS;
        }
    }
    var jsontext = JSON.stringify({
        'leaderboardN': leaderboardN,
        'leaderboardS': leaderboardS,
        'game': z['game'],
        'change': 'no change',
        'GTNrandomNum': GTNrandomNum,
        'NMrandomNum': NMrandomNum,
    });
    console.log("Sent:")
    console.log(JSON.parse(jsontext));
    
    /*x = JSON.parse(jsontext);
    console.log("JSON:");
    console.log(x.leaderboardS);
    console.log("Name in postion 0")
    console.log(x.leaderboardS[1]);*/
    res.send(JSON.parse(jsontext));
})
//.listen(port);
//console.log("Server is running! (listening on port " + port + ")");
/*
app.get('/retrieve', (req, res) => {
    var data = jsontext;
    res.send(data);
});*/
app.listen(port, () => {
    console.log("Server is running! (listening on port " + port + ")");
});