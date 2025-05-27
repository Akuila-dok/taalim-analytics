'use client';
import React, { useState, ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';

type ExamType = {
  label: string;
  maxMarks: number;
};

type Student = {
  id: number;
  name: string;
  admissionNumber: string;
  marks: string;
};

const classOptions: string[] = ['Form 1A', 'Form 1B', 'Form 1C', 'Form 1D', 'Form 2A', 'Form 2B', 'Form 2C', 'Form 2D', 'Form 3A', 'Form 3B', 'Form 3C', 'Form 3D', 'Form 4A', 'Form 4B', 'Form 4C','Form 4D'];
const examTypes: ExamType[] = [
  { label: 'CAT 1', maxMarks: 30 },
  { label: 'CAT 2', maxMarks: 30 },
  { label: 'Exam', maxMarks: 70 },
];

const mockStudents: Student[] = [
  { id: 1, name: 'John Doe', admissionNumber: 'ADM001', marks: '' },
  { id: 2, name: 'Jane Smith', admissionNumber: 'ADM002', marks: '' },
  { id: 3, name: 'Michael Brown', admissionNumber: 'ADM003', marks: '' },
];

const ExamPage: React.FC = () => {
  const [selectedClass, setSelectedClass] = useState<string>('');
  const [selectedExam, setSelectedExam] = useState<string>('');
  const [students, setStudents] = useState<Student[]>(mockStudents);
  const router = useRouter();

  const handleMarksChange = (id: number, value: string) => {
    setStudents((prev) =>
      prev.map((student) =>
        student.id === id ? { ...student, marks: value } : student
      )
    );
  };

  const handleUpdate = () => {
    alert('Marks submitted and grades calculated!');
    // Later integrate with backend
  };

  return (
    <div className="min-h-screen font-ubuntu bg-gradient-to-br from-teal-50 via-white to-teal-100 py-10 px-4">
      <div className="max-w-6xl mx-auto shadow-lg rounded-xl p-8 bg-white border border-teal-200">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="bg-teal-100 text-teal-800 text-sm px-4 py-2 rounded-full font-semibold shadow-inner">
            Enter Exam Marks
          </h1>
          <button
            onClick={() => router.push('/dashboard')}
            className="bg-teal-700 text-white border border-teal-500 px-4 py-2 rounded-md hover:bg-teal-100 transition"
          >
            ← Back Home
          </button>
        </div>

        {/* Selection Fields */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <select
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
            className="w-full sm:w-1/2 px-3 py-2 border border-teal-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-400 bg-white"
          >
            <option value="">Select Class</option>
            {classOptions.map((cls) => (
              <option key={cls} value={cls}>
                {cls}
              </option>
            ))}
          </select>

          <select
            value={selectedExam}
            onChange={(e) => setSelectedExam(e.target.value)}
            className="w-full sm:w-1/2 px-3 py-2 border border-teal-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-400 bg-white"
          >
            <option value="">Select Exam Type</option>
            {examTypes.map((exam) => (
              <option key={exam.label} value={exam.label}>
                {exam.label}
              </option>
            ))}
          </select>
        </div>

        {/* Table Section */}
        <div className="overflow-x-auto border border-teal-300 rounded-lg bg-white shadow-sm">
          <table className="min-w-full text-sm text-left border-collapse">
            <thead className="bg-teal-100 text-teal-800">
              <tr>
                <th className="px-4 py-2 border-r border-teal-300">#</th>
                <th className="px-4 py-2 border-r border-teal-300">Admission No.</th>
                <th className="px-4 py-2 border-r border-teal-300">Student Name</th>
                <th className="px-4 py-2 border-r border-teal-300">Marks</th>
                <th className="px-4 py-2 text-center">Grade (Preview)</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => {
                const max = examTypes.find((e) => e.label === selectedExam)?.maxMarks || 0;
                const numericMark = parseFloat(student.marks);
                const percent = !isNaN(numericMark) ? (numericMark / max) * 100 : null;

                const grade =
                  percent === null
                    ? '-'
                    : percent < 30
                    ? 'E'
                    : percent < 50
                    ? 'D'
                    : percent < 60
                    ? 'C'
                    : percent < 70
                    ? 'B'
                    : 'A';

                return (
                  <tr
                    key={student.id}
                    className={index % 2 === 0 ? 'bg-white' : 'bg-teal-50'}
                  >
                    <td className="px-4 py-2 border-t border-teal-200 border-r">{index + 1}</td>
                    <td className="px-4 py-2 border-t border-teal-200 border-r">
                      {student.admissionNumber}
                    </td>
                    <td className="px-4 py-2 border-t border-teal-200 border-r">{student.name}</td>
                    <td className="px-4 py-2 border-t border-teal-200 border-r">
                      <input
                        type="number"
                        placeholder="0"
                        value={student.marks}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                          handleMarksChange(student.id, e.target.value)
                        }
                        max={max}
                        className="w-full px-2 py-1 border border-teal-200 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-400"
                      />
                    </td>
                    <td className="px-4 py-2 border-t border-teal-200 text-center font-semibold">
                      {grade}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Submit Button */}
        <div className="mt-8 text-right">
          <button
            onClick={handleUpdate}
            className="bg-teal-600 text-white px-6 py-2 rounded-md hover:bg-teal-700 transition"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExamPage;
