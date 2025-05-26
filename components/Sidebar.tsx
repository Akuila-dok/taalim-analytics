'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import {
  Menu,
  Home,
  User,
  Users,
  Layers,
  FileText,
  MessageCircle,
  Printer,
  BookOpen,
} from 'lucide-react';

export default function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLUListElement>(null);

  const mainItems = [
    { href: '/dashboard', label: 'Dashboard', icon: <Home className="w-5 h-5" /> },
    { href: '/teachers', label: 'Teachers', icon: <User className="w-5 h-5" /> },
    { href: '/students', label: 'Students', icon: <Users className="w-5 h-5" /> },
    { href: '/streams', label: 'Streams', icon: <Layers className="w-5 h-5" /> },
  ];

  const extraItems = [
    { href: '/exams', label: 'Exams', icon: <FileText className="w-5 h-5 mr-2" /> },
    { href: '/messages', label: 'Messages', icon: <MessageCircle className="w-5 h-5 mr-2" /> },
    { href: '/printouts', label: 'Printouts', icon: <Printer className="w-5 h-5 mr-2" /> },
    { href: '/classes', label: 'Classes', icon: <BookOpen className="w-5 h-5 mr-2" /> },
  ];


  // Close dropdown menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !(event.target as HTMLElement).closest('#menu-button')
      ) {
        setMenuOpen(false);
      }
    }
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  return (
    <>
      {/* Sidebar (bottom on mobile, side on desktop) */}
      <aside className="w-full  md:w-64 bg-teal-500 text-white h-16 md:h-screen fixed bottom-0 mr-2 pr-2 md:top-0 md:left-0 z-10">
        {/* Desktop title */}
        <div className="hidden md:block p-6 border-b border-teal-500">
          <h2 className="text-xl font-bold text-white">TAALIM ANALYTICS</h2>
        </div>

        {/* Navigation */}
        <nav className="md:mt-6">
          <ul className="flex mt-2 md:flex-col gap-4 md:gap-0 justify-around md:justify-start items-center md:items-start px-2 md:px-0 h-full">
            {/* Main nav items */}
            {mainItems.map(({ href, label, icon }) => (
              <li
                key={label}
                className="md:px-6 md:py-3 hover:bg-teal-700 rounded md:rounded-none"
              >
                <Link
                  href={href}
                  className="flex flex-col md:flex-row items-center text-xs md:text-sm"
                >
                  <span className="mb-1 md:mb-0 md:mr-2">{icon}</span>
                  <span className="hidden md:inline">{label}</span>
                  <span className="md:hidden text-[10px]">{label}</span>
                </Link>
              </li>
            ))}

            {/* Hamburger menu icon (only on mobile) */}
            <li className="md:hidden relative">
              <button
                id="menu-button"
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-1 rounded hover:bg-teal-700"
                aria-label="Toggle menu"
                type="button"
              >
                <Menu className="w-5 h-5 text-white" />
              </button>

              {/* Dropdown menu */}
              {menuOpen && (
                <ul
                  ref={menuRef}
                  className="absolute bottom-12 left-1/2 transform -translate-x-1/2 bg-teal-700 rounded shadow-lg w-52 z-20"
                >
                  {extraItems.map(({ href, label, icon }) => (
                    <li key={label} className="hover:bg-teal-600">
                      <Link
                        href={href}
                        className="flex items-center px-4 py-2 text-sm"
                        onClick={() => setMenuOpen(false)}
                      >
                        {icon}
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* Desktop-only extra items */}
            <div className="hidden md:block w-full">
              <ul>
                {extraItems.map(({ href, label, icon }) => (
                  <li
                    key={label}
                    className="px-6 py-3 hover:bg-teal-700"
                  >
                    <Link
                      href={href}
                      className="flex items-center text-sm font-medium"
                    >
                      {icon}
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </ul>
        </nav>
      </aside>
    </>
  );
}
