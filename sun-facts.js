let factsModal = document.getElementById("factsModal");   //Gets the pop-up and buttons
let openFactsButton = document.getElementById("openFactsButton");
let closeFactsButton = document.getElementById("closeFactsButton");

openFactsButton.addEventListener("click", function() {   //Opens the fun facts pop-up
    factsModal.hidden = false; //makes the pop-up appear.
});

closeFactsButton.addEventListener("click", function() { //Closes the fun facts pop-up
    factsModal.hidden = true; //closes the pop-up.
});