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

// --- FUNÇÃO DE IDIOMA ---
function setLanguage(lang) {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-lang-key]').forEach(element => {
        const key = element.getAttribute('data-lang-key');
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });

    document.querySelectorAll('.lang-option').forEach(button => {
        button.classList.remove('active');
        if (button.getAttribute('data-lang') === lang) {
            button.classList.add('active');
        }
    });
}

// --- LÓGICA DE TEMA CLARO/ESCURO (REFATORADA) ---
const THEME_KEY = 'portfolioTheme';
const LIGHT_MODE_CLASS = 'light-mode';
const LIGHT_MODE = 'light';
const DARK_MODE = 'dark';

/**
 * Aplica o tema ao body e sincroniza os botões usando classes CSS
 * @param {string} theme - 'light' ou 'dark'
 */
function applyTheme(theme) {
    const body = document.body;
    const lightModeToggle = document.getElementById('lightModeToggle');
    const darkModeToggle = document.getElementById('darkModeToggle');

    if (theme === LIGHT_MODE) {
        body.classList.add(LIGHT_MODE_CLASS);
        // Remove o estilo inline e usa classes para evitar avisos do VS Code
        darkModeToggle.classList.remove('hidden'); 
        lightModeToggle.classList.add('hidden'); 
        localStorage.setItem(THEME_KEY, LIGHT_MODE);
    } else {
        body.classList.remove(LIGHT_MODE_CLASS);
        // Remove o estilo inline e usa classes para evitar avisos do VS Code
        darkModeToggle.classList.add('hidden');  
        lightModeToggle.classList.remove('hidden');
        localStorage.setItem(THEME_KEY, DARK_MODE);
    }
}

/**
 * Inicializa o tema ao carregar a página
 */
function initTheme() {
    const savedTheme = localStorage.getItem(THEME_KEY) || DARK_MODE;
    applyTheme(savedTheme);
}

// --- DOMContentLoaded ---
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Inicialização de Tema e Idioma
    initTheme();
    const currentLang = localStorage.getItem('lang') || 'pt';
    setLanguage(currentLang);

    // 2. Listeners de Tema
    const lightModeToggle = document.getElementById('lightModeToggle');
    const darkModeToggle = document.getElementById('darkModeToggle');

    lightModeToggle.addEventListener('click', () => {
        applyTheme(LIGHT_MODE);
    });

    darkModeToggle.addEventListener('click', () => {
        applyTheme(DARK_MODE);
    });

    // 3. Lógica do Seletor de Idioma
    const languageToggle = document.getElementById('language-toggle');
    const languageDropdown = document.getElementById('language-dropdown');

    if (languageToggle) {
        languageToggle.addEventListener('click', () => {
            languageDropdown.classList.toggle('open');
        });
    }

    document.querySelectorAll('.lang-option').forEach(button => {
        button.addEventListener('click', () => {
            const selectedLang = button.getAttribute('data-lang');
            setLanguage(selectedLang);
            localStorage.setItem('lang', selectedLang);
            languageDropdown.classList.remove('open');
        });
    });

    // Fecha o dropdown ao clicar fora
    document.addEventListener('click', (event) => {
        if (languageToggle && !languageToggle.contains(event.target) && !languageDropdown.contains(event.target)) {
            languageDropdown.classList.remove('open');
        }
    });
});