/* ============================================================================
   THIAGO - DIGITAL BUSINESS CARD CATALOG & BUILDER (app.js)
   ============================================================================ */

// 1. Proposal templates metadata
const templates = [
    { id: 1, name: "Propuesta 1: Deep Space Obsidian", style: "Neon Glow / Glassmorphism / Moderno", folder: "propuesta_1", hasStats: true, hasSkills: true, hasProjects: true },
    { id: 2, name: "Propuesta 2: Neo-Brutalista Bouncy", style: "Bordes Gruesos / Colores Sólidos / Divertido", folder: "propuesta_2", hasStats: true, hasSkills: true, hasProjects: true },
    { id: 3, name: "Propuesta 3: Smartphone Aura OS", style: "Pestañas Inferiores / Aura Glow / Sistema Móvil", folder: "propuesta_3", hasStats: true, hasSkills: true, hasProjects: true },
    { id: 4, name: "Propuesta 4: Glassmorphic Floating Grid", style: "Vidrio Esmerilado / Flotante / Minimalista", folder: "propuesta_4", hasStats: true, hasSkills: true, hasProjects: true },
    { id: 5, name: "Propuesta 5: Instagram Fluid Stories", style: "Historias / Navegación por Toques / Degradados", folder: "propuesta_5", hasStats: true, hasSkills: true, hasProjects: true },
    { id: 6, name: "Propuesta 6: Neo-Brutalist Stories", style: "Historias / Contraste Duro / Estilos Revista", folder: "propuesta_6", hasStats: true, hasSkills: true, hasProjects: true },
    { id: 7, name: "Propuesta 7: Cyberpunk Grid Terminal", style: "Consola Retro / Neon Activo / Ciberpunk", folder: "propuesta_7", hasStats: true, hasSkills: true, hasProjects: true },
    { id: 8, name: "Propuesta 8: Minimal Light Premium", style: "Fondo Claro / Tipografía Fina / Elegante", folder: "propuesta_8", hasStats: true, hasSkills: true, hasProjects: true },
    { id: 9, name: "Propuesta 9: Dark Horizon Minimal", style: "Horizontal / Centrado / Silencioso", folder: "propuesta_9", hasStats: true, hasSkills: true, hasProjects: false },
    { id: 10, name: "Propuesta 10: Retro Synthwave", style: "Estilo 80s / Sol Ocaso / Líneas de Rejilla", folder: "propuesta_10", hasStats: true, hasSkills: true, hasProjects: true },
    { id: 11, name: "Propuesta 11: Elegant Gold Executive", style: "Negro & Oro / Lujo / Diseños Simétricos", folder: "propuesta_11", hasStats: true, hasSkills: true, hasProjects: true },
    { id: 12, name: "Propuesta 12: Creative Pop Art", style: "Colores Primarios / Lunares / Divertido", folder: "propuesta_12", hasStats: true, hasSkills: true, hasProjects: true },
    { id: 13, name: "Propuesta 13: Clean Slate Tech", style: "Tarjetas Blancas / Sombras Suaves / Corporativo", folder: "propuesta_13", hasStats: true, hasSkills: true, hasProjects: true },
    { id: 14, name: "Propuesta 14: Aurora Borealis Fluid", style: "Degradado Dinámico / Orgánico / Ondas", folder: "propuesta_14", hasStats: true, hasSkills: true, hasProjects: true }
];

// 2. DOM Selectors Mapping for Live Preview Synchronization
const selectorsMap = {
    name: ['.profile-name', '.neo-name', '.app-name', '.story-title', '.profile-title', 'h1'],
    job: ['.profile-title-text', '.neo-job', '.neo-subtitle', '.app-title-text', '.story-job', '.profile-job', '.job-title', 'header p'],
    bio: ['.profile-bio', '.neo-bio', '.app-bio', '.story-desc', '.profile-description', '.bio-text', 'section p', '.slide-desc'],
    email: ['a[href^="mailto:"]', '.btn-email', '.neo-btn.btn-email', '.row-email', 'a.social-btn:nth-child(4)'],
    github: ['a[href*="github.com"]', '.btn-github', '.neo-btn.btn-github', '.row-github', 'a.social-btn:nth-child(1)'],
    linkedin: ['a[href*="linkedin.com"]', '.btn-linkedin', '.neo-btn.btn-linkedin', '.row-linkedin', 'a.social-btn:nth-child(2)'],
    twitter: ['a[href*="twitter.com"]', 'a[href*="x.com"]', '.btn-twitter', '.neo-btn.btn-twitter', '.row-twitter', 'a.social-btn:nth-child(3)']
};

