
import React from 'react'
import FileList from '../services/FileList'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <>
    {/* <Navbar/> */}
     <div className="min-h-screen bg-gray-100">
        <FileList />
      </div> 
    </>

  )
}

export default Home