import { PageInfo } from "../typings";
import Link from "next/link";
// import Link from "next/dist/client/link";

import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircle from "./BackgroundCircle/BackgroundCircle";
import { urlFor } from "../sanity";

type Props = {
    pageInfo: PageInfo
};

export default function Hero({ pageInfo }: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Hi, I'm a Software Engineer ",
            "My motto: A Little Coding",
            "A Better Tomorrow",
        ],
        loop: true,
        delaySpeed: 1700,
    });
    return (
        <div className=" h-screen block sm:flex  sm:flex-col space-y-8 items-center justify-center text-center overflow-hidden">
            <BackgroundCircle />
            <img
                className="h-22 w-20  relative rounded-full sm:h-32 sm:w-32 mx-auto object-cover "
                src={urlFor(pageInfo.heroImage).url()}
                alt="Kings=Ike"
            />
            <div className="z-20 ">
                <h2 className=" uppercase text-gray-500 pb-2 tracking-[15px] text-l font-bold ">
                    {pageInfo.name}

                </h2>
                <h1 className="text-2xl sm:text-5xl lg:text-6xl font-semibold px-10">
                    <span className="mr-3">{text}</span>
                    <Cursor cursorColor="#F7AB0A" />
                </h1>

                <div className="pt-5">
                    <Link href="#about">
                        <button className="px-6 py-2 border border-[#e1d9d9] rounded-full uppercase text-xs tracking-widest text-gray-500 transition-all hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A]/40">About</button>
                    </Link>

                    <Link href='#experience'>
                        <button className="px-6 py-2 border border-[#e1d9d9] rounded-full uppercase text-xs tracking-widest text-gray-500 transition-all hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A]/40">Experience</button>
                    </Link>

                    <Link href='#skills'>
                        <button className="px-6 py-2 border border-[#e1d9d9] rounded-full uppercase text-xs tracking-widest text-gray-500 transition-all hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A]/40">Skills</button>
                    </Link>

                    <Link href='#projects'>
                        <button className="px-6 py-2 border border-[#e1d9d9] rounded-full uppercase text-xs tracking-widest text-gray-500 transition-all hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A]/40">Projects</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
