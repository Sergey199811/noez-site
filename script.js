const menuBtn = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const yearEl = document.getElementById('year');

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(isOpen));
  });
}

if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}

const path = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('[data-nav]').forEach((a) => {
  if (a.getAttribute('href') === path) a.classList.add('active');
});
