function dropdown() {
	document.querySelector(".dropdown-content").classList.toggle("show");
}

window.onclick = function (event) {
	const dropBtn = document.querySelector(".dropbtn");
	if (event.target != dropBtn) {
		const dropDown = document.querySelector(".dropdown-content");
        if(dropDown.className == "dropdown-content show"){
            dropDown.className = "dropdown-content"
        }
	}
};
