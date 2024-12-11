import { updateRealAnswer } from './functionsPC.js';

let numeratorPointTotal = 0;
let denominatorPointTotal = 0;

// Initialize the first realAnswer
let { realAnswer, selectedVerb, selectedPronoun } = updateRealAnswer();

console.log(realAnswer);

document.getElementById("myPrompt").textContent = `Conjugate "${selectedVerb}" for the "${selectedPronoun}" form.`;

// Function to handle form submission
function handleSubmit() {
    let userAnswer = document.getElementById("myText").value;
    userAnswer = userAnswer.toLowerCase();

    // Check answer to see if it's correct
    console.log(userAnswer);
    if (realAnswer === userAnswer) {
        numeratorPointTotal += 1;
        denominatorPointTotal += 1;
        // Update realAnswer to a new verb and pronoun
        ({ realAnswer, selectedVerb, selectedPronoun } = updateRealAnswer());        
        console.log(realAnswer);
        document.getElementById("myPrompt").textContent = `Conjugate "${selectedVerb}" for the "${selectedPronoun}" form.`;
        document.getElementById("wrongAnswerWarning").textContent = "";
    } else {
        denominatorPointTotal += 1;
        document.getElementById("wrongAnswerWarning").textContent = `Wrong Answer! The correct answer is ${realAnswer}`;
    }

    // Reset the input field
    document.getElementById("myText").value = '';
    // Show the point count
    document.getElementById("pointDisplay").textContent = `Points = ${numeratorPointTotal}/ ${denominatorPointTotal}`;
};

// Attach the handleSubmit function to the submit button click event
document.getElementById("mySubmit").onclick = handleSubmit;

// Attach the handleSubmit function to the Enter key press event on the input field
document.getElementById("myText").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        handleSubmit(); 
    }
});

// Reset button functionality
document.getElementById("resetButton").onclick = function() {
    numeratorPointTotal = 0;
    denominatorPointTotal = 0;
    document.getElementById("pointDisplay").textContent = `Points = ${pointTotal}`;
    document.getElementById("myText").value = "";
};

// Add the special character "ș"
document.getElementById("buttonȘ").onclick = function() {
    document.getElementById("myText").value += "ș";
};

// Add the special character "ț"
document.getElementById("buttonȚ").onclick = function() {
    document.getElementById("myText").value += "ț";
};

// Add the special character "ă"
document.getElementById("buttonĂ").onclick = function() {
    document.getElementById("myText").value += "ă";
};

// Add the special character "î"
document.getElementById("buttonÎ").onclick = function() {
    document.getElementById("myText").value += "î";
};

// Add the special character "â"
document.getElementById("buttonÂ").onclick = function() {
    document.getElementById("myText").value += "â";
};
