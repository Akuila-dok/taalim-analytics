import React from 'react';

type Teacher = {
  id: number;
  name: string;
  subject: string;
  email: string;
  phone: string;
  bio: string;
};

type TeacherModalProps = {
  teacher: Teacher;
  onClose: () => void;
};

export const TeacherModal: React.FC<TeacherModalProps> = ({ teacher, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center">
      <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-xl relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-xl"
        >
          ×
        </button>
        <h2 className="text-2xl font-bold text-blue-700 mb-2">{teacher.name}</h2>
        <p className="text-sm text-gray-600 mb-1">Subject: {teacher.subject}</p>
        <p className="text-sm text-gray-600 mb-1">Email: {teacher.email}</p>
        <p className="text-sm text-gray-600 mb-1">Phone: {teacher.phone}</p>
        <p className="text-sm text-gray-700 mt-4">{teacher.bio}</p>
      </div>
    </div>
  );
};
