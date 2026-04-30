// ===== MENU =====
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


// ===== FORM → WHATSAPP =====
document.getElementById("prototypeForm").addEventListener("submit", function(e){

  e.preventDefault();

  const inputs = this.querySelectorAll("input, textarea");

  const name = inputs[0].value;
  const phoneUser = inputs[1].value;
  const title = inputs[2].value;
  const desc = inputs[3].value;
  const expect = inputs[4].value;

  const phone = "918179143777";

  const message = `Hello Team,
Name: ${name}
Contact: ${phoneUser}
Project: ${title}
Description: ${desc}
Expectation: ${expect}`;

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
});