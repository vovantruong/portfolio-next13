import React from 'react'
import { motion } from 'framer-motion'


const SkillChild = ({ name, x, y }) => {
    return (
        <motion.div
            className='flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 
                    shadow-dark cursor-pointer absolute'
            whileHover={{ scale: 1.05 }}
            initial={{ x: 0, y: 0 }}
            whileInView={{ x: x, y: y }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
        >
            {name}
        </motion.div>
    )
}

const Skills = () => {
    return (
        <div className='skill-section'>
            <h2 className='font-bold text-8xl mt-64 w-full text-center'>Skills</h2>
            <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight'>
                <motion.div
                    className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 
                    shadow-dark cursor-pointer'
                    whileHover={{ scale: 1.05 }}
                >
                    Web
                </motion.div>
                <SkillChild name="HTML" x="-22vw" y="2vw" />
                <SkillChild name="CSS" x="-5vw" y="-10vw" />
                <SkillChild name="Javascript" x="20vw" y="6vw" />
                <SkillChild name="Bootstrap" x="-20vw" y="-15vw" />
                <SkillChild name="ReactJs" x="0vw" y="13vw" />
                <SkillChild name="Tailwind CSS" x="15vw" y="-12vw" />
                <SkillChild name="Responsive" x="32vw" y="-5vw" />
                <SkillChild name="SCSS & SASS" x="-25vw" y="18vw" />
            </div>
        </div>
    )
}

export default Skills