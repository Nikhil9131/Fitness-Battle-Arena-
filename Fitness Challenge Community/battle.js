// =====================================
// FITNESS BATTLE ARENA
// battle.js
// =====================================

// ---------- DOM Selection ----------

const themeToggle = document.getElementById("themeToggle");

const voteRaj = document.getElementById("voteRaj");
const voteNikhil = document.getElementById("voteNikhil");

const rajVotesText = document.getElementById("rajVotes");
const nikhilVotesText = document.getElementById("nikhilVotes");

const winner = document.getElementById("winner");

const battleStatus = document.getElementById("battleStatus");

const resetBattle = document.getElementById("resetBattle");

const rajProgress = document.getElementById("rajProgress");
const nikhilProgress = document.getElementById("nikhilProgress");

const battleTitle = document.getElementById("battleTitle");


// =====================================
// Local Storage
// =====================================

let rajVotes = Number(localStorage.getItem("rajVotes")) || 0;
let nikhilVotes = Number(localStorage.getItem("nikhilVotes")) || 0;


// =====================================
// Theme
// =====================================

if(localStorage.getItem("theme") === "light"){

    document.body.classList.add("light-mode");

    themeToggle.innerHTML="☀️ Light";

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


// =====================================
// Update Screen
// =====================================

function updateBattle(){

    rajVotesText.textContent = rajVotes;

    nikhilVotesText.textContent = nikhilVotes;

    let total = rajVotes + nikhilVotes;

    if(total==0){

        rajProgress.style.width="0%";
        nikhilProgress.style.width="0%";

        winner.innerHTML="No Winner Yet";

        battleStatus.innerHTML="Voting Started";

        return;

    }

    let rajPercent=(rajVotes/total)*100;
    let nikhilPercent=(nikhilVotes/total)*100;

    rajProgress.style.width=rajPercent+"%";
    nikhilProgress.style.width=nikhilPercent+"%";

    if(rajVotes>nikhilVotes){

        winner.innerHTML="🏆 Raj";

        battleStatus.innerHTML="Raj is Leading 🔥";

    }

    else if(nikhilVotes>rajVotes){

        winner.innerHTML="🏆 Nikhil";

        battleStatus.innerHTML="Nikhil is Leading 🔥";

    }

    else{

        winner.innerHTML="🤝 Match Tie";

        battleStatus.innerHTML="Battle is Equal";

    }

    localStorage.setItem("rajVotes",rajVotes);

    localStorage.setItem("nikhilVotes",nikhilVotes);

}


// =====================================
// Vote Buttons
// =====================================

voteRaj.addEventListener("click",function(){

    rajVotes++;

    updateBattle();

});

voteNikhil.addEventListener("click",function(){

    nikhilVotes++;

    updateBattle();

});


// =====================================
// Reset
// =====================================

resetBattle.addEventListener("click",function(){

    if(confirm("Reset Battle?")){

        rajVotes=0;

        nikhilVotes=0;

        localStorage.removeItem("rajVotes");

        localStorage.removeItem("nikhilVotes");

        updateBattle();

    }

});


// =====================================
// Hover Effect
// =====================================

battleTitle.addEventListener("mouseover",function(){

    battleTitle.style.color="#22c55e";

    battleTitle.style.transition=".3s";

});

battleTitle.addEventListener("mouseout",function(){

    battleTitle.style.color="white";

});


// =====================================
// Fighter Cards Hover
// =====================================

const fighters=document.querySelectorAll(".fighter");

fighters.forEach(function(card){

    card.addEventListener("mouseenter",function(){

        card.style.transform="scale(1.05)";

        card.style.boxShadow="0 0 20px #22c55e";

    });

    card.addEventListener("mouseleave",function(){

        card.style.transform="scale(1)";

        card.style.boxShadow="none";

    });

});


// =====================================
// Battle Cards Hover
// =====================================

const cards=document.querySelectorAll(".card");

cards.forEach(function(card){

    card.addEventListener("mouseenter",function(){

        card.style.transform="translateY(-8px)";

    });

    card.addEventListener("mouseleave",function(){

        card.style.transform="translateY(0px)";

    });

});


// =====================================
// Object Example
// =====================================

const fightersData={

    fighter1:"Raj",

    fighter2:"Nikhil",

    level1:15,

    level2:17

};

console.log(fightersData);


// =====================================
// Array Example
// =====================================

const battles=[

"Push-Up Battle",

"Running Battle",

"Plank Battle",

"Squat Battle"

];

battles.forEach(function(item){

    console.log(item);

});


// =====================================
// Greeting
// =====================================

let hour=new Date().getHours();

if(hour<12){

    console.log("Good Morning Athlete");

}

else if(hour<18){

    console.log("Good Afternoon Athlete");

}

else{

    console.log("Good Evening Athlete");

}


// =====================================
// Start
// =====================================

updateBattle();

console.log("Battle Page Loaded Successfully");