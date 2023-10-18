import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

const img = document.querySelector(".hero__image-kit");
const btn = document.querySelector(".hero__button");

const mediaQuery1024 = window.matchMedia("(max-width: 1024px)");
const mediaQuery768 = window.matchMedia("(max-width: 768px)");
const mediaQuery480 = window.matchMedia("(max-width: 480px)");

gsap.registerPlugin(MotionPathPlugin);
if (!mediaQuery480.matches) {
	gsap.set(img, { xPercent: -200, yPercent: -25, transformOrigin: "0 50%" });
	if (mediaQuery768.matches) {
		gsap.set(img, { xPercent: -200, yPercent: 0, transformOrigin: "0 50%" });
		gsap.to(img, {
			x: 0,
			duration: 7,
			motionPath: {
				path: "M2320.5 285C2320.5 285 1594 18.9998 1064 1.49981C563.473 -15.027 0.999955 378.5 0.999955 378.5",
				autoRotate: 150,
			},
			repeat: -1,
		});
	} else if (mediaQuery1024.matches) {
		gsap.set(img, { xPercent: -200, yPercent: 0, transformOrigin: "0 50%" });
		gsap.to(img, {
			x: 0,
			duration: 7,
			motionPath: {
				path: "M2320.5 285C2320.5 285 1594 18.9998 1064 1.49981C563.473 -15.027 0.999955 378.5 0.999955 378.5",
				autoRotate: 150,
			},
			repeat: -1,
		});
	} else {
		gsap.to(img, {
			x: 0,
			duration: 7,
			motionPath: {
				path: "M2320.5 285C2320.5 285 1594 18.9998 1064 1.49981C563.473 -15.027 0.999955 378.5 0.999955 378.5",
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
