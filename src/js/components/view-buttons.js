const aboutBtn = document.querySelector(".nav__item-about");
const aboutSection = document.querySelector(".group__container");
if (aboutBtn) {
	aboutBtn.addEventListener("click", () => {
		aboutSection.scrollIntoView({
			behavior: "smooth",
			block: "center",
		});
	});
}

const advantagesBtn = document.querySelector(".nav__item-advantages");
const advantagesSection = document.querySelector(".license");
if (advantagesBtn) {
	advantagesBtn.addEventListener("click", () => {
		advantagesSection.scrollIntoView({
			behavior: "smooth",
			block: "start",
		});
	});
}

const heroBtn = document.querySelector(".hero__button");
if (heroBtn) {
	heroBtn.addEventListener("click", () => {
		advantagesSection.scrollIntoView({
			behavior: "smooth",
			block: "start",
		});
	});
}

const bannerBtn = document.querySelector(".nav__item-banner");
const bannerSection = document.querySelector(".license__banner");
if (bannerBtn) {
	bannerBtn.addEventListener("click", () => {
		bannerSection.scrollIntoView({
			behavior: "smooth",
			block: "start",
		});
	});
}
