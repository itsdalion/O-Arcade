let GtnBtn = document.getElementById("GTNbutton");  //button 0
let NmBtn = document.getElementById("NMbutton");  //button 1
let SmBtn = document.getElementById("SMbutton"); //button 2

var NoL = document.getElementById("NfL"); //Name on Leaderboard
var SoL = document.getElementById("SfL"); //Score on Leaderboard

var response;
var game;
var url =  "http://localhost:4000/post";

//testing
function PlayAgain() {
    if ((document.getElementById("title").innerHTML)==="GUESS THE NUMBER"){
        GTN();
    }
    if((document.getElementById("title").innerHTML)==="NUMBER MEMORIZATION"){
        NM();
    }
    if((document.getElementById("title").innerHTML)==="SLOT MACHINE"){
        SM();
    }
}

function reset(){
    document.getElementById("descriptionTitle").innerHTML="Welcome to O-Arcade!"
    document.getElementById("descriptionTitle").style.fontSize = "xx-large";
    document.getElementById("title").innerHTML="";
    document.getElementById("introduction").innerHTML="";
    document.getElementById("output").innerHTML="";
    document.getElementsByTagName("button")[3].style.visibility="hidden";
    document.getElementsByTagName("button")[4].style.visibility="hidden";
    document.getElementsByTagName("button")[5].style.visibility="hidden";
    document.getElementsByTagName("button")[6].style.visibility="hidden";
    document.getElementsByTagName("button")[0].style.margin="20px";
    document.getElementsByTagName("button")[0].style.padding="20px";
    document.getElementsByTagName("button")[0].style.fontSize="20px";
    document.getElementsByTagName("button")[1].style.margin="20px";
    document.getElementsByTagName("button")[1].style.padding="20px";
    document.getElementsByTagName("button")[1].style.fontSize="20px";
    document.getElementsByTagName("button")[2].style.margin="20px";
    document.getElementsByTagName("button")[2].style.padding="20px";
    document.getElementsByTagName("button")[2].style.fontSize="20px";
    document.getElementById("theButtons").style.textAlign="center";
    document.getElementById("bodyL").style.border="none";
    document.getElementById("leaderboard").style.border="none";
    document.getElementById("leaderboard").style.visibility="hidden";
    document.getElementById("slotOutput").style.visibility="hidden";
    NoL.innerHTML="";
    SoL.innerHTML="";
    
}

