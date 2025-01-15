

// import React, { useState } from 'react';
// import axios from 'axios';
// import { FaStar, FaPaperPlane } from 'react-icons/fa';

// const FeedbackForm = () => {
//   const [rating, setRating] = useState(0);
//   const [hover, setHover] = useState(0);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     feedback: '',
//   });
//   const [successMessage, setSuccessMessage] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setSuccessMessage('');
//     setErrorMessage('');

//     const token = localStorage.getItem('token'); // Retrieve token from localStorage

//     if (!token) {
//       setErrorMessage('No token found. Please log in to submit feedback.');
//       return;
//     }

//     const payload = { ...formData, rating };

//     try {
//       const response = await axios.post(
//         'http://localhost:3000/feed/feedback', // Replace with your API endpoint
//         payload,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`, // Include token in the headers
//             'Content-Type': 'application/json',
//           },
//         }
//       );
//       setSuccessMessage('Feedback submitted successfully!');
//       console.log('Response:', response.data);
//       // Clear the form after successful submission
//       setFormData({ name: '', email: '', feedback: '' });
//       setRating(0);
//     } catch (error) {
//       console.error('Error submitting feedback:', error.response?.data || error.message);
//       setErrorMessage('Failed to submit feedback. Please try again.');
//     }
//   };

//   return (
//     <div className="flex min-h-screen items-center justify-center p-4 bg-gradient-to-br from-purple-100 to-indigo-200 font-sans overflow-hidden">
//       <div className="bg-white rounded-lg shadow-xl overflow-hidden w-full max-w-4xl flex flex-col md:flex-row">
//         <div className="md:w-1/2 h-80 md:h-auto">
//           <img
//             src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
//             alt="Customer Feedback"
//             className="object-cover w-full h-full"
//           />
//         </div>
//         <form onSubmit={handleSubmit} className="md:w-1/2 p-6 space-y-3 overflow-auto">
//           <div>
//             <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//               Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleInputChange}
//               required
//               className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//             />
//           </div>
//           <div>
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleInputChange}
//               required
//               className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//             />
//           </div>
//           <div>
//             <label htmlFor="feedback" className="block text-sm font-medium text-gray-700">
//               Your Feedback
//             </label>
//             <textarea
//               id="feedback"
//               name="feedback"
//               rows="3"
//               value={formData.feedback}
//               onChange={handleInputChange}
//               required
//               className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//             ></textarea>
//           </div>
//           <div>
//             <span className="block text-sm font-medium text-gray-700 mb-2">Rating</span>
//             <div className="flex items-center">
//               {[...Array(5)].map((star, index) => {
//                 const ratingValue = index + 1;
//                 return (
//                   <label key={index} className="cursor-pointer">
//                     <input
//                       type="radio"
//                       name="rating"
//                       value={ratingValue}
//                       onClick={() => setRating(ratingValue)}
//                       className="hidden"
//                     />
//                     <FaStar
//                       className="transition-colors duration-200 ease-in-out"
//                       color={ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
//                       size={24}
//                       onMouseEnter={() => setHover(ratingValue)}
//                       onMouseLeave={() => setHover(0)}
//                     />
//                   </label>
//                 );
//               })}
//             </div>
//           </div>
//           {successMessage && (
//             <p className="text-green-500 text-sm text-center">{successMessage}</p>
//           )}
//           {errorMessage && (
//             <p className="text-red-500 text-sm text-center">{errorMessage}</p>
//           )}
//           <button
//             type="submit"
//             className="w-full flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//           >
//             <FaPaperPlane className="mr-2" />
//             Submit Feedback
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default FeedbackForm;


import React, { useState } from 'react';
import axios from 'axios';
import { FaStar, FaPaperPlane } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // For navigation

const FeedbackForm = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: '',
  });
  const [successPopup, setSuccessPopup] = useState(false); // To control popup visibility
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate for redirection

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    const token = localStorage.getItem('token'); // Retrieve token from localStorage

    if (!token) {
      setErrorMessage('No token found. Please log in to submit feedback.');
      return;
    }

    const payload = { ...formData, rating };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API}/feed/feedback`, // Replace with your API endpoint
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include token in the headers
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status === 200) {
        setSuccessPopup(true); // Show success popup
      }
    } catch (error) {
      console.error('Error submitting feedback:', error.response?.data || error.message);
      setErrorMessage('Failed to submit feedback. Please try again.');
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center p-4 bg-gradient-to-br from-blue-100 to-blue-200 font-sans overflow-hidden">
      {/* Success Popup */}
      {successPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold text-green-600">Thank you for your feedback!</h2>
            <p className="mt-4 text-gray-600">Your feedback has been submitted successfully.</p>
            <button
              onClick={() => navigate('/home')} // Redirect to home
              className="mt-6 px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none"
            >
              Go to Home
            </button>
          </div>
        </div>
      )}

      <div className="bg-white rounded-lg shadow-xl overflow-hidden w-full max-w-4xl flex flex-col md:flex-row">
        <div className="md:w-1/2 h-80 md:h-auto">
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt="Customer Feedback"
            className="object-cover w-full h-full"
          />
        </div>
        <form onSubmit={handleSubmit} className="md:w-1/2 p-6 space-y-3 overflow-auto">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label htmlFor="feedback" className="block text-sm font-medium text-gray-700">
              Your Feedback
            </label>
            <textarea
              id="feedback"
              name="feedback"
              rows="3"
              value={formData.feedback}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            ></textarea>
          </div>
          <div>
            <span className="block text-sm font-medium text-gray-700 mb-2">Rating</span>
            <div className="flex items-center">
              {[...Array(5)].map((star, index) => {
                const ratingValue = index + 1;
                return (
                  <label key={index} className="cursor-pointer">
                    <input
                      type="radio"
                      name="rating"
                      value={ratingValue}
                      onClick={() => setRating(ratingValue)}
                      className="hidden"
                    />
                    <FaStar
                      className="transition-colors duration-200 ease-in-out"
                      color={ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
                      size={24}
                      onMouseEnter={() => setHover(ratingValue)}
                      onMouseLeave={() => setHover(0)}
                    />
                  </label>
                );
              })}
            </div>
          </div>
          {errorMessage && (
            <p className="text-red-500 text-sm text-center">{errorMessage}</p>
          )}
          <button
            type="submit"
            className="w-full flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <FaPaperPlane className="mr-2" />
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
 

