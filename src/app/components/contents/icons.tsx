import { StaticImageData } from "next/image"
import typescript from "../../../../public/typescript.jpeg"
import tailwind from "../../../../public/tailwind css.jpeg"
import nextjs from "../../../../public/next js.jpeg"
import sanity from "../../../../public/sanity.jpeg"
import shedcn from "../../../../public/shedcn.jpeg"
import python from "../../../../public/python.jpeg"
import fastapi from "../../../../public/fastapi.jpeg"
import sql from "../../../../public/sql.jpeg"
import docker from "../../../../public/docker.jpeg"

interface Skills{
    skill_name : string
Image : StaticImageData
width: number
height : number
}
export const my_skills:Skills[] = [{
    skill_name : "Typescript",
    Image : typescript,
    width: 60,
    height : 60
    }, {
skill_name : "Tailwind-CSS",
Image : tailwind,
width: 60,
height : 60
},{
    skill_name : "Next-JS",
    Image : nextjs,
    width: 60,
    height : 40
    },{
        skill_name : "sanity",
        Image : sanity,
        width: 90,
        height : 90
        },{
            skill_name : "ShedCn",
            Image : shedcn,
            width: 100,
            height : 100
            }]
    export const backend_skills:Skills[]=[
        {
            skill_name : "python",
            Image : python,
            width: 60,
            height : 40
            },{
                skill_name : "FastApi",
                Image : fastapi,
                width: 90,
                height : 90
                },{
                    skill_name : "SQl-Model",
                    Image : sql,
                    width: 70,
                    height : 70
                    },{
                        skill_name : "Docker",
                        Image : docker,
                        width: 80,
                        height : 80
                        }]
    