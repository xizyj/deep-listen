import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/global.css'
import './App.css'

// 导入页面组件
import Home from './pages/Home'
import IndustryApplications from './pages/IndustryApplications'
import Products from './pages/Products'
import ResourceCenter from './pages/ResourceCenter'
import Solutions from './pages/Solutions'
import Contact from './pages/Contact'

// 导入关于我们页面
import Company from './pages/about/Company'
import Team from './pages/about/Team'
import News from './pages/about/News'

// 导入解决方案页面
import SoftwareSolution from './pages/solutions/SoftwareSolution'
import DeviceCloudPlatformSolution from './pages/solutions/DeviceCloudPlatformSolution'
import IntelligentHardwareSolution from './pages/solutions/IntelligentHardwareSolution'

function App() {
  return (
    <Router>
      <Routes>
        {/* 首页 */}
        <Route path="/" element={<Home />} />
        
        {/* 主要页面 */}
        <Route path="/industry-applications" element={<IndustryApplications />} />
        <Route path="/products" element={<Products />} />
        <Route path="/resource-center" element={<ResourceCenter />} />
        <Route path="/solutions" element={<Solutions />} />
        
        {/* 解决方案子页面 */}
        <Route path="/solutions/software-solution" element={<SoftwareSolution />} />
        <Route path="/solutions/device-cloud-platform-solution" element={<DeviceCloudPlatformSolution />} />
        <Route path="/solutions/intelligent-hardware-solution" element={<IntelligentHardwareSolution />} />
        
        {/* 关于我们页面 */}
        <Route path="/about/company" element={<Company />} />
        <Route path="/about/team" element={<Team />} />
        <Route path="/about/news" element={<News />} />
        
        {/* 联系我们页面 */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App
