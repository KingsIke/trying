// import { Skill } from "../typings";

// export const fetchSkills = async () => {
//     const res = await fetch('http://localhost:3000/api/getSkills')
//     // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`)
//     // 
//     const data = await res.json();
//     const skills: Skill[] = data.skills

//     return skills;
// }

import { SkillInterface  } from "../typings";

// export const fetchSkills = async (): Promise<Skill[]> => {

//     // Use the environment variable for the base URL to keep it dynamic
//     const res = await fetch(`http://portfolio-kingsike.sanity.studio/api/getSkills`);

//     // Validate response status
//     if (!res.ok) {
//       throw new Error(`Failed to fetch skills: ${res.status} ${res.statusText}`);
//     }

//     const data = await res.json();
//     const skills: Skill[] = data.skills;

//     return skills;
  
// };






export const fetchSkills = async () => {
    try {
      const res = await fetch(
        `https://pa4j5gzb.api.sanity.io/v1/data/query/production?query=*[_type == "skill"]`
      );
 
      if (!res.ok) {
        throw new Error(`Failed to fetch data: ${res.statusText}`);
      }
 
      const data = await res.json();
      // console.log("skill", data)cle

      const skills: SkillInterface [] = data.result
      // console.log("skills////////",skills)

    return skills;
    } catch (error) {
      console.error("Error fetching experience:", error);
      throw error;
    }
  };



  
