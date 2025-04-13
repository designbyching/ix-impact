// Glitch Effect: Cycle 3 Styles
const glitch = document.querySelector(".glitch");
if (glitch) {
  const glitchStyles = ["scramble", "offset", "pulse"];

  function cycleGlitch() {
    let currentIndex = 0;
    setInterval(() => {
      glitch.classList.remove(...glitchStyles); // Remove all styles
      glitch.classList.add(glitchStyles[currentIndex]); // Add current style
      currentIndex = (currentIndex + 1) % glitchStyles.length; // Cycle
    }, 5000); // Switch every 5 seconds
  }

  cycleGlitch();
}

// Expandable Portfolio Items
const gridItems = document.querySelectorAll(".grid-item");

if (gridItems) {
  gridItems.forEach((item) => {
    item.addEventListener("click", (event) => {
      // Prevent default link behavior
      event.preventDefault();

      // If clicking the "View Details" button, do nothing for now (we'll handle this later)
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
