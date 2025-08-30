// projetos.js

// Objeto de traduções para a página de projetos
const translations = {
    pt: {
        projectsPageTitle: "Página de Portfólio",
        name: "Bernardo Paranhos",
        projectsHeaderTitle: "Projetos",
        backButton: "Voltar à Página Inicial",
        giroLiterarioTitle: "Giro Literário",
        giroLiterarioDescription: "Embora apresentado como uma estante virtual, o conceito pode ser facilmente aplicado a outros sistemas, processos e ideias que exigem organização e acesso eficiente a informações. O projeto demonstra habilidades em estruturação e otimização de dados, com frontend em HTML, CSS e JavaScript, backend em Node.js/Express e integração com MongoDB Atlas. Inclui pesquisa inteligente, endpoints REST e design responsivo, destacando a construção de uma solução completa e funcional.",
        accessProjectLink: "Acessar Projeto"
    },
    en: {
        projectsPageTitle: "Portfolio Page",
        name: "Bernardo Paranhos",
        projectsHeaderTitle: "Projects",
        backButton: "Back to Home Page",
        giroLiterarioTitle: "Literary Shelf",
        giroLiterarioDescription: "Although presented as a virtual bookshelf, the concept can be easily applied to other systems, processes, and ideas that require efficient organization and access to information. The project demonstrates skills in data structuring and optimization, with a frontend in HTML, CSS, and JavaScript, a backend in Node.js/Express, and integration with MongoDB Atlas. It includes intelligent search, REST endpoints, and responsive design, highlighting the construction of a complete and functional solution.",
        accessProjectLink: "Access Project"
    },
    es: {
        projectsPageTitle: "Página de Portafolio",
        name: "Bernardo Paranhos",
        projectsHeaderTitle: "Proyectos",
        backButton: "Volver a la Página Principal",
        giroLiterarioTitle: "Giro Literario",
        giroLiterarioDescription: "Aunque se presenta como una estantería virtual, el concepto puede aplicarse fácilmente a otros sistemas, procesos e ideas que requieren una organización y un acceso eficiente a la información. El proyecto demuestra habilidades en la estructuración y optimización de datos, con frontend en HTML, CSS y JavaScript, backend en Node.js/Express e integración con MongoDB Atlas. Incluye búsqueda inteligente, endpoints REST y diseño responsivo, destacando la construcción de una solución completa y funcional.",
        accessProjectLink: "Acceder al Proyecto"
    }
};

// Função para aplicar a tradução com base no idioma
function setLanguage(lang) {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-lang-key]').forEach(element => {
        const key = element.getAttribute('data-lang-key');
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });

    // Opcional: Adiciona a classe 'active' ao botão do idioma selecionado
    document.querySelectorAll('.lang-option').forEach(button => {
        button.classList.remove('active');
        if (button.getAttribute('data-lang') === lang) {
            button.classList.add('active');
        }
    });
}

// Quando a página é carregada, verifica o idioma salvo no localStorage e aplica
document.addEventListener('DOMContentLoaded', () => {
    const currentLang = localStorage.getItem('lang') || 'pt';
    setLanguage(currentLang);

    const languageToggle = document.getElementById('language-toggle');
    const languageDropdown = document.getElementById('language-dropdown');

    // Listener para o botão do globo
    languageToggle.addEventListener('click', () => {
        languageDropdown.classList.toggle('open');
    });

    // Listener para cada opção de idioma
    document.querySelectorAll('.lang-option').forEach(button => {
        button.addEventListener('click', () => {
            const selectedLang = button.getAttribute('data-lang');
            setLanguage(selectedLang);
            localStorage.setItem('lang', selectedLang);
            languageDropdown.classList.remove('open');
        });
    });

    // Fecha o dropdown se o usuário clicar fora dele
    document.addEventListener('click', (event) => {
        if (!languageToggle.contains(event.target) && !languageDropdown.contains(event.target)) {
            languageDropdown.classList.remove('open');
        }
    });
});