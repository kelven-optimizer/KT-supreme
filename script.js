const SUPPORTED_LANGUAGES = [
    { code: 'pt', name: 'Português', flag: '🇧🇷' },
    { code: 'it', name: 'Italiano', flag: '🇮🇹' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
];

const DOWNLOAD_URL = "https://ik.imagekit.io/gc3sslajp/KT OptimizerOptimizer.8.5V.bat";
const TELEGRAM_URL = "https://t.me/+AKZO7Y5buhw0ZjRk";
const CONTACT_EMAIL = "platinumoptimizerhelp@gmail.com";

// ============ CONTENUTI TRADUZIONI ============
const PT_CONTENT = {
    app: {
        nav: {
            home: "Início",
            about: "O que é",
            virustotal: "VirusTotal",
            benchmark: "Benchmark",
            changelog: "Novidades",
            target: "Para Quem",
            howItWorks: "Guia",
            faq: "FAQ",
            wallpaper: "Wallpaper"
        },
        hero: {
            headline: "Otimização extrema para Windows, feita por quem entende.",
            subheadline: "Uma suíte de ferramentas de alto desempenho criada para extrair o máximo do seu sistema — jogos, produtividade ou uso geral.",
            ctaDownloadExe: "Em breve",
            ctaLearn: "Como funciona",
            imageLabelLeft: "Interface do KT Supreme V2",
            imageLabelRight: "Resultados após aplicar o KT Supreme V2"
        },
        welcome: {
            title: "KT Supreme V2 Lançado!",
            subtitle: "A espera acabou. Baixe agora!",
            btnDownload: "BAIXAR NO SITE",
            btnTelegram: "ACESSAR GITHUB"
        },
        about: {
            title: "O que é o KT Optimizer",
            description1: "O KT OPTIMIZER é uma suíte de ferramentas de alto desempenho com otimizações diretas no kernel e drivers para extrair o máximo do seu hardware.",
            description2: "O objetivo é fornecer a máxima responsividade do sistema, boot rápido, rede otimizada para menor ping em jogos online e remoção completa de telemetria e bloatware.",
        },
        virustotal: {
            title: "VirusTotal e Verificações",
            subtitle: "O arquivo foi verificado no VirusTotal e é completamente seguro.",
            detectionCount: "3/62",
            detectionLabel: "Detecções",
            falsePositiveLabel: "Falso Positivo Confirmado",
            statusTitle: "Status",
            statusValue: "SEGURO",
            hashTitle: "SHA-256",
            hashValue: "89a0b2aa212380f906af3d42bace1bc0aa9acdb156624844848695b950127337",
            falsePositiveTitle: "⚠️ Por que é detectado como falso positivo?",
            falsePositiveDescription: "O script faz alterações profundas no sistema, como modificações no registro, desativação de serviços desnecessários e otimização do kernel. Muitos antivírus sinalizam essas ações como suspeitas.",
            safeTitle: "✅ Seguro para usar",
            safeDescription: "O software é completamente aberto e gratuito. As detecções não indicam malware real, apenas intervenções sistêmicas legítimas.",
            viewReport: ""
        },
        benchmark: {
            title: "Benchmarks de Desempenho",
            subtitle: "Comparação real de desempenho entre o <strong>Windows Padrão (sem otimização)</strong> e o <strong>Windows otimizado com KT Supreme V2</strong>.",
            tabs: {
                sys: "Task Manager & Specs",
                cpu: "CPU-Z",
                geek: "Geekbench",
                lat: "LatencyMon",
                mc: "Minecraft",
                furmark: "Furmark"
            },
            before: "Antes (Padrão)",
            after: "Depois do KT Optimizer",
            ph: {
                sysBeforeCPU: "[ Screenshot Task Manager CPU - Antes ]",
                sysBeforeRAM: "[ Screenshot Task Manager RAM - Antes ]",
                sysAfterCPU: "[ Screenshot Task Manager CPU - Depois ]",
                sysAfterRAM: "[ Screenshot Task Manager RAM - Depois ]",
                cpuBefore: "[ Screenshot CPU-Z - Antes ]",
                cpuAfter: "[ Screenshot CPU-Z - Depois ]",
                geekBeforeCPU: "[ Screenshot Geekbench CPU - Antes ]",
                geekBeforeGPU: "[ Screenshot Geekbench GPU - Antes ]",
                geekAfterCPU: "[ Screenshot Geekbench CPU - Depois ]",
                geekAfterGPU: "[ Screenshot Geekbench GPU - Depois ]",
                latBefore: "[ Screenshot LatencyMon - Antes ]",
                latAfter: "[ Screenshot LatencyMon - Depois ]",
                mcBefore: "[ Screenshot Minecraft - Antes ]",
                mcAfter: "[ Screenshot Minecraft - Depois ]"
            },
            hardwareTitle: "Teste de Hardware",
            metrics: {
                cpu: "Uso de CPU",
                cpuBefore: "4%",
                cpuAfter: "0%",
                ram: "Uso de RAM",
                ramBefore: "3.8 GB",
                ramAfter: "2.5 GB",
                procs: "Processos Ativos",
                procsBefore: "152",
                procsAfter: "56",
                cpuzTitle: "Aumento de Score CPU-Z",
                single: "Single Thread",
                cpuZSingleImp: "603.4 pts (+7.6%)",
                multi: "Multi Thread",
                cpuZMultiImp: "4813.8 pts (+23.7%)",
                cpuZSingleBefore: "560.4 pts",
                cpuZSingleAfter: "603.4 pts",
                cpuZMultiBefore: "3889.6 pts",
                cpuZMultiAfter: "4813.8 pts",
                geekCpuTitle: "Geekbench CPU Score",
                geekGpuTitle: "Geekbench GPU Score",
                opencl: "OpenCL",
                geekOpenClImp: "153829 pts (+21.1%)",
                vulkan: "Vulkan / CUDA",
                geekVulkanImp: "+ --%",
                geekTitle: "Comparação de Score Geekbench",
                geekSingleImp: "1982 pts (+316.4%)",
                geekMultiImp: "6294 pts (+70.1%)",
                latDpc: "DPC Routine Execution Time",
                latDpcBefore: "231.3 µs",
                latDpcAfter: "81.8 µs",
                latDpcImp: "-64.6% Latência",
                latDrv: "Driver Latency",
                latDrvBefore: "120.3 µs",
                latDrvAfter: "55.1 µs",
                latDrvImp: "-54.2% Latência",
                mcAvg: "FPS Médio",
                mcAvgBefore: "483 FPS",
                mcAvgAfter: "932 FPS",
                mcLow: "1% Low FPS",
                mcLowDesc: "(Estabilidade)",
                mcLowBefore: "283 FPS",
                mcLowAfter: "711 FPS",
                furmarkScore: "Furmark Score",
                furmarkScoreBefore: "4605 pts",
                furmarkScoreAfter: "7379 pts",
                furmarkFps: "Furmark FPS",
                furmarkFpsBefore: "76 FPS",
                furmarkFpsAfter: "123 FPS",
                cpuFeature: "Otimização de Desempenho CPU",
                gpuFeature: "Otimização de Desempenho GPU",
                debloaterFeature: "System Debloater",
                servicesFeature: "Otimização de Serviços",
                networkFeature: "Otimização de Rede",
                ramFeature: "Otimização de RAM/Memória",
                geekSingleBefore: "476 pts",
                geekMultiBefore: "3699 pts",
                geekOpenClBefore: "126938 pts"
            }
        },
        target: {
            title: "Para quem é pensado",
            subtitle: "Arquitetura de elite para quem não aceita compromissos com a latência.",
            items: [
                {
                    title: "Gamers Elite",
                    description: "Eliminação quase total de input lag e instabilidade de frames em qualquer jogo ou programa.",
                    icon: "monitor-play"
                },
                {
                    title: "Profissionais Hi-End",
                    description: "Ambiente de trabalho calibrado para cargas extremas, onde a potência do hardware encontra a eficiência máxima.",
                    icon: "layers"
                },
                {
                    title: "Entusiastas Tech",
                    description: "Controle granular sobre o coração do sistema operacional, libertando a máquina de correntes invisíveis.",
                    icon: "code-2"
                },
                {
                    title: "Ecossistema Desktop",
                    description: "Otimização total do barramento do sistema para PCs e laptops, eliminando gargalos térmicos ou energéticos.",
                    icon: "laptop"
                }
            ]
        },
        steps: {
            title: "Download & Avio",
            subtitle: "Perfeição a poucos cliques de distância. Siga o procedimento rápido para desbloquear o potencial do seu PC.",
            terminalTitle: "Terminal de Otimização",
            terminalDesc: "Interface intuitiva e fácil de usar",
            securityTitle: "Protocolo de Segurança",
            security1: "Ponto de Restauração Automático",
            security2: "Tweaks Seguros e Testados",
            security3: "Rollback Completo Garantido",
            items: [
                {
                    number: 1,
                    title: "Baixe o Programa",
                    description: "Baixe o executável oficial através do botão dedicado."
                },
                {
                    number: 2,
                    title: "Execução",
                    description: "Execute o KT OptimizerOptimizer como administrador para abrir a interface de seleção."
                },
                {
                    number: 3,
                    title: "Otimização",
                    description: "Execute sequencialmente os tweaks baseados em seus componentes e preferências."
                }
            ]
        },
        changelog: {
            title: "Changelog Técnico",
            subtitle: "KT Supreme V2 - Build Técnica",
            description: "- Novas otimizações para CPUs AMD<br>- Otimizações de kernel mais avançadas<br>- Adicionadas novas otimizações especialmente para GPUs AMD dedicadas e CPUs AMD",
            tabChanges: "Mudanças (Diff)",
            techUpdate: "Atualização Técnica",
            optArch: "Arquitetura de Otimização",
            keyChanges: "Mudanças Chave",
            kc1: "Refinamento do Dispatcher de Kernel",
            kc2: "Sobrescrita do Timer de Hardware",
            kc3: "Endurecimento da Pilha de Rede",
            diff: [
                { type: 'comment', code: '@@ -1,100 +1,100 @@ KT Supreme V2 Manifest' },
                { type: 'comment', code: ':: AMD CPU' },
                { type: 'added', code: 'reg add "HKLM\\SYSTEM\\CurrentControlSet\\Services\\amdlog\\Parameters" /v "EnableBoost" /t REG_DWORD /d 1 /f', info: 'Habilita o boost automático para a CPU AMD, permitindo que o processador aumente a frequência quando mais potência é necessária.' },
                { type: 'added', code: 'reg add "HKLM\\SYSTEM\\CurrentControlSet\\Services\\amdlog\\Parameters" /v "BoostTimeout" /t REG_DWORD /d 0 /f', info: 'Define o limite de tempo do boost como 0, para que o boost possa permanecer ativo sem limite de tempo.' },
                { type: 'added', code: 'reg add "HKLM\\SYSTEM\\CurrentControlSet\\Services\\amdlog\\Parameters" /v "MaxBoostLevel" /t REG_DWORD /d 3 /f', info: 'Define o nível máximo de boost da CPU como alto (3), favorecendo um desempenho superior.' },
                { type: 'added', code: 'reg add "HKLM\\SYSTEM\\CurrentControlSet\\Services\\amdlog\\Parameters" /v "ApmRuntime" /t REG_DWORD /d 1 /f', info: 'Habilita APM (Advanced Power Management) durante o tempo de execução para gerenciar energia e desempenho.' },
                { type: 'added', code: 'reg add "HKLM\\SYSTEM\\CurrentControlSet\\Services\\amdlog\\Parameters" /v "C1eEnable" /t REG_DWORD /d 0 /f', info: 'Desativa o estado de energia C1E, reduzindo a economia de energia para maior responsividade da CPU.' },
                { type: 'added', code: 'reg add "HKLM\\SYSTEM\\CurrentControlSet\\Services\\amdlog\\Parameters" /v "GlobalPerfLevel" /t REG_DWORD /d 3 /f', info: 'Define o nível de desempenho global da CPU como máximo.' },
                { type: 'added', code: 'reg add "HKLM\\SYSTEM\\CurrentControlSet\\Services\\amdlog\\Parameters" /v "PPCEnable" /t REG_DWORD /d 1 /f', info: 'Habilita PPC (Processor Power Control) para melhorar o gerenciamento de desempenho do processador.' },
                { type: 'added', code: 'reg add "HKLM\\SYSTEM\\CurrentControlSet\\Services\\amdlog\\Parameters" /v "SVI2" /t REG_DWORD /d 1 /f', info: 'Habilita o protocolo SVI2, usado pela CPU AMD para gerenciar tensão e energia.' },
                { type: 'added', code: 'reg add "HKLM\\SYSTEM\\CurrentControlSet\\Services\\amdlog\\Parameters" /v "Turbo" /t REG_DWORD /d 1 /f', info: 'Ativa o modo AMD Turbo Boost, aumentando a frequência da CPU sob carga.' },
                { type: 'comment', code: ':: AMD GPU' },
                { type: 'added', code: 'reg add "HKLM\\SYSTEM\\CurrentControlSet\\Services\\amdlog\\Parameters" /v "VideoPowerState" /t REG_DWORD /d 0 /f', info: 'Desativa os estados de economia de energia da GPU de vídeo integrada, favorecendo um desempenho estável.' },
                { type: 'added', code: 'reg add "HKLM\\SYSTEM\\CurrentControlSet\\Services\\amdkmdag\\Parameters" /v "PerfLevel" /t REG_DWORD /d 100 /f', info: 'Define o nível de desempenho da GPU AMD como máximo (100).' },
                { type: 'added', code: 'reg add "HKLM\\SYSTEM\\CurrentControlSet\\Services\\amdkmdag\\Parameters" /v "TurboPstate" /t REG_DWORD /d 1 /f', info: 'Habilita os P-States Turbo da GPU para frequências mais altas.' },
                { type: 'added', code: 'reg add "HKLM\\SYSTEM\\CurrentControlSet\\Services\\amdkmdag\\Parameters" /v "DisableDrmCopy" /t REG_DWORD /d 1 /f', info: 'Desativa algumas cópias DRM internas do driver para reduzir o overhead gráfico.' },
                { type: 'added', code: 'reg add "HKLM\\SYSTEM\\CurrentControlSet\\Services\\amdkmdag\\Parameters" /v "PP_SclkDeepSleepDisable" /t REG_DWORD /d 1 /f', info: 'Desativa o deep sleep do clock da GPU, mantendo frequências mais altas.' },
                { type: 'added', code: 'reg add "HKLM\\SYSTEM\\CurrentControlSet\\Services\\amdkmdag\\Parameters" /v "PP_ThermalAutoThrottling" /t REG_DWORD /d 0 /f', info: 'Desativa o throttling térmico automático, impedindo que a GPU reduza o desempenho devido à temperatura.' },
                { type: 'added', code: 'reg add "HKLM\\SYSTEM\\CurrentControlSet\\Services\\amdkmdag\\Parameters" /v "KMD_EnableTimings" /t REG_DWORD /d 1 /f', info: 'Habilita timings mais agressivos no driver da GPU para melhorar o desempenho.' },
                { type: 'added', code: 'reg add "HKLM\\SYSTEM\\CurrentControlSet\\Services\\amdkmdag\\Parameters" /v "PP_DisablePowerGating" /t REG_DWORD /d 1 /f', info: 'Desativa o power gating, impedendo que a GPU desligue partes internas para economizar energia.' },
                { type: 'added', code: 'reg add "HKLM\\SYSTEM\\CurrentControlSet\\Services\\amdkmdag\\Parameters" /v "PP_DisableULPS" /t REG_DWORD /d 1 /f', info: 'Desativa o ULPS (Ultra Low Power State) da GPU, evitando lentidões quando a GPU acorda.' },
                { type: 'added', code: 'reg add "HKLM\\SYSTEM\\CurrentControlSet\\Services\\amdkmdag\\Parameters" /v "EnableNbgSupport" /t REG_DWORD /d 0', info: 'Desativa o suporte NBG, um recurso interno do driver que pode reduzir o desempenho em alguns casos.' },
                { type: 'comment', code: ' # End of technical diff' }
            ],
        },
        faq: {
            title: "FAQ Técnica",
            subtitle: "Respostas às perguntas mais comuns sobre otimização",
            items: [
                {
                    question: "As mudanças são reversíveis?",
                    answer: "Sim. O programa pergunta se você deseja criar um ponto de restauração do sistema antes de aplicar qualquer alteração."
                },
                {
                    question: "Preciso desativar o antivírus?",
                    answer: "Geralmente não, mas se o Windows Defender bloqueá-lo, você pode precisar adicionar uma exceção."
                },
                {
                    question: "Melhora o FPS em jogos?",
                    answer: "Com certeza! Eliminando gargalos e otimizando as prioridades dos componentes."
                },
                {
                    question: "Precisa de assistência?",
                    answer: "Em caso de problemas técnicos ou dúvidas, entre em contato pelo nosso servidor do Discord."
                }
            ]
        },
        footer: {
            copyright: "© 2026 KT Optimizer. Todos os direitos reservados.",
            disclaimer: "O uso desta ferramenta é de inteira responsabilidade do usuário. Não nos responsabilizamos por quaisquer danos diretos ou indiretos.",
            privacy: "Política de Privacidade",
            legalDisclaimer: "Aviso Legal",
            closeBtn: "Fechar",
            credits: {
                owner: "Proprietário & Tweak Dev",
                webdeveloper: "Web Developer"
            },
            creators: "Criadores",
            support: "Suporte & Comunidade",
            telegramBtn: "Acessar GitHub",
            donationsBtn: "Doações",
            emailSupportBtn: "Suporte por E-mail",
            visitorsLabel: "Visitantes"
        }
    },
    legal: {
        privacy: [
            "1. Coleta de Dados: O KT Optimizer não coleta, armazena ou transmite nenhum dado pessoal do usuário.",
            "2. Execução Local: Todo o código é executado localmente na máquina do usuário, sem comunicação com servidores externos.",
            "3. Sem Telemetria: O software não inclui módulos de telemetria, rastreamento ou análise comportamental.",
            "4. Código Fonte: Por ser uma ferramenta de otimização, as operações são verificáveis através do comportamento do sistema.",
            "5. Conexão com a Internet: O programa não requer uma conexão ativa com a internet para funcionar, garantindo o isolamento dos dados.",
            "6. Logs do Sistema: Quaisquer logs gerados são salvos exclusivamente de forma local e são temporários.",
            "7. Registro do Windows: As alterações no registro não acessam chaves contendo dados sensíveis do usuário.",
            "8. Credenciais: Credenciais de login, senhas ou tokens nunca são solicitados ou acessados.",
            "9. Cookies: O website e o executável não utilizam cookies de perfil.",
            "10. Terceiros: Nenhum dado é compartilhado com terceiros, parceiros de publicidade ou afiliados.",
            "11. Conformidade com GDPR: Embora operando localmente, o princípio de 'Privacidade por Design' é totalmente respeitado.",
            "12. Arquivos do Usuário: O programa não verifica, modifica ou exclui arquivos pessoais (documentos, fotos, etc.).",
            "13. Periféricos: Listas de periféricos ou identificadores de hardware exclusivos não são coletados para fins de rastreamento.",
            "14. Endereço IP: Nenhum registro do endereço IP do usuário é realizado.",
            "15. Geolocalização: Nenhuma funcionalidade de geolocalização está presente no software.",
            "16. Atualizações: A busca por atualizações é manual; não há conexões automáticas em segundo plano.",
            "17. Publicidade: O software é livre de adware ou inserções publicitárias.",
            "18. Menores: Como nenhum dado é coletado, não há risco para a privacidade de menores.",
            "19. Segurança: A ausência de comunicações de rede elimina vetores de ataque remoto através do software.",
            "20. Perfil: Nenhum perfil de hardware ou hábitos de usuário é criado."
        ],
        disclaimer: `LIMITAÇÃO DE RESPONSABILIDADE (DISCLAIMER)
        
1. ACEITAÇÃO DE RISCOS
O uso do software "KT Optimizer" (doravante "Software") é de total critério e risco do usuário. O Software é fornecido "COMO ESTÁ", sem qualquer garantia expressa ou implícita de operação, estabilidade ou adequação a um propósito específico.

2. MODIFICAÇÕES NO SISTEMA
O Software faz alterações profundas no sistema operacional Microsoft Windows, incluindo, entre outros: Registro do Sistema, Serviços, Agendador de CPU, Gerenciamento de Memória e Configurações de Rede. Embora projetado para melhorar o desempenho, tais alterações podem causar instabilidade, incompatibilidade de software ou comportamento inesperado em configurações específicas de hardware.

3. EXCLUSÃO DE DANOS
Em nenhum caso os desenvolvedores (uma equipe de duas pessoas independentes), distribuidores ou colaboradores do KT Optimizer serão responsáveis por danos diretos, indiretos, incidentais, especiais, exemplares ou consequenciais (incluindo, entre outros: perda de dados, corrupção do sistema operacional, falha de hardware, interrupção de negócios ou perda de lucros) decorrentes do uso ou da incapacidade de usar o Software.

4. PONTOS DE RESTAURAÇÃO
É de total responsabilidade do usuário garantir que um Ponto de Restauração do Sistema ou um backup completo dos dados críticos seja criado antes de executar o Software. Os desenvolvedores não garantem a eficácia da função de restauração nativa do Windows.

5. OVERCLOCK E HARDWARE
Otimizações que removem limites de energia podem aumentar a temperatura operacional e o consumo de energia dos componentes (CPU/GPU). O usuário é responsável por monitorar as temperaturas e a estabilidade térmica de seu sistema.

6. VIOLAÇÃO DE TERMOS DE TERCEIROS
O uso de scripts de otimização pode, em casos raros, ser interpretado como uma violação dos Termos de Serviço de alguns softwares anti-cheat ou aplicativos corporativos. O usuário assume total responsabilidade pelo cumprimento de acordos de terceiros.

7. NÃO AFILIAÇÃO
O KT Optimizer não é afiliado, associado, autorizado, endossado por, ou de qualquer forma oficialmente conectado à Microsoft Corporation ou a qualquer uma de suas subsidiárias.

Ao executar o programa, o usuário declara ter lido, compreendido e aceitado integralmente os termos deste aviso legal.`
    }
};

const IT_CONTENT = {
    app: {
        nav: {
            home: "Home",
            about: "Cos'è",
            virustotal: "VirusTotal",
            benchmark: "Benchmark",
            changelog: "Novità",
            target: "A Chi è Rivolto",
            howItWorks: "Guida",
            faq: "FAQ",
            wallpaper: "Wallpaper"
        },
        hero: {
            headline: "Otimização extrema para Windows, feita por quem entende.",
            subheadline: "Uma suíte de ferramentas de alto desempenho criada para extrair o máximo do seu sistema — jogos, produtividade ou uso geral.",
            ctaDownloadExe: "Em breve",
            ctaLearn: "Come funziona",
            imageLabelLeft: "Interfaccia di KT Supreme V2",
            imageLabelRight: "Risultati dopo aver applicato KT Supreme V2"
        },
        welcome: {
            title: "KT Supreme V2 Rilasciata!",
            subtitle: "L'attesa è finita. Scarica ora!",
            btnDownload: "SCARICA NEL SITO",
            btnTelegram: "ACESSAR GITHUB"
        },
        about: {
            title: "Che cos'è KT Optimizer",
            description1: "O KT OPTIMIZER é uma suíte de ferramentas de alto desempenho com otimizações diretas no kernel e drivers para extrair o máximo do seu hardware.",
            description2: "O objetivo é fornecer a máxima responsividade do sistema, boot rápido, rede otimizada para menor ping em jogos online e remoção completa de telemetria e bloatware.",
        },
        virustotal: {
            title: "VirusTotal e Rilevamenti",
            subtitle: "Il file è stato verificato su VirusTotal e risulta completamente sicuro.",
            detectionCount: "3/62",
            detectionLabel: "Rilevamenti",
            falsePositiveLabel: "Falso Positivo Confermato",
            statusTitle: "Stato",
            statusValue: "SICURO",
            hashTitle: "SHA-256",
            hashValue: "89a0b2aa212380f906af3d42bace1bc0aa9acdb156624844848695b950127337",
            falsePositiveTitle: "⚠️ Perché è rilevato come falso positivo?",
            falsePositiveDescription: "Lo script esegue modifiche profonde al sistema, come tweak del registro, disabilitazione di servizi non essenziali e ottimizzazioni del kernel. Molti antivirus rilevano queste azioni come sospette, generando un falso positivo.",
            safeTitle: "✅ Sicuro da usare",
            safeDescription: "Il software è completamente open source e gratuito. I rilevamenti non indicano malware reale, solo interventi legittimi sul sistema che alcuni antivirus interpretano come rischiosi.",
            viewReport: ""
        },
        benchmark: {
            title: "Benchmark delle Prestazioni",
            subtitle: "Confronto reale delle prestazioni tra <strong>Windows standard (senza ottimizzazioni)</strong> e <strong>Windows ottimizzato con KT Supreme V2</strong>.",
            tabs: {
                sys: "Task Manager & Specs",
                cpu: "CPU-Z",
                geek: "Geekbench",
                lat: "LatencyMon",
                mc: "Minecraft",
                furmark: "Furmark"
            },
            before: "Prima (Standard)",
            after: "Dopo KT Optimizer",
            ph: {
                sysBeforeCPU: "[ Screenshot Task Manager CPU - Prima ]",
                sysBeforeRAM: "[ Screenshot Task Manager RAM - Prima ]",
                sysAfterCPU: "[ Screenshot Task Manager CPU - Dopo ]",
                sysAfterRAM: "[ Screenshot Task Manager RAM - Dopo ]",
                cpuBefore: "[ Screenshot CPU-Z - Prima ]",
                cpuAfter: "[ Screenshot CPU-Z - Dopo ]",
                geekBeforeCPU: "[ Screenshot Geekbench CPU - Prima ]",
                geekBeforeGPU: "[ Screenshot Geekbench GPU - Prima ]",
                geekAfterCPU: "[ Screenshot Geekbench CPU - Dopo ]",
                geekAfterGPU: "[ Screenshot Geekbench GPU - Dopo ]",
                latBefore: "[ Screenshot LatencyMon - Prima ]",
                latAfter: "[ Screenshot LatencyMon - Dopo ]",
                mcBefore: "[ Screenshot Minecraft - Prima ]",
                mcAfter: "[ Screenshot Minecraft - Dopo ]"
            },
            hardwareTitle: "Hardware Test",
            metrics: {
                cpu: "Utilizzo CPU",
                cpuBefore: "4%",
                cpuAfter: "0%",
                ram: "Utilizzo RAM",
                ramBefore: "3.8 GB",
                ramAfter: "2.5 GB",
                procs: "Processi Attivi",
                procsBefore: "152",
                procsAfter: "56",
                cpuzTitle: "Incremento Punteggio CPU-Z",
                single: "Single Thread",
                cpuZSingleImp: "603.4 pts (+7.6%)",
                multi: "Multi Thread",
                cpuZMultiImp: "4813.8 pts (+23.7%)",
                cpuZSingleBefore: "560.4 pts",
                cpuZSingleAfter: "603.4 pts",
                cpuZMultiBefore: "3889.6 pts",
                cpuZMultiAfter: "4813.8 pts",
                geekCpuTitle: "Geekbench CPU Score",
                geekGpuTitle: "Geekbench GPU Score",
                opencl: "OpenCL",
                geekOpenClImp: "153829 pts (+21.1%)",
                vulkan: "Vulkan / CUDA",
                geekVulkanImp: "+ --%",
                geekTitle: "Confronto Punteggi Geekbench",
                geekSingleImp: "1982 pts (+316.4%)",
                geekMultiImp: "6294 pts (+70.1%)",
                latDpc: "DPC Routine Execution Time",
                latDpcBefore: "231.3 µs",
                latDpcAfter: "81.8 µs",
                latDpcImp: "-64.6% Latenza",
                latDrv: "Driver Latency",
                latDrvBefore: "120.3 µs",
                latDrvAfter: "55.1 µs",
                latDrvImp: "-54.2% Latenza",
                mcAvg: "FPS Medi",
                mcAvgBefore: "483 FPS",
                mcAvgAfter: "932 FPS",
                mcLow: "1% Low FPS",
                mcLowDesc: "(Stabilità)",
                mcLowBefore: "283 FPS",
                mcLowAfter: "711 FPS",
                furmarkScore: "Furmark Score",
                furmarkScoreBefore: "4605 pts",
                furmarkScoreAfter: "7379 pts",
                furmarkFps: "Furmark FPS",
                furmarkFpsBefore: "76 FPS",
                furmarkFpsAfter: "123 FPS",
                cpuFeature: "Ottimizzazione Prestazioni CPU",
                gpuFeature: "Ottimizzazione Prestazioni GPU",
                debloaterFeature: "System Debloater",
                servicesFeature: "Ottimizzazione Servizi",
                networkFeature: "Ottimizzazione Rete",
                ramFeature: "Ottimizzazione RAM/Memoria",
                geekSingleBefore: "476 pts",
                geekMultiBefore: "3699 pts",
                geekOpenClBefore: "126938 pts"
            }
        },
        comingSoon: {
            title: "Prossimamente",
            subtitle: "Stiamo preparando qualcosa di speciale! I wallpaper KT Optimizer saranno disponibili a breve.",
            btn: "Ho capito"
        },
        target: {
            title: "Per chi è pensato",
            subtitle: "Un'architettura d'élite per chi non scende a compromessi con la latenza.",
            items: [
                {
                    title: "Gamer Elite",
                    description: "Azzeramento quasi totale dell'input lag e l'instabilità dei frame in qualsiasi Gioco/Programma.",
                    icon: "monitor-play"
                },
                {
                    title: "Professionisti Hi-End",
                    description: "Un ambiente di lavoro calibrato per carichi estremi, dove la potenza hardware incontra l'efficienza massima del software.",
                    icon: "layers"
                },
                {
                    title: "Entusiasti Tech",
                    description: "Controllo granulare sul cuore del sistema operativo, liberando la macchina da ogni vincolo invisibile.",
                    icon: "code-2"
                },
                {
                    title: "Ecosistema Desktop",
                    description: "Saturazione totale del bus di sistema per PC fissi e laptop, eliminando ogni collo di bottiglia termico o energetico.",
                    icon: "laptop"
                }
            ]
        },
        steps: {
            title: "Download & Avvio",
            subtitle: "L'eccellenza a pochi clic di distanza. Segui la procedura rapida per sbloccare il potenziale del tuo PC.",
            terminalTitle: "Terminale di Ottimizzazione",
            terminalDesc: "Interfaccia intuitiva e facile da usare",
            securityTitle: "Protocollo di Sicurezza",
            security1: "Punto di ripristino automatico",
            security2: "Modifiche sicure e testate",
            security3: "Rollback completo garantito",
            items: [
                {
                    number: 1,
                    title: "Scarica il Programma",
                    description: "Scarica l'eseguibile ufficiale dal pulsante dedicato."
                },
                {
                    number: 2,
                    title: "Esecuzione",
                    description: "Avvia KT OptimizerOptimizer come Amministratore per accedere all'interfaccia di scelta."
                },
                {
                    number: 3,
                    title: "Ottimizzazione",
                    description: "Esegui in ordine i tweak in base ai tuoi componenti e preferenze."
                }
            ]
        },
        changelog: {
            title: "Changelog Tecnico",
            subtitle: "KT Supreme V2 - Build Tecnica",
            description: "- Nuove ottimizzazioni per CPU AMD<br>- Ottimizzazioni kernel più avanzate<br>- Aggiunte nuove ottimizzazioni soprattutto per le schede video AMD e CPU AMD dedicate",
            tabChanges: "Modifiche (Diff)",
            techUpdate: "Aggiornamento Tecnico",
            optArch: "Architettura di Ottimizzazione",
            keyChanges: "Cambiamenti Chiave",
            kc1: "Rifinitura Dispatcher Kernel",
            kc2: "Override Timer Hardware",
            kc3: "Rafforzamento Stack di Rete",
            diff: [
                { type: 'comment', code: '@@ -1,100 +1,100 @@ KT Supreme V2 Manifest' },
                { type: 'comment', code: ':: AMD CPU' },
                { type: 'added', code: 'reg add "HKLM\\SYSTEM\\CurrentControlSet\\Services\\amdlog\\Parameters" /v "EnableBoost" /t REG_DWORD /d 1 /f', info: 'Abilita il boost automatico della CPU AMD, permettendo al processore di aumentare la frequenza quando serve più potenza.' },
                { type: 'added', code: 'reg add "HKLM\\SYSTEM\\CurrentControlSet\\Services\\amdlog\\Parameters" /v "BoostTimeout" /t REG_DWORD /d 0 /f', info: 'Imposta il tempo limite del boost a 0, quindi il boost può rimanere attivo senza limite temporale.' },
                { type: 'added', code: 'reg add "HKLM\\SYSTEM\\CurrentControlSet\\Services\\amdlog\\Parameters" /v "MaxBoostLevel" /t REG_DWORD /d 3 /f', info: 'Imposta il livello massimo di boost della CPU a un livello alto (3), favorendo prestazioni maggiori.' },
                { type: 'added', code: 'reg add "HKLM\\SYSTEM\\CurrentControlSet\\Services\\amdlog\\Parameters" /v "ApmRuntime" /t REG_DWORD /d 1 /f', info: 'Abilita APM (Advanced Power Management) durante il runtime per gestire energia e performance.' },
                { type: 'added', code: 'reg add "HKLM\\SYSTEM\\CurrentControlSet\\Services\\amdlog\\Parameters" /v "C1eEnable" /t REG_DWORD /d 0 /f', info: 'Disabilita lo stato energetico C1E, riducendo il risparmio energetico per avere maggiore reattività della CPU.' },
                { type: 'added', code: 'reg add "HKLM\\SYSTEM\\CurrentControlSet\\Services\\amdlog\\Parameters" /v "GlobalPerfLevel" /t REG_DWORD /d 3 /f', info: 'Imposta il livello globale di prestazioni della CPU al massimo.' },
                { type: 'added', code: 'reg add "HKLM\\SYSTEM\\CurrentControlSet\\Services\\amdlog\\Parameters" /v "PPCEnable" /t REG_DWORD /d 1 /f', info: 'Abilita il controllo PPC (Processor Power Control) per migliorare la gestione delle prestazioni del processore.' },
                { type: 'added', code: 'reg add "HKLM\\SYSTEM\\CurrentControlSet\\Services\\amdlog\\Parameters" /v "SVI2" /t REG_DWORD /d 1 /f', info: 'Abilita il protocollo SVI2, usato dalla CPU AMD per gestire tensione e alimentazione.' },
                { type: 'added', code: 'reg add "HKLM\\SYSTEM\\CurrentControlSet\\Services\\amdlog\\Parameters" /v "Turbo" /t REG_DWORD /d 1 /f', info: 'Attiva la modalità Turbo Boost AMD, aumentando la frequenza della CPU sotto carico.' },
                { type: 'comment', code: ':: AMD GPU' },
                { type: 'added', code: 'reg add "HKLM\\SYSTEM\\CurrentControlSet\\Services\\amdlog\\Parameters" /v "VideoPowerState" /t REG_DWORD /d 0 /f', info: 'Disabilita gli stati di risparmio energetico della GPU integrata video, favorendo prestazioni stabili.' },
                { type: 'added', code: 'reg add "HKLM\\SYSTEM\\CurrentControlSet\\Services\\amdkmdag\\Parameters" /v "PerfLevel" /t REG_DWORD /d 100 /f', info: 'Imposta il livello di prestazioni della GPU AMD al massimo (100).' },
                { type: 'added', code: 'reg add "HKLM\\SYSTEM\\CurrentControlSet\\Services\\amdkmdag\\Parameters" /v "TurboPstate" /t REG_DWORD /d 1 /f', info: 'Abilita gli stati Turbo P-State della GPU per frequenze più alte.' },
                { type: 'added', code: 'reg add "HKLM\\SYSTEM\\CurrentControlSet\\Services\\amdkmdag\\Parameters" /v "DisableDrmCopy" /t REG_DWORD /d 1 /f', info: 'Disabilita alcune copie DRM interne del driver per ridurre overhead grafico.' },
                { type: 'added', code: 'reg add "HKLM\\SYSTEM\\CurrentControlSet\\Services\\amdkmdag\\Parameters" /v "PP_SclkDeepSleepDisable" /t REG_DWORD /d 1 /f', info: 'Disabilita il deep sleep del clock della GPU, mantenendo frequenze più alte.' },
                { type: 'added', code: 'reg add "HKLM\\SYSTEM\\CurrentControlSet\\Services\\amdkmdag\\Parameters" /v "PP_ThermalAutoThrottling" /t REG_DWORD /d 0 /f', info: 'Disabilita il throttling automatico termico, evitando che la GPU riduca le prestazioni per temperatura.' },
                { type: 'added', code: 'reg add "HKLM\\SYSTEM\\CurrentControlSet\\Services\\amdkmdag\\Parameters" /v "KMD_EnableTimings" /t REG_DWORD /d 1 /f', info: 'Abilita timing più aggressivi nel driver GPU per migliorare le prestazioni.' },
                { type: 'added', code: 'reg add "HKLM\\SYSTEM\\CurrentControlSet\\Services\\amdkmdag\\Parameters" /v "PP_DisablePowerGating" /t REG_DWORD /d 1 /f', info: 'Disabilita il power gating, impedendo alla GPU di spegnere parti interne per risparmiare energia.' },
                { type: 'added', code: 'reg add "HKLM\\SYSTEM\\CurrentControlSet\\Services\\amdkmdag\\Parameters" /v "PP_DisableULPS" /t REG_DWORD /d 1 /f', info: 'Disabilita ULPS (Ultra Low Power State) della GPU, evitando rallentamenti quando la GPU si riattiva.' },
                { type: 'added', code: 'reg add "HKLM\\SYSTEM\\CurrentControlSet\\Services\\amdkmdag\\Parameters" /v "EnableNbgSupport" /t REG_DWORD /d 0', info: 'Disabilita il supporto NBG, una funzione interna del driver che può ridurre le prestazioni in alcuni casi.' },
                { type: 'comment', code: ' # End of technical diff' }
            ],
        },
        download: {
            version: "KT Supreme V2"
        },
        faq: {
            title: "FAQ Tecniche",
            subtitle: "Risposte alle domande più comuni sull'ottimizzazione",
            items: [
                {
                    question: "Le modifiche sono reversibili?",
                    answer: "Sì. Il software di ottimizzazione appena avviato ti chiede se creare un Punto di Ripristino. (Per sicurezza si consiglia di accettare) prima di iniziare ad applicare qualsiasi modifica al PC."
                },
                {
                    question: "Devo disattivare l'antivirus?",
                    answer: "Generalmente non è necessario, ma se Windows Defender o altri antivirus bloccano l'esecuzione, potrebbe essere necessario aggiungere un'eccezione data la natura profonda delle ottimizzazioni."
                },
                {
                    question: "Migliora gli FPS in gioco?",
                    answer: "Assolutamente sì!, rimuovendo i colli di bottiglia del sistema e ottimizzando estremamente il sistema, la priorità della CPU, GPU, RAM, SSD si nota un grande miglioramento e aumento della stabilità degli FPS (1% lows) e una riduzione drastica dell'input lag del 96% in molti casi."
                },
                {
                    question: "Hai bisogno di assistenza?",
                    answer: "In caso di problemi tecnici o dubbi, contattaci tramite il nostro server Discord."
                }
            ]
        },
        footer: {
            copyright: "© 2026 KT Optimizer. Tutti i diritti riservati.",
            disclaimer: "L'uso di questo strumento è a rischio e pericolo dell'utente. Non siamo responsabili per eventuali danni diretti o indiretti.",
            privacy: "Privacy Policy",
            legalDisclaimer: "Disclaimer",
            closeBtn: "Chiudi",
            credits: {
                owner: "Owner & Tweak Dev",
                webdeveloper: "Web Developer"
            },
            creators: "Creatori",
            support: "Supporto & Community",
            telegramBtn: "Acessar GitHub",
            donationsBtn: "Donazioni",
            emailSupportBtn: "Email Support",
            visitorsLabel: "Visitatori"
        },
        bugReport: {
            btnLabel: "Segnala bug"
        },
        platinum: {
            title: "Platinum Benchmark",
            back: "Torna Indietro",
            pageTitle: "Modalità Platinum Benchmark",
            pageSubtitle: "Questa è una modalità creata per misurare le Prestazioni e Stabilità del tuo dispositivo in tempo reale",
            testHeadline: "Pronto per il Test?",
            testSubtext: "Avvia il motore di ottimizzazione Platinum Benchmark e porta il tuo PC oltre ogni limite.",
            startButton: "AVVIA BENCHMARK",
            fpsLabel: "Frame Per Secondo",
            loaderText: "Compilazione Shader...",
            pageTransitionText: "Modalità Benchmark estrema attiva."
        },
        wallpaperPage: {
            title: "KT Optimizer <span class=\"text-electric\">Wallpapers</span>",
            subtitle: "L'estetica 4K definitiva per configurazioni ad alte prestazioni. Progettato per elevare la tua esperienza visiva.",
            preview: "Anteprima",
            download4k: "SCARICA IL CAPOLAVORO 4K",
            wallpapers: {
                w1: { name: "Platinum v8", desc: "4K Ultra • Architettura Profonda" },
                w2: { name: "Aqua Flow", desc: "4K Ultra • Cuore Android" },
                w3: { name: "Dark Horizon", desc: "4K Ultra • Ottimizzatore Stealth" },
                w4: { name: "Electric Pulse", desc: "4K Ultra • Boost Frequenza" },
                w5: { name: "Abstract Core", desc: "4K Ultra • Logica Kernel" },
                w6: { name: "Crystal Clear", desc: "4K Ultra • Massima Trasparenza" }
            }
        },
        android: {
            backToHome: "TORNA ALLA HOME",
            mobileEdition: "EDIZIONE MOBILE",
            fullTitle: "KT Optimizer Android",
            titlePart1: "KT Optimizer",
            titlePart2: "ANDROID",
            subtitle: "Scatena il vero potere del tuo dispositivo mobile. Ottimizzazione a livello Kernel ora disponibile per l'ecosistema Android.",
            guideTitle: "Guida all'Installazione",
            step1: "Vai in <span class=\"text-aqua-400 font-medium\">impostazioni</span>, poi in <span class=\"text-aqua-400 font-medium\">opzioni sviluppatore</span> e abilita <span class=\"text-aqua-400 font-medium\">debug USB</span>.",
            step2: "Entra in <span class=\"text-aqua-400 font-medium\">opzioni sviluppatore</span> e abilita <span class=\"text-aqua-400 font-medium\">Debug USB</span>, poi conferma la richiesta sul telefono.",
            step3: "Sposta il file <code class=\"bg-white/5 px-2 py-0.5 rounded text-aqua-400 font-mono text-sm\">.BAT</code> dalla cartella Download alla memoria interna (<span class=\"text-aqua-400 font-medium\">Storage Emulated</span>).",
            step4: "Se il dispositivo viene rilevato, esegui il file <span class=\"text-aqua-400 font-medium\">.BAT</span> come amministratore e segui le istruzioni.",
            downloadBtn: "Scarica KT Optimizer Android 7.0",
            copyright: " 2026 KT Optimizer Android.",
            credits: "Sviluppato da @STEFANO83223",
            troubleshooting: "Se Termux dice errore o se non trova il file, verifica che il file sia nella memoria interna (Storage Emulated) o incolla di nuovo tutto il codice in una volta sola e premi invio nella tastiera.",
            initText: "Inizializzazione Sistema Android...",
            tutorialTitle: "Tutorial KT Optimizer Android ",
            popupTitle: "NUOVO TUTORIAL DISPONIBILE",
            popupClose: "Chiudi"
        }
    },
    legal: {
        privacy: [
            "1. Raccolta Dati: KT Optimizer non raccoglie, memorizza o trasmette alcun dato personale dell'utente.",
            "2. Esecuzione Locale: Tutto il codice viene eseguito localmente sulla macchina dell'utente senza comunicazioni verso server esterni.",
            "3. Nessuna Telemetria: Il software non include moduli di telemetria, tracciamento o analisi comportamentale.",
            "4. Codice Sorgente: Essendo un tool di ottimizzazione, i comandi sono verificabili dal comportamento del sistema.",
            "5. Connessione Internet: Il programma non richiede una connessione internet attiva per funzionare, garantendo l'isolamento dei dati.",
            "6. Log di Sistema: Eventuali log generati sono salvati esclusivamente in locale e sono temporanei.",
            "7. Registro di Windows: Le modifiche al registro non accedono a chiavi contenenti dati sensibili dell'utente.",
            "8. Credenziali: Non vengono mai richieste né accessibili credenziali di accesso, password o token.",
            "9. Cookie: Il sito web e l'eseguibile non utilizzano cookie di profilazione.",
            "10. Terze Parti: Nessun dato viene condiviso con terze parti, partner pubblicitari o affiliati.",
            "11. Conformità GDPR: Sebbene operi localmente, il principio di 'Privacy by Design' è rispettato integralmente.",
            "12. File Utente: Il programma non scansiona, modifica o cancela file personali (documenti, foto, ecc.).",
            "13. Periferiche: Non viene raccolto l'elenco delle periferiche o identificativi hardware univoci per fini di tracciamento.",
            "14. Indirizzo IP: Non viene effettuato alcun logging dell'indirizzo IP dell'utente.",
            "15. Geolocalizzazione: Il software non include funzionalità de tracciamento della posizione.",
            "16. Aggiornamenti: La ricerca di aggiornamenti è manuale; non ci sono connessioni automatiche in background.",
            "17. Pubblicità: Il software è privo di adware o inserzioni pubblicitarie.",
            "18. Minori: Non essendo raccolti dati, non vi è rischio per la privacy dei minori.",
            "19. Sicurezza: L'assenza di comunicazioni di rete elimina vettori di attacco remoti tramite il software.",
            "20. Profilazione: Non viene creata alcuna profilazione dell'hardware o delle abitudini dell'utente."
        ],
        disclaimer: `LIMITAZIONE DI RESPONSABILITÀ (DISCLAIMER)

1. ACCETTAZIONE DEI RISCHI
L'utilizzo del software "KT Optimizer" (di seguito "Software") è a totale discrezione e rischio dell'utente. Il Software viene fornito "COSÌ COM'È", senza alcuna garanzia esplicita o implicita di funzionamento, stabilità o idoneità per uno scopo particolare.

2. MODIFICHE AL SISTEMA
Il Software apporta modifiche profonde al sistema operativo Microsoft Windows, inclusi ma non limitati a: Registro di Sistema, Servizi, Scheduler della CPU, Gestione della Memoria e Configurazioni di Rete. Sebbene progettate per migliorare le prestazioni, tali modifiche potrebbero causare instabilità, incompatibilità software o comportamenti imprevisti in specifiche configurazioni hardware.

3. ESCLUSIONE DI DANNI
In nessun caso gli sviluppatori (un team di due persone indipendenti), i distributori o i collaboratori di KT Optimizer saranno responsabili per danni diretti, indiretti, incidentali, speciali, esemplari o consequenziali (inclusi, ma non limitati a: perdita di dati, corruzione del sistema operativo, guasti hardware, interruzione dell'attività o perdita di profitti) derivanti dall'uso o dall'impossibilità di usare il Software.

4. PUNTI DI RIPRISTINO
È responsabilità esclusiva dell'utente assicurarsi che venga creato un Punto di Ripristino del Sistema o un backup completo dei dati critici prima di eseguire il Software. Gli sviluppatori non garantiscono l'efficacia della funzione di ripristino nativa di Windows.

5. OVERCLOCK E HARDWARE
Le ottimizzazioni che rimuovono limiti energetici possono aumentare la temperatura operativa e il consumo energetico dei componenti (CPU/GPU). L'utente è responsabile del monitoraggio delle temperature e della stabilità termica del proprio sistema.

6. VIOLAZIONE DI TERMINI DI TERZE PARTI
L'uso di tool di ottimizzazione potrebbe, in rari casi, essere interpretato come violazione dei Termini di Servizio di alcuni software anti-cheat o applicazioni aziendali. L'utente si assume la piena responsabilità della conformità con accordi di terze parti.

7. NON AFFILIAZIONE
KT Optimizer non è affiliato, associato, autorizzato, approvato o in alcun modo ufficialmente collegato a Microsoft Corporation o a qualsiasi sua sussidiaria.

Eseguendo il programma, l'utente dichiara di aver letto, compreso e accettato integralmente i termini di questo disclaimer.`
    }
};

const EN_CONTENT = {
    app: {
        nav: {
            home: "Home",
            about: "What is",
            virustotal: "VirusTotal",
            benchmark: "Benchmark",
            changelog: "What's New",
            target: "For Whom",
            howItWorks: "Guide",
            faq: "FAQ",
            wallpaper: "Wallpaper"
        },
        hero: {
            headline: "Otimização extrema para Windows, feita por quem entende.",
            subheadline: "Uma suíte de ferramentas de alto desempenho criada para extrair o máximo do seu sistema — jogos, produtividade ou uso geral.",
            ctaDownloadExe: "Em breve",
            ctaLearn: "How it works",
            imageLabelLeft: "KT Supreme V2 Interface",
            imageLabelRight: "Results after applying KT Supreme V2"
        },
        benchmark: {
            title: "Performance Benchmarks",
            subtitle: "Real performance comparison between <strong>Standard Windows (unoptimized)</strong> and <strong>Windows optimized with KT Supreme V2</strong>.",
            tabs: {
                sys: "Task Manager & Specs",
                cpu: "CPU-Z",
                geek: "Geekbench",
                lat: "LatencyMon",
                mc: "Minecraft",
                furmark: "Furmark"
            },
            before: "Before (Standard)",
            after: "After KT Optimizer",
            ph: {
                sysBeforeCPU: "[ Screenshot Task Manager CPU - Before ]",
                sysBeforeRAM: "[ Screenshot Task Manager RAM - Before ]",
                sysAfterCPU: "[ Screenshot Task Manager CPU - After ]",
                sysAfterRAM: "[ Screenshot Task Manager RAM - After ]",
                cpuBefore: "[ Screenshot CPU-Z - Before ]",
                cpuAfter: "[ Screenshot CPU-Z - After ]",
                geekBeforeCPU: "[ Screenshot Geekbench CPU - Before ]",
                geekBeforeGPU: "[ Screenshot Geekbench GPU - Before ]",
                geekAfterCPU: "[ Screenshot Geekbench CPU - After ]",
                geekAfterGPU: "[ Screenshot Geekbench GPU - After ]",
                latBefore: "[ Screenshot LatencyMon - Before ]",
                latAfter: "[ Screenshot LatencyMon - After ]",
                mcBefore: "[ Screenshot Minecraft - Before ]",
                mcAfter: "[ Screenshot Minecraft - After ]"
            },
            hardwareTitle: "Hardware Test",
            metrics: {
                cpu: "CPU Usage",
                cpuBefore: "4%",
                cpuAfter: "0%",
                ram: "RAM Usage",
                ramBefore: "3.8 GB",
                ramAfter: "2.5 GB",
                procs: "Active Processes",
                procsBefore: "152",
                procsAfter: "56",
                cpuzTitle: "CPU-Z Score Increase",
                single: "Single Thread",
                cpuZSingleImp: "603.4 pts (+7.6%)",
                multi: "Multi Thread",
                cpuZMultiImp: "4813.8 pts (+23.7%)",
                cpuZSingleBefore: "560.4 pts",
                cpuZSingleAfter: "603.4 pts",
                cpuZMultiBefore: "3889.6 pts",
                cpuZMultiAfter: "4813.8 pts",
                geekCpuTitle: "Geekbench CPU Score",
                geekGpuTitle: "Geekbench GPU Score",
                opencl: "OpenCL",
                geekOpenClImp: "153829 pts (+21.1%)",
                vulkan: "Vulkan / CUDA",
                geekVulkanImp: "+ --%",
                geekTitle: "Geekbench Score Comparison",
                geekSingleImp: "1982 pts (+316.4%)",
                geekMultiImp: "6294 pts (+70.1%)",
                latDpc: "DPC Routine Execution Time",
                latDpcBefore: "231.3 µs",
                latDpcAfter: "81.8 µs",
                latDpcImp: "-64.6% Latency",
                latDrv: "Driver Latency",
                latDrvBefore: "120.3 µs",
                latDrvAfter: "55.1 µs",
                latDrvImp: "-54.2% Latency",
                mcAvg: "Average FPS",
                mcAvgBefore: "483 FPS",
                mcAvgAfter: "932 FPS",
                mcLow: "1% Low FPS",
                mcLowDesc: "(Stability)",
                mcLowBefore: "283 FPS",
                mcLowAfter: "711 FPS",
                furmarkScore: "Furmark Score",
                furmarkScoreBefore: "4605 pts",
                furmarkScoreAfter: "7379 pts",
                furmarkFps: "Furmark FPS",
                furmarkFpsBefore: "76 FPS",
                furmarkFpsAfter: "123 FPS",
                cpuFeature: "CPU Performance Optimization",
                gpuFeature: "GPU Performance Optimization",
                debloaterFeature: "System Debloater",
                servicesFeature: "Services Optimizer",
                networkFeature: "Network Optimizer",
                ramFeature: "RAM/Memory Optimizer",
                geekSingleBefore: "476 pts",
                geekMultiBefore: "3699 pts",
                geekOpenClBefore: "126938 pts"
            }
        },
        welcome: {
            title: "KT Supreme V2 Released!",
            subtitle: "The wait is over. Download now!",
            btnDownload: "DOWNLOAD ON SITE",
            btnTelegram: "ACESSAR GITHUB"
        },
        about: {
            title: "What is KT Optimizer",
            description1: "O KT OPTIMIZER é uma suíte de ferramentas de alto desempenho com otimizações diretas no kernel e drivers para extrair o máximo do seu hardware.",
            description2: "O objetivo é fornecer a máxima responsividade do sistema, boot rápido, rede otimizada para menor ping em jogos online e remoção completa de telemetria e bloatware.",
        },
        virustotal: {
            title: "VirusTotal & Checks",
            subtitle: "The file has been checked on VirusTotal and is completely safe.",
            detectionCount: "3/62",
            detectionLabel: "Detections",
            falsePositiveLabel: "Confirmed False Positive",
            statusTitle: "Status",
            statusValue: "SAFE",
            hashTitle: "SHA-256",
            hashValue: "89a0b2aa212380f906af3d42bace1bc0aa9acdb156624844848695b950127337",
            falsePositiveTitle: "⚠️ Why is it detected as a false positive?",
            falsePositiveDescription: "The script makes deep system changes such as registry tweaks, disabling unnecessary services, and kernel optimization. Many antiviruses flag these actions as suspicious.",
            safeTitle: "✅ Safe to use",
            safeDescription: "The software is completely open and free. Detections do not indicate malware, but only legitimate systemic interventions.",
            viewReport: ""
        },
        comingSoon: {
            title: "Coming Soon",
            subtitle: "We're preparing something special! KT Optimizer wallpapers will be available soon.",
            btn: "Understood"
        },
        target: {
            title: "Who is it for",
            subtitle: "Elite architecture for those who do not compromise on latency.",
            items: [
                {
                    title: "Elite Gamers",
                    description: "Almost complete elimination of input lag and frame instability in any game or program.",
                    icon: "monitor-play"
                },
                {
                    title: "Hi-End Professionals",
                    description: "Work environment calibrated for extreme loads, where hardware power meets efficiency.",
                    icon: "layers"
                },
                {
                    title: "Tech Enthusiasts",
                    description: "Granular control over the core of the operating system, freeing the machine from any invisible chains.",
                    icon: "code-2"
                },
                {
                    title: "Desktop Ecosystem",
                    description: "Full optimization of the system bus for PCs and laptops, eliminating any thermal or power bottlenecks.",
                    icon: "laptop"
                }
            ]
        },
        steps: {
            title: "Download & Launch",
            subtitle: "Perfection within a few clicks. Follow the quick procedure to unlock your PC's potential.",
            terminalTitle: "Optimization Terminal",
            terminalDesc: "Intuitive and easy-to-use interface",
            securityTitle: "Security Protocol",
            security1: "Automatic Restore Point",
            security2: "Safe and Tested Tweaks",
            security3: "Guaranteed Full Rollback",
            items: [
                {
                    number: 1,
                    title: "Download the program",
                    description: "Download the official executable via the dedicated button."
                },
                {
                    number: 2,
                    title: "Launch",
                    description: "Run KT OptimizerOptimizer as administrator to open the selection interface."
                },
                {
                    number: 3,
                    title: "Optimization",
                    description: "Sequentially execute tweaks based on your components and preferences."
                }
            ]
        },
        changelog: {
            title: "Technical Changelog",
            subtitle: "KT Supreme V2 - Technical Build",
            description: "- New optimizations for AMD CPUs<br>- More advanced kernel optimizations<br>- Added new optimizations especially for dedicated AMD GPUs and AMD CPUs",
            tabChanges: "Changes (Diff)",
            techUpdate: "Technical Update",
            optArch: "Optimization Architecture",
            keyChanges: "Key Changes",
            kc1: "Kernel Dispatcher Refinement",
            kc2: "Hardware Timer Override",
            kc3: "Network Stack Hardening",
            diff: [
                { type: 'comment', code: '@@ -1,100 +1,100 @@ KT Supreme V2 Manifest' },
                { type: 'comment', code: ':: AMD CPU' },
                { type: 'added', code: 'reg add "HKLM\\SYSTEM\\CurrentControlSet\\Services\\amdlog\\Parameters" /v "EnableBoost" /t REG_DWORD /d 1 /f', info: 'Enables automatic boost for the AMD CPU, allowing the processor to increase frequency when more power is needed.' },
                { type: 'added', code: 'reg add "HKLM\\SYSTEM\\CurrentControlSet\\Services\\amdlog\\Parameters" /v "BoostTimeout" /t REG_DWORD /d 0 /f', info: 'Sets the boost time limit to 0, so the boost can remain active without a time limit.' },
                { type: 'added', code: 'reg add "HKLM\\SYSTEM\\CurrentControlSet\\Services\\amdlog\\Parameters" /v "MaxBoostLevel" /t REG_DWORD /d 3 /f', info: 'Sets the maximum CPU boost level to high (3), favoring higher performance.' },
                { type: 'added', code: 'reg add "HKLM\\SYSTEM\\CurrentControlSet\\Services\\amdlog\\Parameters" /v "ApmRuntime" /t REG_DWORD /d 1 /f', info: 'Enables APM (Advanced Power Management) during runtime to manage energy and performance.' },
                { type: 'added', code: 'reg add "HKLM\\SYSTEM\\CurrentControlSet\\Services\\amdlog\\Parameters" /v "C1eEnable" /t REG_DWORD /d 0 /f', info: 'Disables the C1E energy state, reducing power saving for greater CPU responsiveness.' },
                { type: 'added', code: 'reg add "HKLM\\SYSTEM\\CurrentControlSet\\Services\\amdlog\\Parameters" /v "GlobalPerfLevel" /t REG_DWORD /d 3 /f', info: 'Sets the global CPU performance level to maximum.' },
                { type: 'added', code: 'reg add "HKLM\\SYSTEM\\CurrentControlSet\\Services\\amdlog\\Parameters" /v "PPCEnable" /t REG_DWORD /d 1 /f', info: 'Enables PPC (Processor Power Control) to improve processor performance management.' },
                { type: 'added', code: 'reg add "HKLM\\SYSTEM\\CurrentControlSet\\Services\\amdlog\\Parameters" /v "SVI2" /t REG_DWORD /d 1 /f', info: 'Enables the SVI2 protocol, used by the AMD CPU to manage voltage and power.' },
                { type: 'added', code: 'reg add "HKLM\\SYSTEM\\CurrentControlSet\\Services\\amdlog\\Parameters" /v "Turbo" /t REG_DWORD /d 1 /f', info: 'Activates AMD Turbo Boost mode, increasing CPU frequency under load.' },
                { type: 'comment', code: ':: AMD GPU' },
                { type: 'added', code: 'reg add "HKLM\\SYSTEM\\CurrentControlSet\\Services\\amdlog\\Parameters" /v "VideoPowerState" /t REG_DWORD /d 0 /f', info: 'Disables energy saving states of the integrated video GPU, favoring stable performance.' },
                { type: 'added', code: 'reg add "HKLM\\SYSTEM\\CurrentControlSet\\Services\\amdkmdag\\Parameters" /v "PerfLevel" /t REG_DWORD /d 100 /f', info: 'Sets the AMD GPU performance level to maximum (100).' },
                { type: 'added', code: 'reg add "HKLM\\SYSTEM\\CurrentControlSet\\Services\\amdkmdag\\Parameters" /v "TurboPstate" /t REG_DWORD /d 1 /f', info: 'Enables the GPU Turbo P-States for higher frequencies.' },
                { type: 'added', code: 'reg add "HKLM\\SYSTEM\\CurrentControlSet\\Services\\amdkmdag\\Parameters" /v "DisableDrmCopy" /t REG_DWORD /d 1 /f', info: 'Disables some internal DRM copies of the driver to reduce graphics overhead.' },
                { type: 'added', code: 'reg add "HKLM\\SYSTEM\\CurrentControlSet\\Services\\amdkmdag\\Parameters" /v "PP_SclkDeepSleepDisable" /t REG_DWORD /d 1 /f', info: 'Disables the deep sleep of the GPU clock, maintaining higher frequencies.' },
                { type: 'added', code: 'reg add "HKLM\\SYSTEM\\CurrentControlSet\\Services\\amdkmdag\\Parameters" /v "PP_ThermalAutoThrottling" /t REG_DWORD /d 0 /f', info: 'Disables automatic thermal throttling, preventing the GPU from reducing performance due to temperature.' },
                { type: 'added', code: 'reg add "HKLM\\SYSTEM\\CurrentControlSet\\Services\\amdkmdag\\Parameters" /v "KMD_EnableTimings" /t REG_DWORD /d 1 /f', info: 'Enables more aggressive timings in the GPU driver to improve performance.' },
                { type: 'added', code: 'reg add "HKLM\\SYSTEM\\CurrentControlSet\\Services\\amdkmdag\\Parameters" /v "PP_DisablePowerGating" /t REG_DWORD /d 1 /f', info: 'Disables power gating, preventing the GPU from turning off internal parts to save energy.' },
                { type: 'added', code: 'reg add "HKLM\\SYSTEM\\CurrentControlSet\\Services\\amdkmdag\\Parameters" /v "PP_DisableULPS" /t REG_DWORD /d 1 /f', info: 'Disables ULPS (Ultra Low Power State) of the GPU, avoiding slowdowns when the GPU wakes up.' },
                { type: 'added', code: 'reg add "HKLM\\SYSTEM\\CurrentControlSet\\Services\\amdkmdag\\Parameters" /v "EnableNbgSupport" /t REG_DWORD /d 0', info: 'Disables NBG support, an internal driver feature that can reduce performance in some cases.' },
                { type: 'comment', code: ' # End of technical diff' }
            ],
        },
        download: {
            version: "KT Supreme V2"
        },
        faq: {
            title: "Technical FAQ",
            subtitle: "Answers to the most common questions about optimization",
            items: [
                {
                    question: "Are the changes reversible?",
                    answer: "Yes. The program asks if you want to create a system restore point before applying any changes."
                },
                {
                    question: "Do I need to disable the antivirus?",
                    answer: "Usually no, but if Windows Defender blocks it, you may need to add an exception."
                },
                {
                    question: "Does it improve FPS in games?",
                    answer: "Absolutely! By eliminating bottlenecks and optimizing component priorities."
                },
                {
                    question: "Do you need assistance?",
                    answer: "In case of technical problems or questions, please contact us through our Discord server."
                }
            ]
        },
        footer: {
            copyright: "© 2026 KT Optimizer. All rights reserved.",
            disclaimer: "Use of this tool is at the user's sole risk. We are not responsible for any direct or indirect damage.",
            privacy: "Privacy Policy",
            legalDisclaimer: "Legal Disclaimer",
            closeBtn: "Close",
            credits: {
                owner: "Owner & Tweak Dev",
                webdeveloper: "Web Developer"
            },
            creators: "Creators",
            support: "Support & Community",
            telegramBtn: "Acessar GitHub",
            donationsBtn: "Donations",
            emailSupportBtn: "Email Support",
            visitorsLabel: "Visitors"
        },
        bugReport: {
            btnLabel: "Report bug"
        },
        platinum: {
            title: "Platinum Benchmark",
            back: "Go Back",
            pageTitle: "Platinum Benchmark Mode",
            pageSubtitle: "This mode is designed to measure the Performance and Stability of your device in real-time",
            testHeadline: "Ready for the Test?",
            testSubtext: "Start the Platinum Benchmark optimization engine and push your PC beyond all limits.",
            startButton: "START BENCHMARK",
            fpsLabel: "Frames Per Second",
            loaderText: "Compiling Shaders...",
            pageTransitionText: "Extreme Benchmark Mode active."
        },
        wallpaperPage: {
            title: "KT Optimizer <span class=\"text-electric\">Wallpapers</span>",
            subtitle: "The ultimate 4K aesthetic for high-performance setups. Designed to elevate your visual experience.",
            preview: "Preview",
            download4k: "DOWNLOAD 4K MASTERPIECE",
            wallpapers: {
                w1: { name: "Platinum v8", desc: "4K Ultra • Deep Architecture" },
                w2: { name: "Aqua Flow", desc: "4K Ultra • Android Core" },
                w3: { name: "Dark Horizon", desc: "4K Ultra • Stealth Optimizer" },
                w4: { name: "Electric Pulse", desc: "4K Ultra • Frequency Boost" },
                w5: { name: "Abstract Core", desc: "4K Ultra • Kernel Logic" },
                w6: { name: "Crystal Clear", desc: "4K Ultra • Maximum Transparency" }
            }
        },
        android: {
            backToHome: "BACK TO HOME",
            mobileEdition: "MOBILE EDITION",
            fullTitle: "KT Optimizer Android",
            titlePart1: "KT Optimizer",
            titlePart2: "ANDROID",
            subtitle: "Unleash the true power of your mobile device. Kernel-level optimization now available for the Android ecosystem.",
            guideTitle: "Installation Guide",
            step1: "Go to <span class=\"text-aqua-400 font-medium\">Settings</span>, then <span class=\"text-aqua-400 font-medium\">Developer Options</span> and enable <span class=\"text-aqua-400 font-medium\">USB Debugging</span>.",
            step2: "Enter <span class=\"text-aqua-400 font-medium\">Developer Options</span> and enable <span class=\"text-aqua-400 font-medium\">USB Debugging</span>, then confirm the request on your phone.",
            step3: "Move the <code class=\"bg-white/5 px-2 py-0.5 rounded text-aqua-400 font-mono text-sm\">.BAT</code> file from the Download folder to the internal storage (<span class=\"text-aqua-400 font-medium\">Storage Emulated</span>).",
            step4: "If the device is detected, run the <span class=\"text-aqua-400 font-medium\">.BAT</span> file as administrator and follow the instructions.",
            downloadBtn: "Download KT Optimizer Android 7.0",
            copyright: "© 2026 KT Optimizer Android.",
            credits: "Developed by @STEFANO83223",
            troubleshooting: "If Termux shows an error or cannot find the file, verify that the file is in the internal storage (Storage Emulated) or paste the entire code again and press enter on the keyboard.",
            initText: "Android System Initialization...",
            tutorialTitle: "KT Optimizer Android Tutorial 🚀",
            popupTitle: "NEW TUTORIAL AVAILABLE",
            popupClose: "Close"
        }
    },
    legal: {
        privacy: [
            "1. Data Collection: KT Optimizer does not collect, store, or transmit any personal user data.",
            "2. Local Execution: All code runs locally on the user's machine without communication to external servers.",
            "3. No Telemetry: The software includes no telemetry, tracking, or behavioral analysis modules.",
            "4. Source Code: As an optimization tool, operations are verifiable via system behavior.",
            "5. Internet Connection: The program does not require an active internet connection to function, ensuring data isolation.",
            "6. System Logs: Any generated logs are saved exclusively locally and are temporary.",
            "7. Windows Registry: Registry changes do not access keys containing sensitive user data.",
            "8. Credentials: Login credentials, passwords, or tokens are never requested or accessed.",
            "9. Cookies: The website and executable do not use profiling cookies.",
            "10. Third Parties: No data is shared with third parties, advertising partners, or affiliates.",
            "11. GDPR Compliance: Although operating locally, the 'Privacy by Design' principle is fully respected.",
            "12. User Files: The program does not scan, modify, or delete personal files (documents, photos, etc.).",
            "13. Peripherals: Peripheral lists or unique hardware identifiers are not collected for tracking purposes.",
            "14. IP Address: No logging of the user's IP address is performed.",
            "15. Geolocation: No geolocation functionality is present in the software.",
            "16. Updates: The search for updates is manual; there are no automatic background connections.",
            "17. Advertising: The software is free of adware or advertising insertions.",
            "18. Minors: Since no data is collected, there is no risk to the privacy of minors.",
            "19. Security: The absence of network communications eliminates remote attack vectors via the software.",
            "20. Profiling: No profiling of hardware or user habits is created."
        ],
        disclaimer: `LIMITATION OF LIABILITY (DISCLAIMER)

1. ACCEPTANCE OF RISKS
The use of the software "KT Optimizer" (hereinafter "Software") is at the user's sole discretion and risk. The Software is provided "AS IS", without any express or implied warranty of operation, stability, or fitness for a particular purpose.

2. SYSTEM MODIFICATIONS
The Software makes deep changes to the Microsoft Windows operating system, including but not limited to: System Registry, Services, CPU Scheduler, Memory Management, and Network Configurations. Although designed to improve performance, such changes could cause instability, software incompatibility, or unexpected behavior in specific hardware configurations.

3. EXCLUSION OF DAMAGES
In no event shall the developers (a team of two independent people), distributors, or collaborators of KT Optimizer be liable for direct, indirect, incidental, special, exemplary, or consequential damages (including, but not limited to: loss of data, OS corruption, hardware failure, business interruption, or loss of profits) arising from the use or inability to use the Software.

4. RESTORE POINTS
It is the user's sole responsibility to ensure that a System Restore Point or a full backup of critical data is created before running the Software. The developers do not guarantee the effectiveness of the native Windows restore function.

5. OVERCLOCK AND HARDWARE
Optimizations that remove power limits may increase the operating temperature and power consumption of components (CPU/GPU). The user is responsible for monitoring temperatures and thermal stability of their system.

6. VIOLATION OF THIRD-PARTY TERMS
The use of optimization scripts could, in rare cases, be interpreted as a violation of the Terms of Service of some anti-cheat software or corporate applications. The user assumes full responsibility for compliance with third-party agreements.

7. NON-AFFILIATION
KT Optimizer is not affiliated, associated, authorized, endorsed by, or in any way officially connected with Microsoft Corporation or any of its subsidiaries.

By executing the program, the user declares to have read, understood, and fully accepted the terms of this disclaimer.`
    }
};

const RU_CONTENT = {
    app: {
        hero: {
            headline: "Otimização extrema para Windows, feita por quem entende.",
            subheadline: "Uma suíte de ferramentas de alto desempenho criada para extrair o máximo do seu sistema — jogos, produtividade ou uso geral.",
            ctaDownloadExe: "Em breve",
            ctaLearn: "Как это работает",
            imageLabelLeft: "Интерфейс KT Supreme V2",
            imageLabelRight: "Результаты после применения KT Supreme V2"
        },
        benchmark: {
            title: "Бенчмарки производительности",
            subtitle: "Реальное сравнение производительности <strong>стандартной Windows (без оптимизации)</strong> и <strong>Windows, оптимизированной с помощью KT Supreme V2</strong>.",
            tabs: {
                sys: "Диспетчер задач и спецификации",
                cpu: "CPU-Z",
                geek: "Geekbench",
                lat: "LatencyMon",
                mc: "Minecraft",
                furmark: "Furmark"
            },
            before: "До (Стандарт)",
            after: "После KT Optimizer",
            ph: {
                sysBeforeCPU: "[ Скриншот диспетчера задач CPU - До ]",
                sysBeforeRAM: "[ Скриншот диспетчера задач RAM - До ]",
                sysAfterCPU: "[ Скриншот диспетчера задач CPU - После ]",
                sysAfterRAM: "[ Скриншот диспетчера задач RAM - После ]",
                cpuBefore: "[ Скриншот CPU-Z - До ]",
                cpuAfter: "[ Скриншот CPU-Z - После ]",
                geekBeforeCPU: "[ Скриншот Geekbench CPU - До ]",
                geekBeforeGPU: "[ Скриншот Geekbench GPU - До ]",
                geekAfterCPU: "[ Скриншот Geekbench CPU - После ]",
                geekAfterGPU: "[ Скриншот Geekbench GPU - После ]",
                latBefore: "[ Скриншот LatencyMon - До ]",
                latAfter: "[ Скриншот LatencyMon - После ]",
                mcBefore: "[ Скриншот Minecraft - До ]",
                mcAfter: "[ Скриншот Minecraft - После ]"
            },
            hardwareTitle: "Тестируемое оборудование",
            metrics: {
                cpu: "Использование ЦП",
                cpuBefore: "4%",
                cpuAfter: "0%",
                ram: "Использование ОЗУ",
                ramBefore: "3.8 GB",
                ramAfter: "2.5 GB",
                procs: "Активные процессы",
                procsBefore: "152",
                procsAfter: "56",
                cpuzTitle: "Повышение оценки CPU-Z",
                single: "Однопоточный",
                cpuZSingleImp: "603.4 pts (+7.6%)",
                multi: "Многопоточный",
                cpuZMultiImp: "4813.8 pts (+23.7%)",
                cpuZSingleBefore: "560.4 pts",
                cpuZSingleAfter: "603.4 pts",
                cpuZMultiBefore: "3889.6 pts",
                cpuZMultiAfter: "4813.8 pts",
                geekCpuTitle: "Geekbench CPU Score",
                geekGpuTitle: "Geekbench GPU Score",
                opencl: "OpenCL",
                geekOpenClImp: "153829 pts (+21.1%)",
                vulkan: "Vulkan / CUDA",
                geekVulkanImp: "+ --%",
                geekTitle: "Сравнение оценки Geekbench",
                geekSingleImp: "1982 pts (+316.4%)",
                geekMultiImp: "6294 pts (+70.1%)",
                latDpc: "Время выполнения DPC",
                latDpcBefore: "231.3 µs",
                latDpcAfter: "81.8 µs",
                latDpcImp: "-64.6% Задержка",
                latDrv: "Задержка драйвера",
                latDrvBefore: "120.3 µs",
                latDrvAfter: "55.1 µs",
                latDrvImp: "-54.2% Задержка",
                mcAvg: "Средний FPS",
                mcAvgBefore: "483 FPS",
                mcAvgAfter: "932 FPS",
                mcLow: "1% Low FPS",
                mcLowDesc: "(Стабильность)",
                mcLowBefore: "283 FPS",
                mcLowAfter: "711 FPS",
                furmarkScore: "Furmark Score",
                furmarkScoreBefore: "4605 pts",
                furmarkScoreAfter: "7379 pts",
                furmarkFps: "Furmark FPS",
                furmarkFpsBefore: "76 FPS",
                furmarkFpsAfter: "123 FPS",
                cpuFeature: "Оптимизация производительности ЦП",
                gpuFeature: "Оптимизация производительности ГП",
                debloaterFeature: "Очистка системы",
                servicesFeature: "Оптимизация служб",
                networkFeature: "Оптимизация сети",
                ramFeature: "Оптимизация ОЗУ/Памяти",
                geekSingleBefore: "476 pts",
                geekMultiBefore: "3699 pts",
                geekOpenClBefore: "126938 pts"
            }
        },
        welcome: {
            title: "KT Supreme V2 выпущена!",
            subtitle: "Ожидание окончено. Скачайте сейчас!",
            btnDownload: "СКАЧАТЬ НА САЙТЕ",
            btnTelegram: "ACESSAR GITHUB"
        },
        about: {
            title: "Что такое KT Optimizer",
            description1: "O KT OPTIMIZER é uma suíte de ferramentas de alto desempenho com otimizações diretas no kernel e drivers para extrair o máximo do seu hardware.",
            description2: "O objetivo é fornecer a máxima responsividade do sistema, boot rápido, rede otimizada para menor ping em jogos online e remoção completa de telemetria e bloatware.",
        },
        virustotal: {
            title: "VirusTotal и проверки",
            subtitle: "Файл был проверен на VirusTotal и является полностью безопасным.",
            detectionCount: "3/62",
            detectionLabel: "Обнаружения",
            falsePositiveLabel: "Подтвержден ложный флаг",
            statusTitle: "Статус",
            statusValue: "БЕЗОПАСНО",
            hashTitle: "SHA-256",
            hashValue: "89a0b2aa212380f906af3d42bace1bc0aa9acdb156624844848695b950127337",
            falsePositiveTitle: "⚠️ Почему это определяется как ложное срабатывание?",
            falsePositiveDescription: "Скрипт вносит глубокие изменения в систему, такие как настройки реестра, отключение ненужных служб и оптимизация ядра. Многие антивирусы воспринимают эти действия как подозрительные.",
            safeTitle: "✅ Безопасно для использования",
            safeDescription: "Программное обеспечение полностью открытое и бесплатное. Обнаружения не указывают на вредоносное ПО, а только на легитимные системные вмешательства.",
            viewReport: ""
        },
        comingSoon: {
            title: "Скоро",
            subtitle: "Мы готовим что-то особенное! Обои KT Optimizer скоро будут доступны.",
            btn: "Понятно"
        },
        target: {
            title: "Для кого это",
            subtitle: "Элитная архитектура для тех, кто не идет на компромиссы с задержкой.",
            items: [
                {
                    title: "Элитные геймеры",
                    description: "Почти полное устранение задержки ввода и нестабильности кадров в любой игре или программе.",
                    icon: "monitor-play"
                },
                {
                    title: "Hi-End Профессионалы",
                    description: "Рабочая среда, откалиброванная для экстремальных нагрузок, где аппаратная мощность встречается с эффективностью.",
                    icon: "layers"
                },
                {
                    title: "Техно-энтузиасты",
                    description: "Детальный контроль над ядром операционной системы, освобождающий машину от любых невидимых оков.",
                    icon: "code-2"
                },
                {
                    title: "Десктопная экосистема",
                    description: "Полная оптимизация системной шины для ПК и ноутбуков, устраняющая тепловые или энергетические ограничения.",
                    icon: "laptop"
                }
            ]
        },
        steps: {
            title: "Скачивание и запуск",
            subtitle: "Совершенство в нескольких кликах. Следуйте быстрой процедуре, чтобы разблокировать потенциал вашего ПК.",
            terminalTitle: "Терминал оптимизации",
            terminalDesc: "Интуитивно понятный и простой в использовании интерфейс",
            securityTitle: "Протокол безопасности",
            security1: "Автоматическая точка восстановления",
            security2: "Безопасные и протестированные твики",
            security3: "Гарантированный полный откат",
            items: [
                {
                    number: 1,
                    title: "Скачайте программу",
                    description: "Загрузите официальный исполняемый файл с помощью выделенной кнопки."
                },
                {
                    number: 2,
                    title: "Запуск",
                    description: "Запустите KT OptimizerOptimizer от имени администратора, чтобы открыть интерфейс выбора."
                },
                {
                    number: 3,
                    title: "Оптимизация",
                    description: "Последовательно выполняйте твики в зависимости от ваших компонентов и предпочтений."
                }
            ]
        },
        changelog: {
            title: "Технический список изменений",
            subtitle: "KT Supreme V2 - Техническая сборка",
            description: "- Новые оптимизации для процессоров AMD<br>- Более продвинутые оптимизации ядра<br>- Добавлены новые оптимизации специально для дискретных видеокарт AMD и процессоров AMD",
            tabChanges: "Изменения (Diff)",
            techUpdate: "Техническое Обновление",
            optArch: "Архитектура Оптимизации",
            keyChanges: "Ключевые Изменения",
            kc1: "Улучшение диспетчера ядра",
            kc2: "Переопределение аппаратного таймера",
            kc3: "Улучшение стека сети",
            diff: [
                { type: 'comment', code: '@@ -1,100 +1,100 @@ KT Supreme V2 Manifest' },
                { type: 'comment', code: ':: AMD CPU' },
                { type: 'added', code: 'reg add "HKLM\\SYSTEM\\CurrentControlSet\\Services\\amdlog\\Parameters" /v "EnableBoost" /t REG_DWORD /d 1 /f', info: 'Включает автоматическое ускорение для процессора AMD, позволяя процессору увеличивать частоту при необходимости большей мощности.' },
                { type: 'added', code: 'reg add "HKLM\\SYSTEM\\CurrentControlSet\\Services\\amdlog\\Parameters" /v "BoostTimeout" /t REG_DWORD /d 0 /f', info: 'Устанавливает лимит времени ускорения на 0, поэтому ускорение может оставаться активным без ограничения по времени.' },
                { type: 'added', code: 'reg add "HKLM\\SYSTEM\\CurrentControlSet\\Services\\amdlog\\Parameters" /v "MaxBoostLevel" /t REG_DWORD /d 3 /f', info: 'Устанавливает максимальный уровень ускорения процессора на высокий (3), способствуя более высокой производительности.' },
                { type: 'added', code: 'reg add "HKLM\\SYSTEM\\CurrentControlSet\\Services\\amdlog\\Parameters" /v "ApmRuntime" /t REG_DWORD /d 1 /f', info: 'Включает APM (Расширенное управление питанием) во время выполнения для управления энергией и производительностью.' },
                { type: 'added', code: 'reg add "HKLM\\SYSTEM\\CurrentControlSet\\Services\\amdlog\\Parameters" /v "C1eEnable" /t REG_DWORD /d 0 /f', info: 'Отключает энергетическое состояние C1E, снижая энергосбережение для большей отзывчивости процессора.' },
                { type: 'added', code: 'reg add "HKLM\\SYSTEM\\CurrentControlSet\\Services\\amdlog\\Parameters" /v "GlobalPerfLevel" /t REG_DWORD /d 3 /f', info: 'Устанавливает глобальный уровень производительности процессора на максимум.' },
                { type: 'added', code: 'reg add "HKLM\\SYSTEM\\CurrentControlSet\\Services\\amdlog\\Parameters" /v "PPCEnable" /t REG_DWORD /d 1 /f', info: 'Включает управление PPC (Управление питанием процессора) для улучшения управления производительностью процессора.' },
                { type: 'added', code: 'reg add "HKLM\\SYSTEM\\CurrentControlSet\\Services\\amdlog\\Parameters" /v "SVI2" /t REG_DWORD /d 1 /f', info: 'Включает протокол SVI2, используемый процессором AMD для управления напряжением и питанием.' },
                { type: 'added', code: 'reg add "HKLM\\SYSTEM\\CurrentControlSet\\Services\\amdlog\\Parameters" /v "Turbo" /t REG_DWORD /d 1 /f', info: 'Активирует режим AMD Turbo Boost, увеличивая частоту процессора под нагрузкой.' },
                { type: 'comment', code: ':: AMD GPU' },
                { type: 'added', code: 'reg add "HKLM\\SYSTEM\\CurrentControlSet\\Services\\amdlog\\Parameters" /v "VideoPowerState" /t REG_DWORD /d 0 /f', info: 'Отключает состояния энергосбережения встроенной видео-GPU, способствуя стабильной производительности.' },
                { type: 'added', code: 'reg add "HKLM\\SYSTEM\\CurrentControlSet\\Services\\amdkmdag\\Parameters" /v "PerfLevel" /t REG_DWORD /d 100 /f', info: 'Устанавливает уровень производительности графического процессора AMD на максимум (100).' },
                { type: 'added', code: 'reg add "HKLM\\SYSTEM\\CurrentControlSet\\Services\\amdkmdag\\Parameters" /v "TurboPstate" /t REG_DWORD /d 1 /f', info: 'Включает турбо-состояния P-State GPU для более высоких частот.' },
                { type: 'added', code: 'reg add "HKLM\\SYSTEM\\CurrentControlSet\\Services\\amdkmdag\\Parameters" /v "DisableDrmCopy" /t REG_DWORD /d 1 /f', info: 'Отключает некоторые внутренние DRM-копии драйвера для уменьшения графической нагрузки.' },
                { type: 'added', code: 'reg add "HKLM\\SYSTEM\\CurrentControlSet\\Services\\amdkmdag\\Parameters" /v "PP_SclkDeepSleepDisable" /t REG_DWORD /d 1 /f', info: 'Отключает глубокий сон тактовой частоты процессора видеокарты, поддерживая более высокие частоты.' },
                { type: 'added', code: 'reg add "HKLM\\SYSTEM\\CurrentControlSet\\Services\\amdkmdag\\Parameters" /v "PP_ThermalAutoThrottling" /t REG_DWORD /d 0 /f', info: 'Отключает автоматический температурный троттлинг, не позволяя видеокарте снижать производительность из-за температуры.' },
                { type: 'added', code: 'reg add "HKLM\\SYSTEM\\CurrentControlSet\\Services\\amdkmdag\\Parameters" /v "KMD_EnableTimings" /t REG_DWORD /d 1 /f', info: 'Включает более агрессивные тайминги в драйвере видеокарты для повышения производительности.' },
                { type: 'added', code: 'reg add "HKLM\\SYSTEM\\CurrentControlSet\\Services\\amdkmdag\\Parameters" /v "PP_DisablePowerGating" /t REG_DWORD /d 1 /f', info: 'Отключает управление питанием (power gating), предотвращая отключение внутренних частей GPU для экономии энергии.' },
                { type: 'added', code: 'reg add "HKLM\\SYSTEM\\CurrentControlSet\\Services\\amdkmdag\\Parameters" /v "PP_DisableULPS" /t REG_DWORD /d 1 /f', info: 'Отключает ULPS (сверхнизкое энергопотребление) видеокарты, избегая замедлений при пробуждении видеокарты.' },
                { type: 'added', code: 'reg add "HKLM\\SYSTEM\\CurrentControlSet\\Services\\amdkmdag\\Parameters" /v "EnableNbgSupport" /t REG_DWORD /d 0', info: 'Отключает поддержку NBG, внутреннюю функцию драйвера, которая может снизить производительность в некоторых случаях.' },
                { type: 'comment', code: ' # End of technical diff' }
            ],
        },
        download: {
            version: "KT Supreme V2"
        },
        faq: {
            title: "Технический FAQ",
            subtitle: "Ответы на самые распространенные вопросы об оптимизации",
            items: [
                {
                    question: "Можно ли отменить изменения?",
                    answer: "Да. Программа спрашивает, хотите ли вы создать точку восстановления системы перед применением любых изменений."
                },
                {
                    question: "Нужно ли отключать антивирус?",
                    answer: "Обычно нет, но если Windows Defender блокирует его, может потребоваться добавить исключение."
                },
                {
                    question: "Улучшает ли это FPS в играх?",
                    answer: "Безусловно! Путем устранения узких мест и оптимизации приоритетов компонентов."
                },
                {
                    question: "Нужна помощь?",
                    answer: "В случае технических проблем или вопросов, свяжитесь с нами через наш сервер Discord."
                }
            ]
        },
        footer: {
            copyright: "© 2026 KT Optimizer. Все права защищены.",
            disclaimer: "Использование этого инструмента осуществляется на страх и риск пользователя. Мы не несем ответственности за любой прямой или косвенный ущерб.",
            privacy: "Политика конфиденциальности",
            legalDisclaimer: "Отказ от ответственности",
            closeBtn: "Закрыть",
            credits: {
                owner: "Владелец и разработчик",
                webdeveloper: "Web Developer"
            },
            creators: "Создатели",
            support: "Поддержка и сообщество",
            telegramBtn: "Acessar GitHub",
            donationsBtn: "Донаты",
            emailSupportBtn: "Поддержка по Email",
            visitorsLabel: "Посетители"
        },
        nav: {
            home: "Главная",
            about: "Что это",
            virustotal: "VirusTotal",
            changelog: "Что нового",
            target: "Для кого",
            howItWorks: "Инструкция",
            faq: "FAQ",
            wallpaper: "Обои KT Optimizer"
        },
        bugReport: {
            btnLabel: "Сообщить об ошибке"
        },
        platinum: {
            title: "Platinum Benchmark",
            back: "Назад",
            pageTitle: "Режим Platinum Benchmark",
            pageSubtitle: "Этот режим предназначен для измерения производительности и стабильности вашего устройства в режиме реального времени",
            testHeadline: "Готовы к тесту?",
            testSubtext: "Запустите движок оптимизации Platinum Benchmark и выжмите из своего ПК максимум.",
            startButton: "ЗАПУСТИТЬ БЕНЧМАРК",
            fpsLabel: "Кадров в секунду",
            loaderText: "Компиляция шейдеров...",
            pageTransitionText: "Экстремальный режим бенчмарка активен."
        },
        wallpaperPage: {
            title: "KT Optimizer <span class=\"text-electric\">Wallpapers</span>",
            subtitle: "Лучшая эстетика 4K для высокопроизводительных систем. Создано, чтобы улучшить ваш визуальный опыт.",
            preview: "Предпросмотр",
            download4k: "СКАЧАТЬ ШЕДЕВР 4K",
            wallpapers: {
                w1: { name: "Platinum v8", desc: "4K Ultra • Глубокая архитектура" },
                w2: { name: "Aqua Flow", desc: "4K Ultra • Ядро Android" },
                w3: { name: "Dark Horizon", desc: "4K Ultra • Скрытый оптимизатор" },
                w4: { name: "Electric Pulse", desc: "4K Ultra • Повышение частоты" },
                w5: { name: "Abstract Core", desc: "4K Ultra • Логика ядра" },
                w6: { name: "Crystal Clear", desc: "4K Ultra • Максимальная прозрачность" }
            }
        },
        android: {
            backToHome: "НАЗАД НА ГЛАВНУЮ",
            mobileEdition: "МОБИЛЬНОЕ ИЗДАНИЕ",
            fullTitle: "KT Optimizer Android",
            titlePart1: "KT Optimizer",
            titlePart2: "ANDROID",
            subtitle: "Раскройте истинную мощь вашего мобильного устройства. Оптимизация на уровне ядра теперь доступна для экосистемы Android.",
            guideTitle: "Руководство по установке",
            step1: "Перейдите в <span class=\"text-aqua-400 font-medium\">Настройки</span>, затем в <span class=\"text-aqua-400 font-medium\">Параметры разработчика</span> и включите <span class=\"text-aqua-400 font-medium\">Отладку по USB</span>.",
            step2: "Войдите в <span class=\"text-aqua-400 font-medium\">Параметры разработчика</span>, включите <span class=\"text-aqua-400 font-medium\">Отладку по USB</span> и подтвердите запрос на телефоне.",
            step3: "Переместите файл <code class=\"bg-white/5 px-2 py-0.5 rounded text-aqua-400 font-mono text-sm\">.BAT</code> из папки Загрузки во внутреннюю память (<span class=\"text-aqua-400 font-medium\">Storage Emulated</span>).",
            step4: "Если устройство обнаружено, запустите файл <span class=\"text-aqua-400 font-medium\">.BAT</span> от имени администратора и следуйте инструкциям.",
            downloadBtn: "Скачать KT Optimizer Android 7.0",
            copyright: "© 2026 KT Optimizer Android.",
            credits: "Разработано @STEFANO83223",
            troubleshooting: "Если Termux сообщает об ошибке или не находит файл, убедитесь, что файл находится во внутренней памяти (Storage Emulated), или попробуйте снова вставить весь код целиком и нажать Enter на клавиатуре.",
            initText: "Инициализация системы Android...",
            tutorialTitle: "KT Optimizer Android Tutorial 🚀",
            popupTitle: "ДОСТУПЕН НОВЫЙ ТУТОРИАЛ",
            popupClose: "Закрыть"
        }
    },
    legal: {
        privacy: [
            "1. Сбор данных: KT Optimizer не собирает, не хранит и не передает никакие личные данные пользователя.",
            "2. Локальное выполнение: Весь код выполняется локально на машине пользователя без связи с внешними серверами.",
            "3. Отсутствие телеметрии: Программное обеспечение не включает модули телеметрии, отслеживания или анализа поведения.",
            "4. Исходный код: Как инструмент оптимизации, операции проверяемы через поведение системы.",
            "5. Интернет-соединение: Программа не требует активного интернет-соединения для работы, что гарантирует изоляцию данных.",
            "6. Системные логи: Любые сгенерированные логи сохраняются исключительно локально и являются временными.",
            "7. Реестр Windows: Изменения реестра не затрагивают ключи, содержащие конфиденциальные данные пользователя.",
            "8. Учетные данные: Данные для входа, пароли или токены никогда не запрашиваются и не доступны.",
            "9. Куки: Веб-сайт и исполняемый файл не используют куки для профилирования.",
            "10. Третьи стороны: Никакие данные не передаются третьим лицам, рекламным партнерам или аффилированным лицам.",
            "11. Соответствие GDPR: Хотя программа работает локально, принцип 'Конфиденциальность при разработке' полностью соблюдается.",
            "12. Пользовательские файлы: Программа не сканирует, не изменяет и не удаляет личные файлы (документы, фото и т. д.).",
            "13. Периферийные устройства: Список периферийных устройств или уникальные идентификаторы оборудования не собираются для целей отслеживания.",
            "14. IP-адрес: Логирование IP-адреса пользователя не производится.",
            "15. Геолокация: В программном обеспечении отсутствуют функции отслеживания местоположения.",
            "16. Обновления: Поиск обновлений осуществляется вручную; нет автоматических фоновых подключений.",
            "17. Реклама: Программное обеспечение не содержит рекламного ПО или рекламных вставок.",
            "18. Несовершеннолетние: Поскольку данные не собираются, нет риска для конфиденциальности несовершеннолетних.",
            "19. Безопасность: Отсутствие сетевых коммуникаций исключает удаленные векторы атак через программное обеспечение.",
            "20. Профилирование: Не создается профилирование оборудования или привычек пользователя."
        ],
        disclaimer: `ОГРАНИЧЕНИЕ ОТВЕТСТВЕННОСТИ (ОТКАЗ ОТ ОТВЕТСТВЕННОСТИ)

1. ПРИНЯТИЕ РИСКОВ
Использование программного обеспечения "KT Optimizer" (далее "Программа") осуществляется исключительно на усмотрение и риск пользователя. Программа предоставляется "КАК ЕСТЬ", без каких-либо явных или подразумеваемых гарантий работы, стабильности или пригодности для конкретной цели.

2. ИЗМЕНЕНИЯ В СИСТЕМЕ
Программа вносит глубокие изменения в операционную систему Microsoft Windows, включая, но не ограничиваясь: Системный реестр, Службы, Планировщик ЦП, Управление памятью и Конфигурации сети. Хотя эти изменения предназначены для повышения производительности, они могут вызвать нестабильность, несовместимость программного обеспечения или непредвиденное поведение в определенных аппаратных конфигурациях.

3. ИСКЛЮЧЕНИЕ УБЫТКОВ
Ни при каких обстоятельствах разработчики (команда из двух независимых лиц), распространители или сотрудники KT Optimizer не несут ответственности за прямые, косвенные, случайные, специальные, примерные или косвенные убытки (включая, но не ограничиваясь: потерей данных, повреждением ОС, отказом оборудования, перерывом в работе или потерей прибыли), возникающие в результате использования или невозможности использования Программы.

4. ТОЧКИ ВОССТАНОВЛЕНИЯ
Исключительная ответственность пользователя — убедиться, что перед запуском Программы создана Точка восстановления системы или полная резервная копия критических данных. Разработчики не гарантируют эффективность встроенной функции восстановления Windows.

5. РАЗГОН И ОБОРУДОВАНИЕ
Оптимизации, снимающие ограничения по питанию, могут увеличить рабочую температуру и потребление энергии компонентов (ЦП/ГП). Пользователь несет ответственность за мониторинг температур и тепловой стабильности своей системы.

6. НАРУШЕНИЕ УСЛОВИЙ ТРЕТЬИХ ЛИЦ
Использование инструментов оптимизации в редких случаях может быть истолковано как нарушение Условий обслуживания некоторых античит-программ или корпоративных приложений. Пользователь принимает на себя полную ответственность за соблюдение соглашений с третьими лицами.

7. ОТСУТСТВИЕ СВЯЗИ
KT Optimizer не связан, не аффилирован, не авторизован, не одобрен и никак официально не связан с Microsoft Corporation или любыми ее дочерними компаниями.

Запуская программу, пользователь заявляет, что прочитал, понял и полностью принял условия данного отказа от ответственности.`
    }
};

// ============ FUNZIONI UTILITY ============
function getAppContent(lang) {
    switch (lang) {
        case 'pt': return PT_CONTENT.app;
        case 'it': return IT_CONTENT.app;
        case 'en': return EN_CONTENT.app;
        case 'ru': return RU_CONTENT.app;
        default: return PT_CONTENT.app;
    }
}

function getLegalContent(lang) {
    switch (lang) {
        case 'pt': return PT_CONTENT.legal;
        case 'it': return IT_CONTENT.legal;
        case 'en': return EN_CONTENT.legal;
        case 'ru': return RU_CONTENT.legal;
        default: return PT_CONTENT.legal;
    }
}

function getNestedValue(obj, path) {
    return path.split('.').reduce((prev, curr) => prev ? prev[curr] : null, obj);
}

// ============ VARIABILI GLOBALI ============
let currentLang = 'pt';
let isScrolled = false;
let mobileMenuOpen = false;


// ============ INIZIALIZZAZIONE ============
document.addEventListener('DOMContentLoaded', () => {
    // Aggressive visibility restoration (Anti-FOUC)
    document.documentElement.style.visibility = 'visible';
    document.documentElement.style.opacity = '1';

    // Recupera lingua salvata o usa default
    const savedLang = localStorage.getItem('preferred_lang');
    if (savedLang) {
        currentLang = savedLang;
        // Aggiorna anche il selettore visivo all'avvio
        const langObj = SUPPORTED_LANGUAGES.find(l => l.code === currentLang);
        if (langObj) {
            const flagEl = document.getElementById('current-lang-flag');
            const codeEl = document.getElementById('current-lang-code');
            if (flagEl) flagEl.textContent = langObj.flag;
            if (codeEl) codeEl.textContent = langObj.code.toUpperCase();
        }
    }

    // Render iniziale
    updateLanguage(currentLang);
    lucide.createIcons();

    // Listener per scroll
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY > 50;
        if (scrolled !== isScrolled) {
            isScrolled = scrolled;
            const nav = document.getElementById('navbar');
            if (scrolled) {
                nav.classList.add('py-4');
                nav.classList.remove('py-6');
            } else {
                nav.classList.remove('py-4');
                nav.classList.add('py-6');
            }
        }
    });

    // Animazione grid
    initGridAnimation('deep-space', true);

    // Inizializza Sistemi
    initClickExplosion();
    initScrollAnimations();
    initLiquidScroll();
    initNavBlob();
    initVisitorCounter();

    // Mostriamo solo il Welcome Popup del rilascio 8.2
    initWelcomePopup();

    // ============ BENCHMARK TABS LOGIC ============
    const benchmarkTabs = document.querySelectorAll('.benchmark-tab');
    const benchmarkPanels = document.querySelectorAll('.benchmark-panel');

    benchmarkTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Rimuovi stato attivo da tutti i tab
            benchmarkTabs.forEach(t => {
                t.classList.remove('active', 'bg-electric-500', 'text-white', 'shadow-glow', 'border-electric-500/50');
                t.classList.add('bg-white/5', 'text-platinum-300', 'border-white/10');
                t.dataset.active = 'false';
            });

            // Aggiungi stato attivo al tab selezionato
            tab.classList.add('active', 'bg-electric-500', 'text-white', 'shadow-glow', 'border-electric-500/50');
            tab.classList.remove('bg-white/5', 'text-platinum-300', 'border-white/10');
            tab.dataset.active = 'true';

            // Nascondi tutti i pannelli e mostra quello corretto
            const targetId = tab.dataset.target;
            benchmarkPanels.forEach(panel => {
                if (panel.id === targetId) {
                    panel.classList.remove('hidden');
                    // Piccola animazione di dissolve personalizzata
                    const tabIdSuffix = targetId.split('-')[1]; // es: 'sys', 'cpu', 'geek', 'lat', 'mc'
                    panel.style.animation = 'none';
                    panel.offsetHeight; /* trigger reflow */
                    panel.style.animation = `dissolve-${tabIdSuffix} 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) forwards`;
                } else {
                    panel.classList.add('hidden');
                }
            });
        });
    });

    // ============ BENCHMARK SLIDERS ============
    window.moveBenchmarkSlider = (sliderId, direction, isSyncCall = false) => {
        const container = document.getElementById(sliderId);
        if (!container) return;

        const slides = Array.from(container.querySelectorAll('.slider-slide'));
        const dots = container.querySelectorAll('.slider-dots span');
        let currentIndex = parseInt(container.dataset.currentIndex || 0);
        let nextIndex = (currentIndex + direction + slides.length) % slides.length;

        if (currentIndex === nextIndex) return;

        // Reset all before applying (safety)
        slides.forEach(s => {
            s.style.animation = 'none';
            s.classList.remove('opacity-100');
            s.classList.add('opacity-0', 'pointer-events-none');
        });

        // Prepare current slide (outgoing)
        const outgoingSlide = slides[currentIndex];
        const incomingSlide = slides[nextIndex];

        // Apply animations
        outgoingSlide.classList.remove('pointer-events-none');
        incomingSlide.classList.remove('opacity-0', 'pointer-events-none');
        incomingSlide.offsetHeight; /* trigger reflow */

        if (direction > 0) {
            outgoingSlide.style.animation = 'fluid-slide-out-left 0.8s cubic-bezier(0.65, 0, 0.35, 1) forwards';
            incomingSlide.style.animation = 'fluid-slide-in-right 0.8s cubic-bezier(0.65, 0, 0.35, 1) forwards';
        } else {
            outgoingSlide.style.animation = 'fluid-slide-out-right 0.8s cubic-bezier(0.65, 0, 0.35, 1) forwards';
            incomingSlide.style.animation = 'fluid-slide-in-left 0.8s cubic-bezier(0.65, 0, 0.35, 1) forwards';
        }

        // Update dots
        if (dots[currentIndex]) dots[currentIndex].style.opacity = '0.3';
        if (dots[nextIndex]) dots[nextIndex].style.opacity = '1';

        container.dataset.currentIndex = nextIndex;

        // Sync "Twin" slider (Before/After pair)
        if (!isSyncCall) {
            const twinId = sliderId.includes('-before') ? sliderId.replace('-before', '-after') :
                sliderId.includes('-after') ? sliderId.replace('-after', '-before') : null;
            if (twinId && document.getElementById(twinId)) {
                window.moveBenchmarkSlider(twinId, direction, true);
            }
        }
    };

    // Auto Advance Benchmark Sliders every 10 seconds
    setInterval(() => {
        document.querySelectorAll('.slider-container').forEach(slider => {
            // Se è un container "after", lo saltiamo perché viene già mosso dal trigger del "before" tramite sync
            if (slider.id && slider.id.includes('-after')) return;
            moveBenchmarkSlider(slider.id, 1);
        });
    }, 10000);
});

