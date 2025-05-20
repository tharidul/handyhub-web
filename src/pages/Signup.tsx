import React, { useState } from 'react';
import logo from '../assets/images/logo.png'; // Adjust the path as necessary

// Google login handler (placeholder)
const handleGoogleLogin = () => {
  // Here you would integrate Google OAuth (e.g., with Firebase or another provider)
  alert('Google login not implemented.');
};

const AuthPage: React.FC = () => {
  const [isSignup, setIsSignup] = useState(true);
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would typically handle signup/signin logic (API call, etc.)
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative flex flex-col md:flex-row items-center justify-center w-full max-w-4xl bg-white/90 rounded-3xl shadow-2xl p-0 md:p-8 overflow-hidden animate-fade-in">
        {/* Left: Illustration */}
        <div className="hidden md:flex flex-col items-center justify-center bg-gradient-to-b from-blue/10 to-primary/10 w-1/2 h-full p-8 animate-slide-in-left">
          <img src={logo} alt="HandyHub Workers" className="w-100 h-100 object-contain drop-shadow-xl mb-6" />
          <h3 className="text-2xl font-bold text-blue mb-2">Welcome to HandyHub</h3>
          <p className="text-navy text-center font-medium">Connecting you with skilled blue-collar professionals for every job.</p>
        </div>
        {/* Right: Auth Form */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center px-6 py-10 md:py-0 animate-slide-in-right">
          <h2 className="text-3xl font-extrabold text-navy mb-2 tracking-tight">
            {isSignup ? 'Create Account' : 'Sign In'}
          </h2>
          <p className="text-darkgray mb-6 text-center">
            {isSignup ? 'Sign up to get started with HandyHub' : 'Welcome back to HandyHub!'}
          </p>
          <button
            onClick={handleGoogleLogin}
            className="flex items-center justify-center gap-2 w-full py-2 mb-6 rounded-lg border border-blue bg-white hover:bg-blue/10 transition text-blue font-semibold shadow-sm shadow-blue/10 animate-pop"
          >
            <svg width="20" height="20" viewBox="0 0 48 48" className="inline-block"><g><path fill="#4285F4" d="M24 9.5c3.54 0 6.7 1.22 9.19 3.23l6.85-6.85C36.68 2.36 30.7 0 24 0 14.82 0 6.73 5.48 2.69 13.44l7.98 6.2C12.13 13.13 17.57 9.5 24 9.5z"/><path fill="#34A853" d="M46.1 24.55c0-1.64-.15-3.22-.42-4.74H24v9.01h12.42c-.54 2.9-2.18 5.36-4.65 7.01l7.19 5.6C43.98 37.13 46.1 31.3 46.1 24.55z"/><path fill="#FBBC05" d="M10.67 28.65A14.5 14.5 0 0 1 9.5 24c0-1.62.28-3.19.77-4.65l-7.98-6.2A23.97 23.97 0 0 0 0 24c0 3.77.9 7.34 2.49 10.49l8.18-5.84z"/><path fill="#EA4335" d="M24 48c6.48 0 11.93-2.15 15.9-5.85l-7.19-5.6c-2.01 1.35-4.59 2.15-8.71 2.15-6.43 0-11.87-3.63-14.33-8.89l-8.18 5.84C6.73 42.52 14.82 48 24 48z"/></g></svg>
            Continue with Google
          </button>
          <form onSubmit={handleSubmit} className="w-full animate-fade-in">
            {isSignup && (
              <div className="mb-4">
                <label className="block mb-1 font-medium text-navy" htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-blue rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                  required
                />
              </div>
            )}
            <div className="mb-4">
              <label className="block mb-1 font-medium text-navy" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-blue rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block mb-1 font-medium text-navy" htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-blue rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white py-2 rounded-lg font-bold text-lg shadow-md hover:bg-secondary transition animate-pop"
            >
              {isSignup ? 'Sign Up' : 'Sign In'}
            </button>
            {submitted && (
              <p className="mt-4 text-green-600 text-center animate-fade-in">{isSignup ? 'Signup' : 'Signin'} successful!</p>
            )}
          </form>
          <div className="mt-6 text-center">
            <span className="text-darkgray">
              {isSignup ? 'Already have an account?' : "Don't have an account?"}
            </span>
            <button
              onClick={() => { setIsSignup(!isSignup); setSubmitted(false); }}
              className="ml-2 text-blue font-semibold hover:underline animate-pop"
            >
              {isSignup ? 'Sign In' : 'Sign Up'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
