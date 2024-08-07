import { Routes, Route } from 'react-router-dom';
import JobPortal from './pages/JobPortal.jsx';
import LandingPage from './pages/LandingPage.jsx';
function App() {
  return (
    <Routes>
        <Route path="/" element={< LandingPage/>} />
        <Route path="/jobportal" element={<JobPortal/>} />
    </Routes>
  )
}

export default App
