/**
 * SUROC - Interactive Scripts
 */

document.addEventListener('DOMContentLoaded', () => {
  const mainNav = document.getElementById('mainNav');

  // 1. Precise & Bulletproof ScrollSpy for Navbar Links
  const navLinks = document.querySelectorAll('#navbarResponsive .nav-link');
  const sections = [
    document.getElementById('hakkimizda'),
    document.getElementById('projelerimiz'),
    document.getElementById('sponsorlarimiz'),
    document.getElementById('iletisim'),
  ].filter(Boolean);

  const updateActiveNavLink = () => {
    const scrollPos = window.scrollY;
    const navHeight = mainNav ? mainNav.offsetHeight : 70;
    const windowHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;

    // Check if user has scrolled near or at the bottom of the page
    if (scrollPos + windowHeight >= docHeight - 60) {
      navLinks.forEach((link) => {
        link.classList.toggle('active', link.getAttribute('href') === '#iletisim');
      });
      return;
    }

    // Determine the active section from bottom to top
    const activationOffset = navHeight + 80;
    let currentId = null;

    for (let i = sections.length - 1; i >= 0; i--) {
      const section = sections[i];
      if (scrollPos >= section.offsetTop - activationOffset) {
        currentId = section.getAttribute('id');
        break;
      }
    }

    // Apply or remove the active class (which triggers the red underline bar)
    navLinks.forEach((link) => {
      const href = link.getAttribute('href');
      if (currentId && href === `#${currentId}`) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  };

  window.addEventListener('scroll', updateActiveNavLink, { passive: true });
  window.addEventListener('resize', updateActiveNavLink, { passive: true });
  updateActiveNavLink();

  // 2. Collapse mobile navigation on link click
  const navbarToggler = document.querySelector('.navbar-toggler');
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (navbarToggler && window.getComputedStyle(navbarToggler).display !== 'none') {
        navbarToggler.click();
      }
      setTimeout(updateActiveNavLink, 350);
    });
  });

  // 3. Navbar scroll blur & elevation
  const handleNavbarScroll = () => {
    if (mainNav) {
      mainNav.classList.toggle('navbar-scrolled', window.scrollY > 20);
    }
  };
  handleNavbarScroll();
  window.addEventListener('scroll', handleNavbarScroll, { passive: true });

  // 4. Number Counter Animation for Stat Cards
  const statNumbers = document.querySelectorAll('.stat-number');
  if (statNumbers.length > 0) {
    let hasAnimated = false;

    const runCounterAnimation = () => {
      statNumbers.forEach((counter) => {
        const target = parseInt(counter.getAttribute('data-target') || '0', 10);
        const suffix = counter.getAttribute('data-suffix') || '';
        const duration = 1400; // ms
        const startTime = performance.now();

        const tick = (currentTime) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          // Ease-out cubic easing
          const easeProgress = 1 - Math.pow(1 - progress, 3);
          const currentVal = Math.floor(easeProgress * target);

          counter.textContent = currentVal + suffix;

          if (progress < 1) {
            requestAnimationFrame(tick);
          } else {
            counter.textContent = target + suffix;
          }
        };

        requestAnimationFrame(tick);
      });
    };

    // Trigger when stats section enters viewport
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !hasAnimated) {
              hasAnimated = true;
              runCounterAnimation();
              observer.disconnect();
            }
          });
        },
        { threshold: 0.15 }
      );

      const targetSection = document.getElementById('hakkimizda');
      if (targetSection) {
        observer.observe(targetSection);
      }
    } else {
      runCounterAnimation();
    }
  }
});
