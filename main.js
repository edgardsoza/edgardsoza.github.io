const toggle = document.getElementById('hamburger');
const weboptions = document.querySelector('.mobile-bar');
const links = document.querySelectorAll('.mobile-nav-link');

toggle.addEventListener('click', () => weboptions.classList.remove('display-none'));
links.forEach((n) => n.addEventListener('click', () => {
  weboptions.classList.add('display-none');
}));