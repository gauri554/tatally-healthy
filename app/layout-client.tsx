'use client';

import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';

export default function LayoutClient({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <main className="flex w-full min-h-screen relative">
      {/* Sidebar */}
      <div
        className={`
          fixed top-0 left-0 h-screen z-50 transition-transform duration-300
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0 md:relative md:h-auto
        `}
      >
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      </div>

      {/* Content Area with overlay logic */}
      <div className="flex-1 w-full">
        {/* Overlay only behind the sidebar on mobile */}
        {sidebarOpen && (
          <div
            className="fixed top-0 left-0 w-64 h-full z-40 bg-black bg-opacity-50 md:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        <div className="relative z-30 p-4">
          <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
          {children}
        </div>
      </div>
    </main>
  );
}
