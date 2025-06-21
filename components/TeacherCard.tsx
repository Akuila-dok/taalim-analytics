import React from 'react';

type TeacherCardProps = {
  teacher: {
    id: number;
    name: string;
    subject: string;
  };
  onClick: () => void;
};

export const TeacherCard: React.FC<TeacherCardProps> = ({ teacher, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer bg-white shadow-md rounded-lg p-4 border border-blue-200 hover:shadow-lg transition"
    >
      <h2 className="text-xl font-semibold text-blue-700">{teacher.name}</h2>
      <p className="text-sm text-gray-600">Subject: {teacher.subject}</p>
    </div>
  );
};