// ============ GESTIONE LINGUA ============
window.setLanguage = (lang) => {
    const langObj = SUPPORTED_LANGUAGES.find(l => l.code === lang);
    if (!langObj) return;

    currentLang = lang;
    localStorage.setItem('preferred_lang', lang);
    updateLanguage(lang);

    // Call page-specific updaters if they exist
    if (typeof updateAndroidLanguage === 'function') updateAndroidLanguage(lang);
    if (typeof updateBenchmarkLanguage === 'function') updateBenchmarkLanguage(lang);

    // Aggiorna l'interfaccia visiva (Flag e Codice)
    const flagEl = document.getElementById('current-lang-flag');
    const codeEl = document.getElementById('current-lang-code');

    if (flagEl) flagEl.textContent = langObj.flag;
    if (codeEl) codeEl.textContent = langObj.code.toUpperCase();
};

function updateLanguage(lang) {
    const content = getAppContent(lang);
    const legalContent = getLegalContent(lang);

    // Aggiorna testi semplici
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const value = getNestedValue(content, key);
        if (value) el.innerHTML = value;
    });

    // Changelog
    const changelogContainer = document.getElementById('changelog-items-container');
    if (changelogContainer && content.changelog) {
        const c = content.changelog;
        changelogContainer.innerHTML = `
            <div class="changelog-container">
                <!-- Windows Shell -->
                <div class="terminal-window large shadow-2xl">
                    <div class="terminal-header">
                        <div class="terminal-title">
                            <i data-lucide="terminal" class="w-4 h-4 text-electric-400"></i>
                            <span>PowerShell - platinum_optimizer</span>
                        </div>
                        <div class="terminal-controls">
                            <span>&minus;</span>
                            <span>&square;</span>
                            <span class="hover:text-red-500 hover:opacity-100">&times;</span>
                        </div>
                    </div>
                    <div class="terminal-tabs">
                        <div class="terminal-tab active">
                            <i data-lucide="git-branch" class="w-3 h-3"></i>
                            <span>${c.tabChanges}</span>
                        </div>
                    </div>
                    <div class="terminal-body custom-scrollbar">
                        <div id="terminal-content-diff">
                            ${c.diff.map((line, index) => {
            let cls = '';
            let pref = '';
            const isInteractive = line.info ? 'interactive' : '';

            if (line.type === 'added') { cls = 'diff-added'; pref = '+'; }
            else if (line.type === 'removed') { cls = 'diff-removed'; pref = '-'; }
            else { cls = 'text-platinum-300/50'; pref = ' '; }

            let html = `
                                    <div class="diff-line ${cls} ${isInteractive} rounded px-2" 
                                         ${line.info ? `onclick="toggleDiff(${index})"` : ''}
                                         id="diff-line-${index}">
                                        <span class="diff-prefix select-none opacity-50">${pref}</span>
                                        <span>${line.code}</span>
                                        ${line.info ? `<i data-lucide="chevron-right" class="w-3 h-3 ml-auto opacity-30 transition-transform"></i>` : ''}
                                    </div>
                                `;

            if (line.info) {
                html += `
                                        <div class="diff-dropdown" id="diff-dropdown-${index}">
                                            <div class="flex items-center gap-2 text-electric-400 font-bold mb-1">
                                                <i data-lucide="info" class="w-4 h-4"></i>
                                                <span>Documentation</span>
                                            </div>
                                            ${line.info}
                                        </div>
                                    `;
            }
            return html;
        }).join('')}
                        </div>
                    </div>
                </div>
                
                <!-- Brief Description -->
                <div class="changelog-info space-y-8">
                    <div>
                        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-500/10 border border-electric-500/20 text-electric-400 text-xs font-bold uppercase tracking-widest mb-4">
                            ${c.techUpdate}
                        </div>
                        <h4 class="text-white font-bold text-3xl tracking-tight mb-6">${c.optArch}</h4>
                        <p class="text-platinum-300 font-light leading-relaxed text-lg">
                            ${c.description}
                        </p>
                    </div>

                    <div class="p-6 bg-platinum-900/50 border border-white/5 rounded-2xl">
                        <h5 class="text-white font-bold mb-4 flex items-center gap-2">
                            <i data-lucide="shield-check" class="w-5 h-5 text-electric-500"></i>
                            ${c.keyChanges}
                        </h5>
                        <ul class="space-y-3 text-sm text-platinum-300">
                             <li class="flex items-center gap-3">
                                <span class="w-1.5 h-1.5 rounded-full bg-electric-500"></span>
                                ${c.kc1}
                             </li>
                             <li class="flex items-center gap-3">
                                <span class="w-1.5 h-1.5 rounded-full bg-electric-500"></span>
                                ${c.kc2}
                             </li>
                             <li class="flex items-center gap-3">
                                <span class="w-1.5 h-1.5 rounded-full bg-electric-500"></span>
                                ${c.kc3}
                             </li>
                        </ul>
                    </div>
                </div>
            </div>
        `;
    }

    // Target Audience
    const targetContainer = document.getElementById('target-items-container');
    if (targetContainer && content.target) {
        targetContainer.innerHTML = content.target.items.map(item => `
            <div class="group relative bg-platinum-900/40 p-8 border border-white/5 hover:border-electric-500/50 transition-all duration-500 hover:-translate-y-2 rounded-2xl shadow-2xl backdrop-blur-sm overflow-hidden">
                <div class="absolute -right-8 -top-8 w-32 h-32 bg-electric-500/5 rounded-full group-hover:bg-electric-500/10 transition-colors duration-500"></div>
                <div class="relative z-10">
                    <div class="w-14 h-14 bg-gradient-to-br from-electric-500/20 to-electric-600/5 rounded-xl flex items-center justify-center mb-8 text-electric-400 group-hover:scale-110 transition-transform duration-500 border border-electric-500/20 group-hover:shadow-glow">
                        <i data-lucide="${item.icon}" class="w-7 h-7" stroke-width="1.5"></i>
                    </div>
                    <h3 class="text-2xl font-serif font-bold mb-4 text-white tracking-tight">${item.title}</h3>
                    <p class="text-platinum-300 font-light leading-relaxed text-base">${item.description}</p>
                </div>
                <div class="absolute bottom-0 left-0 h-1 w-0 bg-electric-500 transition-all duration-500 group-hover:w-full"></div>
            </div>
        `).join('');
    }

    // Steps
    const stepsList = document.getElementById('steps-list');
    if (stepsList && content.steps) {
        stepsList.innerHTML = content.steps.items.map((step, idx) => {
            const icons = ['download', 'play', 'terminal'];
            return `
                <div class="step-card group cursor-pointer" ${idx === 0 ? 'onclick="scrollToSection(\'hero-section\')"' : ''}>
                    <div class="step-number">${step.number}</div>
                    <div class="step-icon-wrapper">
                        <i data-lucide="${icons[idx] || 'check'}" class="w-5 h-5"></i>
                    </div>
                    <div class="step-content">
                        <h4 class="text-lg font-bold text-white mb-0.5 group-hover:text-electric-400 transition-colors tracking-tight">${step.title}</h4>
                        <p class="text-platinum-300 font-light leading-tight text-xs md:text-sm">${step.description}</p>
                    </div>
                </div>
            `;
        }).join('');
    }

    // FAQ
    const faqList = document.getElementById('faq-list');
    if (faqList && content.faq) {
        faqList.innerHTML = content.faq.items.map((item, index) => `
            <div class="group border border-white/5 bg-platinum-950/40 backdrop-blur-md rounded-2xl transition-all duration-500 hover:border-electric-500/30 hover:bg-platinum-900/60 overflow-hidden shadow-lg">
                <button onclick="toggleAccordion(event, ${index})" 
                        class="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none group">
                    <span id="faq-q-${index}" 
                          class="text-lg md:text-xl font-medium tracking-tight text-platinum-100 group-hover:text-white transition-colors duration-300">${item.question}</span>
                    <div class="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-electric-500/20 transition-all duration-300">
                        <i id="faq-icon-${index}" data-lucide="chevron-down" 
                           class="w-5 h-5 text-platinum-400 group-hover:text-electric-400 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]"></i>
                    </div>
                </button>
                <div id="faq-ans-${index}" 
                     class="grid grid-rows-[0fr] transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] opacity-0 overflow-hidden">
                    <div class="min-h-0">
                        <div class="px-8 pb-8 pt-2 text-platinum-300/90 leading-relaxed font-light text-base md:text-lg border-t border-white/5 mx-8">
                            ${item.answer}
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Modals Content
    const privacyContent = document.getElementById('modal-content-privacy');
    if (privacyContent && Array.isArray(legalContent.privacy)) {
        privacyContent.innerHTML = `<ul class="space-y-4">${legalContent.privacy.map(p => `
            <li class="flex gap-4"><span class="text-platinum-50 font-medium">${p}</span></li>
        `).join('')}</ul>`;
    }

    const disclaimerContent = document.getElementById('modal-content-disclaimer');
    if (disclaimerContent) disclaimerContent.textContent = legalContent.disclaimer;

    // Re-inizializza icone
    lucide.createIcons();
}

// ============ FUNZIONI INTERAZIONE ============
window.scrollToSection = (id) => {
    if (mobileMenuOpen) toggleMobileMenu();
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};

window.toggleMobileMenu = () => {
    mobileMenuOpen = !mobileMenuOpen;
    const menu = document.getElementById('mobile-menu');
    const icon = document.getElementById('mobile-menu-icon');

    if (mobileMenuOpen) {
        menu.classList.remove('hidden');
        menu.classList.add('flex');
        icon.setAttribute('data-lucide', 'x');
    } else {
        menu.classList.add('hidden');
        menu.classList.remove('flex');
        icon.setAttribute('data-lucide', 'menu');
    }
    lucide.createIcons();
};

// ============ UNIFIED MODAL SYSTEM (Origin OS 6 Style) ============
window.openModal = (type, trigger) => {
    const modal = document.getElementById(`modal-${type}`);
    if (!modal) return;

    const modalContent = modal.querySelector('.liquid-glass-modal');

    // Explicit trigger or event-based
    let triggerBtn = trigger;
    if (!triggerBtn && window.event && window.event.currentTarget) {
        triggerBtn = window.event.currentTarget.tagName === 'BUTTON' ? window.event.currentTarget : window.event.target.closest('button');
    }

    if (triggerBtn) {
        // Store trigger for exit animation return
        modal.dataset.triggerId = triggerBtn.id || `trigger-${Math.random().toString(36).substr(2, 9)}`;
        if (!triggerBtn.id) triggerBtn.id = modal.dataset.triggerId;

        // Calculate physical start position
        const rect = triggerBtn.getBoundingClientRect();
        const startX = rect.left + rect.width / 2 - window.innerWidth / 2;
        const startY = rect.top + rect.height / 2 - window.innerHeight / 2;
        const startScale = rect.width / (window.innerWidth * 0.9);

        modalContent.style.setProperty('--start-x', `${startX}px`);
        modalContent.style.setProperty('--start-y', `${startY}px`);
        modalContent.style.setProperty('--start-scale', `${startScale.toFixed(4)}`);

        // Hide trigger so it appears to morph into the modal
        triggerBtn.style.transition = 'opacity 0.18s ease';
        triggerBtn.style.opacity = '0';
        triggerBtn.style.pointerEvents = 'none';
    } else {
        modalContent.style.setProperty('--start-x', '0px');
        modalContent.style.setProperty('--start-y', '100px');
        modalContent.style.setProperty('--start-scale', '0.8');
    }

    // Trigger entry animation
    modalContent.style.animation = 'none';
    modalContent.offsetHeight;
    modalContent.style.animation = 'liquid-drop-entry 0.6s cubic-bezier(0.23, 1, 0.32, 1) forwards';

    modal.classList.remove('hidden');
    requestAnimationFrame(() => modal.classList.add('modal-active'));
    document.body.style.overflow = 'hidden';

    if (window.bgAnimation) window.bgAnimation.modalActive = true;

    const ripple = document.createElement('div');
    ripple.className = 'liquid-ripple';
    modalContent.appendChild(ripple);
    setTimeout(() => ripple.remove(), 800);
};

window.closeModal = (type) => {
    const modal = document.getElementById(`modal-${type}`);
    if (!modal) return;

    const modalContent = modal.querySelector('.liquid-glass-modal');
    const triggerBtn = document.getElementById(modal.dataset.triggerId);

    // Deactivate backdrop
    modal.classList.remove('modal-active');

    // Specific cleanup tasks
    if (type === 'video-intro' || type === 'video') {
        const iframe = document.getElementById('intro-video-frame') || modal.querySelector('iframe');
        if (iframe) iframe.src = '';
    }

    // Trigger exit animation
    modalContent.style.animation = 'liquid-drop-exit 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards';

    // Lifecycle: Wait for animation to finish before removal
    setTimeout(() => {
        modal.classList.add('hidden');

        // Multi-modal check: reset overflow and 3D focus only if no other modal is visible
        const remainingModals = document.querySelectorAll('.fixed:not(.hidden).modal-active');
        if (remainingModals.length === 0) {
            document.body.style.overflow = '';
            if (window.bgAnimation) window.bgAnimation.modalActive = false;
        }

        // Restore trigger button visibility after exit animation
        if (triggerBtn) {
            triggerBtn.style.transition = 'opacity 0.25s ease';
            triggerBtn.style.opacity = '1';
            triggerBtn.style.pointerEvents = '';
        }
    }, 450);
};

window.toggleAccordion = (event, index) => {
    const ans = document.getElementById(`faq-ans-${index}`);
    const icon = document.getElementById(`faq-icon-${index}`);
    const question = document.getElementById(`faq-q-${index}`);

    const isOpen = ans.classList.contains('grid-rows-[1fr]');

    if (!isOpen) {
        // Chiudi tutti gli altri prima di aprire quello nuovo
        document.querySelectorAll('[id^="faq-ans-"]').forEach((el) => {
            if (el.classList.contains('grid-rows-[1fr]')) {
                const otherIndex = el.id.replace('faq-ans-', '');
                el.classList.replace('grid-rows-[1fr]', 'grid-rows-[0fr]');
                el.classList.replace('opacity-100', 'opacity-0');
                document.getElementById(`faq-icon-${otherIndex}`)?.classList.remove('rotate-180', 'text-electric-400');
                document.getElementById(`faq-q-${otherIndex}`)?.classList.remove('text-electric-400');
            }
        });

        // Apri l'elemento richiesto con effetto rimbalzo
        ans.classList.replace('grid-rows-[0fr]', 'grid-rows-[1fr]');
        ans.classList.replace('opacity-0', 'opacity-100');

        // Effetto Ripple Goccia dinamico (parte dal tocco del mouse)
        const rect = event.currentTarget.getBoundingClientRect();
        const ripple = document.createElement('div');
        ripple.className = 'liquid-ripple';
        ripple.style.left = `${event.clientX - rect.left}px`;
        ripple.style.top = `${event.clientY - rect.top}px`;
        ripple.style.setProperty('--glow-color', 'rgba(0, 242, 255, 0.4)');
        event.currentTarget.closest('.group').appendChild(ripple);
        setTimeout(() => ripple.remove(), 800);

        icon.classList.add('rotate-180', 'text-electric-400');
        question.classList.add('text-electric-400');
    } else {
        // Se ÃƒÂ¨ giÃƒ  aperto, lo chiudiamo semplicemente
        ans.classList.replace('grid-rows-[1fr]', 'grid-rows-[0fr]');
        ans.classList.replace('opacity-100', 'opacity-0');
        icon.classList.remove('rotate-180', 'text-electric-400');
        question.classList.remove('text-electric-400');
    }
};

window.toggleDiff = (index) => {
    const line = document.getElementById(`diff-line-${index}`);
    const dropdown = document.getElementById(`diff-dropdown-${index}`);
    const icon = line.querySelector('.lucide-chevron-right');

    const isOpen = line.classList.contains('active');

    if (isOpen) {
        line.classList.remove('active');
        if (icon) icon.classList.remove('rotate-90');
    } else {
        line.classList.add('active');
        if (icon) icon.classList.add('rotate-90');
    }
};



window.handleDownload = () => {
    const link = document.createElement('a');
    link.href = DOWNLOAD_URL;
    link.setAttribute('download', 'KT OptimizerOptimizer.exe');
    link.setAttribute('target', '_blank');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

// ============ ANIMAZIONI ============
// ============ ANIMAZIONI ============
// ============ ANIMAZIONI ============
// ============ ANIMAZIONI ============
function initGridAnimation(theme = 'platinum', showShapes = true) {
    const container = document.getElementById('global-animation-container');
    if (!container) return;

    class ThreeAnimation {
        constructor(container, theme, showShapes = true) {
            this.container = container;
            this.theme = theme;
            this.showShapes = showShapes;
            this.scene = new THREE.Scene();
            this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 3000);
            this.renderer = new THREE.WebGLRenderer({
                antialias: true,
                alpha: true,
                powerPreference: "high-performance",
                precision: "highp",
                stencil: false,
                depth: true
            });

            this.renderer.setSize(window.innerWidth, window.innerHeight);
            this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            this.container.appendChild(this.renderer.domElement);

            this.camera.position.z = 1000;
            this.shapes = [];
            this.orbs = [];
            this.connections = null; // Container per i fasci di luce
            this.time = 0;
            this.mouse = new THREE.Vector2(-9999, -9999);
            this.raycaster = new THREE.Raycaster();
            this.modalActive = false;
            this.modalFactor = 0; // Per transizioni fluide tra stati
            this.atmosphere = null;
            this.particleData = [];

            this.init();
        }

        init() {
            this.addLights();
            this.createAtmosphere(); // New dynamic atmosphere
            if (this.showShapes) this.createShapes();
            this.createOrbs();
            this.createLineSystem(); // Inizializza il sistema di connessione
            this.setupListeners();
            this.animate();
        }

        addLights() {
            const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
            this.scene.add(ambientLight);

            const lightColor = this.theme === 'red' ? 0xff0000 : 0x00f2ff; // Rosso puro per le luci dello sfondo
            this.mainPointLight = new THREE.PointLight(lightColor, 5, 1500);
            this.scene.add(this.mainPointLight);

            // Luce che segue il mouse (Flashlight Effect)
            this.cursorLight = new THREE.PointLight(lightColor, 12, 1000);
            this.scene.add(this.cursorLight);

            // Sprite visivo per il "punto di luce" sul mouse
            const canvas = document.createElement('canvas');
            canvas.width = 64;
            canvas.height = 64;
            const ctx = canvas.getContext('2d');
            const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);

            if (this.theme === 'red') {
                gradient.addColorStop(0, 'rgba(255, 50, 0, 0.8)'); // Bagliore rosso
                gradient.addColorStop(0.5, 'rgba(150, 0, 0, 0.2)');
                gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
            } else {
                gradient.addColorStop(0, 'rgba(0, 242, 255, 0.8)');
                gradient.addColorStop(0.5, 'rgba(31, 111, 255, 0.2)');
                gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
            }

            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, 64, 64);
            const texture = new THREE.CanvasTexture(canvas);
            const material = new THREE.SpriteMaterial({ map: texture, transparent: true, blending: THREE.AdditiveBlending });
            this.cursorGlow = new THREE.Sprite(material);
            this.cursorGlow.scale.set(100, 100, 1);
            this.scene.add(this.cursorGlow);
        }

        createAtmosphere() {
            const particleCount = 5000;
            const geometry = new THREE.BufferGeometry();
            const positions = new Float32Array(particleCount * 3);
            this.particleData = new Float32Array(particleCount * 3);

            for (let i = 0; i < particleCount; i++) {
                positions[i * 3] = (Math.random() - 0.5) * 3000;
                positions[i * 3 + 1] = (Math.random() - 0.5) * 2000;
                positions[i * 3 + 2] = (Math.random() - 0.5) * 2000;

                this.particleData[i * 3] = (Math.random() - 0.5) * 0.2;
                this.particleData[i * 3 + 1] = (Math.random() - 0.5) * 0.2;
                this.particleData[i * 3 + 2] = (Math.random() - 0.5) * 0.2;
            }

            geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

            const material = new THREE.PointsMaterial({
                size: 2.5,
                color: this.theme === 'red' ? 0xff4400 : 0x00f2ff,
                transparent: true,
                opacity: 0.6,
                blending: THREE.AdditiveBlending,
                sizeAttenuation: true
            });

            if (this.theme === 'deep-space') {
                material.color.setHex(0x0044ff);
                material.size = 2.2;
                material.opacity = 0.6;
            }

            this.atmosphere = new THREE.Points(geometry, material);
            this.scene.add(this.atmosphere);
        }

        destroyShapes() {
            this.shapes.forEach(s => {
                this.scene.remove(s.mesh);
                if (s.mesh.geometry) s.mesh.geometry.dispose();
                if (s.mesh.material) s.mesh.material.dispose();
            });
            this.shapes = [];
        }

        createOrbs() {
            // Texture per le luci circolari soffuse
            const canvas = document.createElement('canvas');
            canvas.width = 128;
            canvas.height = 128;
            const ctx = canvas.getContext('2d');
            const gradient = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);

            if (this.theme === 'red') {
                gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
                gradient.addColorStop(0.2, 'rgba(255, 0, 0, 0.8)'); // Rosso vivido
                gradient.addColorStop(0.5, 'rgba(153, 27, 27, 0.4)'); // Rosso profondo traslucido
                gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
            } else {
                gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
                gradient.addColorStop(0.2, 'rgba(0, 242, 255, 0.6)');
                gradient.addColorStop(0.5, 'rgba(31, 111, 255, 0.2)');
                gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
            }

            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, 128, 128);

            const texture = new THREE.CanvasTexture(canvas);
            const material = new THREE.SpriteMaterial({
                map: texture,
                transparent: true,
                blending: THREE.AdditiveBlending,
                opacity: 0.8
            });

            for (let i = 0; i < 8; i++) {
                const sprite = new THREE.Sprite(material);
                const scale = Math.random() * 400 + 300;
                sprite.scale.set(scale, scale, 1);

                const orb = {
                    sprite: sprite,
                    pos: new THREE.Vector3(
                        (Math.random() - 0.5) * 2000,
                        (Math.random() - 0.5) * 1500,
                        (Math.random() - 0.5) * 500
                    ),
                    vel: new THREE.Vector3(
                        (Math.random() - 0.5) * 1.5,
                        (Math.random() - 0.5) * 1.5,
                        (Math.random() - 0.5) * 0.5
                    ),
                    phase: Math.random() * Math.PI * 2
                };

                sprite.position.copy(orb.pos);
                this.scene.add(sprite);
                this.orbs.push(orb);
            }
        }

        createShapes() {
            const geometries = [
                new THREE.IcosahedronGeometry(80, 0),
                new THREE.OctahedronGeometry(70, 0),
                new THREE.TorusKnotGeometry(60, 15, 64, 12),
                new THREE.TetrahedronGeometry(90, 0),
                new THREE.DodecahedronGeometry(70, 0)
            ];

            for (let i = 0; i < 12; i++) { // Ridotto il numero come richiesto
                const geo = geometries[i % geometries.length].clone();
                const mainColor = this.theme === 'red' ? 0xffa500 : 0x00f2ff;
                const emissiveColor = this.theme === 'red' ? 0xff4500 : 0x1F6FFF;

                const material = new THREE.MeshPhysicalMaterial({
                    color: mainColor,
                    wireframe: true,
                    transparent: true,
                    opacity: this.theme === 'red' ? 0.7 : 0.25,
                    emissive: emissiveColor,
                    emissiveIntensity: this.theme === 'red' ? 1.0 : 0.3,
                    clearcoat: 1.0,
                    clearcoatRoughness: 0,
                    reflectivity: 1.0,
                    side: THREE.DoubleSide
                });

                const mesh = new THREE.Mesh(geo, material);
                const originalPositions = geo.attributes.position.array.slice();

                const shape = {
                    mesh: mesh,
                    originalPositions: originalPositions,
                    rotationSpeed: {
                        x: (Math.random() - 0.5) * 0.005,
                        y: (Math.random() - 0.5) * 0.005,
                        z: (Math.random() - 0.5) * 0.005
                    },
                    velocity: new THREE.Vector3(
                        (Math.random() - 0.5) * 0.4,
                        (Math.random() - 0.5) * 0.4,
                        (Math.random() - 0.5) * 0.25
                    ),
                    floatOffset: Math.random() * Math.PI * 2,
                    alterationFactor: 0,
                    entranceFactor: 0, // Inizia invisibile per comparsa graduale
                    phase: Math.random() * 10
                };

                mesh.position.set(
                    (Math.random() - 0.5) * 2500,
                    (Math.random() - 0.5) * 1800,
                    (Math.random() - 0.5) * 1000
                );

                this.scene.add(mesh);
                this.shapes.push(shape);
            }
        }

        createLineSystem() {
            const geometry = new THREE.BufferGeometry();
            const lineColor = this.theme === 'red' ? 0xff8c00 : 0x00f2ff; // Arancione per le linee
            const material = new THREE.LineBasicMaterial({
                color: lineColor,
                transparent: true,
                opacity: 0.2,
                blending: THREE.AdditiveBlending
            });
            this.connections = new THREE.LineSegments(geometry, material);
            this.scene.add(this.connections);
        }

        setupListeners() {
            window.addEventListener('resize', () => {
                this.camera.aspect = window.innerWidth / window.innerHeight;
                this.camera.updateProjectionMatrix();
                this.renderer.setSize(window.innerWidth, window.innerHeight);
            });

            window.addEventListener('mousemove', (e) => {
                this.mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
                this.mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
            });
        }

        update() {
            // Transizione fluida per lo stato modal
            this.modalFactor += ((this.modalActive ? 1 : 0) - this.modalFactor) * 0.05;

            // Rallenta il tempo globale se il modal è aperto
            let timeStep = 0.005 * (1 - this.modalFactor * 0.8);
            if (this.theme === 'deep-space') timeStep *= 0.5; // Very slow and calm
            this.time += timeStep;

            // Aggiorna colore luce principale (rispetto al tema)
            let baseColorValue = 0x00f2ff;
            if (this.theme === 'red') baseColorValue = 0xff0000;
            if (this.theme === 'deep-space') baseColorValue = 0x0044ff;
            const baseColor = new THREE.Color(baseColorValue);

            const modalColor = this.theme === 'red' ? new THREE.Color(0x990000) : new THREE.Color(0x0044ff);
            this.mainPointLight.color.copy(baseColor).lerp(modalColor, this.modalFactor);
            this.mainPointLight.intensity = 5 * (1 - this.modalFactor * 0.3);

            // Posizionamento luce mouse (Flashlight effect)
            this.raycaster.setFromCamera(this.mouse, this.camera);
            const lightPlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), -200);
            const lightTarget = new THREE.Vector3();
            this.raycaster.ray.intersectPlane(lightPlane, lightTarget);

            // Segue il mouse con una leggera inerzia
            this.cursorLight.position.lerp(lightTarget, 0.1);
            this.cursorGlow.position.copy(this.cursorLight.position);

            // Pulsazione della sorgente - Effetto "Respiro" lento e potente
            const pulseIntensity = 18 + Math.sin(this.time * 1.2) * 8; // PiÃƒÂ¹ intensa e lenta
            this.cursorLight.intensity = pulseIntensity * (1 - this.modalFactor * 0.5);

            const pulseOpacity = 0.7 + Math.sin(this.time * 1.2) * 0.3;
            this.cursorGlow.material.opacity = pulseOpacity * (1 - this.modalFactor * 0.3);

            const pulseScale = 140 + Math.sin(this.time * 1.2) * 40;
            this.cursorGlow.scale.setScalar(pulseScale);

            // Aggiorna Atmosfera (Particles)
            if (this.atmosphere) {
                const positions = this.atmosphere.geometry.attributes.position.array;
                for (let i = 0; i < positions.length / 3; i++) {
                    positions[i * 3] += this.particleData[i * 3] * (1 + Math.sin(this.time * 0.5 + i) * 0.5);
                    positions[i * 3 + 1] += this.particleData[i * 3 + 1] * (1 + Math.cos(this.time * 0.5 + i) * 0.5);

                    // Wrap positions
                    if (Math.abs(positions[i * 3]) > 1500) positions[i * 3] *= -0.99;
                    if (Math.abs(positions[i * 3 + 1]) > 1000) positions[i * 3 + 1] *= -0.99;
                }
                this.atmosphere.geometry.attributes.position.needsUpdate = true;
                this.atmosphere.rotation.y += 0.0005;
                this.atmosphere.rotation.z += 0.0002;
            }

            // Aggiorna Orbi (Luci Dinamiche)
            this.orbs.forEach(o => {
                // Rallenta il movimento degli orbi
                const velocityScale = 1 - this.modalFactor * 0.85;
                o.pos.x += o.vel.x * velocityScale;
                o.pos.y += o.vel.y * velocityScale;
                o.pos.z += o.vel.z * velocityScale;

                // Bounce/Wrap
                if (Math.abs(o.pos.x) > 1200) o.vel.x *= -1;
                if (Math.abs(o.pos.y) > 900) o.vel.y *= -1;
                if (Math.abs(o.pos.z) > 600) o.vel.z *= -1;

                o.sprite.position.copy(o.pos);
                o.sprite.position.y += Math.sin(this.time + o.phase) * 1.5;
                o.sprite.material.opacity = (0.5 + Math.sin(this.time * 2 + o.phase) * 0.2) * (1 - this.modalFactor * 0.4);
            });

            const linePositions = [];
            const lineColors = [];

            // Calcolo del raggio del mouse
            this.raycaster.setFromCamera(this.mouse, this.camera);

            this.shapes.forEach((s, i) => {
                // Interazione basata sulla profonditÃƒ : troviamo dove il raggio del mouse incrocia il piano della forma
                const planeZ = new THREE.Plane(new THREE.Vector3(0, 0, 1), -s.mesh.position.z);
                const mouseAtDepth = new THREE.Vector3();
                this.raycaster.ray.intersectPlane(planeZ, mouseAtDepth);

                const distToMouse = s.mesh.position.distanceTo(mouseAtDepth);
                const isNearMouse = distToMouse < 600;
                const proximity = Math.max(0, 1 - distToMouse / 600);

                // Nuova logica di velocitÃƒ : rallenta avvicinandosi, ma mantiene un "moto lento" se vicinissimo
                let speedMultiplier = 1;
                if (isNearMouse) {
                    // Rallenta fino al 10% alla distanza media, poi risale al 25% se vicinissimo per moto fluido
                    const baseSlowdown = 1 - proximity * 0.9;
                    const reactiveMove = proximity > 0.7 ? (proximity - 0.7) * 0.5 : 0;
                    speedMultiplier = baseSlowdown + reactiveMove;
                }

                // Movimento continuo fluido
                s.mesh.position.x += s.velocity.x * speedMultiplier;
                s.mesh.position.y += s.velocity.y * speedMultiplier;
                s.mesh.position.z += s.velocity.z * speedMultiplier;

                // Wrapping logico dello spazio 3D
                if (s.mesh.position.x > 1500) { s.mesh.position.x = -1500; s.entranceFactor = 0; }
                else if (s.mesh.position.x < -1500) { s.mesh.position.x = 1500; s.entranceFactor = 0; }
                if (s.mesh.position.y > 1000) { s.mesh.position.y = -1000; s.entranceFactor = 0; }
                else if (s.mesh.position.y < -1000) { s.mesh.position.y = 1000; s.entranceFactor = 0; }
                if (s.mesh.position.z > 500) { s.mesh.position.z = -1000; s.entranceFactor = 0; }
                else if (s.mesh.position.z < -1000) { s.mesh.position.z = 500; s.entranceFactor = 0; }

                if (s.entranceFactor < 1) s.entranceFactor += 0.005;

                // Fade-out graduale ai bordi
                const margin = 350;
                const distEdgeX = 1500 - Math.abs(s.mesh.position.x);
                const distEdgeY = 1000 - Math.abs(s.mesh.position.y);
                const distEdgeZ = s.mesh.position.z > -250 ? 500 - s.mesh.position.z : s.mesh.position.z - (-1000);
                const exitFactor = Math.min(1, Math.max(0, distEdgeX / margin), Math.max(0, distEdgeY / margin), Math.max(0, distEdgeZ / margin));

                // Effetto Rotazione: Ruota lentamente di base, accelera gradualmente col mouse vicino (User request)
                const rotationBoost = isNearMouse ? (1 + proximity * 2.5) : 1; // Accelera fino a 3.5x la velocitÃƒ  base
                s.mesh.rotation.x += s.rotationSpeed.x * rotationBoost;
                s.mesh.rotation.y += s.rotationSpeed.y * rotationBoost;

                // Calcolo attrazione magnetica e scomposizione (Animazione fluida)
                const targetAlteration = isNearMouse ? Math.pow(proximity, 1.5) * 3 : 0;
                s.alterationFactor += (targetAlteration - s.alterationFactor) * 0.04;

                const autoCycle = Math.max(0, Math.sin(this.time * 0.4 + s.phase));
                const totalFactor = Math.min(2.0, s.alterationFactor + autoCycle * 0.3);

                const positions = s.mesh.geometry.attributes.position.array;
                const meshMatrixInv = s.mesh.matrixWorld.clone().invert();
                const localMouse = mouseAtDepth.clone().applyMatrix4(meshMatrixInv);

                for (let j = 0; j < positions.length; j += 3) {
                    const ox = s.originalPositions[j];
                    const oy = s.originalPositions[j + 1];
                    const oz = s.originalPositions[j + 2];

                    const norm = Math.sqrt(ox * ox + oy * oy + oz * oz);

                    // Scomposizione classica (ridotto moltiplicatore da 140 a 70)
                    let vx = (ox / norm) * 70 * totalFactor;
                    let vy = (oy / norm) * 70 * totalFactor;
                    let vz = (oz / norm) * 70 * totalFactor;

                    // "Mouse Gravity Pull" - Altera i vertici verso la posizione del mouse
                    if (s.alterationFactor > 0.1) {
                        const pullX = (localMouse.x - ox) * 0.15 * s.alterationFactor;
                        const pullY = (localMouse.y - oy) * 0.15 * s.alterationFactor;
                        const pullZ = (localMouse.z - oz) * 0.15 * s.alterationFactor;
                        vx += pullX; vy += pullY; vz += pullZ;
                    }

                    positions[j] = ox + vx;
                    positions[j + 1] = oy + vy;
                    positions[j + 2] = oz + vz;
                }
                s.mesh.geometry.attributes.position.needsUpdate = true;

                // Connessione Vertici -> Mouse (Animazione Animata Fluida)
                if (isNearMouse && this.mouse.x !== -9999) {
                    const vertices = [];
                    for (let k = 0; k < positions.length; k += 6) {
                        vertices.push(new THREE.Vector3(positions[k], positions[k + 1], positions[k + 2]).applyMatrix4(s.mesh.matrixWorld));
                    }
                    // Troviamo il punto di interazione 3D reale al Z della mesh
                    vertices.sort((a, b) => a.distanceToSquared(mouseAtDepth) - b.distanceToSquared(mouseAtDepth));

                    const connectionCount = Math.min(4, vertices.length);
                    for (let n = 0; n < connectionCount; n++) {
                        const v = vertices[n];
                        linePositions.push(mouseAtDepth.x, mouseAtDepth.y, mouseAtDepth.z, v.x, v.y, v.z);
                    }
                    // Muoviamo la luce principale verso il punto di interazione (User request: interazione globale)
                    this.mainPointLight.position.lerp(mouseAtDepth, 0.1);
                }

                // Connessione Shape -> Shape (Interazione globale migliorata)
                let shapeConnections = 0;
                for (let k = i + 1; k < this.shapes.length; k++) {
                    const other = this.shapes[k];
                    const d = s.mesh.position.distanceTo(other.mesh.position);
                    if (d < 500 && shapeConnections < 4) {
                        linePositions.push(s.mesh.position.x, s.mesh.position.y, s.mesh.position.z);
                        linePositions.push(other.mesh.position.x, other.mesh.position.y, other.mesh.position.z);
                        shapeConnections++;
                    }
                }

                const baseOpacity = 0.12 + (1 - Math.min(1, totalFactor)) * 0.25;
                const visibility = s.entranceFactor * exitFactor;
                s.mesh.material.opacity = baseOpacity * visibility;
                // Scala piÃƒÂ¹ contenuta: non supera mai 1.1x per interazione
                s.mesh.scale.setScalar((0.5 + 0.5 * visibility) * (1 + s.alterationFactor * 0.04));
            });

            // Aggiorna la geometria delle linee di connessione
            this.connections.geometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
            this.connections.geometry.attributes.position.needsUpdate = true;
            this.connections.material.opacity = Math.min(0.2, linePositions.length / 40);
        }

        animate() {
            requestAnimationFrame(() => this.animate());
            this.update();
            this.renderer.render(this.scene, this.camera);
        }
    }

    window.bgAnimation = new ThreeAnimation(container, theme, showShapes);
}


// ============ CLICK EFFECT (Cyber Ripple) ============
function initClickExplosion() {
    window.addEventListener('mousedown', (e) => {
        // Rimuove l'effetto per il tasto Platinum Bench Mode
        if (e.target.closest('#platinum-bench-btn') || e.target.closest('#platinum-bench-btn-mobile')) return;

        const container = document.createElement('div');
        container.className = 'click-ripple-container';
        container.style.left = `${e.clientX}px`;
        container.style.top = `${e.clientY}px`;
        document.body.appendChild(container);

        // Scintille Tech (Sparks)
        const sparkCount = 8;
        for (let i = 0; i < sparkCount; i++) {
            const spark = document.createElement('div');
            spark.className = 'ripple-spark';

            const angle = (i / sparkCount) * 360 + (Math.random() * 20 - 10);
            const dist = 40 + Math.random() * 30;
            const duration = 0.6 + Math.random() * 0.4;
            const delay = Math.random() * 0.05;

            spark.style.setProperty('--angle', `${angle}deg`);
            spark.style.setProperty('--dist', `${dist}px`);
            spark.style.animation = `spark-flight ${duration}s cubic-bezier(0.15, 0.8, 0.25, 1) ${delay}s forwards`;

            container.appendChild(spark);
        }

        // Pulizia
        setTimeout(() => {
            container.remove();
        }, 1500);
    });
}

// ============ SCROLL ANIMATIONS (New) ============
function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            } else {
                entry.target.classList.remove('is-visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal-on-scroll, .scale-up-on-scroll').forEach(el => {
        observer.observe(el);
    });
}

// ============ LIQUID GLASS MORPHING (iOS 26 Ultra-Fluid) ============
function initLiquidScroll() {
    // Selezioniamo tutto: menu, icone, tasti e container
    const targets = document.querySelectorAll('.glass, .liquid-glass, section, .modern-frame, i, button, img, nav, [class*="rounded-"]');

    // Forziamo l'accellerazione hardware iniziale
    targets.forEach(el => {
        el.style.willChange = 'transform, border-radius';
        el.style.backfaceVisibility = 'hidden';
    });

    let currentScroll = window.pageYOffset;
    let scrollVelocity = 0;

    // Variabili per l'interpolazione (Damping)
    let lerpVelocity = 0;

    function update() {
        const newScroll = window.pageYOffset;
        scrollVelocity = (newScroll - currentScroll);
        currentScroll = newScroll;

        // Interpolazione per fluiditÃƒ  estrema (elasticitÃƒ )
        lerpVelocity += (scrollVelocity - lerpVelocity) * 0.18;
        const absVel = Math.abs(lerpVelocity);

        // Calcolo parametri "Goccia d'Acqua" (IntensitÃƒ  ridotta significativamente)
        // Stretch verticale, Compressione orizzontale
        const stretchY = 1 + Math.min(0.08, absVel * 0.0004);
        const compressX = 1 / stretchY;

        // Warping dei bordi (piÃƒÂ¹ contenuto)
        const radiusWarp = Math.min(10, absVel * 0.06);

        // Distorsione prospettica (piÃƒÂ¹ leggera)
        const skew = Math.max(-2, Math.min(2, lerpVelocity * 0.012));

        targets.forEach(el => {
            const rect = el.getBoundingClientRect();
            // Ottimizzazione: solo se visibile
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                // Effetto Liquid Glass: Trasformazione + Border Radius dinamico
                el.style.transform = `
                    skewY(${skew.toFixed(2)}deg) 
                    scaleX(${compressX.toFixed(3)}) 
                    scaleY(${stretchY.toFixed(3)})
                    translateY(${(lerpVelocity * -0.08).toFixed(2)}px)
                `;

                // Se l'elemento non ÃƒÂ¨ un'icona tonda, applichiamo il warping ai bordi
                if (!el.classList.contains('rounded-full')) {
                    el.style.borderRadius = `${30 + radiusWarp}px ${30 + radiusWarp}px ${30 - radiusWarp}px ${30 - radiusWarp}px / ${30 - radiusWarp}px ${30 - radiusWarp}px ${30 + radiusWarp}px ${30 + radiusWarp}px`;
                }

                // Effetto Rifrazione Alpha: le icone e i menu diventano piÃƒÂ¹ "liquidi" in modo discreto
                if (el.tagName === 'I' || el.tagName === 'BUTTON') {
                    el.style.filter = `blur(${Math.min(1, absVel * 0.01)}px) brightness(${1 + absVel * 0.0005})`;
                }
            }
        });

        requestAnimationFrame(update);
    }

    update();
}

// ============ VISITOR COUNTER ============
async function initVisitorCounter() {
    const counterEl = document.getElementById('visit-count');
    const containerEl = document.getElementById('visitor-counter');
    if (!counterEl) return;

    const namespace = "platinum-plus-optimizer-v7";
    const key = "visits";
    let lastCount = 0;

    async function fetchCount(isFirstLoad = false) {
        // Verifica se l'utente ha giÃƒ  visitato il sito in questa sessione
        const hasVisited = sessionStorage.getItem('has_visited_platinum');
        const mode = (isFirstLoad && !hasVisited) ? 'up' : 'get';
        const url = `https://api.counterapi.dev/v1/${namespace}/${key}/${mode}`;

        try {
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                const count = data.count || 0;

                if (isFirstLoad) {
                    animateCount(counterEl, 0, count, 2000);
                    if (!hasVisited) sessionStorage.setItem('has_visited_platinum', 'true');
                } else if (count > lastCount) {
                    // Flash effect per aggiornamento reale
                    containerEl.classList.add('ring-2', 'ring-electric-400/50');
                    animateCount(counterEl, lastCount, count, 1000);
                    setTimeout(() => containerEl.classList.remove('ring-2', 'ring-electric-400/50'), 1500);
                }
                lastCount = count;
            }
        } catch (error) {
            console.error("Counter API Error:", error);
        }
    }

    // Primo caricamento
    await fetchCount(true);

    // Aggiornamento reale ogni 10 secondi
    setInterval(() => fetchCount(false), 10000);
}

