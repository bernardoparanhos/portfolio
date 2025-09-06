document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');

    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('open');
        menuToggle.classList.toggle('open');
    });

    // Fechar o menu ao clicar fora dele
    document.addEventListener('click', (event) => {
        if (!menuToggle.contains(event.target) && !sidebar.contains(event.target)) {
            if (sidebar.classList.contains('open')) {
                sidebar.classList.remove('open');
                menuToggle.classList.remove('open');
            }
        }
    });

    // Fechar o menu ao clicar em um item da sidebar (para navegação)
    const sidebarButtons = document.querySelectorAll('.sidebar-button');
    sidebarButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (sidebar.classList.contains('open')) {
                sidebar.classList.remove('open');
                menuToggle.classList.remove('open');
            }
        });
    });

    // --- Funcionalidade de Troca de Idiomas ---

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
            keywords: "OPERAÇÕES | OFFSHORE | LOGÍSTICA | SEGURANÇA DO TRABALHO",
            curriculumButton: "Currículo",
            aboutMeButton: "Sobre mim",
            projectsButton: "Projetos",
            welcomeHeading: "Bem-vindo!",
            welcomeText: "Olá! Sou <strong>Bernardo Paranhos</strong>, estudante de Engenharia de Produção focado em otimização de processos e gestão de riscos. Meu objetivo é aplicar conhecimentos em <strong>Logística, Operações Offshore e Segurança do Trabalho</strong> para criar ambientes industriais mais eficientes e seguros. Navegue pelo portfólio para conhecer meus projetos e competências.",
            
            educationTitle: "Educação",
            utfprDegree: "Universidade Tecnológica Federal do Paraná",
            utfprProgram: "Bacharelado - Engenharia de produção",
            utfprStart: "Inicio no segundo semestre de 2025",
            utfprPeriod: "2025 - 2030",
            utfprLocation: "Medianeira, Brasil",
            coursesTitle: "Cursos/Especializações",

            aboutMeTitle: "Sobre mim",
            softSkillsTitle: "Soft Skills",
            communicationSkill: "Comunicação Clara e Técnica",
            teamworkSkill: "Trabalho em Equipe",
            problemSolvingSkill: "Resolução de Problemas",
            analyticalSkill: "Raciocínio Analítico e Inteligência Emocional",
            hardSkillsTitle: "Hard Skills",
            excelPowerBI: "Excel/Power BI (nível básico)",
            dataAnalysis: "Análise de dados (em desenvolvimento)",
            webFundamentals: "Fundamentos de HTML/CSS/Javascript",
    aboutMeP1: "Como futuro Engenheiro de Produção, minha missão é resolver problemas complexos através da união entre tecnologia e processos eficientes. Tenho um foco direcionado para as áreas de <strong>Logística, Operações Offshore, Industriais e Segurança do Trabalho</strong>, onde busco aplicar meu raciocínio analítico para criar soluções que sejam não apenas produtivas, mas também seguras e sustentáveis.",
            
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
            copyErrorToast: "Não foi possível copiar o e-mail."
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
            keywords: "OPERATIONS | OFFSHORE | LOGISTICS | OCCUPATIONAL SAFETY",
            curriculumButton: "Resume",
            aboutMeButton: "About Me",
            projectsButton: "Projects",
            welcomeHeading: "Welcome!",
            welcomeText: "Hello! I'm <strong>Bernardo Paranhos</strong>, a Production Engineering student focused on process optimization and risk management. My goal is to apply knowledge in <strong>Logistics, Offshore Operations, and Occupational Safety</strong> to create more efficient and secure industrial environments. Browse my portfolio to see my projects and skills.",
            
            educationTitle: "Education",
            utfprDegree: "Federal University of Technology - Paraná",
            utfprProgram: "Bachelor's Degree - Production Engineering",
            utfprStart: "Starting in the second semester of 2025",
            utfprPeriod: "2025 - 2030",
            utfprLocation: "Medianeira, Brazil",
            coursesTitle: "Courses/Specializations",

            aboutMeTitle: "About Me",
            softSkillsTitle: "Soft Skills",
            communicationSkill: "Clear and Technical Communication",
            teamworkSkill: "Teamwork",
            problemSolvingSkill: "Problem Solving",
            analyticalSkill: "Analytical Thinking and Emotional Intelligence",
            hardSkillsTitle: "Hard Skills",
            excelPowerBI: "Excel/Power BI (basic level)",
            dataAnalysis: "Data Analysis (in development)",
            webFundamentals: "HTML/CSS/Javascript Fundamentals",
                aboutMeP1: "As a future Production Engineer, my mission is to solve complex problems by uniting technology and efficient processes. I have a direct focus on the areas of <strong>Logistics, Offshore Operations, Industrial Operations, and Occupational Safety</strong>, where I seek to apply my analytical reasoning to create solutions that are not only productive but also safe and sustainable.",

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
            copyErrorToast: "Could not copy email."
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
            keywords: "OPERACIONES | OFFSHORE | LOGÍSTICA | SEGURIDAD LABORAL",
            curriculumButton: "Currículum",
            aboutMeButton: "Sobre mí",
            projectsButton: "Proyectos",
            welcomeHeading: "¡Bienvenido!",
            welcomeText: "¡Hola! Soy <strong>Bernardo Paranhos</strong>, estudiante de Ingeniería de Producción enfocado en la optimización de procesos y gestión de riesgos. Mi objetivo es aplicar conocimientos en <strong>Logística, Operaciones Offshore y Seguridad Laboral</strong> para crear entornos industriales más eficientes y seguros. Navegue por el portafolio para conocer mis proyectos y competencias.",
            
            educationTitle: "Educación",
            utfprDegree: "Universidad Tecnológica Federal de Paraná",
            utfprProgram: "Licenciatura - Ingeniería de Producción",
            utfprStart: "Inicio en el segundo semestre de 2025",
            utfprPeriod: "2025 - 2030",
            utfprLocation: "Medianeira, Brasil",
            coursesTitle: "Cursos/Especializaciones",

            aboutMeTitle: "Sobre mí",
            softSkillsTitle: "Habilidades Blandas",
            communicationSkill: "Comunicación Clara y Técnica",
            teamworkSkill: "Trabajo en Equipo",
            problemSolvingSkill: "Resolución de Problemas",
            analyticalSkill: "Pensamiento Analítico e Inteligencia Emocional",
            hardSkillsTitle: "Habilidades Duras",
            excelPowerBI: "Excel/Power BI (nivel básico)",
            dataAnalysis: "Análisis de datos (en desarrollo)",
            webFundamentals: "Fundamentos de HTML/CSS/Javascript",
    aboutMeP1: "Como futuro Ingeniero de Producción, mi misión es resolver problemas complejos uniendo tecnología y procesos eficientes. Tengo un enfoque dirigido a las áreas de <strong>Logística, Operaciones Offshore, Industriales y Seguridad Laboral</strong>, donde busco aplicar mi razonamiento analítico para crear soluciones que no solo sean productivas, sino también seguras y sostenibles.",

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
            copyErrorToast: "No se pudo copiar el correo electrónico."
        }
    };

    let currentLang = localStorage.getItem('lang') || 'pt';

    function setLanguage(lang) {
        document.documentElement.lang = lang; 
        document.querySelectorAll('[data-lang-key]').forEach(element => {
            const key = element.getAttribute('data-lang-key');
            if (translations[lang] && translations[lang][key]) {
                element.innerHTML = translations[lang][key]; 
            }
        });
        document.querySelectorAll('.language-dropdown button').forEach(button => {
            if (button.dataset.lang === lang) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
        localStorage.setItem('lang', lang);
        // Atualiza a variável global do idioma
        currentLang = lang; 
    }

    const languageSelector = document.getElementById('languageSelector');

    const globeSVG = `
        <svg width="35px" height="35px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">
            <title>globe</title>
            <desc>Created with Sketch Beta.</desc>
            <defs></defs>
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
                <g id="Icon-Set" sketch:type="MSLayerGroup" transform="translate(-204.000000, -671.000000)" fill="#000000">
                    <path d="M231.596,694.829 C229.681,694.192 227.622,693.716 225.455,693.408 C225.75,691.675 225.907,689.859 225.957,688 L233.962,688 C233.783,690.521 232.936,692.854 231.596,694.829 L231.596,694.829 Z M223.434,700.559 C224.1,698.95 224.645,697.211 225.064,695.379 C226.862,695.645 228.586,696.038 230.219,696.554 C228.415,698.477 226.073,699.892 223.434,700.559 L223.434,700.559 Z M220.971,700.951 C220.649,700.974 220.328,701 220,701 C219.672,701 219.352,700.974 219.029,700.951 C218.178,699.179 217.489,697.207 216.979,695.114 C217.973,695.027 218.98,694.976 220,694.976 C221.02,694.976 222.027,695.027 223.022,695.114 C222.511,697.207 221.822,699.179 220.971,700.951 L220.971,700.951 Z M209.781,696.554 C211.414,696.038 213.138,695.645 214.936,695.379 C215.355,697.211 215.9,698.95 216.566,700.559 C213.927,699.892 211.586,698.477 209.781,696.554 L209.781,696.554 Z M208.404,694.829 C207.064,692.854 206.217,690.521 206.038,688 L214.043,688 C214.093,689.859 214.25,691.675 214.545,693.408 C212.378,693.716 210.319,694.192 208.404,694.829 L208.404,694.829 Z M208.404,679.171 C210.319,679.808 212.378,680.285 214.545,680.592 C214.25,682.325 214.093,684.141 214.043,686 L206.038,686 C206.217,683.479 207.064,681.146 208.404,679.171 L208.404,679.171 Z M216.566,673.441 C215.9,675.05 215.355,676.789 214.936,678.621 C213.138,678.356 211.414,677.962 209.781,677.446 C211.586,675.523 213.927,674.108 216.566,673.441 L216.566,673.441 Z M219.029,673.049 C219.352,673.027 219.672,673 220,673 C220.328,673 220.649,673.027 220.971,673.049 C221.822,674.821 222.511,676.794 223.022,678.886 C222.027,678.973 221.02,679.024 220,679.024 C218.98,679.024 217.973,678.973 216.979,678.886 C217.489,676.794 218.178,674.821 219.029,673.049 L219.029,673.049 Z M223.954,688 C223.9,689.761 223.74,691.493 223.439,693.156 C222.313,693.058 221.168,693 220,693 C218.832,693 217.687,693.058 216.562,693.156 C216.26,691.493 216.1,689.761 216.047,688 L223.954,688 L223.954,688 Z M216.047,686 C216.1,684.239 216.26,682.507 216.562,680.844 C217.687,680.942 218.832,681 220,681 C221.168,681 222.313,680.942 223.438,680.844 C223.74,682.507 223.9,684.239 223.954,686 L216.047,686 L216.047,686 Z M230.219,677.446 C228.586,677.962 226.862,677.962 225.064,678.621 C224.645,676.789 224.1,675.05 223.434,673.441 C226.073,674.108 228.415,675.523 230.219,677.446 L230.219,677.446 Z M231.596,679.171 C232.936,681.146 233.783,683.479 233.962,686 L225.957,686 C225.907,684.141 225.75,682.325 225.455,680.592 C227.622,680.285 229.681,679.808 231.596,679.171 L231.596,679.171 Z M220,671 C211.164,671 204,678.163 204,687 C204,695.837 211.164,703 220,703 C228.836,703 236,695.837 236,687 C236,678.163 228.836,671 220,671 L220,671 Z" id="globe" sketch:type="MSShapeGroup"></path>
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
            languageDropdown.classList.remove('open');
        });
    });

    document.addEventListener('click', (event) => {
        if (!languageSelector.contains(event.target) && languageDropdown.classList.contains('open')) {
            languageDropdown.classList.remove('open');
        }
    });

    setLanguage(currentLang);

    const copyEmailBtn = document.getElementById("copyEmail");

    if (copyEmailBtn) {
        copyEmailBtn.addEventListener("click", function (e) {
            e.preventDefault(); 
            const email = "beparanhosborges@gmail.com";
            const lang = currentLang; // Pega o idioma atual

            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(email).then(() => {
                    showToast(translations[lang].emailCopiedToast);
                }).catch(() => {
                    fallbackCopy(email, lang);
                });
            } else {
                fallbackCopy(email, lang);
            }
        });
    }

    function fallbackCopy(text, lang) {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.position = "fixed"; 
        textArea.style.opacity = "0";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        try {
            document.execCommand("copy");
            showToast(translations[lang].emailCopiedToast);
        } catch (err) {
            console.error("Erro ao copiar:", err);
            showToast(translations[lang].copyErrorToast);
        }

        document.body.removeChild(textArea);
    }

    
    function showToast(message) {
        const toast = document.getElementById("toast");
        toast.textContent = message;
        toast.classList.add("show");

        setTimeout(() => {
            toast.classList.remove("show");
        }, 2500);
    }
});