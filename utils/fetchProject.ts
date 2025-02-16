import { Project } from "../typings";

// export const fetchProjects = async () => {
//     // const res = await fetch('http://localhost:3000/api/getProjects')
//     // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`)
//     const res = await fetch(`http://portfolio-kingsike.sanity.studio/api/getProjects`)

//     const data = await res.json();
//     const projects: Project[] = data.projects

//     return projects;
// }

// import { Project } from "../typings";

// export const fetchProjects = async (): Promise<Project[]> => {
//   try {
//     const res = await fetch(`http://portfolio-kingsike.sanity.studio/api/getProjects`);
    
//     if (!res.ok) {
//       throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`);
//     }

//     const data = await res.json();
//     const projects: Project[] = data.projects;

//     return projects;
//   } catch (error) {
//     console.error('Error fetching projects:', error);
//     return []; // Return an empty array as a fallback
//   }
// };





// export const fetchProjects = async () => {
//     try {
//       const res = await fetch(
//         `https://pa4j5gzb.api.sanity.io/v1/data/query/production?query=*[_type == "project"]`
//       );
 
//       if (!res.ok) {
//         throw new Error(`Failed to fetch data: ${res.statusText}`);
//       }
 
//       const data = await res.json();
//       console.log("project......", data)

//       const projects: Project[] = data.result
//       // console.log("looooooooooooooo.......",data.result.technologies)


//       projects.forEach((project, index) => {
//         console.log(`Project ${index + 1}:`, project.technologies);
//     });

//     // Alternative: Log all technologies in a flat array
//     const allTechnologies = projects.flatMap((project) => project.technologies);
//     console.log("All technologies:", allTechnologies);

//     return projects;
//     } catch (error) {
//       console.error("Error fetching experience:", error);
//       throw error;
//     }
//   };


// export const fetchProjects = async () => {
//   try {
//       const query = `*[_type == "project"]{
//           _id,
//           title,
//           description,
//           "technologies": technologies[]->{
//               _id,
//               name,
//               logo
//           },
//           image
//       }`;

//       const res = await fetch(
//           `https://pa4j5gzb.api.sanity.io/v1/data/query/production?query=${encodeURIComponent(query)}`
//       );

//       if (!res.ok) {
//           throw new Error(`Failed to fetch data: ${res.statusText}`);
//       }

//       const data = await res.json();
//       console.log("Fetched projects:", data.result);

      

//       return data.result;
//   } catch (error) {
//       console.error("Error fetching projects:", error);
//       throw error;
//   }
// };

// export const fetchProjects = async (): Promise<Project[]> => {
//   try {
//       const res = await fetch(
//           `https://pa4j5gzb.api.sanity.io/v1/data/query/production?query=*[_type == "project"]{
//               _id,
//               title,
//               description,
//               "technologies": technologies[]->{
//                   _id,
//                   name,
//                   logo
//               },
//               image
//           }`
//       );

//       if (!res.ok) {
//           throw new Error(`Failed to fetch data: ${res.statusText}`);
//       }

//       const data = await res.json();
//       console.log("Fetched projects:", JSON.stringify(data.result, null, 2));

//       return data.result as Project[];
//   } catch (error) {
//       console.error("Error fetching projects:", error);
//       throw error;
//   }
// };


export const fetchProjects = async (): Promise<Project[]> => {
  try {
    const res = await fetch(
      `https://pa4j5gzb.api.sanity.io/v1/data/query/production?query=*[_type == "project"]{
        _id,
        title,
        description,
        "technologies": technologies[]->{
          _id,
          name,
          logo {
            asset->{
              _id,
              url
            }
          }
        },
        image
      }`
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.statusText}`);
    }

    const data = await res.json();
    // console.log("Fetched projects:", JSON.stringify(data.result, null, 2));

    return data.result as Project[];
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error;
  }
};