function animateCount(el, start, end, duration) {
    let startTime = null;
    function step(timestamp) {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const current = Math.floor(progress * (end - start) + start);
        el.innerText = current.toString().padStart(7, '0');
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    }
    window.requestAnimationFrame(step);
}

// Note: Inizializzazione consolidata all'inizio del file

// ============ WELCOME POPUP ============
function initWelcomePopup() {
    // Show once per session
    const hasSeen = sessionStorage.getItem('has_seen_welcome_v8.3');
    if (hasSeen) return;

    // Fluid entry with matching timing
    setTimeout(() => {
        window.openModal('welcome');
        sessionStorage.setItem('has_seen_welcome_v8.3', 'true');
    }, 600);
}

// ============ VIDEO INTRO ============
// ============ VIDEO INTRO & PROMOS ============
function initVideoIntro() {
    const hasSeen = sessionStorage.getItem('has_seen_intro');
    if (hasSeen) return;
    sessionStorage.setItem('has_seen_intro', 'true');

    setTimeout(() => {
        const iframe = document.getElementById('intro-video-frame');
        if (iframe) {
            iframe.src = "https://www.youtube.com/embed/-k4MUq3Ehv8?autoplay=1&mute=1&controls=1&playsinline=1&modestbranding=1&rel=0";
        }
        window.openModal('video-intro');
    }, 400);
}

