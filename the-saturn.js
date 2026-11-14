let earthWeight = document.getElementById("earthWeight"); //Gets the weight input, calculate button, and result area from the HTML
let calculateButton = document.getElementById("calculateButton");
let result = document.getElementById("result");

calculateButton.addEventListener("click", function() {  //Waits for the visitor to click the calculate button
    let weight = Number(earthWeight.value);     //Converts the visitor's Earth weight into a number

    if (earthWeight.value === "" || !Number.isFinite(weight) || weight <= 0) {      //Checks if the input is empty or the weight is not a valid positive #
        result.textContent = "Please enter a valid weight!";    //Displays error message if there is an invalid weight
    } else {
        let saturnWeight = weight * 1.065;    //Multiplys the Earth weight by Saturn's gravity (1.065)
        result.textContent = "Your weight on Saturn would be " + saturnWeight.toFixed(2) + " lbs!"; //Displays the calculated weight on Saturn by two decimal places
    }

});
