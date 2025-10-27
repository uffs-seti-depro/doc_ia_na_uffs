// Dados dos projetos - incorporados diretamente para evitar problemas de CORS
const projectsData = {
  "projects": [
    {
      "id": "P1",
      "title": "Regulamentação e diretrizes para uso de IA e RPA na UFFS",
      "description": "Elaboração de normas e boas práticas para a implementação segura e ética de IA e RPA.",
      "escopo": "Criar regulamentação do uso da IA nos diversos espaços da UFFS: atividades administrativas; atividades acadêmicas (sejam operacionais ou de produção de pesquisa ou produção científica); atividades privadas executadas dentro da UFFS ou na sua rede privada (VPN); uso da IA e/ou de dados sensíveis para o uso da IA ou destes dados para treinar modelos de IA",
      "isActive": true,
      "currentPhase": "Fase 0 - Preparação para projeto",
      "dependencies": [],
      "dependentProjects": [
        "P2",
        "P3",
        "P5",
        "P8"
      ],
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
            "name": "Fase 0 - Preparação para projeto",
            "description": "Preparação inicial e planejamento do projeto"
          },
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
        ],
        "teamProfile": "Equipe multidisciplinar com competências em: análise jurídica e regulatória para diagnóstico da situação na UFFS e estudo dos marcos legais; especialistas em tecnologia e IA para levantamento de requisitos técnicos; redatores técnicos para elaboração de diretrizes; especialistas em consulta pública e comunicação institucional; gestores de projeto para coordenação das fases.",
        "projectTeam": [
          "Silvia (Coordenadora)",
          "Especialista Jurídico",
          "Especialista em IA",
          "Redator Técnico",
          "Especialista em Comunicação"
        ],
        "successIndicators": [
          "Documento de diretrizes aprovado",
          "Conformidade legal verificada",
          "Aceitação da comunidade acadêmica"
        ]
      },
      "cluster": "Cluster 1 - Institucionalização",
    },
    {
      "id": "P2",
      "title": "Definição de Eixos Estratégicos e Áreas Prioritárias para Implementação de IA na UFFS",
      "description": "Definir os eixos estratégicos e as áreas prioritárias de aplicação da Inteligência Artificial (IA) na UFFS, visando otimização de processos, melhoria de serviços e promoção da inovação.",
      "escopo": "O escopo deste projeto consiste em realizar um diagnóstico completo da instituição e, a partir dele, desenvolver um plano estratégico abrangente para a implementação da Inteligência Artificial (IA) e da Automação Robótica de Processos (RPA). O objetivo final não é a implementação técnica da IA em si, mas sim a criação de toda a base estratégica, de governança e de planejamento que guiará futuras iniciativas de IA na UFFS. O projeto definirá ONDE, COMO e QUANDO a Inteligência Artificial será aplicada, garantindo que os esforços estejam alinhados aos objetivos de maior impacto e retorno para a universidade.",
      "naoEscopo": "O que NÃO está no Escopo deste Projeto: Desenvolvimento ou Implementação Técnica: Nenhuma ferramenta de IA será codificada ou implementada. Aquisição de Tecnologia: Nenhuma compra de software ou hardware será realizada. Treinamento de Usuários Finais: A capacitação da comunidade acadêmica não está incluída. Gestão da Infraestrutura de TI: O dimensionamento de servidores e redes (tarefa do P8) está fora do escopo.",
      "isActive": true,
      "currentPhase": "Fase 1 - Mapeamento de processos",
      "dependencies": [
        "P1"
      ],
      "dependentProjects": [
        "P8",
        "P9"
      ],
      "status": "active",
      "projectManager": "Ocimar",
      "teamProfile": "Comitê Multidisciplinar com representantes da TI, acadêmicos e administrativos, incluindo competências em: análise de processos e mapeamento organizacional; especialistas em IA e RPA para avaliação técnica; analistas de negócio para análise de impacto; coordenação estratégica e roadmap de implementação.",
      "projectTeam": [
        "Silvia",
        "Giovani",
        "Jasiel",
        "Edivandro",
        "Representante do Gabinete do Reitor",
        "Representantes das Áreas Finalísticas",
        "Representante do CCC"
      ],
      "priority": "high",
      "icon": "P2",
      "code": "IAUffs-EST-002",
      "duration": "4 meses",
      "details": {
        "objective": "Definir os eixos estratégicos, o roteiro de implementação e as regras de governança para a aplicação da Inteligência Artificial na UFFS, a fim de guiar futuras iniciativas de forma planejada, ética e alinhada aos objetivos de maior impacto para a instituição.",
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
            "name": "Fase de Diagnóstico e Análise (Sprint 1)",
            "description": "Mapeamento detalhado de processos institucionais em múltiplos contextos, análise de oportunidades e riscos, e levantamento de sistemas e dados.",
            "deliverables": [
              "Mapeamento de Processos Administrativos (gestão, finanças, RH, compras)",
              "Mapeamento de Processos Acadêmicos (matrículas, registros, apoio à pesquisa, produção científica)",
              "Mapeamento de Atividades em Ambiente Restrito (VPN, laboratórios, dados sensíveis)",
              "Análise de Oportunidades e Riscos por contexto",
              "Inventário de Sistemas Legados e Bases de Dados",
              "Classificação de Dados (sensíveis, pessoais, estratégicos)"
            ]
          },
          {
            "id": "P2.2",
            "name": "Fase de Definição Estratégica (Sprint 2)",
            "description": "Estabelecimento dos eixos estratégicos, visão de longo prazo e filosofia de licenciamento para aplicação de IA na UFFS.",
            "deliverables": [
              "Definição dos 5 Eixos Estratégicos para IA",
              "Declaração de Visão de Longo Prazo",
              "Filosofia de Licenciamento e Desenvolvimento (livre, comercial, híbrido)",
              "Estratégia de Desenvolvimento Interno vs. Aquisição de Modelos",
              "Framework de Aplicação nos Âmbitos Administrativo, Acadêmico e de Pesquisa"
            ]
          },
          {
            "id": "P2.3",
            "name": "Fase de Priorização e Planejamento (Sprint 3)",
            "description": "Desenvolvimento de matriz de priorização, seleção de projetos piloto e criação de roadmap detalhado de implementação.",
            "deliverables": [
              "Matriz de Priorização Multidimensional (impacto, viabilidade, custo, alinhamento, sensibilidade de dados)",
              "Seleção de Áreas Prioritárias para Projetos Piloto",
              "Balanceamento entre Iniciativas Administrativas e de Inovação Acadêmica",
              "Roadmap de Implementação para 12 meses",
              "Especificação de Recursos Necessários (humanos, tecnológicos)"
            ]
          },
          {
            "id": "P2.4",
            "name": "Fase de Governança e Formalização (Sprint 4)",
            "description": "Elaboração de políticas de uso de IA e dados, estrutura de governança e documentação estratégica para aprovação institucional.",
            "deliverables": [
              "Políticas de Uso de Dados Sensíveis em IA",
              "Diretrizes para Treinamento de Modelos com Dados Institucionais",
              "Framework de Conformidade com LGPD",
              "Proposta de Comitê de Ética em IA",
              "Processos de Anonimização e Controle de Dados",
              "Documentação Estratégica Completa para Aprovação Institucional"
            ]
          }
        ],
        "sprints": [
          {
            "name": "Sprint 1: Diagnóstico e Análise (Mês 1)",
            "description": "Entender profundamente o estado atual da UFFS. O foco é mapear o terreno para identificar onde a IA pode ser mais útil e quais desafios (técnicos e de dados) existem.",
            "activities": [
              "Kick-off e Alinhamento: Reunião inicial com a equipe do projeto e stakeholders-chave para alinhar o escopo, os objetivos e o cronograma. Definição da agenda de reuniões com as áreas prioritárias.",
              "Mapeamento de Processos e Contextos: Realizar workshops e entrevistas com os representantes das Pró-reitorias e outras áreas-chave. Documentar os processos, separando-os nas categorias definidas: (a) Administrativos, (b) Acadêmicos (operacionais e de pesquisa), e (c) Atividades em ambiente restrito (VPN).",
              "Levantamento Técnico e de Dados: Em paralelo, a equipe técnica (Analista de Dados, Especialista em IA) mapeia os sistemas legados, APIs disponíveis e as principais bases de dados da instituição. Criar um 'inventário de dados', identificando onde residem dados potencialmente sensíveis ou estratégicos.",
              "Análise de Oportunidades e Gargalos: Ao final da Sprint, a equipe se reúne para consolidar os achados, criando uma lista preliminar de processos que são fortes candidatos à otimização com IA/RPA."
            ],
            "deliverables": [
              "✅ Mapa de Processos Institucionais (Versão Preliminar): Um documento ou diagrama visualizando os principais processos analisados e suas categorias.",
              "✅ Inventário de Sistemas e Fontes de Dados: Uma planilha ou documento listando os sistemas e bases de dados, com notas sobre sua relevância e a presença de dados sensíveis.",
              "✅ Lista de Oportunidades e Gargalos: Um relatório inicial destacando as principais 'dores' e oportunidades de melhoria identificadas."
            ]
          },
          {
            "name": "Sprint 2: Definição de Estratégia (Mês 2)",
            "description": "Transformar o diagnóstico da Sprint 1 em uma visão estratégica clara. O foco é definir os pilares que guiarão as decisões futuras.",
            "activities": [
              "Workshop de Estratégia: Conduzir uma ou mais sessões de brainstorming com a equipe do projeto e o Comitê Multidisciplinar. Utilizar a lista de oportunidades da Sprint 1 como insumo para a discussão.",
              "Elaboração dos Eixos Estratégicos: Com base no workshop, o Coordenador e o Especialista em Planejamento Estratégico redigem a proposta dos cinco eixos estratégicos (ex: 'Excelência Operacional', 'Inovação na Pesquisa', 'Sucesso do Estudante', etc.).",
              "Definição da Filosofia de Uso: Discussão focada em definir a abordagem da UFFS para licenciamento de software (open source vs. comercial), desenvolvimento interno e a visão de longo prazo para a IA.",
              "Validação da Estratégia: Apresentar a proposta dos eixos estratégicos e da visão de futuro para os gestores e áreas-chave para validação e feedback."
            ],
            "deliverables": [
              "✅ Documento dos 5 Eixos Estratégicos: Uma apresentação ou documento formal descrevendo cada eixo, seu objetivo e como ele se conecta à missão da UFFS.",
              "✅ Declaração de Visão de Longo Prazo para IA: Um parágrafo claro e inspirador que resume o futuro desejado.",
              "✅ Diretriz sobre Filosofia de Licenciamento: Uma recomendação formal sobre a abordagem para aquisição e desenvolvimento de tecnologia de IA."
            ]
          },
          {
            "name": "Sprint 3: Priorização e Roadmap (Mês 3)",
            "description": "Traduzir a estratégia em um plano de ação concreto. O foco é decidir o que será feito primeiro e como.",
            "activities": [
              "Desenvolvimento dos Critérios de Priorização: A equipe define os pesos para os critérios da matriz de priorização (ex: Impacto - 30%, Viabilidade Técnica - 20%, Custo Estimado - 20%, Alinhamento Estratégico - 20%, Sensibilidade dos Dados - 10%).",
              "Sessão de Priorização: Aplicar a matriz às oportunidades levantadas na Sprint 1, classificando cada iniciativa potencial.",
              "Seleção dos Projetos Piloto: Com base na classificação, a equipe seleciona um conjunto de 2 a 3 projetos para serem os primeiros pilotos.",
              "Criação do Roadmap (12 meses): Detalhar o plano para os projetos piloto, definindo fases, etapas, recursos necessários e metas trimestrais. O roadmap deve visualizar o caminho para o primeiro ano de implementação."
            ],
            "deliverables": [
              "✅ Matriz de Priorização Aprovada: A ferramenta (planilha ou documento) com os critérios e a classificação final das iniciativas.",
              "✅ Lista de Projetos Piloto Selecionados: Um documento descrevendo os projetos escolhidos, seu escopo e objetivos.",
              "✅ Roadmap Estratégico de Implementação (Primeiros 12 Meses): Uma apresentação visual (diagrama de Gantt, slide, etc.) mostrando a linha do tempo, as fases e as principais entregas dos projetos piloto."
            ]
          },
          {
            "name": "Sprint 4: Governança e Formalização (Mês 4)",
            "description": "Criar as 'regras do jogo'. O foco é garantir que a implementação da IA seja ética, segura, legal e sustentável.",
            "activities": [
              "Desenvolvimento das Políticas: A equipe, com apoio jurídico se necessário, redige o rascunho das políticas de uso de IA. Criar seções específicas para uso de dados sensíveis e para o treinamento de modelos, definindo o que é permitido, o que requer consentimento e o que é proibido.",
              "Proposta do Comitê de Ética: Desenhar a estrutura do Comitê de Ética em IA: seu mandato, composição sugerida, frequência de reuniões e processo de tomada de decisão.",
              "Consolidação e Revisão: Juntar todos os entregáveis das Sprints anteriores em um único pacote coeso de documentos estratégicos. Realizar uma revisão final com toda a equipe e stakeholders.",
              "Formalização para Aprovação: Preparar a documentação final para ser submetida formalmente às instâncias de aprovação da UFFS."
            ],
            "deliverables": [
              "✅ Rascunho das Políticas de IA e Conformidade com LGPD: O documento de políticas pronto para revisão e aprovação.",
              "✅ Proposta da Estrutura do Comitê de Ética em IA: Um documento detalhando o propósito e o funcionamento do comitê.",
              "✅ Pacote de Documentos Estratégicos Finalizado: O conjunto completo de todos os artefatos produzidos nas sprints anteriores, organizados e formatados para aprovação institucional."
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
          "Mapa de processos completo",
          "Matriz de priorização aprovada",
          "Roadmap estratégico definido"
        ],
        "teamProfile": "Equipe estratégica com competências em: análise de processos institucionais; gestão estratégica e planejamento; análise de dados e métricas; especialistas em IA e RPA; representantes das diferentes áreas da universidade.",
        "projectTeam": [
          "Ocimar (Coordenador)",
          "Analista de Processos",
          "Especialista em Planejamento Estratégico",
          "Analista de Dados",
          "Representantes das Pró-reitorias"
        ]
      },
      "cluster": "Cluster 1 - Institucionalização",
    },
    {
      "id": "P3",
      "title": "Desenvolvimento da Equipe da UFFS no Uso da Inteligência Artificial e RPA",
      "description": "Desenvolvimento e implementação de um programa de capacitação multifacetado, composto por trilhas de aprendizagem modulares, com o objetivo de desenvolver competências essenciais no uso, desenvolvimento e gestão de tecnologias de automação e Inteligência Artificial. O programa visa atender às diversas necessidades da comunidade acadêmica da UFFS, desde o conhecimento regulatório básico até a formação de especialistas e o uso avançado em pesquisa.",
      "isActive": false,
      "currentPhase": "Aguardando início",
      "dependencies": [
        "P1",
        "P2"
      ],
      "dependentProjects": [],
      "status": "planning",
      "projectManager": "Jasiel",
      "teamProfile": "A equipe multidisciplinar será composta por: Coordenador de Capacitação responsável pelo planejamento geral e articulação com a PROGESP; Designer Instrucional especialista em pedagogia para desenhar as trilhas e os materiais didáticos; Especialistas de Conteúdo (Internos e Externos) incluindo especialistas em Legislação e Segurança da Informação, IA e Desenvolvimento, Engenharia de Prompt, RPA e Ciência de Dados, e IA na Pesquisa Acadêmica; Facilitadores/Instrutores para ministrar os cursos e workshops; e Especialista em Avaliação responsável pela criação dos métodos de avaliação e certificação.",
      "projectTeam": [
        "Coordenador de Capacitação",
        "Designer Instrucional",
        "Especialista em Legislação e Segurança da Informação",
        "Especialista em IA e Desenvolvimento",
        "Especialista em Engenharia de Prompt e Ferramentas de IA",
        "Especialista em RPA e Ciência de Dados",
        "Especialista em IA na Pesquisa Acadêmica",
        "Facilitadores/Instrutores",
        "Especialista em Avaliação"
      ],
      "priority": "medium",
      "icon": "P3",
      "details": {
        "objective": "Capacitar servidores e docentes para o uso ético, seguro e eficiente de tecnologias de IA e RPA, alinhado às diretrizes institucionais, promovendo a inovação, a otimização de processos e o avanço na produção acadêmica.",
        "workPackages": [
          {
            "name": "a) Trilha Regulatória",
            "target": "Todos os servidores da UFFS (docentes e técnico-administrativos)",
            "description": "Curso obrigatório e monitorado sobre a LGPD, a Política de Segurança da Informação (PSI) e o Regulamento do Uso da IA na UFFS. Capacitação fundamental para garantir conformidade legal e institucional.",
            "deliverable": "Certificado validado pela PROGESP para progressão por capacitação ou compensação de recessos",
            "responsible": "Especialista em Legislação e Segurança da Informação (interno) com apoio da equipe jurídica e de TI da UFFS",
            "materialDevelopment": "Equipe interna especializada em legislação, com revisão jurídica e validação pela PROGESP",
            "trainingExecution": "Facilitadores internos capacitados em legislação de dados e segurança da informação"
          },
          {
            "name": "b) Trilha de Formação de Especialistas em IA",
            "target": "Equipe técnica da SETI, membros do GT de IA e servidores designados para projetos de desenvolvimento de IA",
            "description": "Formação aprofundada em conceitos avançados de desenvolvimento de IA, machine learning, deep learning e ferramentas de implementação. Foco em capacitar especialistas para liderar projetos de IA na instituição.",
            "deliverable": "Certificados de cursos especializados (internos ou externos) validados pela PROGESP",
            "responsible": "Especialista em IA e Desenvolvimento (interno) em parceria com instituições especializadas ou cursos externos contratados",
            "materialDevelopment": "Curadoria de cursos externos especializados e desenvolvimento de conteúdo complementar pela equipe técnica interna",
            "trainingExecution": "Instrutores externos especializados complementados por especialistas internos da SETI e GT de IA"
          },
          {
            "name": "c) Trilha de Formação para Usuários de IA",
            "target": "Todos os servidores da UFFS (docentes e técnico-administrativos) interessados em otimizar suas atividades com IA",
            "description": "Capacitação prática em engenharia de prompt, uso eficiente de ferramentas de IA autorizadas pela UFFS e aplicação ética da IA em tarefas setoriais. Foco na produtividade e qualidade do trabalho.",
            "deliverable": "Certificado validado pela PROGESP para progressão por capacitação ou compensação de recessos",
            "responsible": "Especialista em Engenharia de Prompt e Ferramentas de IA com apoio de facilitadores internos",
            "materialDevelopment": "Equipe interna de especialistas em IA com foco em aplicações práticas e casos de uso institucionais",
            "trainingExecution": "Facilitadores internos treinados em engenharia de prompt e uso de ferramentas de IA, com workshops práticos"
          },
          {
            "name": "d) Trilha para Desenvolvedores de RPA e Ciência de Dados",
            "target": "Servidores interessados em implementações locais de automação, analistas de sistemas e profissionais de TI dos setores",
            "description": "Treinamento especializado para automatização de planilhas, desenvolvimento de bots para tarefas repetitivas e análise de dados. Soluções autorizadas pelo Comitê de Governança Digital (CGD) com foco em implementação local.",
            "deliverable": "Certificado validado pela PROGESP para progressão por capacitação ou compensação de recessos",
            "responsible": "Especialista em RPA e Ciência de Dados em parceria com especialistas da SETI e membros do GT de IA",
            "materialDevelopment": "Equipe técnica da SETI e GT de IA com desenvolvimento de casos práticos e laboratórios hands-on",
            "trainingExecution": "Especialistas da SETI e GT de IA com experiência prática em automação e análise de dados"
          },
          {
            "name": "e) Trilha de Treinamento em Ferramentas Específicas",
            "target": "Usuários finais das soluções de IA e RPA desenvolvidas e implantadas pela UFFS em seus respectivos setores",
            "description": "Treinamento focado no uso prático e operacional das ferramentas e soluções específicas desenvolvidas e disponibilizadas pela UFFS. Capacitação just-in-time para maximizar a adoção e eficiência das soluções implantadas.",
            "deliverable": "Certificado validado pela PROGESP para progressão por capacitação ou compensação de recessos",
            "responsible": "Equipes técnicas responsáveis por cada solução específica (SETI, GT de IA, equipes de desenvolvimento)",
            "materialDevelopment": "Equipes desenvolvedoras de cada solução com criação de manuais, tutoriais e materiais de treinamento específicos",
            "trainingExecution": "Especialistas técnicos de cada equipe desenvolvedora com conhecimento profundo das ferramentas específicas"
          },
          {
            "name": "f) Trilha de IA Generativa na Produção Acadêmica",
            "target": "Docentes, pesquisadores, estudantes de pós-graduação e profissionais envolvidos em pesquisa e produção acadêmica",
            "description": "Workshop especializado sobre o uso ético e eficiente de ferramentas de IA generativa para pesquisa, redação acadêmica, análise de dados de pesquisa e produção de trabalhos científicos, em conformidade com as normativas da UFFS e padrões éticos da pesquisa.",
            "deliverable": "Certificado de participação em atividade de extensão ou capacitação acadêmica",
            "responsible": "Especialista em IA na Pesquisa Acadêmica em parceria com a Pró-Reitoria de Pesquisa e Pós-Graduação",
            "materialDevelopment": "Especialistas em pesquisa acadêmica e IA com desenvolvimento de casos de uso específicos para diferentes áreas do conhecimento",
            "trainingExecution": "Pesquisadores experientes em IA aplicada à pesquisa, com apoio de especialistas em metodologia científica e ética em pesquisa"
          }
        ],
        "sprints": [
          {
            "name": "Fase 0 - Preparação e Planejamento (Sprint 0)",
            "description": "Definição detalhada do escopo de cada trilha. Articulação com a PROGESP para alinhamento dos requisitos de certificação. Identificação e alocação dos especialistas e instrutores para cada trilha."
          },
          {
            "name": "Fase 1 - Diagnóstico e Mapeamento (Sprint 1)",
            "description": "Mapeamento das competências atuais e das necessidades de capacitação prioritárias. Levantamento das ferramentas de IA e RPA já em uso ou em planejamento na UFFS."
          },
          {
            "name": "Fase 2 - Desenvolvimento do Conteúdo (Sprint 2)",
            "description": "Criação dos materiais didáticos, planos de aula e sistemas de avaliação para cada trilha. Configuração das plataformas de ensino (Moodle, etc.)."
          },
          {
            "name": "Fase 3 - Execução e Acompanhamento (Sprints 3 em diante)",
            "description": "Lançamento e realização dos cursos e workshops de cada trilha. Monitoramento do progresso dos participantes e coleta de feedback."
          },
          {
            "name": "Fase 4 - Avaliação e Certificação (Sprint Final)",
            "description": "Aplicação das avaliações finais. Processamento e envio dos dados à PROGESP para emissão dos certificados. Análise dos indicadores de sucesso e planejamento de novos ciclos de capacitação."
          }
        ],
        "successIndicators": [
          "Número de servidores capacitados por trilha",
          "Taxa de aprovação e certificação nos cursos validados pela PROGESP",
          "Nível de satisfação dos participantes (medido por pesquisas de feedback)",
          "Aplicação prática dos conhecimentos: Número de projetos de RPA/IA iniciados por servidores após a Trilha (d) ou melhorias de processo reportadas pelos participantes da Trilha (c)"
        ],
        "projectScope": {
          "inScope": [
            {
              "title": "Planejamento e Estruturação das Trilhas de Capacitação",
              "description": "Desenvolver o plano pedagógico e o conteúdo programático para as seis trilhas de formação definidas (Regulatória, Especialistas em IA, Usuários de IA, Desenvolvedores de RPA, Treinamento em Ferramentas, IA na Produção Acadêmica)."
            },
            {
              "title": "Articulação para Viabilização de Recursos (P6)",
              "description": "Garantir, em articulação com o projeto P6 (Gestão de Recursos e Orçamento), a alocação dos recursos financeiros e de infraestrutura necessários para viabilizar a execução de cada uma das trilhas de treinamento. Isso inclui orçamento para contratação de cursos externos, aquisição de materiais, licenças temporárias para softwares de treinamento, e outros custos associados."
            },
            {
              "title": "Desenvolvimento e Curadoria de Conteúdo",
              "description": "Criar materiais didáticos (apresentações, vídeos, textos, tutoriais) para os cursos ministrados internamente. Realizar a curadoria e a contratação de cursos externos, utilizando os recursos obtidos via P6."
            },
            {
              "title": "Execução e Logística dos Treinamentos",
              "description": "Organizar e ministrar os workshops, cursos e treinamentos, seja em formato online, presencial ou híbrido. Gerenciar a inscrição e a comunicação com os participantes."
            },
            {
              "title": "Gestão da Certificação junto à PROGESP",
              "description": "Realizar todos os trâmites necessários para que os cursos destinados aos servidores sejam aprovados pela PROGESP. Garantir que os certificados emitidos sejam válidos para progressão por capacitação e compensação de horas, conforme as normativas da UFFS."
            },
            {
              "title": "Avaliação e Acompanhamento",
              "description": "Criar e aplicar métodos para avaliar o aprendizado dos participantes. Coletar feedback sobre os cursos para promover a melhoria contínua. Monitorar os indicadores de sucesso definidos (ex: número de capacitados, taxa de aprovação). Foco no Público da UFFS: O projeto é exclusivamente voltado para capacitar o corpo funcional da UFFS (servidores técnico-administrativos e docentes) e, em trilhas específicas, discentes."
            }
          ],
          "outOfScope": [
            {
              "title": "Desenvolvimento de Novas Ferramentas de IA e RPA",
              "description": "Este projeto foca em capacitar pessoas, não em construir as ferramentas. O desenvolvimento de novas soluções de software é responsabilidade de outros projetos ou equipes (como a SETI ou o GT de IA)."
            },
            {
              "title": "Aquisição e Licenciamento de Softwares",
              "description": "O projeto não é responsável pelo orçamento, compra ou licenciamento de ferramentas de IA ou RPA para uso institucional. Ele apenas treinará os usuários nas ferramentas que forem disponibilizadas e autorizadas pela UFFS."
            },
            {
              "title": "Definição das Políticas e Regulamentos",
              "description": "O projeto irá ministrar treinamento sobre as políticas existentes (LGPD, PSI, Regulamento de IA), mas não é responsável por criar, redigir ou aprovar essas normativas. Essa é uma dependência (P1)."
            },
            {
              "title": "Suporte Técnico Contínuo das Ferramentas",
              "description": "A equipe do projeto de capacitação não prestará suporte técnico (help desk) para os usuários das ferramentas de IA e RPA no dia a dia. Essa responsabilidade pertence às equipes de TI ou às equipes responsáveis por cada solução específica."
            },
            {
              "title": "Implementação de Projetos de IA/RPA nos Setores",
              "description": "O projeto capacita os servidores para que eles possam desenvolver e implementar soluções, mas não é responsável por executar ou gerenciar esses projetos de implementação nos setores."
            },
            {
              "title": "Gestão da Carreira ou Progressão dos Servidores",
              "description": "O projeto fornece os certificados validados, mas a responsabilidade de solicitar a progressão funcional ou a averbação de horas é inteiramente do servidor, seguindo os procedimentos da PROGESP."
            }
          ]
        }
      },
      "cluster": "Cluster 1 - Institucionalização",
    },
    {
      "id": "P4",
      "title": "Desenvolvimento de competências em gestão de projetos de IA",
      "description": "Capacitação de gestores e coordenadores para liderar projetos de implementação de IA e RPA.",
      "isActive": false,
      "currentPhase": "Aguardando início",
      "dependencies": [
        "P1",
        "P3"
      ],
      "dependentProjects": [],
      "status": "planning",
      "projectManager": "Jasiel",
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
        "objective": "Criar sistemas de classificação e ontologias para estruturar o conhecimento institucional e facilitar o uso de IA.",
        "workPackages": [
          "Identificação de perfis de gestores",
          "Desenvolvimento de metodologia de gestão",
          "Treinamento em gestão de projetos de IA",
          "Certificação e acompanhamento"
        ],
        "sprints": [
          {
            "name": "Fase 0 - Preparação para projeto",
            "description": "Preparação inicial e planejamento do projeto"
          },
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
        ],
        "teamProfile": "Equipe especializada em: ciência da informação e biblioteconomia; especialistas em ontologias e taxonomias; analistas de sistemas de informação; especialistas em IA e processamento de linguagem natural; gestores de conteúdo.",
        "projectTeam": [
          "Especialista em Ciência da Informação",
          "Ontologista",
          "Analista de Sistemas",
          "Especialista em NLP",
          "Gestor de Conteúdo"
        ],
        "successIndicators": [
          "Taxonomia institucional aprovada",
          "Ontologias implementadas",
          "Sistema de classificação funcional"
        ]
      },
      "cluster": "Cluster 1 - Institucionalização",
    },
    {
      "id": "P5",
      "title": "Criação do comitê de governança da IA",
      "description": "Estabelecimento de um comitê multidisciplinar para supervisionar, orientar e garantir o uso ético e responsável da IA nas IFES.",
      "isActive": false,
      "currentPhase": "Aguardando início",
      "dependencies": [],
      "dependentProjects": [],
      "status": "planning",
      "projectManager": "Silvia",
      "priority": "medium",
      "icon": "P5",
      "cluster": "Cluster 1 - Institucionalização",
      "details": {
        "objective": "Desenvolver ferramentas específicas de IA para apoiar pesquisa e ensino nas áreas de ciências humanas e sociais.",
        "teamProfile": "Equipe interdisciplinar com: pesquisadores das áreas de humanas; desenvolvedores especializados em IA; especialistas em processamento de linguagem natural; designers de interface; especialistas em metodologia de pesquisa.",
        "projectTeam": [
          "Pesquisador em Ciências Humanas",
          "Desenvolvedor IA",
          "Especialista em NLP",
          "Designer UX/UI",
          "Metodologista"
        ],
        "workPackages": [
          "Levantamento de necessidades das áreas",
          "Desenvolvimento de protótipos",
          "Testes com usuários finais",
          "Implementação e treinamento"
        ],
        "sprints": [
          {
            "name": "Fase 0 - Preparação para projeto",
            "description": "Preparação inicial e planejamento do projeto"
          },
          {
            "name": "Sprint 1 - Levantamento",
            "description": "Identificação de necessidades específicas das áreas"
          },
          {
            "name": "Sprint 2 - Protótipos",
            "description": "Desenvolvimento de protótipos funcionais"
          },
          {
            "name": "Sprint 3 - Testes",
            "description": "Testes de usabilidade com pesquisadores"
          },
          {
            "name": "Sprint 4 - Implementação",
            "description": "Implementação final e treinamento"
          }
        ],
        "successIndicators": [
          "Ferramentas desenvolvidas e testadas",
          "Adoção pelos pesquisadores",
          "Melhoria na produtividade de pesquisa"
        ]
      }
    },
    {
      "id": "P6",
      "title": "Captação de recursos humanos e financeiros",
      "description": "Projeto de captação de recursos para assegurar a sustentabilidade financeira e o crescimento do Laboratório de Inovação com IA na UFFS.",
      "escopo": "O escopo deste projeto consiste em planejar, articular e executar a captação de recursos financeiros para viabilizar o portfólio de 29 projetos de inovação e Inteligência Artificial da UFFS. Espera-se que este projeto alavanque recursos para viabilizar as atividades de capacitação, treinamento, despesas de viagem, diárias, transporte, licenças de software, aquisição de equipamentos, contratação de serviços e financiamento de bolsas para pesquisa, desenvolvimento e gestão dos projetos. Para isso, o projeto inclui a produção de um portfólio de propostas de captação customizadas, a criação de um pipeline estratégico de oportunidades de financiamento e a formalização dos acordos que garantam o repasse dos valores. Adicionalmente, será entregue um modelo de sustentabilidade financeira para assegurar a continuidade das iniciativas, limitando-se estritamente à atividade de captação, sem envolver a execução ou a gestão financeira dos projetos beneficiados.",
      "naoEscopo": "\n- Execução dos Projetos Finais: Este projeto não executa as atividades dos 29 projetos (não desenvolve o software, não realiza os treinamentos, não compra os equipamentos). Sua função é captar os recursos para que os outros projetos possam executar.\n- Gestão Financeira e Prestação de Contas: A administração dos recursos captados e a posterior prestação de contas são de responsabilidade dos projetos beneficiados, embora o P6 possa auxiliar na elaboração dos orçamentos iniciais.\n- Decisão sobre Alocação de Recursos: A decisão final sobre quais projetos do portfólio serão priorizados em cada edital ou negociação pertence à governança estratégica da UFFS. O P6 é o braço executor da captação.",
      "isActive": true,
      "currentPhase": "Fase 0 - Preparação para projeto",
      "dependencies": [],
      "dependentProjects": [],
      "status": "active",
      "projectManager": "Garmus",
      "teamProfile": "Equipe com competências em: escrever projetos, em manter contatos e abrir portas para em agências de fomento e em Brasília.",
      "priority": "high",
      "icon": "P6",
      "cluster": "Cluster 1 - Institucionalização",
      "details": {
        "objective": "Manter projetos, criar rede de contatos, prospectar editais e submeter projetos de captação de recursos.",
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
        "deliverables": [
          {
            "id": "E1",
            "name": "Pipeline de Oportunidades",
            "description": "Uma base de dados ativa e atualizada com todos os editais, programas e contatos de fomento mapeados e classificados por prioridade."
          },
          {
            "id": "E2", 
            "name": "Propostas de Captação Submetidas",
            "description": "O conjunto de todos os projetos e propostas técnicas e financeiras desenvolvidas e enviadas às fontes de financiamento."
          },
          {
            "id": "E3",
            "name": "Acordos e Convênios Formalizados", 
            "description": "Os contratos, convênios e termos de parceria assinados que garantem o repasse dos recursos."
          },
          {
            "id": "E4",
            "name": "Modelo de Sustentabilidade Financeira",
            "description": "Um documento estratégico que descreve o plano de longo prazo para a autossuficiência financeira do ecossistema de IA."
          },
          {
            "id": "E5",
            "name": "Relatórios de Desempenho de Captação",
            "description": "Dashboards e relatórios periódicos que acompanham o progresso em relação às metas (valor captado, taxa de sucesso, etc.)."
          }
        ],
        "sprints": [
          {
            "name": "Sprint 1: Mapeamento e Estratégia",
            "description": "Identificar as melhores oportunidades dentro do pacote de trabalho.",
            "duration": "1-2 meses",
            "activities": [
              "Pesquisar e selecionar editais/chamadas/contatos específicos (ex: editais do CNPq, programas do MGI)",
              "Analisar os requisitos e a aderência aos projetos da UFFS",
              "Definir quais dos 29 projetos têm maior sinergia com a oportunidade",
              "Fazer o contato inicial e o alinhamento estratégico"
            ],
            "deliverables": ["E1. Pipeline de Oportunidades (alimentado com os achados da Sprint)"]
          },
          {
            "name": "Sprint 2: Elaboração da Proposta", 
            "description": "Construir uma proposta robusta e competitiva.",
            "duration": "2-3 meses",
            "activities": [
              "Desenvolver o pré-projeto (escopo, objetivos, metodologia)",
              "Estruturar o orçamento detalhado (custos de equipe, hardware, diárias, etc.)",
              "Coletar a documentação necessária (currículos, certidões, cartas de apoio)",
              "Escrever a proposta técnica e financeira completa"
            ],
            "deliverables": ["E2. Propostas de Captação Submetidas (a versão preliminar da proposta é o principal artefato desta Sprint)"]
          },
          {
            "name": "Sprint 3: Submissão e Negociação",
            "description": "Finalizar, submeter e formalizar o financiamento.",
            "duration": "2-3 meses", 
            "activities": [
              "Realizar a revisão final e obter validações internas",
              "Submeter a proposta na plataforma ou canal oficial",
              "Acompanhar o processo de avaliação, respondendo a diligências",
              "Negociar cláusulas e ajustar o plano de trabalho",
              "Formalizar a parceria com a assinatura de contratos/convênios"
            ],
            "deliverables": ["E2. Propostas de Captação Submetidas (versão final)", "E3. Acordos e Convênios Formalizados"]
          }
        ],
        "teamProfile": "Equipe especializada em: gestão documental e arquivística; especialistas em digitalização; desenvolvedores de sistemas de gestão; especialistas em OCR e processamento de documentos; analistas de metadados.",
        "projectTeam": [
          "Arquivista",
          "Especialista em Digitalização",
          "Desenvolvedor de Sistemas",
          "Especialista em OCR",
          "Analista de Metadados"
        ],
        "successIndicators": [
          "Percentual de acervo digitalizado",
          "Sistema de gestão implementado",
          "Redução no tempo de busca de documentos"
        ]
      },
      "teamProfile": "Equipe especializada em captação de recursos com competências em: gestão de projetos de captação; especialistas em elaboração de propostas para agências de fomento; analistas financeiros para estruturação orçamentária; coordenadores de parcerias para relacionamento institucional; especialistas em negociação e contratos.",
      "projectTeam": [
        "Gestor de Projetos",
        "Especialista em Captação",
        "Analista Financeiro",
        "Coordenadores de Parcerias (5)"
      ],
      "duration": "24 meses (contínuo)",
      "budget": "R$ 2.500.000,00",
      "captationGoal": "R$ 3.000.000,00",
      "teamSize": 8
    },
    {
      "id": "P8",
      "title": "Dimensionamento e planejamento de recursos tecnológicos",
      "description": "Análise e planejamento da infraestrutura tecnológica necessária para implementação de soluções de IA e RPA.",
      "isActive": true,
      "currentPhase": "Fase 0 - Preparação para projeto",
      "dependencies": [
        "P1",
        "P2"
      ],
      "dependentProjects": [
        "P9",
        "P10"
      ],
      "status": "planning",
      "projectManager": "Giovani",
      "teamProfile": "Equipe com competências em: arquitetura de sistemas e infraestrutura tecnológica; especialistas em IA e computação de alto desempenho; analistas de capacidade e performance; especialistas em segurança da informação; gestores de TI e planejamento tecnológico.",
      "projectTeam": [
        "Jefferson Caramori",
        "Samuel Feitosa",
        "Silvia",
        "Volnei",
        "Geancarlo"
      ],
      "priority": "high",
      "icon": "P8",
      "details": {
        "objective": "Desenvolver soluções para automatizar processos jurídicos e administrativos, melhorando eficiência e reduzindo tempo de tramitação.",
        "workPackages": [
          "Análise da infraestrutura atual",
          "Especificação de requisitos técnicos",
          "Planejamento de capacidade",
          "Elaboração de roadmap tecnológico"
        ],
        "sprints": [
          {
            "name": "Fase 0 - Preparação para projeto",
            "description": "Preparação inicial e planejamento do projeto"
          },
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
        ],
        "teamProfile": "Equipe especializada em: análise de processos jurídicos; desenvolvedores de RPA; especialistas em IA para análise de documentos; advogados e juristas; analistas de sistemas administrativos.",
        "projectTeam": [
          "Analista de Processos Jurídicos",
          "Desenvolvedor RPA",
          "Especialista em IA Jurídica",
          "Advogado Consultor",
          "Analista de Sistemas"
        ],
        "successIndicators": [
          "Redução no tempo de tramitação",
          "Automação de processos implementada",
          "Precisão na análise de documentos"
        ]
      },
      "cluster": "Cluster 1 - Institucionalização",
    },
    {
      "id": "P7",
      "title": "Fomento de parcerias e comunidade colaborativa",
      "description": "Projeto de captação de recursos para assegurar a sustentabilidade financeira e o crescimento do Laboratório de Inovação com IA na UFFS.",
      "isActive": true,
      "currentPhase": "C.1 Sprint 1 - Pesquisa e Seleção de Editais",
      "dependencies": [],
      "dependentProjects": [],
      "status": "active",
      "projectManager": "Ocimar",
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
        "objective": "Digitalizar acervos, otimizar a gestão de documentos e integrá-los a sistemas de automação.",
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
            "name": "Fase 0 - Preparação para projeto",
            "description": "Preparação inicial e planejamento do projeto"
          },
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
        ],
        "teamProfile": "Equipe especializada em: gestão documental e arquivística; especialistas em digitalização; desenvolvedores de sistemas de gestão; especialistas em OCR e processamento de documentos; analistas de metadados.",
        "projectTeam": [
          "Arquivista",
          "Especialista em Digitalização",
          "Desenvolvedor de Sistemas",
          "Especialista em OCR",
          "Analista de Metadados"
        ],
        "successIndicators": [
          "Percentual de acervo digitalizado",
          "Sistema de gestão implementado",
          "Redução no tempo de busca de documentos"
        ]
      },
      "cluster": "Cluster 1 - Institucionalização",
    },
    {
      "id": "P9",
      "title": "Instalação e implantação da Infraestrutura de TI",
      "description": "Instalação e implantação da infraestrutura de TI para as diversas fases do projeto conforme definido no projeto P2.",
      "isActive": false,
      "currentPhase": "Aguardando início",
      "dependencies": [],
      "dependentProjects": [],
      "status": "planning",
      "projectManager": "Giovani",
      "priority": "medium",
      "icon": "P9",
      "cluster": "Cluster 2 - Ferramentas e Soluções",
      "details": {
        "objective": "Implementar projetos em pequena escala para testar a viabilidade e eficácia de novas soluções de IA e RPA.",
        "teamProfile": "Equipe de pesquisa e desenvolvimento com: pesquisadores em IA; desenvolvedores experimentais; analistas de viabilidade; especialistas em metodologia científica; gestores de projetos piloto.",
        "projectTeam": [
          "Pesquisador Principal",
          "Desenvolvedor Experimental",
          "Analista de Viabilidade",
          "Metodologista",
          "Gestor de Projetos Piloto"
        ],
        "workPackages": [
          "Seleção de projetos piloto",
          "Desenvolvimento experimental",
          "Testes de viabilidade",
          "Análise de resultados e escalabilidade"
        ],
        "sprints": [
          {
            "name": "Fase 0 - Preparação para projeto",
            "description": "Preparação inicial e planejamento do projeto"
          },
          {
            "name": "Sprint 1 - Seleção",
            "description": "Identificação e seleção de projetos piloto"
          },
          {
            "name": "Sprint 2 - Desenvolvimento",
            "description": "Desenvolvimento experimental das soluções"
          },
          {
            "name": "Sprint 3 - Testes",
            "description": "Execução de testes de viabilidade"
          },
          {
            "name": "Sprint 4 - Análise",
            "description": "Análise de resultados e potencial de escala"
          }
        ],
        "successIndicators": [
          "Projetos piloto executados",
          "Taxa de sucesso dos experimentos",
          "Viabilidade técnica e econômica comprovada"
        ]
      }
    },
    {
      "id": "P10",
      "title": "Pipeline de dados para treinamento dos modelos de IA",
      "description": "Desenvolvimento de pipeline de dados para coleta, processamento e preparação de dados para treinamento de modelos de IA.",
      "isActive": true,
      "currentPhase": "Em andamento",
      "dependencies": [],
      "dependentProjects": [],
      "status": "active",
      "projectManager": "Ocimar",
      "priority": "medium",
      "icon": "P10",
      "cluster": "Cluster 2 - Ferramentas e Soluções",
      "details": {
        "objective": "Organizar eventos, seminários e publicações para disseminar os resultados das pesquisas e avanços tecnológicos.",
        "teamProfile": "Equipe de comunicação científica com: especialistas em divulgação científica; organizadores de eventos; editores e redatores científicos; especialistas em marketing digital; coordenadores de comunicação institucional.",
        "projectTeam": [
          "Coordenador de Divulgação Científica",
          "Organizador de Eventos",
          "Editor Científico",
          "Especialista em Marketing Digital",
          "Comunicador Institucional"
        ],
        "workPackages": [
          "Planejamento de eventos e seminários",
          "Produção de conteúdo científico",
          "Execução de eventos",
          "Publicação e disseminação de resultados"
        ],
        "sprints": [
          {
            "name": "Fase 0 - Preparação para projeto",
            "description": "Preparação inicial e planejamento do projeto"
          },
          {
            "name": "Sprint 1 - Planejamento",
            "description": "Planejamento estratégico de eventos e publicações"
          },
          {
            "name": "Sprint 2 - Produção",
            "description": "Criação de conteúdo e material científico"
          },
          {
            "name": "Sprint 3 - Execução",
            "description": "Realização de eventos e seminários"
          },
          {
            "name": "Sprint 4 - Disseminação",
            "description": "Publicação e divulgação dos resultados"
          }
        ],
        "successIndicators": [
          "Número de eventos realizados",
          "Alcance das publicações",
          "Engajamento da comunidade científica"
        ]
      }
    },
    {
      "id": "P11",
      "title": "Digitalização e gestão documental",
      "description": "Iniciativas para digitalizar acervos, otimizar a gestão de documentos e integrá-los a sistemas de automação.",
      "isActive": false,
      "status": "planning",
      "projectManager": "Gilberto",
      "teamProfile": "Equipe especializada em: gestão documental e arquivística; especialistas em digitalização e preservação digital; desenvolvedores de sistemas de gestão eletrônica; analistas de processos documentais; especialistas em integração de sistemas.",
      "projectTeam": [
        "Especialista em Gestão Documental",
        "Técnico em Digitalização",
        "Desenvolvedor de Sistemas",
        "Analista de Processos",
        "Especialista em Integração"
      ],
      "priority": "medium",
      "icon": "P11",
      "details": {
        "objective": "Digitalizar acervos e otimizar a gestão de documentos integrando-os a sistemas de automação.",
        "workPackages": [
          "Diagnóstico do acervo documental",
          "Planejamento da digitalização",
          "Implementação de sistema de gestão",
          "Integração com sistemas de automação"
        ],
        "sprints": [
          {
            "name": "Fase 0 - Preparação para projeto",
            "description": "Preparação inicial e planejamento do projeto"
          },
          {
            "name": "Fase 1 - Diagnóstico",
            "description": "Análise do acervo documental atual"
          },
          {
            "name": "Fase 2 - Digitalização",
            "description": "Processo de digitalização dos documentos"
          },
          {
            "name": "Fase 3 - Implementação",
            "description": "Implementação do sistema de gestão eletrônica"
          },
          {
            "name": "Fase 4 - Integração",
            "description": "Integração com sistemas de automação"
          }
        ],
        "successIndicators": [
          "Percentual de documentos digitalizados",
          "Sistema de gestão implementado",
          "Integração com automação funcionando"
        ]
      },
      "cluster": "Cluster 2 - Ferramentas e Soluções",
    },
    {
      "id": "P12",
      "title": "Webchat para interação com assistentes virtuais",
      "description": "Desenvolvimento de interface web para interação dos usuários com os diversos assistentes virtuais da instituição.",
      "isActive": true,
      "status": "active",
      "projectManager": "Ocimar",
      "teamProfile": "Equipe de desenvolvimento web com: desenvolvedores front-end especializados em interfaces conversacionais; designers UX/UI para experiência do usuário; especialistas em integração de APIs; desenvolvedores back-end para conectividade; especialistas em acessibilidade web.",
      "projectTeam": [
        "Desenvolvedor Front-end",
        "Designer UX/UI",
        "Especialista em APIs",
        "Desenvolvedor Back-end",
        "Especialista em Acessibilidade"
      ],
      "priority": "medium",
      "icon": "P12",
      "details": {
        "objective": "Desenvolver interface web intuitiva para interação com assistentes virtuais da instituição.",
        "workPackages": [
          "Design da interface conversacional",
          "Desenvolvimento do front-end",
          "Integração com assistentes virtuais",
          "Testes de usabilidade e acessibilidade"
        ],
        "sprints": [
          {
            "name": "Fase 0 - Preparação para projeto",
            "description": "Preparação inicial e planejamento do projeto"
          },
          {
            "name": "Fase 1 - Design",
            "description": "Criação do design e prototipagem da interface"
          },
          {
            "name": "Fase 2 - Desenvolvimento",
            "description": "Desenvolvimento da interface web"
          },
          {
            "name": "Fase 3 - Integração",
            "description": "Integração com os assistentes virtuais"
          },
          {
            "name": "Fase 4 - Testes",
            "description": "Testes de usabilidade e acessibilidade"
          }
        ],
        "successIndicators": [
          "Interface web funcional",
          "Integração com assistentes implementada",
          "Testes de usabilidade aprovados"
        ]
      },
      "cluster": "Cluster 2 - Ferramentas e Soluções",
    },
    {
      "id": "P13",
      "title": "Assistente virtual para regras de negócio e regulamentos",
      "description": "Assistente virtual para atender usuários sobre regras de negócio, regulamentos e demais documentações estáticas.",
      "isActive": true,
      "status": "active",
      "projectManager": "Ocimar",
      "teamProfile": "Equipe especializada em: processamento de linguagem natural; especialistas em análise de documentos jurídicos e regulamentares; desenvolvedores de chatbots e assistentes virtuais; analistas de conhecimento para estruturação de bases de dados; especialistas em compliance e regulamentação.",
      "projectTeam": [
        "Especialista em NLP",
        "Analista Jurídico/Regulamentar",
        "Desenvolvedor de Chatbots",
        "Analista de Conhecimento",
        "Especialista em Compliance"
      ],
      "priority": "medium",
      "icon": "P13",
      "details": {
        "objective": "Desenvolver assistente virtual para consultas sobre regras de negócio e regulamentos institucionais.",
        "workPackages": [
          "Mapeamento de regulamentos e regras",
          "Estruturação da base de conhecimento",
          "Desenvolvimento do assistente virtual",
          "Treinamento e validação do modelo"
        ],
        "sprints": [
          {
            "name": "Fase 0 - Preparação para projeto",
            "description": "Preparação inicial e planejamento do projeto"
          },
          {
            "name": "Fase 1 - Mapeamento",
            "description": "Levantamento e análise de regulamentos"
          },
          {
            "name": "Fase 2 - Estruturação",
            "description": "Organização da base de conhecimento"
          },
          {
            "name": "Fase 3 - Desenvolvimento",
            "description": "Criação do assistente virtual"
          },
          {
            "name": "Fase 4 - Validação",
            "description": "Testes e ajustes do modelo"
          }
        ],
        "successIndicators": [
          "Base de conhecimento estruturada",
          "Assistente virtual funcional",
          "Taxa de acerto nas consultas"
        ]
      },
      "cluster": "Cluster 2 - Ferramentas e Soluções",
    },
    {
      "id": "P14",
      "title": "Assistente virtual departamentalizado",
      "description": "Assistente virtual para atender usuários sobre informações de unidades específicas com produção generativa a partir das bases de dados institucionais.",
      "isActive": true,
      "status": "active",
      "projectManager": "Ocimar",
      "teamProfile": "Equipe multidisciplinar com: especialistas em integração de dados institucionais; desenvolvedores de IA generativa; analistas de sistemas departamentais; especialistas em personalização de assistentes virtuais; representantes das unidades acadêmicas.",
      "projectTeam": [
        "Especialista em Integração de Dados",
        "Desenvolvedor de IA Generativa",
        "Analista de Sistemas",
        "Especialista em Personalização",
        "Representante das Unidades"
      ],
      "priority": "medium",
      "icon": "P14",
      "details": {
        "objective": "Criar assistentes virtuais personalizados para cada unidade com acesso a dados específicos.",
        "workPackages": [
          "Mapeamento de dados departamentais",
          "Desenvolvimento de módulos personalizados",
          "Integração com bases de dados",
          "Treinamento departamental"
        ],
        "sprints": [
          {
            "name": "Fase 0 - Preparação para projeto",
            "description": "Preparação inicial e planejamento do projeto"
          },
          {
            "name": "Fase 1 - Mapeamento",
            "description": "Análise de dados e necessidades departamentais"
          },
          {
            "name": "Fase 2 - Desenvolvimento",
            "description": "Criação dos módulos personalizados"
          },
          {
            "name": "Fase 3 - Integração",
            "description": "Conexão com bases de dados institucionais"
          },
          {
            "name": "Fase 4 - Implantação",
            "description": "Treinamento e implantação departamental"
          }
        ],
        "successIndicators": [
          "Assistentes departamentais funcionais",
          "Integração com dados implementada",
          "Satisfação dos usuários departamentais"
        ]
      },
      "cluster": "Cluster 2 - Ferramentas e Soluções",
    },
    {
      "id": "P15",
      "title": "Assistente virtual para produção generativa de documentos",
      "description": "Assistente virtual especializado na produção generativa de documentos e processos institucionais.",
      "isActive": false,
      "status": "planning",
      "projectManager": "Ocimar",
      "teamProfile": "Equipe especializada em: geração automática de documentos; especialistas em templates e modelos documentais; desenvolvedores de IA generativa para texto; analistas de processos institucionais; especialistas em padronização documental.",
      "projectTeam": [
        "Especialista em Geração de Documentos",
        "Analista de Templates",
        "Desenvolvedor de IA Generativa",
        "Analista de Processos",
        "Especialista em Padronização"
      ],
      "priority": "medium",
      "icon": "P15",
      "details": {
        "objective": "Desenvolver assistente para geração automática de documentos institucionais padronizados.",
        "workPackages": [
          "Análise de tipos documentais",
          "Criação de templates inteligentes",
          "Desenvolvimento do gerador",
          "Validação e padronização"
        ],
        "sprints": [
          {
            "name": "Fase 0 - Preparação para projeto",
            "description": "Preparação inicial e planejamento do projeto"
          },
          {
            "name": "Fase 1 - Análise",
            "description": "Mapeamento de tipos e padrões documentais"
          },
          {
            "name": "Fase 2 - Templates",
            "description": "Criação de templates inteligentes"
          },
          {
            "name": "Fase 3 - Desenvolvimento",
            "description": "Implementação do gerador automático"
          },
          {
            "name": "Fase 4 - Validação",
            "description": "Testes e padronização dos documentos"
          }
        ],
        "successIndicators": [
          "Templates documentais criados",
          "Gerador automático funcional",
          "Documentos padronizados produzidos"
        ]
      },
      "cluster": "Cluster 2 - Ferramentas e Soluções",
    },
    {
      "id": "P16",
      "title": "Agentes computacionais",
      "description": "Desenvolvimento de agentes computacionais autônomos para execução de tarefas complexas e tomada de decisões automatizadas.",
      "isActive": false,
      "status": "planning",
      "projectManager": "Ocimar",
      "teamProfile": "Equipe avançada em: inteligência artificial e machine learning; especialistas em sistemas autônomos; desenvolvedores de algoritmos de decisão; especialistas em automação de processos; analistas de segurança para sistemas autônomos.",
      "projectTeam": [
        "Especialista em IA/ML",
        "Desenvolvedor de Sistemas Autônomos",
        "Especialista em Algoritmos",
        "Especialista em Automação",
        "Analista de Segurança"
      ],
      "priority": "medium",
      "icon": "P16",
      "details": {
        "objective": "Criar agentes computacionais autônomos para execução de tarefas complexas e tomada de decisões.",
        "workPackages": [
          "Design de arquitetura de agentes",
          "Desenvolvimento de algoritmos de decisão",
          "Implementação de sistemas autônomos",
          "Testes de segurança e confiabilidade"
        ],
        "sprints": [
          {
            "name": "Fase 0 - Preparação para projeto",
            "description": "Preparação inicial e planejamento do projeto"
          },
          {
            "name": "Fase 1 - Arquitetura",
            "description": "Design da arquitetura dos agentes"
          },
          {
            "name": "Fase 2 - Algoritmos",
            "description": "Desenvolvimento de algoritmos de decisão"
          },
          {
            "name": "Fase 3 - Implementação",
            "description": "Criação dos sistemas autônomos"
          },
          {
            "name": "Fase 4 - Validação",
            "description": "Testes de segurança e confiabilidade"
          }
        ],
        "successIndicators": [
          "Agentes autônomos funcionais",
          "Algoritmos de decisão validados",
          "Segurança dos sistemas garantida"
        ]
      },
      "cluster": "Cluster 2 - Ferramentas e Soluções",
    },
    {
      "id": "P17",
      "title": "Plataforma de Dados Institucionais (API.Dados)",
      "description": "Desenvolvimento de plataforma centralizada para acesso e integração de dados institucionais através de APIs padronizadas.",
      "isActive": true,
      "status": "active",
      "projectManager": "Ocimar",
      "teamProfile": "Equipe de integração de dados com: arquitetos de dados e APIs; desenvolvedores back-end especializados em integração; especialistas em segurança de dados; analistas de sistemas institucionais; especialistas em governança de dados.",
      "projectTeam": [
        "Arquiteto de Dados",
        "Desenvolvedor Back-end",
        "Especialista em Segurança",
        "Analista de Sistemas",
        "Especialista em Governança"
      ],
      "priority": "medium",
      "icon": "P17",
      "details": {
        "objective": "Criar plataforma centralizada para acesso padronizado aos dados institucionais via APIs.",
        "workPackages": [
          "Mapeamento de fontes de dados",
          "Desenvolvimento de APIs padronizadas",
          "Implementação de segurança e governança",
          "Documentação e treinamento"
        ],
        "sprints": [
          {
            "name": "Fase 0 - Preparação para projeto",
            "description": "Preparação inicial e planejamento do projeto"
          },
          {
            "name": "Fase 1 - Mapeamento",
            "description": "Identificação e catalogação de fontes de dados"
          },
          {
            "name": "Fase 2 - Desenvolvimento",
            "description": "Criação das APIs padronizadas"
          },
          {
            "name": "Fase 3 - Segurança",
            "description": "Implementação de controles de segurança"
          },
          {
            "name": "Fase 4 - Implantação",
            "description": "Documentação e treinamento dos usuários"
          }
        ],
        "successIndicators": [
          "APIs funcionais implementadas",
          "Segurança de dados garantida",
          "Documentação completa disponível"
        ]
      },
      "cluster": "Cluster 2 - Ferramentas e Soluções",
    },
    {
      "id": "P18",
      "title": "Ferramenta de Business Analytics",
      "description": "Desenvolvimento de ferramenta de Business Analytics para fornecer insights e análises de dados aos usuários.",
      "isActive": true,
      "status": "active",
      "projectManager": "Dalton",
      "teamProfile": "Equipe de analytics com: especialistas em business intelligence; desenvolvedores de dashboards e visualizações; analistas de dados e estatísticos; especialistas em data mining; desenvolvedores de ferramentas de relatórios.",
      "projectTeam": [
        "Especialista em BI",
        "Desenvolvedor de Dashboards",
        "Analista de Dados",
        "Especialista em Data Mining",
        "Desenvolvedor de Relatórios"
      ],
      "priority": "medium",
      "icon": "P18",
      "details": {
        "objective": "Desenvolver ferramenta de Business Analytics para insights e análises de dados institucionais.",
        "workPackages": [
          "Análise de requisitos de negócio",
          "Desenvolvimento de dashboards",
          "Implementação de algoritmos de análise",
          "Treinamento e capacitação"
        ],
        "sprints": [
          {
            "name": "Fase 0 - Preparação para projeto",
            "description": "Preparação inicial e planejamento do projeto"
          },
          {
            "name": "Fase 1 - Requisitos",
            "description": "Levantamento de necessidades de análise"
          },
          {
            "name": "Fase 2 - Dashboards",
            "description": "Criação de painéis e visualizações"
          },
          {
            "name": "Fase 3 - Algoritmos",
            "description": "Implementação de análises avançadas"
          },
          {
            "name": "Fase 4 - Capacitação",
            "description": "Treinamento dos usuários finais"
          }
        ],
        "successIndicators": [
          "Dashboards funcionais criados",
          "Algoritmos de análise implementados",
          "Usuários capacitados para uso"
        ]
      },
      "cluster": "Cluster 2 - Ferramentas e Soluções",
    },
    {
      "id": "P19",
      "title": "Protokols.bot",
      "description": "Ferramenta de automatização de processos, geração de documentos e operações no sistema de protocolo.",
      "isActive": true,
      "status": "active",
      "projectManager": "Ocimar",
      "teamProfile": "Equipe de automação com: especialistas em RPA e automação de processos; desenvolvedores de bots e scripts; analistas de processos de protocolo; especialistas em integração de sistemas; analistas de documentos e workflows.",
      "projectTeam": [
        "Especialista em RPA",
        "Desenvolvedor de Bots",
        "Analista de Processos",
        "Especialista em Integração",
        "Analista de Workflows"
      ],
      "priority": "medium",
      "icon": "P19",
      "details": {
        "objective": "Automatizar processos de protocolo, geração de documentos e operações do sistema.",
        "workPackages": [
          "Mapeamento de processos de protocolo",
          "Desenvolvimento de automações",
          "Integração com sistema de protocolo",
          "Testes e validação"
        ],
        "sprints": [
          {
            "name": "Fase 0 - Preparação para projeto",
            "description": "Preparação inicial e planejamento do projeto"
          },
          {
            "name": "Fase 1 - Mapeamento",
            "description": "Análise dos processos de protocolo"
          },
          {
            "name": "Fase 2 - Desenvolvimento",
            "description": "Criação das automações e bots"
          },
          {
            "name": "Fase 3 - Integração",
            "description": "Conexão com sistema de protocolo"
          },
          {
            "name": "Fase 4 - Validação",
            "description": "Testes e ajustes finais"
          }
        ],
        "successIndicators": [
          "Processos automatizados funcionais",
          "Integração com protocolo implementada",
          "Redução no tempo de processamento"
        ]
      },
      "cluster": "Cluster 2 - Ferramentas e Soluções",
    },
    {
      "id": "P20",
      "title": "Integrador Compras-Contratos-Financeiro",
      "description": "Automatização dos fluxos de planejamento de compras, requisições, licitações, empenhos, liquidação e gestão de contratos, integrando SIPAC e sistemas de governo.",
      "isActive": true,
      "status": "active",
      "projectManager": "Ocimar",
      "teamProfile": "Equipe de integração financeira com: especialistas em processos de compras e contratos; desenvolvedores de integração de sistemas; analistas financeiros e orçamentários; especialistas em SIPAC e sistemas governamentais; analistas de compliance e auditoria.",
      "projectTeam": [
        "Especialista em Compras/Contratos",
        "Desenvolvedor de Integração",
        "Analista Financeiro",
        "Especialista em SIPAC",
        "Analista de Compliance"
      ],
      "priority": "medium",
      "icon": "P20",
      "details": {
        "objective": "Automatizar e integrar fluxos de compras, contratos e financeiro com SIPAC e sistemas governamentais.",
        "workPackages": [
          "Mapeamento de fluxos financeiros",
          "Desenvolvimento de integrações",
          "Automatização de processos",
          "Validação e compliance"
        ],
        "sprints": [
          {
            "name": "Fase 0 - Preparação para projeto",
            "description": "Preparação inicial e planejamento do projeto"
          },
          {
            "name": "Fase 1 - Mapeamento",
            "description": "Análise dos fluxos de compras e contratos"
          },
          {
            "name": "Fase 2 - Integração",
            "description": "Desenvolvimento das integrações"
          },
          {
            "name": "Fase 3 - Automação",
            "description": "Implementação das automações"
          },
          {
            "name": "Fase 4 - Compliance",
            "description": "Validação e adequação regulatória"
          }
        ],
        "successIndicators": [
          "Fluxos integrados funcionais",
          "Automações implementadas",
          "Compliance regulatório atendido"
        ]
      },
      "cluster": "Cluster 2 - Ferramentas e Soluções",
    },
    {
      "id": "P21",
      "title": "Administrativo.bot",
      "description": "Automatização de processos complexos e/ou incompletos nos sistemas SIGAdmin, SIPAC e SIGRH.",
      "isActive": true,
      "status": "active",
      "projectManager": "Ocimar",
      "teamProfile": "Equipe de automação administrativa com: especialistas em RPA para sistemas administrativos; desenvolvedores de automação para SIGAdmin, SIPAC e SIGRH; analistas de processos administrativos; especialistas em integração de sistemas; analistas de compliance e auditoria.",
      "projectTeam": [
        "Especialista em RPA Administrativo",
        "Desenvolvedor de Automação",
        "Analista de Processos",
        "Especialista em Integração",
        "Analista de Compliance"
      ],
      "priority": "medium",
      "icon": "P21",
      "details": {
        "objective": "Automatizar processos complexos nos sistemas SIGAdmin, SIPAC e SIGRH.",
        "workPackages": [
          "Mapeamento de processos administrativos",
          "Desenvolvimento de automações",
          "Integração entre sistemas",
          "Testes e validação"
        ],
        "sprints": [
          {
            "name": "Fase 0 - Preparação para projeto",
            "description": "Preparação inicial e planejamento do projeto"
          },
          {
            "name": "Fase 1 - Mapeamento",
            "description": "Análise dos processos administrativos"
          },
          {
            "name": "Fase 2 - Desenvolvimento",
            "description": "Criação das automações"
          },
          {
            "name": "Fase 3 - Integração",
            "description": "Conexão entre sistemas"
          },
          {
            "name": "Fase 4 - Validação",
            "description": "Testes e ajustes finais"
          }
        ],
        "successIndicators": [
          "Processos automatizados funcionais",
          "Integração entre sistemas implementada",
          "Redução no tempo de processamento"
        ]
      },
      "cluster": "Cluster 2 - Ferramentas e Soluções",
    },
    {
      "id": "P22",
      "title": "Acadêmico.bot",
      "description": "Automatização de processos complexos e/ou incompletos no sistema SIGAA e seus orbitais.",
      "isActive": true,
      "status": "active",
      "projectManager": "Ocimar",
      "teamProfile": "Equipe de automação acadêmica com: especialistas em RPA para sistemas acadêmicos; desenvolvedores de automação para SIGAA; analistas de processos acadêmicos; especialistas em integração de sistemas orbitais; analistas de dados acadêmicos.",
      "projectTeam": [
        "Especialista em RPA Acadêmico",
        "Desenvolvedor SIGAA",
        "Analista de Processos Acadêmicos",
        "Especialista em Sistemas Orbitais",
        "Analista de Dados Acadêmicos"
      ],
      "priority": "medium",
      "icon": "P22",
      "details": {
        "objective": "Automatizar processos complexos no sistema SIGAA e seus orbitais.",
        "workPackages": [
          "Mapeamento de processos acadêmicos",
          "Desenvolvimento de automações SIGAA",
          "Integração com sistemas orbitais",
          "Testes e validação acadêmica"
        ],
        "sprints": [
          {
            "name": "Fase 0 - Preparação para projeto",
            "description": "Preparação inicial e planejamento do projeto"
          },
          {
            "name": "Fase 1 - Mapeamento",
            "description": "Análise dos processos acadêmicos"
          },
          {
            "name": "Fase 2 - Desenvolvimento",
            "description": "Criação das automações SIGAA"
          },
          {
            "name": "Fase 3 - Integração",
            "description": "Conexão com sistemas orbitais"
          },
          {
            "name": "Fase 4 - Validação",
            "description": "Testes e ajustes acadêmicos"
          }
        ],
        "successIndicators": [
          "Processos acadêmicos automatizados",
          "Integração com orbitais implementada",
          "Melhoria na gestão acadêmica"
        ]
      },
      "cluster": "Cluster 2 - Ferramentas e Soluções",
    },
    {
      "id": "P23",
      "title": "Automatização do AFD",
      "description": "Automatização do Assentamento Digital Funcional a partir dos documentos produzidos pelos diversos sistemas internos e de governo.",
      "isActive": true,
      "status": "active",
      "projectManager": "Gilberto",
      "teamProfile": "Equipe de automação de RH com: especialistas em gestão de recursos humanos; desenvolvedores de automação documental; analistas de assentamento funcional; especialistas em integração com sistemas governamentais; analistas de compliance trabalhista.",
      "projectTeam": [
        "Especialista em RH",
        "Desenvolvedor de Automação Documental",
        "Analista de Assentamento",
        "Especialista em Sistemas Governamentais",
        "Analista de Compliance Trabalhista"
      ],
      "priority": "medium",
      "icon": "P23",
      "details": {
        "objective": "Automatizar o Assentamento Digital Funcional a partir de documentos de sistemas internos e governamentais.",
        "workPackages": [
          "Mapeamento de documentos funcionais",
          "Desenvolvimento de automação AFD",
          "Integração com sistemas governamentais",
          "Validação e compliance"
        ],
        "sprints": [
          {
            "name": "Fase 0 - Preparação para projeto",
            "description": "Preparação inicial e planejamento do projeto"
          },
          {
            "name": "Fase 1 - Mapeamento",
            "description": "Análise dos documentos funcionais"
          },
          {
            "name": "Fase 2 - Desenvolvimento",
            "description": "Criação da automação AFD"
          },
          {
            "name": "Fase 3 - Integração",
            "description": "Conexão com sistemas governamentais"
          },
          {
            "name": "Fase 4 - Compliance",
            "description": "Validação e adequação legal"
          }
        ],
        "successIndicators": [
          "AFD automatizado funcional",
          "Integração com sistemas governamentais",
          "Compliance trabalhista atendido"
        ]
      },
      "cluster": "Cluster 2 - Ferramentas e Soluções",
    },
    {
      "id": "P24",
      "title": "Automatização do SIAPE/SIGEPE",
      "description": "Automatização de processos e integrações com os sistemas SIAPE e SIGEPE para gestão de recursos humanos.",
      "isActive": false,
      "status": "planning",
      "projectManager": "Ocimar",
      "teamProfile": "Equipe de automação SIAPE/SIGEPE com: especialistas em sistemas SIAPE e SIGEPE; desenvolvedores de automação governamental; analistas de folha de pagamento; especialistas em integração de sistemas federais; analistas de compliance público.",
      "projectTeam": [
        "Especialista em SIAPE/SIGEPE",
        "Desenvolvedor de Automação Governamental",
        "Analista de Folha de Pagamento",
        "Especialista em Sistemas Federais",
        "Analista de Compliance Público"
      ],
      "priority": "medium",
      "icon": "P24",
      "details": {
        "objective": "Automatizar processos e integrações com sistemas SIAPE e SIGEPE para gestão de RH.",
        "workPackages": [
          "Mapeamento de processos SIAPE/SIGEPE",
          "Desenvolvimento de automações",
          "Integração com sistemas federais",
          "Validação e compliance público"
        ],
        "sprints": [
          {
            "name": "Fase 0 - Preparação para projeto",
            "description": "Preparação inicial e planejamento do projeto"
          },
          {
            "name": "Fase 1 - Mapeamento",
            "description": "Análise dos processos SIAPE/SIGEPE"
          },
          {
            "name": "Fase 2 - Desenvolvimento",
            "description": "Criação das automações"
          },
          {
            "name": "Fase 3 - Integração",
            "description": "Conexão com sistemas federais"
          },
          {
            "name": "Fase 4 - Compliance",
            "description": "Validação e adequação pública"
          }
        ],
        "successIndicators": [
          "Processos SIAPE/SIGEPE automatizados",
          "Integração com sistemas federais",
          "Compliance público atendido"
        ]
      },
      "cluster": "Cluster 2 - Ferramentas e Soluções",
    },
    {
      "id": "P25",
      "title": "Projetos piloto e experimentação",
      "description": "Implementação de projetos em pequena escala para testar a viabilidade e eficácia de novas soluções de IA e RPA.",
      "isActive": false,
      "status": "planning",
      "projectManager": "Gilberto",
      "teamProfile": "Equipe de pesquisa e experimentação com: pesquisadores em IA e RPA; desenvolvedores de protótipos; analistas de viabilidade; especialistas em metodologias ágeis; analistas de resultados e métricas.",
      "projectTeam": [
        "Pesquisador em IA/RPA",
        "Desenvolvedor de Protótipos",
        "Analista de Viabilidade",
        "Especialista em Metodologias Ágeis",
        "Analista de Métricas"
      ],
      "priority": "medium",
      "icon": "P25",
      "details": {
        "objective": "Implementar projetos piloto para testar viabilidade de novas soluções de IA e RPA.",
        "workPackages": [
          "Seleção de projetos piloto",
          "Desenvolvimento de protótipos",
          "Testes de viabilidade",
          "Análise de resultados"
        ],
        "sprints": [
          {
            "name": "Fase 0 - Preparação para projeto",
            "description": "Preparação inicial e planejamento do projeto"
          },
          {
            "name": "Fase 1 - Seleção",
            "description": "Escolha dos projetos piloto"
          },
          {
            "name": "Fase 2 - Prototipagem",
            "description": "Desenvolvimento de protótipos"
          },
          {
            "name": "Fase 3 - Testes",
            "description": "Execução de testes de viabilidade"
          },
          {
            "name": "Fase 4 - Análise",
            "description": "Avaliação de resultados e métricas"
          }
        ],
        "successIndicators": [
          "Protótipos funcionais desenvolvidos",
          "Testes de viabilidade realizados",
          "Relatórios de análise produzidos"
        ]
      },
      "cluster": "Cluster 3 - Pesquisa e Inovação",
    },
    {
      "id": "P26",
      "title": "Divulgação científica e eventos",
      "description": "Organização de eventos, seminários e publicações para disseminar os resultados das pesquisas e avanços tecnológicos.",
      "isActive": false,
      "status": "planning",
      "projectManager": "Maico",
      "teamProfile": "Equipe de divulgação científica com: especialistas em comunicação científica; organizadores de eventos acadêmicos; editores e redatores científicos; especialistas em marketing digital; analistas de impacto e métricas.",
      "projectTeam": [
        "Especialista em Comunicação Científica",
        "Organizador de Eventos",
        "Editor Científico",
        "Especialista em Marketing Digital",
        "Analista de Impacto"
      ],
      "priority": "medium",
      "icon": "P26",
      "details": {
        "objective": "Organizar eventos e publicações para disseminar resultados de pesquisas e avanços tecnológicos.",
        "workPackages": [
          "Planejamento de eventos",
          "Produção de conteúdo científico",
          "Organização de seminários",
          "Análise de impacto"
        ],
        "sprints": [
          {
            "name": "Fase 0 - Preparação para projeto",
            "description": "Preparação inicial e planejamento do projeto"
          },
          {
            "name": "Fase 1 - Planejamento",
            "description": "Organização de eventos e conteúdos"
          },
          {
            "name": "Fase 2 - Produção",
            "description": "Criação de materiais e conteúdos"
          },
          {
            "name": "Fase 3 - Execução",
            "description": "Realização de eventos e publicações"
          },
          {
            "name": "Fase 4 - Avaliação",
            "description": "Análise de impacto e resultados"
          }
        ],
        "successIndicators": [
          "Eventos realizados com sucesso",
          "Publicações científicas produzidas",
          "Impacto na comunidade científica"
        ]
      },
      "cluster": "Cluster 3 - Pesquisa e Inovação",
    },
    {
      "id": "P27",
      "title": "Prospecção, Análise, Testes e Definição das Ferramentas de Trabalho",
      "description": "Pesquisa, avaliação e definição das melhores ferramentas e tecnologias para implementação de IA e RPA na UFFS, incluindo análise de viabilidade técnica e econômica.",
      "isActive": true,
      "status": "active",
      "currentPhase": "Fase 0 - Preparação para projeto",
      "projectManager": "João Victor",
      "dependencies": [],
      "dependentProjects": [],
      "teamProfile": "Equipe de pesquisa e análise tecnológica com: especialistas em avaliação de tecnologias; analistas de viabilidade técnica e econômica; pesquisadores em IA e RPA; especialistas em arquitetura de sistemas; analistas de mercado e fornecedores.",
      "projectTeam": [
        "Especialista em Avaliação de Tecnologias",
        "Analista de Viabilidade Técnica",
        "Pesquisador em IA/RPA",
        "Especialista em Arquitetura de Sistemas",
        "Analista de Mercado"
      ],
      "priority": "medium",
      "icon": "P27",
      "details": {
        "objective": "Identificar, avaliar e definir as melhores ferramentas e tecnologias para implementação eficaz de IA e RPA na UFFS.",
        "workPackages": [
          "Prospecção de ferramentas e tecnologias",
          "Análise comparativa de soluções",
          "Testes de viabilidade técnica",
          "Definição do stack tecnológico"
        ],
        "sprints": [
          {
            "name": "Fase 0 - Preparação para projeto",
            "description": "Preparação inicial e planejamento do projeto"
          },
          {
            "name": "Fase 1 - Prospecção",
            "description": "Levantamento de ferramentas e tecnologias disponíveis"
          },
          {
            "name": "Fase 2 - Análise",
            "description": "Avaliação comparativa das soluções"
          },
          {
            "name": "Fase 3 - Testes",
            "description": "Execução de testes de viabilidade"
          },
          {
            "name": "Fase 4 - Definição",
            "description": "Seleção e definição do stack tecnológico"
          }
        ],
        "successIndicators": [
          "Catálogo de ferramentas avaliadas",
          "Relatórios de viabilidade técnica",
          "Stack tecnológico definido e aprovado"
        ]
      },
      "cluster": "Cluster 3 - Pesquisa e Inovação"
    },
    {
      "id": "P28",
      "title": "Aquisições, Contratações, Convênios e Acordos",
      "description": "Este projeto funciona como o núcleo operacional e administrativo para todo o ecossistema de inovação da UFFS, sendo responsável por executar todos os trâmites burocráticos, legais e financeiros necessários para viabilizar as entregas dos outros 28 projetos.",
      "escopo": "O escopo deste projeto é gerenciar e executar ponta a ponta o ciclo de vida de todas as demandas administrativas e legais geradas pelos 29 projetos do portfólio. Isso inclui a responsabilidade de conduzir os processos licitatórios para a aquisição de equipamentos e licenças de software, gerenciar a contratação de serviços de terceiros e de pessoal (bolsistas), e elaborar, negociar e formalizar todos os convênios, acordos de cooperação técnica e termos de parceria com outras instituições. O projeto atua como um facilitador central, traduzindo as necessidades técnicas dos projetos em processos administrativos formais e garantindo a conformidade com a legislação vigente.",
      "naoEscopo": "Definição da Necessidade Técnica: O projeto não define o que comprar ou contratar. Ele recebe a especificação técnica (o 'Termo de Referência') dos projetos demandantes e a transforma em um processo de compra/contratação. Captação de Recursos: A busca por recursos financeiros é responsabilidade do projeto P6. Este projeto atua após a garantia do recurso, para poder executá-lo. Gestão dos Contratos Pós-Assinatura: O acompanhamento da execução do serviço ou o uso do bem adquirido (a 'fiscalização do contrato') permanece sob a responsabilidade do projeto que originou a demanda.",
      "isActive": true,
      "currentPhase": "A Planejar",
      "dependencies": [
        "P6"
      ],
      "dependentProjects": [
        "P1", "P2", "P3", "P4", "P5", "P7", "P8", "P9", "P10", "P11", "P12", "P13", "P14", "P15", "P16", "P17", "P18", "P19", "P20", "P21", "P22", "P23", "P24", "P25", "P26", "P27", "P29"
      ],
      "status": "planning",
      "projectManager": "Volnei",
      "teamProfile": "Equipe multidisciplinar com profundo conhecimento dos processos administrativos, licitatórios e jurídicos do setor público, com competências em: pregões e licitações; gestão de contratos; elaboração de termos de referência; direito administrativo; formalização de convênios e acordos de cooperação técnica.",
      "projectTeam": [
        "Volnei (Gerente de Projetos)",
        "Especialista em Licitações e Contratos (Pregoeiro)",
        "Analista de Compras e Aquisições",
        "Assessor Jurídico (Especialista em Convênios e Acordos)",
        "Analista de Tecnologia da Informação",
        "Docente do CCC especialista em IA",
        "Assistente Administrativo (Apoio Operacional)"
      ],
      "priority": "critical",
      "icon": "P28",
      "details": {
        "objective": "Centralizar e executar com agilidade e conformidade todos os processos de aquisição de bens, contratação de serviços, formalização de convênios e celebração de acordos, garantindo que os projetos do portfólio de inovação tenham os recursos materiais e humanos necessários para operar sem impedimentos burocráticos.",
        "workPackages": [
          "E1. Processos Licitatórios Concluídos: Editais de licitação publicados, pregões realizados e atas de registro de preços finalizadas.",
          "E2. Contratos e Atas de Empenho Assinadas: Todos os instrumentos contratuais para serviços, pessoal (bolsistas) e aquisições devidamente formalizados e assinados.",
          "E3. Convênios e Acordos de Cooperação Vigentes: Os documentos que formalizam parcerias com outras instituições (públicas ou privadas) assinados e publicados.",
          "E4. Catálogo de Fornecedores e Parceiros Qualificados: Uma base de dados de empresas e instituições com histórico de fornecimento e parceria, para agilizar futuros processos."
        ],
        "sprints": [
          {
            "name": "Sprint 1: Análise e Preparação da Demanda (1-2 semanas)",
            "description": "Receber e validar as necessidades dos outros projetos. Atividades: Receber e analisar os Termos de Referência e especificações técnicas; Verificar a disponibilidade orçamentária junto ao projeto demandante; Definir a modalidade de contratação/aquisição (licitação, dispensa, etc.); Elaborar a minuta do edital ou do contrato/convênio."
          },
          {
            "name": "Sprint 2: Execução do Processo (2-4 semanas)",
            "description": "Conduzir o processo administrativo no sistema público. Atividades: Publicar o edital de licitação; Conduzir o pregão e a fase de lances; Realizar cotações de preços para dispensas de licitação; Enviar minutas de convênios para análise das partes envolvidas."
          },
          {
            "name": "Sprint 3: Formalização e Contratualização (1-2 semanas)",
            "description": "Concluir o processo e oficializar a relação jurídica. Atividades: Adjudicar e homologar o resultado da licitação; Elaborar e coletar as assinaturas do contrato ou termo de convênio; Emitir a nota de empenho; Comunicar o projeto demandante que o recurso está pronto para ser utilizado."
          }
        ],
        "teamProfile": "Equipe multidisciplinar com profundo conhecimento dos processos administrativos, licitatórios e jurídicos do setor público, com competências em: pregões e licitações; gestão de contratos; elaboração de termos de referência; direito administrativo; formalização de convênios e acordos de cooperação técnica.",
        "projectTeam": [
          "Volnei (Gerente de Projetos)",
          "Especialista em Licitações e Contratos (Pregoeiro)",
          "Analista de Compras e Aquisições",
          "Assessor Jurídico (Especialista em Convênios e Acordos)",
          "Assistente Administrativo (Apoio Operacional)"
        ],
        "successIndicators": [
          "100% dos processos licitatórios concluídos dentro do prazo",
          "Conformidade legal de todos os contratos e convênios",
          "Redução do tempo médio de tramitação administrativa",
          "Base de fornecedores qualificados estabelecida"
        ]
      },
      "cluster": "Cluster 2 - Ferramentas e Soluções"
    },
    {
      "id": "P29",
      "title": "Plataforma de Colaboração e Software Livre",
      "description": "Projeto responsável por criar e gerenciar um ambiente digital aberto e colaborativo, baseado em princípios de software livre. A plataforma servirá como um repositório central para as soluções de código-fonte desenvolvidas no âmbito do portfólio de inovação da UFFS, permitindo que outras instituições de ensino, desenvolvedores e a comunidade em geral possam utilizar, contribuir e evoluir essas ferramentas de forma estruturada e governada.",
      "isActive": true,
      "status": "planning",
      "currentPhase": "A Planejar",
      "projectManager": "Dalton",
      "dependencies": ["P28"],
      "dependentProjects": ["P6"],
      "teamProfile": "Equipe técnica com forte experiência em ecossistemas de software livre, DevOps e gestão de comunidades. Competências em: arquitetura de sistemas distribuídos; ferramentas de controle de versão (Git); automação de integração e entrega contínua (CI/CD); gestão de fóruns e canais de comunicação; e documentação técnica.",
      "projectTeam": [
        "Gerente de Projeto / Produto",
        "Arquiteto de Soluções / DevOps Sênior",
        "Engenheiro de Software (Full-Stack)",
        "Community Manager / Tech Writer"
      ],
      "priority": "high",
      "icon": "P29",
      "details": {
        "objective": "Implantar uma plataforma de software livre para fomentar uma comunidade ativa de colaboradores em torno das soluções tecnológicas da UFFS, estabelecendo um modelo de governança claro para a gestão de contribuições, a priorização de novas funcionalidades (demandas) e a distribuição de versões estáveis, visando acelerar a inovação e maximizar o impacto público dos projetos.",
        "workPackages": [
          "Plataforma de Colaboração Implantada",
          "Documento de Governança da Comunidade",
          "Sistema de Gestão de Demandas (Feature Voting)",
          "Documentação para Desenvolvedores e Contribuintes"
        ],
        "sprints": [
          {
            "name": "Sprint 1: Definição e Arquitetura (Mês 1)",
            "description": "Planejar a fundação da plataforma. Escolher a pilha de tecnologia, desenhar a arquitetura da infraestrutura, elaborar o rascunho do documento de governança e definir os requisitos para o sistema de gestão de demandas."
          },
          {
            "name": "Sprint 2: Implementação do Core da Plataforma (Mês 2-3)",
            "description": "Construir o ambiente básico e essencial. Instalar e configurar a ferramenta de repositório de código, configurar os pipelines de CI/CD básicos, implantar a primeira versão do sistema de gestão de demandas e publicar a primeira versão do documento de governança."
          },
          {
            "name": "Sprint 3: Onboarding e Lançamento (Mês 4)",
            "description": "Trazer os primeiros projetos para a plataforma e lançá-la para a comunidade. Migrar o código-fonte dos primeiros 2-3 projetos da UFFS, criar a documentação detalhada, realizar um workshop de lançamento e abrir oficialmente a plataforma para o público."
          }
        ],
        "scope": "O escopo deste projeto é o planejamento, desenvolvimento, implantação e gestão de uma plataforma digital completa que funcione como o ecossistema central para o desenvolvimento de software livre na UFFS. Isso inclui a entrega de quatro componentes principais: (1) A Infraestrutura Tecnológica: Implementar e manter o ambiente online, incluindo os repositórios de código-fonte (baseado em Git), o sistema de automação de integração e entrega contínua (CI/CD) e a hospedagem da plataforma. (2) A Governança da Comunidade: Elaborar, publicar e manter toda a documentação que rege a comunidade, como as políticas de licenciamento de software (ex: MIT, GPL), os padrões de codificação, o código de conduta e as regras para contribuição. (3) O Processo de Gestão de Demandas: Criar e gerenciar uma ferramenta transparente onde a comunidade possa submeter, discutir e votar em sugestões de novas funcionalidades (features) para os softwares hospedados. (4) A Documentação para Contribuintes: Produzir e manter os guias e tutoriais que ensinam novos desenvolvedores a configurar o ambiente, entender a arquitetura e submeter suas contribuições de forma eficaz.",
         "outOfScope": [
           "Desenvolvimento dos Produtos Finais: O projeto não é responsável por escrever o código ou desenvolver as funcionalidades dos softwares que são hospedados na plataforma (ex: o sistema acadêmico, a ferramenta de análise de dados, etc.). Essa responsabilidade continua sendo das equipes de cada produto específico.",
           "Suporte Técnico ao Usuário Final: O projeto não presta suporte a usuários que têm dúvidas sobre como utilizar os softwares. O foco é gerenciar a plataforma e a comunidade de desenvolvedores, não o atendimento ao usuário final.",
           "Tomada de Decisão Final sobre o Roadmap dos Softwares: Embora o projeto gerencie o sistema de votação de demandas, a decisão final sobre quais funcionalidades serão priorizadas e implementadas em cada software permanece com a equipe gestora ou o 'dono' de cada produto específico.",
           "Marketing e Divulgação dos Softwares: A divulgação de um software específico para seu público-alvo não faz parte deste escopo. O foco é a gestão da comunidade de desenvolvedores e contribuidores."
         ],
        "deliverables": [
          "E1. Plataforma de Colaboração Implantada: O ambiente online no ar, com repositórios, sistema de controle de versão e CI/CD configurados.",
          "E2. Documento de Governança da Comunidade: As regras, licenças e processos para contribuição e gestão de demandas, publicados e acessíveis a todos.",
          "E3. Sistema de Gestão de Demandas (Feature Voting): A ferramenta que permite à comunidade sugerir, discutir e priorizar novas funcionalidades.",
          "E4. Documentação para Desenvolvedores e Contribuintes: Guias claros sobre como configurar o ambiente de desenvolvimento, como submeter contribuições e os padrões de código a serem seguidos."
        ],
        "successMetrics": [
          "Plataforma online e operacional",
          "Pelo menos 3 projetos migrados para a plataforma",
          "Documento de governança publicado e aprovado",
          "Sistema de gestão de demandas funcional",
          "Documentação completa para desenvolvedores",
          "Comunidade ativa com contribuições externas"
        ]
      },
      "cluster": "Cluster 1 - Institucionalização"
    }
  ]
};

// Exportar para uso em módulos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = projectsData;
}
