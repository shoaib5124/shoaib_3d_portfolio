import { useState } from 'react';
import {BrowserRouter} from 'react-router-dom';
import './index.css'; 
import {About,Contact,Experience,Feedbacks,
  Hero,Navbar,Tech,Works,StarsCanvas} from './components/components'
function App() {
  const [confirm,setcon] = useState('')
  return (
    // <h1>Hello</h1>
    <BrowserRouter>
     <div className="relative z-0 bg-primary">
      <div className='bg-hero-pattern bg-cover
       bg-no-repeat bg-center'>
        <Navbar/>
        <Hero/>
      </div>
      <About/>
      <Experience/>
      <Tech/>
      {/* <Works/> */}
      {/* <Feedbacks/> */}
      <div className='relative z-0'>
        {/* <Contact/> */}
        {/* <StarsCanvas/> */}
      </div>
     </div>
    </BrowserRouter>
  )
}

export default App
