// =========================================
// TRADUÇÕES PARA A PÁGINA DE PROJETOS
// =========================================
const translations = {
    pt: {
        projectsPageTitle: "Projetos | Bernardo Paranhos",
        name: "Bernardo Paranhos",
        projectsHeaderTitle: "Projetos",
        backButton: "Voltar à Página Inicial",
        noProjectsMessage: "Nenhum projeto disponível no momento. Em breve novas adições!"
    },
    en: {
        projectsPageTitle: "Projects | Bernardo Paranhos",
        name: "Bernardo Paranhos",
        projectsHeaderTitle: "Projects",
        backButton: "Back to Home Page",
        noProjectsMessage: "No projects available at the moment. New additions coming soon!"
    },
    es: {
        projectsPageTitle: "Proyectos | Bernardo Paranhos",
        name: "Bernardo Paranhos",
        projectsHeaderTitle: "Proyectos",
        backButton: "Volver a la Página Principal",
        noProjectsMessage: "No hay proyectos disponibles en este momento. ¡Nuevas adiciones próximamente!"
    }
};

// =========================================
// CONFIGURAÇÕES GLOBAIS
// =========================================
const THEME_KEY = 'portfolioTheme';
const LANG_KEY = 'lang';
const LIGHT_MODE_CLASS = 'light-mode';
const LIGHT_MODE = 'light';
const DARK_MODE = 'dark';

let translatableElementsCache = null;
let currentLang = localStorage.getItem(LANG_KEY) || 'pt';
let lastAppliedLang = null;
let languageLoadingTimeout = null;

// =========================================
// FUNÇÕES DE TEMA
// =========================================

function applyTheme(theme) {
    const body = document.body;
    const lightModeToggle = document.getElementById('lightModeToggle');
    const darkModeToggle = document.getElementById('darkModeToggle');

    if (theme === LIGHT_MODE) {
        body.classList.add(LIGHT_MODE_CLASS);
        darkModeToggle.classList.remove('hidden');
        lightModeToggle.classList.add('hidden');
        localStorage.setItem(THEME_KEY, LIGHT_MODE);
    } else {
        body.classList.remove(LIGHT_MODE_CLASS);
        darkModeToggle.classList.add('hidden');
        lightModeToggle.classList.remove('hidden');
        localStorage.setItem(THEME_KEY, DARK_MODE);
    }
    
    if (window.opener) {
        try {
            window.opener.postMessage({ type: 'themeChange', theme: theme }, '*');
        } catch (e) {}
    }
}

function initTheme() {
    const savedTheme = localStorage.getItem(THEME_KEY) || DARK_MODE;
    applyTheme(savedTheme);
}

// =========================================
// FUNÇÕES DE TRADUÇÃO COM LOADING
// =========================================

function showLanguageLoading() {
    const globeButton = document.getElementById('language-toggle');
    if (!globeButton) return;
    
    if (!globeButton.dataset.originalContent) {
        globeButton.dataset.originalContent = globeButton.innerHTML;
    }
    
    globeButton.innerHTML = `
        <svg width="35" height="35" viewBox="0 0 24 24" fill="currentColor">
            <style>@keyframes lang-spin { to { transform: rotate(360deg); } }</style>
            <path d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z" 
                  style="animation: lang-spin 0.75s linear infinite; transform-origin: center;"></path>
        </svg>`;
    
    globeButton.classList.add('loading');
    const dropdown = document.getElementById('language-dropdown');
    if (dropdown) dropdown.classList.remove('open');
    
    document.querySelectorAll('.lang-option').forEach(btn => btn.classList.add('loading'));

    clearTimeout(languageLoadingTimeout);
    languageLoadingTimeout = setTimeout(() => hideLanguageLoading(), 10000);
}