const statsSelectors = [
    { val: '#stat-experience .stat-value, #neo-stat-exp .num, #stats-app-grid .app-stat-box:nth-child(1) .val, #story-slide-2 .story-stats-grid .story-stat-card:nth-child(1) .val, .story-stats-grid .story-stat-card:nth-child(1) .val', lbl: '#stat-experience .stat-label, #neo-stat-exp .lbl, #stats-app-grid .app-stat-box:nth-child(1) .lbl, #story-slide-2 .story-stats-grid .story-stat-card:nth-child(1) .lbl, .story-stats-grid .story-stat-card:nth-child(1) .lbl' },
    { val: '#stat-projects .stat-value, #neo-stat-projs .num, #stats-app-grid .app-stat-box:nth-child(2) .val, #story-slide-2 .story-stats-grid .story-stat-card:nth-child(2) .val, .story-stats-grid .story-stat-card:nth-child(2) .val', lbl: '#stat-projects .stat-label, #neo-stat-projs .lbl, #stats-app-grid .app-stat-box:nth-child(2) .lbl, #story-slide-2 .story-stats-grid .story-stat-card:nth-child(2) .lbl, .story-stats-grid .story-stat-card:nth-child(2) .lbl' },
    { val: '#stat-rating .stat-value, #neo-stat-rate .num, #stats-app-grid .app-stat-box:nth-child(3) .val, #story-slide-2 .story-stats-grid .story-stat-card:nth-child(3) .val, .story-stats-grid .story-stat-card:nth-child(3) .val', lbl: '#stat-rating .stat-label, #neo-stat-rate .lbl, #stats-app-grid .app-stat-box:nth-child(3) .lbl, #story-slide-2 .story-stats-grid .story-stat-card:nth-child(3) .lbl, .story-stats-grid .story-stat-card:nth-child(3) .lbl' }
];

// Generic theme CSS custom variables mapping
const themeColorsMap = [
    '--color-indigo', '--color-emerald', '--color-rose', '--color-sky', '--color-gold', '--color-violet', '--color-coral',
    '--neo-lavender', '--neo-mint', '--neo-rose', '--neo-sky', '--neo-gold', '--neo-violet', '--neo-coral'
];

// Curated presets by industry sector
const industryPresets = {
    tech: ['#6366f1', '#10b981', '#f43f5e', '#0ea5e9'],     // Indigo, Emerald, Rose, Sky
    corp: ['#1e3a8a', '#475569', '#cbd5e1', '#0f172a'],     // Navy Blue, Slate, light gray, dark slate
    health: ['#0f766e', '#14b8a6', '#a7f3d0', '#f0fdf4'],   // Teal, Mint, Light Green
    creative: ['#ec4899', '#f97316', '#8b5cf6', '#facc15'], // Pink, Orange, Purple, Yellow
    food: ['#c2410c', '#eab308', '#78350f', '#fef3c7']      // Terracota, Warm Yellow, Brown
};

// 3. Application State Variables
let currentStep = 1;
let selectedTemplateId = 1;
let clientAvatarBase64 = null;
let clientLogoBase64 = null;
let customColors = {
    accent1: '#6366f1', // Indigo
    accent2: '#10b981', // Emerald
    accent3: '#f43f5e', // Rose
    accent4: '#0ea5e9'  // Sky Blue
};
let isThiagoMode = false;

// 4. Initialization
document.addEventListener('DOMContentLoaded', () => {
    initCatalog();
    initWizard();
    initColors();
    initLogoExtractor();
    initIframeSync();
    checkURLParams();
});

// Catalog Populating
function initCatalog() {
    const catalogContainer = document.getElementById('catalog-container');
    catalogContainer.innerHTML = '';
    
    templates.forEach((tpl) => {
        const card = document.createElement('div');
        card.className = `catalog-card ${tpl.id === selectedTemplateId ? 'selected' : ''}`;
        card.dataset.id = tpl.id;
        
        card.innerHTML = `
            <div class="card-visual-info">
                <span class="card-badge-id">Modelo #${tpl.id}</span>
                <h3>${tpl.name}</h3>
                <div class="card-style-tags">
                    ${tpl.style.split(' / ').map(tag => `<span class="style-tag">${tag}</span>`).join('')}
                </div>
            </div>
            <button class="card-select-btn">➔</button>
        `;
        
        card.addEventListener('click', () => {
            document.querySelectorAll('.catalog-card').forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
            selectedTemplateId = tpl.id;
            updateFormVisibility();
            updatePreview();
        });
        
        catalogContainer.appendChild(card);
    });
    updateFormVisibility();
}

// Wizard controller logic
function initWizard() {
    const btnNext = document.getElementById('btn-wizard-next');
    const btnPrev = document.getElementById('btn-wizard-prev');
    
    btnNext.addEventListener('click', () => {
        if (currentStep < 5) {
            goToStep(currentStep + 1);
        } else {
            // Already handled on step 5 page or trigger WhatsApp manually
        }
    });
    
    btnPrev.addEventListener('click', () => {
        if (currentStep > 1) {
            goToStep(currentStep - 1);
        }
    });
    
    document.querySelectorAll('.step-segment').forEach(seg => {
        seg.addEventListener('click', () => {
            const targetStep = parseInt(seg.dataset.step);
            if (targetStep < currentStep || isThiagoMode) {
                goToStep(targetStep);
            }
        });
    });
}

