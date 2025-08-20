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

document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("popup");

  // Afficher la popup
  popup.classList.remove("hidden");
  popup.classList.add("visible");

  // La cacher après 5 secondes
  setTimeout(() => {
    popup.classList.remove("visible");
    popup.classList.add("hidden");
  }, 5000); // 5000ms = 5 secondes
});

// Récupère l'année actuelle
const currentYear = new Date().getFullYear();

// Insère l'année dans l'élément <span id="year">
document.getElementById("year").textContent = currentYear;

// Log interaction for analytics or debugging
console.log("Welcome to the modern Project Hub!");
