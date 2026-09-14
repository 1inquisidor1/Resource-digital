'use strict';

// ==================== SCROLL REVEAL ANIMATION ====================
const revealObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal--visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15,
    rootMargin: '0px 0px -60px 0px'
});

// ==================== NAVBAR SCROLL EFFECT ====================
const navbar = document.getElementById('navbar');

function updateNavbar() {
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('nav--scrolled');
        } else {
            navbar.classList.remove('nav--scrolled');
        }
    }
}

window.addEventListener('scroll', updateNavbar, { passive: true });

// ==================== MOBILE MENU TOGGLE ====================
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

if (navToggle && navLinks) {
    navToggle.addEventListener('click', function() {
        navToggle.classList.toggle('nav__toggle--active');
        navLinks.classList.toggle('nav__links--active');
    });
    
    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(function(link) {
        link.addEventListener('click', function() {
            navToggle.classList.remove('nav__toggle--active');
            navLinks.classList.remove('nav__links--active');
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.nav')) {
            navToggle.classList.remove('nav__toggle--active');
            navLinks.classList.remove('nav__links--active');
        }
    });
}

// ==================== SYSTEM CARD GENERATOR ====================
function generateSystemCard(system) {
    var iconMap = {"S01":"icon-node-core.svg","S02":"icon-rocket.svg","S03":"icon-sensors.svg","S04":"icon-database-buffer.svg","S05":"icon-wave-signal.svg","S06":"icon-bridge-chain.svg","S07":"icon-trophy.svg","S08":"icon-grid-panel.svg","S09":"icon-affiliates.svg","S10":"icon-auth.svg","S11":"icon-wallet.svg","S12":"icon-notifications.svg","S13":"icon-support.svg","S14":"icon-cog-wheel.svg","S15":"icon-analytics.svg","S16":"icon-document-shield.svg","S17":"icon-flags.svg","S18":"icon-compass.svg","S19":"icon-denet.svg","S20":"icon-acurast.svg","S21":"icon-payos.svg"};
    var iconPath = iconMap[system.id] || 'icon-status.svg';
    var badgeMap = {
        'pending': 'badge--pending',
        'in-progress': 'badge--progress',
        'planned': 'badge--planned',
        'future': 'badge--future'
    };
    
    var statusTextMap = {
        'pending': 'Pendiente',
        'in-progress': 'En progreso',
        'planned': 'Planificado',
        'future': 'Futuro'
    };
    
    var categoryMap = {
        'core': 'Core',
        'depin': 'DePIN',
        'support': 'Soporte',
        'ecosystem': 'Ecosistema'
    };
    
    var badgeClass = badgeMap[system.status] || 'badge--planned';
    var statusText = statusTextMap[system.status] || system.status;
    var categoryName = categoryMap[system.category] || '';
    
    var tags = (system.tags || []).map(function(tag) {
        return '<span class="tag">' + escapeHtml(tag) + '</span>';
    }).join('');
    
    return '<article class="system-card reveal" data-phase="' + system.phase + '" data-category="' + system.category + '">' +
        '<div class="system-card__header">' +
            '<span class="system-card__id">' + escapeHtml(system.id) + '</span>' +
            '<span class="badge ' + badgeClass + '">' + statusText + '</span>' +
        '</div>' +
        '<div class="system-card__icon">' +
            '<img src="assets/images/' + iconPath + '" alt="" width="32" height="32">' +
        '</div>' +
        '<h3 class="system-card__title">' + escapeHtml(system.name) + '</h3>' +
        '<p class="system-card__desc">' + escapeHtml(system.description) + '</p>' +
        '<div class="system-card__meta">' +
            '<span class="tag">' + system.id + '</span>' +
            '<span class="tag">Fase ' + system.phase + '</span>' +
        '</div>' +
    '</article>';
}

function escapeHtml(text) {
    if (!text) return '';
    return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

// ==================== TIMELINE GENERATOR ====================
function generateTimeline(phases) {
    return phases.map(function(phase, i) {
        var activeClass = i === 0 ? 'timeline__item--active' : '';
        return '<div class="timeline__item ' + activeClass + ' reveal" style="transition-delay: ' + (i * 150) + 'ms">' +
            '<div class="timeline__marker"></div>' +
            '<div class="timeline__content">' +
                '<span class="timeline__phase">Fase ' + phase.id + ' - Semanas ' + escapeHtml(phase.weeks) + '</span>' +
                '<h3>' + escapeHtml(phase.name) + '</h3>' +
                '<p>' + (phase.description ? escapeHtml(phase.description) : '') + '</p>' +
                '<span class="badge badge--' + phase.statusClass + '">' + escapeHtml(phase.status) + '</span>' +
            '</div>' +
        '</div>';
    }).join('');
}

// ==================== HTML ESCAPE HELPER ====================
function escapeHtml(text) {
    if (!text) return '';
    var div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// ==================== LOAD DATA ====================
async function loadData() {
    try {
        var response = await fetch('assets/data/systems.json');
        if (!response.ok) {
            throw new Error('Failed to load systems data: ' + response.status);
        }
        var data = await response.json();
        
        // Update hero stats
        var statNumbers = document.querySelectorAll('.hero__stats .stat__number');
        if (data.project && data.project.totalSystems) {
            if (statNumbers[0]) {
                statNumbers[0].textContent = data.project.totalSystems;
            }
        }
        
        // Generate system cards
        var systemsContainer = document.getElementById('systems-grid');
        if (systemsContainer && data.systems) {
            systemsContainer.innerHTML = data.systems.map(generateSystemCard).join('');
        }
        
        // Generate timeline
        var timelineContainer = document.getElementById('timeline-track');
        if (timelineContainer && data.phases) {
            timelineContainer.innerHTML = '<div class="timeline__track">' + generateTimeline(data.phases) + '</div>';
        }
        
        // Observe reveal elements
        document.querySelectorAll('.reveal').forEach(function(el) {
            revealObserver.observe(el);
        });
        
    } catch (error) {
        // Error handled silently
        
        // Show fallback message
        var systemsContainer = document.getElementById('systems-grid');
        if (systemsContainer) {
            systemsContainer.innerHTML = '<p style="color: var(--text-2); text-align: center; grid-column: 1/-1;">' +
                'Error al cargar los datos. Por favor, recarga la pagina o consulta la ' +
                '<a href="https://github.com/1inquisidor1/Resource-digital/tree/main/docs/systems" style="color: var(--accent);">documentacion en GitHub</a>.' +
            '</p>';
        }
    }
}

// ==================== SMOOTH SCROLL FOR ANCHOR LINKS ====================
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        var targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        var target = document.querySelector(targetId);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==================== KEYBOARD NAVIGATION ====================
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        if (navToggle) navToggle.classList.remove('nav__toggle--active');
        if (navLinks) navLinks.classList.remove('nav__links--active');
    }
});

// ==================== INITIALIZE ====================
document.addEventListener('DOMContentLoaded', function() {
    loadData();
    updateNavbar();
});
