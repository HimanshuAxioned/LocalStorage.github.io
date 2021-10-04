const hamburger = document.querySelector('.hamburger')
const nav = document.querySelector('.header-content')
// hamburger
hamburger.addEventListener('click', function () {
  nav.classList.toggle('responsive-nav');
  hamburger.classList.toggle('close');
})