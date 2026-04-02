document.addEventListener('DOMContentLoaded', () => {

    // =========================================
    // A. LÓGICA DE TEMA CLARO/ESCURO
    // =========================================
    const lightModeToggle = document.getElementById('lightModeToggle');
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
    
    const THEME_KEY = 'portfolioTheme';
    const DARK_MODE_CLASS = 'dark-mode';
    const LIGHT_MODE = 'light';
    const DARK_MODE = 'dark';

    function applyTheme(theme) {
        if (theme === DARK_MODE) {
            body.classList.add(DARK_MODE_CLASS);
            lightModeToggle.style.display = 'block';
            darkModeToggle.style.display = 'none';
            localStorage.setItem(THEME_KEY, DARK_MODE);
        } else {
            body.classList.remove(DARK_MODE_CLASS);
            lightModeToggle.style.display = 'none';
            darkModeToggle.style.display = 'block';
            localStorage.setItem(THEME_KEY, LIGHT_MODE);
        }
    }

    function initTheme() {
        const savedTheme = localStorage.getItem(THEME_KEY);
        if (savedTheme) {
            applyTheme(savedTheme);
        } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            applyTheme(DARK_MODE);
        } else {
            applyTheme(LIGHT_MODE);
        }
    }

    lightModeToggle.addEventListener('click', () => { applyTheme(LIGHT_MODE); });
    darkModeToggle.addEventListener('click', () => { applyTheme(DARK_MODE); });
    initTheme();

    // =========================================
    // B. LÓGICA DO MENU - MELHORADA (ACESSIBILIDADE)
    // =========================================
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');

    menuToggle.setAttribute('aria-label', 'Abrir menu de navegação');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-controls', 'sidebar');
    sidebar.setAttribute('aria-hidden', 'true');

    menuToggle.addEventListener('click', () => {
        const isNowOpen = !sidebar.classList.contains('open');
        sidebar.classList.toggle('open');
        menuToggle.classList.toggle('open');
        menuToggle.setAttribute('aria-expanded', isNowOpen);
        sidebar.setAttribute('aria-hidden', !isNowOpen);
        if (isNowOpen) {
            setTimeout(() => {
                const firstButton = sidebar.querySelector('button');
                if (firstButton) firstButton.focus();
            }, 100);
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && sidebar.classList.contains('open')) {
            sidebar.classList.remove('open');
            menuToggle.classList.remove('open');
            menuToggle.setAttribute('aria-expanded', 'false');
            sidebar.setAttribute('aria-hidden', 'true');
            menuToggle.focus();
        }
    });

    document.addEventListener('click', (event) => {
        const isClickInsideMenu = sidebar.contains(event.target);
        const isClickOnToggle = menuToggle.contains(event.target);
        if (!isClickInsideMenu && !isClickOnToggle && sidebar.classList.contains('open')) {
            sidebar.classList.remove('open');
            menuToggle.classList.remove('open');
            menuToggle.setAttribute('aria-expanded', 'false');
            sidebar.setAttribute('aria-hidden', 'true');
        }
    });

    const sidebarButtons = document.querySelectorAll('.sidebar-button');
    sidebarButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (sidebar.classList.contains('open')) {
                sidebar.classList.remove('open');
                menuToggle.classList.remove('open');
                menuToggle.setAttribute('aria-expanded', 'false');
                sidebar.setAttribute('aria-hidden', 'true');
            }
        });
    });

    // =========================================
    // C. LÓGICA DE TRADUÇÃO - OTIMIZADA (COM LOADING)
    // =========================================
    const translations = {
        pt: {
            menuTitle: "Menu",
            homeSidebarButton: "Home",
            educationSidebarButton: "Educação",
            aboutMeSidebarButton: "Sobre mim",
            resumeSidebarButton: "Currículo",
            projectsSidebarButton: "Projetos",

            portfolioTitle: "Portfólio Engenharia de Produção",
            name: "BERNARDO PARANHOS",
            role: "Estudante de Engenharia de Produção — UTFPR Medianeira",
            keywords: "ENGENHARIA DE PRODUÇÃO | TECNOLOGIA & AUTOMAÇÃO | PROJETOS REAIS",
            curriculumButton: "Currículo",
            aboutMeButton: "Sobre mim",
            projectsButton: "Projetos",
            welcomeHeading: "Bem-vindo!",
            welcomeText: "Olá! Sou <strong>Bernardo Paranhos</strong>, estudo Engenharia de Produção na UTFPR Medianeira. Gosto de ir além da sala de aula — já no início do curso, busquei oportunidades reais dentro da universidade e construí projetos próprios. Acredito que engenheiro bom é o que resolve problema, não só o que estuda teoria.",
            educationTitle: "Educação",
            utfprDegree: "Universidade Tecnológica Federal do Paraná",
            utfprProgram: "Bacharelado - Engenharia de produção",
            utfprStart: "Graduação em andamento",
            utfprPeriod: "2025 - 2030",
            utfprLocation: "Medianeira, Brasil",

            // --- UTFPR PAINEL ---
            utfprToggleOpen: "Ver detalhes acadêmicos",
            utfprToggleClose: "Fechar detalhes",
            utfprPeriodoLabel: "PERÍODO ATUAL",
            utfprPeriodoSubs: "Disciplinas em curso:",
            utfprDestaques: "Destaques Acadêmicos",
            utfprGrade: "Grade Curricular",
            utfprAtualTag: "atual",
            utfprDestaque2: "<strong>Certificadoras UTFPR:</strong> Módulos práticos de liderança e planejamento estratégico",

            // Headers de período
            p1header: "1º Período",
            p2header: "2º Período",
            p3header: "3º Período",
            p4header: "4º Período",
            p56header: "5º–6º Período",
            p79header: "7º–9º Período",

            // 1º Período
            d_informatica: "Informática Instrumental",
            d_leitura: "Leitura e Escrita Acadêmica",
            d_fundmat: "Fundamentos de Matemática",
            d_desenho: "Desenho Técnico (CAD)",
            d_introeng: "Introdução à Eng. de Produção",
            d_gestorg: "Gestão Organizacional",
            d_quimica: "Química Geral",

            // 2º Período
            d_fundprog: "Fund. de Programação",
            d_estrutgeo: "Estruturas Geométricas",
            d_matuniv: "Matemática Univariável",
            d_economia: "Economia",
            d_estrutfin: "Estrutura Financeira",
            d_gestpessoas: "Gestão de Pessoas",
            d_metodpesq: "Metodologia da Pesquisa",

            // Badge período atual (lista completa)
            d_fundprog_full: "Fundamentos de Programação",
            d_estrutgeo_full: "Estruturas Geométricas e Vetores",
            d_matuniv_full: "Matemática Univariável",
            d_economia_full: "Economia",
            d_gestfin_full: "Gestão Financeira",
            d_gestpessoas_full: "Gestão de Pessoas",
            d_metodpesq_full: "Metodologia da Pesquisa",

            // 3º Período
            d_fisica: "Física do Movimento",
            d_algebra: "Álgebra Linear",
            d_matmulti: "Matemática Multivariável",
            d_ergonomia: "Ergonomia",
            d_gestcustos: "Gestão de Custos",
            d_qualidade: "Introdução à Qualidade",
            d_sociologia: "Sociologia",

            // 4º Período
            d_termodi: "Termodinâmica",
            d_estatistica: "Estatística",
            d_seguranca: "Eng. de Segurança do Trabalho",
            d_logistica: "Logística",
            d_gestfin4: "Gestão Financeira",
            d_gestqual: "Gestão da Qualidade",
            d_filosofia: "Filosofia",

            // 5º–6º Período
            d_pesqop: "Pesquisa Operacional 1 e 2",
            d_arranjo: "Arranjo Físico",
            d_gestmat: "Gestão de Materiais",
            d_pcp1: "PCP 1",
            d_logdist: "Logística de Distribuição",
            d_eletromag: "Eletricidade e Magnetismo",
            d_fenomenos: "Fenômenos de Transporte",

            // 7º–9º Período
            d_automacao: "Automação Industrial",
            d_intcomp: "Inteligência Computacional",
            d_gestproj: "Gestão de Projetos",
            d_pcp23: "PCP 2 e 3",
            d_sustent: "Sustentabilidade",
            d_engec: "Eng. Econômica",
            d_tcc: "TCC",

            experienceTitle: "Experiência",
matiaStatus: "Em execução",
matiaRole: "Discente Bolsista — Programa InovaGrad",
matiaInstitution: "UTFPR — Campus Medianeira",
matiaSubtitle: "— Plataforma Educacional com IA",
matiaDesc: "Projeto de inovação pedagógica (InovaGrad) sob orientação do Prof. Dr. Fausto Pinheiro da Silva. Plataforma web voltada ao diagnóstico e nivelamento de alunos ingressantes em Engenharia nas disciplinas de matemática. Responsável pelo ciclo completo — arquitetura do sistema, gestão via Kanban, aplicação de testes diagnósticos em turmas reais e painel de acompanhamento com indicadores por competência em tempo real via Google Sheets.",
matiaPeriod: "Abr 2026 – Presente",
matiaTag1: "Diagnóstico em turmas reais",
matiaTag2: "Indicadores em tempo real",
matiaTag3: "Análise de dados educacionais",
matiaTag4: "Kanban e planejamento",
matiaTag5: "Inteligência Artificial",

            coursesTitle: "Cursos/Especializações",
            udemyCourseTitle: "Pacote Office 365 - Microsoft Office Essencial",
            udemyCoursePlatform: "Udemy",
            udemyCourseDuration: "20h",
            viewCertificateAction: "Ver Certificado",
            hashtagExcelTitle: "Excel Impressionador (Expert)",
            hashtagProvider: "Hashtag Treinamentos",
            hashtagExcelDetails: "Foco: Dashboards, VBA e Gestão de Dados",
            statusInProgress: "Em Andamento",
            hashtagSqlTitle: "SQL Impressionador",
            hashtagSqlDetails: "SQL para analisar dados com precisão e tomar decisões melhores.",
            statusComingSoon: "Em Breve",

            aboutMeTitle: "Sobre mim",
            softSkillsTitle: "Soft Skills",
            communicationSkill: "Organização e Método",
            teamworkSkill: "Raciocínio Lógico",
problemSolvingSkill: "Iniciativa",
            analyticalSkill: "Trabalho em Equipe",
            hardSkillsTitle: "Hard Skills",
            excelPowerBI: "Excel e Planilhas",
            dataAnalysis: "Tecnologia e Automação",
            webFundamentals: "Análise de Dados",
            aboutMeP1: "Sou curioso por natureza e gosto de aprender fazendo — se tem um problema, eu vou atrás da solução antes de alguém me pedir. Tenho facilidade com Excel, análise de dados e organização de processos. Busco um estágio onde eu possa crescer na prática e contribuir com raciocínio lógico, organização e vontade de fazer acontecer.",
            quoteText: "\"A confiança em si mesmo é o primeiro segredo do sucesso\" <br> Ralph Waldo Emerson",

            contactTitle: "Entre em contato comigo",
            contactSubtitle: "Estou sempre aberto a novas oportunidades e colaborações.",
            emailContact: "beparanhosborges@gmail.com",
            linkedinContact: "LinkedIn",
            homeNavLink: "HOME",
            aboutMeNavLink: "SOBRE MIM",
            educationNavLink: "EDUCAÇÃO",
            footerText: "&copy; 2026 Bernardo Paranhos — Portfólio acadêmico. <a href='https://github.com/bernardoparanhos/portfolio/blob/main/LICENSE' target='_blank' class='footer-license-link'>Licenciado sob MIT</a>",
            emailCopiedToast: "E-mail copiado!",
            copyErrorToast: "Não foi possível copiar o e-mail.",
            languageLoading: "Alterando idioma..."
        },
        en: {
            menuTitle: "Menu",
            homeSidebarButton: "Home",
            educationSidebarButton: "Education",
            aboutMeSidebarButton: "About Me",
            resumeSidebarButton: "Resume",
            projectsSidebarButton: "Projects",

            portfolioTitle: "Production Engineering Portfolio",
            name: "BERNARDO PARANHOS",
            role: "Production Engineering Student — UTFPR Medianeira",
            keywords: "PRODUCTION ENGINEERING | TECHNOLOGY & AUTOMATION | REAL PROJECTS",
            curriculumButton: "Resume",
            aboutMeButton: "About Me",
            projectsButton: "Projects",
            welcomeHeading: "Welcome!",
            welcomeText: "Hi! I'm <strong>Bernardo Paranhos</strong>, a Production Engineering student at UTFPR Medianeira. I like to go beyond the classroom — early in my degree, I pursued real opportunities within the university and built my own projects. I believe a good engineer is one who solves problems, not just studies theory.",
            educationTitle: "Education",
            utfprDegree: "Federal University of Technology - Paraná",
            utfprProgram: "Bachelor's Degree - Production Engineering",
            utfprStart: "Graduation in progress",
            utfprPeriod: "2025 - 2030",
            utfprLocation: "Medianeira, Brazil",

            // --- UTFPR PANEL ---
            utfprToggleOpen: "View academic details",
            utfprToggleClose: "Close details",
            utfprPeriodoLabel: "CURRENT SEMESTER",
            utfprPeriodoSubs: "Current courses:",
            utfprDestaques: "Academic Highlights",
            utfprGrade: "Curriculum Grid",
            utfprAtualTag: "current",
            utfprDestaque2: "<strong>UTFPR Certifications:</strong> Practical modules in leadership and strategic planning",

            // Period headers
            p1header: "1st Semester",
            p2header: "2nd Semester",
            p3header: "3rd Semester",
            p4header: "4th Semester",
            p56header: "5th–6th Semester",
            p79header: "7th–9th Semester",

            // 1st Semester
            d_informatica: "Introduction to Computing",
            d_leitura: "Academic Reading & Writing",
            d_fundmat: "Mathematics Fundamentals",
            d_desenho: "Technical Drawing (CAD)",
            d_introeng: "Intro to Production Engineering",
            d_gestorg: "Organizational Management",
            d_quimica: "General Chemistry",

            // 2nd Semester
            d_fundprog: "Prog. Fundamentals",
            d_estrutgeo: "Geometric Structures",
            d_matuniv: "Single-Variable Calculus",
            d_economia: "Economics",
            d_estrutfin: "Financial Structure",
            d_gestpessoas: "People Management",
            d_metodpesq: "Research Methodology",

            // Badge current semester (full names)
            d_fundprog_full: "Programming Fundamentals",
            d_estrutgeo_full: "Geometric Structures & Vectors",
            d_matuniv_full: "Single-Variable Calculus",
            d_economia_full: "Economics",
            d_gestfin_full: "Financial Management",
            d_gestpessoas_full: "People Management",
            d_metodpesq_full: "Research Methodology",

            // 3rd Semester
            d_fisica: "Physics of Motion",
            d_algebra: "Linear Algebra",
            d_matmulti: "Multivariable Calculus",
            d_ergonomia: "Ergonomics",
            d_gestcustos: "Cost Management",
            d_qualidade: "Introduction to Quality",
            d_sociologia: "Sociology",

            // 4th Semester
            d_termodi: "Thermodynamics",
            d_estatistica: "Statistics",
            d_seguranca: "Occupational Safety Engineering",
            d_logistica: "Logistics",
            d_gestfin4: "Financial Management",
            d_gestqual: "Quality Management",
            d_filosofia: "Philosophy",

            // 5th–6th Semester
            d_pesqop: "Operations Research 1 & 2",
            d_arranjo: "Facility Layout",
            d_gestmat: "Materials Management",
            d_pcp1: "Production Planning 1",
            d_logdist: "Distribution Logistics",
            d_eletromag: "Electricity & Magnetism",
            d_fenomenos: "Transport Phenomena",

            // 7th–9th Semester
            d_automacao: "Industrial Automation",
            d_intcomp: "Computational Intelligence",
            d_gestproj: "Project Management",
            d_pcp23: "Production Planning 2 & 3",
            d_sustent: "Sustainability",
            d_engec: "Engineering Economics",
            d_tcc: "Senior Thesis",

            experienceTitle: "Experience",
matiaStatus: "In progress",
matiaRole: "Scholar — InovaGrad Program",
matiaInstitution: "UTFPR — Campus Medianeira",
matiaSubtitle: "— AI-Powered Educational Platform",
matiaDesc: "Pedagogical innovation project (InovaGrad) under the supervision of Prof. Dr. Fausto Pinheiro da Silva. Web platform for diagnostics and leveling of incoming Engineering students in mathematics courses. Responsible for the full cycle — system architecture, Kanban-based management, application of diagnostic tests in real classes, and tracking dashboard with per-competency indicators in real time via Google Sheets.",
matiaPeriod: "Apr 2026 – Present",
matiaTag1: "Real classroom diagnostics",
matiaTag2: "Real-time indicators",
matiaTag3: "Educational data analysis",
matiaTag4: "Kanban and planning",
matiaTag5: "Artificial Intelligence",

            coursesTitle: "Courses/Specializations",
            udemyCourseTitle: "Office 365 Package - Microsoft Essential Office",
            udemyCoursePlatform: "Udemy",
            udemyCourseDuration: "20h",
            viewCertificateAction: "View Certificate",
            hashtagExcelTitle: "Excel Impressionador (Expert)",
            hashtagProvider: "Hashtag Treinamentos",
            hashtagExcelDetails: "Focus: Dashboards, VBA and Data Management",
            statusInProgress: "In Progress",
            hashtagSqlTitle: "SQL Impressionador",
            hashtagSqlDetails: "SQL to analyze data accurately and make better decisions.",
            statusComingSoon: "Coming Soon",

            aboutMeTitle: "About Me",
            softSkillsTitle: "Soft Skills",
            communicationSkill: "Organization and Method",
            teamworkSkill: "Logical Thinking",
problemSolvingSkill: "Initiative",
            analyticalSkill: "Teamwork",
            hardSkillsTitle: "Hard Skills",
            excelPowerBI: "Excel and Spreadsheets",
            dataAnalysis: "Technology and Automation",
            webFundamentals: "Data Analysis",
            aboutMeP1: "I'm naturally curious and I learn by doing — if there's a problem, I go after the solution before anyone asks me to. I'm skilled with Excel, data analysis, and process organization. I'm looking for an internship where I can grow through practice and contribute with logical thinking, organization, and a drive to get things done.",
            quoteText: "\"Self-confidence is the first secret of success\" <br> Ralph Waldo Emerson",

            contactTitle: "Get in touch with me",
            contactSubtitle: "I'm always open to new opportunities and collaborations.",
            emailContact: "beparanhosborges@gmail.com",
            linkedinContact: "LinkedIn",
            homeNavLink: "HOME",
            aboutMeNavLink: "ABOUT ME",
            educationNavLink: "EDUCATION",
            footerText: "&copy; 2026 Bernardo Paranhos — Academic Portfolio. <a href='https://github.com/bernardoparanhos/portfolio/blob/main/LICENSE' target='_blank' class='footer-license-link'>Licensed under MIT</a>",
            emailCopiedToast: "Email copied!",
            copyErrorToast: "Could not copy email.",
            languageLoading: "Changing language..."
        },
        es: {
            menuTitle: "Menú",
            homeSidebarButton: "Inicio",
            educationSidebarButton: "Educación",
            aboutMeSidebarButton: "Sobre mí",
            resumeSidebarButton: "Currículum",
            projectsSidebarButton: "Proyectos",

            portfolioTitle: "Portafolio de Ingeniería de Producción",
            name: "BERNARDO PARANHOS",
            role: "Estudiante de Ingeniería de Producción — UTFPR Medianeira",
            keywords: "INGENIERÍA DE PRODUCCIÓN | TECNOLOGÍA Y AUTOMATIZACIÓN | PROYECTOS REALES",
            curriculumButton: "Currículum",
            aboutMeButton: "Sobre mí",
            projectsButton: "Proyectos",
            welcomeHeading: "¡Bienvenido!",
            welcomeText: "¡Hola! Soy <strong>Bernardo Paranhos</strong>, estudiante de Ingeniería de Producción en la UTFPR Medianeira. Me gusta ir más allá del aula — desde el inicio de la carrera, busqué oportunidades reales dentro de la universidad y construí proyectos propios. Creo que un buen ingeniero es el que resuelve problemas, no solo el que estudia teoría.",
            educationTitle: "Educación",
            utfprDegree: "Universidad Tecnológica Federal de Paraná",
            utfprProgram: "Licenciatura - Ingeniería de Producción",
            utfprStart: "Graduación en curso",
            utfprPeriod: "2025 - 2030",
            utfprLocation: "Medianeira, Brasil",

            // --- UTFPR PANEL ---
            utfprToggleOpen: "Ver detalles académicos",
            utfprToggleClose: "Cerrar detalles",
            utfprPeriodoLabel: "SEMESTRE ACTUAL",
            utfprPeriodoSubs: "Materias en curso:",
            utfprDestaques: "Destacados Académicos",
            utfprGrade: "Plan de Estudios",
            utfprAtualTag: "actual",
            utfprDestaque2: "<strong>Certificadoras UTFPR:</strong> Módulos prácticos de liderazgo y planificación estratégica",

            // Headers de período
            p1header: "1er Semestre",
            p2header: "2do Semestre",
            p3header: "3er Semestre",
            p4header: "4to Semestre",
            p56header: "5to–6to Semestre",
            p79header: "7mo–9no Semestre",

            // 1er Semestre
            d_informatica: "Informática Instrumental",
            d_leitura: "Lectura y Escritura Académica",
            d_fundmat: "Fundamentos de Matemáticas",
            d_desenho: "Dibujo Técnico (CAD)",
            d_introeng: "Intro a Ing. de Producción",
            d_gestorg: "Gestión Organizacional",
            d_quimica: "Química General",

            // 2do Semestre
            d_fundprog: "Fund. de Programación",
            d_estrutgeo: "Estructuras Geométricas",
            d_matuniv: "Cálculo Univariable",
            d_economia: "Economía",
            d_estrutfin: "Estructura Financiera",
            d_gestpessoas: "Gestión de Personas",
            d_metodpesq: "Metodología de Investigación",

            // Badge semestre actual (nombres completos)
            d_fundprog_full: "Fundamentos de Programación",
            d_estrutgeo_full: "Estructuras Geométricas y Vectores",
            d_matuniv_full: "Cálculo Univariable",
            d_economia_full: "Economía",
            d_gestfin_full: "Gestión Financiera",
            d_gestpessoas_full: "Gestión de Personas",
            d_metodpesq_full: "Metodología de Investigación",

            // 3er Semestre
            d_fisica: "Física del Movimiento",
            d_algebra: "Álgebra Lineal",
            d_matmulti: "Cálculo Multivariable",
            d_ergonomia: "Ergonomía",
            d_gestcustos: "Gestión de Costos",
            d_qualidade: "Introducción a la Calidad",
            d_sociologia: "Sociología",

            // 4to Semestre
            d_termodi: "Termodinámica",
            d_estatistica: "Estadística",
            d_seguranca: "Ing. de Seguridad Laboral",
            d_logistica: "Logística",
            d_gestfin4: "Gestión Financiera",
            d_gestqual: "Gestión de la Calidad",
            d_filosofia: "Filosofía",

            // 5to–6to Semestre
            d_pesqop: "Investigación Operacional 1 y 2",
            d_arranjo: "Distribución en Planta",
            d_gestmat: "Gestión de Materiales",
            d_pcp1: "Planeación de la Producción 1",
            d_logdist: "Logística de Distribución",
            d_eletromag: "Electricidad y Magnetismo",
            d_fenomenos: "Fenómenos de Transporte",

            // 7mo–9no Semestre
            d_automacao: "Automatización Industrial",
            d_intcomp: "Inteligencia Computacional",
            d_gestproj: "Gestión de Proyectos",
            d_pcp23: "Planeación de la Producción 2 y 3",
            d_sustent: "Sustentabilidad",
            d_engec: "Ingeniería Económica",
            d_tcc: "Trabajo de Grado",

           experienceTitle: "Experiencia",
matiaStatus: "En ejecución",
matiaRole: "Becario — Programa InovaGrad",
matiaInstitution: "UTFPR — Campus Medianeira",
matiaSubtitle: "— Plataforma Educacional con IA",
matiaDesc: "Proyecto de innovación pedagógica (InovaGrad) bajo orientación del Prof. Dr. Fausto Pinheiro da Silva. Plataforma web orientada al diagnóstico y nivelación de alumnos ingresantes de Ingeniería en materias de matemáticas. Responsable del ciclo completo — arquitectura del sistema, gestión vía Kanban, aplicación de pruebas diagnósticas en clases reales y panel de seguimiento con indicadores por competencia en tiempo real vía Google Sheets.",
matiaPeriod: "Abr 2026 – Presente",
matiaTag1: "Diagnóstico en clases reales",
matiaTag2: "Indicadores en tiempo real",
matiaTag3: "Análisis de datos educacionales",
matiaTag4: "Kanban y planificación",
matiaTag5: "Inteligencia Artificial",

            coursesTitle: "Cursos/Especializaciones",
            udemyCourseTitle: "Paquete Office 365 - Microsoft Office Esencial",
            udemyCoursePlatform: "Udemy",
            udemyCourseDuration: "20h",
            viewCertificateAction: "Ver Certificado",
            hashtagExcelTitle: "Excel Impressionador (Experto)",
            hashtagProvider: "Hashtag Treinamentos",
            hashtagExcelDetails: "Enfoque: Dashboards, VBA y Gestión de Datos",
            statusInProgress: "En Curso",
            hashtagSqlTitle: "SQL Impressionador",
            hashtagSqlDetails: "SQL para analizar datos con precisión y tomar mejores decisiones.",
            statusComingSoon: "Próximamente",

            aboutMeTitle: "Sobre mí",
            softSkillsTitle: "Habilidades Blandas",
            communicationSkill: "Organización y Método",
            teamworkSkill: "Pensamiento Lógico",
problemSolvingSkill: "Iniciativa",
            analyticalSkill: "Trabajo en Equipo",
            hardSkillsTitle: "Habilidades Duras",
            excelPowerBI: "Excel y Planillas",
            dataAnalysis: "Tecnología y Automatización",
            webFundamentals: "Análisis de Datos",
            aboutMeP1: "Soy curioso por naturaleza y me gusta aprender haciendo — si hay un problema, busco la solución antes de que alguien me lo pida. Tengo facilidad con Excel, análisis de datos y organización de procesos. Busco una pasantía donde pueda crecer en la práctica y contribuir con pensamiento lógico, organización y ganas de hacer que las cosas sucedan.",
            quoteText: "\"La confianza en uno mismo es el primer secreto del éxito\" <br> Ralph Waldo Emerson",

            contactTitle: "Ponte en contacto conmigo",
            contactSubtitle: "Siempre estoy abierto a nuevas oportunidades y colaboraciones.",
            emailContact: "beparanhosborges@gmail.com",
            linkedinContact: "LinkedIn",
            homeNavLink: "INICIO",
            aboutMeNavLink: "SOBRE MÍ",
            educationNavLink: "EDUCACIÓN",
            footerText: "&copy; 2026 Bernardo Paranhos — Portafolio académico. <a href='https://github.com/bernardoparanhos/portfolio/blob/main/LICENSE' target='_blank' class='footer-license-link'>Licenciado bajo MIT</a>",
            emailCopiedToast: "¡Correo electrónico copiado!",
            copyErrorToast: "No se pudo copiar el correo electrónico.",
            languageLoading: "Cambiando idioma..."
        }
    };

    let currentLang = localStorage.getItem('lang') || 'pt';
    
    let translatableElementsCache = null;
    let lastAppliedLang = null;
    let languageLoadingTimeout = null;

    // =========================================
    // FUNÇÕES DE LOADING PARA TROCA DE IDIOMA
    // =========================================
    
    function showLanguageLoading(lang) {
        const globeButton = document.getElementById('globeButton');
        if (!globeButton) return;
        if (!globeButton.dataset.originalContent) {
            globeButton.dataset.originalContent = globeButton.innerHTML;
        }
        globeButton.innerHTML = `
            <svg width="35" height="35" viewBox="0 0 24 24" fill="currentColor">
                <style>@keyframes lang-spin { to { transform: rotate(360deg); } }</style>
                <path d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z" 
                      style="animation: lang-spin 0.75s linear infinite; transform-origin: center;"></path>
            </svg>
        `;
        globeButton.style.pointerEvents = 'none';
        const dropdown = document.getElementById('languageDropdown');
        if (dropdown && dropdown.classList.contains('open')) {
            dropdown.classList.remove('open');
        }
        document.querySelectorAll('.language-dropdown button').forEach(btn => {
            btn.style.pointerEvents = 'none';
            btn.style.opacity = '0.6';
        });
        clearTimeout(languageLoadingTimeout);
        languageLoadingTimeout = setTimeout(() => {
            hideLanguageLoading();
            console.warn("Timeout na troca de idioma");
        }, 10000);
    }
    
    function hideLanguageLoading() {
        clearTimeout(languageLoadingTimeout);
        const globeButton = document.getElementById('globeButton');
        if (globeButton && globeButton.dataset.originalContent) {
            globeButton.innerHTML = globeButton.dataset.originalContent;
            delete globeButton.dataset.originalContent;
            globeButton.style.pointerEvents = 'auto';
        }
        document.querySelectorAll('.language-dropdown button').forEach(btn => {
            btn.style.pointerEvents = 'auto';
            btn.style.opacity = '1';
        });
    }

    // =========================================
    // RENDER DO PAINEL UTFPR
    // Gerado inteiramente por JS para suportar tradução completa.
    // Chamado no carregamento e a cada troca de idioma.
    // =========================================
    function renderUtfprPanel(lang) {
        const panel = document.getElementById('utfprPanel');
        if (!panel) return;

        const t = translations[lang];
        const wasOpen = panel.classList.contains('open');

        panel.innerHTML = `
            <div class="utfpr-panel-top">
                <div class="utfpr-periodo-badge">
                    <span class="utfpr-periodo-label">${t.utfprPeriodoLabel}</span>
                    <span class="utfpr-periodo-num">2º</span>
                    <span class="utfpr-periodo-subs">${t.utfprPeriodoSubs}</span>
                    <ul class="utfpr-periodo-list">
                        <li>${t.d_fundprog_full}</li>
                        <li>${t.d_estrutgeo_full}</li>
                        <li>${t.d_matuniv_full}</li>
                        <li>${t.d_economia_full}</li>
                        <li>${t.d_gestfin_full}</li>
                        <li>${t.d_gestpessoas_full}</li>
                        <li>${t.d_metodpesq_full}</li>
                    </ul>
                </div>
                <div class="utfpr-destaques">
                    <h4 class="utfpr-section-title">${t.utfprDestaques}</h4>
                    <ul class="utfpr-destaques-list">
                        <li>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            <span>${t.utfprDestaque2}</span>
                        </li>
                    </ul>
                </div>
            </div>

            <h4 class="utfpr-section-title utfpr-grade-title">${t.utfprGrade}</h4>
            <div class="utfpr-grade">

                <div class="utfpr-periodo">
                    <div class="utfpr-periodo-header">${t.p1header}</div>
                    <div class="utfpr-disc-list">
                        <span>${t.d_informatica}</span>
                        <span>${t.d_leitura}</span>
                        <span>${t.d_fundmat}</span>
                        <span>${t.d_desenho}</span>
                        <span>${t.d_introeng}</span>
                        <span>${t.d_gestorg}</span>
                        <span>${t.d_quimica}</span>
                    </div>
                </div>

                <div class="utfpr-periodo utfpr-periodo--atual">
                    <div class="utfpr-periodo-header">${t.p2header} <span class="utfpr-atual-tag">${t.utfprAtualTag}</span></div>
                    <div class="utfpr-disc-list">
                        <span>${t.d_fundprog}</span>
                        <span>${t.d_estrutgeo}</span>
                        <span>${t.d_matuniv}</span>
                        <span>${t.d_economia}</span>
                        <span>${t.d_estrutfin}</span>
                        <span>${t.d_gestpessoas}</span>
                        <span>${t.d_metodpesq}</span>
                    </div>
                </div>

                <div class="utfpr-periodo">
                    <div class="utfpr-periodo-header">${t.p3header}</div>
                    <div class="utfpr-disc-list">
                        <span>${t.d_fisica}</span>
                        <span>${t.d_algebra}</span>
                        <span>${t.d_matmulti}</span>
                        <span>${t.d_ergonomia}</span>
                        <span>${t.d_gestcustos}</span>
                        <span>${t.d_qualidade}</span>
                        <span>${t.d_sociologia}</span>
                    </div>
                </div>

                <div class="utfpr-periodo">
                    <div class="utfpr-periodo-header">${t.p4header}</div>
                    <div class="utfpr-disc-list">
                        <span>${t.d_termodi}</span>
                        <span>${t.d_estatistica}</span>
                        <span>${t.d_seguranca}</span>
                        <span>${t.d_logistica}</span>
                        <span>${t.d_gestfin4}</span>
                        <span>${t.d_gestqual}</span>
                        <span>${t.d_filosofia}</span>
                    </div>
                </div>

                <div class="utfpr-periodo">
                    <div class="utfpr-periodo-header">${t.p56header}</div>
                    <div class="utfpr-disc-list">
                        <span>${t.d_pesqop}</span>
                        <span>${t.d_arranjo}</span>
                        <span>${t.d_gestmat}</span>
                        <span>${t.d_pcp1}</span>
                        <span>${t.d_logdist}</span>
                        <span>${t.d_eletromag}</span>
                        <span>${t.d_fenomenos}</span>
                    </div>
                </div>

                <div class="utfpr-periodo">
                    <div class="utfpr-periodo-header">${t.p79header}</div>
                    <div class="utfpr-disc-list">
                        <span>${t.d_automacao}</span>
                        <span>${t.d_intcomp}</span>
                        <span>${t.d_gestproj}</span>
                        <span>${t.d_pcp23}</span>
                        <span>${t.d_sustent}</span>
                        <span>${t.d_engec}</span>
                        <span>${t.d_tcc}</span>
                    </div>
                </div>

            </div>
        `;

        if (wasOpen) panel.classList.add('open');
    }
    
    async function setLanguage(lang) {
        if (lastAppliedLang === lang) {
            const dropdown = document.getElementById('languageDropdown');
            if (dropdown && dropdown.classList.contains('open')) {
                dropdown.classList.remove('open');
            }
            return;
        }
        
        if (!translations[lang]) {
            console.warn(`Idioma "${lang}" não suportado. Usando Português como fallback.`);
            lang = 'pt';
        }
        
        showLanguageLoading(lang);
        
        try {
            await new Promise(resolve => setTimeout(resolve, 150));
            
            document.documentElement.lang = lang;
            
            translatableElementsCache = document.querySelectorAll('[data-lang-key]');
            
            const updatePromises = [];
            translatableElementsCache.forEach(element => {
                const key = element.getAttribute('data-lang-key');
                const translation = translations[lang][key];
                if (translation) {
                    if (translation.includes('<')) {
                        updatePromises.push(Promise.resolve().then(() => {
                            element.innerHTML = translation;
                        }));
                    } else {
                        updatePromises.push(Promise.resolve().then(() => {
                            element.textContent = translation;
                        }));
                    }
                }
            });
            
            await Promise.all(updatePromises);

            renderUtfprPanel(lang);

            const utfprPanel = document.getElementById('utfprPanel');
            const utfprToggleLabel = document.querySelector('.utfpr-toggle-label');
            if (utfprToggleLabel && utfprPanel) {
                const isOpen = utfprPanel.classList.contains('open');
                utfprToggleLabel.textContent = isOpen
                    ? translations[lang].utfprToggleClose
                    : translations[lang].utfprToggleOpen;
            }
            
            document.querySelectorAll('.language-dropdown button').forEach(button => {
                if (button.dataset.lang === lang) {
                    button.classList.add('active');
                } else {
                    button.classList.remove('active');
                }
            });
            
            localStorage.setItem('lang', lang);
            currentLang = lang;
            lastAppliedLang = lang;
            
            await new Promise(resolve => setTimeout(resolve, 300));
            
        } catch (error) {
            console.error("Erro na troca de idioma:", error);
        } finally {
            hideLanguageLoading();
        }
    }

    // =========================================
    // CONFIGURAÇÃO DO SELECTOR DE IDIOMA
    // =========================================
    const languageSelector = document.getElementById('languageSelector');

    const globeSVG = `
        <svg width="35px" height="35px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">
            <title>globe</title>
            <defs></defs>
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
                <g id="Icon-Set" sketch:type="MSLayerGroup" transform="translate(-204.000000, -671.000000)" fill="currentColor">
                    <path d="M231.596,694.829 C229.681,694.192 227.622,693.716 225.455,693.408 C225.75,691.675 225.907,689.859 225.957,688 L233.962,688 C233.783,690.521 232.936,692.854 231.596,694.829 L231.596,694.829 Z M223.434,700.559 C224.1,698.95 224.645,697.211 225.064,695.379 C226.862,695.645 228.586,696.038 230.219,696.554 C228.415,698.477 226.073,699.892 223.434,700.559 L223.434,700.559 Z M220.971,700.951 C220.649,700.974 220.328,701 220,701 C219.672,701 219.352,700.974 219.029,700.951 C218.178,699.179 217.489,697.207 216.979,695.114 C217.973,695.027 218.98,694.976 220,694.976 C221.02,694.976 222.027,695.027 223.022,695.114 C222.511,697.207 221.822,699.179 220.971,700.951 L220.971,700.951 Z M209.781,696.554 C211.414,696.038 213.138,695.645 214.936,695.379 C215.355,697.211 215.9,698.95 216.566,700.559 C213.927,699.892 211.586,698.477 209.781,696.554 L209.781,696.554 Z M208.404,694.829 C207.064,692.854 206.217,690.521 206.038,688 L214.043,688 C214.093,689.859 214.25,691.675 214.545,693.408 C212.378,693.716 210.319,694.192 208.404,694.829 L208.404,694.829 Z M208.404,679.171 C210.319,679.808 212.378,680.285 214.545,680.592 C214.25,682.325 214.093,684.141 214.043,686 L206.038,686 C206.217,683.479 207.064,681.146 208.404,679.171 L208.404,679.171 Z M216.566,673.441 C215.9,675.05 215.355,676.789 214.936,678.621 C213.138,678.356 211.414,677.962 209.781,677.446 C211.586,675.523 213.927,674.108 216.566,673.441 L216.566,673.441 Z M219.029,673.049 C219.352,673.027 219.672,673 220,673 C220.328,673 220.649,673.027 220.971,673.049 C221.822,674.821 222.511,676.794 223.022,678.886 C222.027,678.973 221.02,679.024 220,679.024 C218.98,679.024 217.973,678.973 216.979,678.886 C217.489,676.794 218.178,674.821 219.029,673.049 L219.029,673.049 Z M223.954,688 C223.9,689.761 223.74,691.493 223.439,693.156 C222.313,693.058 221.168,693 220,693 C218.832,693 217.687,693.058 216.562,693.156 C216.26,691.493 216.1,689.761 216.047,688 L223.954,688 L223.954,688 Z M216.047,686 C216.1,684.239 216.26,682.507 216.562,680.844 C217.687,680.942 218.832,681 220,681 C221.168,681 222.313,680.942 223.438,680.844 C223.74,682.507 223.9,684.239 223.954,686 L216.047,686 L216.047,686 Z M230.219,677.446 C228.586,677.962 226.862,677.962 225.064,678.621 C224.645,676.789 224.1,675.05 223.434,673.441 C226.073,674.108 228.415,675.523 230.219,677.446 L230.219,677.446 Z M231.596,679.171 C232.936,681.146 233.783,683.479 233.962,686 L225.957,686 C225.907,684.141 225.75,682.325 225.455,680.592 C227.622,680.285 229.681,679.808 231.596,679.171 L231.596,679.171 Z M220,671 C211.164,671 204,678.163 204,687 C204,695.837 211.164,703 220,703 C228.836,703 236,695.837 236,687 C236,678.163 228.836,671 220,671 L220,671 Z" id="globe" sketch:type="MSShapeGroup"></path>
                </g>
            </g>
        </svg>
    `;

    languageSelector.innerHTML = `
        <button class="globe-button" id="globeButton" aria-label="Select Language">${globeSVG}</button>
        <div class="language-dropdown" id="languageDropdown">
            <button data-lang="pt"><img src="image/icons/brazil-flag.svg" alt="Bandeira do Brasil"> Português</button>
            <button data-lang="en"><img src="image/icons/uk-flag.svg" alt="UK Flag"> English</button>
            <button data-lang="es"><img src="image/icons/spain-flag.svg" alt="Spain Flag"> Español</button>
        </div>
    `;

    const globeButton = document.getElementById('globeButton');
    const languageDropdown = document.getElementById('languageDropdown');

    globeButton.addEventListener('click', (event) => {
        event.stopPropagation();
        languageDropdown.classList.toggle('open');
    });

    languageDropdown.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', (event) => {
            const selectedLang = event.currentTarget.dataset.lang;
            setLanguage(selectedLang);
        });
    });

    document.addEventListener('click', (event) => {
        if (!languageSelector.contains(event.target) && languageDropdown.classList.contains('open')) {
            languageDropdown.classList.remove('open');
        }
    });

    setLanguage(currentLang);

    // =========================================
    // D. LÓGICA DE CÓPIA DE E-MAIL - MELHORADA (ROBUSTEZ)
    // =========================================
    const copyEmailBtn = document.getElementById("copyEmail");

    if (copyEmailBtn) {
        copyEmailBtn.addEventListener("click", async function (e) {
            e.preventDefault(); 
            const email = "beparanhosborges@gmail.com";
            const lang = currentLang;

            try {
                if (navigator.clipboard && navigator.clipboard.writeText) {
                    await navigator.clipboard.writeText(email);
                    showToast(translations[lang].emailCopiedToast);
                    return;
                }
                const textArea = document.createElement("textarea");
                textArea.value = email;
                textArea.style.position = "fixed";
                textArea.style.left = "-999999px";
                document.body.appendChild(textArea);
                textArea.select();
                const success = document.execCommand("copy");
                document.body.removeChild(textArea);
                if (success) {
                    showToast(translations[lang].emailCopiedToast);
                } else {
                    throw new Error("execCommand falhou");
                }
            } catch (error) {
                console.error("Erro ao copiar e-mail:", error);
                showToast(`${translations[lang].copyErrorToast}: ${email}`);
                if (copyEmailBtn.querySelector('span')) {
                    const range = document.createRange();
                    range.selectNode(copyEmailBtn.querySelector('span'));
                    window.getSelection().removeAllRanges();
                    window.getSelection().addRange(range);
                }
            }
        });
    }

    function showToast(message) {
        const toast = document.getElementById("toast");
        if (!toast) { console.warn("Elemento toast não encontrado"); return; }
        toast.textContent = message;
        toast.classList.add("show");
        setTimeout(() => { toast.classList.remove("show"); }, 2500);
    }

    // =========================================
    // E. NAVEGAÇÃO SUAVE E LIMPEZA DE URL (CORRIGIDO)
    // =========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') { e.preventDefault(); return; }
            try {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    const sidebar = document.getElementById('sidebar');
                    const menuToggle = document.getElementById('menuToggle');
                    if (sidebar && sidebar.classList.contains('open')) {
                        sidebar.classList.remove('open');
                        menuToggle.classList.remove('open');
                        menuToggle.setAttribute('aria-expanded', 'false');
                        sidebar.setAttribute('aria-hidden', 'true');
                    }
                }
            } catch (error) {
                console.warn("Elemento de destino não encontrado:", targetId);
            }
        });
    });

    // =========================================
    // F. LÓGICA DO CARROSSEL (SLIDER DE CURSOS)
    // =========================================
    const track = document.querySelector('.carousel-track');
    
    if (track) {
        const slides = Array.from(track.children);
        const nextButton = document.querySelector('.next-btn');
        const prevButton = document.querySelector('.prev-btn');
        const dotsNav = document.querySelector('.carousel-nav');
        const dots = Array.from(dotsNav.children);
        let currentIndex = 0;

        const updateSlidePosition = (index) => {
            track.style.transform = `translateX(-${index * 100}%)`;
            dots.forEach(d => d.classList.remove('current-slide'));
            dots[index].classList.add('current-slide');
            currentIndex = index;
        };

        if (nextButton) {
            nextButton.addEventListener('click', () => {
                const nextIndex = currentIndex + 1;
                updateSlidePosition(nextIndex >= slides.length ? 0 : nextIndex);
            });
        }
        if (prevButton) {
            prevButton.addEventListener('click', () => {
                const prevIndex = currentIndex - 1;
                updateSlidePosition(prevIndex < 0 ? slides.length - 1 : prevIndex);
            });
        }
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => { updateSlidePosition(index); });
        });
        track.parentElement.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') prevButton.click();
            if (e.key === 'ArrowRight') nextButton.click();
        });
    }

    // =========================================
    // G. TOGGLE DO PAINEL UTFPR (COM TRADUÇÃO)
    // =========================================
    const utfprToggle = document.getElementById('utfprToggle');
    const utfprPanel = document.getElementById('utfprPanel');

    if (utfprToggle && utfprPanel) {
        renderUtfprPanel(currentLang);

        utfprToggle.addEventListener('click', () => {
            const isOpen = utfprPanel.classList.contains('open');
            utfprPanel.classList.toggle('open');
            utfprToggle.setAttribute('aria-expanded', !isOpen);
            utfprPanel.setAttribute('aria-hidden', isOpen);

            const label = utfprToggle.querySelector('.utfpr-toggle-label');
            label.textContent = isOpen
                ? translations[currentLang].utfprToggleOpen
                : translations[currentLang].utfprToggleClose;
        });
    }

});