import { Experience } from '../typings'
import { motion } from 'framer-motion'
import React from 'react'
import { urlFor } from '../sanity'
// import skill from '@/portfolio-kingsike/schemas/skill'

type Props = {
    experience: Experience
}

const ExperienceCard = ({ experience }: Props) => {
    return (
        <article className="mt-24 h-4/5 w-fit space-y-1 sm:mt-0 sm:flex sm:flex-col  rounded-lg item-center sm:space-y-7 flex-shrink-0 sm:w-[400px] sm:h-fit  md:w-[500px] md:h-fit xl:w-[600px] xl:h-fit  xl:space-y-1 snap-center bg-[#421f6f]   hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden ">
            <motion.img
                initial={{
                    y: -100,
                    opacity: 0
                }}
                transition={{ duration: 1.2 }}
                whileInView={{
                    opacity: 1, y: 0
                }}
                viewport={{ once: true }}
                src={urlFor(experience.companyImage).url()}
                className='w-10 h-10 mt-1  sm:w-20 sm:h-20 sm:ml-40 sm:mt-3 rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center bg-[#27c64c]' alt="" />

            <div className='px-0 pl-1 sm:pl-3 md:px-10'>
                <h4 className='text-xl sm:text-4xl font-light'> {experience.jobTitle}</h4>
                <p className='mt-0 text-md sm:font-bold sm:text-2xl sm:mt-1'>{experience.company}</p>
                <div className='flex space-x-2 my-2'>
                    {experience.technologies.map((technology) => (
                        <img
                            key={technology._id}
                            className="h-5 w-5 sm:h-10 sm:w-10 rounded-full"
                            src={urlFor(technology.image).url()}
                        />
                    ))}
                    {/* {experience.technologies.image && (
                        <img src={urlFor(experience.technologies.image).url()} alt="" />

                    )
                    })} */}


                </div>
                <p className='uppercase py-1 sm:py-5 text-gray-300'>{new Date(experience.dateStarted).toDateString()} - {experience.isCurrentlyWorkingHere ? "Present" : new Date(experience.dateEnded).toDateString()}
                </p>

                <ul className=' space-y-0 text-xs sm:text-sm sm:space-y-0 list-disc h-80 overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A]/80  xl:space-y-4 ml-5 xl:text-md'>
                    {experience.points.map((point, i) => (
                        <li key={i}>{point}</li>
                    ))}

                </ul>
            </div>
        </article>
    )
}
export default ExperienceCard