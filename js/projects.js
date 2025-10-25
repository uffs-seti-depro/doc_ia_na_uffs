/**
 * Project Data Management
 * Handles project data loading, rendering and management
 */

class ProjectManager {
    constructor() {
        this.projects = [];
    }

    async init() {
        try {
            await this.loadProjects();
            this.renderProjects();
        } catch (error) {
            console.error('Error initializing projects:', error);
        }
    }

    async loadProjects() {
        try {
            // Use dados do projectsData.js
            if (typeof projectsData !== 'undefined' && projectsData.projects) {
                this.projects = projectsData.projects;
                console.log('Projects loaded from projectsData.js:', this.projects.length, 'projects');
                return;
            }
            
            // Se projectsData não estiver disponível, use dados de fallback
            console.warn('projectsData.js not available, using fallback data');
            this.projects = this.getFallbackProjects();
        } catch (error) {
            console.error('Error loading projects:', error.message);
            this.projects = this.getFallbackProjects();
        }
    }

    getFallbackProjects() {
        return [
            {
                id: 'p1',
                title: 'P1 - Fundamentação e Planejamento',
                description: 'Estabelecimento das bases teóricas e metodológicas para implementação de IA na UFFS.',
                status: 'active',
                priority: 'high',
                icon: 'P1'
            }
            // Add more projects as needed
        ];
    }

    renderProjects() {
        const container = document.querySelector('.projects-grid');
        if (!container) {
            console.error('Projects container not found');
            return;
        }

        container.innerHTML = '';

        // Add cluster information to projects
        const projectsWithClusters = this.addClusterInfo(this.projects);
        
        // Group projects by cluster
        const projectsByCluster = this.groupProjectsByCluster(projectsWithClusters);
        
        // Render each cluster
        Object.keys(projectsByCluster).sort().forEach(clusterName => {
            // Create cluster header
            const clusterHeader = this.createClusterHeader(clusterName);
            container.appendChild(clusterHeader);
            
            // Create cluster container
            const clusterContainer = document.createElement('div');
            clusterContainer.className = 'cluster-projects';
            
            // Add projects to cluster
            projectsByCluster[clusterName].forEach(project => {
                const projectCard = this.createProjectCard(project);
                clusterContainer.appendChild(projectCard);
                
                // Create modal for this project
                this.createProjectModal(project);
            });
            
            container.appendChild(clusterContainer);
        });
    }

    addClusterInfo(projects) {
        return projects.map(project => {
            // Use the cluster field from project data if available, otherwise use default
            const cluster = project.cluster || 'Cluster 1 - Institucionalização';
            
            return { ...project, cluster };
        });
    }

    groupProjectsByCluster(projects) {
        return projects.reduce((groups, project) => {
            const cluster = project.cluster;
            if (!groups[cluster]) {
                groups[cluster] = [];
            }
            groups[cluster].push(project);
            return groups;
        }, {});
    }

    createClusterHeader(clusterName) {
        const header = document.createElement('div');
        header.className = 'cluster-header';
        
        // Create simple ID for navigation
        let clusterId;
        if (clusterName.includes('Cluster 1')) {
            clusterId = 'cluster-1';
        } else if (clusterName.includes('Cluster 2')) {
            clusterId = 'cluster-2';
        } else if (clusterName.includes('Cluster 3')) {
            clusterId = 'cluster-3';
        }
        
        header.id = clusterId;
        header.innerHTML = `<h3>${clusterName}</h3>`;
        return header;
    }

    createProjectCard(project) {
        const card = document.createElement('div');
        card.className = 'project-card';
        
        const managerInfo = project.projectManager && project.projectManager !== 'A definir' 
            ? `<span class="project-manager">Gerente: ${project.projectManager}</span>` 
            : '';
            
        const phaseInfo = project.currentPhase 
            ? `<span class="project-phase">Fase: ${project.currentPhase}</span>` 
            : '';
            
        const dependenciesInfo = project.dependencies && project.dependencies.length > 0 
            ? `<span class="project-dependencies">Dependências: ${project.dependencies.join(', ')}</span>` 
            : '';
        
        card.innerHTML = `
            <div class="project-status-row">
                <div class="project-status-indicator status-${project.status}">
                    <span class="status-dot"></span>
                    <span class="status-text">${this.getStatusText(project.status)}</span>
                </div>
                <button class="project-modal-trigger-small" data-modal="${project.id}-modal">
                    ℹ️
                </button>
            </div>
            <div class="project-header">
                <div class="project-icon">${project.id}</div>
                <h3 class="project-title">${project.title}</h3>
            </div>
            <p class="project-description">${project.description}</p>
            <div class="project-meta">
                <span class="project-priority priority-${project.priority}">
                    ${this.getPriorityText(project.priority)}
                </span>
                ${managerInfo}
                ${phaseInfo}
                ${dependenciesInfo}
            </div>
        `;

        return card;
    }

