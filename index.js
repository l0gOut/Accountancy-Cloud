const hamburger = document.getElementById("hamburger");
const hamburgerNavigation = document.getElementById("hamburger-navigation");

hamburger.addEventListener("click", () => {
  hamburgerNavigation.classList.toggle("active");
  hamburger.classList.toggle("is-active");
});
