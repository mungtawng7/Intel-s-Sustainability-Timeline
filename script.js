// Intel Sustainability Timeline - Interactive Script

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Navigation Toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');

  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-open');
    });

    // Close mobile nav when clicking a link
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('mobile-open');
      });
    });
  }

  // Category Filtering Interactivity
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.timeline-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all buttons
      filterBtns.forEach(b => b.classList.remove('active'));
      // Add active to clicked button
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      cards.forEach(card => {
        if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
          card.classList.remove('hidden');
          card.style.animation = 'fadeIn 0.4s ease forward';
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  // Metric Animated Counter on Scroll
  const metricNumbers = document.querySelectorAll('.metric-number');
  let animated = false;

  function animateMetrics() {
    const metricsSection = document.getElementById('metrics');
    if (!metricsSection) return;

    const rect = metricsSection.getBoundingClientRect();
    if (rect.top <= window.innerHeight * 0.8 && !animated) {
      animated = true;
      metricNumbers.forEach(metric => {
        const target = parseInt(metric.getAttribute('data-target'), 10);
        const text = metric.innerText;
        const suffix = text.replace(/[0-9]/g, ''); // Extract %, B+, etc.
        let current = 0;
        const increment = Math.ceil(target / 40);

        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          metric.innerText = current + suffix;
        }, 30);
      });
    }
  }

  window.addEventListener('scroll', animateMetrics);
  animateMetrics(); // Check on initial page load
});
