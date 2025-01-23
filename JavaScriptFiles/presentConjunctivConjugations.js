import { updateRealAnswer, handleSubmit, runReset } from './globalFunctions.js';
import { conjunctivVerbs } from './listOfAllVerbs.js';

let numeratorPointTotal = 0;
let denominatorPointTotal = 0;
let percentPointTotal = 0;
let realAnswer = "";
let selectedVerb = "";
let selectedPronoun= "";
let verbList = conjunctivVerbs;

document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    ({ realAnswer, selectedVerb, selectedPronoun } = updateRealAnswer(verbList));
    document.getElementById("myPrompt").textContent = `${selectedPronoun} ${selectedVerb}`;
    console.log(`Initial values - Real Answer: ${realAnswer}, Selected Verb: ${selectedVerb}, Selected Pronoun: ${selectedPronoun}`);

    function handleSubmission() {
        ({ realAnswer, selectedVerb, selectedPronoun, numeratorPointTotal, denominatorPointTotal, percentPointTotal } = handleSubmit(realAnswer, selectedVerb, selectedPronoun, numeratorPointTotal, denominatorPointTotal, percentPointTotal, verbList));
        document.getElementById("myPrompt").textContent = `${selectedPronoun} ${selectedVerb}`;
        console.log(`handleSubmission - After submission, New Real Answer: ${realAnswer}, New Selected Verb: ${selectedVerb}, New Selected Pronoun: ${selectedPronoun}`);
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
        console.log(`skipButton - Skipped to, Real Answer: ${realAnswer}, Selected Verb: ${selectedVerb}, Selected Pronoun: ${selectedPronoun}`);
    };

    document.getElementById("resetButton").onclick = function() {
        runReset(numeratorPointTotal, denominatorPointTotal, percentPointTotal, realAnswer, selectedPronoun, selectedVerb, verbList);
        document.getElementById("myPrompt").textContent = `${selectedPronoun} ${selectedVerb}`;
        console.log('resetButton - Reset called');
    };

    const charButtons = ["Ș", "Ț", "Ă", "Î", "Â"];
    charButtons.forEach(char => {
        document.getElementById(`button${char}`).onclick = function() {
            document.getElementById("myText").value += char.toLowerCase();
            console.log(`Character ${char.toLowerCase()} appended to input`);
        };
    });
});