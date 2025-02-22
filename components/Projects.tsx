/* eslint-disable @next/next/no-img-element */
import { urlFor } from '../sanity'
import { motion } from 'framer-motion'
import React from 'react'
import { Project } from '../typings'
import { SkillInterface  as SkillType } from '../typings'

type Props = {
    projects: Project[],
    skills: SkillType[]
}

const Projects = ({ projects,skills }: Props) => {

    return (

        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
                opacity: 1
            }}
            transition={{
                duration: 1.5
            }}
            className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0 space-y-30' >

            <h3 className='absolute top-24 uppercase tracking-[20px]  text-yellow-600 text-2xl '>
                Projects </h3>

            <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20  min-w-0  scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin ">
                {projects?.map((project, i) => (
                    <div key={project._id} className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen md:flex-shrink-0 ">

                        <motion.img
                            initial={{ y: -300, opacity: 0 }}
                            transition={{ duration: 1.2 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            src={urlFor(project.image.asset._ref).url()} 

                            className="h-3/6 w-2/6 sm:h-3/6 sm:w-5/6  md:h-48 md:w-48  pt-12"
                            alt={project.title}
                        />
  


                        <div className='space-y-10 px-0 md:px-10 max-w-6xl'>

                            <h4 className='text-4xl font-semibold text-center' >
                                <span className="underline decoration-[#F7AB0A]/50"> Case Study {i + 1} of {projects.length}:
                                </span>  {project.title}
                            </h4>

                            <div className='flex items-center space-x-2 justify-center'>
            
{/* {project.technologies?.map((technology, techIndex) => (
  <div key={techIndex} className="flex items-center space-x-2">
   
    {technology.logo?.asset && (
      <img
        key={techIndex}
        src={urlFor(technology.logo.asset._ref).url()} 
        className="h-10 w-10"
        alt={technology.title || 'Technology Logo'}
      />
    )}
   
    {technology.title && <span className="text-lg">{technology.title}</span>}
  </div>
))} */}

{project.technologies?.map((technology, techIndex) => {

  const matchingSkill = skills.find(skill => skill._id === technology._id);

  return (
    <div key={techIndex} className="flex items-center space-x-2">
    
      {matchingSkill?.image?.asset?._ref ? (
        <img
          src={urlFor(matchingSkill.image.asset._ref).url()}
          className="h-10 w-10"
          alt={technology.title || 'Technology Logo'}
        />
      ) : technology.logo?.asset?._ref ? (
        <img
          src={urlFor(technology.logo.asset._ref).url()}
          className="h-10 w-10"
          alt={technology.title || 'Technology Logo'}
        />
      ) : null}

  
      {technology.title && <span className="text-lg">{technology.title}</span>}
    </div>
  );
})}


                                
                            </div>



                            <p className='text-lg text-center md:text-left'>{project.summary}</p>
                        </div>
                    </div>
                ))}

            </div>

            <div className="w-full absolute top-[60] bg-[#F7AB0A]/10 left-0 h-[400px] -skew-y-12  "></div>
        </motion.div >

    )
}
export default Projects

