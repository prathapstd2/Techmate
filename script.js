// function toggleMenu() {
//     const menu = document.querySelector(".menu-links");
//     const icon = document.querySelector(".hamburger-icon");
//     menu.classList.toggle("open");
//     icon.classList.toggle("open");
//   }
// const handbracker = document.getElementsByClassName("handbracker")[0];
// const navlinks = document.getElementsByClassName("navlinks")[0];
// handbracker.addEventListener('click',()=>{
//     navlinks.classList.toggle("active");
// });
function toggleMenu() {
    const menu = document.querySelector(".navlinks");
    const icon = document.querySelector(".hamburger");
    menu.classList.toggle("active");
    icon.classList.toggle("active");
  }
let lastScrollTop = 0; // Keeps track of the last scroll position
const navbar = document.getElementById("desktop-nav"); // The navbar

window.addEventListener("scroll", function() {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  // If scrolling down
  if (currentScroll > lastScrollTop) {
    navbar.style.top = "-70px"; // Hide the navbar (adjust based on the height of your navbar)
  } else {
    // If scrolling up
    navbar.style.top = "0"; // Show the navbar
  }

  // Update lastScrollTop to current scroll position
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});