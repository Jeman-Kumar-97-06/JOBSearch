import { motion } from "framer-motion";
import { FiSearch } from "react-icons/fi";
import { MdLocationOn } from "react-icons/md";
import { BsBriefcase } from "react-icons/bs";
import { useJobsContext } from "../hooks/useJobsContext";
import { useState } from "react";

export default function Search() {
  
  const {jobs,dispatch} = useJobsContext();

  const [title,setTitle] = useState('');
  const [loctn,setLoctn] = useState('');
  const [type,setType]   = useState('');
  const [sal,setSal]     = useState(100000);  

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(title);
    console.log(loctn);
    console.log(type)
    console.log(sal)
    dispatch({type:"SET_JOBS",payload:jobs.filter(x=>x.title.toLowerCase().includes(title) && x.loc.toLowerCase().includes(loctn) && x.type.toLowerCase().includes(type) && x.salary <= sal)})
  }
  return (
    <div className="flex justify-center mt-6 px-4">
      <motion.form
        onSubmit={handleSearch}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white w-full max-w-6xl rounded-full shadow-md p-4 flex flex-col md:flex-row items-center gap-4"
      >
        {/* Search Input */}
        <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 flex-1 w-full">
          <FiSearch className="text-gray-400 mr-2" size={20} />
          <input
            value={title}
            onChange={e=>{setTitle(e.target.value)}}
            type="text"
            placeholder="Search by Job Title, Role"
            className="bg-transparent outline-none w-full text-sm text-gray-700"
          />
        </div>

        {/* Location Dropdown */}
        <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-full md:w-auto">
          <MdLocationOn className="text-gray-400 mr-2" size={20} />
          <select 
            value={loctn}
            onChange={e=>{setLoctn(e.target.value)}}
            className="bg-transparent outline-none text-sm text-gray-700">
            <option>Preferred Location</option>
            {jobs && jobs.map((job, index) => (
                      <option>{job.loc}</option>
            ))}
          </select>
        </div>

        {/* Job Type Dropdown */}
        <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-full md:w-auto">
          <BsBriefcase className="text-gray-400 mr-2" size={20} />
          <select 
            value={type}
            onChange={e=>{setType(e.target.value)}}
            className="bg-transparent outline-none text-sm text-gray-700">
            <option value=''>Job type</option>
            <option>FullTime</option>
            <option>PartTime</option>
            <option>Internship</option>
          </select>
        </div>

        {/* Salary Slider */}
        <div className="flex flex-col items-start justify-center w-full md:w-auto">
          <label className="text-xs text-gray-500 mb-1">Salary Per Month</label>
          <input
            value={sal}
            onChange={e=>{setSal(e.target.value)}}
            type="range"
            min="100000"
            max="1000000"
            className="w-full md:w-32 accent-purple-500"
          />
          <div className="flex justify-between w-full text-xs text-gray-400 mt-1">
            <span>₹1LPA</span>
            <span>₹10LPA</span>
          </div>
        </div>
        <button type='submit'><FiSearch className="bg-green-500 text-white p-2 w-[35px] h-[35px] rounded-lg" size={20} /></button>
      </motion.form>
    </div>
  );
}
