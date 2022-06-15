// Navbar Fixed

window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
}

// Navigation Button

const navButton = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

navButton.addEventListener('click', function() {
    navButton.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
})