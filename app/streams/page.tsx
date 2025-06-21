'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const streamData = [
  {
    id: 1,
    name: 'Stream 1 - Form 1',
    classes: ['Form 1A', 'Form 1B', 'Form 1C', 'Form 1D'],
  },
  {
    id: 2,
    name: 'Stream 2 - Form 2',
    classes: ['Form 2A', 'Form 2B', 'Form 2C', 'Form 2D'],
  },
  {
    id: 3,
    name: 'Stream 3 - Form 3',
    classes: ['Form 3A', 'Form 3B', 'Form 3C', 'Form 3D'],
  },
  {
    id: 4,
    name: 'Stream 4 - Form 4',
    classes: ['Form 4A', 'Form 4B', 'Form 4C', 'Form 4D'],
  },
];

function StreamsPage() {
  const router = useRouter();
  const [expandedStream, setExpandedStream] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setExpandedStream((prev) => (prev === id ? null : id));
  };

  const handleClassClick = (className: string) => {
    router.push(`/streams/classes/${className.replace(/\s/g, '').toLowerCase()}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-white p-6">
      <h1 className="text-3xl font-bold text-teal-700 mb-8 text-center">Streams Page</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {streamData.map((stream) => (
          <div key={stream.id} className="bg-white border border-teal-200 rounded-lg shadow">
            <button
              onClick={() => handleToggle(stream.id)}
              className="w-full text-left px-6 py-4 font-semibold text-lg text-teal-800 hover:bg-teal-100 focus:outline-none"
            >
              {stream.name}
            </button>

            {expandedStream === stream.id && (
              <div className="px-6 pb-4 space-y-2 animate-fade-in">
                {stream.classes.map((cls) => (
                  <button
                    key={cls}
                    onClick={() => handleClassClick(cls)}
                    className="block w-full text-left px-4 py-2 rounded-md bg-teal-50 hover:bg-teal-100 text-sm text-teal-700 border border-teal-100"
                  >
                    {cls}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default StreamsPage;
