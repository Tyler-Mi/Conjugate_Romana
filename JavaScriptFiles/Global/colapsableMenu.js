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