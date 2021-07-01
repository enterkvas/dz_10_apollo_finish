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