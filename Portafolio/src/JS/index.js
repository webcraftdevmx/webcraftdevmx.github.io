const toggleButton = document.querySelector(".toggle-button");
const menuDesk = document.querySelector(".menuDesk");

toggleButton.addEventListener("click", () => {
  menuDesk.classList.toggle("active");
});
