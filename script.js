// ================= Hero Slider =================
const slides = [
  {
    title: "Data Predictions Minutes Without <span>Writing Code.</span>",
    text: "Prove the ROI of social media, plan more engaging content...",
    img: "/rightsideimg.png",
  },
  {
    title: "Accelerate Your Business with <span>Smart Insights.</span>",
    text: "Turn raw data into actionable insights with real-time analytics.",
    img: "/rightsideimg.png",
  },
  {
    title: "Simplify Workflows Using <span>Automation.</span>",
    text: "Automate repetitive tasks and focus more on innovation.",
    img: "/rightsideimg.png",
  },
];

let currentSlide = 0;
const heroTitle = document.querySelector(".hero-text h1");
const heroText = document.querySelector(".hero-text p");
const heroImage = document.querySelector(".hero-image img");
const leftBtn = document.querySelector(".left-btn");
const rightBtn = document.querySelector(".right-btn");

function showSlide(index) {
  heroImage.style.opacity = 0;
  setTimeout(() => {
    heroTitle.innerHTML = slides[index].title;
    heroText.textContent = slides[index].text;
    heroImage.src = slides[index].img;
    heroImage.onload = () => (heroImage.style.opacity = 1);
  }, 300);
}
rightBtn.addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
});
leftBtn.addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
});
showSlide(currentSlide);

// ================= Mobile Nav =================
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
menuToggle.addEventListener("click", () => navLinks.classList.toggle("active"));

// ================= Smooth Scroll =================
document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    e.preventDefault();
    document
      .querySelector(anchor.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
    navLinks.classList.remove("active");
  });
});

// ================= Accordion =================
document.querySelectorAll(".accordion-item").forEach((item) => {
  const header = item.querySelector(".accordion-header");
  const btn = item.querySelector(".accordion-btn");
  header.addEventListener("click", () => {
    document.querySelectorAll(".accordion-item").forEach((i) => {
      if (i !== item) {
        i.classList.remove("open");
        i.querySelector(".accordion-btn").classList.remove("active");
        i.querySelector(".accordion-btn").textContent = "˅";
      }
    });
    item.classList.toggle("open");
    btn.classList.toggle("active");
    btn.textContent = item.classList.contains("open") ? "^" : "˅";
  });
});
