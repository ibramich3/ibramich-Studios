document.getElementById('mobileMenu').addEventListener('click', () => {
  document.getElementById('navLinks').classList.toggle('active');
});

document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function (e) {
    const t = document.querySelector(this.getAttribute('href'));
    if (t) {
      e.preventDefault();
      t.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    document.getElementById('navLinks').classList.remove('active');
  });
});

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('visible');
    });
  },
  { threshold: 0.1 }
);
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const btn = this.querySelector('.submit-btn');
  btn.textContent = 'Message Sent ✓';
  btn.style.background = '#3A3A3A';
  setTimeout(() => {
    btn.textContent = 'Send Message →';
    btn.style.background = '';
    this.reset();
  }, 3000);
});
