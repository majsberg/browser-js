let clicker = document.getElementById("cookie");
let count = document.getElementById("clicker__counter");
clicker.onclick = function() {
	count.textContent++;
	if (count.textContent % 2 == true) {
		cookie.width = 300;
	} else {
		cookie.width = 200;
	}
}