function GTN(data,status){
    document.getElementById("title").innerHTML="GUESS THE NUMBER";
    document.getElementById("descriptionTitle").innerHTML=""
    document.getElementById("descriptionTitle").style.fontSize = "small";
    document.getElementById("introduction").innerHTML="Your goal is to guess the whole number between 1 and 100!<br>When ever you are ready, press the 'Ready to guess' button to get started.";
    document.getElementById("slotwork").style.visibility="hidden";
    document.getElementById("slotOutput").style.visibility="hidden";
    document.getElementsByTagName("button")[3].disabled=false;
    document.getElementsByTagName("button")[4].disabled=false;
    document.getElementsByTagName("button")[0].style.visibility="visible";
    document.getElementsByTagName("button")[1].style.visibility="visible";
    document.getElementsByTagName("button")[3].style.visibility="visible";
    document.getElementsByTagName("button")[4].style.visibility="hidden";
    document.getElementsByTagName("button")[5].style.visibility="hidden";
    document.getElementsByTagName("button")[6].style.visibility="hidden";
    document.getElementsByTagName("button")[0].style.margin="8px";
    document.getElementsByTagName("button")[0].style.padding="6px";
    document.getElementsByTagName("button")[0].style.fontSize="medium";
    document.getElementsByTagName("button")[1].style.margin="8px";
    document.getElementsByTagName("button")[1].style.padding="6px";
    document.getElementsByTagName("button")[1].style.fontSize="medium";
    document.getElementsByTagName("button")[2].style.margin="8px";
    document.getElementsByTagName("button")[2].style.padding="6px";
    document.getElementsByTagName("button")[2].style.fontSize="medium";
    document.getElementById("bodyL").style.border="thin dashed #000000";
    document.getElementById("leaderboard").style.border="thin solid #000000";
    document.getElementById("leaderboard").style.visibility="visible";
    document.getElementById("theButtons").style.textAlign="left";
    score=0;
    count=0;
    score1=0;
    //x = Math.floor((Math.random() * 100) + 1);
    document.getElementById("output").innerHTML="";
    
    game = "Guess the Number";
    $.post(url+'?data='+JSON.stringify({
        'game': game,
        'change': 'no change',
        'action':'leaderboard',
    }),
    createLeaderboard);   
}
function NM(){
    document.getElementById("title").innerHTML="NUMBER MEMORIZATION";
    document.getElementById("descriptionTitle").innerHTML="";
    document.getElementById("descriptionTitle").style.fontSize = "small";
    document.getElementById("introduction").innerHTML="Your goal is to copy the number in an increasing number of digits.<br>Round 1 will start with you guessing a one digit number,"
    " and every round after that you have to guess a number with another digit.<br>When ever you are ready, you can begin the test by clicking the 'Ready to Guess' button below.";
    document.getElementsByTagName("button")[3].disabled=false;
    document.getElementsByTagName("button")[4].disabled=false;
    document.getElementsByTagName("button")[0].style.visibility="visible";
    document.getElementsByTagName("button")[1].style.visibility="visible";
    document.getElementsByTagName("button")[3].style.visibility="visible";
    document.getElementsByTagName("button")[4].style.visibility="hidden";
    document.getElementsByTagName("button")[5].style.visibility="hidden";
    document.getElementsByTagName("button")[6].style.visibility="hidden";
    document.getElementById("slotwork").style.visibility="hidden";
    document.getElementById("slotOutput").style.visibility="hidden";
    document.getElementById("bodyL").style.border="thin dashed #000000";
    document.getElementById("leaderboard").style.border="thin solid #000000";
    document.getElementById("leaderboard").style.visibility="visible";
    document.getElementsByTagName("button")[0].style.margin="8px";
    document.getElementsByTagName("button")[0].style.padding="6px";
    document.getElementsByTagName("button")[0].style.fontSize="medium";
    document.getElementsByTagName("button")[1].style.margin="8px";
    document.getElementsByTagName("button")[1].style.padding="6px";
    document.getElementsByTagName("button")[1].style.fontSize="medium";
    document.getElementsByTagName("button")[2].style.margin="8px";
    document.getElementsByTagName("button")[2].style.padding="6px";
    document.getElementsByTagName("button")[2].style.fontSize="medium";
    document.getElementById("theButtons").style.textAlign="left";
    score1 = 0
    n=0;
    score=0;
    count=0;
    document.getElementById("output").innerHTML="";

    game = "Number Memorization";
    $.post(url+'?data='+JSON.stringify({
        'game': game,
        'change': 'no change',
        'action':'leaderboard',
        'rounds':n,
    }),
    createLeaderboard);
}
function SM(){
    document.getElementById("title").innerHTML="SLOT MACHINE";
    document.getElementById("descriptionTitle").innerHTML=""
    document.getElementById("descriptionTitle").style.fontSize = "small";
    document.getElementById("introduction").innerHTML="Your goal is to line up the exact same 3 numbers in the slot. <br> Whenever you are ready, press the 'Spin' button to get started.";
    document.getElementsByTagName("button")[3].disabled=false;
    document.getElementsByTagName("button")[0].style.visibility="visible";
    document.getElementsByTagName("button")[1].style.visibility="visible";
    document.getElementsByTagName("button")[3].style.visibility="hidden";
    document.getElementsByTagName("button")[6].disabled=false;
    document.getElementsByTagName("button")[4].disabled=false;
    document.getElementsByTagName("button")[6].style.visibility="visible";
    document.getElementsByTagName("button")[4].style.visibility="hidden";
    document.getElementsByTagName("button")[5].style.visibility="hidden";
    document.getElementById("slotwork").style.visibility="visible";
    document.getElementById("slotOutput").style.visibility="visible";
    document.getElementById("bodyL").style.border="thin dashed #000000";
    document.getElementById("leaderboard").style.border="thin solid #000000";
    document.getElementById("leaderboard").style.visibility="visible";
    document.getElementsByTagName("button")[0].style.margin="8px";
    document.getElementsByTagName("button")[0].style.padding="6px";
    document.getElementsByTagName("button")[0].style.fontSize="medium";
    document.getElementsByTagName("button")[1].style.margin="8px";
    document.getElementsByTagName("button")[1].style.padding="6px";
    document.getElementsByTagName("button")[1].style.fontSize="medium";
    document.getElementsByTagName("button")[2].style.margin="8px";
    document.getElementsByTagName("button")[2].style.padding="6px";
    document.getElementsByTagName("button")[2].style.fontSize="medium";
    document.getElementById("theButtons").style.textAlign="left";
    document.getElementById("slotOutput").innerHTML = "Here we go.";
    score=0;
    count=0;
    score1=0
    document.getElementById("output").innerHTML="";
    game = "Slot Machine";
    $.post(url+'?data='+JSON.stringify({
        'game': game,
        'change': 'no change',
        'action':'leaderboard',
    }),
    createLeaderboard);
}

