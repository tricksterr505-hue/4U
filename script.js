// =====================================================================
        // 1. DATA 5 KAPSUL GACHAPON & SURAT RAHASIA (Siap Diedit/Dipersonalisasi)
        // =====================================================================
        const CAPSULES_DATA = [
            {
                id: 1,
                type: "note",
                badge: "THINGS I LOVE",
                colorHex: "#A8C3A7", // Sage Pastel
                domeId: "dome-ball-1",
                shortName: "THINGS",
                title: "5 Things I Love About You",
                desc: `
                 <ol>
                    <li>I love your eyes.</li>
                    <li>I love your voice.</li>
                    <li>I love your kindness.</li>
                    <li>I love your laugh.</li>
                    <li>I love the way you love me.</li>
                 </ol>
                `,
                iconSvg: `<svg class="pixel-art w-8 h-8" viewBox="0 0 7 7"><rect x="1" y="1" width="2" height="1" fill="#FFFBF8"/><rect x="4" y="1" width="2" height="1" fill="#FFFBF8"/><rect x="1" y="2" width="5" height="2" fill="#FFFBF8"/><rect x="2" y="4" width="3" height="1" fill="#FFFBF8"/><rect x="3" y="5" width="1" height="1" fill="#FFFBF8"/></svg>`
            },
            {
                id: 2,
                type: "note",
                badge: "FAV FOODS",
                colorHex: "#D98A9C", // Dusty Rose
                domeId: "dome-ball-2",
                shortName: "FAV FOODS",
                title: "5 of Your Favorite Foods",
                desc: `
                    <ol>
                        <li>Reddog</li>
                        <li>Sour Sally</li>
                        <li>Ube</li>
                        <li>Bungeoppang</li>
                        <li>HokBen Salad</li>
                    </ol>
                `,
                iconSvg: `<svg class="pixel-art w-8 h-8" viewBox="0 0 16 16">
                            <rect x="3" y="2" width="1" height="5" fill="#FFFBF8"/>
                            <rect x="5" y="2" width="1" height="5" fill="#FFFBF8"/>
                            <rect x="2" y="7" width="5" height="1" fill="#FFFBF8"/>
                            <rect x="3" y="8" width="3" height="1" fill="#FFFBF8"/>
                            <rect x="8" y="6" width="6" height="2" fill="#FFFBF8"/>
                            <rect x="7" y="8" width="8" height="1" fill="#FFFBF8"/>
                            <rect x="8" y="9" width="6" height="2" fill="#FFFBF8"/>
                            <rect x="9" y="7" width="2" height="1" fill="#D98A9C"/>
                            <rect x="12" y="7" width="1" height="1" fill="#E8B86D"/>
                            <rect x="10" y="9" width="2" height="1" fill="#D98A9C"/>
                            <rect x="8" y="12" width="6" height="1" fill="#FFFBF8"/>
                        </svg>`
            },
            {
                id: 3,
                type: "note",
                badge: "FAV SONGS",
                colorHex: "#C4B0D9", // Lavender Pastel
                domeId: "dome-ball-3",
                shortName: "FAV SONGS",
                title: "5 of My Favorite Songs in Your Playlist",
                desc: `
                    <ol>
                        <li>Superpowers — Daniel Caesar</li>
                        <li>You Owe Me — Malcolm Todd</li>
                        <li>Godspeed — Frank Ocean</li>
                        <li>Girl with the Tattoo — Miguel</li>
                        <li>No Other Heart — Mac DeMarco</li>
                    </ol>
                `,
                iconSvg: `<svg class="pixel-art w-8 h-8" viewBox="0 0 16 16">
                    <rect x="3" y="5" width="2" height="6" fill="#FFFBF8"/>
                    <rect x="4" y="3" width="2" height="2" fill="#FFFBF8"/>
                    <rect x="6" y="2" width="4" height="1" fill="#FFFBF8"/>
                    <rect x="10" y="3" width="2" height="2" fill="#FFFBF8"/>
                    <rect x="11" y="5" width="2" height="6" fill="#FFFBF8"/>
                    <rect x="2" y="10" width="4" height="3" fill="#FFFBF8"/>
                    <rect x="10" y="10" width="4" height="3" fill="#FFFBF8"/>
                    <rect x="3" y="11" width="2" height="1" fill="#C4B0D9"/>
                    <rect x="11" y="11" width="2" height="1" fill="#C4B0D9"/>
                    <rect x="7" y="6" width="2" height="3" fill="#E8B86D"/>
                    <rect x="9" y="5" width="2" height="1" fill="#E8B86D"/>
                    <rect x="7" y="9" width="2" height="1" fill="#E8B86D"/>
                </svg>`
            },
            {
                id: 4,
                type: "note",
                badge: "A LITTLE LOVE NOTE",
                colorHex: "#EE9CA7",
                domeId: "dome-ball-4",
                shortName: "EIGHT LETTERS",
                title: "A NAME I LOVE",
                desc: `
                        <p style="text-align: left; margin-bottom: 12px;">
                            Love has 4 letters, but mine has 8.
                        </p>
                        <p style="text-align: center; margin-bottom: 6px;">
                            Here's a little clue:
                        </p>
                        <p style="text-align: left;">
                            it starts with C, ends with E, and belongs to someone who makes my days a little sweeter. Can you guess the name? ♥
                        </p>
                    `,
                claimed: false,
                iconSvg: `<svg class="pixel-art w-8 h-8" viewBox="0 0 16 16" shape-rendering="crispEdges">
                    <rect x="3" y="3" width="10" height="10" fill="#F8DDE2"/>
                    <rect x="4" y="4" width="8" height="8" fill="#FFFBF8"/>
                    <rect x="2" y="5" width="1" height="6" fill="#D98A9C"/>
                    <rect x="13" y="5" width="1" height="6" fill="#D98A9C"/>
                    <rect x="5" y="5" width="2" height="1" fill="#EE9CA7"/>
                    <rect x="9" y="5" width="2" height="1" fill="#EE9CA7"/>
                    <rect x="6" y="6" width="4" height="1" fill="#EE9CA7"/>
                    <rect x="7" y="7" width="2" height="2" fill="#C46B80"/>
                    <rect x="6" y="8" width="4" height="1" fill="#C46B80"/>
                    <rect x="5" y="9" width="2" height="1" fill="#EE9CA7"/>
                    <rect x="9" y="9" width="2" height="1" fill="#EE9CA7"/>
                </svg>`
            },
            {
                id: 5,
                type: "key",
                badge: "GOLDEN KEY",
                colorHex: "#E8B86D", // Soft Gold
                domeId: "dome-ball-5",
                shortName: "SECRET KEY",
                title: "SECRET LETTER KEY!",
                desc: "Congratulations! You found the final golden capsule. The 'OPEN SECRET LETTER' button on the machine screen is now unlocked!",
                iconSvg: `<svg class="pixel-art w-8 h-8" viewBox="0 0 7 7"><rect x="2" y="1" width="3" height="2" fill="#FFFBF8"/><rect x="3" y="3" width="1" height="3" fill="#FFFBF8"/><rect x="4" y="4" width="1" height="1" fill="#FFFBF8"/><rect x="4" y="6" width="1" height="1" fill="#FFFBF8"/></svg>`
            }
        ];

        const SECRET_LETTER_CONTENT = `Dear u,

        Thank u for being here with me, for every little conversation, every random story, n all the silly moments we share. I'm really grateful to have someone like u in my life.

        I hope u know how much u mean to me. Your messages, your jokes, your little habits, n the way u make even an ordinary day feel special. There are so many little things about u that make me smile, sometimes without u even realizing it.

        Thank u for choosing me, for staying, n for making me feel loved in ur own little ways. I know we're not perfect, and there might be days when things get a little difficult, but I hope we always find our way back to understanding each other.

        I look forward to more late-night talks, random updates, endless teasing, silly moments, n all the little memories we're going to make together. I hope we never run out of reasons to laugh, things to talk about, or ways to remind each other how much we care.

        I may not always be the best at expressing my feelings, but please know that I appreciate u more than words can explain. I'm happy it's u, and I wouldn't trade what we have for anything.

        Here's to us, to everything we've shared, n to everything that's still waiting for us.

        I love u, always. ♥`;

        // =====================================================================
        // 2. WEB AUDIO API: CHIPTUNE BGM & ARCADE SOUND EFFECTS
        // =====================================================================
        let audioCtx = null;
        let isBgmOn = false;
        let bgmInterval = null;
        let bgmStep = 0;

        // Melodi 8-bit ceria namun lembut (Music box / Pocket Arcade vibe)
        const BGM_SEQUENCE = [
            523.25, 659.25, 783.99, 659.25,
            880.00, 783.99, 659.25, 587.33,
            698.46, 880.00, 1046.50, 880.00,
            783.99, 659.25, 587.33, 523.25
        ];

        function initAudio() {
            if (!audioCtx) {
                const AudioCtx = window.AudioContext || window.webkitAudioContext;
                if (AudioCtx) audioCtx = new AudioCtx();
            }
            if (audioCtx && audioCtx.state === 'suspended') {
                audioCtx.resume();
            }
        }

        function playTone(freq, type = 'triangle', duration = 0.2, volume = 0.04, delay = 0) {
            if (!audioCtx) return;
            try {
                const startTime = audioCtx.currentTime + delay;
                const osc = audioCtx.createOscillator();
                const gain = audioCtx.createGain();
                osc.type = type;
                osc.frequency.setValueAtTime(freq, startTime);

                gain.gain.setValueAtTime(volume, startTime);
                gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

                osc.connect(gain);
                gain.connect(audioCtx.destination);
                osc.start(startTime);
                osc.stop(startTime + duration);
            } catch (e) {}
        }

        // SFX 1: Coin Insert (PRESS START)
        function sfxCoinInsert() {
            initAudio();
            playTone(987.77, 'square', 0.1, 0.04, 0);
            playTone(1318.51, 'square', 0.25, 0.04, 0.09);
        }

        // SFX 2: Crank Turn (Putar Tuas Gachapon)
        function sfxCrankTurn() {
            initAudio();
            const steps = [330, 392, 440, 523.25, 587.33, 659.25];
            steps.forEach((f, idx) => {
                playTone(f, 'square', 0.08, 0.03, idx * 0.08);
            });
        }

        // SFX 3: Capsule Pop!
        function sfxCapsulePop() {
            initAudio();
            playTone(523.25, 'triangle', 0.12, 0.06, 0);
            playTone(783.99, 'triangle', 0.12, 0.06, 0.08);
            playTone(1046.50, 'triangle', 0.25, 0.06, 0.16);
        }

        // SFX 4: Victory Fanfare (Buka Surat Rahasia)
        function sfxVictoryFanfare() {
            initAudio();
            const notes = [523.25, 659.25, 783.99, 1046.50, 783.99, 1046.50];
            const times = [0, 0.11, 0.22, 0.35, 0.52, 0.66];
            notes.forEach((n, i) => {
                playTone(n, 'triangle', 0.22, 0.055, times[i]);
            });
        }

        document.getElementById('bgm-toggle-btn').addEventListener('click', () => {
            initAudio();
            isBgmOn = !isBgmOn;
            const btn = document.getElementById('bgm-toggle-btn');
            if (isBgmOn) {
                btn.textContent = '♪ BGM: ON';
                bgmInterval = setInterval(() => {
                    playTone(BGM_SEQUENCE[bgmStep % BGM_SEQUENCE.length], 'triangle', 0.32, 0.03, 0);
                    bgmStep++;
                }, 400);
            } else {
                btn.textContent = '♪ BGM: OFF';
                clearInterval(bgmInterval);
            }
        });

        // =====================================================================
        // 3. PARTIKEL VISUAL (HATI PIXEL & CONFETTI PERAYAAN)
        // =====================================================================
        function spawnHearts(x, y, count = 6) {
            for (let i = 0; i < count; i++) {
                const el = document.createElement('div');
                el.className = 'float-heart';
                el.style.left = `${x + (Math.random() - 0.5) * 90}px`;
                el.style.top = `${y + (Math.random() - 0.5) * 40}px`;
                el.innerHTML = `
                    <svg class="pixel-art w-5 h-5" viewBox="0 0 7 7">
                        <rect x="1" y="1" width="2" height="1" fill="#D98A9C"/>
                        <rect x="4" y="1" width="2" height="1" fill="#D98A9C"/>
                        <rect x="1" y="2" width="5" height="2" fill="#D98A9C"/>
                        <rect x="2" y="4" width="3" height="1" fill="#D98A9C"/>
                        <rect x="3" y="5" width="1" height="1" fill="#D98A9C"/>
                    </svg>
                `;
                document.body.appendChild(el);
                setTimeout(() => el.remove(), 950);
            }
        }

        function spawnPixelConfetti(amount = 28) {
            const colors = ['#D98A9C', '#E8B86D', '#A8C3A7', '#C4B0D9', '#C46B80'];
            for (let i = 0; i < amount; i++) {
                const piece = document.createElement('div');
                piece.className = 'pixel-confetti';
                const size = Math.random() > 0.5 ? 8 : 6;
                piece.style.width = `${size}px`;
                piece.style.height = `${size}px`;
                piece.style.backgroundColor = colors[i % colors.length];
                piece.style.border = '1px solid #3B2831';
                piece.style.left = `${Math.random() * 100}vw`;
                piece.style.animationDuration = `${2.2 + Math.random() * 2}s`;
                piece.style.animationDelay = `${Math.random() * 0.6}s`;
                document.body.appendChild(piece);
                setTimeout(() => piece.remove(), 4500);
            }
        }

        // =====================================================================
        // 4. NAVIGASI STAGE & STATE PERMAINAN
        // =====================================================================
        const stageIntro = document.getElementById('stage-intro');
        const stageGacha = document.getElementById('stage-gacha');
        const stageLetter = document.getElementById('stage-letter');

        let unlockedCount = 0;
        let isSpinning = false;
        let activeModalCapsuleIndex = null;

        function switchStage(targetStage) {
            [stageIntro, stageGacha, stageLetter].forEach((s) => s.classList.add('stage-hidden'));
            targetStage.classList.remove('stage-hidden');
        }

        // Render 5 Slot Tray Koleksi Kapsul
        function renderCollectionTray() {
            const tray = document.getElementById('collection-tray');
            tray.innerHTML = '';

            CAPSULES_DATA.forEach((cap, idx) => {
                const isUnlocked = idx < unlockedCount;
                const slotBtn = document.createElement('button');
                slotBtn.type = 'button';

                if (isUnlocked) {
                    slotBtn.className = 'flex flex-col items-center justify-center p-1.5 rounded-lg border-2 border-[#3B2831] shadow-[2px_2px_0px_#3B2831] hover:scale-105 transition cursor-pointer';
                    slotBtn.style.backgroundColor = cap.colorHex;
                    slotBtn.innerHTML = `
                        <div class="w-6 h-6 flex items-center justify-center">${cap.iconSvg}</div>
                        <span class="font-pixel text-[6px] text-[#3B2831] bg-[#FFFBF8]/90 px-1 rounded mt-1 truncate max-w-full">
                            #${cap.id}
                        </span>
                    `;
                    slotBtn.addEventListener('click', () => {
                        sfxCapsulePop();
                        openCapsuleModal(idx);
                    });
                } else {
                    slotBtn.className = 'flex flex-col items-center justify-center p-1.5 rounded-lg border-2 border-dashed border-[#8C6D79] bg-[#FAF3EE] opacity-70 cursor-default';
                    slotBtn.disabled = true;
                    slotBtn.innerHTML = `
                        <span class="font-pixel text-xs text-[#8C6D79] h-6 flex items-center">?</span>
                        <span class="font-pixel text-[6px] text-[#8C6D79] mt-1">#${cap.id}</span>
                    `;
                }

                tray.appendChild(slotBtn);
            });

            document.getElementById('capsule-counter').textContent = `${unlockedCount}/5`;

            const spinBtn = document.getElementById('spin-gacha-btn');
            const secretBtn = document.getElementById('open-secret-letter-btn');
            const remaining = 5 - unlockedCount;

            if (remaining > 0) {
                spinBtn.textContent = `OPEN UR GIFT (${remaining}/5)`;
                spinBtn.classList.remove('hidden');
                secretBtn.classList.add('hidden');
            } else {
                spinBtn.classList.add('hidden');
                secretBtn.classList.remove('hidden');
            }
        }

        // =====================================================================
        // 5. EVENT LISTENER STAGE 1 -> STAGE 2 (LOVE GACHAPON)
        // =====================================================================
        document.getElementById('press-start-btn').addEventListener('click', (e) => {
            sfxCoinInsert();
            const rect = e.currentTarget.getBoundingClientRect();
            spawnHearts(rect.left + rect.width / 2, rect.top, 6);
            renderCollectionTray();
            setTimeout(() => {
                switchStage(stageGacha);
            }, 260);
        });

        // =====================================================================
        // 6. LOGIKA PUTAR GACHA & MODAL HADIAH KAPSUL
        // =====================================================================
        const spinGachaBtn = document.getElementById('spin-gacha-btn');
        const gachaponMachine = document.getElementById('gachapon-machine');
        const gachaCrank = document.getElementById('gacha-crank');
        const dispensedCapsule = document.getElementById('dispensed-capsule');
        const dispensedTopColor = document.getElementById('dispensed-top-color');
        const gachaCharLeft = document.getElementById('gacha-char-left');
        const gachaCharRight = document.getElementById('gacha-char-right');

        spinGachaBtn.addEventListener('click', () => {
            if (isSpinning || unlockedCount >= CAPSULES_DATA.length) return;
            isSpinning = true;
            spinGachaBtn.disabled = true;

            const currentCap = CAPSULES_DATA[unlockedCount];
            sfxCrankTurn();

            // Animasi mesin bergetar, tuas berputar, dan karakter bersorak melompat
            gachaponMachine.classList.add('animate-machine-shake');
            gachaCrank.classList.add('animate-crank-spin');
            gachaCharLeft.classList.remove('animate-char-idle-1');
            gachaCharRight.classList.remove('animate-char-idle-2');
            gachaCharLeft.classList.add('animate-char-cheer');
            gachaCharRight.classList.add('animate-char-cheer');

            setTimeout(() => {
                // Sembunyikan bola dari dalam kubah kaca
                const domeBall = document.getElementById(currentCap.domeId);
                if (domeBall) domeBall.style.opacity = '0.15';

                // Tampilkan bola jatuh dari chute
                dispensedTopColor.setAttribute('fill', currentCap.colorHex);
                dispensedCapsule.classList.remove('hidden');
                dispensedCapsule.classList.add('animate-capsule-drop');
                sfxCapsulePop();

                const rect = dispensedCapsule.getBoundingClientRect();
                spawnHearts(rect.left + 16, rect.top, 7);
            }, 650);

            setTimeout(() => {
                // Bersihkan animasi & buka modal hadiah
                gachaponMachine.classList.remove('animate-machine-shake');
                gachaCrank.classList.remove('animate-crank-spin');
                gachaCharLeft.classList.remove('animate-char-cheer');
                gachaCharRight.classList.remove('animate-char-cheer');
                gachaCharLeft.classList.add('animate-char-idle-1');
                gachaCharRight.classList.add('animate-char-idle-2');

                dispensedCapsule.classList.add('hidden');
                dispensedCapsule.classList.remove('animate-capsule-drop');

                const openedIdx = unlockedCount;
                unlockedCount++;
                renderCollectionTray();

                isSpinning = false;
                spinGachaBtn.disabled = false;

                openCapsuleModal(openedIdx);
            }, 1350);
        });

        // Modal Detail Kapsul
        const capsuleModal = document.getElementById('capsule-modal');
        const modalBadge = document.getElementById('modal-capsule-badge');
        const modalIcon = document.getElementById('modal-capsule-icon');
        const modalTitle = document.getElementById('modal-capsule-title');
        const modalDesc = document.getElementById('modal-capsule-desc');
 
        function openCapsuleModal(index) {
            const cap = CAPSULES_DATA[index];
            if (!cap) return;

            activeModalCapsuleIndex = index;

            modalBadge.textContent = cap.badge;
            modalIcon.style.backgroundColor = cap.colorHex;
            modalIcon.innerHTML = cap.iconSvg;
            modalTitle.textContent = cap.title;
            modalDesc.innerHTML = cap.desc;

            capsuleModal.classList.remove('hidden');
        }


        function closeCapsuleModal() {
            capsuleModal.classList.add('hidden');
        }

        document.getElementById('close-capsule-modal').addEventListener('click', closeCapsuleModal);
        document.getElementById('save-capsule-btn').addEventListener('click', closeCapsuleModal);
        capsuleModal.addEventListener('click', (e) => {
            if (e.target === capsuleModal) closeCapsuleModal();
        });

        // =====================================================================
        // 7. STAGE 3: SECRET LETTER & TYPEWRITER + PIXEL CONFETTI
        // =====================================================================
        const secretLetterText = document.getElementById('secret-letter-text');
        const secretLetterCursor = document.getElementById('secret-letter-cursor');
        let letterTimer = null;

        function startSecretTypewriter() {
            clearInterval(letterTimer);
            secretLetterText.textContent = '';
            secretLetterCursor.style.display = 'inline-block';
            let i = 0;

            letterTimer = setInterval(() => {
                if (i < SECRET_LETTER_CONTENT.length) {
                    secretLetterText.textContent += SECRET_LETTER_CONTENT.charAt(i);
                    i++;
                } else {
                    clearInterval(letterTimer);
                    secretLetterCursor.style.display = 'none';
                }
            }, 26);
        }

        document.getElementById('open-secret-letter-btn').addEventListener('click', () => {
            sfxVictoryFanfare();
            spawnPixelConfetti(32);
            switchStage(stageLetter);
            startSecretTypewriter();
        });

        document.getElementById('show-all-letter-btn').addEventListener('click', () => {
            clearInterval(letterTimer);
            secretLetterText.textContent = SECRET_LETTER_CONTENT;
            secretLetterCursor.style.display = 'none';
        });

        // Kembali ke halaman Gachapon tanpa menghapus progres koleksi.
        const backToGachaBtn = document.getElementById('back-to-gacha-btn');
        if (backToGachaBtn) {
            backToGachaBtn.addEventListener('click', (event) => {
                event.preventDefault();
                clearInterval(letterTimer);
                switchStage(stageGacha);
            });
        }

        // Mulai ulang seluruh permainan dari awal.
        const resetGameBtn = document.getElementById('reset-game-btn');
        if (resetGameBtn) {
            resetGameBtn.addEventListener('click', (event) => {
                event.preventDefault();
                clearInterval(letterTimer);
                letterTimer = null;

                unlockedCount = 0;
                isSpinning = false;
                activeModalCapsuleIndex = null;

                // Pulihkan semua bola kapsul di dalam mesin.
                CAPSULES_DATA.forEach((cap) => {
                    const domeBall = document.getElementById(cap.domeId);
                    if (domeBall) domeBall.style.opacity = '1';
                });

                // Bersihkan kondisi animasi/hasil putaran sebelumnya.
                if (capsuleModal) capsuleModal.classList.add('hidden');
                if (dispensedCapsule) {
                    dispensedCapsule.classList.add('hidden');
                    dispensedCapsule.classList.remove('animate-capsule-drop');
                }
                if (spinGachaBtn) {
                    spinGachaBtn.disabled = false;
                    spinGachaBtn.classList.remove('hidden');
                }
                if (gachaponMachine) gachaponMachine.classList.remove('animate-machine-shake');
                if (gachaCrank) gachaCrank.classList.remove('animate-crank-spin');
                if (gachaCharLeft) {
                    gachaCharLeft.classList.remove('animate-char-cheer');
                    gachaCharLeft.classList.add('animate-char-idle-1');
                }
                if (gachaCharRight) {
                    gachaCharRight.classList.remove('animate-char-cheer');
                    gachaCharRight.classList.add('animate-char-idle-2');
                }

                // Kosongkan tampilan surat dan perbarui koleksi menjadi 0/5.
                if (secretLetterText) secretLetterText.textContent = '';
                if (secretLetterCursor) secretLetterCursor.style.display = 'none';
                renderCollectionTray();
                switchStage(stageIntro);
            });
        }