function initDiscordPromo() {
    const hasSeen = sessionStorage.getItem('has_seen_discord_promo');
    if (hasSeen) {
        initVideoIntro();
        return;
    }
    sessionStorage.setItem('has_seen_discord_promo', 'true');

    setTimeout(() => {
        window.openModal('discord-promo');
    }, 500);
}
// ============ NAVBAR LIQUID BLOB ============
function initNavBlob() {
    const container = document.getElementById('nav-menu-container');
    const blob = document.getElementById('nav-blob');
    if (!container || !blob) return;

    const menuItems = container.querySelectorAll('button, .platinum-switch-container, .android-btn-nav, a#nav-wallpaper-btn');
    let lastX = 0;

    menuItems.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            const rect = btn.getBoundingClientRect();
            const containerRect = container.getBoundingClientRect();
            const left = rect.left - containerRect.left;
            const top = rect.top - containerRect.top;
            blob.style.left = `${left}px`;
            blob.style.top = `${top}px`;
            blob.style.width = `${rect.width}px`;
            blob.style.height = `${rect.height}px`;
            blob.style.opacity = '1';
            blob.style.transform = 'scale(1)';

            const currentX = left;
            const delta = currentX - lastX;
            if (Math.abs(delta) > 5) {
                if (delta > 0) { blob.style.borderRadius = '60% 40% 60% 40% / 40% 60% 40% 60%'; }
                else { blob.style.borderRadius = '40% 60% 40% 60% / 60% 40% 60% 40%'; }
                blob.style.transform = `scaleX(${1 + Math.abs(delta) * 0.002}) scaleY(${1 - Math.abs(delta) * 0.001})`;
                setTimeout(() => {
                    blob.style.borderRadius = '999px';
                    blob.style.transform = 'scale(1)';
                }, 300);
            }
            lastX = currentX;
        });
    });

    container.addEventListener('mouseleave', () => {
        blob.style.opacity = '0';
        blob.style.transform = 'scale(0.8)';
        setTimeout(() => { blob.style.borderRadius = '999px'; }, 300);
    });
}

