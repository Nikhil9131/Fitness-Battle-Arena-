function greetUser(){

    let name = document.getElementById("name").value;

    if(name === ""){
        document.getElementById("output").innerHTML =
        "Please enter your name";
    }
    else{
        document.getElementById("output").innerHTML =
        "Hello " + name + " ";
    }
}

function changeColor(){

    let colors = [
        "lightblue",
        "lightgreen",
        "green",
        "yellow",
        "orange"
    ];

    let randomColor =
    colors[Math.floor(Math.random() * colors.length)];

    document.body.style.backgroundColor = randomColor;
}

function showTime(){

    document.getElementById("output").innerHTML =
    "Current Time : " + new Date().toLocaleTimeString();
}

function openGoogle(){

    window.open("https://www.google.com");
}