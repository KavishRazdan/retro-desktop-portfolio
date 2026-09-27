import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Play, Pause, SkipForward, SkipBack, Square, Volume2, VolumeX } from 'lucide-react';
import { audioEngine, TRACKS_DATA } from '../../utils/audioSynth';
import './MusicPlayer.css';

const formatTime = (secs) => {
  if (isNaN(secs) || secs < 0) return '00:00';
  const m = Math.floor(secs / 60);
  const s = Math.floor(secs % 60);
  return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
};

export const MusicPlayer = () => {
  const [trackIdx, setTrackIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [volume, setVolume] = useState(0.65);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(TRACKS_DATA[0].duration);
  const [eqLevels, setEqLevels] = useState([8, 12, 6, 10]);

  const animFrameRef = useRef(null);

  const activeTrack = TRACKS_DATA[trackIdx] || TRACKS_DATA[0];

  // Auto-start on mount and handle track switches
  useEffect(() => {
    // Listeners for progress
    audioEngine.onProgressUpdate = (curr, dur) => {
      setCurrentTime(curr);
      setDuration(dur);
    };

    audioEngine.onEnded = () => {
      handleNext();
    };

    // Start playing current track
    audioEngine.start(trackIdx);
    setIsPlaying(true);

    return () => {
      audioEngine.pause();
    };
  }, [trackIdx]);

  // Volume synchronization
  useEffect(() => {
    audioEngine.setVolume(isMuted ? 0 : volume);
  }, [volume, isMuted]);

  // Equalizer visualizer loop
  useEffect(() => {
    const updateEqualizer = () => {
      if (isPlaying) {
        const freqs = audioEngine.getFrequencyData();
        // Scale frequency byte (0-255) to bar height in px (3px to 22px)
        const heights = freqs.map((f) => Math.max(3, Math.min(22, Math.floor((f / 255) * 22) + 3)));
        setEqLevels(heights);
      } else {
        setEqLevels([3, 3, 3, 3]);
      }
      animFrameRef.current = requestAnimationFrame(updateEqualizer);
    };

    animFrameRef.current = requestAnimationFrame(updateEqualizer);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [isPlaying]);

  const handlePlayPause = useCallback(() => {
    if (isPlaying) {
      audioEngine.pause();
      setIsPlaying(false);
    } else {
      audioEngine.start(trackIdx);
      setIsPlaying(true);
    }
  }, [isPlaying, trackIdx]);

  const handleStop = useCallback(() => {
    audioEngine.pause();
    audioEngine.seek(0);
    setIsPlaying(false);
    setCurrentTime(0);
  }, []);

  const handleNext = useCallback(() => {
    setTrackIdx((prev) => (prev + 1) % TRACKS_DATA.length);
  }, []);

  const handlePrev = useCallback(() => {
    setTrackIdx((prev) => (prev - 1 + TRACKS_DATA.length) % TRACKS_DATA.length);
  }, []);

  const handleSeek = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const pct = Math.max(0, Math.min(1, clickX / rect.width));
    const newTime = pct * duration;
    audioEngine.seek(newTime);
    setCurrentTime(newTime);
  };

  const selectTrack = (idx) => {
    if (idx === trackIdx) {
      if (!isPlaying) handlePlayPause();
    } else {
      setTrackIdx(idx);
    }
  };

  const progressPct = duration > 0 ? Math.min(100, (currentTime / duration) * 100) : 0;

  return (
    <div className="music-player-container" id="lofi-widget">
      {/* Top status badge */}
      <div className={`music-status-badge ${isPlaying ? 'playing' : 'paused'}`}>
        <span className="music-status-dot" />
        <span>{isPlaying ? `Playing • ${activeTrack.bpm} BPM` : 'Paused'}</span>
      </div>

      {/* Vinyl record deck */}
      <div className="vinyl-deck">
        <div className={`vinyl-disc ${isPlaying ? 'spinning' : ''}`}>
          <div className="vinyl-groove" />
          <div className="vinyl-label" />
          <div className="vinyl-center" />
        </div>
        <div className={`player-arm ${isPlaying ? 'active' : ''}`} />
      </div>

      {/* Song details */}
      <div className="music-song-info">
        <h4 className="music-song-title">{activeTrack.title}</h4>
        <p className="music-song-artist">{activeTrack.artist}</p>
      </div>

      {/* Progress slider bar */}
      <div 
        className="music-progress-bar-track" 
        onClick={handleSeek}
        aria-label="Seek track"
        role="slider"
        aria-valuenow={progressPct}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div className="music-progress-bar-fill" style={{ width: `${progressPct}%` }} />
      </div>

      {/* Time display */}
      <div className="music-time-row">
        <span>{formatTime(currentTime)}</span>
        <span>{formatTime(duration)}</span>
      </div>

      {/* Main playback action controls */}
      <div className="music-controls-main">
        {/* Previous Button */}
        <button 
          className="music-btn-secondary" 
          onClick={handlePrev}
          title="Previous Track"
          aria-label="Previous Track"
        >
          <SkipBack size={18} color="#222222" fill="#222222" strokeWidth={2} />
        </button>

        {/* PROMINENT START / PAUSE BUTTON */}
        <button 
          id="music-btn-start-pause"
          className={`music-btn-start-pause ${isPlaying ? 'pause-mode' : 'start-mode'}`}
          onClick={handlePlayPause}
          aria-label={isPlaying ? "Pause Track" : "Start Track"}
          title={isPlaying ? "Click to Pause Track" : "Click to Start Track"}
        >
          {isPlaying ? (
            <>
              <Pause size={18} color="#FFFFFF" fill="#FFFFFF" strokeWidth={2} />
              <span style={{ color: '#FFFFFF', fontWeight: 800 }}>PAUSE</span>
            </>
          ) : (
            <>
              <Play size={18} color="#FFFFFF" fill="#FFFFFF" strokeWidth={2} style={{ marginLeft: '2px' }} />
              <span style={{ color: '#FFFFFF', fontWeight: 800 }}>START</span>
            </>
          )}
        </button>

        {/* Stop Button */}
        <button 
          className="music-btn-secondary music-btn-stop" 
          onClick={handleStop}
          title="Stop Track"
          aria-label="Stop Track"
        >
          <Square size={16} color="#D32F2F" fill="#D32F2F" strokeWidth={1} />
        </button>

        {/* Next Button */}
        <button 
          className="music-btn-secondary" 
          onClick={handleNext}
          title="Next Track"
          aria-label="Next Track"
        >
          <SkipForward size={18} color="#222222" fill="#222222" strokeWidth={2} />
        </button>
      </div>

      {/* Track selector chips */}
      <div className="music-track-chips">
        {TRACKS_DATA.map((t, idx) => (
          <button
            key={t.id}
            className={`music-track-chip ${idx === trackIdx ? 'active' : ''}`}
            onClick={() => selectTrack(idx)}
            title={`Play ${t.title}`}
          >
            {t.title}
          </button>
        ))}
      </div>

      {/* Bottom row: Visualizer and Volume slider */}
      <div className="music-bottom-row">
        {/* Realtime Equalizer Visualizer */}
        <div className="music-equalizer" title="Audio Spectrum Visualizer">
          {eqLevels.map((lvl, i) => (
            <div 
              key={i} 
              className="eq-bar" 
              style={{ height: `${lvl}px` }} 
            />
          ))}
        </div>

        {/* Volume controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <button 
            type="button" 
            onClick={() => setIsMuted(!isMuted)}
            style={{ 
              background: 'none', 
              border: 'none', 
              padding: '2px', 
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center'
            }}
            title={isMuted ? "Unmute" : "Mute"}
            aria-label={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted || volume === 0 ? <VolumeX size={15} /> : <Volume2 size={15} />}
          </button>
          <input 
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={isMuted ? 0 : volume}
            onChange={(e) => {
              setVolume(parseFloat(e.target.value));
              if (isMuted) setIsMuted(false);
            }}
            style={{ width: '60px', accentColor: 'var(--header-bg)', cursor: 'pointer' }}
            aria-label="Adjust Volume"
          />
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
