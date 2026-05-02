/**
 * Figma Make / Vite entry point.
 *
 * This file is ONLY used by the Vite dev server inside Figma Make for live
 * preview.  The production app is served by Next.js from the /app directory
 * (App Router).  Navigation here is handled by a lightweight hash-based
 * router that mirrors the Next.js file-system routes 1:1.
 *
 * DO NOT add react-router or next/* imports here.
 */

import { useContext } from 'react';
import { RouterProvider, RouterContext } from './lib/router';
import { Index } from './pages/Index';
import { LoginDesktop } from './pages/LoginDesktop';
import { LoginMobile } from './pages/LoginMobile';
import { Dashboard } from './pages/Dashboard';
import { Courses } from './pages/Courses';
import { Course } from './pages/Course';
import { Lesson } from './pages/Lesson';
import { Certificate } from './pages/Certificate';
import { Subscription } from './pages/Subscription';
import { Profile } from './pages/Profile';

function AppContent() {
  const { currentPath } = useContext(RouterContext);

  /* ── route matching ─────────────────────────────────────────────────── */
  if (currentPath === '/' || currentPath === '') return <Index />;
  if (currentPath === '/login-desktop') return <LoginDesktop />;
  if (currentPath === '/login-mobile') return <LoginMobile />;
  if (currentPath === '/dashboard') return <Dashboard />;
  if (currentPath === '/courses') return <Courses />;
  if (currentPath.startsWith('/course/')) return <Course />;
  if (currentPath.startsWith('/lesson/')) return <Lesson />;
  if (currentPath === '/certificate') return <Certificate />;
  if (currentPath === '/subscription') return <Subscription />;
  if (currentPath === '/profile') return <Profile />;

  /* fallback → index (device-detection redirect) */
  return <Index />;
}

export default function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}
