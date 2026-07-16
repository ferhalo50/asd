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

const lightbox = document.querySelector('#lightbox');
const lightboxImage = document.querySelector('#lightboxImage');
document.querySelectorAll('.project-card').forEach(card => card.addEventListener('click', () => {
  lightboxImage.src = card.dataset.src;
  lightboxImage.alt = card.querySelector('img').alt;
  lightbox.showModal();
}));
document.querySelector('#lightboxClose').addEventListener('click', () => lightbox.close());
lightbox.addEventListener('click', event => { if (event.target === lightbox) lightbox.close(); });

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(element => observer.observe(element));

window.addEventListener('scroll', () => document.querySelector('.navbar').classList.toggle('scrolled', window.scrollY > 20), { passive: true });
