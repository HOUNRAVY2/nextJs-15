import React, { ReactNode } from 'react'
import Layout from '@/components/common/Layout'

interface MainLayoutProps {
    children: ReactNode;
  }
export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div>
      <Layout.Navbar/>
        <div>{children}</div>
      <Layout.Footer/>
    </div>
  )
}