function goToStep(step) {
    // Save Step States
    document.querySelectorAll('.wizard-panel').forEach((panel, index) => {
        if (index + 1 === step) {
            panel.classList.add('active');
        } else {
            panel.classList.remove('active');
        }
    });
    
    currentStep = step;
    
    // Update Indicator Bar
    document.querySelectorAll('.step-segment').forEach((seg, index) => {
        const segNum = index + 1;
        seg.classList.remove('active', 'completed');
        if (segNum === step) {
            seg.classList.add('active');
        } else if (segNum < step) {
            seg.classList.add('completed');
        }
    });
    
    // Buttons state toggle
    const btnNext = document.getElementById('btn-wizard-next');
    const btnPrev = document.getElementById('btn-wizard-prev');
    
    btnPrev.disabled = currentStep === 1;
    
    if (currentStep === 4) {
        updatePreview();
    }
    
    if (currentStep === 5) {
        btnNext.style.display = 'none';
        generateSummary();
    } else {
        btnNext.style.display = 'block';
        btnNext.innerHTML = '<span>Continuar</span>';
    }
}

// Show/Hide fields based on selected template configuration
function updateFormVisibility() {
    const tpl = templates.find(t => t.id === selectedTemplateId);
    
    const statsSec = document.getElementById('section-group-stats');
    const skillsSec = document.getElementById('section-group-skills');
    
    if (tpl.hasStats) {
        statsSec.style.display = 'flex';
    } else {
        statsSec.style.display = 'none';
    }
    
    if (tpl.hasSkills) {
        skillsSec.style.display = 'flex';
    } else {
        skillsSec.style.display = 'none';
    }
}

// Colors Preset Management
function initColors() {
    const selectIndustry = document.getElementById('select-industry');
    const presetsRow = document.getElementById('presets-row');
    
    // Render Presets
    const presetThemes = [
        { name: "Neon Cyberpunk", label: "Eléctrico", colors: ['#ff0055', '#00ffcc', '#9900ff', '#ffff00'] },
        { name: "Ocean Breeze", label: "Fresco", colors: ['#0284c7', '#0ea5e9', '#38bdf8', '#bae6fd'] },
        { name: "Sunset Gold", label: "Cálido", colors: ['#f97316', '#f59e0b', '#fbbf24', '#fef3c7'] },
        { name: "Emerald Sage", label: "Orgánico", colors: ['#059669', '#10b981', '#34d399', '#d1fae5'] }
    ];
    
    presetThemes.forEach(theme => {
        const btn = document.createElement('div');
        btn.className = 'preset-btn';
        btn.innerHTML = `
            <div class="preset-info">
                <span class="preset-name">${theme.name}</span>
                <span class="preset-label">${theme.label}</span>
            </div>
            <div class="preset-colors">
                ${theme.colors.map(c => `<span class="preset-color-dot" style="background-color: ${c}"></span>`).join('')}
            </div>
        `;
        
        btn.addEventListener('click', () => {
            document.querySelectorAll('.preset-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('selected');
            applyColors(theme.colors);
        });
        
        presetsRow.appendChild(btn);
    });
    
    selectIndustry.addEventListener('change', (e) => {
        const industry = e.target.value;
        if (industry && industryPresets[industry]) {
            applyColors(industryPresets[industry]);
        }
    });
    
    renderColorPickers();
}

function applyColors(colorsArray) {
    customColors.accent1 = colorsArray[0] || customColors.accent1;
    customColors.accent2 = colorsArray[1] || customColors.accent2;
    customColors.accent3 = colorsArray[2] || customColors.accent3;
    customColors.accent4 = colorsArray[3] || customColors.accent4;
    
    // Refresh pickers values
    renderColorPickers();
    updatePreviewColors();
}

function renderColorPickers() {
    const container = document.getElementById('manual-color-pickers');
    container.innerHTML = '';
    
    const pickersData = [
        { key: 'accent1', label: 'Acento Principal (Perfil)' },
        { key: 'accent2', label: 'Acento Métricas (Stats)' },
        { key: 'accent3', label: 'Acento Social (Redes)' },
        { key: 'accent4', label: 'Acento Core (Skills)' }
    ];
    
    pickersData.forEach(picker => {
        const item = document.createElement('div');
        item.className = 'color-picker-item';
        item.innerHTML = `
            <span>${picker.label}</span>
            <div class="color-picker-wrapper" style="background-color: ${customColors[picker.key]};">
                <input type="color" data-key="${picker.key}" value="${customColors[picker.key]}">
            </div>
        `;
        
        const input = item.querySelector('input');
        input.addEventListener('input', (e) => {
            const key = e.target.dataset.key;
            customColors[key] = e.target.value;
            e.target.parentElement.style.backgroundColor = e.target.value;
            updatePreviewColors();
        });
        
        container.appendChild(item);
    });
}

// Logo color extraction canvas logic
function initLogoExtractor() {
    const uploadZone = document.getElementById('logo-upload-zone');
    const fileInput = document.getElementById('logo-file-input');
    const previewWrapper = document.getElementById('logo-preview-wrapper');
    const previewImg = document.getElementById('logo-preview-img');
    const btnRemove = document.getElementById('btn-remove-logo');
    const paletteResult = document.getElementById('palette-result-wrapper');
    
    uploadZone.addEventListener('click', () => fileInput.click());
    
    fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const imgData = event.target.result;
                clientLogoBase64 = imgData;
                
                // Show logo preview
                previewImg.src = imgData;
                previewWrapper.style.display = 'flex';
                uploadZone.style.display = 'none';
                
                // Perform color extraction
                extractColorsFromImage(imgData);
            };
            reader.readAsDataURL(file);
        }
    });
    
    btnRemove.addEventListener('click', () => {
        clientLogoBase64 = null;
        fileInput.value = '';
        previewWrapper.style.display = 'none';
        uploadZone.style.display = 'block';
        paletteResult.style.display = 'none';
    });
}

