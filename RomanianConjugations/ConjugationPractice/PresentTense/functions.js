import { listOfVerbs, choosePronounList } from './listsPresent.js';


export function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function chooseVerb() {
    let randomNumber = getRndInteger(0, Object.keys(listOfVerbs).length - 1);
    let selectedVerb = Object.keys(listOfVerbs)[randomNumber];
    return selectedVerb;
}

export function choosePronoun() {
    let randomNumber = getRndInteger(0, choosePronounList.length - 1); // Adjusted range for array
    let selectedPronoun = choosePronounList[randomNumber];
    return selectedPronoun;
}

export function updateRealAnswer() {
    let selectedVerb = chooseVerb();
    let selectedPronoun = choosePronoun();
    let realAnswer = listOfVerbs[selectedVerb][selectedPronoun];
    return { realAnswer, selectedVerb, selectedPronoun };
}