//let i=0;
function checkIfEqual(data){
    let outputObj = document.getElementById("output");
    x=response.GTNrandomNum; 

    
    /*let h = document.getElementById("title").innerHTML;
    let a ="GUESS THE NUMBER";
    let b ="NUMBER MEMORIZATION"
    
    outputObj.innerHTML="heading: "+h+" a: "+a;
    if (h===a){
        outputObj.innerHTML="true with gtn";
    }
    if (h===b){
        outputObj.innerHTML="true with nm";
    }
    */
    //let outputLB = document.getElementById("leaderboard");
    
    if ((document.getElementById("title").innerHTML)==="GUESS THE NUMBER"){
        let a = parseInt(prompt("Please guess the number: "));
        
        score++;
        /*while (i=0){
            x=y;
            i=i+1;
        }*/

        if(Math.abs(a-x)<2){
            outputObj.innerHTML="You are practically touching the fire, try guessing again!";
        }
        if((2<=Math.abs(a-x))&&(Math.abs(a-x)<5)){
            outputObj.innerHTML="You are very very warm, try guessing again!";
        }
        if((5<=Math.abs(a-x))&&(Math.abs(a-x)<10)){
            outputObj.innerHTML="You are very warm, try guessing again!";
        }
        if((10<=Math.abs(a-x))&&(Math.abs(a-x)<20)){
            outputObj.innerHTML="You are warm, try guessing again!";
        }
        if((20<=Math.abs(a-x))&&(Math.abs(a-x)<50)){
            outputObj.innerHTML="You are cold, try guessing again!";
        }
        if((50<=Math.abs(a-x))&&(Math.abs(a-x)<70)){
            outputObj.innerHTML="You are very cold, try guessing again!";
        }
        if((70<=Math.abs(a-x))&&(Math.abs(a-x)<90)){
            outputObj.innerHTML="You are very very cold, try guessing again!";
        }
        if((90<=Math.abs(a-x))&&(Math.abs(a-x)<100)){
            outputObj.innerHTML="You are practically in the iceberg like Captian America, try guessing again!";
        }
        if(a==x){
            outputObj.innerHTML="You are correct! The number was: "+x+"<br> It took you "+score+" guesses";
            document.getElementsByTagName("button")[3].disabled=true;
            document.getElementsByTagName("button")[4].style.visibility="visible";
            document.getElementsByTagName("button")[5].style.visibility="visible";

        }
    }
    

    if((document.getElementById("title").innerHTML)==="NUMBER MEMORIZATION"){
        n=n+1;
        y=response.NMrandomNum;

        confirm("Your number is "+y+", click yes when ready to confirm your answer.");        
        let a = parseInt(prompt("Please guess the number: "));
        
        if (a==y){
            count++;
            outputObj.innerHTML="Well done, click 'Ready to Guess' to go onto the next number. Round "+count+" is finished."
            $.post(url+'?data='+JSON.stringify({
                'game':game,
                'rounds':n,
            }),createLeaderboard)
        }
        else if (a!=y){
            document.getElementsByTagName("button")[3].disabled=true;
            outputObj.innerHTML="You got a score of: "+count+"<br> The number was: "+y+"<br> The number you inputed was: "+a;
            document.getElementsByTagName("button")[4].style.visibility="visible";
            document.getElementsByTagName("button")[5].style.visibility="visible";
        }
    }
}

