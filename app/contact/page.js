'use client';

import { useTheme } from '../context/ThemeContext';

export default function Contact() {
  const { isDark } = useTheme();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <h1 className="text-3xl font-bold">Contact Us</h1>
      <p>{isDark ? 'Dark Mode Activated' : 'Light Mode Activated'}</p>
    </div>
  );
}
