/* let elements = document.getElementsByClassName("hole");
for (let i = 0; i < elements.length; i++) {
	elements[i].onclick = getHole(???)
}

let dead = document.getElementById('dead');
let lost = document.getElementById('lost');

function getHole(???) {
	
	let checkClass = ???.classList.contains( 'hole_has-mole' );
	if (checkClass == true) {
		dead.textContent++;
	} else {
		lost.textContent++;
	}
}*/

let dead = document.getElementById('dead');
let lost = document.getElementById('lost');

function getHole(index) {
	let a = document.getElementById(`hole${index}`);
	console.log(a)
	return a
}

function checkClass() {
	if (hole1.classList.contains('hole_has-mole') == true) {
		dead.textContent++;
	} else {
		lost.textContent++;
	}
}

for (let i = 0; i < 10; i++) {
	getHole(i).onclick = checkClass();
}
