import React from 'react'
import {motion} from 'framer-motion';
import {styles} from '@/style'
import { ComputersCanvas } from './canvas';
const Hero = () => {

  return (
    <section className='relative w-full h-screen '>
      <div className='flex w-full gap-3 sm:max-w-7xl mx-auto relative top-[120px] px-4 '>
        <div className='flex flex-col justify-center items-center'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
          <div className='bg-[#915eff] w-1 sm:h-80 h-40 violet-gradient '/>
        </div>
        <div className='flex flex-col gap-4 mt-3'>
          <h1 className='sm:text-5xl text-3xl font-bold'>Hi,I'm 
          <span className='text-[#915eff]'> Shoaib Ul Hassan</span></h1>
          <p className='sm:text-2xl text-1xl'>I'm experienced frontend website <br></br>
            developer and worked on multiple projects </p>
        </div>
      </div>
      <div className='relative inset-0 w-full h-[55%] px-3'>
         < ComputersCanvas/>
         {/* <div className='absolute 
         bottom-20 w-full flex justify-center
      items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px]
           rounded-3xl border-4 border-secondary
           flex justify-center items-start p-2'>
            <motion.div
            animate={{
              y:[0,26,0]
            }}      
            transition={{
              duration:1.5,
              repeat: Infinity,
              repeatType:'loop'
            }}
            className='w-3 h-3 rounded-full
            bg-secondary mb-1
            '
            />
           </div>    
        </a>
      </div> */}
      </div>  
     
    </section>
  )
}
export default Hero