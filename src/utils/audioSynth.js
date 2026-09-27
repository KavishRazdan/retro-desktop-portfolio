// Web Audio API Retro Synthesizer Engine
// Provides authentic, 0-latency retro chiptune, synthwave, and lo-fi music
// without any external network dependencies.

const NOTE_FREQS = {
  C2: 65.41, D2: 73.42, E2: 82.41, F2: 87.31, G2: 98.00, A2: 110.00, B2: 123.47,
  C3: 130.81, D3: 146.83, E3: 164.81, F3: 174.61, G3: 196.00, A3: 220.00, B3: 246.94,
  C4: 261.63, D4: 293.66, E4: 329.63, F4: 349.23, G4: 392.00, A4: 440.00, B4: 493.88,
  C5: 523.25, D5: 587.33, E5: 659.25, F5: 698.46, G5: 783.99, A5: 880.00, B5: 987.77,
  REST: 0
};

// Composed tracks with loop patterns
export const TRACKS_DATA = [
  {
    id: 0,
    title: 'Synthwave Horizon',
    artist: 'RetroSynth',
    bpm: 112,
    duration: 184, // 3:04
    patterns: {
      bass: [
        'A2', 'A2', 'A2', 'A2', 'F2', 'F2', 'F2', 'F2',
        'C2', 'C2', 'C2', 'C2', 'G2', 'G2', 'G2', 'G2'
      ],
      lead: [
        'E4', 'REST', 'G4', 'REST', 'A4', 'REST', 'B4', 'C5',
        'REST', 'B4', 'REST', 'G4', 'E4', 'REST', 'D4', 'REST',
        'C4', 'REST', 'E4', 'REST', 'G4', 'REST', 'A4', 'REST',
        'B4', 'REST', 'G4', 'REST', 'E4', 'D4', 'C4', 'REST'
      ],
      drums: [
        'kick', 'hihat', 'snare', 'hihat', 'kick', 'hihat', 'snare', 'hihat',
        'kick', 'hihat', 'snare', 'hihat', 'kick', 'kick', 'snare', 'hihat'
      ]
    },
    waveforms: { lead: 'sawtooth', bass: 'triangle', filter: 1400 }
  },
  {
    id: 1,
    title: 'Chiptune Dreams',
    artist: '8-Bit Hero',
    bpm: 128,
    duration: 156, // 2:36
    patterns: {
      bass: [
        'C3', 'REST', 'C3', 'G2', 'A2', 'REST', 'A2', 'E2',
        'F2', 'REST', 'F2', 'C2', 'G2', 'REST', 'G2', 'B2'
      ],
      lead: [
        'C5', 'E5', 'G5', 'C5', 'B4', 'D5', 'G5', 'B4',
        'A4', 'C5', 'E5', 'A4', 'G4', 'B4', 'D5', 'G4',
        'F4', 'A4', 'C5', 'F4', 'E4', 'G4', 'C5', 'E4',
        'D4', 'F4', 'A4', 'D4', 'G4', 'B4', 'D5', 'F5'
      ],
      drums: [
        'kick', 'hihat', 'snare', 'hihat', 'kick', 'hihat', 'snare', 'hihat',
        'kick', 'snare', 'kick', 'snare', 'kick', 'hihat', 'snare', 'hihat'
      ]
    },
    waveforms: { lead: 'square', bass: 'square', filter: 2800 }
  },
  {
    id: 2,
    title: 'Lo-Fi Chill Code',
    artist: 'Caffeine Kid',
    bpm: 84,
    duration: 210, // 3:30
    patterns: {
      bass: [
        'D2', 'REST', 'D2', 'REST', 'G2', 'REST', 'G2', 'REST',
        'C2', 'REST', 'C2', 'REST', 'A2', 'REST', 'A2', 'REST'
      ],
      lead: [
        'F4', 'A4', 'C5', 'REST', 'E4', 'G4', 'B4', 'REST',
        'D4', 'F4', 'A4', 'REST', 'C4', 'E4', 'G4', 'REST',
        'D4', 'REST', 'F4', 'A4', 'B4', 'REST', 'A4', 'REST',
        'G4', 'REST', 'E4', 'REST', 'D4', 'REST', 'REST', 'REST'
      ],
      drums: [
        'kick', 'REST', 'snare', 'hihat', 'REST', 'kick', 'snare', 'REST',
        'kick', 'REST', 'snare', 'hihat', 'REST', 'kick', 'snare', 'hihat'
      ]
    },
    waveforms: { lead: 'sine', bass: 'triangle', filter: 900 }
  }
];

