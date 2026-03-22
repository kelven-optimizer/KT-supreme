// ============================================
// KT OPTIMIZER - OPTIMIZED ANIMATIONS
// Versão otimizada mantendo visual bonito
// ============================================

(function() {
    'use strict';

    // Detectar capacidade do dispositivo
    const isMobile = window.innerWidth < 768;
    const isLowEnd = navigator.hardwareConcurrency <= 4 || isMobile;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Configurações baseadas no dispositivo
    const config = {
        particleCount: isLowEnd ? 25 : 40, // Reduzido ainda mais
        maxTrail: isLowEnd ? 8 : 15, // Reduzido ainda mais
        enableMouseTrail: !isMobile && !prefersReducedMotion,
        enableParallax: !isMobile && !prefersReducedMotion && !isLowEnd, // Desabilitar em low-end
        enableCardTilt: !isMobile && !prefersReducedMotion && !isLowEnd, // Desabilitar em low-end
        animationQuality: isLowEnd ? 'low' : 'high'
    };

    // ============================================
    // 1. PARTICLE BACKGROUND (Otimizado)
    // ============================================
    function createParticleBackground() {
        if (prefersReducedMotion) return;

        const canvas = document.createElement('canvas');
        canvas.id = 'particle-canvas';
        canvas.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:0;opacity:0.3;will-change:transform';
        document.body.prepend(canvas);
        
        const ctx = canvas.getContext('2d', { alpha: true, desynchronized: true });
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        const particles = [];
        
        class Particle {
            constructor() {
                this.reset();
            }
            
            reset() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 1;
                this.speedX = Math.random() * 0.5 - 0.25;
                this.speedY = Math.random() * 0.5 - 0.25;
                this.opacity = Math.random() * 0.5 + 0.2;
            }
            
            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                
                if (this.x > canvas.width || this.x < 0) this.x = this.x > canvas.width ? 0 : canvas.width;
                if (this.y > canvas.height || this.y < 0) this.y = this.y > canvas.height ? 0 : canvas.height;
            }
            
            draw() {
                ctx.fillStyle = `rgba(124, 58, 237, ${this.opacity})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }
        
        // Criar partículas
        for (let i = 0; i < config.particleCount; i++) {
            particles.push(new Particle());
        }
        
        let animationId;
        let lastTime = 0;
        const fps = isLowEnd ? 30 : 60;
        const interval = 1000 / fps;
        
        function animate(currentTime) {
            animationId = requestAnimationFrame(animate);
            
            const deltaTime = currentTime - lastTime;
            if (deltaTime < interval) return;
            
            lastTime = currentTime - (deltaTime % interval);
            
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });
            
            // Conexões (apenas em high quality)
            if (config.animationQuality === 'high') {
                particles.forEach((p1, i) => {
                    particles.slice(i + 1).forEach(p2 => {
                        const dx = p1.x - p2.x;
                        const dy = p1.y - p2.y;
                        const distance = Math.sqrt(dx * dx + dy * dy);
                        
                        if (distance < 150) {
                            ctx.strokeStyle = `rgba(124, 58, 237, ${0.1 * (1 - distance / 150)})`;
                            ctx.lineWidth = 0.5;
                            ctx.beginPath();
                            ctx.moveTo(p1.x, p1.y);
                            ctx.lineTo(p2.x, p2.y);
                            ctx.stroke();
                        }
                    });
                });
            }
        }
        
        animate(0);
        
        // Resize otimizado com debounce
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                particles.forEach(p => p.reset());
            }, 250);
        }, { passive: true });
        
        // Pausar quando não visível
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                cancelAnimationFrame(animationId);
            } else {
                animate(0);
            }
        });
    }

    // ============================================
    // 2. MOUSE TRAIL (Otimizado)
    // ============================================
    function createMouseTrail() {
        if (!config.enableMouseTrail) return;

        const trail = [];
        let lastMoveTime = 0;
        const throttleDelay = 50; // ms
        
        document.addEventListener('mousemove', (e) => {
            const now = Date.now();
            if (now - lastMoveTime < throttleDelay) return;
            lastMoveTime = now;
            
            trail.push({ x: e.clientX, y: e.clientY, time: now });
            
            if (trail.length > config.maxTrail) {
                trail.shift();
            }
            
            // Criar apenas 1 dot por movimento
            const point = trail[trail.length - 1];
            const dot = document.createElement('div');
            dot.className = 'mouse-trail-dot';
            dot.style.cssText = `
                position: fixed;
                left: ${point.x}px;
                top: ${point.y}px;
                width: 4px;
                height: 4px;
                background: rgba(124, 58, 237, 0.6);
                border-radius: 50%;
                pointer-events: none;
                z-index: 9999;
                transform: translate(-50%, -50%);
                animation: fade-out 0.5s ease-out forwards;
            `;
            document.body.appendChild(dot);
            
            setTimeout(() => dot.remove(), 500);
        }, { passive: true });
    }

    // ============================================
    // 3. PARALLAX (Otimizado)
    // ============================================
    function initParallax() {
        if (!config.enableParallax) return;

        const parallaxElements = document.querySelectorAll('.hero-bg, .hero-grid-line, .hero-app-img');
        if (parallaxElements.length === 0) return;
        
        let ticking = false;
        let mouseX = 0.5;
        let mouseY = 0.5;
        
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX / window.innerWidth;
            mouseY = e.clientY / window.innerHeight;
            
            if (!ticking) {
                requestAnimationFrame(() => {
                    parallaxElements.forEach((el, index) => {
                        const speed = (index + 1) * 5; // Reduzido de 10 para 5
                        const x = (mouseX - 0.5) * speed;
                        const y = (mouseY - 0.5) * speed;
                        el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
                    });
                    ticking = false;
                });
                ticking = true;
            }
        }, { passive: true });
    }

    // ============================================
    // 4. CARD TILT (Otimizado)
    // ============================================
    function addCardTilt() {
        if (!config.enableCardTilt) return;

        const cards = document.querySelectorAll('.whom-card, .bstat, .vt-wrap');
        
        cards.forEach(card => {
            let ticking = false;
            
            card.addEventListener('mouseenter', () => {
                card.style.willChange = 'transform';
            });
            
            card.addEventListener('mousemove', (e) => {
                if (ticking) return;
                
                ticking = true;
                requestAnimationFrame(() => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    
                    const rotateX = (y - centerY) / 20; // Reduzido de 10 para 20
                    const rotateY = (centerX - x) / 20;
                    
                    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
                    ticking = false;
                });
            }, { passive: true });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = '';
                card.style.willChange = 'auto';
            });
        });
    }

    // ============================================
    // 5. RIPPLE EFFECT (Otimizado)
    // ============================================
    function addRippleEffect() {
        if (prefersReducedMotion) return;

        let lastClickTime = 0;
        const throttleDelay = 100;
        
        document.addEventListener('click', (e) => {
            const now = Date.now();
            if (now - lastClickTime < throttleDelay) return;
            lastClickTime = now;
            
            const ripple = document.createElement('div');
            ripple.className = 'click-ripple';
            ripple.style.cssText = `
                position: fixed;
                left: ${e.clientX}px;
                top: ${e.clientY}px;
                width: 0;
                height: 0;
                border-radius: 50%;
                background: rgba(124, 58, 237, 0.3);
                pointer-events: none;
                z-index: 9999;
                transform: translate(-50%, -50%);
                animation: ripple-expand 0.6s ease-out;
            `;
            
            document.body.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);
        }, { passive: true });
    }

    // ============================================
    // 6. SCROLL PROGRESS (Otimizado)
    // ============================================
    function enhanceScrollProgress() {
        const prog = document.getElementById('prog');
        if (!prog) return;
        
        let ticking = false;
        
        window.addEventListener('scroll', () => {
            if (ticking) return;
            
            ticking = true;
            requestAnimationFrame(() => {
                const winScroll = document.documentElement.scrollTop;
                const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                const scrolled = (winScroll / height) * 100;
                
                prog.style.width = scrolled + '%';
                if (config.animationQuality === 'high') {
                    prog.style.boxShadow = `0 0 ${10 + scrolled / 10}px rgba(124, 58, 237, ${0.5 + scrolled / 200})`;
                }
                ticking = false;
            });
        }, { passive: true });
    }

    // ============================================
    // 7. ANIMATE NUMBERS (Otimizado)
    // ============================================
    function animateNumbers() {
        const counters = document.querySelectorAll('.bstat-after, .visitor-count');
        
        counters.forEach(counter => {
            const target = parseInt(counter.textContent.replace(/\D/g, ''));
            if (isNaN(target)) return;
            
            const duration = 1500; // Reduzido de 2000
            const start = 0;
            const increment = target / (duration / 16);
            let current = start;
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    counter.textContent = counter.textContent.replace(/\d+/, target);
                    clearInterval(timer);
                } else {
                    counter.textContent = counter.textContent.replace(/\d+/, Math.floor(current));
                }
            }, 16);
        });
    }

    // ============================================
    // STYLES (Otimizados)
    // ============================================
    const optimizedStyles = document.createElement('style');
    optimizedStyles.textContent = `
        @keyframes fade-out {
            to { opacity: 0; transform: translate(-50%, -50%) scale(0.5); }
        }
        
        @keyframes ripple-expand {
            to { width: 100px; height: 100px; opacity: 0; }
        }
        
        @keyframes float-glow {
            0%, 100% {
                transform: translateY(0);
                filter: drop-shadow(0 0 10px rgba(124, 58, 237, 0.3));
            }
            50% {
                transform: translateY(-10px);
                filter: drop-shadow(0 0 20px rgba(124, 58, 237, 0.6));
            }
        }
        
        @keyframes pulse-border {
            0%, 100% {
                border-color: rgba(124, 58, 237, 0.3);
                box-shadow: 0 0 10px rgba(124, 58, 237, 0.2);
            }
            50% {
                border-color: rgba(124, 58, 237, 0.8);
                box-shadow: 0 0 30px rgba(124, 58, 237, 0.5);
            }
        }
        
        .bench-img-wrap {
            animation: pulse-border 3s ease-in-out infinite;
            will-change: border-color, box-shadow;
        }
        
        .hero-app-img {
            animation: float-glow 4s ease-in-out infinite;
            will-change: transform, filter;
        }
        
        .nav-logo img {
            animation: float-glow 3s ease-in-out infinite;
            will-change: transform, filter;
        }
        
        /* Otimizações de transição */
        .btn, .nav-links a, .footer-link-btn {
            transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1),
                        opacity 0.2s ease,
                        box-shadow 0.2s ease;
            will-change: transform;
        }
        
        .btn:active {
            transform: scale(0.95);
        }
        
        .bench-img-wrap:hover {
            transform: scale(1.03) translateY(-5px);
            box-shadow: 0 20px 60px rgba(124, 58, 237, 0.3);
        }
        
        /* Reduzir animações em mobile */
        @media (max-width: 768px) {
            .bench-img-wrap,
            .hero-app-img,
            .nav-logo img {
                animation: none !important;
            }
        }
        
        /* Respeitar preferência de movimento reduzido */
        @media (prefers-reduced-motion: reduce) {
            * {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
            }
        }
    `;
    document.head.appendChild(optimizedStyles);

    // ============================================
    // INICIALIZAÇÃO
    // ============================================
    function init() {
        // Delay para não bloquear carregamento inicial
        setTimeout(() => {
            createParticleBackground();
            createMouseTrail();
            initParallax();
            addCardTilt();
            addRippleEffect();
            enhanceScrollProgress();
            
            // Animate numbers quando visível
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        animateNumbers();
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });
            
            document.querySelectorAll('.bench-stats').forEach(el => observer.observe(el));
            
            console.log('%c✨ Animations Optimized', 'color: #7C3AED; font-size: 12px; font-weight: bold;');
        }, 1000); // Delay de 1s ao invés de 2s
    }

    // Inicializar quando DOM estiver pronto
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
