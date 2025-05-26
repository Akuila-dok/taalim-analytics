'use client';

import React, { useState } from 'react';
import { Plus, Trash2, ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import clsx from 'clsx';

const initialStudent = {
  stream: '',
  class: '',
  admissionNumber: '',
  name: '',
};

export default function StudentPage() {
  const [students, setStudents] = useState([initialStudent]);
  const router = useRouter();

  const handleAddStudent = () => {
    setStudents([...students, initialStudent]);
  };

  const handleDeleteStudent = (index: number) => {
    const updated = students.filter((_, i) => i !== index);
    setStudents(updated);
  };

  const handleInputChange = (
    index: number,
    field: string,
    value: string
  ) => {
    const updated = [...students];
    updated[index] = { ...updated[index], [field]: value };
    setStudents(updated);
  };

  return (
    <div className="min-h-screen bg-teal-50 p-4 sm:p-6 font-ubuntu">
      <div className="max-w-6xl mx-auto">

        {/* Back Home Button */}
        <div className="mb-4 flex justify-start">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push('/dashboard')}
            className="flex items-center gap-2 text-sm sm:text-base text-white bg-teal-600 hover:bg-teal-700 px-4 py-2 rounded-md shadow-md"
          >
            <ArrowLeft size={18} />
            Back Home
          </motion.button>
        </div>

        {/* Page Title */}
        <h1 className="text-xl sm:text-2xl font-bold text-teal-800 mb-4 text-center">
          🎓 Student Registration Panel
        </h1>

        {/* Table */}
        <div className="overflow-x-auto rounded-xl shadow-md border border-teal-300 bg-white">
          <table className="min-w-full text-sm sm:text-base text-left border-collapse">
            <thead className="bg-teal-100 text-teal-800 border-b border-teal-300">
              <tr>
                <th className="px-3 py-2 border-r border-teal-300">#</th>
                <th className="px-3 py-2 border-r border-teal-300">Stream</th>
                <th className="px-3 py-2 border-r border-teal-300">Class</th>
                <th className="px-3 py-2 border-r border-teal-300">Admission No.</th>
                <th className="px-3 py-2 border-r border-teal-300">Student Name</th>
                <th className="px-3 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr
                  key={index}
                  className={clsx(
                    'hover:bg-teal-50 transition',
                    index % 2 === 0 ? 'bg-white' : 'bg-teal-50'
                  )}
                >
                  <td className="border-t border-teal-200 px-3 py-2 border-r">{index + 1}</td>
                  <td className="border-t border-teal-200 px-3 py-2 border-r">
                    <input
                      type="text"
                      placeholder="Form 1"
                      value={student.stream}
                      onChange={(e) =>
                        handleInputChange(index, 'stream', e.target.value)
                      }
                      className="w-full px-2 py-1 border border-teal-200 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-400"
                    />
                  </td>
                  <td className="border-t border-teal-200 px-3 py-2 border-r">
                    <input
                      type="text"
                      placeholder="Form 1A"
                      value={student.class}
                      onChange={(e) =>
                        handleInputChange(index, 'class', e.target.value)
                      }
                      className="w-full px-2 py-1 border border-teal-200 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-400"
                    />
                  </td>
                  <td className="border-t border-teal-200 px-3 py-2 border-r">
                    <input
                      type="text"
                      placeholder="ADM1234"
                      value={student.admissionNumber}
                      onChange={(e) =>
                        handleInputChange(index, 'admissionNumber', e.target.value)
                      }
                      className="w-full px-2 py-1 border border-teal-200 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-400"
                    />
                  </td>
                  <td className="border-t border-teal-200 px-3 py-2 border-r">
                    <input
                      type="text"
                      placeholder="John Doe"
                      value={student.name}
                      onChange={(e) =>
                        handleInputChange(index, 'name', e.target.value)
                      }
                      className="w-full px-2 py-1 border border-teal-200 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-400"
                    />
                  </td>
                  <td className="border-t border-teal-200 px-3 py-2">
                    <button
                      onClick={() => handleDeleteStudent(index)}
                      className="text-red-500 hover:text-red-700"
                      title="Remove student"
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
              {/* Add Row Button */}
              <tr>
                <td colSpan={6} className="text-center py-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleAddStudent}
                    className="inline-flex items-center gap-2 text-teal-700 bg-teal-100 px-4 py-2 rounded-md font-semibold hover:bg-teal-200 transition"
                  >
                    <Plus size={18} />
                    Add Student
                  </motion.button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
