'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import toast, { Toaster } from 'react-hot-toast';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

// Validation schema
const loginSchema = z.object({
  email: z.string().email('Please enter a valid email'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    setLoading(true);
    toast.loading('Signing in...');

    // Simulate login
    setTimeout(() => {
      toast.dismiss();
      toast.success('Logged in successfully!');
      console.log(data); // Replace with real API call + cookie/token logic

      // Set fake token (for middleware check)
      document.cookie = `token=sample-user-token; path=/; max-age=86400`;

      setLoading(false);

      // Redirect to dashboard
      router.push('/dashboard');
    }, 2000);
  };

  return (
    <main className="flex font-ubuntu items-center justify-center min-h-screen bg-gradient-to-br from-teal-100 to-teal-300 px-4 sm:px-6 lg:px-8">
      <Toaster />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-full max-w-md bg-white p-6 sm:p-8 rounded-xl shadow-xl"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-teal-700">
          Welcome Back
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-teal-800 mb-1">
              Email Address
            </label>
            <input
              {...register('email')}
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-teal-300 rounded-md shadow-sm focus:ring-teal-400 focus:border-teal-400 outline-none transition"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-teal-800 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                {...register('password')}
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                className="w-full px-4 py-2 border border-teal-300 rounded-md shadow-sm focus:ring-teal-400 focus:border-teal-400 outline-none transition"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-2.5 text-sm text-teal-600 hover:text-teal-800"
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 px-4 rounded-md text-white font-medium transition duration-300 shadow hover:shadow-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 ${
              loading
                ? 'bg-teal-400 cursor-not-allowed opacity-60'
                : 'bg-teal-600 hover:bg-teal-700'
            }`}
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <p className="mt-6 text-sm text-center text-teal-700">
          Don&apos;t have an account?{' '}
          <Link href="/auth/register" className="text-teal-600 hover:text-teal-800 font-semibold">
            Register here.
          </Link>
        </p>
      </motion.div>
    </main>
  );
}
