// ================= NAV =================
const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");
const closeBtn = document.getElementById("closeBtn");
const overlay = document.getElementById("overlay");

hamburger.onclick = () => {
  nav.classList.add("active");
  overlay.classList.add("active");
};

overlay.onclick = closeBtn.onclick = () => {
  nav.classList.remove("active");
  overlay.classList.remove("active");
};


// ================= SEARCH + FILTER =================
const searchInput = document.getElementById("searchInput");
const cards = document.querySelectorAll(".project-card");

const categoryBtn = document.getElementById("categoryBtn");
const categoryList = document.getElementById("categoryList");
const dropdown = document.querySelector(".category-dropdown");

let selectedCategory = "all";

// OPEN / CLOSE DROPDOWN
categoryBtn.onclick = (e) => {
  e.stopPropagation(); // prevent immediate close
  dropdown.classList.toggle("active");
};

// SELECT CATEGORY
categoryList.querySelectorAll("li").forEach(item => {
  item.onclick = () => {
    selectedCategory = item.dataset.category;
    categoryBtn.innerHTML = item.innerText;

    dropdown.classList.remove("active"); // close dropdown
    filterProjects();
  };
});

// CLOSE WHEN CLICKING OUTSIDE
document.addEventListener("click", (e) => {
  if (!dropdown.contains(e.target) && !categoryBtn.contains(e.target)) {
    dropdown.classList.remove("active");
  }
});

// FILTER FUNCTION
function filterProjects() {
  const value = searchInput.value.toLowerCase();

  cards.forEach(card => {
    const name = card.dataset.name.toLowerCase();
    const category = card.dataset.category;

    const matchName = name.includes(value);
    const matchCategory = selectedCategory === "all" || category.includes(selectedCategory);

    card.style.display = (matchName && matchCategory) ? "block" : "none";
  });
}

// SEARCH INPUT
searchInput.addEventListener("keyup", filterProjects);


// ================= WHATSAPP =================
function buyNow(name) {
  window.open(`https://wa.me/918179143777?text=I want ${name}`, "_blank");
}