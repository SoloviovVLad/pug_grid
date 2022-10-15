const $burger = document.querySelector('.burger');
const $mobMenu = document.querySelector('.headerMenu');

const burgerMenu = () => {
	if ($mobMenu.classList.contains('header_menu--hide')) {
		$mobMenu.classList.remove('header_menu--hide');
		$burger.classList.add('burger--open');
	} else {
		$mobMenu.classList.add('header_menu--hide');
		$burger.classList.remove('burger--open');
	}
};

$burger.addEventListener('click', burgerMenu);
