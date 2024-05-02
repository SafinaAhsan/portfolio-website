import { FC } from "react"
interface IconsProp{
    className?:string
}

const Icons: FC<IconsProp> =({className}) => {
    const linkInProfile="https://www.linkedin.com/in/safina-ahsan-173b75245/"
    const emailLink="safinabagasra@gmail.com"
  return (
    <div className={className}> 
        <div className="flex items-center  space-x-2 ">  
    <a href={linkInProfile} target="blank" rel="noopener noreferrer">
   <svg
 viewBox="0 0 1024 1024"
 fill="currentColor"
 height="1em"
 width="1em"
 className="w-8 h-6 text-teal-500 hover:text-teal-600"
>
 <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1168.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z" />
</svg>
</a>
<a href={`mailto:${emailLink}`}>
<svg
 viewBox="0 0 900 1000"
 fill="currentColor"
 height="1em"
 width="1em"
 className="w-8 h-8 text-teal-500 hover:text-teal-600"
>
 <path d="M30 264C8.667 252-.667 238.667 2 224c1.333-9.333 10-14 26-14h846c25.333 0 32 10.667 20 32-5.333 9.333-13.333 16.667-24 22-9.333 4-73.333 38-192 102s-179.333 96.667-182 98c-10.667 6.667-26 10-46 10-18.667 0-34-3.333-46-10-2.667-1.333-63.333-34-182-98S39.333 268 30 264m850 100c13.333-6.667 20-3.333 20 10v368c0 10.667-5.667 21.333-17 32-11.333 10.667-22.333 16-33 16H50c-10.667 0-21.667-5.333-33-16-11.333-10.667-17-21.333-17-32V374c0-13.333 6.667-16.667 20-10l384 200c12 6.667 27.333 10 46 10s34-3.333 46-10l384-200" />
</svg>
</a>
</div>
</div>
  )
}

export default Icons