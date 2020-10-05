import React, { useEffect } from "react";

function Toast() {
	useEffect(() => {
		let toasts = document.getElementsByClassName("toast");
		for (let toast of toasts) {
			setTimeout(() => toast.classList.add("transition"), 1000);
			setTimeout(() => toast.classList.add("hide"), 2000);
		}
	});

	return (
		<div id="toast" className="toast">
			You're a winner!
		</div>
	);
}

export default Toast;
