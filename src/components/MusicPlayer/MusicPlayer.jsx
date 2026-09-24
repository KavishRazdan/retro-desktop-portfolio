import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipForward, Volume2, Music } from 'lucide-react';
import './MusicPlayer.css';

const TRACKS = [
  { title: 'Synthwave Horizon', artist: 'RetroSynth', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' },
  { title: 'Chiptune Dreams', artist: '8-Bit Hero', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3' },
  { title: 'Lo-Fi Chill Code', artist: 'Caffeine Kid', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3' }
];

export const MusicPlayer = () => {
  const [trackIdx, setTrackIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [progress, setProgress] = useState(0);

  const audioRef = useRef(new Audio(TRACKS[0].url));
  const progressIntervalRef = useRef(null);

  useEffect(() => {
    // Sync volume level
    audioRef.current.volume = volume;
  }, [volume]);

  useEffect(() => {
    // Handle track switches
    const wasPlaying = isPlaying;
    audioRef.current.pause();
    clearInterval(progressIntervalRef.current);

    audioRef.current = new Audio(TRACKS[trackIdx].url);
    audioRef.current.volume = volume;

    if (wasPlaying) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
        startProgressTimer();
      }).catch(() => {
        setIsPlaying(false);
      });
    } else {
      setIsPlaying(false);
      setProgress(0);
    }

    // Auto-advance track on end
    const handleEnded = () => {
      handleNext();
    };
    audioRef.current.addEventListener('ended', handleEnded);

    return () => {
      audioRef.current.pause();
      audioRef.current.removeEventListener('ended', handleEnded);
      clearInterval(progressIntervalRef.current);
    };
  }, [trackIdx]);

  const startProgressTimer = () => {
    clearInterval(progressIntervalRef.current);
    progressIntervalRef.current = setInterval(() => {
      if (audioRef.current.duration) {
        const pct = (audioRef.current.currentTime / audioRef.current.duration) * 100;
        setProgress(pct);
      }
    }, 500);
  };

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
      clearInterval(progressIntervalRef.current);
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
        startProgressTimer();
      }).catch((err) => {
        console.error("Audio playback interrupted:", err);
      });
    }
  };

  const handleNext = () => {
    setTrackIdx((prev) => (prev + 1) % TRACKS.length);
  };

  const handleProgressBarClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const newPct = clickX / width;
    
    if (audioRef.current.duration) {
      audioRef.current.currentTime = newPct * audioRef.current.duration;
      setProgress(newPct * 100);
    }
  };

  const activeTrack = TRACKS[trackIdx];

  return (
    <div className="music-player-container" id="lofi-widget">
      
      {/* Vinyl record player layout */}
      <div className="vinyl-deck">
        <div className={`vinyl-disc ${isPlaying ? 'spinning' : ''}`}>
          <div className="vinyl-groove" />
          <div className="vinyl-label" />
          <div className="vinyl-center" />
        </div>
        {/* Turntable needle/arm */}
        <div className={`player-arm ${isPlaying ? 'active' : ''}`} />
      </div>

      {/* Song details */}
      <div style={{ textAlign: 'center', marginTop: '12px' }}>
        <h4 style={{ fontSize: '15px', fontWeight: 'bold', margin: '0 0 2px 0' }}>{activeTrack.title}</h4>
        <p style={{ fontSize: '12px', color: '#666', margin: 0 }}>{activeTrack.artist}</p>
      </div>

      {/* Progress slider bar */}
      <div 
        className="music-progress-bar-track" 
        onClick={handleProgressBarClick}
        aria-label="Seek track"
        role="slider"
        aria-valuenow={progress}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div className="music-progress-bar-fill" style={{ width: `${progress}%` }} />
      </div>

      {/* Controls row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginTop: '10px' }}>
        {/* Equalizer animation bar */}
        <div className="music-equalizer">
          <div className={`eq-bar ${isPlaying ? 'anim' : ''}`} style={{ height: '18px' }} />
          <div className={`eq-bar ${isPlaying ? 'anim' : ''}`} style={{ height: '24px', animationDelay: '0.15s' }} />
          <div className={`eq-bar ${isPlaying ? 'anim' : ''}`} style={{ height: '14px', animationDelay: '0.3s' }} />
          <div className={`eq-bar ${isPlaying ? 'anim' : ''}`} style={{ height: '20px', animationDelay: '0.05s' }} />
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: '8px' }}>
          <button 
            onClick={handlePlayPause}
            style={{ 
              width: '36px', 
              height: '36px', 
              padding: 0, 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center',
              backgroundColor: 'var(--accent-orange)',
              borderColor: 'var(--border-color)'
            }}
            aria-label={isPlaying ? "Pause Track" : "Play Track"}
          >
            {isPlaying ? <Pause size={16} style={{ color: '#FFF' }} /> : <Play size={16} style={{ color: '#FFF' }} />}
          </button>
          
          <button 
            onClick={handleNext}
            style={{ 
              width: '36px', 
              height: '36px', 
              padding: 0, 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center' 
            }}
            aria-label="Next Track"
          >
            <SkipForward size={16} />
          </button>
        </div>

        {/* Volume controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Volume2 size={14} />
          <input 
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={volume}
            onChange={(e) => setVolume(parseFloat(e.target.value))}
            style={{ width: '50px', accentColor: 'var(--header-bg)', cursor: 'pointer' }}
            aria-label="Adjust Volume"
          />
        </div>
      </div>

    </div>
  );
};

export default MusicPlayer;
