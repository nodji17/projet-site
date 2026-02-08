const hamburger = document.getElementById("hamburger");
const navMobile = document.getElementById("navMobile");
const content = document.getElementById("content");
const links = navMobile.querySelectorAll("a");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMobile.classList.toggle("active");
  content.classList.toggle("menu-open");
});

// Fermeture automatique au clic d’un lien
links.forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMobile.classList.remove("active");
    content.classList.remove("menu-open");
  });
});