import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-3xl shadow-xl max-w-4xl w-full p-10"
      >
        {/* Heading */}
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">About Us</h1>

        {/* Divider Line */}
        <div className="h-1 w-24 bg-purple-500 mx-auto rounded-full mb-10"></div>

        {/* About Content */}
        <div className="text-gray-600 text-lg leading-relaxed space-y-6">
          <p>
            Welcome to <span className="text-purple-500 font-semibold">TalentConnect</span> — your trusted platform to
            discover top tech talents and dream jobs! 🚀
          </p>

          <p>
            Our mission is to bridge the gap between skilled developers and innovative companies by providing a seamless hiring experience.
          </p>

          <p>
            Whether you're a startup, an enterprise, or an ambitious developer, TalentConnect empowers you to find the perfect match effortlessly.
          </p>

          <p className="font-semibold text-gray-800">
            Together, let's build the future of work. 🌟
          </p>
        </div>

        {/* Stats Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-gray-100 rounded-2xl p-6"
          >
            <h2 className="text-2xl font-bold text-purple-500">500+</h2>
            <p className="text-gray-700 mt-2">Companies</p>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-gray-100 rounded-2xl p-6"
          >
            <h2 className="text-2xl font-bold text-purple-500">10K+</h2>
            <p className="text-gray-700 mt-2">Talents Hired</p>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-gray-100 rounded-2xl p-6"
          >
            <h2 className="text-2xl font-bold text-purple-500">100+</h2>
            <p className="text-gray-700 mt-2">Success Stories</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}