// ===========================================
// Fitness Battle Arena - Home JavaScript
// ===========================================

// ---------- DOM Selection ----------

const themeToggle = document.getElementById("themeToggle");
const joinBtn = document.getElementById("joinBtn");

const memberCount = document.getElementById("memberCount");
const challengeCount = document.getElementById("challengeCount");
const workoutCount = document.getElementById("workoutCount");
const trainerCount = document.getElementById("trainerCount");

const heroTitle = document.getElementById("heroTitle");
const heroDescription = document.getElementById("heroDescription");

const featureCards = document.querySelectorAll(".feature-card");
const challengeCards = document.querySelectorAll(".challenge-card");

const footerHeading = document.getElementById("footerHeading");
const footerText = document.getElementById("footerText");


// ===========================================
// Website Data (Object)
// ===========================================

const community = {

    members: 500,
    challenges: 100,
    workouts: 10000,
    trainers: 50

};


// ===========================================
// Display Statistics
// ===========================================

memberCount.textContent = community.members + "+";
challengeCount.textContent = community.challenges + "+";
workoutCount.textContent = "10K+";
trainerCount.textContent = community.trainers + "+";


// ===========================================
// Dark / Light Mode
// ===========================================

if(localStorage.getItem("theme") === "light"){

    document.body.classList.add("light-mode");

    themeToggle.innerHTML = "☀️ Light";

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


// ===========================================
// Join Community Button
// ===========================================

joinBtn.addEventListener("click",function(){

    community.members++;

    memberCount.textContent = community.members + "+";

    joinBtn.innerHTML = "✔ Joined";

    joinBtn.disabled = true;

    alert("Welcome to Fitness Battle Arena!");

});


// ===========================================
// Hero Section Animation
// ===========================================

heroTitle.addEventListener("mouseover",function(){

    heroTitle.style.color="#22c55e";

});

heroTitle.addEventListener("mouseout",function(){

    heroTitle.style.color="";

});


// ===========================================
// Feature Cards Hover
// ===========================================

featureCards.forEach(function(card){

    card.addEventListener("mouseenter",function(){

        card.style.transform="scale(1.05)";
        card.style.boxShadow="0 0 20px #22c55e";

    });

    card.addEventListener("mouseleave",function(){

        card.style.transform="scale(1)";
        card.style.boxShadow="none";

    });

});


// ===========================================
// Challenge Card Click
// ===========================================

challengeCards.forEach(function(card){

    card.addEventListener("click",function(){

        challengeCards.forEach(function(c){

            c.style.border="none";

        });

        card.style.border="4px solid #22c55e";

        const challengeName = card.querySelector("h3").textContent;

        alert("You selected : " + challengeName);

    });

});


// ===========================================
// Footer Effect
// ===========================================

footerHeading.addEventListener("mouseover",function(){

    footerHeading.style.color="#22c55e";

});

footerHeading.addEventListener("mouseout",function(){

    footerHeading.style.color="white";

});


// ===========================================
// Array Example
// ===========================================

const features = [

    "Workout Tracking",

    "Battle Mode",

    "Leaderboard",

    "Daily Streak"

];

console.log("Website Features");

features.forEach(function(feature){

    console.log(feature);

});


// ===========================================
// Dynamic Greeting
// ===========================================

const hour = new Date().getHours();

if(hour < 12){

    heroDescription.innerHTML += "<br><br>🌞 Good Morning Athlete!";

}

else if(hour < 18){

    heroDescription.innerHTML += "<br><br>💪 Good Afternoon Athlete!";

}

else{

    heroDescription.innerHTML += "<br><br>🌙 Good Evening Athlete!";

}


// ===========================================
// Console
// ===========================================

console.log("Fitness Battle Arena Loaded Successfully");