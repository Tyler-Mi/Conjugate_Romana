import { futureVerbs } from './listViitoareComun.js';
import { updateRealAnswer, handleSubmit, runReset } from './functionsViitoareComun.js';

let numeratorPointTotal = 0;
let denominatorPointTotal = 0;
let realAnswer;
let selectedVerb;
let selectedPronoun;
let tense = "future";
let verbList = futureVerbs;

document.addEventListener('DOMContentLoaded', (event) => {
    ({ realAnswer, selectedVerb, selectedPronoun } = updateRealAnswer(verbList));
    console.log("The Real Answer is: ", realAnswer);


    document.getElementById("myPrompt").textContent = `Conjugate "${selectedVerb}" for the "${selectedPronoun}" form in ${tense} tense.`;

    function handleSubmission() {
        ({ realAnswer, selectedVerb, selectedPronoun, numeratorPointTotal, denominatorPointTotal } = handleSubmit(realAnswer, selectedVerb, selectedPronoun, numeratorPointTotal, denominatorPointTotal, verbList));
    }

    document.getElementById("mySubmit").onclick = handleSubmission;

    document.getElementById("myText").addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            handleSubmission();
        }
    });

    document.getElementById("resetButton").onclick = function() {
        runReset(numeratorPointTotal, denominatorPointTotal, realAnswer, selectedPronoun, selectedVerb, verbList);
    };

    document.getElementById("buttonȘ").onclick = function() {
        document.getElementById("myText").value += "ș";
    };

    document.getElementById("buttonȚ").onclick = function() {
        document.getElementById("myText").value += "ț";
    };

    document.getElementById("buttonĂ").onclick = function() {
        document.getElementById("myText").value += "ă";
    };

    document.getElementById("buttonÎ").onclick = function() {
        document.getElementById("myText").value += "î";
    };

    document.getElementById("buttonÂ").onclick = function() {
        document.getElementById("myText").value += "â";
    };
});
