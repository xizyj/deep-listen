import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { AuthContext } from '@/contexts/authContext';
import Layout from '@/components/layout/Layout';
import Home from "@/pages/Home";
import Solutions from "@/pages/Solutions";
import Products from "@/pages/Products";
import Industries from "@/pages/Industries";
import Resources from "@/pages/Resources";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";

// 占位组件 - 用于尚未实现的页面
const ComingSoon = ({ title }: { title: string }) => (
  <Layout>
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl font-bold mb-6">{title}</h1>
      <p className="text-xl text-gray-600 mb-8">页面正在开发中，敬请期待...</p>
      <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
    </div>
  </Layout>
);

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, logout }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/solutions/:type" element={<ComingSoon title="解决方案详情" />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:type" element={<ComingSoon title="产品详情" />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/industries/:type" element={<ComingSoon title="行业应用详情" />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/resources/:type" element={<ComingSoon title="资源详情" />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/:type" element={<ComingSoon title="关于我们详情" />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthContext.Provider>
  );
}
