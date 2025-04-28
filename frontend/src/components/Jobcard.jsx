import { motion } from "framer-motion";

export default function JobCard({ title, company, exp, loc, salary,updatedAt }) {

  function getHoursAgo(dateString) {
    const now = new Date();
    const createdAt = new Date(dateString);
    const diffInMs = now - createdAt;
    const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
  
    if (diffInHours < 1) {
      return "Just now";
    } else if (diffInHours === 1) {
      return "1 hour ago";
    } else {
      return `${diffInHours} hours ago`;
    }
  }

  return (
    <motion.div 
      whileHover={{ scale: 1.05 }} 
      className="bg-white rounded-2xl p-5 shadow-md flex flex-col justify-between"
    >
      <div className="flex justify-between items-start">
        {/* Logo */}
        <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
          <img src={`https://logo.clearbit.com/${company.toLowerCase()}.com`} alt={company} className="w-8 h-8 object-contain" />
        </div>
        {/* Time */}
        <div className="text-xs text-blue-500 font-semibold">{getHoursAgo(updatedAt)}</div>
      </div>

      {/* Title */}
      <h2 className="text-lg font-semibold mt-4">{title}</h2>

      {/* Details */}
      <div className="flex items-center gap-2 text-gray-500 text-sm mt-2">
        <span>👤 1 - {exp} yrs</span>
        <span>🏢 {loc}</span>
        <span>💰 {Number(salary)/100000}LPA</span>
      </div>

      {/* Description */}
      <p className="text-gray-400 text-sm mt-3">
        A user-friendly interface lets you browse stunning photos and videos. Filter destinations based on interests and travel style, and create personalized experiences.
      </p>

      {/* Button */}
      <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-xl text-sm font-semibold transition cursor-pointer">
        Apply Now
      </button>
    </motion.div>
  );
}