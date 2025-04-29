import About from "./components/Aboutus";
import JobCard from "./components/Jobcard"
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import { useJobsContext } from "./hooks/useJobsContext";
import { useEffect } from "react";
import LoadingScreen from "./components/Loading";

function App() {

  const {jobs,dispatch} = useJobsContext();

  useEffect(()=>{
      const fetchJobs = async () => {
        const resp = await fetch('https://my-projects-1-lsja.onrender.com/api/jobs/')
        const json = await resp.json();
        console.log("jobs",json)
        if (resp.ok) {
          dispatch({type:"SET_JOBS",payload:json});
        }
        else {
          console.log(json.error)
        }
      }
      fetchJobs();
  },[dispatch])

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar/>
      <Search/>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6">
        {jobs ? jobs.map((job, index) => (
          <JobCard key={index} {...job} />
        )) : <LoadingScreen/>}
      </div>
    </div>
  );
}

export default App
