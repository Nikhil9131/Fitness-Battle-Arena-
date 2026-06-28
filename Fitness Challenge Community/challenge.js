// =========================================
// FITNESS BATTLE ARENA
// challenge.js
// =========================================

// -------------------- DOM Elements --------------------

const themeToggle = document.getElementById("themeToggle");

const join1 = document.getElementById("join1");
const join2 = document.getElementById("join2");
const join3 = document.getElementById("join3");

const complete1 = document.getElementById("complete1");
const complete2 = document.getElementById("complete2");
const complete3 = document.getElementById("complete3");

const progress1 = document.getElementById("progress1");
const progress2 = document.getElementById("progress2");
const progress3 = document.getElementById("progress3");

const percent1 = document.getElementById("percent1");
const percent2 = document.getElementById("percent2");
const percent3 = document.getElementById("percent3");

const completedCount = document.getElementById("completedCount");
const overallProgress = document.getElementById("overallProgress");

const badge1 = document.getElementById("badge1");
const badge2 = document.getElementById("badge2");
const badge3 = document.getElementById("badge3");

const resetBtn = document.getElementById("resetBtn");

const status = document.getElementById("status");

const pageTitle = document.getElementById("pageTitle");

// -------------------- Theme --------------------

if(localStorage.getItem("theme")=="light"){

    document.body.classList.add("light-mode");

    themeToggle.innerHTML="☀️ Light";

}

themeToggle.addEventListener("click",function(){

    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){

        themeToggle.innerHTML="☀️ Light";

        localStorage.setItem("theme","light");

    }

    else{

        themeToggle.innerHTML="🌙 Dark";

        localStorage.setItem("theme","dark");

    }

});

// -------------------- Challenge Object --------------------

let challenges={

    pushup:0,

    running:0,

    cycling:0

};

// -------------------- Join Buttons --------------------

join1.addEventListener("click",function(){

    status.innerHTML="You joined Push-Up Challenge 💪";

});

join2.addEventListener("click",function(){

    status.innerHTML="You joined Running Challenge 🏃";

});

join3.addEventListener("click",function(){

    status.innerHTML="You joined Cycling Challenge 🚴";

});

// -------------------- Complete Buttons --------------------

complete1.addEventListener("click",function(){

    challenges.pushup=100;

    updateProgress();

});

complete2.addEventListener("click",function(){

    challenges.running=100;

    updateProgress();

});

complete3.addEventListener("click",function(){

    challenges.cycling=100;

    updateProgress();

});

// -------------------- Update Function --------------------

function updateProgress(){

    progress1.style.width=challenges.pushup+"%";
    progress2.style.width=challenges.running+"%";
    progress3.style.width=challenges.cycling+"%";

    percent1.innerHTML=challenges.pushup+"%";
    percent2.innerHTML=challenges.running+"%";
    percent3.innerHTML=challenges.cycling+"%";

    let completed=0;

    if(challenges.pushup==100) completed++;

    if(challenges.running==100) completed++;

    if(challenges.cycling==100) completed++;

    completedCount.innerHTML=completed;

    let overall=(completed/3)*100;

    overallProgress.style.width=overall+"%";

    if(completed>=1){

        badge1.classList.add("active");

    }

    if(completed>=2){

        badge2.classList.add("active");

    }

    if(completed==3){

        badge3.classList.add("active");

        status.innerHTML="🏆 Congratulations! All Challenges Completed.";

    }

    localStorage.setItem("challengeData",JSON.stringify(challenges));

}

// -------------------- Load Saved Data --------------------

const saved=localStorage.getItem("challengeData");

if(saved){

    challenges=JSON.parse(saved);

    updateProgress();

}

// -------------------- Reset --------------------

resetBtn.addEventListener("click",function(){

    if(confirm("Reset All Challenges?")){

        challenges.pushup=0;

        challenges.running=0;

        challenges.cycling=0;

        badge1.classList.remove("active");
        badge2.classList.remove("active");
        badge3.classList.remove("active");

        localStorage.removeItem("challengeData");

        status.innerHTML="Challenges Reset Successfully";

        updateProgress();

    }

});

// -------------------- Hover Animation --------------------

pageTitle.addEventListener("mouseover",function(){

    pageTitle.style.color="#22c55e";

});

pageTitle.addEventListener("mouseout",function(){

    pageTitle.style.color="white";

});

// -------------------- Card Hover --------------------

const cards=document.querySelectorAll(".challenge-card");

cards.forEach(function(card){

    card.addEventListener("mouseenter",function(){

        card.style.transform="translateY(-10px)";

        card.style.boxShadow="0 0 20px #22c55e";

    });

    card.addEventListener("mouseleave",function(){

        card.style.transform="translateY(0px)";

        card.style.boxShadow="none";

    });

});

// -------------------- Array Example --------------------

const challengeList=[

"Push-Up",

"Running",

"Cycling"

];

challengeList.forEach(function(item){

    console.log(item);

});

// -------------------- Greeting --------------------

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

// -------------------- Console --------------------

console.log("Challenge Page Loaded Successfully");