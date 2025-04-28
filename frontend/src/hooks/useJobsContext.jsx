import { JobsContext } from "../contexts/JobsContext";
import { useContext } from "react";

export const useJobsContext = () => {
    const context = useContext(JobsContext);
    if (!context) {
        throw Error('useJobsContext must be used inside a Component wrapped with JobsContextProvider')
    }
    return context;
}