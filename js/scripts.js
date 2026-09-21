/*!
* Start Bootstrap - Scrolling Nav v5.0.6 & SUROC Custom Interactive Scripts
*/

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    }

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    document.querySelectorAll('#navbarResponsive .nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (navbarToggler && window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Translucent Glassmorphic Navbar shrink & blur on scroll
    const navbarShrink = () => {
        if (mainNav) mainNav.classList.toggle('navbar-scrolled', window.scrollY > 30);
    };
    navbarShrink();
    document.addEventListener('scroll', navbarShrink);

    // Scroll-Triggered Animated Number Counter (Hakkımızda Stat Cards)
    const statNumbers = document.querySelectorAll('.stat-number');
    if (statNumbers.length > 0) {
        let animated = false;

        const animateCounters = () => {
            statNumbers.forEach(counter => {
                const target = parseInt(counter.getAttribute('data-target') || '0', 10);
                const suffix = counter.getAttribute('data-suffix') || '';
                const duration = 1600; // ms
                const startTime = performance.now();

                const updateCount = (currentTime) => {
                    const elapsedTime = currentTime - startTime;
                    const progress = Math.min(elapsedTime / duration, 1);
                    // Ease-out cubic animation formula
                    const easeProgress = 1 - Math.pow(1 - progress, 3);
                    const currentVal = Math.floor(easeProgress * target);

                    counter.textContent = currentVal + suffix;

                    if (progress < 1) {
                        requestAnimationFrame(updateCount);
                    } else {
                        counter.textContent = target + suffix;
                    }
                };

                requestAnimationFrame(updateCount);
            });
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !animated) {
                    animated = true;
                    animateCounters();
                }
            });
        }, { threshold: 0.3 });

        const hakkimizdaSection = document.getElementById('hakkimizda');
        if (hakkimizdaSection) {
            observer.observe(hakkimizdaSection);
        }
    }
});
