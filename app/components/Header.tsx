'use client';

import { useState } from "react";
import { MoreVertical } from "lucide-react";

export default function Header({ toggleSidebar }: { toggleSidebar: () => void }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex justify-between items-center bg-white shadow-md px-6 py-4 rounded-lg relative">
      <div className="flex items-center gap-4">
        {/* Mobile sidebar toggle */}
        <button className="md:hidden" onClick={toggleSidebar}>
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <div className="text-lg font-semibold text-gray-700">Totally Healthy</div>
      </div>

      <div className="hidden md:flex items-center gap-4 text-gray-600">
        <select className="border border-gray-300 rounded px-2 py-1 text-sm">
          <option>Spanish</option>
          <option>English</option>
        </select>
        <span className="text-sm">Hello 👋</span>
        <div className="w-8 h-8 rounded-full bg-blue-200 flex items-center justify-center text-sm font-medium text-white">
          A
        </div>
      </div>

      {/* Mobile 3-dot menu */}
      <div className="md:hidden relative">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          <MoreVertical className="w-6 h-6 text-gray-600" />
        </button>
        {menuOpen && (
          <div className="absolute right-0 mt-2 w-40 bg-white rounded shadow-md p-2 z-50">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-blue-200 flex items-center justify-center text-sm font-medium text-white">A</div>
              <span className="text-sm">Admin</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
