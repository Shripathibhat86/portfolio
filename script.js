document.addEventListener('DOMContentLoaded', () => {

    /* ── Auto years of experience (actual worked periods, gaps excluded) ── */
    const workPeriods = [
        { start: new Date(2018, 2, 1),  end: new Date(2020, 1, 28) },   // Winman Software
        { start: new Date(2020, 8, 1),  end: new Date(2022, 10, 30) },  // Cogent E Services
        { start: new Date(2023, 0, 1),  end: new Date(2023, 8, 30) },   // Symmetrix
        { start: new Date(2023, 8, 1),  end: new Date() }               // SSMRV College (ongoing)
    ];
    const totalMs = workPeriods.reduce((sum, p) => sum + (p.end - p.start), 0);
    const years   = Math.floor(totalMs / (1000 * 60 * 60 * 24 * 365.25));
    const label   = years + '+';
    ['yearsExp', 'yearsExpStat'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.textContent = label;
    });

    /* ── Footer year ── */
    const yrEl = document.getElementById('currentYear');
    if (yrEl) yrEl.textContent = new Date().getFullYear();

    /* ── Mobile menu ── */
    const hamburger = document.querySelector('.hamburger');
    const navLinks  = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            const isOpen = navLinks.classList.toggle('active');
            const icon   = hamburger.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars', !isOpen);
                icon.classList.toggle('fa-times', isOpen);
            }
        });
    }

    /* Close mobile menu when a nav link is clicked */
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                const icon = hamburger?.querySelector('i');
                if (icon) {
                    icon.classList.add('fa-bars');
                    icon.classList.remove('fa-times');
                }
            }
        });
    });

    /* ── Active nav link on scroll ── */
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.nav-links li a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            if (pageYOffset >= section.offsetTop - 160) {
                current = section.getAttribute('id');
            }
        });
        navItems.forEach(a => {
            a.classList.remove('active');
            if (current && a.getAttribute('href').includes(current)) {
                a.classList.add('active');
            }
        });
    }, { passive: true });

    /* ── Timeline scroll-reveal (IntersectionObserver) ── */
    const tlItems = document.querySelectorAll('.tl-item');

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    tlItems.forEach((item, i) => {
        item.style.opacity   = '0';
        item.style.transform = 'translateY(24px)';
        item.style.transition = `opacity 0.6s ease ${i * 0.08}s, transform 0.6s ease ${i * 0.08}s`;
        observer.observe(item);
    });

    /* ── Navbar scroll shadow ── */
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (pageYOffset > 20) {
                navbar.style.boxShadow = '0 2px 20px rgba(13,27,42,0.10)';
            } else {
                navbar.style.boxShadow = 'none';
            }
        }, { passive: true });
    }

});
