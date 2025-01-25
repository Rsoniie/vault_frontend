

import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const By_Sub = () => {

  const { subject } = useParams();

  console.log("This is subject", subject);
  const [files, setFiles] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const token = localStorage.getItem('token');

        console.log("Just before calling api");
        const response = await axios.get(`${import.meta.env.VITE_API}/pdf/by_sub/${subject}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        console.log("Just after calling api");
        setFiles(response.data.files); 
        console.log("This is response data", response.data);
      } catch (err) {
        setError("Failed to fetch files");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchFiles();
  }, []);

  console.log(files);
  if (loading) return <p>Loading files...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="bg-gradient-to-br from-blue-100 to-blue-200 min-h-screen">

    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Notes</h1>
      <div className="flex justify-around flex-wrap">
        {files.map((file, index) => (
          <div
            key={index}
            className="max-w-sm mx-4 my-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <a href="#">
              <img
                className=""
                src="https://cdn.mos.cms.futurecdn.net/25mEf9H2CYfpdX53bWHjK-1200-80.jpg"
                alt=""
              />

            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {file.topic}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {file.description}
              </p>
              <div className="flex items-center justify-between text-white">
                <button
                  type="button"
                  onClick={() => navigate(`/author_profile/${file.author_name}`)} // Redirect to profile with author_name
                  className="flex items-center text-sm text-white bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                >
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="w-8 h-8 rounded-full mr-2"
                    src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                    alt="user photo"
                  />
                  {file.author_name}
                </button>
                {/* <div className="text-sm flex items-center">
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2 mr-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 21C12 21 5 13.5 5 8.5C5 5.42 7.42 3 10.5 3C12.5 3 14 4.5 14 4.5C14 4.5 15.5 3 17.5 3C20.58 3 23 5.42 23 8.5C23 13.5 12 21 12 21Z"
                    />
                  </svg>
                  {file.likes}
                </div> */}
                <a
                  href={file.file_path}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default By_Sub;




// import React, { useState, useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import axios from "axios";

// const By_Sub = () => {
//   const { subject } = useParams();

//   console.log("This is subject", subject);
//   const [files, setFiles] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchFiles = async () => {
//       try {
//         const token = localStorage.getItem("token");

//         console.log("Just before calling api");
//         const response = await axios.get(
//           `${import.meta.env.VITE_API}/pdf/by_sub/${subject}`,
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );

//         console.log("Just after calling api");
//         setFiles(response.data.files);
//         console.log("This is response data", response.data);
//       } catch (err) {
//         setError("Failed to fetch files");
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchFiles();
//   }, []);

//   console.log(files);
//   if (loading) return <p>Loading files...</p>;
//   if (error) return <p className="text-red-500">{error}</p>;

//   return (
//     <div className="bg-gradient-to-br from-blue-100 to-blue-200 min-h-screen">
//       <div className="p-4">
//         <h1 className="text-2xl font-bold mb-4 text-center">Notes</h1>
//         <div className="flex justify-around flex-wrap">
//           {files.length === 0 ? (
//             <div className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-5">
//               <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
//                 Oops! No files
//               </h5>
//               <p className="font-normal text-gray-700 dark:text-gray-400 text-center">
//                 It seems there are no notes available for this subject.
//               </p>
//             </div>
//           ) : (
//             files.map((file, index) => (
//               <div
//                 key={index}
//                 className="max-w-sm mx-4 my-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
//               >
//                 <a href="#">
//                   <img
//                     src="https://cdn.mos.cms.futurecdn.net/25mEf9H2CYfpdX53bWHjK-1200-80.jpg"
//                     alt=""
//                   />
//                 </a>
//                 <div className="p-5">
//                   <a href="#">
//                     <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//                       {file.topic}
//                     </h5>
//                   </a>
//                   <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
//                     {file.description}
//                   </p>
//                   <div className="flex items-center justify-between text-white">
//                     <button
//                       type="button"
//                       onClick={() => navigate(`/author_profile/${file.author_name}`)}
//                       className="flex items-center text-sm text-white bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
//                     >
//                       <img
//                         className="w-8 h-8 rounded-full mr-2"
//                         src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
//                         alt="user photo"
//                       />
//                       {file.author_name}
//                     </button>
//                     <a
//                       href={file.file_path}
//                       className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//                     >
//                       Read
//                       <svg
//                         className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
//                         aria-hidden="true"
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 14 10"
//                       >
//                         <path
//                           stroke="currentColor"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth="2"
//                           d="M1 5h12m0 0L9 1m4 4L9 9"
//                         />
//                       </svg>
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default By_Sub;

