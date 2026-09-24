import React, { lazy } from 'react'
import Layout from '../components/layout.jsx'
import { Box } from '../ui/material.jsx'


const img = '/img1.jpg'
console.log(img)
const Home = () => {
  const variant = {
    imgBox: {
      position: 'relative',
      '&::before': {
        content: "''",
        position: 'absolute',
        inset: 0,
        backgroundImage: 'linear-gradient(to top, #fff, transparent), url("img1.jpg")',
        backgroundSize: 'cover',
        zIndex: -1,
        backgroundColor: 'white'
      }
    }
  }
  return (
    <div className='dbg box-border '>
    <Layout>
        <div className= {`relative w-full h-[64vh]`} style={variant.imgBox}>
     
           <span className="relative z-10">Text on top</span>
       </div>
    </Layout>
    </div>
  )
}

/*

*/
const Button = ({ sx, children }) => {
  return (
    <buttom style={sx} className='w-200 bg-blue-800 px-2 py-1 rounded-xl text-white font-bold text-xl'>
      {children}
    </buttom>
  )
}

const Text = ({ weight = 'small' }) => {
  return (
    <div className='w-screen pt-2 align-center justify-center m-auto'>
      <span className={`font-${weight} text-[1.5em] m-0 p-0`}>
        Text
      </span>
    </div>
  )
}
export default Home