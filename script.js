const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");
const overlay = document.getElementById("overlay");
const closeBtn = document.getElementById("closeBtn");

// OPEN
hamburger.addEventListener("click", () => {
  nav.classList.add("active");
  overlay.classList.add("active");
  hamburger.style.display = "none";
});

// CLOSE
function closeMenu() {
  nav.classList.remove("active");
  overlay.classList.remove("active");
  hamburger.style.display = "block";
}

closeBtn.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);

// 🔥 IMPORTANT FIX (RESET ON DESKTOP)
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    nav.classList.remove("active");
    overlay.classList.remove("active");
    hamburger.style.display = "none"; // hide in desktop
  }
});













// ================= SERVICES SLIDER =================

const container = document.querySelector(".services-wrapper");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

// prevent error if section not found
if (container && nextBtn && prevBtn) {

  const scrollAmount = 300;

  nextBtn.addEventListener("click", () => {
    container.scrollBy({
      left: scrollAmount,
      behavior: "smooth"
    });
  });

  prevBtn.addEventListener("click", () => {
    container.scrollBy({
      left: -scrollAmount,
      behavior: "smooth"
    });
  });

  // OPTIONAL: disable buttons at edges (premium feel)
  container.addEventListener("scroll", () => {

    if (container.scrollLeft <= 0) {
      prevBtn.style.opacity = "0.4";
    } else {
      prevBtn.style.opacity = "1";
    }

    if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 5) {
      nextBtn.style.opacity = "0.4";
    } else {
      nextBtn.style.opacity = "1";
    }

  });

}

















// CTA NAVIGATION
document.querySelectorAll(".cta-card").forEach(card => {
  card.addEventListener("click", () => {
    const link = card.getAttribute("data-link");
    window.location.href = link;
  });
});



















// ===== FAQ ACCORDION =====
const items = document.querySelectorAll(".faq-item");

items.forEach(item => {
  item.querySelector(".faq-question").addEventListener("click", () => {
    
    // close others
    items.forEach(i => i.classList.remove("active"));

    // open clicked
    item.classList.toggle("active");
  });
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

  const url = `https://wa.me/918179143777?text=${encodeURIComponent(finalMsg)}`;

  window.open(url, "_blank");
});












const wrapper = document.getElementById("servicesWrapper");
const leftBtn = document.getElementById("leftBtn");
const rightBtn = document.getElementById("rightBtn");

leftBtn.addEventListener("click", () => {
  wrapper.scrollBy({ left: -250, behavior: "smooth" });
});

rightBtn.addEventListener("click", () => {
  wrapper.scrollBy({ left: 250, behavior: "smooth" });
});



















const text = "Real-World Innovations";
let index = 0;

function typeText() {
  const element = document.getElementById("typing-text");

  if (index < text.length) {
    element.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeText, 80); // speed (lower = faster)
  }
}

window.onload = typeText;