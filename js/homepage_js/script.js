// Menu Burger
const iconMenu = document.querySelector('.menu__icon');
if (iconMenu) {
	const menuBody = document.querySelector('.menu__body');
	const menuContainer = document.querySelector('.menu__container');
	const menuList = document.querySelector('.menu__list');
	const menuItem1 = document.querySelector('.menu__item1');
	const menuItem2 = document.querySelector('.menu__item2');
	const menuItem3 = document.querySelector('.menu__item3');
	const menuItem4 = document.querySelector('.menu__item4');
	const menuButtonForBurger = document.querySelector('.menu__button-for-burger');
	const logoText = document.querySelector('.header__logo-text');
	const plushPseudo = document.querySelector('.plush');
	const headerImages = document.querySelector('.header__images');
	iconMenu.addEventListener("click", function (e){
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
		menuContainer.classList.toggle('_active');
		document.body.classList.toggle('_lock');
		menuList.classList.toggle('_active');
		menuItem1.classList.toggle('_active');
		menuItem2.classList.toggle('_active');
		menuItem3.classList.toggle('_active');
		menuItem4.classList.toggle('_active');
		menuButtonForBurger.classList.toggle('_active');
		logoText.classList.toggle('_active');
		plushPseudo.classList.toggle('_active');
		headerImages.classList.toggle('_active');
	})
}

// Initialize Swiper
const swiper = new Swiper('.reviwes__swiper',{
	/*slidesPerView: 1,
	slidesPerViewDynamic: 3,*/
	pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
	navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});