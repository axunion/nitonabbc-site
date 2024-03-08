const nav = document.querySelector(".nav");
const menuButton = document.querySelector(".menu");
const closeButton = nav?.querySelector(".close");

menuButton?.addEventListener("click", () => {
  nav?.classList.add("active");
  document.body.classList.add("nav-active");
});

closeButton?.addEventListener("click", () => {
  nav?.classList.remove("active");
  document.body.classList.remove("nav-active");
});
