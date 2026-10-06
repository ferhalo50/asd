document.documentElement.classList.add('js');
const menuButton = document.querySelector('#menuToggle');
const nav = document.querySelector('#navLinks');

function closeMenu() {
  nav.classList.remove('open');
  menuButton.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}

menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.classList.toggle('open', open);
  menuButton.setAttribute('aria-expanded', String(open));
});
document.querySelectorAll('.nav-links a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && nav.classList.contains('open')) {
    closeMenu();
    menuButton.focus();
  }
});
window.addEventListener('resize', () => {
  if (window.innerWidth > 920) closeMenu();
}, { passive: true });

const lightbox = document.querySelector('#lightbox');
const lightboxImage = document.querySelector('#lightboxImage');
document.querySelectorAll('.project-card').forEach(card => card.addEventListener('click', () => {
  lightboxImage.src = card.dataset.src;
  lightboxImage.alt = card.querySelector('img').alt;
  lightbox.showModal();
  document.body.classList.add('modal-open');
}));
document.querySelector('#lightboxClose').addEventListener('click', () => lightbox.close());
lightbox.addEventListener('close', () => document.body.classList.remove('modal-open'));
lightbox.addEventListener('click', event => {
  if (event.target !== lightbox) return;
  const bounds = lightbox.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) lightbox.close();
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(element => observer.observe(element));

function updateNavbar() {
  document.querySelector('.navbar').classList.toggle('scrolled', window.scrollY > 24);
}
window.addEventListener('scroll', updateNavbar, { passive: true });
updateNavbar();
