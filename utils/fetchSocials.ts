// import { Social } from "../typings";

// export const fetchSocial = async () => {
//     const res = await fetch("http://localhost:3000/api/getSocials")
//     // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`)
//     // 
//     const data = await res.json();
//     const socials: Social[] = data.socials

//     return socials;
// }

import { Social } from "../typings";

// export const fetchSocial = async (): Promise<Social[]> => {

//     const res = await fetch(`http://portfolio-kingsike.sanity.studio/api/getSocials`);

//     // Check if the fetch call was successful
//     if (!res.ok) {
//       throw new Error(`Failed to fetch socials: ${res.status} ${res.statusText}`);
//     }

//     const data = await res.json();
//     const socials: Social[] = data.socials;

//     return socials;

// };



export const fetchSocial = async () => {
    try {
      const res = await fetch(
        `https://pa4j5gzb.api.sanity.io/v1/data/query/production?query=*[_type == "social"]`
      );
 
      if (!res.ok) {
        throw new Error(`Failed to fetch data: ${res.statusText}`);
      }
 
      const data = await res.json();
      // console.log("social", data)
      const socials: Social[] = data.result

      return socials;
    } catch (error) {
      console.error("Error fetching experience:", error);
      throw error;
    }
  };