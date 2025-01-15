// import React from "react";

// const AboutUs = () => {
//   return (
//     <>

// {/* <Navbar/> */}
// <div className="bg-gradient-to-br from-blue-100 to-blue-200 min-h-screen">
//     <section className="py-24 relative justify-center">
//       <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
//         <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
//           {/* Text Section */}
//           <div className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
//             <div className="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
//               <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
//                 Building Stronger Communities through Collaboration and Empowerment
//               </h2>
//               <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
//                 Through collaboration, diverse perspectives and strengths are leveraged to create inclusive environments
//                 where everyone has the opportunity to thrive. This approach not only fosters personal growth and
//                 achievement but also strengthens the fabric of society.
//               </p>
//             </div>
//             {/* Button */}
//             <button className="sm:w-fit w-full px-3.5 py-2 bg-blue-500 hover:bg-blue-800 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
//               <span className="px-1.5 text-white text-sm font-medium leading-6">Get Started</span>
//             </button>
//           </div>
//           {/* Image Section */}
//           <img
//             className="lg:mx-0 mx-auto h-full rounded-3xl object-cover"
//             // src="https://pagedone.io/asset/uploads/1717751272.png"
//             src="https://www.villagetalkies.com/wp-content/uploads/2021/12/Here-we-have-the-tips-solutions.jpg"
//             alt="About Us"
//           />
//         </div>
//       </div>
//     </section>
//     </div>
//     </>
//   );
// };

// export default AboutUs;




import React from "react";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate(); // React Router hook for navigation

  const handleGetStartedClick = () => {
    navigate("/home"); // Navigate to the /home route
  };

  return (
    <>
      {/* Background Section */}
      <div className="bg-gradient-to-br from-blue-100 to-blue-200 min-h-screen">
        <section className="py-24 relative justify-center">
          <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
            <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
              {/* Text Section */}
              <div className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
                <div className="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
                  <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                    Building Stronger Communities through Collaboration and Empowerment
                  </h2>
                  <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                    Through collaboration, diverse perspectives and strengths are leveraged to create inclusive environments
                    where everyone has the opportunity to thrive. This approach not only fosters personal growth and
                    achievement but also strengthens the fabric of society.
                  </p>
                </div>
                {/* Button */}
                <button
                  onClick={handleGetStartedClick} // Handle button click
                  className="sm:w-fit w-full px-3.5 py-2 bg-blue-500 hover:bg-blue-800 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex"
                >
                  <span className="px-1.5 text-white text-sm font-medium leading-6">Get Started</span>
                </button>
              </div>
              {/* Image Section */}
              <img
                className="lg:mx-0 mx-auto h-full rounded-3xl object-cover"
                src="https://www.villagetalkies.com/wp-content/uploads/2021/12/Here-we-have-the-tips-solutions.jpg"
                alt="About Us"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutUs;
