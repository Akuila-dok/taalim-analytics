"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  FaChalkboardTeacher,
  FaDoorOpen,
  FaUsers,
  FaUserGraduate,
  FaCalendarAlt,
  FaArrowLeft,
} from "react-icons/fa";

type Student = {
  id: number;
  name: string;
  admissionNo: string;
};

const mockStudents: Student[] = [
  { id: 1, name: "Alice M.", admissionNo: "ADM101" },
  { id: 2, name: "Brian K.", admissionNo: "ADM102" },
  { id: 3, name: "Cynthia L.", admissionNo: "ADM103" },
];

const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const timeSlots = ["08:00 - 10:00", "10:30 - 12:30", "14:00 - 16:00"];

export default function ClassPage() {
  const router = useRouter();
  const [students] = useState<Student[]>(mockStudents);
  const [metadata, setMetadata] = useState({
    classTeacher: "Mr. Otieno",
    room: "A102",
    capacity: 40,
  });
  const [editingMeta, setEditingMeta] = useState(false);
  const [editingTimetable, setEditingTimetable] = useState(false);

  const [timetable, setTimetable] = useState(
    weekdays.reduce((acc, day) => {
      acc[day] = timeSlots.map(() => "");
      return acc;
    }, {} as Record<string, string[]>)
  );

  const handleMetaChange = (field: string, value: string | number) => {
    setMetadata((prev) => ({ ...prev, [field]: value }));
  };

  const updateLesson = (day: string, slotIndex: number, value: string) => {
    setTimetable((prev) => ({
      ...prev,
      [day]: prev[day].map((subject, i) =>
        i === slotIndex ? value : subject
      ),
    }));
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-10">
      {/* Back Button */}
      <button
        onClick={() => router.push("/dashboard")}
        className="mb-4 px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700 transition flex items-center gap-2"
      >
        <FaArrowLeft />
        Back to Dashboard
      </button>

      {/* Metadata Section */}
      <div className="bg-white p-6 rounded-lg shadow border border-teal-300">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-teal-700 flex items-center gap-2">
            <FaChalkboardTeacher />
            Class Metadata
          </h2>
          <button
            onClick={() => setEditingMeta(!editingMeta)}
            className="text-teal-600 underline text-sm"
          >
            {editingMeta ? "Cancel" : "Edit"}
          </button>
        </div>
        {editingMeta ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="text-sm text-gray-600">Class Teacher</label>
              <input
                value={metadata.classTeacher}
                onChange={(e) =>
                  handleMetaChange("classTeacher", e.target.value)
                }
                className="w-full p-2 mt-1 border border-teal-300 rounded"
              />
            </div>
            <div>
              <label className="text-sm text-gray-600">Room</label>
              <input
                value={metadata.room}
                onChange={(e) => handleMetaChange("room", e.target.value)}
                className="w-full p-2 mt-1 border border-teal-300 rounded"
              />
            </div>
            <div>
              <label className="text-sm text-gray-600">Capacity</label>
              <input
                type="number"
                value={metadata.capacity}
                onChange={(e) =>
                  handleMetaChange("capacity", parseInt(e.target.value))
                }
                className="w-full p-2 mt-1 border border-teal-300 rounded"
              />
            </div>
          </div>
        ) : (
          <ul className="text-teal-800 text-lg space-y-2">
            <li className="flex items-center gap-2">
              <FaChalkboardTeacher />
              <strong>Class Teacher:</strong> {metadata.classTeacher}
            </li>
            <li className="flex items-center gap-2">
              <FaDoorOpen />
              <strong>Room:</strong> {metadata.room}
            </li>
            <li className="flex items-center gap-2">
              <FaUsers />
              <strong>Capacity:</strong> {metadata.capacity}
            </li>
          </ul>
        )}
      </div>

      {/* Students Section */}
      <div className="bg-white p-6 rounded-lg shadow border border-teal-300">
        <h2 className="text-2xl font-bold text-teal-700 mb-4 flex items-center gap-2">
          <FaUserGraduate />
          Students
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm border">
            <thead className="bg-teal-100 text-gray-700">
              <tr>
                <th className="border px-4 py-2">#</th>
                <th className="border px-4 py-2">Admission No.</th>
                <th className="border px-4 py-2">Name</th>
              </tr>
            </thead>
            <tbody>
              {students.map((s, i) => (
                <tr key={s.id} className="text-center">
                  <td className="border px-4 py-2">{i + 1}</td>
                  <td className="border px-4 py-2">{s.admissionNo}</td>
                  <td className="border px-4 py-2">{s.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Timetable Section */}
      <div className="bg-white p-6 rounded-lg shadow border border-teal-300">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-teal-700 flex items-center gap-2">
            <FaCalendarAlt />
            Class Timetable
          </h2>
          <button
            onClick={() => setEditingTimetable(!editingTimetable)}
            className="text-teal-600 underline text-sm"
          >
            {editingTimetable ? "Cancel" : "Edit"}
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-collapse">
            <thead className="bg-teal-100 text-gray-700">
              <tr>
                <th className="border px-4 py-2">Day</th>
                {timeSlots.map((slot) => (
                  <th key={slot} className="border px-4 py-2">
                    {slot}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {weekdays.map((day) => (
                <tr key={day}>
                  <td className="border px-4 py-2 font-medium">{day}</td>
                  {timeSlots.map((_, i) => (
                    <td key={i} className="border px-2 py-2">
                      {editingTimetable ? (
                        <input
                          type="text"
                          value={timetable[day][i]}
                          onChange={(e) =>
                            updateLesson(day, i, e.target.value)
                          }
                          placeholder="Subject"
                          className="w-full p-1 border rounded text-sm"
                        />
                      ) : (
                        timetable[day][i] || "—"
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
