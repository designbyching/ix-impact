// Glitch Effect: Cycle 3 Styles
const glitchElements = document.querySelectorAll(".glitch");
if (glitchElements) {
  const glitchStyles = ["scramble", "offset", "pulse"];

  glitchElements.forEach((glitch) => {
    function cycleGlitch() {
      let currentIndex = 0;
      setInterval(() => {
        glitch.classList.remove(...glitchStyles); // Remove all styles
        glitch.classList.add(glitchStyles[currentIndex]); // Add current style
        currentIndex = (currentIndex + 1) % glitchStyles.length; // Cycle
      }, 5000); // Switch every 5 seconds
    }
    cycleGlitch();
  });
}

// Navbar Toggle
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

// Expandable Portfolio Items
const gridItems = document.querySelectorAll(".grid-item");

if (gridItems) {
  gridItems.forEach((item) => {
    item.addEventListener("click", (event) => {
      // Prevent default link behavior
      event.preventDefault();

      // If clicking the "View Details" button, do nothing
      if (event.target.classList.contains("project-details-btn")) {
        return;
      }

      // Close other expanded items
      gridItems.forEach((i) => {
        if (i !== item) {
          i.classList.remove("expanded");
        }
      });

      // Toggle the clicked item
      item.classList.toggle("expanded");
    });
  });
}
