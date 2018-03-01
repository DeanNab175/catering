
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