function extractColorsFromImage(imageSrc) {
    const img = new Image();
    img.src = imageSrc;
    img.onload = () => {
        const canvas = document.getElementById('hidden-logo-canvas');
        const ctx = canvas.getContext('2d');
        
        // Downsample for performance and blending
        canvas.width = 50;
        canvas.height = 50;
        ctx.drawImage(img, 0, 0, 50, 50);
        
        const imgData = ctx.getImageData(0, 0, 50, 50).data;
        const colorCounts = {};
        
        // Scan pixels
        for (let i = 0; i < imgData.length; i += 4) {
            const r = imgData[i];
            const g = imgData[i+1];
            const b = imgData[i+2];
            const a = imgData[i+3];
            
            // Skip highly transparent elements
            if (a < 100) continue;
            
            // Exclude extreme neutrals (blacks, whites, neutral grays)
            const brightness = (r + g + b) / 3;
            const diffMaxMin = Math.max(r, g, b) - Math.min(r, g, b);
            
            if (brightness > 240 || brightness < 15 || diffMaxMin < 25) {
                continue;
            }
            
            // Group colors (round to nearest 15 for grouping similar colors)
            const rRound = Math.round(r / 15) * 15;
            const gRound = Math.round(g / 15) * 15;
            const bRound = Math.round(b / 15) * 15;
            const hex = rgbToHex(rRound, gRound, bRound);
            
            colorCounts[hex] = (colorCounts[hex] || 0) + 1;
        }
        
        // Sort and select top colors
        const sortedColors = Object.keys(colorCounts).sort((a, b) => colorCounts[b] - colorCounts[a]);
        const primaryVibrants = sortedColors.slice(0, 5);
        
        // Show palette dots
        const dotsContainer = document.getElementById('extracted-palette-dots');
        dotsContainer.innerHTML = '';
        
        if (primaryVibrants.length > 0) {
            primaryVibrants.forEach((color, idx) => {
                const dot = document.createElement('div');
                dot.className = `palette-dot ${idx === 0 ? 'active' : ''}`;
                dot.style.backgroundColor = color;
                
                dot.addEventListener('click', () => {
                    document.querySelectorAll('.palette-dot').forEach(d => d.classList.remove('active'));
                    dot.classList.add('active');
                    
                    // Assign as main accent and compute secondary matching colors
                    applyColors([color, lightenColor(color, 25), darkenColor(color, 20), lightenColor(color, 45)]);
                });
                
                dotsContainer.appendChild(dot);
            });
            
            // Auto apply the first extracted color scheme
            applyColors([primaryVibrants[0], lightenColor(primaryVibrants[0], 25), darkenColor(primaryVibrants[0], 20), lightenColor(primaryVibrants[0], 45)]);
            document.getElementById('palette-result-wrapper').style.display = 'flex';
        } else {
            // Fallback if logo is black/white
            document.getElementById('palette-result-wrapper').style.display = 'none';
        }
    };
}

// Hex/RGB Helper Utilities
function rgbToHex(r, g, b) {
    const toHex = (c) => {
        const hex = c.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    };
    return '#' + toHex(r) + toHex(g) + toHex(b);
}

function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

function lightenColor(hex, percent) {
    const rgb = hexToRgb(hex);
    if (!rgb) return hex;
    const r = Math.min(255, Math.floor(rgb.r + (255 - rgb.r) * (percent / 100)));
    const g = Math.min(255, Math.floor(rgb.g + (255 - rgb.g) * (percent / 100)));
    const b = Math.min(255, Math.floor(rgb.b + (255 - rgb.b) * (percent / 100)));
    return rgbToHex(r, g, b);
}

function darkenColor(hex, percent) {
    const rgb = hexToRgb(hex);
    if (!rgb) return hex;
    const r = Math.max(0, Math.floor(rgb.r * (1 - percent / 100)));
    const g = Math.max(0, Math.floor(rgb.g * (1 - percent / 100)));
    const b = Math.max(0, Math.floor(rgb.b * (1 - percent / 100)));
    return rgbToHex(r, g, b);
}

