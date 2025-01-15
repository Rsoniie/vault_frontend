import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card"; // Correctly import the Card component

const FileList = () => {
  const [files, setFiles] = useState([]); // State to store files
  const [loading, setLoading] = useState(true); // State for loading status
  const [error, setError] = useState(null); // State for error handling

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API}/pdf/all_files`);
        setFiles(response.data.all_files); // Store fetched files in state
        console.log(response.data); // Log the fetched data for debugging
      } catch (err) {
        setError("Failed to fetch files");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchFiles();
  }, []);

  if (loading) return <p>Loading files...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">File List</h1>
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"> */}
      <div className="flex justify-around flex-wrap">
        {files.map((file, index) => (
          // <Card
          //   key={index} // Add a unique key for each item
          //   topic={file.topic}
          //   file_path={file.file_path}
          //   subject={file.subject}
          //   author={file.author_name}
          //   likes={file.likes}
          // />
          <>
          <div className="max-w-sm mx-4 my-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className=""
                src="https://flowbite.com/docs/images/blog/image-1.jpg"
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
                <div className="text-sm flex items-center">
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
                </div>
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

          </>
          
        ))}
      </div>
    </div>
  );
};

export default FileList;
