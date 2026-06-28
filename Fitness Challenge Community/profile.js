// ========================================
// FITNESS BATTLE ARENA
// profile.js
// ========================================

// ------------ DOM Elements ------------

const themeToggle = document.getElementById("themeToggle");

const profileName = document.getElementById("profileName");
const fitnessGoal = document.getElementById("fitnessGoal");
const streakText = document.getElementById("streakText");

const editProfile = document.getElementById("editProfile");
const increaseStreak = document.getElementById("increaseStreak");

const workoutCount = document.getElementById("workoutCount");
const calorieCount = document.getElementById("calorieCount");
const badgeCount = document.getElementById("badgeCount");
const streakCount = document.getElementById("streakCount");

const progressFill = document.getElementById("progressFill");
const progressText = document.getElementById("progressText");
const increaseProgress = document.getElementById("increaseProgress");

const transformTitle = document.getElementById("transformTitle");

// BMI Section
const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");
const calculateBMI = document.getElementById("calculateBMI");
const bmiResult = document.getElementById("bmiResult");

// ---------------- Theme ----------------

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

// ---------------- Profile Object ----------------

let profile={

    name:localStorage.getItem("name") || "Nikhil Rathore",

    goal:localStorage.getItem("goal") || "Muscle Building",

    streak:Number(localStorage.getItem("streak")) || 30,

    progress:Number(localStorage.getItem("progress")) || 60

};

// ---------------- Update UI ----------------

function updateProfile(){

    profileName.innerHTML=profile.name;

    fitnessGoal.innerHTML="💪 Fitness Goal : "+profile.goal;

    streakText.innerHTML="🔥 Current Streak : "+profile.streak+" Days";

    streakCount.innerHTML=profile.streak;

    progressFill.style.width=profile.progress+"%";

    progressText.innerHTML=profile.progress+"%";

    localStorage.setItem("name",profile.name);
    localStorage.setItem("goal",profile.goal);
    localStorage.setItem("streak",profile.streak);
    localStorage.setItem("progress",profile.progress);

}

// ---------------- Edit Profile ----------------

editProfile.addEventListener("click",function(){

    let newName=prompt("Enter your Name",profile.name);

    if(newName!=null && newName!=""){

        profile.name=newName;

    }

    let newGoal=prompt("Enter Fitness Goal",profile.goal);

    if(newGoal!=null && newGoal!=""){

        profile.goal=newGoal;

    }

    updateProfile();

});

// ---------------- Streak ----------------

increaseStreak.addEventListener("click",function(){

    profile.streak++;

    streakCount.innerHTML=profile.streak;

    streakText.innerHTML="🔥 Current Streak : "+profile.streak+" Days";

    localStorage.setItem("streak",profile.streak);

});

// ---------------- Progress ----------------

increaseProgress.addEventListener("click",function(){

    if(profile.progress<100){

        profile.progress+=10;

    }

    updateProfile();

});

// ---------------- BMI ----------------

if(calculateBMI){

calculateBMI.addEventListener("click",function(){

    let height=Number(heightInput.value)/100;

    let weight=Number(weightInput.value);

    if(height>0 && weight>0){

        let bmi=(weight/(height*height)).toFixed(1);

        bmiResult.innerHTML="Your BMI : "+bmi;

    }

    else{

        bmiResult.innerHTML="Enter Valid Values";

    }

});

}

// ---------------- Hover Effect ----------------

transformTitle.addEventListener("mouseover",function(){

    transformTitle.style.color="#22c55e";

});

transformTitle.addEventListener("mouseout",function(){

    transformTitle.style.color="white";

});

// ---------------- Card Hover ----------------

const cards=document.querySelectorAll(".box,.profile-card");

cards.forEach(function(card){

    card.addEventListener("mouseenter",function(){

        card.style.transform="translateY(-8px)";
        card.style.boxShadow="0 0 20px #22c55e";

    });

    card.addEventListener("mouseleave",function(){

        card.style.transform="translateY(0px)";
        card.style.boxShadow="none";

    });

});

// ---------------- Array Example ----------------

const achievements=[

"Fitness Warrior",

"30 Day Streak",

"Calories Master",

"Workout King"

];

achievements.forEach(function(item){

    console.log(item);

});

// ---------------- Greeting ----------------

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

// ---------------- Initialize ----------------

updateProfile();

console.log("Profile Page Loaded Successfully");