const FEATURES = [  
  {           
    titulo: "Atualização do Front-End / Nova Interface", 
    data: "NOVEMBRO DE 2025",
    descricao: "A atualização modernizou toda a camada visual, trazendo uma experiência mais fluida, rápida e padronizada. O foco foi melhorar navegação, identidade visual e usabilidade tanto para alunos quanto para professores.",
    equipe: [
      "Clinton Nogueira Silva",
      "Luiz Felipe dos Reis Baldini",
      "Rafael Oliveira de Carvalho Lopes",
      "Samuel Nogueira da Silva"
    ],
    links: ["www.github.com/simpatia", "www.unifenas.br"],
    topicos: {
      introducao: "A reformulação do front-end teve como objetivo criar uma base visual sólida e escalável. O sistema recebeu uma interface renovada, com navegação mais direta e padrões visuais unificados.",
      escolhas: "Paleta de cores: tons claros, azul como primário e roxo para ações. Tipografia hierarquizada. Ícones baseados em Phosphor Icons com foco na consistência.",
      processo: "Planejamento no Figma, criação do design system, componentização com React + Tailwind, testes internos e ajustes de contraste e espaçamento.",
      fotos: [
        "/atualizacoes/atualizacao-frontend-1.png",
        "/atualizacoes/atualizacao-frontend-2.png",
        "/atualizacoes/atualizacao-frontend-3.png"
      ],
      conclusao: "A nova interface tornou o sistema mais modular, acessível e preparado para receber novos módulos de forma consistente."
    },
    id: 1
  },

  {           
    titulo: "Atualização do Módulo Simpático", 
    data: "NOVEMBRO DE 2025",
    descricao: "O módulo Simpático recebeu melhorias estruturais, visuais e funcionais, tornando o fluxo mais intuitivo e ampliando sua capacidade de integração com outros componentes do sistema.",
    equipe: ["Clinton Nogueira Silva"],
    links: ["www.github.com/simpatia"],
    topicos: {
      introducao: "O módulo Simpático foi revisado para oferecer métricas mais claras e organização mais eficiente. A atualização reduziu fricções no uso e preparou o módulo para futuras expansões.",
      escolhas: "Melhoria do layout, reorganização das seções, ajuste dos ícones e padronização dos componentes visuais.",
      processo: "Mapeamento do fluxo existente, identificação de gargalos, criação de protótipos e implementação gradual para evitar inconsistências.",
      fotos: [],
      conclusao: "A atualização garantiu maior clareza de informações e uma interface coesa com o restante do sistema."
    },
    id: 2
  },

  {           
    titulo: "Atualização do Gerador de Plano de Aulas", 
    data: "NOVEMBRO DE 2025",
    descricao: "O gerador agora trabalha com lógica otimizada, melhor visualização dos conteúdos e novas opções para facilitar o uso por professores.",
    equipe: ["Clinton Nogueira Silva"],
    links: [],
    topicos: {
      introducao: "Para atender melhor às necessidades dos docentes, o gerador foi aprimorado com novas funcionalidades e um fluxo mais claro de criação de planos.",
      escolhas: "Padronização dos campos de entrada, revisão da paleta visual e simplificação dos passos necessários para gerar um plano.",
      processo: "Reestruturação do formulário, testes com diferentes perfis de usuários e ajustes baseados em feedback.",
      fotos: [],
      conclusao: "O módulo ficou mais rápido, prático e alinhado às práticas pedagógicas atuais."
    },
    id: 3
  },

  {           
    titulo: "Criação do Gerador de Questões", 
    data: "NOVEMBRO DE 2025",
    descricao: "Ferramenta desenvolvida para criar questões automaticamente com base nos conteúdos fornecidos pelo docente, usando IA generativa.",
    equipe: ["Clinton Nogueira Silva"],
    links: [],
    topicos: {
      introducao: "O módulo foi construído do zero com o objetivo de automatizar parte do processo avaliativo, garantindo rapidez e boa variedade de perguntas.",
      escolhas: "Modelos de IA configurados para priorizar clareza e níveis de dificuldade variáveis. Layout simples para uso rápido.",
      processo: "Coleta de requisitos, construção do fluxo, integração da IA, testes e refinamento do modelo.",
      fotos: [],
      conclusao: "O gerador se tornou uma ferramenta prática para professores, acelerando o processo de criação de avaliações."
    },
    id: 4
  },

  {           
    titulo: "Criação do Módulo de Dashborads", 
    data: "NOVEMBRO DE 2025",
    descricao: "Módulo responsável por exibir métricas, gráficos e análises sobre alunos, cursos e atividades.",
    equipe: ["Clinton Nogueira Silva"],
    links: [],
    topicos: {
      introducao: "A criação dos dashboards teve como meta fornecer visão clara e direta dos dados, permitindo tomada de decisões mais rápida.",
      escolhas: "Uso de gráficos simples e diretos, evitando sobrecarga visual. Cores funcionais para diferenciação de métricas.",
      processo: "Definição dos indicadores, criação dos layouts, integração dos dados e testes de responsividade.",
      fotos: [],
      conclusao: "Os dashboards trouxeram transparência e facilitaram o acompanhamento dos indicadores educacionais."
    },
    id: 5
  },

  {           
    titulo: "Criação do Simpatia", 
    data: "NOVEMBRO DE 2025",
    descricao: "Desenvolvimento inicial do sistema Simpatia, integrando dados, módulos e ferramentas em uma plataforma unificada.",
    equipe: ["Clinton Nogueira Silva"],
    links: [],
    topicos: {
      introducao: "O Simpatia foi criado como plataforma central do projeto, reunindo recursos para otimizar processos e oferecer suporte ao ensino.",
      escolhas: "Arquitetura modular, layout unificado, identidade visual consistente e navegação simples.",
      processo: "Definição dos requisitos, criação da base estrutural, implementação dos primeiros módulos e validações iniciais.",
      fotos: [],
      conclusao: "O Simpatia consolidou as funcionalidades essenciais do projeto e estabeleceu a base para evoluções futuras."
    },
    id: 6
  }
];

export default FEATURES;