// ============ PLATINUM BENCHMARK TRANSITION ============
document.addEventListener('DOMContentLoaded', () => {
    const desktopTrigger = document.getElementById('platinum-mode-trigger');
    const mobileTrigger = document.getElementById('platinum-mode-trigger-mobile');
    const pageTransition = document.getElementById('page-transition');

    const startTransition = () => {
        // Delay per far vedere l'effetto fiamme sul tasto
        setTimeout(() => {
            if (pageTransition) {
                pageTransition.classList.remove('android-mode'); // Reset background to default (Red/Black)

                const logoImg = pageTransition.querySelector('.transition-logo');
                if (logoImg) {
                    logoImg.src = "./image/platinum-mode.jpg";
                }

                pageTransition.classList.add('active');
                // Minimo 5 secondi di caricamento per l'effetto ventola+fuoco
                setTimeout(() => {
                    window.location.href = 'pc-1.html';
                }, 5000);
            }
        }, 600);
    };

    if (desktopTrigger) {
        desktopTrigger.addEventListener('change', (e) => {
            if (e.target.checked) startTransition();
        });
    }
    if (mobileTrigger) {
        mobileTrigger.addEventListener('change', (e) => {
            if (e.target.checked) startTransition();
        });
    }

    const androidButtons = document.querySelectorAll('.android-btn-nav');
    androidButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const targetHref = btn.getAttribute('href');

            if (pageTransition) {
                // Rimuoviamo eventuali classi residue
                pageTransition.classList.remove('active');

                // Aggiungiamo la modalità Android (Sfondo Aqua)
                pageTransition.classList.add('android-mode');

                const logoImg = pageTransition.querySelector('.transition-logo');
                if (logoImg) {
                    // Nota: In animazioniscript.js il path era "./image/KT Optimizer Android Logo.png"
                    // ma usiamo android.png per evitare broken images poiché l'altro non esiste.
                    logoImg.src = "./image/android.png";
                }

                const statusText = pageTransition.querySelector('.status-text');
                if (statusText) {
                    statusText.textContent = "Inizializzazione Sistema Android...";
                }

                // Avviamo la transizione
                pageTransition.classList.add('active');

                setTimeout(() => {
                    window.location.href = targetHref;
                }, 4000); // 4 secondi per apprezzare meglio l'effetto aqua
            }
        });
    });
});

