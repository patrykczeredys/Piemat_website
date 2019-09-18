const menuBtn = document.querySelector('#header__icon');
const body = document.querySelector('body');
const siteCache = document.querySelector('#site-cache');
const contactBtn = document.querySelector('#contactBtn');

const showMenu = () => {
	body.classList.toggle('with--sidebar');
	body.classList.toggle('active');
}

const closeMenu = () => {
	body.classList.remove('with--sidebar');
	body.classList.remove('active');
}

const scrollClose = () => {
	body.classList.remove('with--sidebar');
	body.classList.remove('active');
	console.log('nn');
}

menuBtn.addEventListener('click', showMenu);
siteCache.addEventListener('click', closeMenu);
contactBtn.addEventListener('click', scrollClose);