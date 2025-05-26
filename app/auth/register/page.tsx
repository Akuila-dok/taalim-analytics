'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import toast, { Toaster } from 'react-hot-toast';
import Link from 'next/link';

// Schema for validation
const registerSchema = z.object({
  name: z.string().min(2, 'Full name is required'),
  email: z.string().email('Invalid email'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  profile: z.any().optional()
});

type RegisterFormData = z.infer<typeof registerSchema>;

export default function RegisterPage() {
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormData) => {
    setLoading(true);
    toast.loading('Registering...');

    setTimeout(() => {
      toast.dismiss();
      toast.success('Account created successfully!');
      setLoading(false);
      console.log(data);
      // redirect to dashboard or further logic
    }, 2000);
  };

  // Live preview for profile photo
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <main className="flex font-ubuntu items-center justify-center min-h-screen bg-gradient-to-br from-teal-100 to-teal-300 px-4">
      <Toaster />
      <div className="w-full max-w-md bg-white p-6 sm:p-8 rounded-xl shadow-lg transition hover:scale-[1.01]">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-teal-800">
          Create an Account
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-teal-700 mb-1">Full Name</label>
            <input
              {...register('name')}
              placeholder="John Doe"
              className="w-full px-4 py-2 border border-teal-400 rounded-md shadow-sm focus:ring-teal-400 focus:border-teal-400 outline-none transition"
            />
            {errors.name && <p className="text-teal-600 text-sm">{errors.name.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-teal-700 mb-1">Email Address</label>
            <input
              {...register('email')}
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-teal-400 rounded-md shadow-sm focus:ring-teal-400 focus:border-teal-400 outline-none transition"
            />
            {errors.email && <p className="text-teal-600 text-sm">{errors.email.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-teal-700 mb-1">Password</label>
            <input
              {...register('password')}
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border border-teal-400 rounded-md shadow-sm focus:ring-teal-400 focus:border-teal-400 outline-none transition"
            />
            {errors.password && <p className="text-teal-600 text-sm">{errors.password.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-teal-700 mb-1">Profile Picture (optional)</label>
            <input
              type="file"
              accept="image/*"
              {...register('profile')}
              onChange={handleImageChange}
              className="block w-full text-sm text-teal-700"
            />
            {preview && (
              <img
                src={preview}
                alt="Preview"
                className="mt-3 rounded-full h-20 w-20 object-cover border border-teal-400"
              />
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 px-4 rounded-md text-white font-medium transition duration-300 shadow hover:shadow-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 ${
              loading ? 'bg-teal-400 cursor-not-allowed opacity-60' : 'bg-teal-600 hover:bg-teal-700'
            }`}
          >
            {loading ? 'Registering...' : 'Register'}
          </button>
        </form>

        <p className="mt-6 text-sm text-center text-teal-700">
          Already have an account?{' '}
          <Link href="/auth/login" className="text-teal-600 hover:text-teal-500 font-semibold">
            Sign in here.
          </Link>
        </p>
      </div>
    </main>
  );
}
