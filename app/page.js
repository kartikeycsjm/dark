'use client';

import { useTheme } from './context/ThemeContext';
import Link from 'next/link';

export default function Home() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <h1 className="text-3xl font-bold">Home Page</h1>
      <p>{isDark ? 'Dark Mode is ON' : 'Light Mode is ON'}</p>
      <button
        onClick={toggleTheme}
        className="mt-4 px-4 py-2 bg-blue-500 dark:bg-blue-700 text-white rounded"
      >
        Toggle Dark Mode
      </button>
      <Link href='/about'>About</Link>
    </div>
  );
}
