// script.js - JavaScript UNIFIED untuk semua halaman ListrikPro

// ========== MOBILE MENU FUNCTIONALITY ==========
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navMenu = document.getElementById('nav-menu');
    
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const icon = mobileMenuBtn.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        
        // Close mobile menu when clicking a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                const icon = mobileMenuBtn.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !mobileMenuBtn.contains(e.target) && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                const icon = mobileMenuBtn.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
    }
}

// ========== HEADER SCROLL EFFECT ==========
function handleHeaderScroll() {
    const header = document.getElementById('main-header');
    if (header) {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
}

// ========== HOME PAGE ANIMATIONS ==========
function initHomePageAnimations() {
    // Check if we're on home page
    if (document.querySelector('.hero-content')) {
        // Initial animation for hero section
        setTimeout(() => {
            const heroContent = document.querySelector('.hero-content');
            const heroVisual = document.querySelector('.hero-visual');
            
            if (heroContent) heroContent.classList.add('animated');
            if (heroVisual) heroVisual.classList.add('animated');
        }, 300);
        
        // Scroll animations for home page
        window.addEventListener('scroll', () => {
            animateHomeElements();
        });
        
        // Run once on load
        animateHomeElements();
        
        // Smooth scroll for "Lihat Layanan" button
        const seeServicesBtn = document.querySelector('.secondary-btn[href="#services"]');
        if (seeServicesBtn) {
            seeServicesBtn.addEventListener('click', function(e) {
                e.preventDefault();
                const servicesSection = document.querySelector('#services');
                if (servicesSection) {
                    servicesSection.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        }
    }
}

// Animate home page elements on scroll
function animateHomeElements() {
    const elements = document.querySelectorAll('.section-title, .service-card, .hours-badge');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (elementPosition < screenPosition) {
            element.classList.add('animated');
        }
    });
    
    // Stagger animation for service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        setTimeout(() => {
            const cardPosition = card.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (cardPosition < screenPosition) {
                card.classList.add('animated');
            }
        }, index * 100);
    });
}

// ========== TESTIMONI PAGE ANIMATIONS ==========
function initTestimoniPageAnimations() {
    // Check if we're on testimoni page
    if (document.querySelector('.testimoni-hero')) {
        // Animate elements on scroll
        window.addEventListener('scroll', () => {
            animateTestimoniElements();
            animateCounters();
            animateRatingBars();
        });
        
        // Run once on load
        animateTestimoniElements();
        animateCounters();
        animateRatingBars();
        
        // Play button functionality for video testimonials
        const playButtons = document.querySelectorAll('.play-button');
        playButtons.forEach(button => {
            button.addEventListener('click', () => {
                alert('Video testimoni akan diputar. Dalam implementasi nyata, ini akan memutar video testimoni asli.');
            });
        });
    }
}

// Animate testimoni page elements
function animateTestimoniElements() {
    const testimoniCards = document.querySelectorAll('.testimoni-card');
    const videoCards = document.querySelectorAll('.video-card');
    
    testimoniCards.forEach((card, index) => {
        const cardPosition = card.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (cardPosition < screenPosition) {
            setTimeout(() => {
                card.classList.add('animated');
            }, index * 150);
        }
    });
    
    videoCards.forEach((card, index) => {
        const cardPosition = card.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (cardPosition < screenPosition) {
            setTimeout(() => {
                card.classList.add('animated');
            }, index * 200);
        }
    });
    
    // Section titles
    const sectionTitles = document.querySelectorAll('.section-title');
    sectionTitles.forEach(title => {
        const titlePosition = title.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (titlePosition < screenPosition) {
            title.classList.add('animated');
        }
    });
}

// Counter animation for statistics
function animateCounters() {
    const testimoniCount = document.getElementById('testimoni-count');
    const clientCount = document.getElementById('client-count');
    const projectCount = document.getElementById('project-count');
    
    if (testimoniCount && clientCount && projectCount) {
        const statsPosition = testimoniCount.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (statsPosition < screenPosition && !testimoniCount.hasAttribute('data-animated')) {
            // Animate counters
            animateCounter(testimoniCount, 0, 347, 2000);
            animateCounter(clientCount, 0, 289, 2000);
            animateCounter(projectCount, 0, 512, 2000);
            
            testimoniCount.setAttribute('data-animated', 'true');
        }
    }
}

function animateCounter(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        element.textContent = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Animate rating bars
function animateRatingBars() {
    const barFills = document.querySelectorAll('.bar-fill');
    
    barFills.forEach(bar => {
        const barPosition = bar.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (barPosition < screenPosition && !bar.hasAttribute('data-animated')) {
            const percentage = bar.parentElement.nextElementSibling.textContent;
            const width = parseInt(percentage);
            bar.style.width = `${width}%`;
            bar.setAttribute('data-animated', 'true');
        }
    });
}

// ========== CTA BUTTONS FUNCTIONALITY ==========
function initCTAButtons() {
    // Add click event to CTA buttons
    const ctaButtons = document.querySelectorAll('.primary-btn, .banner-button');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Check if it's a placeholder link
            if (this.getAttribute('href') === '#' || this.getAttribute('href') === '') {
                e.preventDefault();
                // In a real implementation, this would trigger a contact form or chat
                alert('Terima kasih! Anda akan dihubungkan ke layanan pelanggan kami.');
            }
        });
    });
}

// ========== INITIALIZE EVERYTHING ==========
document.addEventListener('DOMContentLoaded', function() {
    // Initialize common functionality
    initMobileMenu();
    handleHeaderScroll();
    initCTAButtons();
    
    // Initialize page-specific functionality
    initHomePageAnimations();
    initTestimoniPageAnimations();
    
    // Run header scroll on scroll
    window.addEventListener('scroll', handleHeaderScroll);
});