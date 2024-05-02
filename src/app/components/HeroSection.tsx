"use client"
import Image from "next/image";
import image1 from "../../../public/image.jpeg";
import { TypeAnimation } from "react-type-animation";
import { Button } from "@/components/ui/button";
import  Link  from "next/link"

const HeroSection = () => {
    const linkInProfile="https://www.linkedin.com/in/safina-ahsan-173b75245/";
    const emailLink="safinabagasra@gmail.com";

    return (
        <section className="lg:grid grid-cols-12">
            <div className="lg:col-span-7 place-self-center container">
                <h1 className="hidden sm:block  mb-4 text-4xl lg:text-6xl font-extrabold">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-teal-600">
                    Hello I&apos;m
                    </span>
                    <span>
                        <TypeAnimation
                            sequence={[
                                ' Safina',
                                1000,
                                ' Web Developer',
                                1000,
                                ' Mobile Developer',
                                1000,
                                ' UI/UX Designer',
                                1000
                            ]}
                            wrapper="span"
                            speed={10}
                            repeat={Infinity}
                        />
                    </span>
                </h1>
                <p className="hidden sm:block text-gray-500 px-6 sm:px-0 dark:text-gray-300 text-lg lg:text-xl leading-8 tracking-tight">I am a web developer</p>
              
                <Button className=" hidden sm:block lg:flex lg:mt-4 w-2/12 mt-2 text-center bg-gradient-to-r from-blue-900 to-teal-600 rounded text-white "
       type="submit"
       ><Link href="/contact">Hire me</Link></Button>
            </div>

            <div className="lg:col-span-5 mt-4 sm:mt-0 flex flex-col items-center justify-center">
                <Image src={image1} 
                alt="me"
                 width={300} 
                 height={300} 
                 className="rounded-full w-250 lg:w-400 h-250 lg:h-400 place-self-center" />
                <h1 
                className="lg:hidden md:hidden  mb-4 text-4xl lg:text-6xl font-extrabold">
                    <span
                     className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-teal-600">Hello I&apos;m</span>
                    <span>
                        <TypeAnimation
                            sequence={[
                                ' Safina',
                                1000,
                                ' Web Developer',
                                1000,
                                ' Mobile Developer',
                                1000,
                                ' UI/UX Designer',
                                1000
                            ]}
                            wrapper="span"
                            speed={10}
                            repeat={Infinity}
                        />
                    </span>
                </h1>
                <p className="lg:hidden md:hidden text-gray-500 px-6 sm:px-0 dark:text-gray-300 text-lg lg:text-xl leading-8 tracking-tight">I am a web developer</p>
               <Button  className=" lg:hidden md:hidden w-10/12 text-white mt-2 text-center bg-gradient-to-r from-blue-900 to-teal-600 rounded"
       type="submit"
       ><Link href="/contact">Hire me</Link>
       </Button>
</div>
        </section>
    );
};

export default HeroSection;
