import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import './styles/global.css'
import Home from './pages/Home'
import IndustryApplications from './pages/IndustryApplications'
import Products from './pages/Products'
import ResourceCenter from './pages/ResourceCenter'
import Solutions from './pages/Solutions'
import Contact from './pages/Contact'
import Company from './pages/about/Company'
import Team from './pages/about/Team'
import News from './pages/about/News'
import SoftwareSolution from './pages/solutions/SoftwareSolution'
import DeviceCloudPlatformSolution from './pages/solutions/DeviceCloudPlatformSolution'
import IntelligentHardwareSolution from './pages/solutions/IntelligentHardwareSolution'

function AppRoutes() {
  const location = useLocation()

  useEffect(() => {
    requestAnimationFrame(() => {
      document.dispatchEvent(new Event('render-event'))
    })
  }, [location.pathname])

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/industry-applications" element={<IndustryApplications />} />
      <Route path="/products" element={<Products />} />
      <Route path="/resource-center" element={<ResourceCenter />} />
      <Route path="/solutions" element={<Solutions />} />
      <Route path="/solutions/software-solution" element={<SoftwareSolution />} />
      <Route path="/solutions/device-cloud-platform-solution" element={<DeviceCloudPlatformSolution />} />
      <Route path="/solutions/intelligent-hardware-solution" element={<IntelligentHardwareSolution />} />
      <Route path="/about/company" element={<Company />} />
      <Route path="/about/team" element={<Team />} />
      <Route path="/about/news" element={<News />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  )
}

export default App
