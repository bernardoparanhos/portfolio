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

    /**
     * Aplica o tema ao body, altera o ícone de toggle e salva no localStorage.
     * @param {string} theme - 'light' ou 'dark'
     */
    function applyTheme(theme) {
        if (theme === DARK_MODE) {
            body.classList.add(DARK_MODE_CLASS);
            lightModeToggle.style.display = 'block'; // Mostrar Sol (para voltar ao claro)
            darkModeToggle.style.display = 'none';  // Esconder Lua
            localStorage.setItem(THEME_KEY, DARK_MODE);
        } else {
            body.classList.remove(DARK_MODE_CLASS);
            lightModeToggle.style.display = 'none';  // Esconder Sol
            darkModeToggle.style.display = 'block'; // Mostrar Lua (para ir para o escuro)
            localStorage.setItem(THEME_KEY, LIGHT_MODE);
        }
    }

    /**
     * Inicializa o tema ao carregar a página (pega do localStorage ou da preferência do sistema).
     */
    function initTheme() {
        const savedTheme = localStorage.getItem(THEME_KEY);
        
        if (savedTheme) {
            // Se houver tema salvo, aplica
            applyTheme(savedTheme);
        } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            // Se não houver salvo, mas o sistema operacional prefere Dark Mode, usa Dark Mode
            applyTheme(DARK_MODE);
        } else {
            // Caso contrário, usa Light Mode como padrão
            applyTheme(LIGHT_MODE);
        }
    }

    // Event Listeners para os botões de troca de tema
    lightModeToggle.addEventListener('click', () => {
        applyTheme(LIGHT_MODE);
    });

    darkModeToggle.addEventListener('click', () => {
        applyTheme(DARK_MODE);
    });

    // Inicializa o tema imediatamente
    initTheme();

    // =========================================
    // B. LÓGICA DO MENU - MELHORADA (ACESSIBILIDADE)
    // =========================================
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');

    // Configuração inicial de acessibilidade
    menuToggle.setAttribute('aria-label', 'Abrir menu de navegação');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-controls', 'sidebar');
    sidebar.setAttribute('aria-hidden', 'true');

    menuToggle.addEventListener('click', () => {
        const isNowOpen = !sidebar.classList.contains('open');
        
        // Alterna classes visuais
        sidebar.classList.toggle('open');
        menuToggle.classList.toggle('open');
        
        // Atualiza atributos de acessibilidade
        menuToggle.setAttribute('aria-expanded', isNowOpen);
        sidebar.setAttribute('aria-hidden', !isNowOpen);
        
        // Foco no primeiro botão quando o menu abre
        if (isNowOpen) {
            setTimeout(() => {
                const firstButton = sidebar.querySelector('button');
                if (firstButton) firstButton.focus();
            }, 100);
        }
    });

    // Fechar o menu com a tecla ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && sidebar.classList.contains('open')) {
            sidebar.classList.remove('open');
            menuToggle.classList.remove('open');
            menuToggle.setAttribute('aria-expanded', 'false');
            sidebar.setAttribute('aria-hidden', 'true');
            menuToggle.focus(); // Retorna o foco para o botão do menu
        }
    });

    // Fechar o menu ao clicar fora dele (melhorado)
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

    // Fechar o menu ao clicar em um item da sidebar
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
            role: "Engenheiro de Produção Graduando",
            keywords: "PROCESSOS INDUSTRIAIS | SEGURANÇA DO TRABALHO | TECNOLOGIA",
            curriculumButton: "Currículo",
            aboutMeButton: "Sobre mim",
            projectsButton: "Projetos",
            welcomeHeading: "Bem-vindo!",
            welcomeText: "Olá! Sou <strong>Bernardo Paranhos</strong>, estudante de Engenharia de Produção com foco em processos industriais, segurança do trabalho e melhoria contínua. Busco aplicar <strong>tecnologia e análise de dados</strong> para otimizar operações e promover ambientes de trabalho mais seguros e eficientes. Navegue pelo portfólio para conhecer meus projetos e competências.",
            
            educationTitle: "Educação",
            utfprDegree: "Universidade Tecnológica Federal do Paraná",
            utfprProgram: "Bacharelado - Engenharia de produção",
            utfprStart: "Início no segundo semestre de 2025",
            utfprPeriod: "2025 - 2030",
            utfprLocation: "Medianeira, Brasil",

            coursesTitle: "Cursos/Especializações",
            // CURSO UDEMY
            udemyCourseTitle: "Pacote Office 365 - Microsoft Office Essencial",
            udemyCoursePlatform: "Udemy",
            udemyCourseDuration: "20h",
            viewCertificateAction: "Ver Certificado",

            aboutMeTitle: "Sobre mim",
            softSkillsTitle: "Soft Skills",
            communicationSkill: "Comunicação Clara e Técnica",
            teamworkSkill: "Trabalho em Equipe",
            problemSolvingSkill: "Resolução de Problemas",
            analyticalSkill: "Raciocínio Analítico e Inteligência Emocional",
            hardSkillsTitle: "Hard Skills",
            excelPowerBI: "Excel (nível intermediário)",
            dataAnalysis: "Análise de dados (em desenvolvimento; power bi, python)",
            webFundamentals: "Fundamentos de HTML/CSS/Javascript",
            aboutMeP1: "Como futuro Engenheiro de Produção, minha missão é resolver desafios industriais por meio da integração entre tecnologia, eficiência e segurança. Tenho foco em <strong>processos industriais, segurança do trabalho e melhoria contínua</strong>, aplicando meu raciocínio analítico para desenvolver soluções produtivas, seguras e sustentáveis.",
            
            quoteText: "\"A confiança em si mesmo é o primeiro segredo do sucesso\" <br> Ralph Waldo Emerson",

            contactTitle: "Entre em contato comigo",
            contactSubtitle: "Estou sempre aberto a novas oportunidades e colaborações.",
            emailContact: "beparanhosborges@gmail.com",
            linkedinContact: "LinkedIn",
            homeNavLink: "HOME",
            aboutMeNavLink: "SOBRE MIM",
            educationNavLink: "EDUCAÇÃO",
            footerText: "&copy; 2025 Bernardo Paranhos — Portfólio acadêmico. Todos os direitos reservados.",
            // --- Mensagens de toast ---
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
            role: "Graduating Production Engineer",
            keywords: "INDUSTRIAL PROCESSES | OCCUPATIONAL SAFETY | TECHNOLOGY",
            curriculumButton: "Resume",
            aboutMeButton: "About Me",
            projectsButton: "Projects",
            welcomeHeading: "Welcome!",
            welcomeText: "Hello! I'm <strong>Bernardo Paranhos</strong>, a Production Engineering student focused on industrial processes, occupational safety, and continuous improvement. I seek to apply <strong>technology and data analysis</strong> to optimize operations and promote safer and more efficient work environments. Browse the portfolio to learn about my projects and skills.",
            
            educationTitle: "Education",
            utfprDegree: "Federal University of Technology - Paraná",
            utfprProgram: "Bachelor's Degree - Production Engineering",
            utfprStart: "Starting in the second semester of 2025",
            utfprPeriod: "2025 - 2030",
            utfprLocation: "Medianeira, Brazil",

            coursesTitle: "Courses/Specializations",
            // CURSO UDEMY
            udemyCourseTitle: "Office 365 Package - Microsoft Essential Office",
            udemyCoursePlatform: "Udemy",
            udemyCourseDuration: "20h",
            viewCertificateAction: "View Certificate",

            aboutMeTitle: "About Me",
            softSkillsTitle: "Soft Skills",
            communicationSkill: "Clear and Technical Communication",
            teamworkSkill: "Teamwork",
            problemSolvingSkill: "Problem Solving",
            analyticalSkill: "Analytical Thinking and Emotional Intelligence",
            hardSkillsTitle: "Hard Skills",
            excelPowerBI: "Excel (intermediary level)",
            dataAnalysis: "Data Analysis (in development; power bi, python)",
            webFundamentals: "HTML/CSS/Javascript Fundamentals",
            aboutMeP1: "As a future Production Engineer, my mission is to solve industrial challenges through the integration of technology, efficiency, and safety. I focus on <strong>industrial processes, occupational safety, and continuous improvement</strong>, applying my analytical reasoning to develop solutions that are productive, safe, and sustainable.",

            quoteText: "\"Self-confidence is the first secret of success\" <br> Ralph Waldo Emerson",

            contactTitle: "Get in touch with me",
            contactSubtitle: "I'm always open to new opportunities and collaborations.",
            emailContact: "beparanhosborges@gmail.com",
            linkedinContact: "LinkedIn",
            homeNavLink: "HOME",
            aboutMeNavLink: "ABOUT ME",
            educationNavLink: "EDUCATION",
            footerText: "&copy; 2025 Bernardo Paranhos — Academic Portfolio. All rights reserved.",
            // --- Mensagens de toast ---
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
            role: "Estudiante de Ingeniería de Producción",
            keywords: "PROCESOS INDUSTRIAES | SEGURIDAD LABORAL | TECNOLOGÍA",
            curriculumButton: "Currículum",
            aboutMeButton: "Sobre mí",
            projectsButton: "Proyectos",
            welcomeHeading: "¡Bienvenido!",
            welcomeText: "¡Hola! Soy <strong>Bernardo Paranhos</strong>, estudiante de Ingeniería de Producción con enfoque en procesos industriales, seguridad laboral y mejora continua. Busco aplicar <strong>tecnología y análisis de datos</strong> para optimizar operaciones y promover ambientes de trabajo más seguros y eficientes. Navega por el portafolio para conocer mis proyectos y habilidades.",
            
            educationTitle: "Educación",
            utfprDegree: "Universidad Tecnológica Federal de Paraná",
            utfprProgram: "Licenciatura - Ingeniería de Producción",
            utfprStart: "Inicio en el segundo semestre de 2025",
            utfprPeriod: "2025 - 2030",
            utfprLocation: "Medianeira, Brasil",

            coursesTitle: "Cursos/Especializaciones",
            // CURSO UDEMY
            udemyCourseTitle: "Paquete Office 365 - Microsoft Office Esencial",
            udemyCoursePlatform: "Udemy",
            udemyCourseDuration: "20h",
            viewCertificateAction: "Ver Certificado",

            aboutMeTitle: "Sobre mí",
            softSkillsTitle: "Habilidades Blandas",
            communicationSkill: "Comunicación Clara y Técnica",
            teamworkSkill: "Trabajo en Equipo",
            problemSolvingSkill: "Resolución de Problemas",
            analyticalSkill: "Pensamiento Analítico e Inteligencia Emocional",
            hardSkillsTitle: "Habilidades Duras",
            excelPowerBI: "Excel (nivel intermediario)",
            dataAnalysis: "Análisis de Datos (en desarrollo; power bi, python)",
            webFundamentals: "Fundamentos de HTML/CSS/Javascript",
            aboutMeP1: "Como futuro Ingeniero de Producción, mi misión es resolver desafíos industriales mediante la integración de tecnología, eficiencia y seguridad. Me enfoco en <strong>procesos industriales, seguridad laboral y mejora continua</strong>, aplicando mi razonamiento analítico para desarrollar soluciones productivas, seguras y sostenibles.",

            quoteText: "\"La confianza en uno mismo es el primer secreto del éxito\" <br> Ralph Waldo Emerson",

            contactTitle: "Ponte en contacto conmigo",
            contactSubtitle: "Siempre estoy abierto a nuevas oportunidades y colaboraciones.",
            emailContact: "beparanhosborges@gmail.com",
            linkedinContact: "LinkedIn",
            homeNavLink: "INICIO",
            aboutMeNavLink: "SOBRE MÍ",
            educationNavLink: "EDUCACIÓN",
            footerText: "&copy; 2025 Bernardo Paranhos — Portafolio académico. Todos los derechos reservados.",
            // --- Mensagens de toast ---
            emailCopiedToast: "¡Correo electrónico copiado!",
            copyErrorToast: "No se pudo copiar el correo electrónico.",
            languageLoading: "Cambiando idioma..."
        }
    };

    let currentLang = localStorage.getItem('lang') || 'pt';
    
    // CACHE para elementos traduzíveis (Performance)
    let translatableElementsCache = null;
    let lastAppliedLang = null;
    let languageLoadingTimeout = null;

    // =========================================
    // FUNÇÕES DE LOADING PARA TROCA DE IDIOMA
    // =========================================
    
    /**
     * Mostra indicador de carregamento durante troca de idioma
     * @param {string} lang - Idioma sendo carregado
     */
    function showLanguageLoading(lang) {
        const globeButton = document.getElementById('globeButton');
        if (!globeButton) return;
        
        // Salva conteúdo original
        if (!globeButton.dataset.originalContent) {
            globeButton.dataset.originalContent = globeButton.innerHTML;
        }
        
        // Spinner SVG animado
        globeButton.innerHTML = `
            <svg width="35" height="35" viewBox="0 0 24 24" fill="currentColor">
                <style>
                    @keyframes lang-spin { to { transform: rotate(360deg); } }
                </style>
                <path d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z" 
                      style="animation: lang-spin 0.75s linear infinite; transform-origin: center;">
                </path>
            </svg>
        `;
        
        // Desabilita interações durante carregamento
        globeButton.style.pointerEvents = 'none';
        
        // Fecha dropdown se estiver aberto
        const dropdown = document.getElementById('languageDropdown');
        if (dropdown && dropdown.classList.contains('open')) {
            dropdown.classList.remove('open');
        }
        
        // Desabilita botões do dropdown
        document.querySelectorAll('.language-dropdown button').forEach(btn => {
            btn.style.pointerEvents = 'none';
            btn.style.opacity = '0.6';
        });
        
        // Timeout de segurança (remove loading se travar)
        clearTimeout(languageLoadingTimeout);
        languageLoadingTimeout = setTimeout(() => {
            hideLanguageLoading();
            console.warn("Timeout na troca de idioma");
        }, 10000); // 10 segundos máximo
    }
    
    /**
     * Esconde indicador de carregamento
     */
    function hideLanguageLoading() {
        clearTimeout(languageLoadingTimeout);
        
        const globeButton = document.getElementById('globeButton');
        if (globeButton && globeButton.dataset.originalContent) {
            globeButton.innerHTML = globeButton.dataset.originalContent;
            delete globeButton.dataset.originalContent;
            globeButton.style.pointerEvents = 'auto';
        }
        
        // Reabilita botões do dropdown
        document.querySelectorAll('.language-dropdown button').forEach(btn => {
            btn.style.pointerEvents = 'auto';
            btn.style.opacity = '1';
        });
    }
    
    /**
     * Função assíncrona para trocar idioma com feedback visual
     * @param {string} lang - Idioma para trocar
     */
    async function setLanguage(lang) {
        // Verifica se já está no mesmo idioma
        if (lastAppliedLang === lang) {
            const dropdown = document.getElementById('languageDropdown');
            if (dropdown && dropdown.classList.contains('open')) {
                dropdown.classList.remove('open');
            }
            return;
        }
        
        // Validação do idioma
        if (!translations[lang]) {
            console.warn(`Idioma "${lang}" não suportado. Usando Português como fallback.`);
            lang = 'pt';
        }
        
        // Mostra loading
        showLanguageLoading(lang);
        
        try {
            // Pequeno delay para melhor UX (o usuário vê o clique)
            await new Promise(resolve => setTimeout(resolve, 150));
            
            // Atualiza o atributo lang do documento
            document.documentElement.lang = lang;
            
            // Cache de elementos (uma única busca)
            if (!translatableElementsCache) {
                translatableElementsCache = document.querySelectorAll('[data-lang-key]');
            }
            
            // Atualiza traduções em batch (mais eficiente)
            const updatePromises = [];
            translatableElementsCache.forEach(element => {
                const key = element.getAttribute('data-lang-key');
                const translation = translations[lang][key];
                
                if (translation) {
                    // Otimização: textContent para texto puro, innerHTML para HTML
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
            
            // Aguarda todas as atualizações
            await Promise.all(updatePromises);
            
            // Atualiza botões ativos no dropdown
            document.querySelectorAll('.language-dropdown button').forEach(button => {
                if (button.dataset.lang === lang) {
                    button.classList.add('active');
                } else {
                    button.classList.remove('active');
                }
            });
            
            // Salva preferência e atualiza cache
            localStorage.setItem('lang', lang);
            currentLang = lang;
            lastAppliedLang = lang;
            
            // Pequeno delay para o usuário perceber a mudança
            await new Promise(resolve => setTimeout(resolve, 300));
            
        } catch (error) {
            console.error("Erro na troca de idioma:", error);
            // Poderia mostrar um toast de erro aqui
        } finally {
            // Esconde loading
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
            <desc>Created with Sketch Beta.</desc>
            <defs></defs>
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
                <g id="Icon-Set" sketch:type="MSLayerGroup" transform="translate(-204.000000, -671.000000)" fill="currentColor"> <path d="M231.596,694.829 C229.681,694.192 227.622,693.716 225.455,693.408 C225.75,691.675 225.907,689.859 225.957,688 L233.962,688 C233.783,690.521 232.936,692.854 231.596,694.829 L231.596,694.829 Z M223.434,700.559 C224.1,698.95 224.645,697.211 225.064,695.379 C226.862,695.645 228.586,696.038 230.219,696.554 C228.415,698.477 226.073,699.892 223.434,700.559 L223.434,700.559 Z M220.971,700.951 C220.649,700.974 220.328,701 220,701 C219.672,701 219.352,700.974 219.029,700.951 C218.178,699.179 217.489,697.207 216.979,695.114 C217.973,695.027 218.98,694.976 220,694.976 C221.02,694.976 222.027,695.027 223.022,695.114 C222.511,697.207 221.822,699.179 220.971,700.951 L220.971,700.951 Z M209.781,696.554 C211.414,696.038 213.138,695.645 214.936,695.379 C215.355,697.211 215.9,698.95 216.566,700.559 C213.927,699.892 211.586,698.477 209.781,696.554 L209.781,696.554 Z M208.404,694.829 C207.064,692.854 206.217,690.521 206.038,688 L214.043,688 C214.093,689.859 214.25,691.675 214.545,693.408 C212.378,693.716 210.319,694.192 208.404,694.829 L208.404,694.829 Z M208.404,679.171 C210.319,679.808 212.378,680.285 214.545,680.592 C214.25,682.325 214.093,684.141 214.043,686 L206.038,686 C206.217,683.479 207.064,681.146 208.404,679.171 L208.404,679.171 Z M216.566,673.441 C215.9,675.05 215.355,676.789 214.936,678.621 C213.138,678.356 211.414,677.962 209.781,677.446 C211.586,675.523 213.927,674.108 216.566,673.441 L216.566,673.441 Z M219.029,673.049 C219.352,673.027 219.672,673 220,673 C220.328,673 220.649,673.027 220.971,673.049 C221.822,674.821 222.511,676.794 223.022,678.886 C222.027,678.973 221.02,679.024 220,679.024 C218.98,679.024 217.973,678.973 216.979,678.886 C217.489,676.794 218.178,674.821 219.029,673.049 L219.029,673.049 Z M223.954,688 C223.9,689.761 223.74,691.493 223.439,693.156 C222.313,693.058 221.168,693 220,693 C218.832,693 217.687,693.058 216.562,693.156 C216.26,691.493 216.1,689.761 216.047,688 L223.954,688 L223.954,688 Z M216.047,686 C216.1,684.239 216.26,682.507 216.562,680.844 C217.687,680.942 218.832,681 220,681 C221.168,681 222.313,680.942 223.438,680.844 C223.74,682.507 223.9,684.239 223.954,686 L216.047,686 L216.047,686 Z M230.219,677.446 C228.586,677.962 226.862,677.962 225.064,678.621 C224.645,676.789 224.1,675.05 223.434,673.441 C226.073,674.108 228.415,675.523 230.219,677.446 L230.219,677.446 Z M231.596,679.171 C232.936,681.146 233.783,683.479 233.962,686 L225.957,686 C225.907,684.141 225.75,682.325 225.455,680.592 C227.622,680.285 229.681,679.808 231.596,679.171 L231.596,679.171 Z M220,671 C211.164,671 204,678.163 204,687 C204,695.837 211.164,703 220,703 C228.836,703 236,695.837 236,687 C236,678.163 228.836,671 220,671 L220,671 Z" id="globe" sketch:type="MSShapeGroup"></path>
                </g>
            </g>
        </svg>
    `;

    languageSelector.innerHTML = `
        <button class="globe-button" id="globeButton" aria-label="Select Language">${globeSVG}</button>
        <div class="language-dropdown" id="languageDropdown">
            <button data-lang="pt">
                <img src="image/icons/brazil-flag.svg" alt="Bandeira do Brasil"> Português
            </button>
            <button data-lang="en">
                <img src="image/icons/uk-flag.svg" alt="UK Flag"> English
            </button>
            <button data-lang="es">
                <img src="image/icons/spain-flag.svg" alt="Spain Flag"> Español
            </button>
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

    // Inicializa com o idioma salvo
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
                // TENTATIVA 1: Método moderno (Clipboard API)
                if (navigator.clipboard && navigator.clipboard.writeText) {
                    await navigator.clipboard.writeText(email);
                    showToast(translations[lang].emailCopiedToast);
                    return; // Sucesso, para aqui
                }
                
                // TENTATIVA 2: Método antigo (document.execCommand)
                const textArea = document.createElement("textarea");
                textArea.value = email;
                textArea.style.position = "fixed";
                textArea.style.left = "-999999px"; // Mais confiável que opacity: 0
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
                
                // TENTATIVA 3: Fallback amigável
                showToast(`${translations[lang].copyErrorToast}: ${email}`);
                
                // Opcional: Seleciona o texto para o usuário copiar manualmente
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
        if (!toast) {
            console.warn("Elemento toast não encontrado");
            return;
        }
        
        toast.textContent = message;
        toast.classList.add("show");

        setTimeout(() => {
            toast.classList.remove("show");
        }, 2500);
    }
});