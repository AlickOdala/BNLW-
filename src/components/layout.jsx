import React from 'react'
import Navbar from './navbar.jsx'



const Layout = ({ children }) => {
  
  try {
    return (
      <div className='grid-cols-12 dbg gap-4 h-screen p-1 box-border overflow-y-auto '>
        <div className='col-span-12 dbg h-[9vh]'>
          <Navbar/>
        </div>
         <div className='col-span-12 dbg box-border row-span-2 min-h-[89vh]'>
          {children}
        </div>
      </div>
    )
  } catch (err) {
    console.error(err.message)
  }
}
export default Layout