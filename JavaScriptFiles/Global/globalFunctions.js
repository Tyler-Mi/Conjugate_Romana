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
    console.log(`chooseVerb - Selected Verb: ${selectedVerb}, Random Number: ${randomNumber}`);
    return selectedVerb;
}

export function choosePronoun() {
    let randomNumber = getRndInteger(0, choosePronounList.length - 1);
    let selectedPronoun = choosePronounList[randomNumber];
    console.log(`choosePronoun - Selected Pronoun: ${selectedPronoun}, Random Number: ${randomNumber}`);
    return selectedPronoun;
}

export function addPoint(numeratorPointTotal, denominatorPointTotal, percentPointTotal) {
    numeratorPointTotal += 1;
    denominatorPointTotal += 1;
    percentPointTotal = (numeratorPointTotal / denominatorPointTotal) * 100;
    percentPointTotal = percentPointTotal.toFixed(2);
    console.log(`addPoint - Updated Points: Correct: ${numeratorPointTotal}, Incorrect: ${denominatorPointTotal}, Percent: ${percentPointTotal}`);
    return { numeratorPointTotal, denominatorPointTotal, percentPointTotal };
}

export function subtractPoint(denominatorPointTotal, percentPointTotal, numeratorPointTotal) {
    denominatorPointTotal += 1;
    percentPointTotal = (numeratorPointTotal / denominatorPointTotal) * 100;
    percentPointTotal = percentPointTotal.toFixed(2);
    console.log(`subtractPoint - Updated Points: Incorrect: ${denominatorPointTotal}, Percent: ${percentPointTotal}`);
    return { denominatorPointTotal, percentPointTotal, numeratorPointTotal };
}

export function updateRealAnswer(verbList) {
    let selectedVerb = chooseVerb(verbList);
    let selectedPronoun = choosePronoun();
    let realAnswer = verbList[selectedVerb][selectedPronoun];
    console.log(`updateRealAnswer - Selected Verb: ${selectedVerb}, Selected Pronoun: ${selectedPronoun}, Real Answer: ${realAnswer}`);
    return { realAnswer, selectedVerb, selectedPronoun };
}

export function handleSubmit(realAnswer, selectedVerb, selectedPronoun, numeratorPointTotal, denominatorPointTotal, percentPointTotal, verbList, modalScore) {
    let userAnswer = document.getElementById("myText").value.toLowerCase().trim();
    console.log(`handleSubmit - User's Answer: ${userAnswer}`);

    if (realAnswer === userAnswer) {
        ({ numeratorPointTotal, denominatorPointTotal, percentPointTotal } = addPoint(numeratorPointTotal, denominatorPointTotal, percentPointTotal));
        ({ realAnswer, selectedVerb, selectedPronoun } = updateRealAnswer(verbList));
        document.getElementById("myPrompt").textContent = `${selectedPronoun} ${selectedVerb}`;
        document.getElementById("wrongAnswerWarning").textContent = "";
        console.log(`handleSubmit - Correct Answer. New Real Answer: ${realAnswer}, New Selected Verb: ${selectedVerb}, New Selected Pronoun: ${selectedPronoun}`);
    } else {
        ({ numeratorPointTotal, denominatorPointTotal, percentPointTotal } = subtractPoint(denominatorPointTotal, percentPointTotal, numeratorPointTotal));
        document.getElementById("wrongAnswerWarning").textContent = `Wrong Answer! The correct answer is ${realAnswer}`;
        console.log(`handleSubmit - Wrong Answer. Correct Real Answer: ${realAnswer}`);
    }


    document.getElementById("myText").value = '';
    document.getElementById("pointDisplay").textContent = `Score = ${percentPointTotal}% ${numeratorPointTotal}/${denominatorPointTotal}`;
    return { realAnswer, selectedVerb, selectedPronoun, numeratorPointTotal, denominatorPointTotal, percentPointTotal };
}

