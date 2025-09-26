// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Mobile menu toggle
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        const icon = navToggle.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.className = 'fas fa-times';
        } else {
            icon.className = 'fas fa-bars';
        }
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navToggle.querySelector('i').className = 'fas fa-bars';
        });
    });

    // Active section highlighting
    function updateActiveSection() {
        const scrollPosition = window.scrollY + 100;
        
        navLinks.forEach(link => {
            const sectionId = link.getAttribute('href').substring(1);
            const section = document.getElementById(sectionId);
            
            if (section) {
                const offsetTop = section.offsetTop;
                const offsetBottom = offsetTop + section.offsetHeight;
                
                if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                    navLinks.forEach(l => l.classList.remove('active'));
                    link.classList.add('active');
                }
            }
        });
    }

    // Update active section on scroll
    window.addEventListener('scroll', updateActiveSection);

    // Smooth scroll function
    window.scrollToSection = function(sectionId) {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    // Add scroll event listener for navbar background
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(14, 14, 16, 0.95)';
        } else {
            navbar.style.background = 'rgba(14, 14, 16, 0.8)';
        }
    });

    // Add animation on scroll for cards
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all cards and sections for animation
    const animatedElements = document.querySelectorAll(`
        .focus-card, .skill-card, .education-item, .experience-item, 
        .project-card, .publication-card, .contact-item, .stat-card,
        .summary-card, .research-card
    `);

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Add staggered animation delays
    const cardGroups = document.querySelectorAll(`
        .skills-grid, .focus-areas, .projects-grid, .contact-grid
    `);

    cardGroups.forEach(group => {
        const cards = group.querySelectorAll(`
            .skill-card, .focus-card, .project-card, .contact-item
        `);
        cards.forEach((card, index) => {
            card.style.transitionDelay = `${index * 0.1}s`;
        });
    });

    // Add hover effects for interactive elements
    const interactiveCards = document.querySelectorAll(`
        .skill-card, .focus-card, .project-card, .contact-item,
        .education-item, .experience-item, .publication-card
    `);

    interactiveCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Add click functionality to contact items
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach(item => {
        const text = item.querySelector('p').textContent;
        
        if (text.includes('@')) {
            // Email
            item.addEventListener('click', () => {
                window.location.href = `mailto:${text}`;
            });
            item.style.cursor = 'pointer';
        } else if (text.includes('linkedin.com')) {
            // LinkedIn
            item.addEventListener('click', () => {
                window.open(`https://${text}`, '_blank');
            });
            item.style.cursor = 'pointer';
        } else if (text.includes('github.com')) {
            // GitHub
            item.addEventListener('click', () => {
                window.open(`https://${text}`, '_blank');
            });
            item.style.cursor = 'pointer';
        } else if (text.includes('+91')) {
            // Phone
            item.addEventListener('click', () => {
                window.location.href = `tel:${text}`;
            });
            item.style.cursor = 'pointer';
        }
    });

    // Add typing effect to hero subtitle
    const subtitle = document.querySelector('.hero-subtitle');
    const originalText = subtitle.textContent;
    subtitle.textContent = '';
    
    function typeText(text, element, speed = 100) {
        let i = 0;
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }

    // Start typing effect after a small delay
    setTimeout(() => {
        typeText(originalText, subtitle, 80);
    }, 1000);

    // Add parallax effect to hero section
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

    // Initialize any required functions
    updateActiveSection();
});