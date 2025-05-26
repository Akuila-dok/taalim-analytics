"use client";

import { useState } from "react";

export default function StudentForm() {
  const [image, setImage] = useState<string | null>(null);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="bg-white p-4 shadow rounded mb-6">
      <h2 className="font-semibold mb-2">Add Student</h2>
      <input type="text" placeholder="Full Name" className="input input-bordered w-full mb-2" />
      <input type="file" accept="image/*" onChange={handleUpload} className="mb-2" />
      {image && <img src={image} alt="Preview" className="w-24 h-24 object-cover rounded" />}
      <button className="bg-blue-500 text-white px-4 py-2 rounded">Save</button>
    </div>
  );
}
