import { PageInfo } from "../typings";
import { motion } from "framer-motion";
import React from "react";
import { urlFor } from "../sanity";

type Props = {
    pageInfo: PageInfo
};

const About = ({ pageInfo }: Props) => {
    return (
        <motion.div initial={{
            opacity: 0
        }}
            whileInView={{
                opacity: 1
            }}
            transition={{
                duration: 1.5
            }}
            className="block pt-14 sm:flex sm:flex-col relative h-screen text-center px-10 sm:px-0  md:text-left md:flex-row max-w-7xl  justify-evenly mx-auto items-center">
            <h3 className=" sm:absolute  uppercase tracking-[20px] text-yellow-600 text-2xl sm:top-16">
                About
            </h3>
            <motion.img
                initial={{
                    x: -200,
                    opacity: 0,
                }}
                transition={{
                    duration: 1.2,
                }}
                whileInView={{
                    x: 0,
                    opacity: 1,
                }}
                viewport={{
                    once: true,
                }}
                src={urlFor(pageInfo.profilePic).url()} alt=""
                className=" -mb-20 md:mb-0 flex-shrink-0 h-10 w-10  sm:h-56 sm:w-56 sm:rounded-full object-cover rounded-lg md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[500px]" />

            <div className=" space-y-1 pl-9 px-4 pt-14 xs:space-y-10 sm:px-0 md:px-10">
                <h4 className="text-sm  sm:text-4xl font-semibold">
                    My <span className="underline italic decoration-[#F7A223]"> Little </span> Background
                </h4>
                <p className="text-xs sm:text-base">
                    {pageInfo.backgroundInformation}
                </p>
            </div>
        </motion.div>
    );
};

export default About;
