"use strict";
const nav = document.querySelector('.navigation');
const iconBurger = document.querySelector('.menu__burger--button');
const navList = document.querySelector('.menu__list');
iconBurger.addEventListener("click", function(e) {	
	navList.classList.toggle('_active');
	navList.classList.toggle('container--mobile-no-padding');
	nav.classList.toggle('navigation--navy-blue');		
});

// Показ\Скрытие разных текстовок слайдера на разных разрешениях:
// const w = document.body.clientWidth();
// const visibleMobile = document.querySelector('.visible-mobile');
// if (w < 992) {
// 	navList.classList.remove('_active');	
// }


// Инициализация Swiper:
new Swiper('.slider-swiper', {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	// Пагинация:
	pagination: {
		el: '.swiper-pagination',
		// Буллеты:
		clickable: true,
	},
});