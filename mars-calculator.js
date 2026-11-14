let earthWeight = document.getElementById("earthWeight");   //Gets the HTML elements
let calculateButton = document.getElementById("calculateButton");   
let result = document.getElementById("result");

calculateButton.addEventListener("click", function() {      //Calculates weight on Mars when button is clicked
    let weight = Number(earthWeight.value);  //Gets the weight entered by the user
    if (earthWeight.value === "" || !Number.isFinite(weight) || weight <= 0) {  //Check if the user entered a valid weight
        result.textContent = "Please enter a valid weight!";
    } else {
        let marsWeight = weight * 0.38; //Mars's gravity is the standard reference (0.38)
        result.textContent = "Your weight on Mars would be " + marsWeight.toFixed(2) + " lbs!";
    }
});