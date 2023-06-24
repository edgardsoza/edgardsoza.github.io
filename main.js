const toggle = document.querySelector('.menuicon');
const weboptions = document.querySelector('.weboptions');
const links = document.querySelectorAll('#menuweb');

toggle.addEventListener('click', () => weboptions.classList.toggle('active'));
links.forEach((n) => n.addEventListener('click', () => {
  weboptions.classList.remove('active');
}));