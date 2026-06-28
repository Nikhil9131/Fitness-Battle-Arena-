// =======================================
// FITNESS BATTLE ARENA
// leaderboard.js
// =======================================

// ---------- DOM Elements ----------

const themeToggle = document.getElementById("themeToggle");

const score1 = document.getElementById("score1");
const score2 = document.getElementById("score2");
const score3 = document.getElementById("score3");

const addScore1 = document.getElementById("addScore1");
const addScore2 = document.getElementById("addScore2");
const addScore3 = document.getElementById("addScore3");

const progress1 = document.getElementById("progress1");
const progress2 = document.getElementById("progress2");
const progress3 = document.getElementById("progress3");

const winnerName = document.getElementById("winnerName");
const resetLeaderboard = document.getElementById("resetLeaderboard");

const leaderboardTitle = document.getElementById("leaderboardTitle");
const leaderboardStatus = document.getElementById("leaderboardStatus");

const playerCards = document.querySelectorAll(".player-card");

// =======================================
// Theme Switcher
// =======================================

if(localStorage.getItem("theme") === "light"){

    document.body.classList.add("light-mode");
    themeToggle.innerHTML = "☀️ Light";

}

themeToggle.addEventListener("click",function(){

    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){

        localStorage.setItem("theme","light");
        themeToggle.innerHTML="☀️ Light";

    }
    else{

        localStorage.setItem("theme","dark");
        themeToggle.innerHTML="🌙 Dark";

    }

});

// =======================================
// Player Object
// =======================================

let players = {

    raj : Number(localStorage.getItem("rajScore")) || 980,

    nikhil : Number(localStorage.getItem("nikhilScore")) || 920,

    priyanshu : Number(localStorage.getItem("priyanshuScore")) || 890

};

// =======================================
// Update Leaderboard
// =======================================

function updateLeaderboard(){

    score1.innerHTML = players.raj;
    score2.innerHTML = players.nikhil;
    score3.innerHTML = players.priyanshu;

    progress1.style.width = (players.raj/10)+"%";
    progress2.style.width = (players.nikhil/10)+"%";
    progress3.style.width = (players.priyanshu/10)+"%";

    let highest = Math.max(players.raj,players.nikhil,players.priyanshu);

    if(highest===players.raj){

        winnerName.innerHTML="🏆 Raj";

        leaderboardStatus.innerHTML="Raj is leading the competition!";

    }

    else if(highest===players.nikhil){

        winnerName.innerHTML="🏆 Nikhil";

        leaderboardStatus.innerHTML="Nikhil is leading the competition!";

    }

    else{

        winnerName.innerHTML="🏆 Priyanshu";

        leaderboardStatus.innerHTML="Priyanshu is leading the competition!";

    }

    localStorage.setItem("rajScore",players.raj);
    localStorage.setItem("nikhilScore",players.nikhil);
    localStorage.setItem("priyanshuScore",players.priyanshu);

}

// =======================================
// Score Buttons
// =======================================

addScore1.addEventListener("click",function(){

    players.raj += 10;

    updateLeaderboard();

});

addScore2.addEventListener("click",function(){

    players.nikhil += 10;

    updateLeaderboard();

});

addScore3.addEventListener("click",function(){

    players.priyanshu += 10;

    updateLeaderboard();

});

// =======================================
// Reset Button
// =======================================

resetLeaderboard.addEventListener("click",function(){

    if(confirm("Reset Leaderboard?")){

        players.raj=980;
        players.nikhil=920;
        players.priyanshu=890;

        localStorage.clear();

        updateLeaderboard();

    }

});

// =======================================
// Hover Effects
// =======================================

leaderboardTitle.addEventListener("mouseover",function(){

    leaderboardTitle.style.color="#22c55e";

});

leaderboardTitle.addEventListener("mouseout",function(){

    leaderboardTitle.style.color="white";

});

playerCards.forEach(function(card){

    card.addEventListener("mouseenter",function(){

        card.style.transform="translateY(-10px)";
        card.style.boxShadow="0 0 20px #22c55e";

    });

    card.addEventListener("mouseleave",function(){

        card.style.transform="translateY(0px)";
        card.style.boxShadow="none";

    });

});

// =======================================
// Array Example
// =======================================

const achievements=[

    "Gold Medal",

    "Silver Medal",

    "Bronze Medal"

];

achievements.forEach(function(item){

    console.log(item);

});

// =======================================
// Greeting
// =======================================

const hour=new Date().getHours();

if(hour<12){

    console.log("Good Morning Athlete");

}

else if(hour<18){

    console.log("Good Afternoon Athlete");

}

else{

    console.log("Good Evening Athlete");

}

// =======================================
// Initialize
// =======================================

updateLeaderboard();

console.log("Leaderboard Loaded Successfully");