import type { ReactNode } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import SEO from './SEO'
import SideTools from './SideTools'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <SEO />
      <Navbar />
      {children}
      <Footer />
      <SideTools />
    </>
  )
}

export default Layout
