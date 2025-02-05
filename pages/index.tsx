import type { GetStaticProps } from 'next'
import Head from 'next/head'
// import { Inter } from '@next/font/google'
// import Header from '@/components/Header'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import WorkExperience from '../components/WorkExperience'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact/Contact'
import Link from 'next/link'
// import { type } from 'os'

import { Experience, PageInfo, Project, SkillInterface , Social } from '../typings'
import { fetchPageInfo } from '../utils/fetchPageInfo'
// import { fetchExperiences } from '../utils/fetchExperience'
import { fetchSkills } from '../utils/fetchSkills'
import { fetchProjects } from '../utils/fetchProject'
// import { fetchSocial } from '../utils/fetchSocials'
// import social from '@/portfolio-kingsike/schemas/social'


type Props = {
  pageInfo: PageInfo;
  // experiences: Experience[];
  skills: SkillInterface [];
  projects: Project[];
  // socials: Social[]
}


// const inter = Inter({ subsets: ['latin'] })

const Home = (
  { pageInfo,
    //  experiences, 
    skills, 
    projects, 
    // socials 
    }: Props
) => {
  return (
    <div className='bg-[rgb(21,21,21)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
      <Head>
        <title>{pageInfo.name} - Portfolio</title>

      </Head>

      {/* Header */}
      {/* <Header socials={socials} /> */}

      {/* Hero */}
      
       <section id="hero" className='snap-start'>
        <Hero
          pageInfo={pageInfo}
        />
      </section> 

      {/* About */}
       <section id='about' className='snap-center'>
        <About
          pageInfo={pageInfo}
        />
      </section> 

      {/* Experience */}
      {/* <section id='experience' className='snap-center'>
        <WorkExperience experiences={experiences} />
      </section> */}

      {/* Skill */}

       <section id='skills' className='snap-center'>
        <Skills skills={skills} />
      </section> 

      {/* Projects */}
       <section id='projects' className='snap-center'>
        <Projects projects={projects} />

      </section> 

      {/* Contact Me */}
      <section id="contact" className='snap-center'>
        <Contact />
      </section>

      <Link href='#hero'>
        <footer className='sticky bottom-2 w-full cursor-pointer'>
          <div className="flex items-center justify-center">
            <img
              className='h-10 w-10 mt-3 sm:h-20 sm:w-20 rounded-full filter grayscale hover:grayscale-0 cursor-pointer'
              src="https://res.cloudinary.com/logistics-kingsike/image/upload/v1675074000/FOOD/WhatsApp_Image_2023-01-30_at_10.57.35_AM_tsfess.jpg"
              alt=""
            />
          </div>

        </footer>
      </Link>
    </div >
  )
}
export default Home

// export const getStaticProps: GetStaticProps<Props> = async () => {
//   const pageInfo: PageInfo = await fetchPageInfo()
//   const experiences: Experience[] = await fetchExperiences()
//   const skills: Skill[] = await fetchSkills()
//   const projects: Project[] = await fetchProjects()
//   const socials: Social[] = await fetchSocial()

//   return {
//     props: {
//       pageInfo,
//       experiences,
//       skills,
//       projects,
//       socials
//     },
//     revalidate: 10,
//   }
// }




export const getStaticProps: GetStaticProps<Props> = async () => {
  try {
    const pageInfo = await fetchPageInfo();
    // const experiences = await fetchExperiences();
    const skills = await fetchSkills();
    const projects = await fetchProjects();
    // const socials = await fetchSocial();

    if (!pageInfo) {
      throw new Error("PageInfo not found");
    }

    return {
      props: {
        pageInfo,
        // experiences: experiences || [],
        skills: skills || [],
        projects: projects || [],
        // socials: socials || [],
      },
      revalidate: 10,
    };
  } catch (error) {
    console.error("Error in getStaticProps:", error);
    return {
      notFound: true, // Show a 404 page if an error occurs
    };
  }
}