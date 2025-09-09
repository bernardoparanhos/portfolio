// projetos.js

// Objeto de traduções para a página de projetos
const translations = {
    pt: {
        projectsPageTitle: "Página de Portfólio",
        name: "Bernardo Paranhos",
        projectsHeaderTitle: "Projetos",
        backButton: "Voltar à Página Inicial",
    },
    en: {
        projectsPageTitle: "Portfolio Page",
        name: "Bernardo Paranhos",
        projectsHeaderTitle: "Projects",
        backButton: "Back to Home Page",
    },
    es: {
        projectsPageTitle: "Página de Portafolio",
        name: "Bernardo Paranhos",
        projectsHeaderTitle: "Proyectos",
        backButton: "Volver a la Página Principal",
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