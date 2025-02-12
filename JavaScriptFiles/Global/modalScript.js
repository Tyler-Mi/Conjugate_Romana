//for the genative article practice

document.addEventListener('DOMContentLoaded', (event) => {
    // Get the modal
    let modal = document.getElementById("scoreModal");

    // Get the <span> element that closes the modal
    let span = document.getElementsByClassName("close")[0];

    // Get the buttons inside the modal for home navigation and view results
    let homeButton = document.getElementById("homeButton");
    let viewButton = document.getElementById("viewButton");
    

    // When the user clicks on <span> (x), close the modal and reset the page
    span.onclick = function() {
        modal.style.display = "none";
        window.location.reload();
    }

    // When the user clicks anywhere outside of the modal, close it and reset the page
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            window.location.reload();
        }
    }

    // When the user clicks the home button
    homeButton.onclick = function() {
        window.location.href = "../index.html";
    }

    // When the user clicks the view button, simply close the modal
    viewButton.onclick = function() {
        modal.style.display = "none";
    }
});



document.addEventListener('DOMContentLoaded', (event) => {
    // Get the modal
    let modal = document.getElementById("timerModal");

    // Get the <span> element that closes the modal
    let span = document.getElementsByClassName("close")[0];

    // Get the buttons inside the modal for home navigation and view results
    let homeButton = document.getElementById("homeButton");

    //reset button
    let restartButton = document.getElementById("resetButton");

    // When the user clicks on <span> (x), close the modal and reset the page
    span.onclick = function() {
        modal.style.display = "none";
        window.location.reload();
    }

    // When the user clicks anywhere outside of the modal, close it and reset the page
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            window.location.reload();
        }
    }

    // When the user clicks the home button
    homeButton.onclick = function() {
        window.location.href = "../../index.html";
    }

    //when user clicks reset button
    restartButton.onclick = function() {
        window.location.reload();
        
    }
});
