// =========================================
// TRADUÇÕES PARA A PÁGINA DE PROJETOS
// =========================================
const translations = {
    pt: {
        projectsPageTitle: "Projetos | Bernardo Paranhos",
        name: "Bernardo Paranhos",
        projectsHeaderTitle: "Projetos",
        backButton: "Voltar à Página Inicial",
        noProjectsMessage: "Nenhum projeto disponível no momento. Em breve novas adições!",
        
        // Traduções específicas do projeto de KPIs
        projectKpiTitle: "Do código ao indicador: automatizando o PCM com Python",
        projectKpiPeriod: "jan/2026 - fev/2026",
        projectKpiInstitution: "Projeto acadêmico - Universidade Tecnológica Federal do Paraná",
        projectKpiDescription: "Gerador de KPIs de manutenção em Python, simulando 90 dias de operação industrial. Transforma lógica de programação em indicadores que apoiam decisões no PCM (Planejamento e Controle de Manutenção).",
        featureEquipments: "15 equipamentos simulados",
        featureKPIs: "MTBF, MTTR, Disponibilidade",
        featureCriticality: "Análise de criticidade",
        featureExport: "Exportação Excel/CSV",
        techPython: "Python",
        techPandas: "Pandas",
        techNumpy: "NumPy",
        techDataAnalysis: "Análise de Dados",
        outputsTitle: "Arquivos gerados (7 CSVs + Excel)",
        equipmentsFile: "Dados dos equipamentos",
        ordersFile: "Histórico de OM",
        kpiEquipFile: "KPIs por equipamento",
        kpiTypeFile: "KPIs por tipo",
        kpiAvailabilityFile: "Disponibilidade mensal",
        kpiCostsFile: "Análise financeira",
        kpiTrendFile: "Tendências",
        excelFile: "Relatório consolidado",
        viewGithub: "Ver no GitHub",
        viewReadme: "Ver README",

        // Traduções específicas do projeto Mapa de Risco
        projectMapaTitle: "Mapa de Risco Industrial — SST Interativo",
        projectMapaPeriod: "fev/2026 - mar/2026",
        projectMapaInstitution: "Projeto acadêmico de SST - UTFPR Medianeira",
        projectMapaDescription: "Ferramenta de visualização de periculosidade baseada nas Normas Regulamentadoras (NR) do MTE. Representa um galpão industrial com 10 zonas classificadas pela Matriz de Risco 5x5.",
        featureMapaInterativo: "Mapa SVG 100% clicável",
        featureMapaCalor: "Heatmap de riscos",
        featurePainelNR: "Painel dinâmico de NRs e EPIs",
        featureAcessibilidade: "Acessível (ARIA/Teclado)",
        techHTML5: "HTML5",
        techCSS3: "CSS3 (Variáveis/Animações)",
        techJS: "Vanilla JS",
        mapaImg1Alt: "Visão geral do Mapa de Risco Industrial",
        mapaImg2Alt: "Detalhes do painel com NRs e EPIs aplicáveis",
        viewLive: "Acessar Projeto ao Vivo"
    },
    en: {
        projectsPageTitle: "Projects | Bernardo Paranhos",
        name: "Bernardo Paranhos",
        projectsHeaderTitle: "Projects",
        backButton: "Back to Home Page",
        noProjectsMessage: "No projects available at the moment. New additions coming soon!",
        
        // Translations for KPI project
        projectKpiTitle: "From code to indicator: automating PCM with Python",
        projectKpiPeriod: "Jan 2026 - Feb 2026",
        projectKpiInstitution: "Academic project - Federal University of Technology - Paraná",
        projectKpiDescription: "Maintenance KPI generator in Python, simulating 90 days of industrial operation. Transforms programming logic into indicators that support PCM (Planning and Maintenance Control) decisions.",
        featureEquipments: "15 simulated equipment",
        featureKPIs: "MTBF, MTTR, Availability",
        featureCriticality: "Criticality analysis",
        featureExport: "Excel/CSV Export",
        techPython: "Python",
        techPandas: "Pandas",
        techNumpy: "NumPy",
        techDataAnalysis: "Data Analysis",
        outputsTitle: "Generated files (7 CSVs + Excel)",
        equipmentsFile: "Equipment data",
        ordersFile: "Maintenance orders history",
        kpiEquipFile: "KPIs per equipment",
        kpiTypeFile: "KPIs by type",
        kpiAvailabilityFile: "Monthly availability",
        kpiCostsFile: "Financial analysis",
        kpiTrendFile: "Trends",
        excelFile: "Consolidated report",
        viewGithub: "View on GitHub",
        viewReadme: "View README",

        // Translations for Risk Map project
        projectMapaTitle: "Industrial Risk Map — Interactive OSH",
        projectMapaPeriod: "Feb 2026 - Mar 2026",
        projectMapaInstitution: "OSH Academic Project - UTFPR Medianeira",
        projectMapaDescription: "Hazard visualization tool based on the Ministry of Labor's Regulatory Norms (NR). Represents an industrial warehouse with 10 zones classified by the 5x5 Risk Matrix.",
        featureMapaInterativo: "100% clickable SVG map",
        featureMapaCalor: "Risk Heatmap",
        featurePainelNR: "Dynamic NR & PPE panel",
        featureAcessibilidade: "Accessible (ARIA/Keyboard)",
        techHTML5: "HTML5",
        techCSS3: "CSS3 (Variables/Animations)",
        techJS: "Vanilla JS",
        mapaImg1Alt: "Overview of the Industrial Risk Map",
        mapaImg2Alt: "Details of the panel with applicable NRs and PPEs",
        viewLive: "View Live Demo"
    },
    es: {
        projectsPageTitle: "Proyectos | Bernardo Paranhos",
        name: "Bernardo Paranhos",
        projectsHeaderTitle: "Proyectos",
        backButton: "Volver a la Página Principal",
        noProjectsMessage: "No hay proyectos disponibles en este momento. ¡Nuevas adiciones próximamente!",
        
        // Traducciones para el proyecto de KPI
        projectKpiTitle: "Del código al indicador: automatizando el PCM con Python",
        projectKpiPeriod: "ene 2026 - feb 2026",
        projectKpiInstitution: "Proyecto académico - Universidad Tecnológica Federal de Paraná",
        projectKpiDescription: "Generador de KPIs de mantenimiento en Python, simulando 90 días de operación industrial. Transforma la lógica de programación en indicadores que apoyan decisiones en el PCM (Planificación y Control de Mantenimiento).",
        featureEquipments: "15 equipos simulados",
        featureKPIs: "MTBF, MTTR, Disponibilidad",
        featureCriticality: "Análisis de criticidad",
        featureExport: "Exportación Excel/CSV",
        techPython: "Python",
        techPandas: "Pandas",
        techNumpy: "NumPy",
        techDataAnalysis: "Análisis de Datos",
        outputsTitle: "Archivos generados (7 CSVs + Excel)",
        equipmentsFile: "Datos de equipos",
        ordersFile: "Historial de OM",
        kpiEquipFile: "KPIs por equipo",
        kpiTypeFile: "KPIs por tipo",
        kpiAvailabilityFile: "Disponibilidad mensual",
        kpiCostsFile: "Análisis financiero",
        kpiTrendFile: "Tendencias",
        excelFile: "Informe consolidado",
        viewGithub: "Ver en GitHub",
        viewReadme: "Ver README",

        // Traducciones para el proyecto Mapa de Riesgo
        projectMapaTitle: "Mapa de Riesgo Industrial — SST Interactivo",
        projectMapaPeriod: "feb 2026 - mar 2026",
        projectMapaInstitution: "Proyecto académico de SST - UTFPR Medianeira",
        projectMapaDescription: "Herramienta de visualización de peligrosidad basada en las Normas Reguladoras (NR) del Ministerio de Trabajo. Representa una nave industrial con 10 zonas clasificadas por la Matriz de Riesgo 5x5.",
        featureMapaInterativo: "Mapa SVG 100% clicable",
        featureMapaCalor: "Mapa de calor de riesgos",
        featurePainelNR: "Panel dinámico de NR y EPP",
        featureAcessibilidade: "Accesible (ARIA/Teclado)",
        techHTML5: "HTML5",
        techCSS3: "CSS3 (Variables/Animaciones)",
        techJS: "Vanilla JS",
        mapaImg1Alt: "Visión general del Mapa de Riesgo Industrial",
        mapaImg2Alt: "Detalles del panel con NRs y EPPs aplicables",
        viewLive: "Ver Proyecto en Vivo"
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
// DADOS DOS PROJETOS
// =========================================
const projectsData = [
    {
        id: 'mapa-risco-industrial',
        dataAttrs: {
            title: 'projectMapaTitle',
            period: 'projectMapaPeriod',
            institution: 'projectMapaInstitution',
            description: 'projectMapaDescription'
        },
        images: [
          { src: '../image/img1.png', altKey: 'mapaImg1Alt' },
            { src: '../image/img2.png', altKey: 'mapaImg2Alt' }
        ],
        features: [
            { key: 'featureMapaInterativo', icon: '🗺️' },
            { key: 'featureMapaCalor', icon: '🔴' },
            { key: 'featurePainelNR', icon: '📋' },
            { key: 'featureAcessibilidade', icon: '♿' }
        ],
        technologies: [
            { key: 'techHTML5' },
            { key: 'techCSS3' },
            { key: 'techJS' },
            { key: 'techPython' }
        ],
        outputs: [], // Deixado vazio de propósito para a seção não renderizar
        links: {
            github: 'https://github.com/bernardoparanhos/mapa-risco-industrial',
            readme: 'https://github.com/bernardoparanhos/mapa-risco-industrial#readme',
            live: 'https://bernardoparanhos.github.io/mapa-risco-industrial/' // Ajuste esta URL se hospedar em outro local
        }
    },
    {
        id: 'kpi-manutencao',
        dataAttrs: {
            title: 'projectKpiTitle',
            period: 'projectKpiPeriod',
            institution: 'projectKpiInstitution',
            description: 'projectKpiDescription'
        },
        features: [
            { key: 'featureEquipments', icon: '⏱️' },
            { key: 'featureKPIs', icon: '📊' },
            { key: 'featureCriticality', icon: '⚠️' },
            { key: 'featureExport', icon: '📁' }
        ],
        technologies: [
            { key: 'techPython' },
            { key: 'techPandas' },
            { key: 'techNumpy' },
            { key: 'techDataAnalysis' }
        ],
        outputs: [
            { file: 'equipamentos.csv', descriptionKey: 'equipmentsFile' },
            { file: 'ordens_manutencao.csv', descriptionKey: 'ordersFile' },
            { file: 'kpi_equipamentos.csv', descriptionKey: 'kpiEquipFile' },
            { file: 'kpi_manutencao.csv', descriptionKey: 'kpiTypeFile' },
            { file: 'kpi_disponibilidade.csv', descriptionKey: 'kpiAvailabilityFile' },
            { file: 'kpi_custos.csv', descriptionKey: 'kpiCostsFile' },
            { file: 'kpi_tendencia.csv', descriptionKey: 'kpiTrendFile' },
            { file: 'kpis_manutencao_completo.xlsx', descriptionKey: 'excelFile' }
        ],
        links: {
            github: 'https://github.com/bernardoparanhos/gerador_kpis.py',
            readme: 'https://github.com/bernardoparanhos/gerador_kpis.py#readme'
        }
    }
];

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

// =========================================
// FUNÇÃO DE CRIAÇÃO DO CARD DE PROJETO
// =========================================

function createProjectCard(project, lang) {
    const t = translations[lang];
    
    // Criar features HTML
    const featuresHTML = project.features.map(f => `
        <span class="feature-tag">
            <span style="margin-right: 4px;">${f.icon}</span>
            ${t[f.key]}
        </span>
    `).join('');
    
    // Criar tecnologias HTML
    const techHTML = project.technologies.map(tech => `
        <span class="tech-badge">${t[tech.key]}</span>
    `).join('');
    
    // GALERIA CONDICIONAL: Só renderiza se houver imagens
    let galleryHTML = '';
    if (project.images && project.images.length > 0) {
        const imgsHTML = project.images.map(img => `
            <div class="project-img-wrapper">
                <img src="${img.src}" alt="${t[img.altKey] || 'Imagem do projeto'}" class="project-img" loading="lazy">
            </div>
        `).join('');
        galleryHTML = `<div class="project-gallery">${imgsHTML}</div>`;
    }
    
    // OUTPUTS CONDICIONAL: Só renderiza se houver arquivos de output
    let outputsSection = '';
    if (project.outputs && project.outputs.length > 0) {
        const outputsHTML = project.outputs.map(output => `
            <li><code>${output.file}</code> - ${t[output.descriptionKey]}</li>
        `).join('');
        
        outputsSection = `
            <div class="project-outputs">
                <details class="outputs-details">
                    <summary class="outputs-summary">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                            <polyline points="14 2 14 8 20 8"/>
                            <line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
                            <polyline points="10 9 9 9 8 9"/>
                        </svg>
                        <span>${t.outputsTitle}</span>
                        <svg class="chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <polyline points="6 9 12 15 18 9"/>
                        </svg>
                    </summary>
                    <ul class="outputs-list">
                        ${outputsHTML}
                    </ul>
                </details>
            </div>
        `;
    }

    // BOTÃO LIVE DEMO CONDICIONAL
    let liveLinkHTML = '';
    if (project.links.live) {
        liveLinkHTML = `
            <a href="${project.links.live}" class="project-link" target="_blank" rel="noopener noreferrer" style="color: var(--cor-acento);">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                </svg>
                ${t.viewLive}
            </a>
        `;
    }
    
    return `
        <div class="project-card" data-project="${project.id}">
            <div class="project-header">
                <h2 class="project-title">${t[project.dataAttrs.title]}</h2>
                <span class="project-date">${t[project.dataAttrs.period]}</span>
            </div>
            
            <div class="project-institution">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
                <span>${t[project.dataAttrs.institution]}</span>
            </div>
            
            <p class="project-description">${t[project.dataAttrs.description]}</p>
            
            ${galleryHTML}
            
            <div class="project-features">
                ${featuresHTML}
            </div>
            
            <div class="project-tech">
                ${techHTML}
            </div>
            
            ${outputsSection}
            
            <div class="project-footer">
                ${liveLinkHTML}
                <a href="${project.links.github}" class="project-link" target="_blank" rel="noopener noreferrer">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                    ${t.viewGithub}
                </a>
                <a href="${project.links.readme}" class="project-link" target="_blank" rel="noopener noreferrer">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                        <polyline points="14 2 14 8 20 8"/>
                        <line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
                    </svg>
                    ${t.viewReadme}
                </a>
            </div>
        </div>
    `;
}

// =========================================
// FUNÇÃO DE ATUALIZAÇÃO DO CONTEÚDO
// =========================================

function updateProjectsContent(lang) {
    const projectsContainer = document.getElementById('projectsContainer');
    if (!projectsContainer) return;
    
    if (projectsData.length > 0) {
        // Gerar HTML para todos os projetos
        const projectsHTML = projectsData.map(project => 
            createProjectCard(project, lang)
        ).join('');
        
        projectsContainer.innerHTML = projectsHTML;
    } else {
        // Se não houver projetos, mostrar mensagem
        projectsContainer.innerHTML = `
            <div class="no-projects">
                <p>${translations[lang].noProjectsMessage}</p>
            </div>
        `;
    }
}

// =========================================
// FUNÇÕES DE ANIMAÇÃO E INTERAÇÃO
// =========================================

function setupProjectInteractions() {
    // Fechar todos os details quando mudar de idioma
    document.querySelectorAll('.outputs-details[open]').forEach(details => {
        details.removeAttribute('open');
    });
    
    // Adicionar tracking de cliques nos links dos projetos (opcional)
    document.querySelectorAll('.project-link').forEach(link => {
        link.addEventListener('click', (e) => {
            const projectCard = e.target.closest('.project-card');
            const projectId = projectCard?.dataset.project;
            
            // Aqui você pode adicionar analytics se desejar
            console.log(`Projeto ${projectId} - Link clicado: ${link.href}`);
        });
    });
}

// =========================================
// FUNÇÕES DE SINCRONIZAÇÃO
// =========================================

function syncWithOpener() {
    if (window.opener && !window.opener.closed) {
        try {
            const theme = document.body.classList.contains(LIGHT_MODE_CLASS) ? LIGHT_MODE : DARK_MODE;
            window.opener.postMessage({ 
                type: 'syncState', 
                theme, 
                lang: currentLang 
            }, '*');
        } catch (e) {
            console.warn('Não foi possível sincronizar com a janela pai');
        }
    }
}

// =========================================
// EVENT LISTENERS E INICIALIZAÇÃO
// =========================================

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    setLanguage(currentLang);
    
    const lightModeToggle = document.getElementById('lightModeToggle');
    const darkModeToggle = document.getElementById('darkModeToggle');

    if (lightModeToggle && darkModeToggle) {
        lightModeToggle.addEventListener('click', () => applyTheme(LIGHT_MODE));
        darkModeToggle.addEventListener('click', () => applyTheme(DARK_MODE));
    }
    
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
    syncWithOpener();
    setupProjectInteractions();
});

// =========================================
// EXPOSIÇÃO DE FUNÇÕES GLOBAIS (opcional)
// =========================================
window.projectsAPI = {
    refreshProjects: () => updateProjectsContent(currentLang),
    getCurrentLang: () => currentLang,
    getProjectsData: () => projectsData
};