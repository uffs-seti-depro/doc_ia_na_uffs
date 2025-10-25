/**
 * Modal Management System
 * Handles opening, closing and interaction with project modals
 */

class ModalManager {
    constructor() {
        this.activeModal = null;
        this.init();
    }

    init() {
        this.bindEvents();
    }

    bindEvents() {
        // Modal triggers
        document.addEventListener('click', (e) => {
            if (e.target.matches('[data-modal]')) {
                e.preventDefault();
                const modalId = e.target.getAttribute('data-modal');
                this.openModal(modalId);
            }
        });

        // Close buttons
        document.addEventListener('click', (e) => {
            if (e.target.matches('.modal-close')) {
                this.closeModal();
            }
        });

        // Overlay clicks
        document.addEventListener('click', (e) => {
            if (e.target.matches('.modal-overlay')) {
                this.closeModal();
            }
        });

        // ESC key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.activeModal) {
                this.closeModal();
            }
        });
    }

    openModal(modalId) {
        const modal = document.getElementById(modalId);
        if (!modal) {
            console.error(`Modal with ID "${modalId}" not found`);
            return;
        }

        // Close any existing modal
        if (this.activeModal) {
            this.closeModal();
        }

        // Open new modal
        modal.classList.add('active');
        this.activeModal = modal;
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    closeModal() {
        if (this.activeModal) {
            this.activeModal.classList.remove('active');
            this.activeModal = null;
            document.body.style.overflow = ''; // Restore scrolling
        }
    }

    // Public method to close modal programmatically
    close() {
        this.closeModal();
    }

    // Public method to open modal programmatically
    open(modalId) {
        this.openModal(modalId);
    }
}

// Initialize modal manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.modalManager = new ModalManager();
});

// Export for module usage if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ModalManager;
}