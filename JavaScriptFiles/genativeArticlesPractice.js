import { verifyFirstEntry, verifySecondEntry, verifyThridEntry, verifyFourthEntry, verifyFithEntry, verifySixthEntry, verifySeventhEntry, verifyEighthEntry } from './globalFunctions.js';

const AnswerOne = "ale";
const AnswerTwo = "al";
const AnswerThree = "a";
const AnswerFour = "al";
const AnswerFive = "ale";
const AnswerSix = "ale";
const AnswerSeven = "al";
const AnswerEight = "ale";
let numeratorPointTotal = 0;
let denominatorPointTotal = 0;
let percentPointTotal = 0;
let checkMark = "../Images/checkmark.jpg";
let xMark = "../Images/xMark.jpg";

document.addEventListener('DOMContentLoaded', (event) => {
    // Ensure no entries are present when the page loads
    ["firstEntry", "secondEntry", "thirdEntry", "fourthEntry", "fithEntry", "sixthEntry", "seventhEntry", "eighthEntry"].forEach(id => {
        document.getElementById(id).value = "";
    });

    document.getElementById("enter").onclick = function () {
        console.log("enter pressed");

        // Setting user input to variables for easier manipulation
        let firstUserEntry = document.getElementById("firstEntry").value;
        let secondUserEntry = document.getElementById("secondEntry").value;
        let thirdUserEntry = document.getElementById("thirdEntry").value;
        let fourthUserEntry = document.getElementById("fourthEntry").value;
        let fithUserEntry = document.getElementById("fithEntry").value;
        let sixthUserEntry = document.getElementById("sixthEntry").value;
        let seventhUserEntry = document.getElementById("seventhEntry").value;
        let eighthUserEntry = document.getElementById("eighthEntry").value;

        console.log(`User Entry: ${firstUserEntry}`);

        // Verifying entries
        ({ numeratorPointTotal, denominatorPointTotal, percentPointTotal } = verifyFirstEntry(numeratorPointTotal, denominatorPointTotal, percentPointTotal, checkMark, xMark, firstUserEntry, AnswerOne));
        let firstEntryContainer = document.getElementById("firstEntry").parentNode;
        firstEntryContainer.innerHTML = `Carțile sunt <span>${firstUserEntry}</span> bărbaților.
                                         <img id="verificationImageOne" src="${document.getElementById("verificationImageOne").src}">`;

        ({ numeratorPointTotal, denominatorPointTotal, percentPointTotal } = verifySecondEntry(numeratorPointTotal, denominatorPointTotal, percentPointTotal, checkMark, xMark, secondUserEntry, AnswerTwo));
        let secondEntryContainer = document.getElementById("secondEntry").parentNode;
        secondEntryContainer.innerHTML = `Creionul este <span>${secondUserEntry}</span> unui bărbat.
                                          <img id="verificationImageTwo" src="${document.getElementById("verificationImageTwo").src}">`;

        ({ numeratorPointTotal, denominatorPointTotal, percentPointTotal } = verifyThridEntry(numeratorPointTotal, denominatorPointTotal, percentPointTotal, checkMark, xMark, thirdUserEntry, AnswerThree));
        let thirdEntryContainer = document.getElementById("thirdEntry").parentNode;
        thirdEntryContainer.innerHTML = `Casa frumoasă este <span>${thirdUserEntry}</span> copilului.
                                         <img id="verificationImageThree" src="${document.getElementById("verificationImageThree").src}">`;

        ({ numeratorPointTotal, denominatorPointTotal, percentPointTotal } = verifyFourthEntry(numeratorPointTotal, denominatorPointTotal, percentPointTotal, checkMark, xMark, fourthUserEntry, AnswerFour));
        let fourthEntryContainer = document.getElementById("fourthEntry").parentNode;
        fourthEntryContainer.innerHTML = `Geamul este <span>${fourthUserEntry}</span> femeii.
                                          <img id="verificationImagefour" src="${document.getElementById("verificationImagefour").src}">`;

        ({ numeratorPointTotal, denominatorPointTotal, percentPointTotal } = verifyFithEntry(numeratorPointTotal, denominatorPointTotal, percentPointTotal, checkMark, xMark, fithUserEntry, AnswerFive));
        let fithEntryContainer = document.getElementById("fithEntry").parentNode;
        fithEntryContainer.innerHTML = `Mâncările sunt <span>${fithUserEntry}</span> pisicii.
                                        <img id="verificationImageFive" src="${document.getElementById("verificationImageFive").src}">`;

        ({ numeratorPointTotal, denominatorPointTotal, percentPointTotal } = verifySixthEntry(numeratorPointTotal, denominatorPointTotal, percentPointTotal, checkMark, xMark, sixthUserEntry, AnswerSix));
        let sixthEntryContainer = document.getElementById("sixthEntry").parentNode;
        sixthEntryContainer.innerHTML = `Pâinile sunt <span>${sixthUserEntry}</span> mamei.
                                         <img id="verificationImageSix" src="${document.getElementById("verificationImageSix").src}">`;

        ({ numeratorPointTotal, denominatorPointTotal, percentPointTotal } = verifySeventhEntry(numeratorPointTotal, denominatorPointTotal, percentPointTotal, checkMark, xMark, seventhUserEntry, AnswerSeven));
        let seventhEntryContainer = document.getElementById("seventhEntry").parentNode;
        seventhEntryContainer.innerHTML = `Orașul este <span>${seventhUserEntry}</span> oamenilor.
                                           <img id="verificationImageSeven" src="${document.getElementById("verificationImageSeven").src}">`;

        ({ numeratorPointTotal, denominatorPointTotal, percentPointTotal } = verifyEighthEntry(numeratorPointTotal, denominatorPointTotal, percentPointTotal, checkMark, xMark, eighthUserEntry, AnswerEight));
        let eighthEntryContainer = document.getElementById("eighthEntry").parentNode;
        eighthEntryContainer.innerHTML = `Paturile sunt <span>${eighthUserEntry}</span> unor copii.
                                          <img id="verificationImageEight" src="${document.getElementById("verificationImageEight").src}">`;

        // Show the score in the modal
        let scoreMessage = `Your score is ${numeratorPointTotal}/${denominatorPointTotal} (${percentPointTotal}%).`;
        document.getElementById("scoreMessage").innerText = scoreMessage;

        // Display the modal
        document.getElementById("scoreModal").style.display = "block";
    };

    document.getElementById("reset").onclick = function resetDocument() {
        window.location.reload();
    };
});
