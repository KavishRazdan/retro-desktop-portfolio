import React, { lazy, Suspense } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useWindowManager } from '../../context/WindowContext';
import { Window } from './Window';

// Lazy load content components for performance code splitting
const ProfileContent = lazy(() => import('../Profile/ProfileContent'));
const ProjectsContent = lazy(() => import('../Projects/ProjectsContent'));
const SkillsContent = lazy(() => import('../Skills/SkillsContent'));
const EducationContent = lazy(() => import('../Education/EducationContent'));
const ExperienceContent = lazy(() => import('../Experience/ExperienceContent'));
const ContactContent = lazy(() => import('../Contact/ContactContent'));
const ResumeContent = lazy(() => import('../Resume/ResumeContent'));
const TerminalContent = lazy(() => import('../Terminal/Terminal'));
const AchievementsContent = lazy(() => import('../Achievements/Achievements'));
const FunFactsContent = lazy(() => import('../FunFacts/FunFacts'));
const NowPlayingContent = lazy(() => import('../MusicPlayer/MusicPlayer'));
const TimelineContent = lazy(() => import('../Timeline/Timeline'));

const LoadingFallback = () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', minHeight: '180px', gap: '12px' }}>
    <div style={{ fontSize: '24px', animation: 'spin 1s linear infinite' }}>⌛</div>
    <div style={{ fontStyle: 'italic', fontSize: '13px', fontWeight: 'bold' }}>Loading retro module...</div>
  </div>
);

export const WindowManager = () => {
  const { windows } = useWindowManager();

  return (
    <AnimatePresence>
      {/* 1. Profile Window */}
      {windows.profile.isOpen && (
        <Window id="profile">
          <Suspense fallback={<LoadingFallback />}>
            <ProfileContent />
          </Suspense>
        </Window>
      )}

      {/* 2. Projects Window */}
      {windows.projects.isOpen && (
        <Window id="projects">
          <Suspense fallback={<LoadingFallback />}>
            <ProjectsContent />
          </Suspense>
        </Window>
      )}

      {/* 3. Skills Window */}
      {windows.skills.isOpen && (
        <Window id="skills">
          <Suspense fallback={<LoadingFallback />}>
            <SkillsContent />
          </Suspense>
        </Window>
      )}

      {/* 4. Education Window */}
      {windows.education.isOpen && (
        <Window id="education">
          <Suspense fallback={<LoadingFallback />}>
            <EducationContent />
          </Suspense>
        </Window>
      )}

      {/* 5. Experience Window */}
      {windows.experience.isOpen && (
        <Window id="experience">
          <Suspense fallback={<LoadingFallback />}>
            <ExperienceContent />
          </Suspense>
        </Window>
      )}

      {/* 7. Contact Window */}
      {windows.contact.isOpen && (
        <Window id="contact">
          <Suspense fallback={<LoadingFallback />}>
            <ContactContent />
          </Suspense>
        </Window>
      )}

      {/* 8. Resume Window */}
      {windows.resume.isOpen && (
        <Window id="resume">
          <Suspense fallback={<LoadingFallback />}>
            <ResumeContent />
          </Suspense>
        </Window>
      )}

      {/* 9. Terminal Window */}
      {windows.terminal.isOpen && (
        <Window id="terminal">
          <Suspense fallback={<LoadingFallback />}>
            <TerminalContent />
          </Suspense>
        </Window>
      )}

      {/* 10. Achievements Window */}
      {windows.achievements.isOpen && (
        <Window id="achievements">
          <Suspense fallback={<LoadingFallback />}>
            <AchievementsContent />
          </Suspense>
        </Window>
      )}

      {/* 11. FunFacts Window */}
      {windows.funfacts.isOpen && (
        <Window id="funfacts">
          <Suspense fallback={<LoadingFallback />}>
            <FunFactsContent />
          </Suspense>
        </Window>
      )}

      {/* 12. NowPlaying Window */}
      {windows.music.isOpen && (
        <Window id="music">
          <Suspense fallback={<LoadingFallback />}>
            <NowPlayingContent />
          </Suspense>
        </Window>
      )}

      {/* 13. Timeline Window */}
      {windows.timeline.isOpen && (
        <Window id="timeline">
          <Suspense fallback={<LoadingFallback />}>
            <TimelineContent />
          </Suspense>
        </Window>
      )}
    </AnimatePresence>
  );
};

export default WindowManager;
