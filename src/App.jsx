import React, { useState } from "react";
import FileList from "./services/FileList"; // Correctly import FileList
import Navbar from "./components/Navbar";
import ProfileCard from "./components/Profile";
import Profile_page from "./pages/profile-page";
import SignUp from "./pages/signup_page";
import LogIn from "./pages/login_page";
import Home from "./pages/home_page";
import AboutUs from "./pages/aboutus_page";
import FileUpload from "./pages/upload_page";
import FeedbackForm from "./pages/feedback_page";
import { BrowserRouter as Router, Route, Link, Routes, Navigate} from "react-router-dom";
import ConditionalNavbar from "./services/Conditional_nav";
import VerifyOTP from "./pages/verification_page";
import Author_profile from "./pages/author_profile";
import By_Sub from "./pages/by_subject";



function App() {
  return (
    <>
    <Router>
      <ConditionalNavbar/>
      <Routes>
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route path="/login" element={<LogIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/author_profile/:author_name" element={<Author_profile/>}/>
        <Route path="/profile" element={<Profile_page/>}/>
        <Route path="/upload" element={<FileUpload/>}/>
        <Route path="/feedback" element={<FeedbackForm/>}/>
        <Route path="/verify" element={<VerifyOTP/>}/>
        <Route path="/logout" element={<Navigate replace to="/login" />} />
        <Route path="/by_sub/:subject" element={<By_Sub/>}/>
      </Routes>
    </Router>
      
    </>
  );
}

export default App;

