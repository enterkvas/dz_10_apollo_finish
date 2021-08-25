"use strict";
// Инициализация Swiper
new Swiper('.slider-swiper', {
	// Стрелки:	
	navigation: {
		nextEl: '.button--next',
		prevEl: '.button--prev'
	},
	// Буллеты 
	// pagination: {
	// 	el: '.swiper-pagination',
	// 	clickable: true,
	// },	
	slidesPerView: 1,
});
// Код, который помогает определить на каком устр-ве открыта наша стр:
const isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.iOS() ||
			isMobile.Opera() ||
			isMobile.Windows() 
		); 
	}
};
// ---------------------------------------------
// Выбор девайса (mobile or pc):
if (isMobile.any()) {
	document.body.classList.add('_touch');
} else {
	document.body.classList.add('_pc');
}
//---------------------------------------------
// Меню бургер
const nav = document.querySelector('.navigation');
const iconBurger = document.querySelector('.menu__burger-button');
const navList = document.querySelector('.menu__body');
if (iconBurger) {	
	iconBurger.addEventListener("click", function(e) {
		// document.body.classList.toggle('_lock');
		iconBurger.classList.toggle('_active');
		navList.classList.toggle('_active');
		nav.classList.toggle('_active');		
	});
}
// ---------------------------------------------
// Добавление/удаление класса _active:
// if (isMobile.any()) {
// 	document.body.classList.add('_touch');

// 	let menuArrows = document.querySelectorAll('.menu__burger-button');
// 	if (menuArrows.lenght > 0) {
// 		for (let index = 0; index < menuArrows.length; index++) {
// 			const menuArrow = menuArrows[index];
// 			menuArrow.addEventListener("click", function(e) {
// 				menuArrow.parentElement.classList.toggle('_active');
// 			});
// 		}
// 	}

// } else {
// 	document.body.classList.add('_pc');
// }
// ---------------------------------------------
// Прокрутка при клике
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener("click", onMenuLinkClick);
	});
	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;

			// if (iconMenu.classList.contains('_active')) {
			// 	document.body.classList.remove('_lock');
			// 	iconMenu.classList.remove('_active');
			// 	menuBody.classList.remove('_active');
			// }

			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth" /* указывает ПЛАВНУЮ прокрутку */
			});
			e.preventDefault(); /* отменяем стандартное поведение ссылки */
		}
	}
}

