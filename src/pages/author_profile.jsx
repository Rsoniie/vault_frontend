
import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import Navbar from './Navbar';
import { useParams } from 'react-router-dom';


const Author_profile = () => {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [files, setFiles] = useState([]);
    const current_user = localStorage.getItem("user");


    const {author_name} = useParams();

    // const name = author_name;

    console.log(author_name);
    // const username = author_name


    useEffect(() => {
        // Replace this URL with your API endpoint
        const fetchProfile = async () => {
            try {  
              console.log("Get into try block");
                const response = await axios.get(`${import.meta.env.VITE_API}/user/profile/${author_name}`);
                setProfile(response.data);
                setFiles(response.data.all_files);
                setLoading(false);
                
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchProfile();
    }, [author_name]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }
   
    return (
        <>
        <div className='bg-gradient-to-br from-blue-100 to-blue-200'>
         <header className="px-2 py-4 flex flex-col justify-center items-center text-center">
                <img
                    className="inline-flex object-cover border-4 border-blue-500 rounded-full shadow-[5px_5px_0_0_rgba(0,0,0,1)] shadow-blue-600/100 bg-indigo-50 text-blue-500 h-24 w-24 !h-48 !w-48"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwyfHxoZWFkc2hvdHxlbnwwfDB8fHwxNjk1ODE3MjEzfDA&ixlib=rb-4.0.3&q=80&w=1080"
                    alt=""
                />
                <h1 className="text-2xl text-gray-500 font-bold mt-2">{profile.user.username}</h1>
                <h2 className="text-base md:text-xl text-gray-500 font-bold">
                   {profile.user.profession}
                    <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="dark:bg-gray-900 hover:text-blue-600 font-bold border-b-0 hover:border-b-4 hover:border-b-blue-300 transition-all mb-2"
                    >
                    </a>
                </h2>
                {/* <div className='m-3'>
                        
                    <div className='px-4 py-2 bg-violet-700 text-white rounded-lg hover:bg-indigo-500 transition'>
                        {profile.user.stars}
                    </div>
                    <button className="m-3 px-4 py-2 bg-violet-700 text-white rounded-full hover:bg-indigo-500 transition">
                            Follow
                    </button>
                </div>   */}
            </header>

            <div>
            <hr className="my-2 h-1 border-t-0 bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-50 dark:via-neutral-400" />
  <div className='text-2xl font-bold mb-4 text-center'>
    Contributions
  </div>

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
</div>
    </>
    );
};

export default Author_profile;
