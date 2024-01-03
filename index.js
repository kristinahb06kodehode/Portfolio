// Function to ease scrolling when navbar item is clicked

function scrollToSection(sectionId) {
  const section = document.querySelector(sectionId);
  section.scrollIntoView({ behavior: "smooth" });
}
