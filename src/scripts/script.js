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

// EMAIL.JS //
emailjs.init("wYsMD78n1ztOm7LR8");

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("email-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(form);

    emailjs.sendForm("service_vwfk2ma", "template_1fzkd3r", formData).then(
      function (response) {
        alert("Email sent successfully!");
        form.reset();
      },
      function (error) {
        alert("Error sending email: " + error.text);
      }
    );
  });
});
