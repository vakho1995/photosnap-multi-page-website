const burger = document.querySelector(".burger");
const nuv = document.querySelector(".mobile-nav");
const burger1 = document.querySelector(".burger-icon1");
const burger2 = document.querySelector(".burger-icon2");

burger.addEventListener("click", () => {
  nuv.classList.toggle("is-open");

  burger1.style.display = nuv.classList.contains("is-open") ? "none" : "block";
  burger2.style.display = nuv.classList.contains("is-open") ? "block" : "none";
});
