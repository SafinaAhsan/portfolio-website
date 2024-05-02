import { client } from "../lib/sanity"

interface Data{
  title:string,
  overview:string,
  videoUrl:string,
  _id:string
}
async function getProject(){
  const query=`*[_type == "project"]{
    title,
      overview,
      "videoUrl":video.asset->url,
      _id
  }`

  const data = await client.fetch(query)
  return data
}

const Projects = async () => {
  const data:Data[] = await getProject()
  // console.log(data,"/see")

  return (
   <section>
    <div
     className="text-2xl sm:text-4xl font-bold px-2 sm:px-12 pt-4 ">PRO<span className="text-teal-500">JECTS</span></div>
    <div 
    className="grid gap-8 sm:grid-cols-2 sm:gap-14 px-2 py-4 sm:px-12 sm:py-8">{data.map((project)=>(
<article 
key={project._id} 
className="overflow-hidden dark:border-zinc-600 rounded border border-gray-100 bg-white shadow-lg dark:bg-black dark:shadow-gray-700 shadow-teal-100">
  <video 
  src={project.videoUrl}
   controls />
  <h3 className="text-base sm:text-lg font-medium text-gray-900 dark:text-white px-4 sm:px-6 pt-4">{project.title}</h3>
  <p className="text-xs sm:text-sm mt-2 text-gray-500 sm:text-gray-400 px-4 sm:px-6 pb-6">
    {project.overview}</p>

</article>
    ))}</div>
     </section>
  )
}

export default Projects