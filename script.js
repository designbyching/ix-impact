// Navbar Toggle
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    navToggle.classList.toggle("active");
  });
}

// Portfolio Toggle
const gridItems = document.querySelectorAll(".grid-item");

gridItems.forEach((item) => {
  const projectImage = item.querySelector(".project-image");
  const content = item.querySelector(".grid-item-content");
  if (content && projectImage?.src) {
    const img = document.createElement("img");
    img.src = projectImage.src;
    img.alt = projectImage.alt;
    img.classList.add("content-image");
    content.prepend(img);
  }
  item.addEventListener("click", (event) => {
    // Check if the clicked element (or its parent) is an <a> tag
    if (event.target.closest("a")) {
      return; // Allow the default <a> behavior (navigation)
    }
    // If not clicking an <a> tag, toggle the card
    gridItems.forEach((i) => i !== item && i.classList.remove("expanded"));
    item.classList.toggle("expanded");
  });
});

// Back to Top Smooth Scroll
const backToTopLink = document.querySelector(".back-to-top");
if (backToTopLink) {
  backToTopLink.addEventListener("click", (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
