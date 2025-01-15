
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const SignUp = () => {
//   // State declarations for each form field
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [profession, setProfession] = useState('');
//   const [institution, setInstitution] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [isMatching, setIsMatching] = useState(true);

//   const navigate = useNavigate();

//   // Handlers for input changes
//   const handleInputChange = (setter) => (event) => {
//     setter(event.target.value);
//   };

//   const handleConfirmPasswordChange = (event) => {
//     const value = event.target.value;
//     setConfirmPassword(value);
//     setIsMatching(password === value);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault(); // Prevent form from refreshing the page
//     if (!isMatching) {
//       alert('Passwords do not match!');
//       return;
//     }

//     const payload = {
//       username,
//       email,
//       profession,
//       institution,
//       password
//     };

//     try {
//       const response = await axios.post('http://localhost:3000/user/createuser', payload);
//       if (response.status === 200) {
//         navigate('/verify'); // Navigate to verify page on success
//       } else {
//         alert('Signup failed: ' + (response.data.message || 'Unknown error'));
//       }
//     } catch (error) {
//       console.error('Signup error:', error);
//       alert('An error occurred during signup. Please try again.');
//     }
//   };

//   return (
//     <div className="flex min-h-screen bg-gray-100 text-gray-900 items-center justify-center">
//       <div className="max-w-screen-xl m-4 bg-white shadow sm:rounded-lg flex justify-center flex-1">
//         <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
//           <h1 className="text-2xl xl:text-3xl font-extrabold">Sign Up</h1>
//           <form onSubmit={handleSubmit} className="mt-6">
//             <input
//               className="w-full px-8 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none mt-3"
//               type="text"
//               placeholder="Username"
//               value={username}
//               onChange={handleInputChange(setUsername)}
//             />
//             <input
//               className="w-full px-8 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none mt-3"
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={handleInputChange(setEmail)}
//             />
//             <input
//               className="w-full px-8 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none mt-3"
//               type="text"
//               placeholder="Profession"
//               value={profession}
//               onChange={handleInputChange(setProfession)}
//             />
//             <input
//               className="w-full px-8 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none mt-3"
//               type="text"
//               placeholder="Institution"
//               value={institution}
//               onChange={handleInputChange(setInstitution)}
//             />
//             <div className="relative w-full mt-3">
//               <input
//                 className="w-full px-8 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none"
//                 type={showPassword ? "text" : "password"}
//                 placeholder="Password"
//                 value={password}
//                 onChange={handleInputChange(setPassword)}
//               />
//               <button
//                 type="button"
//                 className="absolute inset-y-0 right-3 flex items-center text-gray-500 focus:outline-none"
//                 onClick={() => setShowPassword(!showPassword)}
//               >
//                 {showPassword ? "Hide" : "Show"}
//               </button>
//             </div>
//             <div className="relative w-full mt-3">
//               <input
//                 className={`w-full px-8 py-3 rounded-lg font-medium bg-gray-100 border ${
//                   isMatching ? "border-green-500" : "border-red-500"
//                 } placeholder-gray-500 text-sm focus:outline-none`}
//                 type={showConfirmPassword ? "text" : "password"}
//                 placeholder="Confirm Password"
//                 value={confirmPassword}
//                 onChange={handleConfirmPasswordChange}
//               />
//               <button
//                 type="button"
//                 className="absolute inset-y-0 right-3 flex items-center text-gray-500 focus:outline-none"
//                 onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//               >
//                 {showConfirmPassword ? "Hide" : "Show"}
//               </button>
//             </div>
//             <button
//               type="submit"
//               className="mt-5 w-full px-8 py-3 rounded-lg font-medium bg-indigo-500 text-gray-100 hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center"
//             >
//               Sign Up
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUp;


import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  // State declarations for each form field
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [profession, setProfession] = useState('');
  const [institution, setInstitution] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isMatching, setIsMatching] = useState(true);
  const [loading, setLoading] = useState(false); // State to handle loading screen visibility

  const navigate = useNavigate();

  const handleInputChange = (setter) => (event) => {
    setter(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    const value = event.target.value;
    setConfirmPassword(value);
    setIsMatching(password === value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!isMatching) {
      alert('Passwords do not match!');
      return;
    }

    setLoading(true); // Activate loading screen before the API call

    const payload = {
      username,
      email,
      profession,
      institution,
      password
    };

    try {
      const response = await axios.post(`${import.meta.env.VITE_API}/user/createuser`, payload, 
        { headers: { 'Content-Type': 'application/json' } }
      );
      if (response.status === 200) {
        navigate('/verify');
      } else {
        alert('Signup failed: ' + (response.data.message || 'Unknown error'));
      }
    } catch (error) {
      console.error('Signup error:', error);
      alert('An error occurred during signup. Please try again.');
    } finally {
      setLoading(false); // Deactivate loading screen regardless of the outcome
    }
  };

  return (
    <div className="relative flex min-h-screen bg-gray-100 text-gray-900 items-center justify-center">
      <div className="max-w-screen-xl m-4 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <h1 className="text-2xl xl:text-3xl font-extrabold">Sign Up</h1>
          <form onSubmit={handleSubmit} className="mt-6">
            <input
              className="w-full px-8 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none mt-3"
              type="text"
              placeholder="Username"
              value={username}
              onChange={handleInputChange(setUsername)}
            />
            <input
              className="w-full px-8 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none mt-3"
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleInputChange(setEmail)}
            />
            <input
              className="w-full px-8 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none mt-3"
              type="text"
              placeholder="Profession"
              value={profession}
              onChange={handleInputChange(setProfession)}
            />
            <input
              className="w-full px-8 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none mt-3"
              type="text"
              placeholder="Institution"
              value={institution}
              onChange={handleInputChange(setInstitution)}
            />
            <div className="relative w-full mt-3">
              <input
                className="w-full px-8 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={handleInputChange(setPassword)}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-3 flex items-center text-gray-500 focus:outline-none"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            <div className="relative w-full mt-3">
              <input
                className={`w-full px-8 py-3 rounded-lg font-medium bg-gray-100 border ${
                  isMatching ? "border-green-500" : "border-red-500"
                } placeholder-gray-500 text-sm focus:outline-none`}
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-3 flex items-center text-gray-500 focus:outline-none"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? "Hide" : "Show"}
              </button>
            </div>
            <button
              type="submit"
              className="mt-5 w-full px-8 py-3 rounded-lg font-medium bg-indigo-500 text-gray-100 hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center"
            >
              Sign Up
            </button>
          </form>
          {loading && (
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
              <div className="text-white text-lg font-semibold">Signing up...</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
