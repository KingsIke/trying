import { motion } from "framer-motion";
import React from "react";
import Skill from "./Skill";
import { SkillInterface  as SkillType } from '../typings'

type Props = {
    skills: SkillType[]
};

const Skills = ({ skills }: Props) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className=" flex relative flex-col text-center md:text-left xl:flex-row max-w-[600px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center ">

            {/* <h3 className="absolute top-16 uppercase tracking-[20px]  text-yellow-600 text-2xl">
                Skills
            </h3>
            <p className="absolute w-auto top-24 uppercase text-l tracking-[3px] text-gray-500 w-100 ">Hover over a SkilL for current Proficiency</p> */}


<h3 className="absolute top-16 uppercase tracking-[20px] text-yellow-600 text-xs bg-blue-500 sm:text-lg sm:bg-red-600 md:text-xl md:bg-orange-500 lg:text-2xl lg:bg-purple-500">
    Skills
</h3>
<p className="absolute w-auto top-24 uppercase text-l tracking-[3px] text-gray-500 w-100 text-xs sm:text-lg md:text-xl">
    Hover over a Skill for current Proficiency
</p>


            <div className="grid grid-cols-3 gap-4 sm:grid-cols-4">
                {skills?.slice(0, skills.length / 2).map((skill) => (
                    <Skill key={skill._id} skill={skill} />
                ))}

                {skills?.slice(skills.length / 2, skills.length).map((skill) => (
                    <Skill key={skill._id} skill={skill} directionLeft />
                ))}



            </div>



        </motion.div>
    );
}
export default Skills
