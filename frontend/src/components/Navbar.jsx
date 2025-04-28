import { motion } from "framer-motion";
import { useState } from "react";
import Modal from "./Modal";

export default function Navbar() {

  const [ismopen, setIsmopen] = useState(false);

  return (
    <motion.div 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="bg-white shadow-lg rounded-full flex items-center justify-between px-8 py-3 w-full max-w-5xl mx-auto mt-6"
    >
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src='https://www.cybermindworks.com/images/cmwlogo.svg'/>
        {/* <div className="w-8 h-8 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-md"></div> */}
      </div>

      {/* Menu */}
      <div className="flex gap-6 text-gray-600 text-sm font-medium">
        <a href="#" className="hover:text-purple-600">Home</a>
        <a href="#" className="hover:text-purple-600">Find Jobs</a>
        <a href="#" className="hover:text-purple-600">Find Talents</a>
        <a href="#" className="hover:text-purple-600">About us</a>
        <a href="#" className="hover:text-purple-600">Testimonials</a>
      </div>

      {/* Create Job Button */}
      <button onClick={()=>setIsmopen(true)} className="bg-purple-500 hover:bg-purple-600 text-white text-sm font-semibold py-2 px-4 rounded-full">
        Create Jobs
      </button>
    
      <Modal isOpen={ismopen} onClose={()=>setIsmopen(false)}/>

    </motion.div>
  );
}