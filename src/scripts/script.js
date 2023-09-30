const menuToggle = document.querySelector(".menu-toggle");
console.log(menuToggle);
const mobileMenu = document.querySelector(".mobile-menu");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});
