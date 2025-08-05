import React from 'react'
import  {Tilt} from "react-tilt"
import {motion} from 'framer-motion';
import {styles} from '@/style';
import {services} from '@/constants';
import {fadeIn, textVariant,} from '@/utlis/motion';
import { Matrix3 } from 'three';
import { SectionWraper } from '../../hoc';

const ServiceCard = ({index, title,icon})=>{
  return(
    <Tilt className="sm:w-[280px] w-[100%] lg:w-1/5 ">
      <motion.div
      variants={fadeIn("up","tween",0.5*
        index, 0.75)}
        className='w-full green-pink-gradient p-
        [1px] rounded-[20px] shadow-card'
      >
        <div
        options={{
          max:45,
          scale:1,
          speed:450
        }}
        className='bg-tertiary rounded-[20px]
        py-5 px-12 min-h-[280px] flex 
        justify-evenly flex-col items-center'
        >
           <img src={icon} alt={title}
           className='w-16 h-16 object-contain'
           />
           <h3 className='text-[20px] text-white
           font-bold text-center'>{title}</h3>
        </div>

      </motion.div>
    </Tilt>
  )
}
const About = () => {
  return (
    <>
    <section className='sm:max-w-7xl mx-auto px-4 '>
    <motion.div variants={textVariant()}>
      <p className ={styles.sectionSubText}>Intoduction</p>
      <h2 className ={styles.sectionHeadText}>Overview</h2>
    </motion.div>
    <motion.p
    className='mt-4 text-secondary text-[17px]
    max-w-3xl ;eading-[30px]'
    varints={fadeIn("","",0.1,1)}
    >
     I'm experienced software developer with 
     expertise in javascript and Typscript,and
     expertise in frameworks like React, Node js,
     and Three js.I'm a quik learner and collaberate 
     closely with clints to create efficient, scalable
     and user        friendly solutions that solve real world
     problems.Let's work together to bring your ideas to life!
    </motion.p>
    <div className='mt-20 flex flex-wrap sm:gap-5 gap-10 mx-auto justify-center'>
      {services.map((service,index)=>(
        <ServiceCard key={service.title} index=
        {index} {...service}/>
      ))}
    </div>
    </section>
    </>
  )
}

export default SectionWraper(About,"about")