// ============ PERFORMANCE OPTIMIZATIONS ============
// Adicione este script no final do index.html antes do </body>

// 1. Lazy Loading de Imagens
document.addEventListener('DOMContentLoaded', () => {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                observer.unobserve(img);
            }
        });
    }, {
        rootMargin: '50px'
    });

    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
});

// 2. Debounce para eventos de scroll
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 3. Throttle para eventos frequentes
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// 4. Otimizar scroll animations
const optimizedScrollHandler = throttle(() => {
    const scrolled = window.scrollY > 50;
    const nav = document.getElementById('navbar');
    if (nav) {
        nav.style.transform = scrolled ? 'translateY(0)' : 'translateY(0)';
    }
}, 100);

window.addEventListener('scroll', optimizedScrollHandler, { passive: true });

// 5. Preload de recursos críticos
const preloadCriticalResources = () => {
    const criticalImages = [
        'logo.png',
        'kt-interface.png',
        'task.jpg'
    ];
    
    criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
    });
};

// 6. Reduzir repaints/reflows
const optimizeAnimations = () => {
    // Usar transform e opacity ao invés de top/left/width/height
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => {
        el.style.willChange = 'transform, opacity';
    });
};

// 7. Event Delegation para clicks
document.addEventListener('click', (e) => {
    // Delegar eventos de click ao invés de múltiplos listeners
    const target = e.target.closest('[data-action]');
    if (target) {
        const action = target.dataset.action;
        // Handle actions here
    }
}, { passive: true });

// 8. Cleanup de animações não visíveis
const cleanupObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            entry.target.style.animationPlayState = 'paused';
        } else {
            entry.target.style.animationPlayState = 'running';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('[class*="animate-"]').forEach(el => {
    cleanupObserver.observe(el);
});

// 9. Otimizar Three.js background (se existir)
if (typeof THREE !== 'undefined') {
    // Reduzir qualidade em dispositivos móveis
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
        // Configurações de baixa qualidade para mobile
        window.THREE_LOW_QUALITY = true;
    }
}

// 10. Cache de elementos DOM
const DOMCache = {
    navbar: document.getElementById('navbar'),
    hero: document.getElementById('hero-section'),
    modals: document.querySelectorAll('[id^="modal-"]')
};

// 11. Otimizar modal animations
const optimizeModals = () => {
    DOMCache.modals.forEach(modal => {
        modal.style.display = 'none';
        modal.style.visibility = 'hidden';
    });
};

// 12. Reduzir complexidade de backdrop-filter em mobile
if (window.innerWidth < 768) {
    document.querySelectorAll('.glass, .liquid-glass').forEach(el => {
        el.style.backdropFilter = 'blur(10px)';
    });
}

// 13. Usar requestAnimationFrame para animações suaves
let ticking = false;
window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            // Suas animações de scroll aqui
            ticking = false;
        });
        ticking = true;
    }
}, { passive: true });

// 14. Comprimir e otimizar imagens automaticamente
const optimizeImages = () => {
    document.querySelectorAll('img').forEach(img => {
        // Adicionar loading="lazy" se não existir
        if (!img.hasAttribute('loading')) {
            img.loading = 'lazy';
        }
        // Adicionar decoding="async"
        if (!img.hasAttribute('decoding')) {
            img.decoding = 'async';
        }
    });
};

// 15. Inicializar otimizações
const initOptimizations = () => {
    preloadCriticalResources();
    optimizeAnimations();
    optimizeModals();
    optimizeImages();
};

// Executar quando DOM estiver pronto
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initOptimizations);
} else {
    initOptimizations();
}

// 16. Service Worker para cache (opcional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Descomente para ativar service worker
        // navigator.serviceWorker.register('/sw.js');
    });
}

// 17. Reduzir motion em dispositivos que preferem
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.style.setProperty('--animation-duration', '0.01ms');
}

// 18. Otimizar font loading
const optimizeFonts = () => {
    if ('fonts' in document) {
        Promise.all([
            document.fonts.load('400 1em Inter'),
            document.fonts.load('700 1em Inter')
        ]).then(() => {
            document.body.classList.add('fonts-loaded');
        });
    }
};

optimizeFonts();

// 19. Cleanup de event listeners não usados
window.addEventListener('beforeunload', () => {
    // Cleanup aqui se necessário
});

// 20. Console performance tips
console.log('%c⚡ Performance Optimizations Loaded', 'color: #7C3AED; font-size: 14px; font-weight: bold;');
console.log('%cTips: Use Chrome DevTools Lighthouse para análise detalhada', 'color: #A78BFA; font-size: 12px;');
