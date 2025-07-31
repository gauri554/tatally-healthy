'use client';

import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';

export default function LayoutClient({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* Sidebar overlay for mobile */}
      <div className="md:hidden">
        {sidebarOpen && (
          <div
            className="fixed inset-0 z-40 bg-black bg-opacity-50 "
            onClick={() => setSidebarOpen(false)}
          />
        )}
      </div>

      <main className="flex w-full  min-h-screen relative">
        {/* Sidebar */}
        <div className={`z-50 fixed md:relative ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300`}>
          <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        </div>

        {/* Content Area */}
        <div className="flex-1 p-4 w-full">
          <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
          {children}
        </div>
      </main>
    </>
  );
} 