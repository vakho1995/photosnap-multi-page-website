const burger = document.querySelector(".burger");
const nuv = document.querySelector(".hide-nav-for-desktop");
const burger1 = document.querySelector(".burger-icon1");
const burger2 = document.querySelector(".burger-icon2");

burger.addEventListener("click", () => {
  nuv.classList.toggle("open");

  burger1.style.display = nuv.classList.contains("open") ? "none" : "block";
  burger2.style.display = nuv.classList.contains("open") ? "block" : "none";
});
