// navbar
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (scrollY >= 60) {
    navbar.classList.add("active");
  } else {
    navbar.classList.remove("active");
  }
});
// navbar end
