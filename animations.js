// ============================================
// PLATINUM+ OPTIMIZER - ADVANCED ANIMATIONS
// ============================================

// Particle Background Animation
function createParticleBackground() {
    const canvas = document.createElement('canvas');
    canvas.id = 'particle-canvas';
    canvas.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:0;opacity:0.3';
    document.body.prepend(canvas);
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    const particleCount = 50;
    
    class Particle {
        constructor() {
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
            
            if (this.x > canvas.width) this.x = 0;
            if (this.x < 0) this.x = canvas.width;
            if (this.y > canvas.height) this.y = 0;
            if (this.y < 0) this.y = canvas.height;
        }
        
        draw() {
            ctx.fillStyle = `rgba(31, 111, 255, ${this.opacity})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        
        // Draw connections
        particles.forEach((p1, i) => {
            particles.slice(i + 1).forEach(p2 => {
                const dx = p1.x - p2.x;
                const dy = p1.y - p2.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 150) {
                    ctx.strokeStyle = `rgba(31, 111, 255, ${0.1 * (1 - distance / 150)})`;
                    ctx.lineWidth = 0.5;
                    ctx.beginPath();
                    ctx.moveTo(p1.x, p1.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.stroke();
                }
            });
        });
        
        requestAnimationFrame(animate);
    }
    
    animate();
    
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// Mouse Trail Effect
function createMouseTrail() {
    const trail = [];
    const maxTrail = 20;
    
    document.addEventListener('mousemove', (e) => {
        trail.push({ x: e.clientX, y: e.clientY, time: Date.now() });
        
        if (trail.length > maxTrail) {
            trail.shift();
        }
        
        trail.forEach((point, index) => {
            const age = Date.now() - point.time;
            if (age < 500) {
                const dot = document.createElement('div');
                dot.style.cssText = `
                    position: fixed;
                    left: ${point.x}px;
                    top: ${point.y}px;
                    width: 4px;
                    height: 4px;
                    background: rgba(31, 111, 255, ${1 - age / 500});
                    border-radius: 50%;
                    pointer-events: none;
                    z-index: 9999;
                    transform: translate(-50%, -50%);
                `;
                document.body.appendChild(dot);
                
                setTimeout(() => dot.remove(), 500);
            }
        });
    });
}

// Parallax Effect
function initParallax() {
    const parallaxElements = document.querySelectorAll('.hero-bg, .hero-grid-line, .hero-app-img');
    
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        parallaxElements.forEach((el, index) => {
            const speed = (index + 1) * 10;
            const x = (mouseX - 0.5) * speed;
            const y = (mouseY - 0.5) * speed;
            el.style.transform = `translate(${x}px, ${y}px)`;
        });
    });
}

// Glitch Effect on Hover
function addGlitchEffect() {
    const glitchElements = document.querySelectorAll('.hero-title, .s-title');
    
    glitchElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            el.style.animation = 'glitch 0.3s ease';
            setTimeout(() => {
                el.style.animation = '';
            }, 300);
        });
    });
}

// Add glitch keyframes
const glitchStyle = document.createElement('style');
glitchStyle.textContent = `
    @keyframes glitch {
        0% { transform: translate(0); }
        20% { transform: translate(-2px, 2px); }
        40% { transform: translate(-2px, -2px); }
        60% { transform: translate(2px, 2px); }
        80% { transform: translate(2px, -2px); }
        100% { transform: translate(0); }
    }
    
    @keyframes float-glow {
        0%, 100% {
            transform: translateY(0);
            filter: drop-shadow(0 0 10px rgba(31, 111, 255, 0.3));
        }
        50% {
            transform: translateY(-10px);
            filter: drop-shadow(0 0 20px rgba(31, 111, 255, 0.6));
        }
    }
    
    @keyframes pulse-border {
        0%, 100% {
            border-color: rgba(31, 111, 255, 0.3);
            box-shadow: 0 0 10px rgba(31, 111, 255, 0.2);
        }
        50% {
            border-color: rgba(31, 111, 255, 0.8);
            box-shadow: 0 0 30px rgba(31, 111, 255, 0.5);
        }
    }
    
    .bench-img-wrap {
        animation: pulse-border 3s ease-in-out infinite;
    }
    
    .hero-app-img {
        animation: float-glow 4s ease-in-out infinite;
    }
    
    .nav-logo img {
        animation: float-glow 3s ease-in-out infinite;
    }
`;
document.head.appendChild(glitchStyle);

// Smooth Number Counter Animation
function animateNumbers() {
    const counters = document.querySelectorAll('.bstat-after, .visitor-count');
    
    counters.forEach(counter => {
        const target = parseInt(counter.textContent.replace(/\D/g, ''));
        if (isNaN(target)) return;
        
        const duration = 2000;
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

// Card Tilt Effect
function addCardTilt() {
    const cards = document.querySelectorAll('.whom-card, .bstat, .vt-wrap');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });
}

// Ripple Effect on Click
function addRippleEffect() {
    document.addEventListener('click', (e) => {
        const ripple = document.createElement('div');
        ripple.style.cssText = `
            position: fixed;
            left: ${e.clientX}px;
            top: ${e.clientY}px;
            width: 0;
            height: 0;
            border-radius: 50%;
            background: rgba(31, 111, 255, 0.3);
            pointer-events: none;
            z-index: 9999;
            transform: translate(-50%, -50%);
            animation: ripple-expand 0.6s ease-out;
        `;
        
        document.body.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
}

const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes ripple-expand {
        to {
            width: 100px;
            height: 100px;
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// Text Typing Effect
function addTypingEffect() {
    const typingElements = document.querySelectorAll('.hero-title .t-white, .hero-title .t-green');
    
    typingElements.forEach((el, index) => {
        const text = el.textContent;
        el.textContent = '';
        el.style.opacity = '1';
        
        let i = 0;
        const speed = 50;
        
        setTimeout(() => {
            const typeWriter = setInterval(() => {
                if (i < text.length) {
                    el.textContent += text.charAt(i);
                    i++;
                } else {
                    clearInterval(typeWriter);
                }
            }, speed);
        }, index * 1000);
    });
}

// Scroll Progress Indicator
function enhanceScrollProgress() {
    const prog = document.getElementById('prog');
    
    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        
        prog.style.width = scrolled + '%';
        prog.style.boxShadow = `0 0 ${10 + scrolled / 10}px rgba(31, 111, 255, ${0.5 + scrolled / 200})`;
    });
}

// Initialize all animations
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        createParticleBackground();
        createMouseTrail();
        initParallax();
        addGlitchEffect();
        addCardTilt();
        addRippleEffect();
        enhanceScrollProgress();
        
        // Animate numbers when they come into view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateNumbers();
                    observer.unobserve(entry.target);
                }
            });
        });
        
        document.querySelectorAll('.bench-stats').forEach(el => observer.observe(el));
    }, 2000);
});

// Add smooth transitions to all interactive elements
const transitionStyle = document.createElement('style');
transitionStyle.textContent = `
    * {
        transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
                    opacity 0.3s ease,
                    box-shadow 0.3s ease,
                    border-color 0.3s ease,
                    background-color 0.3s ease,
                    color 0.3s ease;
    }
    
    .btn, .nav-links a, .footer-link-btn, .bench-img-wrap, .whom-card {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .btn:active {
        transform: scale(0.95);
    }
    
    .bench-img-wrap:hover {
        transform: scale(1.03) translateY(-5px);
        box-shadow: 0 20px 60px rgba(31, 111, 255, 0.3);
    }
`;
document.head.appendChild(transitionStyle);
