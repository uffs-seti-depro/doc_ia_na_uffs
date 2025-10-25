/**
 * Main Application Entry Point
 * Initializes all components and handles global functionality
 */

class App {
    constructor() {
        this.init();
    }

    init() {
        this.bindGlobalEvents();
        this.initializeComponents();
        this.setupSmoothScrolling();
    }

    bindGlobalEvents() {
        // Handle page load
        window.addEventListener('load', () => {
            this.onPageLoad();
        });

        // Handle resize
        window.addEventListener('resize', () => {
            this.onResize();
        });

        // Handle scroll for animations
        window.addEventListener('scroll', () => {
            this.onScroll();
        });
    }

    initializeComponents() {
        // Components are initialized by their respective modules
        console.log('App initialized successfully');
    }

    setupSmoothScrolling() {
        // Add smooth scrolling to anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    onPageLoad() {
        // Add fade-in animation to main content
        document.body.classList.add('loaded');
        
        // Initialize any animations or effects
        this.initializeAnimations();
    }

    onResize() {
        // Handle responsive adjustments if needed
        this.handleResponsiveAdjustments();
    }

    onScroll() {
        // Handle scroll-based animations or effects
        this.handleScrollAnimations();
    }

    initializeAnimations() {
        // Add entrance animations to cards
        const cards = document.querySelectorAll('.project-card');
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }

    handleResponsiveAdjustments() {
        // Add any responsive logic here
    }

    handleScrollAnimations() {
        // Add scroll-based animations here
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('.hero');
        
        if (parallax) {
            const speed = scrolled * 0.5;
            parallax.style.transform = `translateY(${speed}px)`;
        }
    }

    // Utility methods
    static debounce(func, wait, immediate) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                timeout = null;
                if (!immediate) func(...args);
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func(...args);
        };
    }

    static throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
}

// Cluster Navigation Functionality
class ClusterNavigation {
    constructor() {
        this.init();
    }

    init() {
        this.setupClusterNavigation();
    }

    setupClusterNavigation() {
        // Wait for DOM to be ready and projects to be loaded
        document.addEventListener('DOMContentLoaded', () => {
            // Add a small delay to ensure projects are rendered
            setTimeout(() => {
                this.bindClusterCards();
            }, 500);
        });
    }

    bindClusterCards() {
        const clusterCards = document.querySelectorAll('.cluster-card');
        
        clusterCards.forEach((card, index) => {
            card.style.cursor = 'pointer';
            card.addEventListener('click', () => {
                this.navigateToCluster(index + 1);
            });
            
            // Add hover effect
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-5px)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0)';
            });
        });
    }

    navigateToCluster(clusterNumber) {
        const targetId = `cluster-${clusterNumber}`;
        
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Add highlight effect
            this.highlightCluster(targetElement);
        } else {
            console.log(`Element with ID ${targetId} not found`);
        }
    }

    highlightCluster(element) {
        // Add temporary highlight effect
        element.style.transition = 'all 0.3s ease';
        element.style.backgroundColor = 'rgba(30, 58, 138, 0.1)';
        element.style.borderRadius = '8px';
        element.style.padding = '1rem';
        element.style.marginLeft = '-1rem';
        element.style.marginRight = '-1rem';
        
        setTimeout(() => {
            element.style.backgroundColor = '';
            element.style.borderRadius = '';
            element.style.padding = '';
            element.style.marginLeft = '';
            element.style.marginRight = '';
        }, 2000);
    }
}

// Initialize cluster navigation
new ClusterNavigation();

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.app = new App();
});

// Add initial styles for animations
const style = document.createElement('style');
style.textContent = `
    body {
        opacity: 0;
        transition: opacity 0.3s ease;
    }
    
    body.loaded {
        opacity: 1;
    }
    
    .project-card {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
`;
document.head.appendChild(style);

// Export for module usage if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = App;
}