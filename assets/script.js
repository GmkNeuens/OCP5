const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

const arrowleft = document.querySelector("#banner .arrow_left");
const arrowright = document.querySelector("#banner .arrow_right");
const slidedotscontainer = document.querySelector(".dots");
const bannerimage = document.querySelector("#banner .banner-img");
const bannertagLine = document.querySelector("#banner p");

let cursor = 0;

arrowleft.addEventListener("click", () => {
	cursor--;
	if (cursor < 0) {
		cursor = slides.length-1;
	};
	loadslide(cursor);
	console.log("Left arrow click, cursor now at "+cursor);
});
arrowright.addEventListener("click", () => {
	cursor++;
	if (cursor > slides.length-1) {
		cursor = 0;
	};
	loadslide(cursor);
	console.log("Right arrow click, cursor now at "+cursor);
});

slides.forEach((i) => {
	const slidedot = document.createElement("span");
	slidedotscontainer.appendChild(slidedot);
	slidedot.classList.add("dot");
	slidedotscontainer.firstElementChild.classList.add("dot_selected");
});

function loadslide(x) {
	const slidecontent = slides[x];
	bannerimage.src = `./assets/images/slideshow/${slidecontent.image}`;
	bannertagLine.innerHTML = slidecontent.tagLine;
	slidedotscontainer.querySelectorAll(".dot").forEach(slidedot => slidedot.classList.remove("dot_selected"));
	slidedotscontainer.children[x].classList.add("dot_selected");
};