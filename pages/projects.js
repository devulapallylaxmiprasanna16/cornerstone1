// NAV
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

// SEARCH + FILTER
const searchInput = document.getElementById("searchInput");
const cards = document.querySelectorAll(".project-card");

const categoryBtn = document.getElementById("categoryBtn");
const categoryList = document.getElementById("categoryList");

let selectedCategory = "all";

categoryBtn.onclick = () => {
  document.querySelector(".category-dropdown").classList.toggle("active");
};

categoryList.querySelectorAll("li").forEach(item=>{
  item.onclick = ()=>{
    selectedCategory = item.dataset.category;
    categoryBtn.innerHTML = item.innerText;
    filterProjects();
  };
});

function filterProjects(){
  const value = searchInput.value.toLowerCase();

  cards.forEach(card=>{
    const name = card.dataset.name.toLowerCase();
    const category = card.dataset.category;

    const matchName = name.includes(value);
    const matchCategory = selectedCategory === "all" || category.includes(selectedCategory);

    card.style.display = (matchName && matchCategory) ? "block" : "none";
  });
}

searchInput.addEventListener("keyup", filterProjects);

// WHATSAPP
function buyNow(name){
  window.open(`https://wa.me/918179143777?text=I want ${name}`);
}