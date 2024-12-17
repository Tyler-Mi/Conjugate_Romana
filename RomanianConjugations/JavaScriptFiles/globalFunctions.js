import { choosePronounList } from './listOfAllVerbs.js';

export function checkAnswer(realAnswer, userAnswer) {
    return realAnswer === userAnswer;
}

export function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function chooseVerb(verbList) {
    let randomNumber = getRndInteger(0, Object.keys(verbList).length - 1);
    let selectedVerb = Object.keys(verbList)[randomNumber];
    return selectedVerb;
}

export function choosePronoun() {
    let randomNumber = getRndInteger(0, choosePronounList.length - 1);
    let selectedPronoun = choosePronounList[randomNumber];
    return selectedPronoun;
}

export function updateRealAnswer(verbList) {
    let selectedVerb = chooseVerb(verbList);
    let selectedPronoun = choosePronoun();

    console.log("Selected Verb: ", selectedVerb);
    console.log("Selected Pronoun: ", selectedPronoun);

    let realAnswer = verbList[selectedVerb][selectedPronoun];
    return { realAnswer, selectedVerb, selectedPronoun };
}

export function handleSubmit(realAnswer, selectedVerb, selectedPronoun, numeratorPointTotal, denominatorPointTotal, verbList) {
    let userAnswer = document.getElementById("myText").value;
    userAnswer = userAnswer.toLowerCase()
    userAnswer =userAnswer.trim();

    console.log("The User's Answer is: ", userAnswer);

    if (realAnswer === userAnswer) {
        numeratorPointTotal += 1;
        denominatorPointTotal += 1;
        ({ realAnswer, selectedVerb, selectedPronoun } = updateRealAnswer(verbList));
        console.log("The Real Answer is: ", realAnswer);
        document.getElementById("myPrompt").textContent = `Conjugate "${selectedVerb}" for the "${selectedPronoun}" form.`;
        document.getElementById("wrongAnswerWarning").textContent = "";
    } else {
        denominatorPointTotal += 1;
        document.getElementById("wrongAnswerWarning").textContent = `Wrong Answer! The correct answer is ${realAnswer}`;
    }

    document.getElementById("myText").value = '';
    document.getElementById("pointDisplay").textContent = `Points = ${numeratorPointTotal}/${denominatorPointTotal}`;

    return { realAnswer, selectedVerb, selectedPronoun, numeratorPointTotal, denominatorPointTotal };
}

export function runReset(numeratorPointTotal, denominatorPointTotal, realAnswer, selectedPronoun, selectedVerb, verbList) {
    numeratorPointTotal = 0;
    denominatorPointTotal = 0;
    document.getElementById("pointDisplay").textContent = `Points = ${numeratorPointTotal}/${denominatorPointTotal}`;
    document.getElementById("myText").value = "";

    ({ realAnswer, selectedVerb, selectedPronoun } = updateRealAnswer(verbList));
    console.log(realAnswer);
    document.getElementById("myPrompt").textContent = `Conjugate "${selectedVerb}" for the "${selectedPronoun}" form.`;

    document.getElementById("wrongAnswerWarning").textContent = "";
    return { numeratorPointTotal, denominatorPointTotal, realAnswer, selectedPronoun, selectedVerb };
}
