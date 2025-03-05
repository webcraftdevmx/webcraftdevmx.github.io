const blacklight = document.querySelectorAll(".blacklight");

blacklight.forEach((element) => {
  element.addEventListener("click", (e) => {
    element.classList.toggle("oculta");
    element.classList.toggle("visible");
  });
});
