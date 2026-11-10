let solarSystem = document.getElementById("solarSystem");   //Gets the solar system and buttons
let startButton = document.getElementById("startButton");
let stopButton = document.getElementById("stopButton");
let animationStatus = document.getElementById("animationStatus");

startButton.addEventListener("click", function() {    //Sstarts all the planets rotating
    solarSystem.classList.add("running");

    animationStatus.textContent =
        "The planets are orbiting the Sun!";
});

stopButton.addEventListener("click", function() {   //Stop all the planets rotating
    solarSystem.classList.remove("running");

    animationStatus.textContent =
        "The Solar System has stopped rotating.";
});