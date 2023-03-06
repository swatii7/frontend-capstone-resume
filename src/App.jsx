import { useState } from 'react'
import {Route,Routes} from "react-router";
import About from './views/About/About';
import Details from './views/Details/Details';
import Home from './views/Home/Home';
import Preview from './views/Preview/Preview';
  import Layout from './layouts/Layout';
function App() {
 

  return (
    <div className="App">
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/details" element={<Details />} />
            <Route path="/preview" element={<Preview />} />
            <Route path="/about" element={<About />} /> 
          </Routes>
          </Layout> 
    </div>
  )
}

export default App
