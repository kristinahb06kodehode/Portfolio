// Function to ease scrolling when navbar item is clicked
function scrollToSection(sectionId) {
  const section = document.querySelector(sectionId);
  section.scrollIntoView({ behavior: "smooth" });
}

document.addEventListener("DOMContentLoaded", function () {
  // Adding event listeners to the navigation links
  const projectsLink = document.getElementById("projectsLink");
  const contactLink = document.getElementById("contactLink");

  projectsLink.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default behavior of the anchor tag
    scrollToSection("#projects");
  });

  contactLink.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default behavior of the anchor tag
    scrollToSection("#contact");
  });
});