export function runReset(numeratorPointTotal, denominatorPointTotal, percentPointTotal, realAnswer, selectedPronoun, selectedVerb, verbList) {
    numeratorPointTotal = 0;
    denominatorPointTotal = 0;
    percentPointTotal = 0;
    document.getElementById("pointDisplay").textContent = `Score = 0`;
    document.getElementById("myText").value = '';

    ({ realAnswer, selectedVerb, selectedPronoun } = updateRealAnswer(verbList));
    console.log(`runReset - After reset, Real Answer: ${realAnswer}, Selected Verb: ${selectedVerb}, Selected Pronoun: ${selectedPronoun}`);
    document.getElementById("myPrompt").textContent = `${selectedPronoun} ${selectedVerb}`;
    document.getElementById("wrongAnswerWarning").textContent = '';
    return { numeratorPointTotal, denominatorPointTotal, percentPointTotal, realAnswer, selectedPronoun, selectedVerb };
}

export function verifyFirstEntry (numeratorPointTotal, denominatorPointTotal, percentPointTotal, checkMark, xMark, firstUserEntry, AnswerOne) {
    if (firstUserEntry === AnswerOne) {
        ({numeratorPointTotal, denominatorPointTotal, percentPointTotal} = addPoint(numeratorPointTotal, denominatorPointTotal, percentPointTotal));
        document.getElementById("verificationImageOne").src = checkMark;
        return {numeratorPointTotal, denominatorPointTotal, percentPointTotal}
    } else {
        ({numeratorPointTotal, denominatorPointTotal, percentPointTotal} = subtractPoint(denominatorPointTotal, percentPointTotal, numeratorPointTotal));
        document.getElementById("verificationImageOne").src = xMark;
        
        //adds the correct answer to see what you got wrong
        firstUserEntry =  `${firstUserEntry} [${AnswerOne}]`;
        return {numeratorPointTotal, denominatorPointTotal, percentPointTotal, firstUserEntry}
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

        //adds the correct answer to see what you got wrong
        secondUserEntry =  `${secondUserEntry} [${AnswerTwo}]`;
        return {numeratorPointTotal, denominatorPointTotal, percentPointTotal, secondUserEntry}
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

        //adds the correct answer to see what you got wrong
        thirdUserEntry =  `${thirdUserEntry} [${AnswerThree}]`;
        return {numeratorPointTotal, denominatorPointTotal, percentPointTotal, thirdUserEntry}
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

        //adds the correct answer to see what you got wrong
        fourthUserEntry =  `${fourthUserEntry} [${AnswerFour}]`;
        return {numeratorPointTotal, denominatorPointTotal, percentPointTotal, fourthUserEntry}
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

        //adds the correct answer to see what you got wrong
        fithUserEntry =  `${fithUserEntry} [${AnswerFive}]`;
        return {numeratorPointTotal, denominatorPointTotal, percentPointTotal, fithUserEntry}
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

        //adds the correct answer to see what you got wrong
        sixthUserEntry =  `${sixthUserEntry} [${AnswerSix}]`;
        return {numeratorPointTotal, denominatorPointTotal, percentPointTotal, sixthUserEntry}
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

        //adds the correct answer to see what you got wrong
        seventhUserEntry =  `${seventhUserEntry} [${AnswerSeven}]`;
        return {numeratorPointTotal, denominatorPointTotal, percentPointTotal, seventhUserEntry}
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

        //adds the correct answer to see what you got wrong
        eighthUserEntry =  `${eighthUserEntry} [${AnswerEight}]`;
        return {numeratorPointTotal, denominatorPointTotal, percentPointTotal, eighthUserEntry}
    }
}



export function startTimer(duration, display, scoreElement) {
    let timeLeft = duration;

    function updateTimer() {
        if (timeLeft > 0) {
            timeLeft--;
            display.textContent = `Time Remaining: ${timeLeft}s`;
        } else {
            clearInterval(timerInterval);

            // Display the modal and show the final score
            document.getElementById("timerModal").style.display = "block";
            document.getElementById("scoreMessage").textContent = `${scoreElement.textContent}`;
        }
    }

    let timerInterval = setInterval(updateTimer, 1000); // Update every second
}
