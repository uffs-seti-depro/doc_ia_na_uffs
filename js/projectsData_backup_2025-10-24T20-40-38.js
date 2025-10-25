// Dados dos projetos - incorporados diretamente para evitar problemas de CORS
const projectsData = {
  "projects": [
    {
      "id": "p1",
      "title": "P1 - Regulamentação e diretrizes para uso de IA e RPA nas IFES",
      "description": "Elaboração de normas e boas práticas para a implementação segura e ética de IA e RPA.",
      "isActive": true,
      "currentPhase": "Fase 2 - Elaboração das diretrizes",
      "dependencies": [],
      "dependentProjects": ["P2", "P3", "P5", "P8"],
      "status": "planning",
      "projectManager": "Silvia",
      "teamProfile": "Equipe multidisciplinar com competências em: análise jurídica e regulatória para diagnóstico da situação na UFFS e estudo dos marcos legais; especialistas em tecnologia e IA para levantamento de requisitos técnicos; redatores técnicos para elaboração de diretrizes; especialistas em consulta pública e comunicação institucional; gestores de projeto para coordenação das fases.",
      "projectTeam": [
        "Analista Jurídico/Regulatório",
        "Especialista em IA e Tecnologia", 
        "Redator Técnico",
        "Especialista em Comunicação Institucional",
        "Gestor de Projeto"
      ],
      "priority": "high",
      "icon": "P1",
      "details": {
        "objective": "Elaborar normas e boas práticas para a implementação segura e ética de IA e RPA nas Instituições Federais de Ensino Superior.",
        "workPackages": [
          "Levantamento de requisitos legais e institucionais",
          "Elaboração das diretrizes e normas",
          "Consulta pública e revisões",
          "Aprovação e publicação oficial"
        ],
        "sprints": [
          {
            "name": "Fase 1 - Levantamento",
            "description": "Levantamento de requisitos legais e institucionais"
          },
          {
            "name": "Fase 2 - Elaboração",
            "description": "Elaboração das diretrizes e normas"
          },
          {
            "name": "Fase 3 - Consulta",
            "description": "Consulta pública e revisões"
          },
          {
            "name": "Fase 4 - Aprovação",
            "description": "Aprovação e publicação oficial"
          }
        ]
      }
    },
    {
      "id": "p2",
      "title": "P2 - Definição de Eixos Estratégicos e Áreas Prioritárias para Implementação de IA na UFFS",
      "description": "Definir os eixos estratégicos e as áreas prioritárias de aplicação da Inteligência Artificial (IA) na UFFS, visando otimização de processos, melhoria de serviços e promoção da inovação.",
      "isActive": true,
      "currentPhase": "Fase 1 - Mapeamento de processos",
      "dependencies": ["P1"],
      "dependentProjects": ["P8", "P9"],
      "status": "active",
      "projectManager": "Ocimar",
      "teamProfile": "Comitê Multidisciplinar com representantes da TI, acadêmicos e administrativos, incluindo competências em: análise de processos e mapeamento organizacional; especialistas em IA e RPA para avaliação técnica; analistas de negócio para análise de impacto; coordenação estratégica e roadmap de implementação.",
      "projectTeam": [
        "Silvia",
        "Giovani", 
        "Jasiel",
        "Edivandro",
        "Representantes do Gabinete do Reitor",
        "Representantes das Áreas Finalísticas"
      ],
      "priority": "high",
      "icon": "P2",
      "code": "IAUffs-EST-002",
      "duration": "4 meses",
      "details": {
        "objective": "Definir os eixos estratégicos e as áreas prioritárias de aplicação da Inteligência Artificial (IA) na Universidade Federal da Fronteira Sul (UFFS), visando otimização de processos, melhoria de serviços e promoção da inovação em toda a comunidade acadêmica.",
        "strategicAxes": [
          {
            "name": "Eixo 1: Automação de Processos Críticos (RPA)",
            "description": "Foco na automação de tarefas repetitivas e baseadas em regras, liberando recursos humanos para atividades de maior valor agregado.",
            "processes": {
              "academic": "Automatização de rotinas de protocolo, registro acadêmico e assentamento funcional. Otimização de rotinas nos sistemas de informação e gestão (SIGs acadêmicos).",
              "administrative": "Automação em compras, contratos, gestão financeira e orçamentária."
            },
            "expectedBenefit": "Redução significativa de retrabalho, aumento da eficiência operacional, diminuição de erros humanos e agilidade na execução de tarefas administrativas e acadêmicas."
          },
          {
            "name": "Eixo 2: Inteligência Artificial Generativa",
            "description": "Exploração de modelos de linguagem avançados para a criação de conteúdo, assistência e suporte.",
            "applications": {
              "institutional": "Implementação de chatbots e assistentes para responder a dúvidas frequentes da comunidade (base de conhecimento pública).",
              "transactional": "Desenvolvimento de assistentes capazes de interagir com dados institucionais para fornecer informações personalizadas e suporte a processos específicos (ex: status de documentos, informações sobre matrículas).",
              "documentation": "Utilização de IA para auxiliar na redação, revisão e padronização de documentos institucionais."
            },
            "expectedBenefit": "Redução de dúvidas recorrentes, diminuição de filas de atendimento, melhoria na comunicação interna e externa, e agilidade na produção de conteúdo."
          },
          {
            "name": "Eixo 3: Integração de Dados e APIs",
            "description": "Criação de uma arquitetura robusta para garantir a interoperabilidade e a consistência dos dados institucionais.",
            "components": {
              "integration": "Desenvolvimento de uma plataforma que permita a comunicação segura entre diferentes sistemas.",
              "catalog": "Criação de um repositório centralizado e documentado de dados, facilitando a descoberta e o uso.",
              "standards": "Definição e adoção de padrões para a troca de informações entre sistemas.",
              "systems": "Garantir a conexão e sincronização com sistemas como SIAFI, SIGs (SIGAA, SIPAC, SIGRH), Plataforma Nilo Peçanha (Censo da Educação Superior) e Plataforma Sucupira."
            },
            "expectedBenefit": "Dados consistentes e confiáveis, independência controlada das unidades na gestão de suas informações, e potencial para análises mais aprofundadas."
          },
          {
            "name": "Eixo 4: Business Analytics e Autosserviço",
            "description": "Capacitação da comunidade para a análise de dados e a geração de insights sem dependência exclusiva da equipe de TI.",
            "tools": {
              "bi": "Disponibilização de ferramentas de BI amigáveis para usuários não técnicos.",
              "dashboards": "Desenvolvimento de painéis de controle e relatórios dinâmicos que ofereçam visibilidade sobre os indicadores-chave de desempenho.",
              "empowerment": "Capacitar servidores e professores a gerar suas próprias análises e relatórios."
            },
            "expectedBenefit": "Tomada de decisão baseada em dados, análises em tempo hábil, maior autonomia das unidades e otimização dos processos de gestão."
          },
          {
            "name": "Eixo 5: Governança, Conformidade e Segurança",
            "description": "Estabelecimento de um arcabouço normativo e técnico para garantir o uso ético, seguro e em conformidade com a legislação da IA.",
            "guidelines": {
              "policies": "Elaboração de políticas internas para o desenvolvimento e uso responsável da IA.",
              "lgpd": "Garantia da conformidade com a Lei Geral de Proteção de Dados e implementação de medidas robustas de segurança.",
              "archival": "Assegurar que o tratamento de documentos gerados ou manipulados por IA esteja em conformidade com as normas arquivísticas (CONARQ).",
              "access": "Definição de regras claras para o acesso e a autorização de uso de sistemas e dados baseados em IA."
            },
            "expectedBenefit": "Rastreabilidade dos processos, transparência nas operações, conformidade legal e regulatória, e mitigação de riscos."
          }
        ],
        "priorityAreas": [
          {
            "name": "Protocolo e Documentação",
            "description": "Gestão de fluxo de documentos, classificação automática, extração de informações."
          },
          {
            "name": "Compras, Contratos e Financeiro", 
            "description": "Automação de processos de aquisição, acompanhamento de contratos, análise de despesas."
          },
          {
            "name": "Assentamento Funcional e Gestão de Pessoas",
            "description": "Gerenciamento de informações de servidores, automação de rotinas de RH."
          },
          {
            "name": "Suporte ao Aluno e Comunidade Acadêmica",
            "description": "Atendimento a dúvidas, direcionamento de solicitações, informações sobre cursos e serviços."
          },
          {
            "name": "Gestão Acadêmica (SIGAA, SIPAC, SIGRH)",
            "description": "Otimização de processos dentro dos sistemas integrados de gestão acadêmica e administrativa."
          },
          {
            "name": "Análise de Dados Institucionais",
            "description": "Geração de insights a partir de grandes volumes de dados para apoiar a gestão e o planejamento estratégico."
          }
        ],
        "workPackages": [
          {
            "id": "P2.1",
            "name": "Diagnóstico Institucional",
            "description": "Levantamento de processos atuais, mapeamento de dados e sistemas, identificação de necessidades e desafios."
          },
          {
            "id": "P2.2", 
            "name": "Definição de Eixos Estratégicos",
            "description": "Consolidação dos cinco eixos estratégicos, detalhamento de objetivos e escopo para cada um."
          },
          {
            "id": "P2.3",
            "name": "Priorização de Áreas de Aplicação", 
            "description": "Avaliação e seleção das áreas mais promissoras para projetos-piloto de IA."
          },
          {
            "id": "P2.4",
            "name": "Roadmap de Implementação",
            "description": "Elaboração de um plano de ação detalhado, com fases, marcos e recursos necessários para os próximos 12-24 meses."
          },
          {
            "id": "P2.5",
            "name": "Plano de Governança de IA",
            "description": "Desenvolvimento de diretrizes, políticas e estruturas para o uso ético, seguro e eficaz da IA na UFFS."
          }
        ],
        "sprints": [
          {
            "name": "Sprint 1: Diagnóstico e Análise (1 mês)",
            "description": "Reuniões com áreas-chave para levantamento de processos. Mapeamento de sistemas legados e bases de dados. Análise de oportunidades e gargalos.",
            "activities": [
              "Reuniões com áreas-chave para levantamento de processos",
              "Mapeamento de sistemas legados e bases de dados", 
              "Análise de oportunidades e gargalos"
            ]
          },
          {
            "name": "Sprint 2: Definição de Estratégia (1 mês)",
            "description": "Sessões de brainstorming e workshop com o Comitê Multidisciplinar. Elaboração e validação dos cinco eixos estratégicos. Definição de visão de longo prazo para a IA na UFFS.",
            "activities": [
              "Sessões de brainstorming e workshop com o Comitê Multidisciplinar",
              "Elaboração e validação dos cinco eixos estratégicos",
              "Definição de visão de longo prazo para a IA na UFFS"
            ]
          },
          {
            "name": "Sprint 3: Priorização e Roadmap (1 mês)",
            "description": "Critérios de priorização de áreas de aplicação. Seleção das áreas prioritárias para os primeiros pilotos. Criação do roadmap de implementação inicial (primeiros 12 meses).",
            "activities": [
              "Critérios de priorização de áreas de aplicação",
              "Seleção das áreas prioritárias para os primeiros pilotos",
              "Criação do roadmap de implementação inicial (primeiros 12 meses)"
            ]
          },
          {
            "name": "Sprint 4: Governança e Formalização (1 mês)",
            "description": "Desenvolvimento de rascunhos das políticas de IA e LGPD. Proposta da estrutura de Comitê de Ética em IA. Formalização dos documentos estratégicos para aprovação institucional.",
            "activities": [
              "Desenvolvimento de rascunhos das políticas de IA e LGPD",
              "Proposta da estrutura de Comitê de Ética em IA",
              "Formalização dos documentos estratégicos para aprovação institucional"
            ]
           }
         ],
         "expectedBenefits": [
           {
             "name": "Eficiência Operacional",
             "description": "Automação de tarefas e processos, liberando tempo e recursos."
           },
           {
             "name": "Qualidade da Informação", 
             "description": "Dados mais consistentes, integrados e acessíveis, resultando em decisões mais informadas."
           },
           {
             "name": "Modernização dos Serviços",
             "description": "Oferecimento de serviços mais ágeis, precisos e adaptados às necessidades da comunidade."
           },
           {
             "name": "Bem-estar dos Servidores",
             "description": "Redução da carga de trabalho repetitiva e monótona, permitindo foco em atividades mais desafiadoras."
           },
           {
             "name": "Sustentabilidade Financeira",
             "description": "Otimização de recursos e potencial para geração de novas fontes de receita ou economia."
           },
           {
             "name": "Inovação e Pesquisa",
             "description": "Fomento a novos projetos de pesquisa e desenvolvimento em IA."
           }
         ],
         "successIndicators": [
           {
             "name": "Processos Mapeados e Priorizados",
             "description": "Número de processos identificados e categorizados por potencial de automação ou otimização."
           },
           {
             "name": "Eixos Estratégicos Definidos",
             "description": "Documento formal dos cinco eixos estratégicos aprovado pela alta gestão."
           },
           {
             "name": "Roadmap Aprovado",
             "description": "Plano de implementação detalhado com prazos e responsabilidades definido e endossado."
           },
           {
             "name": "Estrutura de Governança Estabelecida",
             "description": "Proposta de Comitê de Ética e uso de IA, políticas e diretrizes documentadas e em processo de aprovação."
           }
         ]
       }
     },
    {
      "id": "p3",
      "title": "P3 - Capacitação de servidores e docentes no uso de IA e RPA",
      "description": "Programas de treinamento e workshops para desenvolver competências no uso e gestão de tecnologias de automação e IA.",
      "isActive": false,
      "currentPhase": "Aguardando início",
      "dependencies": ["P1", "P2"],
      "dependentProjects": [],
      "status": "planning",
      "projectManager": "A definir",
      "teamProfile": "Equipe com competências em: pedagogia e design instrucional para desenvolvimento de conteúdo educacional; especialistas em IA e RPA para conteúdo técnico; facilitadores e instrutores para execução de workshops; especialistas em avaliação e certificação; coordenadores de capacitação.",
      "projectTeam": [
        "Designer Instrucional",
        "Especialista em IA/RPA", 
        "Facilitador/Instrutor",
        "Especialista em Avaliação",
        "Coordenador de Capacitação"
      ],
      "priority": "medium",
      "icon": "P3",
      "details": {
        "objective": "Desenvolver competências da comunidade acadêmica no uso e gestão de tecnologias de automação e IA.",
        "workPackages": [
          "Mapeamento de competências atuais",
          "Desenvolvimento de conteúdo educacional",
          "Execução de workshops e treinamentos",
          "Avaliação e certificação"
        ],
        "sprints": [
          {
            "name": "Fase 1 - Diagnóstico",
            "description": "Mapeamento das competências atuais e necessidades de capacitação"
          },
          {
            "name": "Fase 2 - Desenvolvimento",
            "description": "Criação de materiais e metodologias de ensino"
          },
          {
            "name": "Fase 3 - Execução",
            "description": "Realização dos treinamentos e workshops"
          }
        ]
      }
    },
    {
      "id": "p4",
      "title": "P4 - Desenvolvimento de competências em gestão de projetos de IA",
      "description": "Capacitação de gestores e coordenadores para liderar projetos de implementação de IA e RPA.",
      "isActive": false,
      "currentPhase": "Aguardando início",
      "dependencies": ["P1", "P3"],
      "dependentProjects": [],
      "status": "planning",
      "projectManager": "A definir",
      "teamProfile": "Equipe com competências em: gestão de projetos e metodologias ágeis; especialistas em IA para contexto técnico; consultores em desenvolvimento organizacional; especialistas em certificação profissional; coordenadores de treinamento executivo.",
      "projectTeam": [
        "Especialista em Gestão de Projetos",
        "Consultor em IA", 
        "Consultor Organizacional",
        "Especialista em Certificação",
        "Coordenador de Treinamento Executivo"
      ],
      "priority": "medium",
      "icon": "P4",
      "details": {
        "objective": "Desenvolver competências de gestão específicas para projetos de IA e RPA.",
        "workPackages": [
          "Identificação de perfis de gestores",
          "Desenvolvimento de metodologia de gestão",
          "Treinamento em gestão de projetos de IA",
          "Certificação e acompanhamento"
        ],
        "sprints": [
          {
            "name": "Fase 1 - Mapeamento",
            "description": "Identificação de gestores e necessidades"
          },
          {
            "name": "Fase 2 - Metodologia",
            "description": "Desenvolvimento de framework de gestão"
          },
          {
            "name": "Fase 3 - Implementação",
            "description": "Execução dos treinamentos"
          }
        ]
      }
    },
    {
      "id": "p5",
      "title": "P5 - Projeto de Exemplo 5",
      "description": "Descrição do projeto P5.",
      "isActive": false,
      "currentPhase": "Aguardando início",
      "dependencies": [],
      "dependentProjects": [],
      "status": "planning",
      "projectManager": "A definir",
      "priority": "medium",
      "icon": "P5"
    },
    {
      "id": "p6",
      "title": "P6 - Projeto de Exemplo 6",
      "description": "Descrição do projeto P6.",
      "isActive": true,
      "currentPhase": "Em andamento",
      "dependencies": [],
      "dependentProjects": [],
      "status": "active",
      "projectManager": "A definir",
      "priority": "medium",
      "icon": "P6"
    },
    {
      "id": "p8",
      "title": "P8 - Dimensionamento e planejamento de recursos tecnológicos",
      "description": "Análise e planejamento da infraestrutura tecnológica necessária para implementação de soluções de IA e RPA.",
      "isActive": true,
      "currentPhase": "Fase 1 - Análise da infraestrutura atual",
      "dependencies": ["P1", "P2"],
      "dependentProjects": ["P9", "P10"],
      "status": "planning",
      "projectManager": "A definir",
      "teamProfile": "Equipe com competências em: arquitetura de sistemas e infraestrutura tecnológica; especialistas em IA e computação de alto desempenho; analistas de capacidade e performance; especialistas em segurança da informação; gestores de TI e planejamento tecnológico.",
      "projectTeam": [
        "Arquiteto de Sistemas",
        "Especialista em IA/HPC", 
        "Analista de Capacidade",
        "Especialista em Segurança",
        "Gestor de TI"
      ],
      "priority": "high",
      "icon": "P8",
      "details": {
        "objective": "Dimensionar e planejar os recursos tecnológicos necessários para suportar as soluções de IA e RPA.",
        "workPackages": [
          "Análise da infraestrutura atual",
          "Especificação de requisitos técnicos",
          "Planejamento de capacidade",
          "Elaboração de roadmap tecnológico"
        ],
        "sprints": [
          {
            "name": "Fase 1 - Diagnóstico",
            "description": "Análise da infraestrutura atual"
          },
          {
            "name": "Fase 2 - Especificação",
            "description": "Definição de requisitos e arquitetura"
          },
          {
            "name": "Fase 3 - Planejamento",
            "description": "Elaboração do roadmap de implementação"
          }
        ]
      }
    },
    {
      "id": "p7",
      "title": "P7 - Fomento de parcerias e comunidade colaborativa",
      "description": "Projeto de captação de recursos para assegurar a sustentabilidade financeira e o crescimento do Laboratório de Inovação com IA na UFFS.",
      "isActive": true,
      "currentPhase": "C.1 Sprint 1 - Pesquisa e Seleção de Editais",
      "dependencies": [],
      "dependentProjects": [],
      "status": "active",
      "projectManager": "Ricardo Garmus",
      "teamProfile": "Equipe especializada em captação de recursos com competências em: gestão de projetos de captação; especialistas em elaboração de propostas para agências de fomento; analistas financeiros para estruturação orçamentária; coordenadores de parcerias para relacionamento institucional; especialistas em negociação e contratos.",
      "projectTeam": [
        "Gestor de Projetos",
        "Especialista em Captação", 
        "Analista Financeiro",
        "Coordenadores de Parcerias (5)"
      ],
      "priority": "high",
      "icon": "P7",
      "duration": "24 meses (contínuo)",
      "budget": "R$ 2.500.000,00",
      "captationGoal": "R$ 3.000.000,00",
      "teamSize": 8,
      "details": {
        "objective": "Assegurar a sustentabilidade financeira e o crescimento do Laboratório de Inovação com IA na UFFS através da captação de recursos junto a agências de fomento, estabelecimento de parcerias financeiras estratégicas, desenvolvimento de modelo de sustentabilidade financeira e criação de pipeline de financiamento contínuo e diversificado.",
        "specificObjectives": [
          "Captar Recursos junto a Agências de Fomento: Obter financiamento de instituições nacionais como CNPq, CAPES, FINEP e BNDES para projetos de pesquisa, desenvolvimento e infraestrutura.",
          "Estabelecer Parcerias Financeiras Estratégicas: Firmar convênios e acordos financeiros com instituições públicas, empresas privadas e fundações.",
          "Desenvolver Modelo de Sustentabilidade Financeira: Criar e implementar um plano de longo prazo para a autossuficiência financeira do laboratório, explorando diversas fontes de receita.",
          "Criar Pipeline de Financiamento Contínuo e Diversificado: Manter um fluxo constante de oportunidades de captação, diversificando as fontes para reduzir a dependência de um único tipo de financiamento."
        ],
        "workPackages": [
          "C.1: Propostas CNPq/CAPES - 6 meses - Meta: R$ 800.000,00",
          "C.2: Editais FINEP/BNDES - 8 meses - Meta: R$ 1.200.000,00",
          "C.3: Parcerias RNP (Rede Nacional de Ensino e Pesquisa) - 4 meses - Meta: R$ 300.000,00",
          "C.4: Fundações Estaduais de Amparo à Pesquisa (FAPs) - 6 meses - Meta: R$ 400.000,00",
          "C.5: Parcerias Privadas e Iniciativa Privada - 12 meses - Meta: R$ 300.000,00"
        ],
        "performanceIndicators": [
          {
            "name": "Valor Total Captado",
            "metric": "Somatório de todos os recursos financeiros obtidos e formalizados",
            "goal": "R$ 3.000.000,00",
            "type": "financial"
          },
          {
            "name": "Número de Propostas Submetidas",
            "metric": "Quantidade de propostas de projetos enviadas às agências de fomento e empresas",
            "goal": "30 propostas (mínimo)",
            "type": "quantity"
          },
          {
            "name": "Taxa de Sucesso na Captação",
            "metric": "(Número de propostas aprovadas / Número de propostas submetidas) * 100%",
            "goal": "Acima de 25%",
            "type": "percentage"
          },
          {
            "name": "Diversificação das Fontes de Financiamento",
            "metric": "Percentual de cada fonte de financiamento (agências, empresas, fundações) no total captado",
            "goal": "Nenhuma fonte exceder 50% do total captado (exceto FINEP/BNDES devido ao maior valor individual)",
            "type": "distribution"
          },
          {
            "name": "Número de Parcerias Formalizadas",
            "metric": "Quantidade de convênios, acordos de cooperação ou contratos assinados",
            "goal": "10 parcerias (mínimo)",
            "type": "quantity"
          },
          {
            "name": "Ciclo Médio de Captação",
            "metric": "Tempo médio desde a submissão da proposta até a formalização do repasse",
            "goal": "Reduzir em 15% em comparação com o histórico",
            "type": "time"
          },
          {
            "name": "Sustentabilidade Financeira (Longo Prazo)",
            "metric": "Percentual de recursos garantidos para os próximos 12 meses após o término do projeto de captação",
            "goal": "30% do orçamento anual do laboratório garantido por fontes contínuas",
            "type": "percentage"
          },
          {
            "name": "Produtividade da Equipe de Captação",
            "metric": "Valor captado por membro da equipe por mês",
            "goal": "R$ 15.625,00/mês/membro (baseado na meta de R$3M em 24 meses por 8 membros)",
            "type": "productivity"
          }
        ],
        "sprints": [
          {
            "name": "C.1 Sprint 1 - Pesquisa e Seleção de Editais",
            "description": "Identificação contínua de editais abertos e futuros. Análise de elegibilidade e aderência aos objetivos do laboratório. Priorização dos editais mais promissores. Formação de equipes multidisciplinares para cada edital selecionado.",
            "duration": "Mês 1",
            "workPackage": "C.1: Propostas CNPq/CAPES"
          },
          {
            "name": "C.1 Sprint 2 - Elaboração de Pré-Projetos e Documentação",
            "description": "Desenvolvimento de esboços de propostas (sumário executivo, objetivos, metodologia). Levantamento de requisitos documentais e burocráticos. Coleta de currículos e informações dos pesquisadores envolvidos. Validação interna dos pré-projetos com a gestão do laboratório.",
            "duration": "Mês 2-3",
            "workPackage": "C.1: Propostas CNPq/CAPES"
          },
          {
            "name": "C.1 Sprint 3 - Desenvolvimento e Submissão Final",
            "description": "Escrita detalhada das propostas técnicas e financeiras. Revisão e ajustes de linguagem e conformidade. Obtenção de pareceres internos e externos (se aplicável). Submissão formal das propostas nas plataformas das agências. Acompanhamento pós-submissão e resposta a diligências.",
            "duration": "Mês 4-6",
            "workPackage": "C.1: Propostas CNPq/CAPES"
          },
          {
            "name": "C.2 Sprint 1 - Análise de Chamadas e Requisitos Específicos",
            "description": "Monitoramento ativo de chamadas públicas e programas de fomento. Estudo aprofundado dos termos de referência e linhas de crédito. Avaliação da capacidade institucional para atender aos critérios. Identificação de parceiros industriais ou tecnológicos (se exigido).",
            "duration": "Mês 1-2",
            "workPackage": "C.2: Editais FINEP/BNDES"
          },
          {
            "name": "C.2 Sprint 2 - Formulação de Propostas Técnicas e Financeiras Detalhadas",
            "description": "Estruturação do plano de negócios e viabilidade econômica. Elaboração de cronogramas físico-financeiros. Definição de indicadores de desempenho e impacto esperados. Preparação da documentação jurídica e financeira da UFFS.",
            "duration": "Mês 3-5",
            "workPackage": "C.2: Editais FINEP/BNDES"
          },
          {
            "name": "C.2 Sprint 3 - Validação e Submissão Qualificada",
            "description": "Revisão crítica das propostas por especialistas externos (se possível). Ajustes finais baseados em feedback. Formalização da submissão nos sistemas eletrônicos. Preparação para eventuais rodadas de negociação e apresentação.",
            "duration": "Mês 6-8",
            "workPackage": "C.2: Editais FINEP/BNDES"
          },
          {
            "name": "C.3 Sprint 1 - Mapeamento de Oportunidades e Contato Inicial",
            "description": "Pesquisa de programas e projetos da RNP alinhados com IA e inovação. Identificação de pontos de contato e áreas de interesse comum. Envio de apresentações institucionais e propostas iniciais de colaboração.",
            "duration": "Mês 1",
            "workPackage": "C.3: Parcerias RNP"
          },
          {
            "name": "C.3 Sprint 2 - Elaboração de Acordos e Planos Conjuntos",
            "description": "Participação em reuniões e workshops com representantes da RNP. Desenvolvimento de termos de referência para projetos colaborativos. Definição de escopo, responsabilidades e modelos de financiamento.",
            "duration": "Mês 2-3",
            "workPackage": "C.3: Parcerias RNP"
          },
          {
            "name": "C.3 Sprint 3 - Negociação e Formalização da Parceria",
            "description": "Negociação de cláusulas contratuais e condições financeiras. Revisão jurídica e aprovação dos termos de parceria. Assinatura do convênio ou contrato. Planejamento das atividades conjuntas e alocação de recursos.",
            "duration": "Mês 4",
            "workPackage": "C.3: Parcerias RNP"
          },
          {
            "name": "C.4 Sprint 1 - Identificação de Fundações e Alinhamento de Linhas",
            "description": "Mapeamento das FAPs com editais relevantes para IA e inovação. Análise das linhas de pesquisa e fomento específicas de cada FAP. Contato com pesquisadores e equipes que já obtiveram sucesso em FAPs.",
            "duration": "Mês 1-2",
            "workPackage": "C.4: Fundações Estaduais (FAPs)"
          },
          {
            "name": "C.4 Sprint 2 - Preparação de Documentação e Articulação Local",
            "description": "Adaptação de propostas existentes para os requisitos das FAPs. Obtenção de cartas de apoio e endossos de parceiros locais. Organização de reuniões com representantes das FAPs para apresentação.",
            "duration": "Mês 3-4",
            "workPackage": "C.4: Fundações Estaduais (FAPs)"
          },
          {
            "name": "C.4 Sprint 3 - Apresentação de Propostas e Follow-up",
            "description": "Submissão formal das propostas. Participação em bancas de avaliação (se aplicável). Acompanhamento ativo do processo de avaliação e resposta a questionamentos. Preparação para a implementação de projetos aprovados.",
            "duration": "Mês 5-6",
            "workPackage": "C.4: Fundações Estaduais (FAPs)"
          },
          {
            "name": "C.5 Sprint 1 - Prospecção de Empresas e Segmentos de Mercado",
            "description": "Mapeamento de empresas do setor de tecnologia, indústria e serviços com interesse em IA. Análise de potenciais sinergias e necessidades tecnológicas. Criação de um banco de dados de contatos e informações estratégicas.",
            "duration": "Mês 1-3",
            "workPackage": "C.5: Parcerias Privadas"
          },
          {
            "name": "C.5 Sprint 2 - Desenvolvimento de Propostas de Valor e Negociação",
            "description": "Elaboração de portfólio de projetos e capacidades do laboratório. Criação de propostas personalizadas, destacando o retorno sobre o investimento. Realização de reuniões de apresentação e negociação com potenciais parceiros. Definição de modelos de parceria (co-desenvolvimento, patrocínio, serviços, etc.).",
            "duration": "Mês 4-8",
            "workPackage": "C.5: Parcerias Privadas"
          },
          {
            "name": "C.5 Sprint 3 - Contratualização e Gestão de Relacionamento",
            "description": "Elaboração e revisão de contratos e acordos de confidencialidade. Formalização das parcerias e início das atividades. Estabelecimento de canais de comunicação e relatórios de progresso. Desenvolvimento de um plano de gestão de relacionamento para sustentabilidade.",
            "duration": "Mês 9-12",
            "workPackage": "C.5: Parcerias Privadas"
          }
        ]
      }
    },
    {
      "id": "p9",
      "title": "P9 - Projeto de Exemplo 9",
      "description": "Descrição do projeto P9.",
      "isActive": false,
      "currentPhase": "Aguardando início",
      "dependencies": [],
      "dependentProjects": [],
      "status": "planning",
      "projectManager": "A definir",
      "priority": "medium",
      "icon": "P9"
    },
    {
      "id": "p10",
      "title": "P10 - Projeto de Exemplo 10",
      "description": "Descrição do projeto P10.",
      "isActive": true,
      "currentPhase": "Em andamento",
      "dependencies": [],
      "dependentProjects": [],
      "status": "active",
      "projectManager": "A definir",
      "priority": "medium",
      "icon": "P10"
    },
    {
      "id": "p11",
      "title": "P11 - Projeto de Exemplo 11",
      "description": "Descrição do projeto P11.",
      "isActive": false,
      "status": "planning",
      "projectManager": "A definir",
      "priority": "medium",
      "icon": "P11"
    },
    {
      "id": "p12",
      "title": "P12 - Projeto de Exemplo 12",
      "description": "Descrição do projeto P12.",
      "isActive": true,
      "status": "active",
      "projectManager": "A definir",
      "priority": "medium",
      "icon": "P12"
    },
    {
      "id": "p13",
      "title": "P13 - Projeto de Exemplo 13",
      "description": "Descrição do projeto P13.",
      "isActive": true,
      "status": "active",
      "projectManager": "A definir",
      "priority": "medium",
      "icon": "P13"
    },
    {
      "id": "p14",
      "title": "P14 - Projeto de Exemplo 14",
      "description": "Descrição do projeto P14.",
      "isActive": true,
      "status": "active",
      "projectManager": "A definir",
      "priority": "medium",
      "icon": "P14"
    },
    {
      "id": "p15",
      "title": "P15 - Projeto de Exemplo 15",
      "description": "Descrição do projeto P15.",
      "isActive": false,
      "status": "planning",
      "projectManager": "A definir",
      "priority": "medium",
      "icon": "P15"
    },
    {
      "id": "p16",
      "title": "P16 - Projeto de Exemplo 16",
      "description": "Descrição do projeto P16.",
      "isActive": false,
      "status": "planning",
      "projectManager": "A definir",
      "priority": "medium",
      "icon": "P16"
    },
    {
      "id": "p17",
      "title": "P17 - Projeto de Exemplo 17",
      "description": "Descrição do projeto P17.",
      "isActive": true,
      "status": "active",
      "projectManager": "A definir",
      "priority": "medium",
      "icon": "P17"
    },
    {
      "id": "p18",
      "title": "P18 - Projeto de Exemplo 18",
      "description": "Descrição do projeto P18.",
      "isActive": true,
      "status": "active",
      "projectManager": "A definir",
      "priority": "medium",
      "icon": "P18"
    },
    {
      "id": "p19",
      "title": "P19 - Projeto de Exemplo 19",
      "description": "Descrição do projeto P19.",
      "isActive": true,
      "status": "active",
      "projectManager": "A definir",
      "priority": "medium",
      "icon": "P19"
    },
    {
      "id": "p20",
      "title": "P20 - Projeto de Exemplo 20",
      "description": "Descrição do projeto P20.",
      "isActive": true,
      "status": "active",
      "projectManager": "A definir",
      "priority": "medium",
      "icon": "P20"
    },
    {
      "id": "p21",
      "title": "P21 - Projeto de Exemplo 21",
      "description": "Descrição do projeto P21.",
      "isActive": true,
      "status": "active",
      "projectManager": "A definir",
      "priority": "medium",
      "icon": "P21"
    },
    {
      "id": "p22",
      "title": "P22 - Projeto de Exemplo 22",
      "description": "Descrição do projeto P22.",
      "isActive": true,
      "status": "active",
      "projectManager": "A definir",
      "priority": "medium",
      "icon": "P22"
    },
    {
      "id": "p23",
      "title": "P23 - Projeto de Exemplo 23",
      "description": "Descrição do projeto P23.",
      "isActive": true,
      "status": "active",
      "projectManager": "A definir",
      "priority": "medium",
      "icon": "P23"
    },
    {
      "id": "p24",
      "title": "P24 - Projeto de Exemplo 24",
      "description": "Descrição do projeto P24.",
      "isActive": false,
      "status": "planning",
      "projectManager": "A definir",
      "priority": "medium",
      "icon": "P24"
    },
    {
      "id": "p25",
      "title": "P25 - Projeto de Exemplo 25",
      "description": "Descrição do projeto P25.",
      "isActive": false,
      "status": "planning",
      "projectManager": "A definir",
      "priority": "medium",
      "icon": "P25"
    },
    {
      "id": "p26",
      "title": "P26 - Projeto de Exemplo 26",
      "description": "Descrição do projeto P26.",
      "isActive": false,
      "status": "planning",
      "projectManager": "A definir",
      "priority": "medium",
      "icon": "P26"
    }
  ]
};