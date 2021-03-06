'use strict';
// Sticky menu on scroll
const heroImg = document.querySelector('.hero-img');
const menuBar = document.querySelector("#main-menu");
const menuBarHeight = menuBar.offsetHeight;

// listen to scroll event
window.addEventListener('scroll', stickyMenu);

// if the page vertical offset is
// greater than the menu bar height
// add the sticky class
// else remove it
function stickyMenu() {

	if(window.pageYOffset >= menuBarHeight) {
		menuBar.classList.add('sticky');
	}
	else {
		menuBar.classList.remove('sticky');

	}

}


// Hide and show menu
const burgerMenu = document.querySelector('#burger-menu');
const menu = document.querySelector('.menu');

burgerMenu.addEventListener('click', toggleMenu);

function toggleMenu() {

	if(menu.classList.value == 'menu') {
		menu.classList.add('open');
	}
	else {
		menu.classList.remove('open');
	}

	// Change burger menu icon to close icon
	// on click event
	if(burgerMenu.classList.value == "") {
		burgerMenu.classList.add('open');
	}
	else {
		burgerMenu.classList.remove('open');
	}

}


// Form validation
const form = document.querySelector('form[name="contact-form"]');
const inputs = form.querySelectorAll('[name]');

//console.log(inputs);

// set the Date input value programmatically
for(let i = 0; i < inputs.length; i++) {
	if(inputs[i].name == 'date') {
		inputs[i].value = today();
	}
}

form.addEventListener("submit", function (event) {
	event.preventDefault();
	let count = 0;
	for(let i = 0; i < inputs.length; i++) {

		let message = createAnElement('span', inputs[i].name + ' is empty');
		message.classList.add('message');

		// skip the loop if the input are date or submit
		if(inputs[i].name == 'date' || inputs[i].name == 'submit') {
			continue;
		}

		// checks if the input are empty
		if( checkForEmpty(inputs[i].value) ) {

			/* check if the sibling element is
			   a <span> tag by comparing its localName
			*/
			// if the next element of the
			// input is not a <span>
			// then add one
			if(inputs[i].nextSibling.localName !== "span") {
				inputs[i].parentNode.insertBefore(message, inputs[i].nextSibling);
			}

		}
		// check if the input are not empty
		else {
			// if the next element of the
			// input is a <span>
			// then removes it
			if(inputs[i].nextSibling.localName === "span") {
				inputs[i].parentNode.removeChild(inputs[i].nextSibling);
			}

			count++;

		}

	} // end for loop

	/* check if count is the same as the number of
	 * inputs minus the 2 skipped inputs
	 * (the date and the submit button)
	 * if it matches therefore none
	 * of the inputs are empty
	*/
	if ( count === (inputs.length - 2) ) {
		alert('Thanks! Your message has been sent successfully.');
	}

});


// Function today
// return the current date
function today() {
	const d = new Date();
	let date = d.getDate(),
		month = d.getMonth() + 1,
		year = d.getFullYear();

	if(date < 10) {
		date = '0' + date;
	}

	if(month < 10) {
		month = '0' + month;
	}

	return date + '/' + month + '/' + year;
}

// check if input is empty
function checkForEmpty(input) {
	if(input === "") {
		return true;
	} else {
		return false;
	}
}

// create a new element
function createAnElement(element, text) {
	const newEl = document.createElement(element);
	newEl.textContent = text;

	return newEl;
}
