import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

const img = document.querySelector(".hero__image-kit");
const btn = document.querySelector(".hero__button");

const mediaQuery768 = window.matchMedia("(max-width: 768px)");
const mediaQuery480 = window.matchMedia("(max-width: 480px)");

gsap.registerPlugin(MotionPathPlugin);
if (!mediaQuery480.matches) {
	gsap.set(img, { xPercent: -50, yPercent: -50, transformOrigin: "50% 50%" });
	if (mediaQuery768.matches) {
		gsap.to(img, {
			x: 0,
			duration: 5,
			motionPath: {
				path: "#path-tablet",
				autoRotate: 150,
			},
			repeat: -1,
		});
	} else {
		gsap.to(img, {
			x: 0,
			duration: 6,
			motionPath: {
				path: "#path",
				autoRotate: 150,
			},
			repeat: -1,
		});
	}

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
}
