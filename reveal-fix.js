const portfolioRevealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('isVisible');
      portfolioRevealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.06, rootMargin: '0px 0px -30px' });

document.querySelectorAll('.reveal').forEach((element) => {
  portfolioRevealObserver.observe(element);
});

// Content remains visible if IntersectionObserver is unavailable or delayed.
window.setTimeout(() => {
  document.querySelectorAll('.reveal').forEach((element) => {
    element.classList.add('isVisible');
  });
}, 1600);
