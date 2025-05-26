'use client';

import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';
import { Calendar } from '@/components/ui/calendar';
import {
  UserCheck, BookOpen, BarChart2, Percent,
  Users, LayoutGrid,
} from 'lucide-react';
import { motion } from 'framer-motion';

// Fix for motion HTML elements
const MotionSection = motion('section');
const MotionImg = motion('img');
const MotionDiv = motion('div');

export default function DashboardPage() {
  return (
    <div className="flex font-ubuntu flex-col md:flex-row bg-teal-50 min-h-screen">
      <Sidebar />

      <div className="flex-1 md:ml-64">
        <Navbar />

        {/* 💠 Teal frame for main content */}
        <div className="mb-10 md:mb-0 border border-teal-500 bg-teal-500 p-3">
          <main className="w-full h-full p-3  px-4 md:px-6 pb-10 rounded-xl bg-white shadow-md">

            {/* ✅ User Welcome Section with Framer Motion */}
            <MotionSection
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative overflow-hidden rounded-xl shadow-lg mb-8 border border-teal-200 bg-white"
            >
              {/* Animated Background */}
              <MotionDiv
                initial={{ backgroundPosition: '0% 50%' }}
                animate={{ backgroundPosition: '100% 50%' }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 bg-gradient-to-r from-teal-900  to-teal-600 bg-[length:200%_200%] opacity-20 z-0"
              />

              {/* Main Content */}
              <div className="relative z-10 p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
                {/* Profile Image and Welcome Message */}
                <div className="flex items-center gap-4">
                  <MotionImg
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    src="/avatar.jpg"
                    alt="User Profile"
                    className="w-16 h-16 rounded-full border-2 border-teal-500 shadow-md"
                  />
                  <div>
                    <h1 className="text-2xl sm:text-3xl font-bold text-teal-800">Welcome Ustaz Dok</h1>
                    <p className="text-gray-600 text-sm mt-1">
                      Manage the exams efficiently through your mobile device.
                    </p>
                  </div>
                </div>

                {/* Badge or Role */}
                <MotionDiv
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="bg-teal-100 text-teal-800 text-sm px-4 py-2 rounded-full font-semibold shadow-inner"
                >
                  Exam Manager Dashboard
                </MotionDiv>
              </div>
            </MotionSection>

            {/* Calendar + Metrics Side-by-Side */}
            <section className="flex flex-col lg:flex-row gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md w-full lg:max-w-sm">
                <h2 className="text-xl font-semibold text-teal-800 mb-4">Academic Calendar</h2>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <Calendar />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 flex-1">
                {[
                  { title: 'Teachers', value: '25', icon: <UserCheck className="w-6 h-6 text-teal-600" /> },
                  { title: 'Students', value: '500', icon: <Users className="w-6 h-6 text-teal-600" /> },
                  { title: 'Streams', value: '4', icon: <LayoutGrid className="w-6 h-6 text-teal-600" /> },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-md border-l-4 border-teal-600 hover:shadow-lg transition flex items-center gap-4"
                  >
                    <div>{item.icon}</div>
                    <div>
                      <h2 className="text-sm font-medium text-gray-500 mb-1">{item.title}</h2>
                      <p className="text-3xl font-bold text-teal-700">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Form Cards */}
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {['Form 1', 'Form 2', 'Form 3', 'Form 4'].map((form, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden cursor-pointer bg-gradient-to-br from-teal-300 to-teal-200 p-[2px] rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-100 to-white opacity-0 group-hover:opacity-100 transition duration-300 blur-md rounded-2xl z-0"></div>
                  <div className="relative rounded-2xl p-6 z-10 h-full w-full transition group-hover:bg-teal-300">
                    <div className="flex items-center justify-between mb-4 bg-white p-2 rounded-md shadow-sm">
                      <h3 className="text-xl font-bold text-teal-900 group-hover:text-teal-950 transition">
                        {form}
                      </h3>
                      <BookOpen className="text-teal-700 group-hover:text-teal-900 transition" size={24} />
                    </div>

                    <ul className="space-y-3 text-sm font-medium text-teal-900">
                      <li className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <BarChart2 className="text-teal-800" size={18} />
                          <span className="px-3 py-1 bg-white text-teal-900 border border-teal-400 rounded-md shadow-sm">
                            Term: 1
                          </span>
                        </div>
                      </li>
                      <li className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <BarChart2 className="text-teal-800" size={18} />
                          <span className="px-3 py-1 bg-white text-yellow-800 border border-yellow-400 rounded-md shadow-sm">
                            Mean Points: 8.5
                          </span>
                        </div>
                      </li>
                      <li className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Percent className="text-teal-800" size={18} />
                          <span className="px-3 py-1 bg-white text-purple-800 border border-purple-400 rounded-md shadow-sm">
                            Mean Marks: 75%
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              ))}
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
