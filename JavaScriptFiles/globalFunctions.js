import { choosePronounList } from './listOfAllVerbs.js';



export function checkAnswer(realAnswer, userAnswer) {
    return realAnswer === userAnswer;
}

export function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function chooseVerb(verbList) {
    console.log(`verb list: ${verbList}`);

    let randomNumber = getRndInteger(0, Object.keys(verbList).length - 1);

    //check the number selected
    console.log(`Random Number: ${randomNumber}`)

    let selectedVerb = Object.keys(verbList)[randomNumber];

    //checking what verb was choosen
    console.log(`Slected Verb: ${selectedVerb}`)

    return selectedVerb;
}

export function choosePronoun() {
    let randomNumber = getRndInteger(0, choosePronounList.length - 1);
    let selectedPronoun = choosePronounList[randomNumber];

    //error correction help
    console.log(`Selected Pronoun: ${selectedPronoun}`);
    return selectedPronoun;
}

export function addPoint (numeratorPointTotal, denominatorPointTotal, percentPointTotal) {
    numeratorPointTotal += 1;
    denominatorPointTotal += 1;
    percentPointTotal = (numeratorPointTotal / denominatorPointTotal) * 100;
    percentPointTotal = percentPointTotal.toFixed(2);
    
    //looking to see if the points get updated
    console.log(`correct point total: ${numeratorPointTotal}`);
    console.log(`incorrect point total: ${denominatorPointTotal}`);
    console.log(`percent point total: ${percentPointTotal}`);


    return {numeratorPointTotal, denominatorPointTotal, percentPointTotal};

}

export function subtractPoint (denominatorPointTotal, percentPointTotal, numeratorPointTotal) {
    denominatorPointTotal += 1;
    percentPointTotal = (numeratorPointTotal / denominatorPointTotal) * 100;
    percentPointTotal = percentPointTotal.toFixed(2);
    
    //looking to see if the points get updated
    console.log(`incorrect point total: ${denominatorPointTotal}`);
    console.log(`percent point total: ${percentPointTotal}`);


    return {denominatorPointTotal, percentPointTotal, numeratorPointTotal};

}

export function updateRealAnswer(verbList) {
    let selectedVerb = chooseVerb(verbList);
    let selectedPronoun = choosePronoun();
    let realAnswer = verbList[selectedVerb][selectedPronoun];
    return { realAnswer, selectedVerb, selectedPronoun };
}



export function handleSubmit(realAnswer, selectedVerb, selectedPronoun, numeratorPointTotal, denominatorPointTotal, percentPointTotal, verbList) {
    let userAnswer = document.getElementById("myText").value;
    userAnswer = userAnswer.toLowerCase()
    userAnswer =userAnswer.trim();

    console.log("The User's Answer is: ", userAnswer);

    if (realAnswer === userAnswer) {
        ({numeratorPointTotal, denominatorPointTotal, percentPointTotal} = addPoint(numeratorPointTotal, denominatorPointTotal, percentPointTotal));
        ({ realAnswer, selectedVerb, selectedPronoun } = updateRealAnswer(verbList));
        document.getElementById("myPrompt").textContent = `${selectedPronoun} ${selectedVerb}`;
        document.getElementById("wrongAnswerWarning").textContent = "";
        console.log(`The Real Answer is: ${realAnswer}`)
    } else {
        ({numeratorPointTotal, denominatorPointTotal, percentPointTotal} = subtractPoint(denominatorPointTotal, percentPointTotal, numeratorPointTotal));
        document.getElementById("wrongAnswerWarning").textContent = `Wrong Answer! The correct answer is ${realAnswer}`;
    }

    document.getElementById("myText").value = '';
    document.getElementById("pointDisplay").textContent = `Score = ${percentPointTotal}%      ${numeratorPointTotal}/${denominatorPointTotal}`;

    return { realAnswer, selectedVerb, selectedPronoun, numeratorPointTotal, denominatorPointTotal, percentPointTotal };
}

