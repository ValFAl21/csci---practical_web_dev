let earthWeight = document.getElementById("earthWeight"); //Gets the weight input, calculate button, and result area from the HTML
let calculateButton = document.getElementById("calculateButton");
let result = document.getElementById("result");

calculateButton.addEventListener("click", function() { //Waits for the user to click the calculate button
    let weight = Number(earthWeight.value);     //Converts the user's Earth weight into a number value

    if (earthWeight.value === "" || !Number.isFinite(weight) || weight <= 0) {  //Checks if the input is empty or the weight is not a valid positive number
        result.textContent = "Please enter a valid weight!";     //Displays an error message if user enters an invalid weight
    } else {
        let uranusWeight = weight * 0.886;    //Multiplys the Earth weight * Uranus's gravity (0.886)
        result.textContent = "Your weight on Uranus would be " + uranusWeight.toFixed(2) + " lbs!";    //Displays the calculated weight on Uranus by two decimal places
    }
});