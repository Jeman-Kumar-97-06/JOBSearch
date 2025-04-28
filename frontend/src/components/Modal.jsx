import { motion } from "framer-motion";
import { useState } from "react";
import { useJobsContext } from "../hooks/useJobsContext";

export default function Modal({ isOpen, onClose }) {

  const [error,setError] = useState(null);
  const {jobs,dispatch}  = useJobsContext();

  const [job,setJob] = useState({
    title       : '',
    company     : '',
    loc         : '',
    exp         : '',
    type        : '',
    salary      : '',
    deadline    : '',
    description : ''
  })

  const handleCreateJob = async (e) => {
    e.preventDefault();
    if (Object.values(job).includes('')){
      setError("Please fill all details!")
      return;
    }
    const resp = await fetch('http://localhost:4000/api/jobs/',{
      method:"POST",
      body  :JSON.stringify(job),
      headers : {"Content-Type":"application/json"}
    })
    const json = await resp.json();
    if (!resp.ok) {
      setError(json.error);
      setJob({
        title       : '',
        company     : '',
        loc         : '',
        exp         : '',
        type        : '',
        salary      : '',
        deadline    : '',
        description : ''
      })
    }
    else if (resp.ok) {
      dispatch({type:"CREATE_JOBS",payload:json})
      onClose();
      setError(null);
      setJob({
        title       : '',
        company     : '',
        loc         : '',
        exp         : '',
        type        : '',
        salary      : '',
        deadline    : '',
        description : ''
      })

    }
  }


  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white rounded-2xl p-8 w-full max-w-3xl shadow-lg"
      >
        {/* Modal Heading */}
        <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold mb-6 text-center">Create Job Opening</h2>
            <button onClick={onClose} className="mb-6 bg-blue-400 p-2 rounded-md cursor-pointer text-white font-bold"> <span className="font-bold text-red-600">X</span> Close</button>
        </div>

        {/* Form */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Job Title</label>
            <input 
              required
              value = {job.title}
              onChange= {e=>{setJob({...job,title:e.target.value})}}
              type="text" 
              placeholder="Full Stack Developer" 
              className="border rounded-md p-2" />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Company Name</label>
            <input 
              required
              value = {job.company}
              onChange = {e=>{setJob({...job,company:e.target.value})}}
              type="text" 
              placeholder="Amazon, Microsoft, Swiggy" 
              className="border rounded-md p-2" />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Location</label>
            <input 
              required
              value = {job.loc}
              onChange = {e=>{setJob({...job,loc:e.target.value})}}
              type="text" 
              placeholder="Chennai, Bangalore, Hyderabad"
              className="border rounded-md p-2" />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Job Type</label>
            <select required className="border rounded-md p-2" onChange={e=>{setJob({...job,type:e.target.value})}}>
              <option value=''>Select Type</option>
              <option>FullTime</option>
              <option>PartTime</option>
              <option>Internship</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Experience</label>
            <input 
              required
              value = {job.exp}
              onChange= {e=>{setJob({...job,exp:e.target.value})}}
              type="text"
              placeholder="Required In Years" 
              className="border rounded-md p-2" />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Salary Range</label>
            <input
             required
             value={job.salary}
             onChange={e=>{setJob({...job,salary:e.target.value})}}
             type="text" 
             placeholder="₹ 0 - ₹ 12,00,000" 
             className="border rounded-md p-2" />
          </div>


          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Application Deadline</label>
            <input 
              required
              value={job.deadline}
              onChange={e=>{setJob({...job,deadline:e.target.value})}}
              type="date" 
              className="border rounded-md p-2" />
          </div>

          {/* Full width text area */}
          <div className="flex flex-col md:col-span-2">
            <label className="text-sm font-medium mb-1">Job Description</label>
            <textarea 
              required
              value={job.description}
              onChange={e=>{setJob({...job,description:e.target.value})}}
              rows="4" 
              placeholder="Please share a description..." 
              className="border rounded-md p-2"></textarea>
          </div>
        </form>
        
        {error && <span className="text-red-600 font-bold">*{error}</span>}

        {/* Buttons */}
        <div className="flex justify-between items-center mt-6">
          <button 
            onClick={onClose}
            className="border border-gray-400 text-gray-600 py-2 px-6 rounded-md hover:bg-gray-100"
          >
            Save Draft
          </button>

          <button onClick={handleCreateJob} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-8 rounded-md flex items-center gap-2">
            Publish
            <span>➔</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
}