function hideLanguageLoading() {
    clearTimeout(languageLoadingTimeout);
    const globeButton = document.getElementById('language-toggle');
    if (globeButton && globeButton.dataset.originalContent) {
        globeButton.innerHTML = globeButton.dataset.originalContent;
        globeButton.classList.remove('loading');
        delete globeButton.dataset.originalContent;
    }
    document.querySelectorAll('.lang-option').forEach(btn => btn.classList.remove('loading'));
}

async function setLanguage(lang) {
    if (lastAppliedLang === lang) {
        const dropdown = document.getElementById('language-dropdown');
        if (dropdown) dropdown.classList.remove('open');
        return;
    }
    
    if (!translations[lang]) lang = 'pt';
    showLanguageLoading();
    
    try {
        await new Promise(resolve => setTimeout(resolve, 150));
        document.documentElement.lang = lang;
        
        if (!translatableElementsCache) {
            translatableElementsCache = document.querySelectorAll('[data-lang-key]');
        }
        
        translatableElementsCache.forEach(element => {
            const key = element.getAttribute('data-lang-key');
            const translation = translations[lang][key];
            if (translation) {
                element.innerHTML = translation;
            }
        });
        
        document.querySelectorAll('.lang-option').forEach(button => {
            button.classList.toggle('active', button.getAttribute('data-lang') === lang);
        });
        
        updateProjectsContent(lang);
        
        localStorage.setItem('lang', lang);
        currentLang = lang;
        lastAppliedLang = lang;
        
        if (window.opener) {
            try {
                window.opener.postMessage({ type: 'languageChange', lang: lang }, '*');
            } catch (e) {}
        }
        
        await new Promise(resolve => setTimeout(resolve, 300));
    } catch (error) {
        console.error("Erro na troca de idioma:", error);
    } finally {
        hideLanguageLoading();
    }
}

/**
 * Mantém o container limpo ou com mensagem de "em breve"
 */
function updateProjectsContent(lang) {
    const projectsContainer = document.getElementById('projectsContainer');
    if (!projectsContainer) return;
    
    projectsContainer.innerHTML = `
        <div class="no-projects">
            <p>${translations[lang].noProjectsMessage}</p>
        </div>
    `;
}

// =========================================
// EVENT LISTENERS E INICIALIZAÇÃO
// =========================================

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    setLanguage(currentLang);
    
    const lightModeToggle = document.getElementById('lightModeToggle');
    const darkModeToggle = document.getElementById('darkModeToggle');

    lightModeToggle.addEventListener('click', () => applyTheme(LIGHT_MODE));
    darkModeToggle.addEventListener('click', () => applyTheme(DARK_MODE));
    
    const languageToggle = document.getElementById('language-toggle');
    const languageDropdown = document.getElementById('language-dropdown');

    if (languageToggle) {
        languageToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            languageDropdown.classList.toggle('open');
        });
    }

    document.querySelectorAll('.lang-option').forEach(button => {
        button.addEventListener('click', async (e) => {
            const selectedLang = e.currentTarget.getAttribute('data-lang');
            await setLanguage(selectedLang);
            languageDropdown.classList.remove('open');
        });
    });

    document.addEventListener('click', (e) => {
        if (languageToggle && !languageToggle.contains(e.target) && 
            languageDropdown && !languageDropdown.contains(e.target)) {
            languageDropdown.classList.remove('open');
        }
    });
    
    window.addEventListener('message', (event) => {
        if (event.data.type === 'themeChange') applyTheme(event.data.theme);
        if (event.data.type === 'languageChange') setLanguage(event.data.lang);
    });
    
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('theme')) applyTheme(urlParams.get('theme'));
    if (urlParams.get('lang')) setLanguage(urlParams.get('lang'));
});

window.addEventListener('load', () => {
    if (window.opener && !window.opener.closed) {
        try {
            const theme = document.body.classList.contains(LIGHT_MODE_CLASS) ? LIGHT_MODE : DARK_MODE;
            window.opener.postMessage({ type: 'syncState', theme, lang: currentLang }, '*');
        } catch (e) {}
    }
});