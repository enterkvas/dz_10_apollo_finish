"use strict";
// Меню бургер
const nav = document.querySelector('.navigation');
const iconBurger = document.querySelector('.menu__burger--button');
const navList = document.querySelector('.menu__list');
iconBurger.addEventListener("click", function(e) {	
	navList.classList.toggle('_active'); // Меню выезжает
	navList.classList.toggle('container--mobile-no-padding');
	nav.classList.toggle('navigation--navy-blue'); 		
});

// Показ\Скрытие разных текстовок слайдера на разных разрешениях:
var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
// const w = document.body.clientWidth;
// w = 200;
const visibleMobiles = document.querySelectorAll('.visible-mobile');
// visibleMobiles.forEach(visibleMobile => {
// 	if (w < 768) {
// 		visibleMobile;
// 	}
// });	
console.log(visibleMobiles);
console.log(w);
console.log(h);

// Инициализация Swiper:
const swiper = new Swiper('.slider-swiper', {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	// Пагинация:
	pagination: {
		el: '.swiper-pagination',
	//Буллеты:	
	clickable: true,
},
	slidesPerView: 1,
});