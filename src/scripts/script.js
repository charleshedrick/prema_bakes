const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
const navLinks = document.querySelectorAll(".mobile-menu ul li a");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
  });
});

const slides = document.querySelector(".carousel-slides");
const slideButtons = document.querySelectorAll(".slide-button");

let slideIndex = 0;
let timer; // Variable to store the interval timer

// Function to show a specific slide
function showSlide(index) {
  slides.style.transform = `translateX(-${index * 100}%)`;

  // Remove 'active' class from all slide buttons
  slideButtons.forEach((button) => {
    button.classList.remove("active");
  });

  // Add 'active' class to the current slide button
  slideButtons[slideIndex].classList.add("active");
}

// Function to go to the next slide
function nextSlide() {
  slideIndex++;
  if (slideIndex >= slideButtons.length) {
    slideIndex = 0; // Loop back to the first slide
  }
  showSlide(slideIndex);
}

// Event listeners for slide buttons
slideButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    slideIndex = index;
    showSlide(slideIndex);
    resetTimer();
  });
});

// Function to start the automatic slideshow
function startSlideshow() {
  timer = setInterval(() => {
    nextSlide();
  }, 10000); // Transition to the next slide every 10 seconds
}

// Function to stop and reset the timer
function resetTimer() {
  clearInterval(timer);
  startSlideshow(); // Restart the timer
}

// Initial display and start the slideshow
showSlide(slideIndex);
startSlideshow();
