/**
 * Contact Form Handler
 * Manages contact form submission and email sending functionality
 */

class ContactForm {
    constructor() {
        this.form = null;
        this.submitButton = null;
        
        // Configuração do EmailJS
        this.emailjsConfig = {
            serviceId: 'service_j9jwfpv', // Service ID do EmailJS
            templateId: 'template_t7bpm5j', // Template ID do EmailJS
            publicKey: 'u_YRIloat8UH7C2jd' // Public Key do EmailJS
        };
        
        this.init();
    }

    init() {
        // Inicializar EmailJS
        this.initEmailJS();
        
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setupForm());
        } else {
            this.setupForm();
        }
    }

    initEmailJS() {
        // Inicializar EmailJS quando disponível
        if (typeof emailjs !== 'undefined') {
            emailjs.init(this.emailjsConfig.publicKey);
        } else {
            // Aguardar o EmailJS carregar
            setTimeout(() => this.initEmailJS(), 100);
        }
    }

    setupForm() {
        this.form = document.querySelector('#contato form');
        this.submitButton = this.form?.querySelector('button[type="submit"]');
        
        if (this.form) {
            this.bindEvents();
        }
    }

    bindEvents() {
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        
        // Add input validation
        const inputs = this.form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', () => this.validateField(input));
            input.addEventListener('input', () => this.clearFieldError(input));
        });
    }

    async handleSubmit(e) {
        e.preventDefault();
        
        if (!this.validateForm()) {
            return;
        }

        const formData = this.getFormData();
        
        try {
            this.setLoadingState(true);
            await this.sendEmail(formData);
            this.showSuccess();
            this.resetForm();
        } catch (error) {
            console.error('Erro ao enviar e-mail:', error);
            this.showError('Erro ao enviar mensagem. Tente novamente ou entre em contato diretamente.');
        } finally {
            this.setLoadingState(false);
        }
    }

    getFormData() {
        const formData = new FormData(this.form);
        return {
            name: formData.get('name'),
            email: formData.get('email'),
            institution: formData.get('institution') || 'Não informado',
            message: formData.get('message')
        };
    }

    async sendEmail(data) {
        try {
            // Verificar se o EmailJS está carregado
            if (typeof emailjs === 'undefined') {
                throw new Error('EmailJS não está carregado');
            }

            // Verificar configuração
            console.log('Configuração EmailJS:', {
                serviceId: this.emailjsConfig.serviceId,
                templateId: this.emailjsConfig.templateId,
                publicKey: this.emailjsConfig.publicKey ? 'Configurado' : 'Não configurado'
            });

            // Preparar os dados para o template do EmailJS
            const templateParams = {
                cliente_nome: data.name,
                cliente_email: data.email,
                cliente_instituicao: data.institution,
                mensagem: data.message
            };

            console.log('Enviando e-mail via EmailJS...', templateParams);

            // Enviar e-mail usando EmailJS
            const response = await emailjs.send(
                this.emailjsConfig.serviceId,
                this.emailjsConfig.templateId,
                templateParams
            );

            console.log('E-mail enviado com sucesso:', response);
            return response;

        } catch (error) {
            console.error('Erro detalhado ao enviar e-mail via EmailJS:', {
                error: error,
                message: error.message,
                status: error.status,
                text: error.text
            });
            
            // Verificar se é erro 405 e mostrar mensagem específica
            if (error.status === 405) {
                console.error('Erro 405: Verifique a configuração do serviço no EmailJS');
                console.error('PROBLEMA DETECTADO: O serviço está configurado incorretamente!');
                console.error('O EmailJS está tentando fazer POST para o site em vez da API de e-mail.');
                console.error('SOLUÇÃO: Reconfigure o serviço no EmailJS com um provedor de e-mail válido (Gmail, Outlook, etc.)');
                this.showError('Configuração incorreta do serviço de e-mail. Usando método alternativo...');
            }
            
            // Fallback: abrir cliente de e-mail do usuário
            console.log('Usando fallback: abrindo cliente de e-mail...');
            this.openEmailClient(data);
            
            // Re-throw o erro para que seja tratado no handleSubmit
            throw new Error('Falha no envio automático. Abrindo seu cliente de e-mail como alternativa.');
        }
    }

    createEmailBody(data) {
        return `
            <h2>Nova mensagem do site - Laboratório de IA UFFS</h2>
            <p><strong>Nome:</strong> ${data.name}</p>
            <p><strong>E-mail:</strong> ${data.email}</p>
            <p><strong>Instituição:</strong> ${data.institution}</p>
            <p><strong>Mensagem:</strong></p>
            <div style="background-color: #f5f5f5; padding: 15px; border-left: 4px solid #007bff; margin: 10px 0;">
                ${data.message.replace(/\n/g, '<br>')}
            </div>
            <hr>
            <p style="color: #666; font-size: 12px;">
                Esta mensagem foi enviada através do formulário de contato do site do Laboratório de IA da UFFS.
            </p>
        `;
    }

    openEmailClient(data) {
        const subject = encodeURIComponent(`Contato do site - ${data.name}`);
        const body = encodeURIComponent(`
Nome: ${data.name}
E-mail: ${data.email}
Instituição: ${data.institution}

Mensagem:
${data.message}

---
Esta mensagem foi enviada através do formulário de contato do site do Laboratório de IA da UFFS.
        `);
        
        const mailtoLink = `mailto:seti.depro@uffs.edu.br?subject=${subject}&body=${body}`;
        window.open(mailtoLink);
    }

    validateForm() {
        const inputs = this.form.querySelectorAll('input[required], textarea[required]');
        let isValid = true;

        inputs.forEach(input => {
            if (!this.validateField(input)) {
                isValid = false;
            }
        });

        return isValid;
    }

    validateField(field) {
        const value = field.value.trim();
        let isValid = true;
        let errorMessage = '';

        // Remove previous error
        this.clearFieldError(field);

        if (field.hasAttribute('required') && !value) {
            errorMessage = 'Este campo é obrigatório';
            isValid = false;
        } else if (field.type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                errorMessage = 'Por favor, insira um e-mail válido';
                isValid = false;
            }
        }

        if (!isValid) {
            this.showFieldError(field, errorMessage);
        }

        return isValid;
    }

    showFieldError(field, message) {
        field.classList.add('error');
        
        const errorElement = document.createElement('span');
        errorElement.className = 'field-error';
        errorElement.textContent = message;
        
        field.parentNode.appendChild(errorElement);
    }

    clearFieldError(field) {
        field.classList.remove('error');
        const errorElement = field.parentNode.querySelector('.field-error');
        if (errorElement) {
            errorElement.remove();
        }
    }

    setLoadingState(loading) {
        if (this.submitButton) {
            this.submitButton.disabled = loading;
            this.submitButton.textContent = loading ? 'Enviando...' : 'Enviar Mensagem';
        }
        
        const inputs = this.form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.disabled = loading;
        });
    }

    showSuccess() {
        this.showMessage('Mensagem enviada com sucesso! Entraremos em contato em breve.', 'success');
    }

    showError(message) {
        this.showMessage(message, 'error');
    }

    showMessage(message, type) {
        // Remove previous messages
        const existingMessage = this.form.querySelector('.form-message');
        if (existingMessage) {
            existingMessage.remove();
        }

        const messageElement = document.createElement('div');
        messageElement.className = `form-message ${type}`;
        messageElement.textContent = message;
        
        this.form.insertBefore(messageElement, this.form.firstChild);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            if (messageElement.parentNode) {
                messageElement.remove();
            }
        }, 5000);
    }

    resetForm() {
        this.form.reset();
        
        // Clear any remaining errors
        const errorElements = this.form.querySelectorAll('.field-error');
        errorElements.forEach(error => error.remove());
        
        const errorFields = this.form.querySelectorAll('.error');
        errorFields.forEach(field => field.classList.remove('error'));
    }
}

// Initialize contact form when DOM is ready
new ContactForm();