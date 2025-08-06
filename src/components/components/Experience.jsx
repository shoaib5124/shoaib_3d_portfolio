import React from 'react'
import {VerticalTimeline,
VerticalTimelineElement} from 'react-vertical-timeline-component';
import {motion} from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import {styles} from '@/style';
import {experiences} from '@/constants';
import {SectionWraper} from '../../hoc';
import {textVariant} from '@/utlis/motion';
// import Background from 'three/src/renderers/common/Background.js';

const ExperienceCard = ({experience}) =>(
  <VerticalTimelineElement
  contentStyle={{Background:'#1d1836',color:
  '#fff'}}
  // contentArrayStyle={{borderRight:'7px solid
  // #232631'}}
  // date={{}}
  >
    
  </VerticalTimelineElement>
)
const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}
        >What I have done so far</p>
        <h2 className={styles.sectionHeadText}>
          Work Experience</h2>
      </motion.div>
      <div className='mt-2 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience,index)=>(
            <ExperienceCard key={index} experience=
            {experience}/>
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWraper(Experience , "experience")