function ReadytoSubmit(){
    var name = window.prompt("What is your name?");
    var confirm = false;

    var LeaderboardS = response['leaderboardS'];

    if (((game==='Guess the Number')&&((score<LeaderboardS[9])||(LeaderboardS[9]==0)))||((game==='Slot Machine')&&((score1<LeaderboardS[9])||(LeaderboardS[9]==0)))||((game==='Number Memorization')&&((count>LeaderboardS[9])||(LeaderboardS[9]==0)))){
        confirm = window.confirm("Are you fine with your score and name being added to the leaderboard?");
    }

    if (confirm==true){
        document.getElementsByTagName("button")[4].disabled=true;
        $.post(url+'?data='+JSON.stringify({
            'game': game,
            'score': score,
            'score1': score1,
            'count': count,
            'name': name,
            'change': 'change',
            'action': 'leaderboard',
        }),
        createLeaderboard);
    }
        
    if (confirm==false){
        window.alert("Thank you "+name+" for playing along!"); 
    }
    
    
    
}

 

function createLeaderboard(data, status){

    var LeaderboardN = data['leaderboardN'];
    var LeaderboardS = data['leaderboardS'];
    response = data;

    NoL.innerHTML="";
    SoL.innerHTML="";
    if (game==="Guess the Number"){
        for (i=0;i<10;i++){
            NoL.innerHTML = NoL.innerHTML+"<br>" +LeaderboardN[i];
            SoL.innerHTML = SoL.innerHTML+"<br>" +LeaderboardS[i];
        }
    }
    if (game==="Number Memorization"){
        for (i=0;i<10;i++){
            NoL.innerHTML = NoL.innerHTML+"<br>" +LeaderboardN[i];
            SoL.innerHTML = SoL.innerHTML+"<br>" +LeaderboardS[i];
        }
    }
    if (game==="Slot Machine"){
        for (i=0;i<10;i++){
            NoL.innerHTML = NoL.innerHTML+"<br>" +LeaderboardN[i];
            SoL.innerHTML = SoL.innerHTML+"<br>" +LeaderboardS[i];
        }
    }
}


let score1 = 0
function checkIfSame(){
    score1++;
    let a = Math.floor(Math.random() * 5) + 1;
    let b = Math.floor(Math.random() * 5) + 1;
    let c = Math.floor(Math.random() * 5) + 1;
    document.getElementById("slotOutput").innerHTML = a + "," + b + "," + c;
    if(a===b && a===c){
        document.getElementById("slotOutput").innerHTML = document.getElementById("slotOutput").innerHTML +`<br> HOORAY you won after ${score1} tries!!`;
        document.getElementsByTagName("button")[4].style.visibility="visible";
        document.getElementsByTagName("button")[6].disabled=true;
        document.getElementsByTagName("button")[5].style.visibility="visible";
    }
score1 ===0
}

//Guess the Number
GtnBtn.addEventListener("click", GTN)
// Guess the number hover
GtnBtn.addEventListener("mouseover", function(){
    GtnBtn.style.fontSize = "10px"
    GtnBtn.innerHTML = "Your goal is to guess the whole number between 1 and 100!"
})
GtnBtn.addEventListener("mouseout", function(){
    GtnBtn.style.fontSize = "20px"
    GtnBtn.innerHTML = "Guess the number "
})
// Number Memory
NmBtn.addEventListener("click", NM)
// Number Memory hover
NmBtn.addEventListener("mouseover", function(){
    NmBtn.style.fontSize = "10px";
    NmBtn.innerHTML = "Your goal is to copy the number in an increasing number of digits.";
})
NmBtn.addEventListener("mouseout", function(){
    NmBtn.style.fontSize = "20px";
    NmBtn.innerHTML = "Number Memory";
})
// Slot Machine
SmBtn.addEventListener("click", SM);
// Slot machine hover
SmBtn.addEventListener("mouseover", function(){
    SmBtn.style.fontSize = "10px";
    SmBtn.innerHTML = "Your goal is to line up the exact same 3 numbers in the slot.";
})
SmBtn.addEventListener("mouseout", function(){
    SmBtn.style.fontSize = "20px";
    SmBtn.innerHTML = "Slot Machine";
})