export function runReset(numeratorPointTotal, denominatorPointTotal, percentPointTotal, realAnswer, selectedPronoun, selectedVerb, verbList) {
    numeratorPointTotal = 0;
    denominatorPointTotal = 0;
    percentPointTotal = 0;
    document.getElementById("pointDisplay").textContent = `Score = 0`;
    document.getElementById("myText").value = "";

    ({ realAnswer, selectedVerb, selectedPronoun } = updateRealAnswer(verbList));
    console.log(realAnswer);
    document.getElementById("myPrompt").textContent = `Conjugate "${selectedVerb}" for the "${selectedPronoun}" form.`;

    document.getElementById("wrongAnswerWarning").textContent = "";
    return { numeratorPointTotal, denominatorPointTotal, realAnswer, selectedPronoun, selectedVerb };
}


export function verifyFirstEntry (numeratorPointTotal, denominatorPointTotal, percentPointTotal, checkMark, xMark, firstUserEntry, AnswerOne) {
    if (firstUserEntry === AnswerOne) {
        ({numeratorPointTotal, denominatorPointTotal, percentPointTotal} = addPoint(numeratorPointTotal, denominatorPointTotal, percentPointTotal));
        document.getElementById("verificationImageOne").src = checkMark;
        return {numeratorPointTotal, denominatorPointTotal, percentPointTotal}
    } else {
        ({numeratorPointTotal, denominatorPointTotal, percentPointTotal} = subtractPoint(denominatorPointTotal, percentPointTotal, numeratorPointTotal));
        document.getElementById("verificationImageOne").src = xMark;
        return {numeratorPointTotal, denominatorPointTotal, percentPointTotal}
    }
}

export function verifySecondEntry (numeratorPointTotal, denominatorPointTotal, percentPointTotal, checkMark, xMark, secondUserEntry, AnswerTwo) {
    if (secondUserEntry === AnswerTwo) {
        ({numeratorPointTotal, denominatorPointTotal, percentPointTotal} = addPoint(numeratorPointTotal, denominatorPointTotal, percentPointTotal));
        document.getElementById("verificationImageTwo").src = checkMark;
        return {numeratorPointTotal, denominatorPointTotal, percentPointTotal}
    } else {
        ({numeratorPointTotal, denominatorPointTotal, percentPointTotal} = subtractPoint(denominatorPointTotal, percentPointTotal, numeratorPointTotal));
        document.getElementById("verificationImageTwo").src = xMark;
        return {numeratorPointTotal, denominatorPointTotal, percentPointTotal}
    }
}

export function verifyThridEntry (numeratorPointTotal, denominatorPointTotal, percentPointTotal, checkMark, xMark, thirdUserEntry, AnswerThree) {
    if (thirdUserEntry === AnswerThree) {
        ({numeratorPointTotal, denominatorPointTotal, percentPointTotal} = addPoint(numeratorPointTotal, denominatorPointTotal, percentPointTotal));
        document.getElementById("verificationImageThree").src = checkMark;
        return {numeratorPointTotal, denominatorPointTotal, percentPointTotal}
    } else {
        ({numeratorPointTotal, denominatorPointTotal, percentPointTotal} = subtractPoint(denominatorPointTotal, percentPointTotal, numeratorPointTotal));
        document.getElementById("verificationImageThree").src = xMark;
        return {numeratorPointTotal, denominatorPointTotal, percentPointTotal}
    }
}

