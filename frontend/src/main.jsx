import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { JobsContextProvider } from './contexts/JobsContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <JobsContextProvider>
      <App />
    </JobsContextProvider>
  </StrictMode>,
)
