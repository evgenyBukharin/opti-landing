const vidget = document.querySelector(".vidget");

if (vidget !== null) {
	setTimeout(() => {
		vidget.classList.add("vidget-visible");
	}, 5000);

	const vidgetIconClose = vidget.querySelector(".vidget__icon-close");
	vidgetIconClose.addEventListener("click", () => {
		vidget.classList.remove("vidget-visible");
		vidget.style.transform = "translateX(0)";
		vidget.style.visibility = "visible";

		setTimeout(() => {
			vidget.style.transform = "translateX(120%)";
		}, 0);
		setTimeout(() => {
			vidget.style.visibility = "hidden";
		}, 500);
	});
}
