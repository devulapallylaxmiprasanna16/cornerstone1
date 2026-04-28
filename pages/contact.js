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


// ===== WHATSAPP FORM =====
document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();

  const inputs = this.querySelectorAll("input, textarea");

  const name = inputs[0].value;
  const phone = inputs[1].value;
  const message = inputs[2].value;

  const finalMsg = `Hello,
Name: ${name}
Phone: ${phone}
Message: ${message}`;

  const url = `https://wa.me/91817913777?text=${encodeURIComponent(finalMsg)}`;

  window.open(url, "_blank");
});