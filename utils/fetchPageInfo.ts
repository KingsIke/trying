// import { PageInfo } from "../typings";

// export const fetchPageInfo = async () => {
//     const res = await fetch('http://portfolio-kingsike.sanity.studio/api/getPageInfo');
//     const data = await res.json();
//     const pageInfo: PageInfo = data.pageInfo
// console.log(pageInfo)
//     return pageInfo;
// }

// import { PageInfo } from "../typings";

// export const fetchPageInfo = async (): Promise<PageInfo | null> => {
//   try {
 
//     const res = await fetch(`http://portfolio-kingsike.sanity.studio/api/getPageInfo`);

//     if (!res.ok) {
//       throw new Error(`Failed to fetch PageInfo: ${res.status} ${res.statusText}`);
//     }

//     const data = await res.json();
//     const pageInfo: PageInfo = data.pageInfo;

//     return pageInfo;
//   } catch (error) {
//     console.error("Error fetching PageInfo:", error);
//     return null; // Return null as fallback in case of an error
//   }
// };


// import { PageInfo } from "../typings";

// export const fetchPageInfo = async (): Promise<PageInfo> => {
//   const res = await fetch(`http://portfolio-kingsike.sanity.studio/api/getPageInfo`);

//   if (!res.ok) {
//     throw new Error(`Failed to fetch page info: ${res.status} ${res.statusText}`);
//   }

//   const data = await res.json();

//   if (!data.pageInfo) {
//     throw new Error("PageInfo not found in the response.");
//   }

//   return data.pageInfo as PageInfo;
// };



import { PageInfo } from "../typings";
  
export const fetchPageInfo = async () => {
  try {
    const res = await fetch(
      `https://pa4j5gzb.api.sanity.io/v1/data/query/production?query=*[_type == "pageInfo"]`
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.statusText}`);
    }

    const data = await res.json();
    // console.log("page", data)

    const pageInfo: PageInfo = data.result[0]; // Adjust based on your query result structure
    // console.log("page", pageInfo)

    return pageInfo;
  } catch (error) {
    console.error("Error fetching PageInfo:", error);
    throw error;
  }
};