    createProjectModal(project) {
        // Check if modal already exists
        const existingModal = document.getElementById(`${project.id}-modal`);
        if (existingModal) {
            existingModal.remove();
        }

        const modal = document.createElement('div');
        modal.id = `${project.id}-modal`;
        modal.className = 'modal-overlay';
        
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h3>${project.title}</h3>
                    <button class="modal-close">&times;</button>
                </div>
                <div class="modal-body">
                    <div class="modal-section">
                        <h4>📋 Descrição</h4>
                        <p>${project.description}</p>
                    </div>
                    
                    <div class="modal-section">
                        <h4>🎯 Objetivo</h4>
                        <p>${project.details?.objective || 'Objetivo a ser definido'}</p>
                    </div>
                    
                    ${project.details?.specificObjectives ? `
                    <div class="modal-section">
                        <h4>🎯 Objetivos Específicos</h4>
                        <ul>
                            ${project.details.specificObjectives.map(obj => `<li>${obj}</li>`).join('')}
                        </ul>
                    </div>
                    ` : ''}
                    
                    <div class="modal-section">
                        <h4>👥 Perfil da Equipe</h4>
                        <p>${project.details?.teamProfile || 'Perfil da equipe a ser definido'}</p>
                    </div>
                    
                    <div class="modal-section">
                        <h4>🧑‍💼 Membros da Equipe</h4>
                        <ul>
                            ${project.details?.projectTeam ? project.details.projectTeam.map(member => `<li>${member}</li>`).join('') : '<li>Membros da equipe a serem definidos</li>'}
                        </ul>
                    </div>
                    
                    ${project.teamSize ? `
                    <div class="modal-section">
                        <h4>👥 Tamanho da Equipe</h4>
                        <p>${project.teamSize} pessoas</p>
                    </div>
                    ` : ''}
                    
                    ${project.duration ? `
                    <div class="modal-section">
                        <h4>⏱️ Duração</h4>
                        <p>${project.duration}</p>
                    </div>
                    ` : ''}
                    
                    ${project.budget ? `
                    <div class="modal-section">
                        <h4>💰 Orçamento</h4>
                        <p>${project.budget}</p>
                    </div>
                    ` : ''}
                    
                    ${project.captationGoal ? `
                    <div class="modal-section">
                        <h4>🎯 Meta de Captação</h4>
                        <p>${project.captationGoal}</p>
                    </div>
                    ` : ''}
                    
                    <div class="modal-section">
                        <h4>📦 Pacotes de Trabalho</h4>
                        <ul>
                            ${project.details?.workPackages ? project.details.workPackages.map(wp => `<li>${wp}</li>`).join('') : '<li>Pacotes de trabalho a serem definidos</li>'}
                        </ul>
                    </div>
                    
                    <div class="modal-section">
                        <h4>🏃‍♂️ Sprints Ágeis</h4>
                        <div class="sprints-list">
                            ${project.details?.sprints ? project.details.sprints.map(sprint => {
                                if (typeof sprint === 'string') {
                                    return `<div class="sprint-item"><h5>${sprint}</h5></div>`;
                                } else {
                                    return `
                                        <div class="sprint-item">
                                            <h5>${sprint.name}</h5>
                                            ${sprint.description ? `<p>${sprint.description}</p>` : ''}
                                            ${sprint.duration ? `<p><strong>Duração:</strong> ${sprint.duration}</p>` : ''}
                                            ${sprint.workPackage ? `<p><strong>Pacote:</strong> ${sprint.workPackage}</p>` : ''}
                                        </div>
                                    `;
                                }
                            }).join('') : '<div class="sprint-item">Sprints a serem definidos</div>'}
                        </div>
                    </div>
                    
                    <div class="modal-section">
                        <h4>🎯 Indicadores de Sucesso</h4>
                        <ul>
                            ${project.details?.successIndicators ? project.details.successIndicators.map(indicator => `<li>${indicator}</li>`).join('') : '<li>Indicadores de sucesso a serem definidos</li>'}
                        </ul>
                    </div>
                    
                    ${project.details?.specificObjectives ? `
                    <div class="modal-section">
                        <h4>🎯 Objetivos Específicos</h4>
                        <ul>
                            ${project.details.specificObjectives.map(obj => `<li>${obj}</li>`).join('')}
                        </ul>
                    </div>
                    ` : ''}
                    
                    ${project.details?.performanceIndicators ? `
                    <div class="modal-section">
                        <h4>📊 Indicadores de Desempenho</h4>
                        <div class="performance-indicators">
                            ${project.details.performanceIndicators.map(indicator => `
                                <div class="indicator-item">
                                    <h5>${indicator.name}</h5>
                                    <p><strong>Métrica:</strong> ${indicator.metric}</p>
                                    <p><strong>Meta:</strong> ${indicator.goal}</p>
                                    ${indicator.type ? `<p><strong>Tipo:</strong> ${indicator.type}</p>` : ''}
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    ` : ''}
                    
                    <div class="modal-section">
                        <h4>🔗 Dependências</h4>
                        ${this.renderDependencies(project)}
                    </div>
                    
                    <div class="modal-section">
                        <h4>📊 Status</h4>
                        <p><strong>Status:</strong> ${this.getStatusText(project.status)}</p>
                        <p><strong>Prioridade:</strong> ${this.getPriorityText(project.priority)}</p>
                        ${project.currentPhase ? `<p><strong>Fase Atual:</strong> ${project.currentPhase}</p>` : ''}
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(modal);
    }

    getStatusText(status) {
        const statusMap = {
            'active': 'Ativo',
            'planning': 'Planejamento',
            'in_progress': 'Em Andamento',
            'completed': 'Encerrado',
            'paused': 'Pausado',
            'inactive': 'Inativo'
        };
        return statusMap[status] || status;
    }

    getPriorityText(priority) {
        const priorityMap = {
            'high': 'Alta Prioridade',
            'medium': 'Média Prioridade',
            'low': 'Baixa Prioridade'
        };
        return priorityMap[priority] || priority;
    }

    // Method to add new project
    addProject(project) {
        this.projects.push(project);
        this.renderProjects();
    }

    // Method to update project
    updateProject(id, updates) {
        const projectIndex = this.projects.findIndex(p => p.id === id);
        if (projectIndex !== -1) {
            this.projects[projectIndex] = { ...this.projects[projectIndex], ...updates };
            this.renderProjects();
        }
    }

    // Method to get project by ID
    getProject(id) {
        return this.projects.find(p => p.id === id);
    }

    // Function to get project names from IDs
    getProjectNames(projectIds) {
        if (!projectIds || !Array.isArray(projectIds)) {
            return [];
        }
        
        return projectIds.map(id => {
            const project = this.projects.find(p => p.id === id);
            return project ? { id: id, title: project.title } : { id: id, title: `Projeto ${id}` };
        });
    }

    // Function to find projects that depend on a given project
    getProjectsDependingOn(projectId) {
        return this.projects.filter(project => 
            project.dependencies && project.dependencies.includes(projectId)
        ).map(project => ({ id: project.id, title: project.title }));
    }

    // Function to render dependencies section
    renderDependencies(project) {
        const dependencies = this.getProjectNames(project.dependencies || []);
        const dependentProjects = this.getProjectNames(project.dependentProjects || []);
        
        let html = '';
        
        // Dependencies (projects this project depends on)
        if (dependencies.length > 0) {
            html += `
                <div class="dependency-subsection">
                    <h5>📥 Este projeto depende de:</h5>
                    <ul class="dependency-list">
                        ${dependencies.map(dep => `
                            <li class="dependency-item">
                                <span class="dependency-id">${dep.id}</span>
                                <span class="dependency-title">${dep.title}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            `;
        } else {
            html += `
                <div class="dependency-subsection">
                    <h5>📥 Este projeto depende de:</h5>
                    <p class="no-dependencies">Nenhuma dependência identificada</p>
                </div>
            `;
        }
        
        // Dependent projects (projects that depend on this project)
        if (dependentProjects.length > 0) {
            html += `
                <div class="dependency-subsection">
                    <h5>📤 Projetos que dependem deste:</h5>
                    <ul class="dependency-list">
                        ${dependentProjects.map(dep => `
                            <li class="dependency-item">
                                <span class="dependency-id">${dep.id}</span>
                                <span class="dependency-title">${dep.title}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            `;
        } else {
            html += `
                <div class="dependency-subsection">
                    <h5>📤 Projetos que dependem deste:</h5>
                    <p class="no-dependencies">Nenhum projeto dependente identificado</p>
                </div>
            `;
        }
        
        return html;
    }
}

// Initialize project manager when page is fully loaded
window.addEventListener('load', async () => {
    window.projectManager = new ProjectManager();
    // Aguardar a inicialização completa
    await window.projectManager.init();
});

// Export for module usage if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ProjectManager;
}