const toggleButton = document.querySelector(".toggle-button");
const menuDesk = document.querySelector(".menuDesk");
const iconMenu = document.getElementById("iconMenu");
const contCurtain = document.getElementById("contCurtain");

toggleButton.addEventListener("click", () => {
  menuHidden();
});

contCurtain.addEventListener("click", () => {
  menuHidden();
});

function menuHidden() {
  menuDesk.classList.toggle("active");
  contCurtain.classList.toggle("hidden");
  if (menuDesk.classList.contains("active")) {
    iconMenu.classList.replace("fa-bars", "fa-xmark");
  } else {
    iconMenu.classList.replace("fa-xmark", "fa-bars");
  }
}