// Real-Time Iframe Synchronization
function initIframeSync() {
    const iframe = document.getElementById('preview-iframe');
    
    // Attach change/keyup listeners on inputs
    const inputsToWatch = [
        'input-name', 'input-job', 'input-bio', 'input-email', 'input-linkedin', 'input-github', 'input-twitter',
        'input-stat1-val', 'input-stat1-lbl', 'input-stat2-val', 'input-stat2-lbl', 'input-stat3-val', 'input-stat3-lbl',
        'input-skills-front', 'input-skills-back'
    ];
    
    inputsToWatch.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.addEventListener('input', () => {
                // Throttle / Sync values
                syncIframeDOM();
            });
        }
    });
    
    iframe.addEventListener('load', () => {
        syncIframeDOM();
    });
}

function updatePreview() {
    const iframe = document.getElementById('preview-iframe');
    const tpl = templates.find(t => t.id === selectedTemplateId);
    
    // Load the correct template folder
    iframe.src = `./${tpl.folder}/index.html`;
}

function syncIframeDOM() {
    const iframe = document.getElementById('preview-iframe');
    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    if (!iframeDoc) return;
    
    // 1. Text & Basic values
    const clientName = document.getElementById('input-name').value;
    const clientJob = document.getElementById('input-job').value;
    const clientBio = document.getElementById('input-bio').value;
    
    findAndSetText(iframeDoc, selectorsMap.name, clientName);
    findAndSetText(iframeDoc, selectorsMap.job, clientJob);
    findAndSetText(iframeDoc, selectorsMap.bio, clientBio);
    
    // 2. Links
    const email = document.getElementById('input-email').value;
    const linkedin = document.getElementById('input-linkedin').value;
    const github = document.getElementById('input-github').value;
    const twitter = document.getElementById('input-twitter').value;
    
    findAndSetHref(iframeDoc, selectorsMap.email, email.includes('@') && !email.startsWith('mailto:') ? `mailto:${email}` : email);
    findAndSetHref(iframeDoc, selectorsMap.github, github);
    findAndSetHref(iframeDoc, selectorsMap.linkedin, linkedin);
    findAndSetHref(iframeDoc, selectorsMap.twitter, twitter);
    
    // 3. Stats (Metrics)
    const tpl = templates.find(t => t.id === selectedTemplateId);
    if (tpl.hasStats) {
        for (let i = 0; i < 3; i++) {
            const val = document.getElementById(`input-stat${i+1}-val`).value;
            const lbl = document.getElementById(`input-stat${i+1}-lbl`).value;
            
            findAndSetText(iframeDoc, [statsSelectors[i].val], val);
            findAndSetText(iframeDoc, [statsSelectors[i].lbl], lbl);
        }
    }
    
    // 4. Skills (Pills)
    if (tpl.hasSkills) {
        const frontSkills = document.getElementById('input-skills-front').value.split(',').map(s => s.trim()).filter(s => s.length > 0);
        const backSkills = document.getElementById('input-skills-back').value.split(',').map(s => s.trim()).filter(s => s.length > 0);
        
        // Find skills container groups and replace items
        const frontendContainerSelectors = [
            '#skill-cat-frontend .skill-pills', 
            '#neo-front-skills .neo-pills', 
            '#app-skills-tech .app-pills-container', 
            '#story-slide-2 .story-skills-box .skills-subgroup:nth-child(1) .skills-row',
            '.skills-subgroup:nth-child(1) .skills-row',
            '.skill-category:nth-child(1) .skill-pills',
            '.app-skill-category:nth-child(1) .app-pills-container'
        ];
        
        const backendContainerSelectors = [
            '#skill-cat-backend .skill-pills', 
            '#neo-back-skills .neo-pills', 
            '#app-skills-back .app-pills-container', 
            '#story-slide-2 .story-skills-box .skills-subgroup:nth-child(2) .skills-row',
            '.skills-subgroup:nth-child(2) .skills-row',
            '.skill-category:nth-child(2) .skill-pills',
            '.app-skill-category:nth-child(2) .app-pills-container'
        ];
        
        replaceSkillsList(iframeDoc, frontendContainerSelectors, frontSkills);
        replaceSkillsList(iframeDoc, backendContainerSelectors, backSkills);
    }
    
    // 5. Inyect colors variables in CSS Root
    updatePreviewColors();
}

function findAndSetText(doc, selectors, text) {
    for (const selector of selectors) {
        const el = doc.querySelector(selector);
        if (el) {
            el.innerText = text;
            break; // Stop after first successful match
        }
    }
}

function findAndSetHref(doc, selectors, link) {
    for (const selector of selectors) {
        const el = doc.querySelector(selector);
        if (el) {
            el.href = link;
            // Also update spans if they show social name
            const labelSpan = el.querySelector('span');
            if (labelSpan && labelSpan.innerText !== "Email" && labelSpan.innerText !== "GitHub" && labelSpan.innerText !== "LinkedIn" && labelSpan.innerText !== "Twitter") {
                // Keep label unchanged or customize
            }
        }
    }
}