// ============ WATER DROP RIPPLE EFFECT ============
document.addEventListener('click', (e) => {
    const trigger = e.target.closest('.ripple-trigger');
    if (trigger) {
        const rippleContainer = document.createElement('div');
        rippleContainer.className = 'click-ripple-container';
        document.body.appendChild(rippleContainer);

        const ripple = document.createElement('div');
        ripple.className = 'ripple-ring';
        ripple.style.left = e.clientX + 'px';
        ripple.style.top = e.clientY + 'px';

        // Personalizzazione colore per Platinum Bench (Rosso)
        if (trigger.id === 'platinum-bench-btn') {
            ripple.style.borderColor = '#dc2626';
            ripple.style.boxShadow = '0 0 30px #991b1b, inset 0 0 15px #dc2626';
        }

        rippleContainer.appendChild(ripple);

        setTimeout(() => {
            rippleContainer.remove();
        }, 1200);
    }
});


window.openSocialModal = function (name, roleKey, telegram, youtube, tiktok) {
    const modal = document.getElementById('modal-socials');
    if (!modal) {
        // Inject modal if missing
        const modalHtml = `
        <div id="modal-socials" class="fixed inset-0 z-[160] flex items-center justify-center p-4 hidden">
            <div class="absolute inset-0 bg-black/90 backdrop-blur-2xl" onclick="closeModal('socials')"></div>
            <div class="relative liquid-glass-modal w-full max-w-sm flex flex-col items-center justify-center rounded-[3rem] shadow-[0_0_100px_rgba(31,111,255,0.15)] border border-white/10 bg-[#0B1C2D] p-10 gap-8 transform transition-all scale-95 opacity-0" id="social-modal-content">
                 
                 <button onclick="closeModal('socials')" class="absolute top-6 right-6 p-2 text-platinum-400 hover:text-white hover:bg-white/10 rounded-full transition-all group">
                    <i data-lucide="x" class="w-5 h-5 group-hover:rotate-90 transition-transform"></i>
                 </button>

                 <div class="relative group">
                    <div class="absolute -inset-4 bg-electric-500/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div class="w-24 h-24 rounded-[2rem] bg-platinum-900 border border-white/10 flex items-center justify-center shadow-glow relative z-10 overflow-hidden">
                        <div class="absolute inset-0 bg-gradient-to-tr from-electric-600/20 to-transparent"></div>
                        <i data-lucide="user" class="w-10 h-10 text-electric-400" id="social-modal-icon"></i>
                        <img id="social-modal-photo" class="absolute inset-0 w-full h-full object-cover hidden" src="" alt="">
                    </div>
                 </div>

                 <div class="text-center space-y-1">
                      <h3 class="text-3xl font-serif font-bold text-white tracking-tight" id="social-modal-name">Name</h3>
                      <p class="text-[10px] text-platinum-400 uppercase tracking-[0.4em] font-bold" id="social-modal-role">Role</p>
                 </div>

                 <div class="w-full space-y-4">
                    <div class="flex items-center gap-3 mb-2">
                        <div class="h-px bg-white/5 flex-1"></div>
                        <span class="text-[9px] text-platinum-500 uppercase tracking-[0.3em] font-black">Social Links</span>
                        <div class="h-px bg-white/5 flex-1"></div>
                    </div>
                    <div class="grid grid-cols-1 gap-3" id="social-links-container">
                        <!-- Dynamic Links -->
                    </div>
                 </div>
            </div>
        </div>`;
        document.body.insertAdjacentHTML('beforeend', modalHtml);
    }

    const nameEl = document.getElementById('social-modal-name');
    const roleEl = document.getElementById('social-modal-role');
    const container = document.getElementById('social-links-container');
    const modalContent = document.getElementById('social-modal-content');

    if (nameEl) nameEl.textContent = name;

    // Photo/Icon update based on name
    const iconEl = document.getElementById('social-modal-icon');
    const photoEl = document.getElementById('social-modal-photo');

    if (iconEl && photoEl) {
        if (name.toLowerCase().includes('stefano')) {
            iconEl.classList.add('hidden');
            photoEl.classList.remove('hidden');
            photoEl.src = './stefano.jpg';
        } else if (name.toLowerCase().includes('ale')) {
            iconEl.classList.add('hidden');
            photoEl.classList.remove('hidden');
            photoEl.src = './aledect.jpeg';
        } else {
            iconEl.classList.remove('hidden');
            photoEl.classList.add('hidden');
            iconEl.setAttribute('data-lucide', 'user');
        }
    }

    if (roleEl) {
        if (roleKey.includes('.')) {
            roleEl.setAttribute('data-i18n', roleKey);
            const content = getAppContent(currentLang);
            const tr = getNestedValue(content, roleKey);
            if (tr) roleEl.textContent = tr;
        } else {
            roleEl.removeAttribute('data-i18n');
            roleEl.textContent = roleKey;
        }
    }

    if (container) {
        container.innerHTML = '';

        // YouTube
        if (youtube && youtube !== '#' && youtube !== '') {
            container.innerHTML += `
            <a href="${youtube}" target="_blank" class="flex items-center justify-between w-full p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-[#FF0000]/10 hover:border-[#FF0000]/30 transition-all group/link">
                <div class="flex items-center gap-4">
                    <div class="w-10 h-10 rounded-xl bg-[#FF0000]/10 flex items-center justify-center border border-[#FF0000]/20 group-hover/link:scale-110 transition-transform">
                        <i data-lucide="youtube" class="w-5 h-5 text-[#FF0000]"></i>
                    </div>
                    <span class="font-bold text-white tracking-widest uppercase text-[10px]">YouTube</span>
                </div>
                <i data-lucide="external-link" class="w-4 h-4 text-platinum-500 opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-1 transition-all"></i>
            </a>`;
        }

        // TikTok
        if (tiktok && tiktok !== '#' && tiktok !== '') {
            container.innerHTML += `
            <a href="${tiktok}" target="_blank" class="flex items-center justify-between w-full p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all group/link">
                <div class="flex items-center gap-4">
                    <div class="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover/link:scale-110 transition-transform">
                        <svg viewBox="0 0 24 24" class="w-4 h-4 fill-white" xmlns="http://www.w3.org/2000/svg"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.03 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.98-.23-2.81.33-.85.51-1.44 1.43-1.58 2.41-.14.99.12 2.07.72 2.87.52.71 1.34 1.18 2.22 1.28.85.1 1.73-.1 2.44-.58.62-.39.99-1.03 1.13-1.74.05-1.13-.01-2.27.01-3.41-.01-4.9-.01-9.79.01-14.69Z"/></svg>
                    </div>
                    <span class="font-bold text-white tracking-widest uppercase text-[10px]">TikTok</span>
                </div>
                <i data-lucide="external-link" class="w-4 h-4 text-platinum-500 opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-1 transition-all"></i>
            </a>`;
        }

        // Telegram
        if (telegram && telegram !== '#' && telegram !== '') {
            container.innerHTML += `
            <a href="${telegram}" target="_blank" class="flex items-center justify-between w-full p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-[#229ED9]/10 hover:border-[#229ED9]/30 transition-all group/link">
                <div class="flex items-center gap-4">
                    <div class="w-10 h-10 rounded-xl bg-[#229ED9]/10 flex items-center justify-center border border-[#229ED9]/20 group-hover/link:scale-110 transition-transform">
                        <i data-lucide="send" class="w-5 h-5 text-[#229ED9]"></i>
                    </div>
                    <span class="font-bold text-white tracking-widest uppercase text-[10px]">Telegram</span>
                </div>
                <i data-lucide="external-link" class="w-4 h-4 text-platinum-500 opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-1 transition-all"></i>
            </a>`;
        }
    }

    if (window.lucide) lucide.createIcons();

    // Re-use unified modal system
    window.openModal('socials');
};

