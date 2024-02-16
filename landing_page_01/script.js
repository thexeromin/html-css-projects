const navbar = document.querySelector("#mobile__navbar__container");
const shape = document.querySelector("#shape");
const navBtn = document.querySelector("#menu__btn");

//toggle navbar
navBtn.addEventListener("click", function () {
	navbar.classList.toggle("toggleClass")
	shape.classList.toggle("toggleClassShape")
});
