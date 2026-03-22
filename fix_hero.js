const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

const perfectHero = `<!-- ============ HERO ============ -->
<section id="hero-section" class="hero relative min-h-[90vh] pt-32 pb-16 flex items-center justify-center overflow-hidden px-4">
    <div class="absolute top-[30%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#7C3AED]/10 blur-[150px] rounded-full pointer-events-none mix-blend-screen"></div>

    <div class="max-w-[1600px] mx-auto px-2 md:px-6 relative z-10 pointer-events-none mt-10">
      <div class="pointer-events-auto grid grid-cols-1 lg:grid-cols-[2.4fr_1fr_2.4fr] gap-8 xl:gap-20 items-center">

        <!-- Left Column -->
        <div class="order-2 lg:order-1 relative w-full mx-auto lg:max-w-none transform transition-all duration-700 lg:scale-110 xl:scale-125 animate-float flex flex-col items-center">
          <div class="text-center mb-6 text-[#A78BFA] font-bold tracking-widest text-xs uppercase" data-i18n="hero.imageLabelLeft">Windows 8.5 Beta V2</div>
          <div id="hero-left-trigger" class="relative group overflow-hidden rounded-2xl modern-frame shadow-[0_0_60px_rgba(124,58,237,0.15)] group-hover:shadow-[0_0_100px_rgba(124,58,237,0.3)] transition-all duration-500 cursor-zoom-in" onclick="openLightbox('platinum.PNG', this)">
            <img src="platinum.PNG" alt="Interface Left" class="w-full h-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-500 will-change-transform" />
            <div class="absolute inset-0 bg-gradient-to-t from-[#7C3AED]/10 to-transparent pointer-events-none"></div>
          </div>
        </div>

        <!-- Middle Column -->
        <div class="order-1 lg:order-2 text-center flex flex-col items-center justify-center w-full max-w-[400px] mx-auto">
          <div class="mb-10 flex justify-center reveal-on-scroll">
            <img src="logo.png" alt="KT Optimizer Logo" class="w-36 h-36 relative z-10 drop-shadow-[0_0_35px_rgba(124,58,237,0.6)] rounded-[2rem] object-cover border border-white/5 animate-glow-blue" draggable="false" oncontextmenu="return false">
          </div>
          <h1 class="font-serif text-5xl sm:text-6xl md:text-6xl xl:text-8xl font-bold leading-tight mb-8 text-white tracking-tight drop-shadow-2xl reveal-on-scroll" data-i18n="hero.headline">KT Optimizer</h1>
          <p class="text-lg md:text-xl text-platinum-300 mb-10 leading-relaxed font-light max-w-lg mx-auto reveal-on-scroll reveal-delay-200" data-i18n="hero.subheadline">Performance extrema para entusiastas.</p>
          
          <div class="flex flex-col sm:flex-row items-center justify-center gap-6 reveal-on-scroll reveal-delay-300 w-full">
            <button onclick="handleDownload()" class="w-full sm:w-auto shadow-strong-glow inline-flex items-center justify-center px-12 py-5 text-lg font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#7C3AED]/20 bg-gradient-to-r from-[#7C3AED] to-[#6D28D9] text-white hover:from-[#A78BFA] hover:to-[#7C3AED] hover:scale-105 active:scale-95 group">
              <i data-lucide="download" class="mr-3 w-6 h-6 group-hover:animate-bounce"></i>
              <span data-i18n="hero.ctaDownloadExe">Download KT Optimizer</span>
            </button>
          </div>
          <div class="mt-12 flex justify-center reveal-on-scroll reveal-delay-400">
            <button onclick="scrollToSection('advanced-features')" class="text-platinum-300 hover:text-white text-sm flex items-center gap-2 transition-colors px-6 py-2 rounded-full hover:bg-white/5">
              <span data-i18n="hero.ctaLearn">Como Funciona</span>
              <i data-lucide="arrow-down" class="w-4 h-4 animate-bounce"></i>
            </button>
          </div>
        </div>

        <!-- Right Column -->
        <div class="order-3 lg:order-3 relative w-full mx-auto lg:max-w-none transform transition-all duration-700 lg:scale-110 xl:scale-125 animate-float-delayed flex flex-col items-center">
          <div class="text-center mb-6 text-[#A78BFA] font-bold tracking-widest text-xs uppercase" data-i18n="hero.imageLabelRight">Resultados Reais</div>
          <div id="hero-right-trigger" class="relative group rounded-[2rem] overflow-hidden glass modern-frame border border-white/5 shadow-[0_0_60px_rgba(124,58,237,0.15)] group-hover:shadow-[0_0_100px_rgba(124,58,237,0.3)] transition-all duration-500 cursor-zoom-in" onclick="openLightbox('task.jpg', this)">
            <img src="task.jpg" alt="Interface Right" loading="eager" decoding="async" class="w-full h-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity will-change-transform" />
            <div class="absolute inset-0 bg-gradient-to-t from-[#7C3AED]/15 to-transparent pointer-events-none"></div>
          </div>
        </div>

      </div>
    </div>
    <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#150329]/0 to-[#150329]/0 pointer-events-none"></div>
</section>`;

let heroStartIdx = html.indexOf('<!-- ============ HERO ============ -->');
let aboutStartIdx = html.indexOf('<!-- ============ O QUE É ============ -->');

if (heroStartIdx !== -1 && aboutStartIdx !== -1) {
    let beforeHero = html.substring(0, heroStartIdx);
    let afterHero = html.substring(aboutStartIdx);
    fs.writeFileSync('index.html', beforeHero + perfectHero + '\n\n' + afterHero);
    console.log('Hero completely rebuilt successfully!');
} else {
    console.log('Could not find hero markers in index.html to rebuild.');
}
