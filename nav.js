const menuBtn = document.getElementById('menuBtn');
const navMenu = document.getElementById('navMenu');

menuBtn.addEventListener('click', () => {
  const nowExpanded = menuBtn.getAttribute('aria-expanded') !== 'true';
  menuBtn.setAttribute('aria-expanded', nowExpanded);
  menuBtn.setAttribute('aria-label', nowExpanded ? 'Close navigation menu' : 'Open navigation menu');
  navMenu.classList.toggle('active', nowExpanded);
  menuBtn.innerHTML = nowExpanded ? '&times;' : '&#9776;';
  if (nowExpanded) { const f = navMenu.querySelector('a'); if(f) f.focus(); }
});
navMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  navMenu.classList.remove('active');
  menuBtn.setAttribute('aria-expanded', 'false');
  menuBtn.setAttribute('aria-label', 'Open navigation menu');
  menuBtn.innerHTML = '&#9776;';
}));
