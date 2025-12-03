// Objeto de traduções para a página de projetos (MANTIDO)
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

// --- FUNÇÃO DE IDIOMA (MANTIDA) ---
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

// =========================================
// NOVO: LÓGICA DE TEMA CLARO/ESCURO
// =========================================

const THEME_KEY = 'portfolioTheme';
const LIGHT_MODE_CLASS = 'light-mode';
const LIGHT_MODE = 'light';
const DARK_MODE = 'dark';

/**
 * Aplica o tema ao body e salva no localStorage
 * @param {string} theme - 'light' ou 'dark'
 */
function applyTheme(theme) {
    const body = document.body;
    const lightModeToggle = document.getElementById('lightModeToggle');
    const darkModeToggle = document.getElementById('darkModeToggle');

    if (theme === LIGHT_MODE) {
        body.classList.add(LIGHT_MODE_CLASS);
        darkModeToggle.style.display = 'block'; 
        lightModeToggle.style.display = 'none'; 
        localStorage.setItem(THEME_KEY, LIGHT_MODE);
    } else {
        body.classList.remove(LIGHT_MODE_CLASS);
        darkModeToggle.style.display = 'none';  
        lightModeToggle.style.display = 'block';
        localStorage.setItem(THEME_KEY, DARK_MODE);
    }
}

/**
 * Inicializa o tema ao carregar a página (Sincroniza com a página principal)
 */
function initTheme() {
    const savedTheme = localStorage.getItem(THEME_KEY) || DARK_MODE; // Padrão desta página é Dark
    applyTheme(savedTheme);
}


// --- DOMContentLoaded ---
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. SINCRONIZAÇÃO DO TEMA
    initTheme();

    const lightModeToggle = document.getElementById('lightModeToggle');
    const darkModeToggle = document.getElementById('darkModeToggle');

    lightModeToggle.addEventListener('click', () => {
        applyTheme(LIGHT_MODE);
    });

    darkModeToggle.addEventListener('click', () => {
        applyTheme(DARK_MODE);
    });


    // 2. SINCRONIZAÇÃO DO IDIOMA
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
            localStorage.setItem('lang', selectedLang); // Salva no localStorage para sincronizar
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