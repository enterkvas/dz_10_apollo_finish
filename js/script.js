"use strict";

// Кнопка бургера /Показ\скрытие /Смена цвета плашки /Прокрутка к началу страницы 
const nav = document.querySelector('.navigation');
const iconBurger = document.querySelector('.menu__burger--button');
const navList = document.querySelector('.menu__list');
iconBurger.addEventListener("click", function(e) {	
	navList.classList.toggle('_active'); // Меню выезжает/уезжает	
	nav.classList.toggle('navigation--navy-blue');	
	window.scrollTo({ top: 0, behavior: 'smooth' }); 		
});
// Пункты-ссылки меню бургера /Плавная прокрутка
const menuLinks = document.querySelectorAll('.menu__link');
if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener("click", onMenuLinkClick);
	});
	function onMenuLinkClick(e) {
		const menuLink = e.target;
		const w = document.body.clientWidth;
		if (w < 992) {
			navList.classList.toggle('_active');
			nav.classList.toggle('navigation--navy-blue');		
			if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
				const menuBlock = document.querySelector(menuLink.dataset.goto);
				const menuBlockValue = menuBlock.getBoundingClientRect().top - document.querySelector('.navigation').offsetHeight;
				
				window.scrollTo ({
					top: menuBlockValue,
					behavior: "smooth"
				});
			}			
		} else if (w > 991) {			
			if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {				
				const menuBlock = document.querySelector(menuLink.dataset.goto);
				if (window.pageYOffset === 0) {
					const menuBlockValue = menuBlock.getBoundingClientRect().top;					

					window.scrollTo ({
						top: menuBlockValue,
						behavior: "smooth"
					});				
				} else if (window.pageYOffset > 0) {
					const menuBlockValue = menuBlock.getBoundingClientRect().top + window.pageYOffset;	

					window.scrollTo ({
						top: menuBlockValue,
						behavior: "smooth"
					});				
				}				
			}			
		}		
		e.preventDefault();
	}	
}

// Показ\Скрытие разных текстовок слайдера на разных разрешениях:
// var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
// var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
// const w = document.body.clientWidth;
// w = 200;
// const visibleMobiles = document.querySelectorAll('.visible-mobile');
// visibleMobiles.forEach(visibleMobile => {
// 	if (w < 768) {
// 		visibleMobile;
// 	}
// });	
// console.log(visibleMobiles);
// console.log(w);
// console.log(h);

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
// const btn_upElement = document.createElement('div');
// 		btn_upElement.className = "btn_up";
// 		btn_upElement.innerHTML = ("<button class="btn_up"></button>");

// Рабочий код на jQuery кнопка вверх:

/* Кнопка вверх .btn_up на jQuery Рабочий варик */

// const iconBurger = document.querySelector('.menu__burger--button');
// const navList = document.querySelector('.menu__list');

// $('body').append('<div title="Наверх"><button class="btn_up"></button></div>');

// $('.btn_up').click(function () {
// 	if (iconBurger.hasClass("navigation--navy-blue")) {
// 		iconBurger.toggleClass('navigation--navy-blue');
// 		navList.slideToggle();
// 	}
// 	$('body').animate({ scrollTop: 0 }, 1000);
// 	$('html').animate({ scrollTop: 0 }, 1000);	
// });

// $(window).scroll(function () {	
// 	if ($(window).scrollTop() > 200) {
// 		$('.btn_up').addClass('active');
// 	} else {
// 		$('.btn_up').removeClass('active');
// 	}
// });