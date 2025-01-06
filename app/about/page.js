'use client';

import { useTheme } from '../context/ThemeContext';

export default function About() {
  const { isDark } = useTheme();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <h1 className="text-3xl font-bold">About Page</h1>
      <p>{isDark ? 'Viewing in Dark Mode' : 'Viewing in Light Mode'}</p>
    </div>
  );
}
