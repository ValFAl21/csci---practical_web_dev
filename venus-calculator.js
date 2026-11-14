let earthWeight = document.getElementById("earthWeight");   //Getss the HTML elements
let calculateButton = document.getElementById("calculateButton");
let result = document.getElementById("result");

calculateButton.addEventListener("click", function() {  //Calculates weight on Venus when button is clicked
    let weight = Number(earthWeight.value);     //Gets the weight entered by the user

    if (earthWeight.value === "" || !Number.isFinite(weight) || weight <= 0) {   //Checks if the user entered a valid weight
        result.textContent = "Please enter a valid weight!";
    } else {
        let venusWeight = weight * 0.904;         //Venus gravity is about 90.4% of Earth's gravity
        result.textContent =                //Displays the calculated weight
            "Your weight on Venus would be " +
            venusWeight.toFixed(2) + " lbs";
    }
});