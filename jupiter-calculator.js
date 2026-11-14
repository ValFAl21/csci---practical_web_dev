let earthWeight = document.getElementById("earthWeight");   //Gets the HTML elements
let calculateButton = document.getElementById("calculateButton");
let result = document.getElementById("result");

calculateButton.addEventListener("click", function() {   //Calculates weight on Jupiter when button is clicked
    let weight = Number(earthWeight.value); //Gets the weight entered by the user
    if (earthWeight.value === "" || !Number.isFinite(weight) || weight <= 0) {  //Check if the user entered a valid weight
        result.textContent = "Please enter a valid weight!";
    } else {
        let jupiterWeight = weight * 2.528; //Mars's gravity is the standard reference (2.528)
        result.textContent = "Your weight on Jupiter would be " + jupiterWeight.toFixed(2) + " lbs!";
    }
});