// ============ IMAGE LIGHTBOX SYSTEM (Origin OS Style) ============
window.openLightbox = function (src, trigger) {
    const modal = document.getElementById('modal-lightbox');
    const img = document.getElementById('lightbox-img');
    if (!modal || !img) return;

    // Prevent body scroll
    document.body.style.overflow = 'hidden';
    if (window.bgAnimation) window.bgAnimation.modalActive = true;

    img.src = src;

    // Handle triggers for morphing effect
    const triggerEl = trigger || (window.event && window.event.currentTarget);
    if (triggerEl) {
        modal.dataset.triggerId = triggerEl.id || `trigger-img-${Math.random().toString(36).substr(2, 9)}`;
        if (!triggerEl.id) triggerEl.id = modal.dataset.triggerId;

        const rect = triggerEl.getBoundingClientRect();
        const startX = rect.left + rect.width / 2 - window.innerWidth / 2;
        const startY = rect.top + rect.height / 2 - window.innerHeight / 2;
        const startScale = rect.width / (window.innerWidth * 0.9);

        // Apply morphing variables
        img.style.setProperty('--start-x', `${startX}px`);
        img.style.setProperty('--start-y', `${startY}px`);
        img.style.setProperty('--start-scale', `${startScale.toFixed(4)}`);

        // Hide trigger so it appears to morph into the lightbox
        triggerEl.style.transition = 'opacity 0.18s ease';
        triggerEl.style.opacity = '0';
        triggerEl.style.pointerEvents = 'none';
    }

    modal.classList.remove('hidden');

    // Trigger parallel-safe entry
    img.style.animation = 'none';
    img.offsetHeight;
    img.style.animation = 'liquid-drop-entry 0.6s cubic-bezier(0.23, 1, 0.32, 1) forwards';

    requestAnimationFrame(() => {
        modal.classList.add('modal-active');
        modal.classList.remove('opacity-0');
    });
};

