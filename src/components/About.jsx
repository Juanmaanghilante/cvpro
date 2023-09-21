import React from 'react'


import {motion} from 'framer-motion'
import {styles} from '../styles'
import { services } from '../constants'
import {fadeIn,textVariant} from '../utils/motion'
import { Tilt } from 'react-tilt'
import { SectionWrapper } from '../hoc'
const ServiceCard =({index,title,icon})=>{
  return (
    <Tilt className='xs:w-[250px] w-full '>
      <motion.div
      variants={fadeIn("right","spring",0.5*index,0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
        options={{
          max:45,
          scale:1,
          speed:450
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly
        items-center flex-col'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
<h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>

      </motion.div>
    </Tilt>
  )
}
const About = () => {
  return (
   <>
   <motion.div variants={textVariant()}>
    <p className={styles.sectionSubText}> introduction</p>
    <h2 className={styles.sectionHeadText}>Overview.</h2>
   </motion.div>

   <motion.p
   variants={fadeIn("","")}
   className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
   >
"I am a passionate  marketing undergraduate student and junior developer with a background in web technologies. My experience ranges from creating attractive and functional user interfaces using HTML, CSS and JavaScript, to developing dynamic web applications with React.js and database management using MySQL and Sequelize. In addition, I am familiar with using Node.js and Express for creating backend servers. 

My ability to work in a team and my commitment to constant improvement are complemented by my proficiency with Git, which allows me to collaborate on joint projects and maintain source code control. I am also experienced in implementing EJS template engines for the creation of dynamic and custom web pages.
   </motion.p>
   <div className='mt-20 flex flex-wrap gap-10'>
     {services.map((service,index)=>(
      <ServiceCard key={service.title} index={index} {...service} /> 
    ))}


   </div>
   
   </>
  ) 
}


export default SectionWrapper(About, "about");