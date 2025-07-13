const menuToggle = document.querySelector(".menu-toggle");
const siteHeader = document.querySelector(".site-header");
const navLinks = document.querySelectorAll(".site-header a");

menuToggle.addEventListener("click", () => {
  siteHeader.classList.toggle("nav-open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (siteHeader.classList.contains("nav-open")) {
      siteHeader.classList.remove("nav-open");
    }
  });
});
