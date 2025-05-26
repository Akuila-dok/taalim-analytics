'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  FaChalkboardTeacher,
  FaUserGraduate,
  FaUsers,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaBars,
  FaTimes,
} from 'react-icons/fa';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-teal-900 text-white font-ubuntu shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <Link href="/" className="text-xl font-bold">
          Taalim Analytics
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link href="/" className="hover:text-teal-300 transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-teal-300 transition">
            About
          </Link>
          <Link href="/news" className="hover:text-teal-300 transition">
            News
          </Link>
          <Link href="/contact" className="hover:text-teal-300 transition">
            Contact Us
          </Link>
          <Link
            href="/auth/login"
            className="bg-white text-teal-900 px-4 py-1 rounded-full font-semibold hover:bg-teal-100 transition"
          >
            Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-teal-900 px-4 pb-4  space-y-4">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="block hover:text-teal-300 transition"
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={() => setMenuOpen(false)}
            className="block hover:text-teal-300 transition"
          >
            About
          </Link>
          <Link
            href="/news"
            onClick={() => setMenuOpen(false)}
            className="block hover:text-teal-300 transition"
          >
            News
          </Link>
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="block hover:text-teal-300 transition"
          >
            Contact Us
          </Link>
          <Link
            href="/auth/login"
            onClick={() => setMenuOpen(false)}
            className="block bg-white text-teal-900 px-4 py-1 rounded-full font-semibold hover:bg-teal-100 transition text-center"
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-teal-900 font-ubuntu text-white mt-16 w-full">
      {/* Top border line */}
      <div className="border-t border-white opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Quick Links and Socials container */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-6 md:space-y-0">
          {/* Quick Links */}
          <nav>
            <ul className="flex space-x-6 justify-center md:justify-start">
              <li>
                <Link href="/" className="hover:text-teal-300 transition">
                  Home
                </Link>
              </li>
              <li>
                <a href="/about" className="hover:text-teal-300 transition">
                  About
                </a>
              </li>
              <li>
                <a href="/news" className="hover:text-teal-300 transition">
                  News
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-teal-300 transition">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/auth/login" className="hover:text-teal-300 transition">
                  Login
                </a>
              </li>
            </ul>
          </nav>

          {/* Social Media Links */}
          <div className="flex space-x-6 justify-center md:justify-end">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-teal-300 transition"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-teal-300 transition"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-teal-300 transition"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-teal-300 transition"
            >
              <FaLinkedinIn size={24} />
            </a>
          </div>
        </div>

        {/* Divider line */}
        <div className="border-t border-white opacity-40 mt-6"></div>

        {/* Copyright */}
        <div className="mt-6 text-center text-sm text-white opacity-90">
          &copy; {new Date().getFullYear()} Taalim Analytics. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default function HomePage() {
  const roles = [
    {
      title: 'Teacher',
      description: 'Manage students, input results, and generate performance reports.',
      icon: <FaChalkboardTeacher className="inline-block mr-2 text-teal-900" size={24} />,
    },
    {
      title: 'Student',
      description: 'Track your academic progress, view scores, and receive feedback.',
      icon: <FaUserGraduate className="inline-block mr-2 text-teal-900" size={24} />,
    },
    {
      title: 'Parent',
      description: 'Monitor your child’s performance and communicate with teachers.',
      icon: <FaUsers className="inline-block mr-2 text-teal-900" size={24} />,
    },
  ];

  return (
    <>
      <Navbar />
      <main className="flex font-ubuntu flex-col items-center justify-center min-h-screen bg-gradient-to-br from-teal-100 via-teal-200 to-teal-300 text-teal-900 px-4 sm:px-6 lg:px-8 py-24">
        {/* Added extra top padding to avoid content under fixed navbar */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="w-full max-w-4xl text-center"
        >
          <motion.h1
            variants={fadeIn}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-teal-900 font-ubuntu"
          >
            Welcome to <span className="text-teal-900 font-semibold">Taalim Analytics</span>
          </motion.h1>

          <motion.p variants={fadeIn} className="text-md sm:text-lg md:text-xl text-teal-900 mb-8">
            A smart analytics platform for Teachers, Students, and Parents to track academic performance,
            view progress reports, and communicate.
          </motion.p>

          <motion.div
            variants={fadeIn}
            className="flex flex-col sm:flex-row justify-center items-center sm:space-x-6 space-y-3 sm:space-y-0 mb-10"
          >
            <a
              href="/auth/login"
              className="w-full sm:w-auto bg-teal-900 text-white px-6 py-2 rounded-full shadow hover:scale-105 transform transition-all duration-300 text-center"
            >
              Login
            </a>
            <a
              href="/auth/register"
              className="w-full sm:w-auto bg-white text-teal-900 border border-teal-900 px-6 py-2 rounded-full shadow hover:bg-teal-100 hover:scale-105 transform transition-all duration-300 text-center"
            >
              Register
            </a>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left"
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            {roles.map((role, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-white p-6 shadow-md rounded-lg hover:shadow-xl transform transition-all duration-300"
              >
                <h3 className="font-semibold text-lg mb-2 text-teal-900 flex items-center">
                  {role.icon}
                  {role.title}
                </h3>
                <p className="text-teal-900">{role.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </main>
      <Footer />
    </>
  );
}
