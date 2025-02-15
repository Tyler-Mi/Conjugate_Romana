// Load the header content dynamically
document.addEventListener("DOMContentLoaded", function () {
  fetch("https://conjugateromanian.org/HTMLFiles/DropDownMenu/DropDownMenu.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("header-placeholder").innerHTML = data;

      // Add the collapsible menu functionality
      var coll = document.getElementsByClassName("collapsible");
      for (var i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
          this.classList.toggle("active");
          var content = document.querySelector(".content");
          if (content.style.display === "flex") {
            content.style.display = "none";
          } else {
            content.style.display = "flex"; // Ensure it uses flex layout
          }
        });
      }
    });
});


// absolute file path:  //192.168.1.59:5500/HTMLFiles/DropDownMenu/DropDownMenu.html
