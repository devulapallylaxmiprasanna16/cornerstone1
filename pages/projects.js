const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");
const closeBtn = document.getElementById("closeBtn");
const overlay = document.getElementById("overlay");

hamburger.addEventListener("click", () => {
  nav.classList.add("active");
  overlay.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  nav.classList.remove("active");
  overlay.classList.remove("active");
});

overlay.addEventListener("click", () => {
  nav.classList.remove("active");
  overlay.classList.remove("active");
});




// SEARCH
const searchInput = document.getElementById("searchInput");
const cards = document.querySelectorAll(".project-card");

searchInput.addEventListener("keyup", () => {
  const value = searchInput.value.toLowerCase();

  cards.forEach(card => {
    const name = card.getAttribute("data-name").toLowerCase();

    card.style.display = name.includes(value) ? "block" : "none";
  });
});


// WHATSAPP
function buyNow(projectName) {
  const phone = "91817913777";
  const message = `Hello, I want to buy ${projectName}`;
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}