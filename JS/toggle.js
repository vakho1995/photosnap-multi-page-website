const burger = document.querySelector(".burger");
const nav = document.querySelector(".mobile-nav");
const burger1 = document.querySelector(".burger-icon1");
const burger2 = document.querySelector(".burger-icon2");

burger.addEventListener("click", () => {
  nav.classList.toggle("is-open");

  burger1.style.display = nav.classList.contains("is-open") ? "none" : "block";
  burger2.style.display = nav.classList.contains("is-open") ? "block" : "none";
});

///if window width more than 768px,
// the "function handleMediaChange()" removes class "is-open"
// from navigation-bar for mobile.
const mediaQuery = window.matchMedia("(max-width: 768px)");

function handleMediaChange(e) {
  if (!e.matches) {
    nav.classList.remove("is-open");
  }
}
mediaQuery.addEventListener("change", handleMediaChange);
handleMediaChange(mediaQuery);
