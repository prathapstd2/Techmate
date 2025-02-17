//Pop-up image functionality
window.onload = function () {
  setTimeout(() => {
    document.getElementById("popup-container").style.visibility = "visible";
    document.getElementById("popup-container").style.opacity = "1";
  }, 500); // 0.5s delay before showing popup
};

//Navbar scroll down functionality
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

//Aos animation in mobile view
document.addEventListener("DOMContentLoaded", function () {
  if (window.innerWidth < 768) { // Apply AOS only for mobile view
    const serviceItems = document.querySelectorAll(".service-item");

    serviceItems.forEach((item, index) => {
      if (index !== 0) { // Exclude the first item (index 0)
        item.setAttribute("data-aos", "fade-up"); // Apply AOS
      }
    });
    AOS.init({
      duration: 1200,  // Animation duration in milliseconds
      once: true  // Animation will only happen once
    });
  }
});

let lastScrollTop = 0;
const navbar = document.querySelector("nav");
const menu = document.querySelector(".menu-links");
const icon = document.querySelector(".hamburger-icon");

window.addEventListener("scroll", () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop && scrollTop > 10) {
    // Hide navbar when scrolling down
    navbar.style.transform = "translateY(-100%)";
    menu.classList.remove("open");
    icon.classList.remove("open");
  } else {
    // Show navbar when scrolling up
    navbar.style.transform = "translateY(0)";
  }

  lastScrollTop = scrollTop;
}, { passive: true });

function closePopup() {
  document.getElementById("popup-container").style.opacity = "0";
  setTimeout(() => {
    document.getElementById("popup-container").style.visibility = "hidden";
  }, 300); // Matches CSS transition time
}

//whu chosee us
document.addEventListener("DOMContentLoaded", function () {
  const list = document.querySelector(".slideshow");
  const items = document.querySelectorAll(".slideshow li");
  let index = 0;

  function slideItems() {
    index++;
    if (index >= items.length) {
      index = 0; // Reset to start
    }
    list.style.transition = "transform 0.8s ease-in-out";
    list.style.transform = `translateY(-${index * 50}px)`;
  }

  setInterval(slideItems, 2000);
});

//image slider
document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".slider-container img");
  let index = 0;

  function showNextImage() {
    images[index].classList.remove("active"); // Hide current image
    index = (index + 1) % images.length; // Move to next image
    images[index].classList.add("active"); // Show next image
  }

  setInterval(showNextImage, 2000); // Change image every 0.5 seconds
});


