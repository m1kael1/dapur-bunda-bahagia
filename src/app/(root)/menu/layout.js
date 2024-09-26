import Header from '@/components/header'
import React from 'react'

const Layout = ({ children }) => {
  return (<>
    <Header />
    <main>{children}</main>
  </>
  )
}

export default Layout