function replaceSkillsList(doc, selectors, skillsList) {
    for (const selector of selectors) {
        const el = doc.querySelector(selector);
        if (el) {
            // Read target tag style/class from original elements to preserve look
            let sampleClass = 'pill';
            const firstChild = el.querySelector('span');
            if (firstChild) {
                sampleClass = firstChild.className;
            }
            
            // Clear original
            el.innerHTML = '';
            
            // Append new ones
            skillsList.forEach(skill => {
                const span = doc.createElement('span');
                span.className = sampleClass;
                span.innerText = skill;
                el.appendChild(span);
            });
            break;
        }
    }
}

function updatePreviewColors() {
    const iframe = document.getElementById('preview-iframe');
    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    if (!iframeDoc) return;
    
    const root = iframeDoc.documentElement;
    
    // Assign color mappings dynamically
    // Proposal 1 Variable Mappings:
    root.style.setProperty('--color-indigo', customColors.accent1);
    root.style.setProperty('--color-emerald', customColors.accent2);
    root.style.setProperty('--color-rose', customColors.accent3);
    root.style.setProperty('--color-sky', customColors.accent4);
    
    // Proposal 2 Variable Mappings:
    root.style.setProperty('--neo-lavender', lightenColor(customColors.accent1, 20));
    root.style.setProperty('--neo-mint', lightenColor(customColors.accent2, 20));
    root.style.setProperty('--neo-rose', lightenColor(customColors.accent3, 20));
    root.style.setProperty('--neo-sky', lightenColor(customColors.accent4, 20));
    
    // Other variable standard fallbacks:
    themeColorsMap.forEach(varName => {
        if (varName.includes('indigo') || varName.includes('lavender') || varName.includes('profile')) {
            root.style.setProperty(varName, customColors.accent1);
        } else if (varName.includes('emerald') || varName.includes('mint') || varName.includes('stats')) {
            root.style.setProperty(varName, customColors.accent2);
        } else if (varName.includes('rose') || varName.includes('socials') || varName.includes('coral')) {
            root.style.setProperty(varName, customColors.accent3);
        } else if (varName.includes('sky') || varName.includes('skills')) {
            root.style.setProperty(varName, customColors.accent4);
        }
    });
}

// Summary generation and WhatsApp sharing link
function generateSummary() {
    const tpl = templates.find(t => t.id === selectedTemplateId);
    const clientName = document.getElementById('input-name').value;
    const industry = document.getElementById('select-industry').value;
    
    document.getElementById('summary-template-name').innerText = tpl.name;
    document.getElementById('summary-client-name').innerText = clientName;
    
    const industryNames = {
        tech: "Tecnología / SaaS",
        corp: "Corporativo / Legal",
        health: "Salud / Wellness",
        creative: "Agencia Creativa / Arte",
        food: "Alimentos / Gastronomía"
    };
    
    document.getElementById('summary-client-industry').innerText = industryNames[industry] || "Personalizada";
    
    // Color summary
    const summaryPalette = document.getElementById('summary-palette-preview');
    summaryPalette.innerHTML = '';
    Object.keys(customColors).forEach(key => {
        const dot = document.createElement('span');
        dot.className = 'summary-color-dot';
        dot.style.backgroundColor = customColors[key];
        summaryPalette.appendChild(dot);
    });
    
    // Configure WhatsApp Button click
    const btnWhatsapp = document.getElementById('btn-whatsapp-send');
    btnWhatsapp.onclick = () => {
        sendWhatsappMessage();
    };
}

function serializeState() {
    const params = new URLSearchParams();
    params.set('t', selectedTemplateId);
    params.set('name', document.getElementById('input-name').value);
    params.set('job', document.getElementById('input-job').value);
    params.set('bio', document.getElementById('input-bio').value);
    params.set('email', document.getElementById('input-email').value);
    params.set('linkedin', document.getElementById('input-linkedin').value);
    params.set('github', document.getElementById('input-github').value);
    params.set('twitter', document.getElementById('input-twitter').value);
    
    const tpl = templates.find(t => t.id === selectedTemplateId);
    if (tpl.hasStats) {
        params.set('s1v', document.getElementById('input-stat1-val').value);
        params.set('s1l', document.getElementById('input-stat1-lbl').value);
        params.set('s2v', document.getElementById('input-stat2-val').value);
        params.set('s2l', document.getElementById('input-stat2-lbl').value);
        params.set('s3v', document.getElementById('input-stat3-val').value);
        params.set('s3l', document.getElementById('input-stat3-lbl').value);
    }
    
    if (tpl.hasSkills) {
        params.set('skf', document.getElementById('input-skills-front').value);
        params.set('skb', document.getElementById('input-skills-back').value);
    }
    
    // Save Colors in hex separated by comma
    params.set('c', `${customColors.accent1.replace('#', '')},${customColors.accent2.replace('#', '')},${customColors.accent3.replace('#', '')},${customColors.accent4.replace('#', '')}`);
    
    // Thiago flag
    params.set('thiago', 'true');
    
    return params.toString();
}

