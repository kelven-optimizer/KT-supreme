// ============ PERFORMANCE OPTIMIZATIONS ============
// Versão simplificada - sem conflitos

(function() {
    'use strict';

    // 1. Lazy Loading de Imagens (apenas se suportado)
    if ('loading' in HTMLImageElement.prototype) {
        document.addEventListener('DOMContentLoaded', () => {
            const images = document.querySelectorAll('img[data-src]');
            images.forEach(img => {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
            });
        });
    }

    // 2. Otimizar imagens existentes
    document.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('img:not([loading])').forEach(img => {
            if (!img.hasAttribute('loading')) {
                img.loading = 'lazy';
            }
            if (!img.hasAttribute('decoding')) {
                img.decoding = 'async';
            }
        });
    });

    // 3. Preload de recursos críticos (apenas se não existir)
    const preloadCriticalResources = () => {
        const criticalImages = ['logo.png', 'kt-interface.png'];
        
        criticalImages.forEach(src => {
            const existing = document.querySelector(`link[href="${src}"]`);
            if (!existing) {
                const link = document.createElement('link');
                link.rel = 'preload';
                link.as = 'image';
                link.href = src;
                document.head.appendChild(link);
            }
        });
    };

    // 4. Otimizar font loading
    const optimizeFonts = () => {
        if ('fonts' in document) {
            Promise.all([
                document.fonts.load('400 1em Inter'),
                document.fonts.load('700 1em Inter')
            ]).then(() => {
                document.body.classList.add('fonts-loaded');
            }).catch(() => {
                // Silently fail
            });
        }
    };

    // 5. Reduzir motion em dispositivos que preferem
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.documentElement.style.setProperty('--animation-duration', '0.01ms');
    }

    // 6. Otimizar para mobile
    const isMobile = window.innerWidth < 768;
    const isLowEnd = navigator.hardwareConcurrency <= 4 || isMobile;
    
    if (isMobile) {
        document.documentElement.classList.add('mobile-optimized');
        
        // Reduzir backdrop-filter em mobile
        document.querySelectorAll('.glass, .liquid-glass').forEach(el => {
            el.style.backdropFilter = 'blur(8px)'; // Reduzido ainda mais
        });
    }
    
    if (isLowEnd) {
        document.documentElement.classList.add('low-end-device');
        
        // Desabilitar animações pesadas em low-end
        document.querySelectorAll('.animate-float, .animate-float-delayed').forEach(el => {
            el.style.animation = 'none';
        });
    }

    // 7. Otimizar scroll performance
    let scrollTimeout;
    let isScrolling = false;
    
    window.addEventListener('scroll', () => {
        if (!isScrolling) {
            document.body.classList.add('is-scrolling');
            isScrolling = true;
        }
        
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            document.body.classList.remove('is-scrolling');
            isScrolling = false;
        }, 150);
    }, { passive: true });

    // 8. Intersection Observer para animações
    if ('IntersectionObserver' in window) {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '50px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        document.addEventListener('DOMContentLoaded', () => {
            document.querySelectorAll('.reveal-on-scroll').forEach(el => {
                observer.observe(el);
            });
        });
    }

    // 9. Debounce resize events
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            // Trigger custom resize event
            window.dispatchEvent(new CustomEvent('optimizedResize'));
        }, 250);
    }, { passive: true });

    // 10. Inicializar quando DOM estiver pronto
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            preloadCriticalResources();
            optimizeFonts();
        });
    } else {
        preloadCriticalResources();
        optimizeFonts();
    }

    // 11. Console log
    console.log('%c⚡ Performance Optimizations Loaded (Enhanced)', 'color: #7C3AED; font-size: 14px; font-weight: bold;');

})();
