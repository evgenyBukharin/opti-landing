import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

const img = document.querySelector(".hero__image-kit");
const btn = document.querySelector(".hero__button");

gsap.registerPlugin(MotionPathPlugin);
gsap.set(img, { xPercent: -50, yPercent: -50, transformOrigin: "50% 50%" });
gsap.to(img, {
	x: 0,
	duration: 6,
	motionPath: {
		path: "#path",
		autoRotate: 150,
	},
	repeat: -1,
});

const btnCoords = btn.getBoundingClientRect();
setInterval(() => {
	let imgCoords = img.getBoundingClientRect();
	if (imgCoords.top - img.offsetHeight / 2 < btnCoords.top && imgCoords.left < btnCoords.left + btn.offsetWidth) {
		btn.classList.add("hero__button-anim");
		setTimeout(() => {
			btn.classList.remove("hero__button-anim");
		}, 2500);
	}
}, 500);