function sendWhatsappMessage() {
    const clientName = document.getElementById('input-name').value;
    const tpl = templates.find(t => t.id === selectedTemplateId);
    
    // Host URL builder
    const currentBaseUrl = window.location.origin + window.location.pathname;
    const shareableUrl = `${currentBaseUrl}?${serializeState()}`;
    
    const messageText = `¡Hola Thiago! He completado la personalización de mi tarjeta digital interactiva.

*Modelo Elegido*: ${tpl.name}
*Nombre*: ${clientName}

Aquí puedes revisar mi diseño definitivo y descargar el proyecto ZIP para desplegar:
${shareableUrl}`;

    const encodedText = encodeURIComponent(messageText);
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodedText}`;
    
    window.open(whatsappUrl, '_blank');
}

// Parameter reader on startup (Loads Thiago Mode)
async function checkURLParams() {
    const params = new URLSearchParams(window.location.search);
    if (params.has('thiago') || params.has('t')) {
        isThiagoMode = true;
        
        // Show Developer top bar
        const devBanner = document.getElementById('dev-banner');
        devBanner.style.display = 'block';
        
        // Populate inputs from url params
        if (params.has('t')) {
            selectedTemplateId = parseInt(params.get('t'));
            // Re-select in catalog visually
            setTimeout(() => {
                document.querySelectorAll('.catalog-card').forEach(c => {
                    c.classList.remove('selected');
                    if (parseInt(c.dataset.id) === selectedTemplateId) {
                        c.classList.add('selected');
                    }
                });
            }, 300);
        }
        
        if (params.has('name')) {
            document.getElementById('input-name').value = params.get('name');
            document.getElementById('dev-client-name').innerText = params.get('name');
        }
        if (params.has('job')) document.getElementById('input-job').value = params.get('job');
        if (params.has('bio')) document.getElementById('input-bio').value = params.get('bio');
        if (params.has('email')) document.getElementById('input-email').value = params.get('email');
        if (params.has('linkedin')) document.getElementById('input-linkedin').value = params.get('linkedin');
        if (params.has('github')) document.getElementById('input-github').value = params.get('github');
        if (params.has('twitter')) document.getElementById('input-twitter').value = params.get('twitter');
        
        if (params.has('s1v')) document.getElementById('input-stat1-val').value = params.get('s1v');
        if (params.has('s1l')) document.getElementById('input-stat1-lbl').value = params.get('s1l');
        if (params.has('s2v')) document.getElementById('input-stat2-val').value = params.get('s2v');
        if (params.has('s2l')) document.getElementById('input-stat2-lbl').value = params.get('s2l');
        if (params.has('s3v')) document.getElementById('input-stat3-val').value = params.get('s3v');
        if (params.has('s3l')) document.getElementById('input-stat3-lbl').value = params.get('s3l');
        
        if (params.has('skf')) document.getElementById('input-skills-front').value = params.get('skf');
        if (params.has('skb')) document.getElementById('input-skills-back').value = params.get('skb');
        
        if (params.has('c')) {
            const hexColors = params.get('c').split(',');
            if (hexColors.length >= 4) {
                customColors.accent1 = '#' + hexColors[0];
                customColors.accent2 = '#' + hexColors[1];
                customColors.accent3 = '#' + hexColors[2];
                customColors.accent4 = '#' + hexColors[3];
                renderColorPickers();
            }
        }
        
        // Go straight to preview step (Step 4) for verification
        updateFormVisibility();
        goToStep(4);
        
        // Initialize download trigger
        document.getElementById('btn-download-zip').addEventListener('click', async () => {
            await downloadProductionZip();
        });
    }
}

// 5. ZIP Generation Engine using JSZip (Client-Side compile)
async function downloadProductionZip() {
    const btn = document.getElementById('btn-download-zip');
    const originalText = btn.innerHTML;
    btn.disabled = true;
    btn.innerHTML = '<span>Compilando...</span>';
    
    try {
        const zip = new JSZip();
        const tpl = templates.find(t => t.id === selectedTemplateId);
        
        // A. Fetch and parse template index.html
        const htmlRes = await fetch(`./${tpl.folder}/index.html`);
        const htmlText = await htmlRes.text();
        
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlText, "text/html");
        
        // Inyect data in the html DOM structure
        const clientName = document.getElementById('input-name').value;
        const clientJob = document.getElementById('input-job').value;
        const clientBio = document.getElementById('input-bio').value;
        const email = document.getElementById('input-email').value;
        const linkedin = document.getElementById('input-linkedin').value;
        const github = document.getElementById('input-github').value;
        const twitter = document.getElementById('input-twitter').value;
        
        findAndSetText(doc, selectorsMap.name, clientName);
        findAndSetText(doc, selectorsMap.job, clientJob);
        findAndSetText(doc, selectorsMap.bio, clientBio);
        
        findAndSetHref(doc, selectorsMap.email, email.includes('@') && !email.startsWith('mailto:') ? `mailto:${email}` : email);
        findAndSetHref(doc, selectorsMap.github, github);
        findAndSetHref(doc, selectorsMap.linkedin, linkedin);
        findAndSetHref(doc, selectorsMap.twitter, twitter);
        
        if (tpl.hasStats) {
            for (let i = 0; i < 3; i++) {
                const val = document.getElementById(`input-stat${i+1}-val`).value;
                const lbl = document.getElementById(`input-stat${i+1}-lbl`).value;
                findAndSetText(doc, [statsSelectors[i].val], val);
                findAndSetText(doc, [statsSelectors[i].lbl], lbl);
            }
        }
        
        if (tpl.hasSkills) {
            const frontSkills = document.getElementById('input-skills-front').value.split(',').map(s => s.trim()).filter(s => s.length > 0);
            const backSkills = document.getElementById('input-skills-back').value.split(',').map(s => s.trim()).filter(s => s.length > 0);
            
            const frontendContainerSelectors = [
                '#skill-cat-frontend .skill-pills', '#neo-front-skills .neo-pills', '#app-skills-tech .app-pills-container', 
                '#story-slide-2 .story-skills-box .skills-subgroup:nth-child(1) .skills-row', '.skills-subgroup:nth-child(1) .skills-row',
                '.skill-category:nth-child(1) .skill-pills', '.app-skill-category:nth-child(1) .app-pills-container'
            ];
            
            const backendContainerSelectors = [
                '#skill-cat-backend .skill-pills', '#neo-back-skills .neo-pills', '#app-skills-back .app-pills-container', 
                '#story-slide-2 .story-skills-box .skills-subgroup:nth-child(2) .skills-row', '.skills-subgroup:nth-child(2) .skills-row',
                '.skill-category:nth-child(2) .skill-pills', '.app-skill-category:nth-child(2) .app-pills-container'
            ];
            
            replaceSkillsList(doc, frontendContainerSelectors, frontSkills);
            replaceSkillsList(doc, backendContainerSelectors, backSkills);
        }
        
        // Export updated index.html
        zip.file("index.html", doc.documentElement.outerHTML);
        
        // B. Fetch style.css and inject custom color overrides into the file variables definition
        const cssRes = await fetch(`./${tpl.folder}/style.css`);
        let cssText = await cssRes.text();
        
        // Dynamic Variable Injection in Style.css content
        let colorOverrides = `\n:root {\n`;
        colorOverrides += `  --color-indigo: ${customColors.accent1} !important;\n`;
        colorOverrides += `  --color-emerald: ${customColors.accent2} !important;\n`;
        colorOverrides += `  --color-rose: ${customColors.accent3} !important;\n`;
        colorOverrides += `  --color-sky: ${customColors.accent4} !important;\n`;
        colorOverrides += `  --neo-lavender: ${lightenColor(customColors.accent1, 20)} !important;\n`;
        colorOverrides += `  --neo-mint: ${lightenColor(customColors.accent2, 20)} !important;\n`;
        colorOverrides += `  --neo-rose: ${lightenColor(customColors.accent3, 20)} !important;\n`;
        colorOverrides += `  --neo-sky: ${lightenColor(customColors.accent4, 20)} !important;\n`;
        
        themeColorsMap.forEach(varName => {
            if (varName.includes('indigo') || varName.includes('lavender')) {
                colorOverrides += `  ${varName}: ${customColors.accent1} !important;\n`;
            } else if (varName.includes('emerald') || varName.includes('mint')) {
                colorOverrides += `  ${varName}: ${customColors.accent2} !important;\n`;
            } else if (varName.includes('rose') || varName.includes('coral')) {
                colorOverrides += `  ${varName}: ${customColors.accent3} !important;\n`;
            } else if (varName.includes('sky') || varName.includes('skills')) {
                colorOverrides += `  ${varName}: ${customColors.accent4} !important;\n`;
            }
        });
        colorOverrides += `}\n`;
        
        // Prepend variables overrides to the CSS file
        cssText = colorOverrides + cssText;
        zip.file("style.css", cssText);
        
        // C. Fetch app.js template
        const jsRes = await fetch(`./${tpl.folder}/app.js`);
        const jsText = await jsRes.text();
        zip.file("app.js", jsText);
        
        // D. Fetch avatar image
        const avatarRes = await fetch(`./${tpl.folder}/avatar.png`);
        const avatarBlob = await avatarRes.blob();
        zip.file("avatar.png", avatarBlob);
        
        // E. Compress and trigger local download
        const zipBlob = await zip.generateAsync({ type: "blob" });
        const downloadUrl = URL.createObjectURL(zipBlob);
        
        const tempLink = document.createElement("a");
        tempLink.href = downloadUrl;
        tempLink.download = `${clientName.replace(/\s+/g, '_')}_tarjeta_digital.zip`;
        tempLink.click();
        
        // Clear
        URL.revokeObjectURL(downloadUrl);
        
    } catch (err) {
        console.error("Error generating ZIP project:", err);
        alert("Ocurrió un error al compilar el ZIP: " + err.message);
    } finally {
        btn.disabled = false;
        btn.innerHTML = originalText;
    }
}