export function verifyFourthEntry (numeratorPointTotal, denominatorPointTotal, percentPointTotal, checkMark, xMark, fourthUserEntry, AnswerFour) {
    if (fourthUserEntry === AnswerFour) {
        ({numeratorPointTotal, denominatorPointTotal, percentPointTotal} = addPoint(numeratorPointTotal, denominatorPointTotal, percentPointTotal));
        document.getElementById("verificationImagefour").src = checkMark;
        return {numeratorPointTotal, denominatorPointTotal, percentPointTotal}
    } else {
        ({numeratorPointTotal, denominatorPointTotal, percentPointTotal} = subtractPoint(denominatorPointTotal, percentPointTotal, numeratorPointTotal));
        document.getElementById("verificationImagefour").src = xMark;
        return {numeratorPointTotal, denominatorPointTotal, percentPointTotal}
    }
}

export function verifyFithEntry (numeratorPointTotal, denominatorPointTotal, percentPointTotal, checkMark, xMark, fithUserEntry, AnswerFive) {
    if (fithUserEntry === AnswerFive) {
        ({numeratorPointTotal, denominatorPointTotal, percentPointTotal} = addPoint(numeratorPointTotal, denominatorPointTotal, percentPointTotal));
        document.getElementById("verificationImageFive").src = checkMark;
        return {numeratorPointTotal, denominatorPointTotal, percentPointTotal}
    } else {
        ({numeratorPointTotal, denominatorPointTotal, percentPointTotal} = subtractPoint(denominatorPointTotal, percentPointTotal, numeratorPointTotal));
        document.getElementById("verificationImageFive").src = xMark;
        return {numeratorPointTotal, denominatorPointTotal, percentPointTotal}
    }
}

export function verifySixthEntry (numeratorPointTotal, denominatorPointTotal, percentPointTotal, checkMark, xMark, sixthUserEntry, AnswerSix) {
    if (sixthUserEntry === AnswerSix) {
        ({numeratorPointTotal, denominatorPointTotal, percentPointTotal} = addPoint(numeratorPointTotal, denominatorPointTotal, percentPointTotal));
        document.getElementById("verificationImageSix").src = checkMark;
        return {numeratorPointTotal, denominatorPointTotal, percentPointTotal}
    } else {
        ({numeratorPointTotal, denominatorPointTotal, percentPointTotal} = subtractPoint(denominatorPointTotal, percentPointTotal, numeratorPointTotal));
        document.getElementById("verificationImageSix").src = xMark;
        return {numeratorPointTotal, denominatorPointTotal, percentPointTotal}
    }
}

export function verifySeventhEntry (numeratorPointTotal, denominatorPointTotal, percentPointTotal, checkMark, xMark, seventhUserEntry, AnswerSeven) {
    if (seventhUserEntry === AnswerSeven) {
        ({numeratorPointTotal, denominatorPointTotal, percentPointTotal} = addPoint(numeratorPointTotal, denominatorPointTotal, percentPointTotal));
        document.getElementById("verificationImageSeven").src = checkMark;
        return {numeratorPointTotal, denominatorPointTotal, percentPointTotal}
    } else {
        ({numeratorPointTotal, denominatorPointTotal, percentPointTotal} = subtractPoint(denominatorPointTotal, percentPointTotal, numeratorPointTotal));
        document.getElementById("verificationImageSeven").src = xMark;
        return {numeratorPointTotal, denominatorPointTotal, percentPointTotal}
    }
}

export function verifyEighthEntry (numeratorPointTotal, denominatorPointTotal, percentPointTotal, checkMark, xMark, eighthUserEntry, AnswerEight) {
    if (eighthUserEntry === AnswerEight) {
        ({numeratorPointTotal, denominatorPointTotal, percentPointTotal} = addPoint(numeratorPointTotal, denominatorPointTotal, percentPointTotal));
        document.getElementById("verificationImageEight").src = checkMark;
        return {numeratorPointTotal, denominatorPointTotal, percentPointTotal}
    } else {
        ({numeratorPointTotal, denominatorPointTotal, percentPointTotal} = subtractPoint(denominatorPointTotal, percentPointTotal, numeratorPointTotal));
        document.getElementById("verificationImageEight").src = xMark;
        return {numeratorPointTotal, denominatorPointTotal, percentPointTotal}
    }
}