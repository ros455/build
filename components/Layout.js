import React from 'react'
import Header from './Header';
import Footer from './Footer';
import CallToAction from './CallToAction';
import LiveBackground from './LiveBackground';
 const Layout = ({children}) => {
  return (
    <>
      <Header/>
      {/* <LiveBackground />
      <CallToAction /> */}
      <div>
      {children}
      </div>
      <Footer/>
    </>
  )
}

export default Layout;
