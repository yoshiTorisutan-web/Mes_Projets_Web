// Filter projects based on search input
function filterProjects() {
  const searchValue = document.getElementById("search-bar").value.toLowerCase();
  const projectCards = document.querySelectorAll(".project-card");

  projectCards.forEach((card) => {
    const title = card.getAttribute("data-title").toLowerCase();
    if (title.includes(searchValue)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

// Attach event listener to search bar
document.getElementById("search-bar").addEventListener("input", filterProjects);

// Popup functionality
document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("popup");

  // Show popup
  popup.classList.remove("hidden");
  popup.classList.add("visible");

  // Hide after 5 seconds
  setTimeout(() => {
    popup.classList.remove("visible");
    popup.classList.add("hidden");
  }, 5000);
});

// Set current year in footer
const currentYear = new Date().getFullYear();
document.getElementById("year").textContent = currentYear;

console.log("Welcome to the modern Project Hub!");
