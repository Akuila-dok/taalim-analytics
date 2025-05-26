"use client";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { date: "Jan", score: 78 },
  { date: "Feb", score: 82 },
  { date: "Mar", score: 90 },
  { date: "Apr", score: 85 },
];

export default function ResultChart() {
  return (
    <div className="bg-white p-4 shadow rounded">
      <h2 className="font-semibold mb-2">Student Progress</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis domain={[0, 100]} />
          <Tooltip />
          <Line type="monotone" dataKey="score" stroke="#3b82f6" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
