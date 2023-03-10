import React from 'react'
import DrawerAppBar from '../../components/Navbar'
import TemplateOne from '../../components/Templates/TemplateOne'


export default function Home() {
  return (
    <div>

 <div className='main-content' style={{color: '#000'}}>
  <h2>Templates</h2>
  <p style={{}}>Select a template to get started</p>
  <TemplateOne />
 </div>

    </div>
   

  )
}
