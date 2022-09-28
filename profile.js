
let favColor = document.querySelector('#color').addEventListener('click', favColorBtn)
let favPlace = document.querySelector('#place').addEventListener('click', favPlaceBtn)
let favRitual = document.querySelector('#ritual').addEventListener('click', favRitualBtn)

function favColorBtn(evt) {
	evt.preventDefault();
	
	alert('My favorite color is blue!');
}

function favPlaceBtn(evt) {
	evt.preventDefault();

	alert("My favorite place is Priest Lake, Idaho!")
}

function favRitualBtn(evt) {
	evt.preventDefault();

	alert("My favorite ritual is reading to my son at night!")
}

