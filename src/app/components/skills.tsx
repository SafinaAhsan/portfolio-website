import {my_skills} from "../../app/components/contents/icons"
import {backend_skills} from "../../app/components/contents/icons"
import SkillsDataProvider from "./skillsDataProvider"

const Skills = () => {
  return (
    <section>
     <h1 className="text-4xl font-bold sm:text-center mt-8 px-4 sm:px-0">
    Skills &  <span className="text-teal-500">
        Expertise
    </span>
</h1>
 <div
 id="skills"
 className="flex flex-col overflow-hidden items-center justify-center gap-3 h-full relative py-4 sm:py-8"
 style={{transform:"scale(0.9)"}}>
    <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {my_skills.map((image:any , index:any)=>(
            <SkillsDataProvider
            key={index}
            source={image.Image}
            width={image.width}
            height={image.height}
            index={index}/>
        ))}
    </div>
    <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {backend_skills.map((image:any , index:any)=>(
            <SkillsDataProvider
            key={index}
            source={image.Image}
            width={image.width}
            height={image.height}
            index={index}/>
        ))}
    </div>
 </div>
 </section>
  )
}

export default Skills