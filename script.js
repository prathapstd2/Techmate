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
