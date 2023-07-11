const vidget = document.querySelector(".vidget");

if (vidget !== null) {
	setTimeout(() => {
		vidget.classList.remove("vidget-hidden");
	}, 5000);

	const vidgetIconClose = vidget.querySelector(".vidget__icon-close");
	vidgetIconClose.addEventListener("click", () => {
		vidget.classList.add("vidget-hidden");
	});
}
