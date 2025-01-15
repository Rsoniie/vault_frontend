
import React, { useState, useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const VerifyOTP = () => {
  const [otp, setOtp] = useState(Array(7).fill(''));
  const inputsRef = useRef([]);
  const navigate = useNavigate();

  const handleInputChange = (index) => (event) => {
    const newOtp = [...otp];
    newOtp[index] = event.target.value;
    setOtp(newOtp);

    // Move focus to next input
    if (event.target.value.length === 1 && index < 6) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const otpString = otp.join('');

    try {

      const response = await axios.post(`${import.meta.env.VITE_API}/user/verify`, { otp: otpString });
      if (response.status == 200) {
        navigate('/login');  // Navigate to the About page on success
      } else {
        alert('OTP Verification failed. Please try again.');  // Handle failure
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
      alert('An error occurred while verifying OTP.');
    }
  };

  return (
    <div className="bg-indigo-100 flex items-center justify-center min-h-screen">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-xs md:max-w-md w-full">
        <h2 className="text-xl md:text-2xl font-bold text-center text-gray-800 mb-6">Verify Your OTP</h2>
        <p className="text-center text-gray-600 mb-4">Enter the 7-digit OTP sent to your email.</p>
        <form onSubmit={handleSubmit}>
          <div className="flex space-x-2 justify-center mb-6">
            {otp.map((_, index) => (
              <input
                key={index}
                ref={(el) => inputsRef.current[index] = el}
                type="text"
                maxLength="1"
                className="w-10 h-10 md:w-12 md:h-12 border border-gray-300 rounded-lg text-center text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={otp[index]}
                onChange={handleInputChange(index)}
                onPaste={(e) => e.preventDefault()}  // Disable paste
              />
            ))}
          </div>
          <button
            type="submit"
            className="w-full bg-purple-500 text-white py-2 md:py-3 rounded-lg font-semibold hover:bg-purple-600 transition duration-200"
          >
            Verify OTP
          </button>
        </form>
        <p className="text-center text-gray-600 mt-6">
          Didn’t receive the code?{" "}
          <a href="#" className="text-purple-500 hover:underline">
            Resend OTP
          </a>
        </p>
      </div>
    </div>
  );
};

export default VerifyOTP;
