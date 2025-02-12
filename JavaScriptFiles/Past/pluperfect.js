import { pluperfectVerbs } from '../Global/listOfAllVerbs.js';
import { updateRealAnswer, handleSubmit, runReset } from '../Global/globalFunctions.js';

let numeratorPointTotal = 0;
let denominatorPointTotal = 0;
let percentPointTotal = 0;
let realAnswer;
let selectedVerb;
let selectedPronoun;
let verbList = pluperfectVerbs;

document.addEventListener('DOMContentLoaded', (event) => {
    ({ realAnswer, selectedVerb, selectedPronoun } = updateRealAnswer(verbList));

    document.getElementById("myPrompt").textContent = `${selectedPronoun} ${selectedVerb}`;
    
    //helping to troubleshoot
    console.log(`The Real Answer is: ${realAnswer}`);

    function handleSubmission() {
        ({ realAnswer, selectedVerb, selectedPronoun, numeratorPointTotal, denominatorPointTotal, percentPointTotal } = handleSubmit(realAnswer, selectedVerb, selectedPronoun, numeratorPointTotal, denominatorPointTotal, percentPointTotal, verbList));
    }

    document.getElementById("mySubmit").onclick = handleSubmission;

    document.getElementById("myText").addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            handleSubmission();
        }
    });

    document.getElementById("skipButton").onclick = function() {
            ({ realAnswer, selectedVerb, selectedPronoun } = updateRealAnswer(verbList));
            document.getElementById("myPrompt").textContent = `${selectedPronoun} ${selectedVerb}`;
    };

    document.getElementById("resetButton").onclick = function() {
        runReset(numeratorPointTotal, denominatorPointTotal, percentPointTotal, realAnswer, selectedPronoun, selectedVerb, verbList);
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
