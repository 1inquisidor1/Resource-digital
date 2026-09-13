// SCROLL REVEAL
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            entry.target.style.transitionDelay = (i % 8) * 60 + 'ms';
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

// GENERATE SYSTEM CARD
function generateSystemCard(system) {
    var badgeClass = system.status === 'Pendiente' ? 'badge--pending' : 
                     system.status === 'En progreso' ? 'badge--progress' :
                     system.phase === 3 ? 'badge--future' : 'badge--planned';
    
    var tags = system.tags.map(function(tag) { return '<span class="tag">' + tag + '</span>'; }).join('');
    
    return '<article class="system-card reveal" data-phase="' + system.phase + '">' +
        '<div class="system-card__header">' +
            '<span class="system-card__id">' + system.id + '</span>' +
            '<span class="badge ' + badgeClass + '">' + system.status + '</span>' +
        '</div>' +
        '<h3 class="system-card__title">' + system.name + '</h3>' +
        '<p class="system-card__desc">' + system.desc + '</p>' +
        '<div class="system-card__meta">' +
            '<span class="tag">Fase ' + system.phase + '</span>' +
            tags +
        '</div>' +
    '</article>';
}

// GENERATE TIMELINE
function generateTimeline(phases) {
    return phases.map(function(phase, i) {
        var activeClass = i === 0 ? 'timeline__item--active' : '';
        return '<div class="timeline__item ' + activeClass + '">' +
            '<div class="timeline__marker"></div>' +
            '<div class="timeline__content">' +
                '<span class="timeline__phase">Fase ' + phase.id + ' - Semanas ' + phase.weeks + '</span>' +
                '<h3>' + phase.name + '</h3>' +
                '<span class="badge badge--' + phase.statusClass + '">' + phase.status + '</span>' +
            '</div>' +
        '</div>';
    }).join('');
}

// LOAD DATA
async function loadData() {
    try {
        const response = await fetch('assets/data/systems.json');
        const data = await response.json();
        
        // Update hero stats
        var statNumber = document.querySelector('.hero__stats .stat strong');
        if (statNumber) statNumber.textContent = data.project.totalSystems;
        
        // Generate system cards
        var systemsContainer = document.getElementById('systems-grid');
        if (systemsContainer) {
            systemsContainer.innerHTML = data.systems.map(generateSystemCard).join('');
        }
        
        // Generate timeline
        var timelineContainer = document.getElementById('timeline-track');
        if (timelineContainer) {
            timelineContainer.innerHTML = generateTimeline(data.phases);
        }
        
        // Observe reveal elements
        document.querySelectorAll('.reveal, .system-card').forEach(function(el) {
            revealObserver.observe(el);
        });
        
    } catch (error) {
        console.error('Error loading data:', error);
    }
}

// INIT
document.addEventListener('DOMContentLoaded', loadData);
