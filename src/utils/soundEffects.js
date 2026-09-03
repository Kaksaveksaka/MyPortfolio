// Web Audio API Jolly Arcade Sound FX Synthesizer
// 100% zero external audio asset dependencies - ultra-responsive, zero latency

let audioCtx = null;
let soundEnabled = true;

// Initialize or resume AudioContext safely on user interaction
function getAudioContext() {
  if (typeof window === "undefined") return null;
  
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  
  if (audioCtx && audioCtx.state === "suspended") {
    audioCtx.resume().catch(() => {});
  }
  
  return audioCtx;
}

export function isAudioMuted() {
  if (typeof window !== "undefined" && window.localStorage) {
    const stored = window.localStorage.getItem("gamer_audio_enabled");
    if (stored !== null) {
      return stored === "false";
    }
  }
  return false;
}

export function setAudioMuted(isMuted) {
  soundEnabled = !isMuted;
  if (typeof window !== "undefined" && window.localStorage) {
    window.localStorage.setItem("gamer_audio_enabled", (!isMuted).toString());
  }
}

// 1. Cheerful Pop/Tick on Hover
export function playHoverSound() {
  if (isAudioMuted()) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  try {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    const now = ctx.currentTime;
    
    // Warm cheerful blip (G5 -> C6)
    osc.frequency.setValueAtTime(784, now);
    osc.frequency.exponentialRampToValueAtTime(1046, now + 0.04);

    gain.gain.setValueAtTime(0.03, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.04);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.04);
  } catch {
    // Ignore audio context errors
  }
}

// 2. Playful Coin/Arcade Jump Button Click
export function playClickSound() {
  if (isAudioMuted()) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  try {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "triangle";
    const now = ctx.currentTime;

    // Mario-style coin/jump sound (B5 -> E6)
    osc.frequency.setValueAtTime(987.77, now);
    osc.frequency.setValueAtTime(1318.51, now + 0.04);

    gain.gain.setValueAtTime(0.05, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.09);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.09);
  } catch {
    // Ignore audio context errors
  }
}

// 3. Cheerful Switch / Tab Tone
export function playSwitchSound() {
  if (isAudioMuted()) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  try {
    const now = ctx.currentTime;
    const notes = [659.25, 880]; // E5, A5

    notes.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sine";
      const startTime = now + i * 0.04;
      
      osc.frequency.setValueAtTime(freq, startTime);
      gain.gain.setValueAtTime(0.04, startTime);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.07);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(startTime);
      osc.stop(startTime + 0.07);
    });
  } catch {
    // Ignore audio context errors
  }
}

// 4. Cheerful Launch / Power-Up Arpeggio
export function playLaunchSound() {
  if (isAudioMuted()) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  try {
    const now = ctx.currentTime;
    // Cheerful C Major arpeggio (C5, E5, G5, C6)
    const notes = [523.25, 659.25, 783.99, 1046.5];

    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sine";
      const start = now + idx * 0.045;

      osc.frequency.setValueAtTime(freq, start);
      gain.gain.setValueAtTime(0.045, start);
      gain.gain.exponentialRampToValueAtTime(0.001, start + 0.09);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(start);
      osc.stop(start + 0.09);
    });
  } catch {
    // Ignore audio context errors
  }
}

