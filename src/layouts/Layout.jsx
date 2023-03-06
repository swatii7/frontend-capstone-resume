import React from 'react'
import Navbar from "../components/Navbar";
export default function Layout({children}) {
  return (<div className='resume_content'>
    <Navbar />
    <div className='page_content' style={{marginTop: '130px'}}>{children}</div>

    </div>
  )
}
