/**
 * Navigation and Header Management
 * Handles header scroll effects, navigation menu, and smooth scrolling
 */

class NavigationManager {
    constructor() {
        this.header = null;
        this.hamburger = null;
        this.navMenu = null;
        this.sections = [];
        this.navLinks = [];
        this.observer = null;
        this.init();
    }

    init() {
        this.cacheElements();
        this.bindEvents();
        this.setupIntersectionObserver();
    }

    cacheElements() {
        this.header = document.querySelector('.header');
        this.hamburger = document.querySelector('.hamburger');
        this.navMenu = document.querySelector('.nav-menu');
        this.sections = document.querySelectorAll('section');
        this.navLinks = document.querySelectorAll('.nav-menu a');
    }

    bindEvents() {
        // Header scroll effect
        window.addEventListener('scroll', () => {
            this.handleHeaderScroll();
        });

        // Smooth scroll for navigation links
        this.navLinks.forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                this.handleNavClick(e, anchor);
            });
        });

        // Hamburger menu toggle
        if (this.hamburger) {
            this.hamburger.addEventListener('click', () => {
                this.toggleMobileMenu();
            });
        }

        // Close mobile menu on window resize
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768 && this.navMenu.classList.contains('active')) {
                this.navMenu.classList.remove('active');
            }
        });
    }

    handleHeaderScroll() {
        if (!this.header) return;

        if (window.scrollY > 50) {
            this.header.classList.add('scrolled');
        } else {
            this.header.classList.remove('scrolled');
        }
    }

    handleNavClick(e, anchor) {
        e.preventDefault();

        const targetId = anchor.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (!targetElement) return;

        const headerOffset = this.header ? this.header.offsetHeight : 0;
        const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - headerOffset - 20;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });

        // Close mobile menu if open
        if (this.navMenu && this.navMenu.classList.contains('active')) {
            this.navMenu.classList.remove('active');
        }
    }

    toggleMobileMenu() {
        if (this.navMenu) {
            this.navMenu.classList.toggle('active');
        }
    }

    setupIntersectionObserver() {
        if (!this.header || this.sections.length === 0) return;

        const options = {
            root: null,
            rootMargin: `-${this.header.offsetHeight}px 0px -50% 0px`,
            threshold: 0
        };

        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.updateActiveNavLink(entry.target.id);
                }
            });
        }, options);

        this.sections.forEach(section => {
            this.observer.observe(section);
        });
    }

    updateActiveNavLink(sectionId) {
        this.navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === sectionId) {
                link.classList.add('active');
            }
        });
    }

    // Public methods
    scrollToSection(sectionId) {
        const targetElement = document.querySelector(`#${sectionId}`);
        if (targetElement) {
            const headerOffset = this.header ? this.header.offsetHeight : 0;
            const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - headerOffset - 20;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    }

    closeMobileMenu() {
        if (this.navMenu && this.navMenu.classList.contains('active')) {
            this.navMenu.classList.remove('active');
        }
    }

    destroy() {
        if (this.observer) {
            this.observer.disconnect();
        }
    }
}

// Initialize navigation manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.navigationManager = new NavigationManager();
});

// Export for module usage if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = NavigationManager;
}