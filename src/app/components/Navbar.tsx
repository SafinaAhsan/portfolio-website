"use client"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "../../components/ui/sheet"
import  Link from "next/link"
import { usePathname } from "next/navigation"
import ThemeSwitch from "./ThemeSwitch"
import { useState } from "react"
  
const Navbar = () => {
   const pathname=usePathname() || `/`
   const [isOpen,setOpen] = useState(false)
   const onPressLink=()=>{
    setOpen(false)
   }
   return (
      <div className=" px-10 sm:px-24 py-4">  
        <div className="hidden sm:ml-6 sm:flex sm:items-center sm:gap-8  ">
 <Link
  href="/" 
 prefetch
  className={`${pathname === "/" ? "border-teal-500 dark:text-white h-full inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium" : 
  "border-transparent px-1 pt-1 text-sm font-medium dark:hover:text-white inline-flex items-center border-b-2 text-gray-500 dark:text-gray-300"}`}>
  Home
  </Link>
   
    <Link 
    href="/projects"
     prefetch
      className={`${pathname === "/projects" 
      ? "border-teal-500 dark:text-white text-sm font-medium border-b-2 inline-flex items-center px-1 pt-1 h-full" 
      : "border-transparent text-sm font-medium dark:hover:text-white text-gray-500 inline-flex pt-1 px-1 items-center dark:text-gray-300 "}`}>Projects</Link>
      <Link
     href="/contact"
     prefetch
     className={`${pathname === "/contact" 
     ? "border-teal-500 text-sm font-medium border-b-2 pt-1 px-1 items-center inline-flex dark:text-white h-full " 
     : "border-transparent text-sm font-medium pt-1 px-1 dark:hover:text-white inline-flex items-center text-gray-500 dark:text-gray-300"}`}>
         Contact
         </Link>
   <ThemeSwitch/>
    </div>
    <div className="sm:hidden flex items-center justify-end mr-2 gap-2">
        <ThemeSwitch/>
    <Sheet open={isOpen}
    onOpenChange={(open=>setOpen(open))}>
  <SheetTrigger className=" text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-inset rounded-md p-2 focus:ring-teal-500">
  <svg xmlns="http://www.w3.org/2000/svg" 
  width="20"
   height="20" 
   viewBox="0 0 24 24"
    fill="none" 
    stroke="currentColor"
     stroke-width="2" 
     stroke-linecap="round"
      stroke-linejoin="round" 
      className="lucide lucide-align-justify">
        <line x1="3" x2="21" y1="6" y2="6"/>
        <line x1="3" x2="21" y1="12" y2="12"/>
        <line x1="3" x2="21" y1="18" y2="18"/>
        </svg>
  </SheetTrigger>
  <SheetContent>
   <ul className="">
    <li className="mt-2" 
    ><Link href="/"
    prefetch
    onClick={onPressLink}
    className={`${pathname === "/"
     ? "bg-teal-50 text-teal-500 border-teal-500 dark:bg-gray-800 block border-l-4 pl-3 pr-4 py-2 text-base font-medium"  
     : "block border-transparent border-l-4 pl-3 pr-4 py-2 text-base font-medium dark:hover:bg-gray-700  hover:bg-gray-50 hover:border-gray-300 hover:text-teal-500 dark:text-white text-gray-500"}`}>
        Home
        </Link>
    </li>
    
    <li 
    className="mt-2">
        <Link
        onClick={onPressLink}
         href="/projects"
         prefetch
         className={`${pathname === "/projects" 
         ? "bg-teal-50 dark:bg-gray-800 border-teal-500 text-teal-500 block border-l-4 pl-3 pr-4 py-2 text-base font-medium"
          : "border-transparent block border-l-4 text-base font-medium pl-3 pr-4 py-2 dark:hover:bg-gray-700 dark:text-white text-gray-500 hover:bg-gray-50 hover:text-teal-500  hover:border-gray-300 "}`}>Projects</Link>
        </li>
        <li 
    className="mt-2">
        <Link href="/contact"
        prefetch
        onClick={onPressLink}
        className={`${pathname === "/contact"
         ? "bg-teal-50 text-teal-500 border-teal-500 dark:bg-gray-800  block border-l-4 pl-3 pr-4 py-2 text-base font-medium"  
         : "block hover:bg-gray-50 border-l-4 hover:border-gray-300  hover:text-teal-500  border-transparent pl-3 pr-4 py-2 text-base font-medium dark:hover:bg-gray-700 dark:text-white text-gray-500 "}`}>
            Contact
            </Link>
        </li>
   </ul>
       </SheetContent>

</Sheet>
    </div>
    </div>
   
  
  )
}

export default Navbar