const hamMenuBtn = document.getElementById("menu-btn");
const hamMenu = document.getElementById("menu");
const navMenu = document.getElementById("navMenu");

hamMenuBtn.addEventListener("click", () => {
  hamMenuBtn.classList.toggle("open");
  hamMenu.classList.toggle("hidden");
  hamMenu.classList.toggle("flex");
});
