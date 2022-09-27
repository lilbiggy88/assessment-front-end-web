console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('The form has been submitted!');
}

function rubberDuck(evt) {
	evt.preventDefault();

	alert("You found my rubber ducky! RUBBER DUCKY! YOU'RE THE ONE!")
}

let form = document.querySelector('#contact');
let duckPic = document.querySelector('#rubber-ducky')
form.addEventListener('submit', handleSubmit);
duckPic.addEventListener('mouseover', rubberDuck);

