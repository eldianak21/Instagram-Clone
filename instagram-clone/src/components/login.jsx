import React from 'react';

const Login = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <div className="w-full max-w-xs">
        <h1 className="text-4xl font-bold text-white text-center mb-8">Instagram</h1>
        <form className="bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Phone number, username, or email"
              className="w-full p-3 text-gray-900 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 text-gray-900 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-2 rounded hover:bg-blue-700"
          >
            Log In
          </button>
        </form>
        <div className="text-center text-gray-400 mt-4">
          <p>OR</p>
          <button className="flex items-center justify-center border border-gray-600 text-white rounded py-2 mt-2 w-full">
            <span className="mr-2">🔵</span> Log in with Facebook
          </button>
        </div>
        <div className="text-center text-gray-400 mt-4">
          <a href="#" className="hover:underline">Forgot password?</a>
        </div>
        <div className="text-center text-gray-400 mt-4">
          <p>Don't have an account? <a href="#" className="text-blue-500 hover:underline">Sign up</a></p>
        </div>
      </div>
    </div>
  );
};

export default Login;