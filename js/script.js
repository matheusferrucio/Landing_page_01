let barMenu = document.getElementById("bar_menu");
let responsiveMenu = document.querySelector(".responsive_navigation");

barMenu.addEventListener("click", () => {
    responsiveMenu.classList.toggle("hide");
});
