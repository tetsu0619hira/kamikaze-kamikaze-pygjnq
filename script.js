// Navigation enhancement only. All contact links and content work without JavaScript.
const sectionLinks = document.querySelectorAll('.header nav a');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      sectionLinks.forEach(link => {
        if (link.hash === '#' + entry.target.id) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-10% 0px -55% 0px' });
  document.querySelectorAll('#about, #menu, #access').forEach(section => observer.observe(section));
}