class RetroAudioEngine {
  constructor() {
    this.audioCtx = null;
    this.masterGain = null;
    this.analyser = null;
    this.noiseBuffer = null;
    this.isPlaying = false;
    this.currentTrackIdx = 0;
    this.stepIndex = 0;
    this.timerId = null;
    this.volume = 0.65;
    this.currentTime = 0;
    this.onProgressUpdate = null;
    this.onEnded = null;
  }

  init() {
    if (!this.audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (!AudioContextClass) return false;
      this.audioCtx = new AudioContextClass();

      // Master volume gain node
      this.masterGain = this.audioCtx.createGain();
      this.masterGain.gain.setValueAtTime(this.volume, this.audioCtx.currentTime);

      // Realtime Analyser for visualizer
      this.analyser = this.audioCtx.createAnalyser();
      this.analyser.fftSize = 64;
      this.analyser.smoothingTimeConstant = 0.8;

      this.masterGain.connect(this.analyser);
      this.analyser.connect(this.audioCtx.destination);

      // Pre-generate 1-second white noise buffer for snare and hihat
      const bufferSize = this.audioCtx.sampleRate;
      this.noiseBuffer = this.audioCtx.createBuffer(1, bufferSize, this.audioCtx.sampleRate);
      const data = this.noiseBuffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }
    }

    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
    return true;
  }

  setVolume(val) {
    this.volume = Math.max(0, Math.min(1, val));
    if (this.masterGain && this.audioCtx) {
      this.masterGain.gain.setTargetAtTime(this.volume, this.audioCtx.currentTime, 0.05);
    }
  }

  // Play a single synthesizer tone
  playTone(freq, type = 'sine', duration = 0.2, time = 0, gainLevel = 0.2, filterFreq = 2000) {
    if (!freq || freq <= 0 || !this.audioCtx || !this.masterGain) return;

    try {
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      const filter = this.audioCtx.createBiquadFilter();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, time);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(filterFreq, time);

      // Attack and decay envelope
      gain.gain.setValueAtTime(0.001, time);
      gain.gain.linearRampToValueAtTime(gainLevel, time + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, time + duration);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.masterGain);

      osc.start(time);
      osc.stop(time + duration);
    } catch {
      // Ignore scheduling on inactive ctx
    }
  }

  // Synthesize kick, snare, or hi-hat
  playDrum(type, time = 0) {
    if (!this.audioCtx || !this.masterGain || !this.noiseBuffer) return;

    try {
      if (type === 'kick') {
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();
        osc.frequency.setValueAtTime(140, time);
        osc.frequency.exponentialRampToValueAtTime(32, time + 0.12);

        gain.gain.setValueAtTime(0.4, time);
        gain.gain.exponentialRampToValueAtTime(0.001, time + 0.12);

        osc.connect(gain);
        gain.connect(this.masterGain);
        osc.start(time);
        osc.stop(time + 0.12);
      } else if (type === 'snare') {
        // Noise burst
        const noise = this.audioCtx.createBufferSource();
        noise.buffer = this.noiseBuffer;
        const filter = this.audioCtx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.value = 1200;

        const gain = this.audioCtx.createGain();
        gain.gain.setValueAtTime(0.25, time);
        gain.gain.exponentialRampToValueAtTime(0.001, time + 0.14);

        noise.connect(filter);
        filter.connect(gain);
        gain.connect(this.masterGain);
        noise.start(time);
        noise.stop(time + 0.14);

        // Body tone
        const osc = this.audioCtx.createOscillator();
        const oscGain = this.audioCtx.createGain();
        osc.frequency.setValueAtTime(180, time);
        osc.frequency.exponentialRampToValueAtTime(60, time + 0.08);
        oscGain.gain.setValueAtTime(0.2, time);
        oscGain.gain.exponentialRampToValueAtTime(0.001, time + 0.08);

        osc.connect(oscGain);
        oscGain.connect(this.masterGain);
        osc.start(time);
        osc.stop(time + 0.08);
      } else if (type === 'hihat') {
        const noise = this.audioCtx.createBufferSource();
        noise.buffer = this.noiseBuffer;
        const filter = this.audioCtx.createBiquadFilter();
        filter.type = 'highpass';
        filter.frequency.value = 7500;

        const gain = this.audioCtx.createGain();
        gain.gain.setValueAtTime(0.12, time);
        gain.gain.exponentialRampToValueAtTime(0.001, time + 0.04);

        noise.connect(filter);
        filter.connect(gain);
        gain.connect(this.masterGain);
        noise.start(time);
        noise.stop(time + 0.04);
      }
    } catch {
      // Ignore scheduling error
    }
  }

  start(trackIdx = 0) {
    this.init();
    this.currentTrackIdx = trackIdx;
    this.isPlaying = true;

    const track = TRACKS_DATA[trackIdx] || TRACKS_DATA[0];
    const stepDuration = 60 / track.bpm / 4; // 16th note in seconds

    if (this.timerId) clearInterval(this.timerId);

    const stepIntervalMs = stepDuration * 1000;

    this.timerId = setInterval(() => {
      if (!this.isPlaying || !this.audioCtx) return;

      const now = this.audioCtx.currentTime;
      const patterns = track.patterns;

      // 1. Bass note
      const bassNote = patterns.bass[this.stepIndex % patterns.bass.length];
      if (bassNote && bassNote !== 'REST') {
        const freq = NOTE_FREQS[bassNote];
        this.playTone(freq, track.waveforms.bass, stepDuration * 1.5, now, 0.24, track.waveforms.filter);
      }

      // 2. Melody Lead note
      const leadNote = patterns.lead[this.stepIndex % patterns.lead.length];
      if (leadNote && leadNote !== 'REST') {
        const freq = NOTE_FREQS[leadNote];
        this.playTone(freq, track.waveforms.lead, stepDuration * 1.8, now, 0.18, track.waveforms.filter * 1.5);
      }

      // 3. Drum beat
      const drumHit = patterns.drums[this.stepIndex % patterns.drums.length];
      if (drumHit && drumHit !== 'REST') {
        this.playDrum(drumHit, now);
      }

      this.stepIndex++;
      this.currentTime += stepDuration;

      if (this.currentTime >= track.duration) {
        this.currentTime = 0;
        this.stepIndex = 0;
        if (this.onEnded) this.onEnded();
      }

      if (this.onProgressUpdate) {
        this.onProgressUpdate(this.currentTime, track.duration);
      }
    }, stepIntervalMs);
  }

  pause() {
    this.isPlaying = false;
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  seek(newTimeSeconds) {
    const track = TRACKS_DATA[this.currentTrackIdx] || TRACKS_DATA[0];
    this.currentTime = Math.max(0, Math.min(newTimeSeconds, track.duration));
    const stepDuration = 60 / track.bpm / 4;
    this.stepIndex = Math.floor(this.currentTime / stepDuration);
    if (this.onProgressUpdate) {
      this.onProgressUpdate(this.currentTime, track.duration);
    }
  }

  getFrequencyData() {
    if (!this.analyser || !this.isPlaying) {
      return [0, 0, 0, 0];
    }
    const dataArray = new Uint8Array(this.analyser.frequencyBinCount);
    this.analyser.getByteFrequencyData(dataArray);

    // Sample 4 distinct frequency bands: Bass, Low-Mid, High-Mid, Treble
    const b0 = dataArray[2] || 0;
    const b1 = dataArray[6] || 0;
    const b2 = dataArray[12] || 0;
    const b3 = dataArray[18] || 0;

    return [b0, b1, b2, b3];
  }
}

export const audioEngine = new RetroAudioEngine();
export default audioEngine;
