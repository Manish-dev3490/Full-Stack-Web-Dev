import React from 'react';
import {useForm} from 'react-hook-form'

function SignupPage(props) {
    const { setLoginInfo } = props;
    const {register,handleSubmit}=useForm();
    

    function handleSignUp(data){
        console.log(data);
        
    }


    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">


            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
                    Create Your Account
                </h2>

                <form className="space-y-4" onSubmit={handleSubmit(handleSignUp)}>
                    {/* Name */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1" htmlFor="name">
                            Enter Your Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            placeholder="John Doe"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            {...register("name")}
                        />
                    </div>

                    {/* Age */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1" htmlFor="age">
                            Enter Your Age
                        </label>
                        <input
                            type="number"
                            id="age"
                            placeholder="25"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            {...register("age")}
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1" htmlFor="email">
                            Enter Your Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="john@example.com"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            {...register("email")}
                        />
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
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-md font-semibold hover:bg-blue-600 transition-colors"
                    >
                        Sign Up
                    </button>
                </form>

                {/* Already have account */}
                <p className="mt-4 text-center text-gray-600">
                    If you have an account,{' '}
                    <button onClick={() => setLoginInfo(true)} className="text-blue-500 hover:underline font-medium">
                        click here
                    </button>
                </p>
            </div>
        </div>
    );
}

export default SignupPage;