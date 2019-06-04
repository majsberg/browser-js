let count = document.getElementById("timer");
let id = setInterval(showTime, 1000);
function showTime() {
	count.textContent--
	if (count.textContent == 0) {
		alert('Вы победили в конкурсе');
		clearInterval(id);
	}
}