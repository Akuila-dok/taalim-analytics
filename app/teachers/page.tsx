'use client';
import React, { useState, ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';

interface Teacher {
  name: string;
  email: string;
  phone: string;
}

interface Department {
  name: string;
  teachers: Teacher[];
}

const TeacherPage: React.FC = () => {
  const router = useRouter();

  const [departments, setDepartments] = useState<Department[]>([]);
  const [newDepartment, setNewDepartment] = useState<string>('');
  const [newTeachers, setNewTeachers] = useState<Record<string, Teacher>>({});

  const handleAddDepartment = () => {
    if (!newDepartment.trim()) return;
    const exists = departments.some(
      (dept) => dept.name.toLowerCase() === newDepartment.toLowerCase()
    );
    if (exists) {
      alert('Department already exists!');
      return;
    }

    setDepartments((prev) => [
      ...prev,
      { name: newDepartment.trim(), teachers: [] },
    ]);
    setNewDepartment('');
  };

  const handleTeacherInputChange = (
    deptName: string,
    field: keyof Teacher,
    value: string
  ) => {
    setNewTeachers((prev) => ({
      ...prev,
      [deptName]: {
        ...prev[deptName],
        [field]: value,
      },
    }));
  };

  const handleAddTeacher = (deptName: string) => {
    const newTeacher = newTeachers[deptName];
    if (!newTeacher?.name || !newTeacher?.email || !newTeacher?.phone) {
      alert('Please fill in all teacher details.');
      return;
    }

    setDepartments((prev) =>
      prev.map((dept) =>
        dept.name === deptName
          ? { ...dept, teachers: [...dept.teachers, newTeacher] }
          : dept
      )
    );

    setNewTeachers((prev) => ({ ...prev, [deptName]: { name: '', email: '', phone: '' } }));
  };

 return (
  <div className="min-h-screen bg-gradient-to-br from-teal-50 to-white py-6 px-4 sm:px-8">
    {/* Header */}
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-6">
      <h1 className="text-xl sm:text-3xl font-bold text-teal-700">Teachers Page</h1>
      <button
        onClick={() => router.push('/dashboard')}
        className="bg-teal-600 text-white px-3 py-1 text-sm sm:text-base rounded-md hover:bg-teal-700 transition w-full sm:w-auto"
      >
        Back to Dashboard
      </button>
    </div>

    {/* Add Department Section */}
    <div className="mb-6">
      <div className="flex flex-col sm:flex-row gap-2 w-full sm:max-w-lg">
        <input
          type="text"
          placeholder="Add Department"
          value={newDepartment}
          onChange={(e) => setNewDepartment(e.target.value)}
          className="flex-1 px-3 py-1 sm:py-2 text-sm sm:text-base border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 shadow-sm"
        />
        <button
          onClick={handleAddDepartment}
          className="bg-teal-500 text-white px-3 py-1 sm:py-2 text-sm sm:text-base rounded-md hover:bg-teal-600 transition w-full sm:w-auto"
        >
          Add Department
        </button>
      </div>
    </div>

    {/* Departments Table */}
    <div className="space-y-8">
      {departments.map((dept) => (
        <div key={dept.name} className="border border-teal-300 rounded-lg shadow overflow-x-auto bg-white">
          <h2 className="bg-teal-100 px-4 py-2 font-semibold text-base sm:text-lg text-teal-700 border-b border-teal-300">
            {dept.name} Department
          </h2>

          <table className="min-w-full text-sm table-auto">
            <thead className="bg-teal-50 text-teal-700">
              <tr>
                <th className="px-4 py-2 border-r border-teal-200">Name</th>
                <th className="px-4 py-2 border-r border-teal-200">Email</th>
                <th className="px-4 py-2 border-r border-teal-200">Phone</th>
              </tr>
            </thead>
            <tbody>
              {dept.teachers.map((teacher, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-teal-50'}>
                  <td className="px-4 py-2 border-t border-r border-teal-100">{teacher.name}</td>
                  <td className="px-4 py-2 border-t border-r border-teal-100">{teacher.email}</td>
                  <td className="px-4 py-2 border-t border-teal-100">{teacher.phone}</td>
                </tr>
              ))}

              {/* Add New Teacher Row */}
              <tr className="bg-teal-50">
                <td className="px-4 py-2 border-t border-r border-teal-200">
                  <input
                    type="text"
                    placeholder="Name"
                    value={newTeachers[dept.name]?.name || ''}
                    onChange={(e) => handleTeacherInputChange(dept.name, 'name', e.target.value)}
                    className="w-full px-2 py-1 sm:py-1.5 text-sm border border-teal-200 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-400"
                  />
                </td>
                <td className="px-4 py-2 border-t border-r border-teal-200">
                  <input
                    type="email"
                    placeholder="Email"
                    value={newTeachers[dept.name]?.email || ''}
                    onChange={(e) => handleTeacherInputChange(dept.name, 'email', e.target.value)}
                    className="w-full px-2 py-1 sm:py-1.5 text-sm border border-teal-200 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-400"
                  />
                </td>
                <td className="px-4 py-2 border-t border-teal-200 flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                  <input
                    type="text"
                    placeholder="Phone"
                    value={newTeachers[dept.name]?.phone || ''}
                    onChange={(e) => handleTeacherInputChange(dept.name, 'phone', e.target.value)}
                    className="w-full sm:flex-1 px-2 py-1 sm:py-1.5 text-sm border border-teal-200 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-400"
                  />
                  <button
                    onClick={() => handleAddTeacher(dept.name)}
                    className="bg-teal-600 text-white px-3 py-1 sm:py-1.5 text-xs sm:text-sm rounded-md hover:bg-teal-700 transition w-full sm:w-auto"
                  >
                    Add Teacher
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  </div>
);

};

export default TeacherPage;
