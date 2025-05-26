'use client';

import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  const [language, setLanguage] = useState('EN');
  const unreadMessages = 3;

  return (
    <nav className="bg-teal-500 p-4 flex justify-between items-center sticky top-0 z-50 w-full">
      {/* Logo */}
      <div className="text-xl font-bold text-white">TAALIM ANALYTICS</div>

      {/* Search bar */}
      <div className="hidden md:flex items-center w-1/3 mx-4">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-3 py-1 rounded-md text-sm focus:outline-none"
        />
      </div>

      {/* Right-side controls */}
      <div className="flex items-center gap-4">
        {/* Language setting */}
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="text-sm rounded-md px-2 py-1 bg-white text-teal-800 focus:outline-none"
        >
          <option value="EN">EN</option>
          <option value="FR">FR</option>
          <option value="AR">AR</option>
        </select>

        {/* Message icon with badge */}
        <div className="relative cursor-pointer">
          <MessageCircle className="w-6 h-6 text-white" />
          {unreadMessages > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs px-1.5 py-0.5 rounded-full">
              {unreadMessages}
            </span>
          )}
        </div>

        {/* Profile section */}
        <div className="flex items-center gap-2">
          <Image
            src="/avatar.jpg" // replace with actual user avatar URL
            alt="Profile"
            width={32}
            height={32}
            className="rounded-full"
          />
          <span className="text-white text-sm font-medium hidden sm:inline">Dok</span>
        </div>
      </div>
    </nav>
  );
}
