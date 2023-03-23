import { Experience } from "../typings";
// import axios from "axios"

export const fetchExperiences = async () => {
    // const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`)
    const res = await fetch('http://localhost:3000/api/getExperience')
    // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`)
    // console.log(res.data)
    const data = await res.json();
    const experiences: Experience[] = data.experiences


    return experiences;
}