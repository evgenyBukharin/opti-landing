const observer = new IntersectionObserver((entries) => {
	// перебор записей
	entries.forEach((entry) => {
		// если элемент появился
		if (entry.isIntersecting) {
			// добавить ему CSS-класс
			entry.target.classList.add("license__image-anim");
		}
	});
});
// элемент за которым следить
observer.observe(document.querySelector(".license__image"));
