

// Кнопка вверх:

function btn_up () {
	'use strict';

	const btn_upElement = document.createElement('div');
	btn_upElement.className = "btn_up";
	document.body.append(btn_upElement);

	btn_upElement.addEventListener("click", function(e) {
		
		window.scrollTo({ top: 0, behavior: 'smooth' });
		btn_upElement.classList.toggle('active');		
		e.preventDefault();
	});
	function trackScroll() {
		const scrolled = window.pageYOffset;
		const coords = document.documentElement.clientHeight;

		if (scrolled > coords) {
			btn_upElement.classList.add('active');
		}
		if (scrolled < coords) {
			btn_upElement.classList.remove('active');
		}
	}
	window.addEventListener('scroll', trackScroll);
}
btn_up();	

// ------------------------------
// (function(){
	// 'use strict';

// function trackScroll() {
// 	var scrolled = window.pageYOffset;
// 	var coords = document.documentElement.clientHeight;

// 	if (scrolled > coords) {
// 		goTopBtn.classList.add('back_to_top-show');
// 	}
// 	if (scrolled < coords) {
// 		goTopBtn.classList.remove('back_to_top-show');
// 	}
// }

// function backToTop() {
// 	if (window.pageYOffset > 0) {
		// window.scrollBy(0, -80);
		// setTimeout(backToTop, 0);			
	// }
	// var scrollStep = window.pageYOffset / 40;
	// if (window.pageYOffset > 0) {
	// window.scrollBy(0, -(scrollStep));
	// setTimeout(backToTop, 0);
// 		window.scrollTo(0, 1000);		
// 	}
// }

// var goTopBtn = document.querySelector('.back_to_top');

// window.addEventListener('scroll', trackScroll);
// goTopBtn.addEventListener('click', backToTop);
// })();

// -------------------------------------------