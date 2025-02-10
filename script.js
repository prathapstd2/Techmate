function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

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

// const handbracker = document.getElementsByClassName("handbracker")[0];
// const navlinks = document.getElementsByClassName("navlinks")[0];
// handbracker.addEventListener('click',()=>{
//     navlinks.classList.toggle("active");
// });
// function toggleMenu() {
//     const menu = document.querySelector(".navlinks");
//     const icon = document.querySelector(".hamburger");
//     menu.classList.toggle("active");
//     icon.classList.toggle("active");
//   }


