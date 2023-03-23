import { Experience } from '../typings'
import { motion } from 'framer-motion'
import React from 'react'
import ExperienceCard from './ExperienceCard'

type Props = {
    experiences: Experience[]
}

const WorkExperience = ({ experiences }: Props) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'
        >

            <h3 className='absolute top-20 text-1xl sm:top-4 uppercase tracking-[10px] text-yellow-500 sm:text-2xl mb-10'>
                Experience
            </h3>

            <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory  scrollbar-thin 
     scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/70'>
                {experiences.map((experience) => (
                    <ExperienceCard key={experience._id} experience={experience} />
                ))}

            </div>

        </motion.div>
    )
}

export default WorkExperience

// pt - 2 space - x - 1 sm:space-x-5 sm:p-5

// className = 'w-full  flex space-x-5 overflow-x-scroll p-10  snap-mandatory snap-x '