window.closeLightbox = function () {
    const modal = document.getElementById('modal-lightbox');
    const img = document.getElementById('lightbox-img');
    if (!modal || !img) return;

    const triggerBtnId = modal.dataset.triggerId;
    const triggerBtn = triggerBtnId ? document.getElementById(triggerBtnId) : null;

    modal.classList.remove('modal-active');

    // Exit morphing animation
    img.style.animation = 'liquid-drop-exit 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards';
    setTimeout(() => {
        modal.classList.add('hidden');

        // Parallel check: reset overflow and 3D mode only if no other modal is visible
        const remainingModals = document.querySelectorAll('.fixed:not(.hidden).modal-active');
        if (remainingModals.length === 0) {
            document.body.style.overflow = '';
            if (window.bgAnimation) window.bgAnimation.modalActive = false;
        }

        // Restore trigger visibility after exit animation
        if (triggerBtn) {
            triggerBtn.style.transition = 'opacity 0.25s ease';
            triggerBtn.style.opacity = '1';
            triggerBtn.style.pointerEvents = '';
        }
    }, 450);
};

// Initialize Zoom Triggers for remaining elements
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.image-zoom-trigger').forEach(trigger => {
        trigger.addEventListener('click', () => {
            const img = trigger.querySelector('img');
            if (img) openLightbox(img.src, trigger);
        });
    });
});

// Simplified placeholders removed - now using unified functions above


function moveBenchmarkSlider(containerId, direction) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const slides = container.querySelectorAll('.slider-slide');
  const dots = container.querySelectorAll('.slider-dots span');
  if (slides.length === 0) return;
  
  let currentIndex = Array.from(slides).findIndex(s => s.classList.contains('opacity-100'));
  if (currentIndex === -1) currentIndex = 0;
  
  let newIndex = currentIndex + direction;
  if (newIndex >= slides.length) newIndex = 0;
  if (newIndex < 0) newIndex = slides.length - 1;
  
  slides.forEach((s, idx) => {
    if (idx === newIndex) {
      s.classList.remove('opacity-0', 'pointer-events-none');
      s.classList.add('opacity-100');
    } else {
      s.classList.remove('opacity-100');
      s.classList.add('opacity-0', 'pointer-events-none');
    }
  });
  
  dots.forEach((d, idx) => {
    if (idx === newIndex) {
      d.classList.remove('opacity-30');
      d.classList.add('opacity-100');
    } else {
      d.classList.remove('opacity-100');
      d.classList.add('opacity-30');
    }
  });
}


// --- Nav Glow Interaction ---
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const navGlow = document.getElementById('nav-glow');
    if (navbar && navGlow) {
        const navItems = navbar.querySelectorAll('button, a');
        navItems.forEach(item => {
            item.addEventListener('mouseenter', (e) => {
                const rect = item.getBoundingClientRect();
                const navRect = navbar.getBoundingClientRect();
                navGlow.style.opacity = '1';
                navGlow.style.width = `${rect.width + 60}px`;
                navGlow.style.height = `${rect.height + 60}px`;
                navGlow.style.left = `${rect.left - navRect.left - 30}px`;
            });
        });
        navbar.addEventListener('mouseleave', () => {
            navGlow.style.opacity = '0';
        });
    }
});


// --- Accordion Logic ---
document.addEventListener('DOMContentLoaded', () => {
    const accordions = document.querySelectorAll('.accordion-header');
    accordions.forEach(acc => {
        acc.addEventListener('click', () => {
            const content = acc.nextElementSibling;
            const icon = acc.querySelector('.accordion-icon');
            const isOpen = content.style.maxHeight;

            // Close all
            document.querySelectorAll('.accordion-content').forEach(c => {
                c.style.maxHeight = null;
                c.style.opacity = '0';
            });
            document.querySelectorAll('.accordion-icon').forEach(i => {
                i.style.transform = 'rotate(0deg)';
                i.classList.remove('text-electric');
            });

            if (!isOpen) {
                content.style.maxHeight = content.scrollHeight + "px";
                content.style.opacity = '1';
                icon.style.transform = 'rotate(90deg)';
                icon.classList.add('text-electric');
            }
        });
    });
});
