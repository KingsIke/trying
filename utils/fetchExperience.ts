import { Experience } from "../typings";
// import axios from "axios"

// export const fetchExperiences = async () => {
//     // const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`)
//     const res = await fetch('http://localhost:3000/api/getExperience')
//     // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`)
//     // console.log(res.data)
//     const data = await res.json();
//     const experiences: Experience[] = data.experiences


//     return experiences;
// }

// export const fetchExperiences = async (): Promise<Experience[]> => {
//     try {
//       const res = await fetch(`http://portfolio-kingsike.sanity.studio/api/getExperience`);
      
//       if (!res.ok) {
//         throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`);
//       }
//       const data = await res.json();
//       const experiences: Experience[] = data.experiences;
  
//       return experiences;
//     } catch (error) {
//       console.error('Error fetching projects:', error);
//       return []; // Return an empty array as a fallback
//     }
//   };
  


  
export const fetchExperiences = async () => {
    try {
      const res = await fetch(
        `https://pa4j5gzb.api.sanity.io/v1/data/query/production?query=*[_type == "experience"]`
      );
  
      if (!res.ok) {
        throw new Error(`Failed to fetch data: ${res.statusText}`);
      }
  
      const data = await res.json();
      // console.log("experience", data)
  
      const experiences: Experience[] = data.result
  
  
      return experiences;
    } catch (error) {
      console.error("Error fetching experience:", error);
      throw error;
    }
  };
  
  
