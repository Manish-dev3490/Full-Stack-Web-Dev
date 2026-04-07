import React from 'react';
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from "zod";

const schema = z.object({
  email: z
    .string()
    .min(10, "Email must be at least 10 characters")
    .max(25, "Email must be at most 25 characters")
    .email("Invalid email"),

  password: z
    .string()
    .min(4, "Password must be at least 4 characters")
    .max(15, "Password must be at most 15 characters"),
});

function LoginPage(props) {

  const { setLoginInfo } = props;
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema)
  });

  function handleLogin(data) {
    console.log(data);

  }
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Login to Your Account
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit(handleLogin)}>
          {/* Username */}
          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="username">
              Enter Your Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="john_doe"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              {...register("email")}

            />
            {errors.email && <span>{errors.email.message}</span>}

          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="password">
              Enter Your Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="********"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              {...register("password")}
            />
            {errors.password && <span>{errors.password.message}</span>}
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md font-semibold hover:bg-blue-600 transition-colors"
          >
            Login
          </button>
        </form>

        {/* Don’t have account */}
        <p className="mt-4 text-center text-gray-600">
          Don't have an account?{' '}
          <button onClick={() => setLoginInfo(false)} className="text-blue-500 hover:underline font-medium">
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;