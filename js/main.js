
// Sticky menu on scroll
const heroImg = document.querySelector('.hero-img');
const menuBar = document.querySelector("#main-menu");
const menuBarHeight = menuBar.offsetHeight;

function stickyMenu() {

	if(window.pageYOffset >= menuBarHeight) {
		//console.log("If:"+window.pageYOffset);
		document.body.style.marginTop = menuBarHeight + 'px';
		menuBar.classList.add('sticky');
		
	}
	else {
		//console.log("Else:"+window.pageYOffset);
		document.body.style.marginTop = 0;
		menuBar.classList.remove('sticky');
		
	}

}

window.addEventListener('scroll', stickyMenu);


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



