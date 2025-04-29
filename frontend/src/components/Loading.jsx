import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <div className="flex w-[100vw] bg-gray-100 items-center justify-center min-h-700px bg-gray-50">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        className="bg-white p-8 rounded-2xl shadow-lg flex flex-col items-center gap-4"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          className="w-12 h-12 border-4 border-purple-400 border-t-transparent rounded-full"
        />
        <p className="text-gray-600 font-medium">Loading, please wait...</p>
      </motion.div>
    </div>
  );
}