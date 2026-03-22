// ============================================
// THREE.JS BACKGROUND - VERSÃO OTIMIZADA
// Mantém visual bonito com performance máxima
// ============================================

function initGridAnimationOptimized(theme = 'deep-space', showShapes = true) {
    const container = document.getElementById('global-animation-container');
    if (!container) return;

    // Detectar capacidade do dispositivo
    const isMobile = window.innerWidth < 768;
    const isLowEnd = navigator.hardwareConcurrency <= 4 || isMobile;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Se preferir movimento reduzido, não inicializar
    if (prefersReducedMotion) {
        console.log('Three.js: Movimento reduzido preferido, pulando animação');
        return;
    }

    // Configurações otimizadas baseadas no dispositivo
    const config = {
        particleCount: isLowEnd ? 800 : 2500, // Reduzido ainda mais
        shapeCount: isLowEnd ? 1 : (showShapes ? 2 : 0), // Reduzido ainda mais
        orbCount: isLowEnd ? 2 : 4, // Reduzido ainda mais
        pixelRatio: isLowEnd ? 1 : Math.min(window.devicePixelRatio, 1.5), // Limitado a 1.5
        antialias: !isLowEnd && window.devicePixelRatio < 2, // Apenas em telas normais
        shadowMap: false,
        fps: isLowEnd ? 30 : 60
    };

    class ThreeAnimationOptimized {
        constructor(container, theme, showShapes = true) {
            this.container = container;
            this.theme = theme;
            this.showShapes = showShapes && config.shapeCount > 0;
            
            // Scene setup
            this.scene = new THREE.Scene();
            this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);
            
            // Renderer otimizado
            this.renderer = new THREE.WebGLRenderer({
                antialias: config.antialias,
                alpha: true,
                powerPreference: 'high-performance',
                stencil: false,
                depth: true
            });
            
            this.renderer.setSize(window.innerWidth, window.innerHeight);
            this.renderer.setPixelRatio(config.pixelRatio);
            this.renderer.shadowMap.enabled = config.shadowMap;
            this.container.appendChild(this.renderer.domElement);

            this.camera.position.z = 800;
            
            this.shapes = [];
            this.orbs = [];
            this.atmosphere = null;
            this.connections = null;
            this.time = 0;
            this.mouse = new THREE.Vector2(-9999, -9999);
            this.raycaster = new THREE.Raycaster();
            this.modalActive = false;
            this.modalFactor = 0;
            
            // FPS control
            this.lastFrameTime = 0;
            this.frameInterval = 1000 / config.fps;
            
            this.init();
        }

        init() {
            this.addLights();
            this.createAtmosphere();
            if (this.showShapes) {
                this.createShapes();
            }
            this.createOrbs();
            this.createLineSystem();
            this.addEventListeners();
            this.animate();
        }

        addLights() {
            // Luz ambiente
            const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
            this.scene.add(ambientLight);

            // Luz principal
            const lightColor = this.theme === 'red' ? 0xff0000 : 0x7C3AED;
            this.mainPointLight = new THREE.PointLight(lightColor, 4, 1200); // Reduzido intensidade e range
            this.scene.add(this.mainPointLight);

            // Luz do cursor (apenas em high-end)
            if (!isLowEnd) {
                this.cursorLight = new THREE.PointLight(lightColor, 8, 800);
                this.scene.add(this.cursorLight);
            }
        }

        createAtmosphere() {
            const geometry = new THREE.BufferGeometry();
            const positions = new Float32Array(config.particleCount * 3);
            this.particleData = new Float32Array(config.particleCount * 3);

            for (let i = 0; i < config.particleCount; i++) {
                const i3 = i * 3;
                positions[i3] = (Math.random() - 0.5) * 2000;
                positions[i3 + 1] = (Math.random() - 0.5) * 2000;
                positions[i3 + 2] = (Math.random() - 0.5) * 1000;
                
                this.particleData[i3] = (Math.random() - 0.5) * 0.5;
                this.particleData[i3 + 1] = (Math.random() - 0.5) * 0.5;
                this.particleData[i3 + 2] = (Math.random() - 0.5) * 0.3;
            }

            geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

            const material = new THREE.PointsMaterial({
                size: isLowEnd ? 1.5 : 2,
                color: this.theme === 'red' ? 0xff4400 : 0x7C3AED,
                transparent: true,
                opacity: 0.4, // Reduzido ainda mais
                blending: THREE.AdditiveBlending,
                sizeAttenuation: true,
                depthWrite: false // Otimização
            });

            this.atmosphere = new THREE.Points(geometry, material);
            this.scene.add(this.atmosphere);
        }

        createOrbs() {
            // Criar textura uma vez e reusar
            const canvas = document.createElement('canvas');
            canvas.width = 64; // Reduzido de 128
            canvas.height = 64;
            const ctx = canvas.getContext('2d');
            const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
            
            const color = this.theme === 'red' ? 'rgba(255, 68, 0, 0.8)' : 'rgba(124, 58, 237, 0.8)';
            gradient.addColorStop(0, color);
            gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
            
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, 64, 64);

            const texture = new THREE.CanvasTexture(canvas);
            const material = new THREE.SpriteMaterial({
                map: texture,
                transparent: true,
                blending: THREE.AdditiveBlending,
                opacity: 0.6, // Reduzido de 0.8
                depthWrite: false
            });

            for (let i = 0; i < config.orbCount; i++) {
                const sprite = new THREE.Sprite(material);
                const scale = Math.random() * 200 + 200; // Reduzido
                sprite.scale.set(scale, scale, 1);

                const orb = {
                    sprite: sprite,
                    pos: new THREE.Vector3(
                        (Math.random() - 0.5) * 1500,
                        (Math.random() - 0.5) * 1000,
                        (Math.random() - 0.5) * 400
                    ),
                    vel: new THREE.Vector3(
                        (Math.random() - 0.5) * 1,
                        (Math.random() - 0.5) * 1,
                        (Math.random() - 0.5) * 0.5
                    )
                };

                sprite.position.copy(orb.pos);
                this.scene.add(sprite);
                this.orbs.push(orb);
            }
        }

        createShapes() {
            const geometries = [
                new THREE.IcosahedronGeometry(60, 0), // Reduzido de 80
                new THREE.OctahedronGeometry(50, 0),  // Reduzido de 70
                new THREE.TorusKnotGeometry(40, 10, 32, 8) // Reduzido complexidade
            ];

            for (let i = 0; i < config.shapeCount; i++) {
                const geo = geometries[i % geometries.length];
                const mainColor = this.theme === 'red' ? 0xff6347 : 0x7C3AED;

                const material = new THREE.MeshPhysicalMaterial({
                    color: mainColor,
                    wireframe: true,
                    transparent: true,
                    opacity: 0.3, // Reduzido de 0.4
                    emissive: mainColor,
                    emissiveIntensity: 0.3, // Reduzido de 0.5
                    metalness: 0.5,
                    roughness: 0.3,
                    side: THREE.DoubleSide,
                    depthWrite: false
                });

                const mesh = new THREE.Mesh(geo, material);
                mesh.position.set(
                    (Math.random() - 0.5) * 800,
                    (Math.random() - 0.5) * 600,
                    (Math.random() - 0.5) * 400 - 200
                );

                const shape = {
                    mesh: mesh,
                    rotation: {
                        x: (Math.random() - 0.5) * 0.003,
                        y: (Math.random() - 0.5) * 0.003,
                        z: (Math.random() - 0.5) * 0.003
                    },
                    velocity: new THREE.Vector3(
                        (Math.random() - 0.5) * 0.3,
                        (Math.random() - 0.5) * 0.3,
                        (Math.random() - 0.5) * 0.2
                    )
                };

                this.scene.add(mesh);
                this.shapes.push(shape);
            }
        }

        createLineSystem() {
            const geometry = new THREE.BufferGeometry();
            const lineColor = this.theme === 'red' ? 0xff8c00 : 0x7C3AED;
            const material = new THREE.LineBasicMaterial({
                color: lineColor,
                transparent: true,
                opacity: 0.15, // Reduzido de 0.2
                blending: THREE.AdditiveBlending,
                depthWrite: false
            });
            this.connections = new THREE.LineSegments(geometry, material);
            this.scene.add(this.connections);
        }

        addEventListeners() {
            // Mouse move com throttle
            let mouseMoveTimeout;
            window.addEventListener('mousemove', (e) => {
                clearTimeout(mouseMoveTimeout);
                mouseMoveTimeout = setTimeout(() => {
                    this.mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
                    this.mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
                }, 16); // ~60fps
            }, { passive: true });

            // Resize com debounce
            let resizeTimeout;
            window.addEventListener('resize', () => {
                clearTimeout(resizeTimeout);
                resizeTimeout = setTimeout(() => {
                    this.camera.aspect = window.innerWidth / window.innerHeight;
                    this.camera.updateProjectionMatrix();
                    this.renderer.setSize(window.innerWidth, window.innerHeight);
                }, 250);
            }, { passive: true });

            // Pausar quando não visível
            document.addEventListener('visibilitychange', () => {
                if (document.hidden) {
                    this.paused = true;
                } else {
                    this.paused = false;
                }
            });
        }

        animate(currentTime = 0) {
            requestAnimationFrame((time) => this.animate(time));
            
            // FPS control
            const deltaTime = currentTime - this.lastFrameTime;
            if (deltaTime < this.frameInterval) return;
            this.lastFrameTime = currentTime - (deltaTime % this.frameInterval);
            
            // Pausar se não visível
            if (this.paused) return;

            this.time += 0.01;

            // Atualizar atmosfera
            if (this.atmosphere) {
                const positions = this.atmosphere.geometry.attributes.position.array;
                for (let i = 0; i < positions.length; i += 3) {
                    positions[i] += this.particleData[i];
                    positions[i + 1] += this.particleData[i + 1];
                    positions[i + 2] += this.particleData[i + 2];

                    if (Math.abs(positions[i]) > 1000) this.particleData[i] *= -1;
                    if (Math.abs(positions[i + 1]) > 1000) this.particleData[i + 1] *= -1;
                    if (Math.abs(positions[i + 2]) > 500) this.particleData[i + 2] *= -1;
                }
                this.atmosphere.geometry.attributes.position.needsUpdate = true;
                this.atmosphere.rotation.y += 0.0002;
            }

            // Atualizar orbs
            this.orbs.forEach(orb => {
                orb.pos.add(orb.vel);
                if (Math.abs(orb.pos.x) > 750) orb.vel.x *= -1;
                if (Math.abs(orb.pos.y) > 500) orb.vel.y *= -1;
                if (Math.abs(orb.pos.z) > 200) orb.vel.z *= -1;
                orb.sprite.position.copy(orb.pos);
            });

            // Atualizar shapes
            if (this.showShapes) {
                this.shapes.forEach(s => {
                    s.mesh.rotation.x += s.rotation.x;
                    s.mesh.rotation.y += s.rotation.y;
                    s.mesh.rotation.z += s.rotation.z;
                });
            }

            // Atualizar luz do cursor (apenas em high-end)
            if (this.cursorLight && !isLowEnd) {
                this.raycaster.setFromCamera(this.mouse, this.camera);
                const lightPlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), -200);
                const lightTarget = new THREE.Vector3();
                this.raycaster.ray.intersectPlane(lightPlane, lightTarget);
                this.cursorLight.position.copy(lightTarget);
            }

            this.renderer.render(this.scene, this.camera);
        }
    }

    // Inicializar
    new ThreeAnimationOptimized(container, theme, showShapes);
    console.log('%c🎨 Three.js Background Optimized', 'color: #7C3AED; font-size: 12px; font-weight: bold;');
}

// Exportar para uso global
window.initGridAnimationOptimized = initGridAnimationOptimized;
