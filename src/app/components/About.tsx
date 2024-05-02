"use client"
import Image from "next/image"
import image2 from "../../../public/image 2.jpeg"

const About = () => {
   return (
    <section className="mt-8 sm:mt-20 px-2 sm:px-10 py-4">
    <div className="sm:flex items-center justify-between lg:grid grid-cols-12 gap-8 ">
        <div className="lg:col-span-6  mb-6 sm:mb-0 flex-shrink-0">
            <Image 
            src={image2}
             alt="laptop"
             width={400}
             height={900}
             className="w-full h-auto"/>
          
        </div>
         <div className="lg:col-span-6">
            <h1 className="text-4xl font-bold">About
            <span className="text-teal-500"> Me</span></h1>
            <p className="mt-4 sm:mt-2 text-base lg:text-md mb-4 sm:mb-2 leading-8 tracking-tight">I m a website developer with a passion for creating interactive and responsive web applications. I have experience working with Typescript, Next Js, Tailwind CSS, Sanity io, Shedcn ui, Python, FasTAPI, SQLModel. I m a quick learner and always ready to seek knowledge and new skill sets. I m a team player and i m excited to work with others to create amazing applications.And Currently I am learining Generative AI.
            </p>
     </div>
         </div>
    </section>
  )
}

export default About