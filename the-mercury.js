function calculateWeight() {
    let earthWeight = document.getElementById("earthWeight").value;  //Get the weight entered by the visitor

    if (earthWeight === "" || Number(earthWeight) <= 0) {  //Check if the visitor entered a valid weight
        document.getElementById("result").innerHTML = "Please enter a valid weight!";
        return;
    }

    let mercuryWeight = Number(earthWeight) * 0.38;  //Calculate weight on Mercury

    document.getElementById("result").innerHTML =    //Display the result
        "Your weight on Mercury would be approximately " + mercuryWeight.toFixed(2) + " lbs";
}