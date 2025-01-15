
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// const navigate = useNavigate();

const UploadPage = () => {
  const [subject, setSubject] = useState("");
  const [topic, setTopic] = useState("");
  const [description, setDescription] = useState("");
  const [pdf, setpdf] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [successPopup, setSuccessPopup] = useState(false);  // Added loading state


  const navigate = useNavigate();
  const handleFileChange = (e) => {
    setpdf(e.target.files[0]);
  };

  const handleDescriptionChange = (e) => {
    if (e.target.value.length <= 50) {
      setDescription(e.target.value);
    }
  };

  const handleSubmit = async () => {
    if (!subject || !topic || !description || !pdf) {
      setErrorMessage("All fields are required!");
      return;
    }
    setErrorMessage("");
    setSuccessMessage("");
    setLoading(true); // Set loading to true

    const token = localStorage.getItem("token"); // Retrieve token from localStorage

    const formData = new FormData();
    formData.append("subject", subject);
    formData.append("topic", topic);
    formData.append("description", description);
    formData.append("pdf", pdf);

    try {
      const response = await axios.post(`${import.meta.env.VITE_API}/pdf/upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`, // Add token to the headers
        },
      });
      setSuccessMessage("File uploaded successfully!");
      setSuccessPopup(true);
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error uploading file:", error.response?.data || error.message);
      setErrorMessage("Failed to upload the file. Please try again.");
    } finally {
      setLoading(false); // Set loading to false
    }
  };

  return (
    <>

    <div className="bg-gradient-to-br from-blue-100 to-blue-200 min-h-screen">
      {/* Loading Screen */}
      {successPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold text-green-600">Great Contribution!</h2>
            <p className="mt-4 text-gray-600">Your Notes has been submitted successfully.</p>
            <button
              onClick={() => navigate('/home')} // Redirect to home
              className="mt-6 px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none"
            >
              Go to Home
            </button>
          </div>
        </div>
      )}
      {loading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <p className="text-xl font-semibold">Uploading File...</p>
            <p className="text-gray-500 mt-2">Please wait</p>
          </div>
        </div>
      )}

      <div className="mt-4">
        <div className="border border-blue-400 rounded-lg p-4">
          <p className="font-bold text-center">Upload Your File Here</p>
          <input
            type="file"
            name="file"
            onChange={handleFileChange}
            className="mt-2 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 shadow-sm text-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
          />
        </div>
      </div>
      <hr className="my-2 h-1 border-t-0 bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-50 dark:via-neutral-400" />
      <div className="mx-14 my-6 border-2 border-blue-400 rounded-lg">
        <div className="text-center font-bold">Details</div>
        <div className="text-center text-3xl font-bold mt-2">If you have knowledge, let others light their candles in it.</div>
        <div className="p-6">
          <div className="flex gap-4">
            <input
              type="text"
              name="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-1 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              placeholder="Subject *"
            />
            <input
              type="text"
              name="topic"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-1 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              placeholder="Topic *"
            />
          </div>
          <div className="mt-4">
            <textarea
              name="description"
              value={description}
              onChange={handleDescriptionChange}
              className="mb-4 h-24 w-full resize-none rounded-md border border-slate-300 p-3 font-semibold text-gray-500 placeholder:text-gray-300 focus:outline-none focus:ring-1 focus:ring-sky-500"
              placeholder="Description * (Max 50 characters)"
            ></textarea>
            <p className="text-right text-sm text-gray-400">{description.length}/50</p>
          </div>
          {errorMessage && <p className="text-red-500 mt-2 text-center">{errorMessage}</p>}
          {successMessage && <p className="text-green-500 mt-2 text-center">{successMessage}</p>}
          <div className="text-center mt-4">
            <button
              className="cursor-pointer rounded-lg bg-blue-700 px-6 py-2 text-sm font-semibold text-white hover:bg-blue-800 focus:outline-none focus:bg-blue-800"
              type="button"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default UploadPage;
