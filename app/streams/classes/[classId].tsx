'use client';
import { useParams } from 'next/navigation';

const ClassPage = () => {
  const params = useParams();
  const classId = params.classId;

  return (
    <div className="min-h-screen p-6 bg-white text-teal-800">
      <h1 className="text-2xl font-bold">Welcome to {classId?.toUpperCase()}</h1>
      <p className="mt-4">This is the page for class {classId?.toUpperCase()}.</p>
    </div>
  );
};

export default ClassPage;
