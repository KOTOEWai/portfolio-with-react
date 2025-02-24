import { PROJECTS } from "../constants";

export default function Projects() {
  return (
    <div className="border-b border-neutral-500 pb-4">
      <h2 className="my-20 text-center text-4xl">Projects</h2>
      <div className="ms-4">
        {
            PROJECTS.map((project,index)=>(
               <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                 <div className="w-full lg:w-1/4">
                   <img src={project.image}
                    alt={project.title}
                     width={150}
                      height={150}
                      className="rounded-lg object-cover object-center" />
                 </div>
                 <div className="w-full max-w-xl lg:w-3/4">
                   <h6 className="mb-2 font-semibold ">{project.title}</h6>
                   <p className="mb-4 text-neutral-400">{project.description}</p>
                   {
                    project.technologies.map((tech,index)=>(
                        <span key={index} className="mr-2 text-xs text-neutral-600">
                          {tech}
                        </span>
                    ))
                   }
                 </div>

               </div>
            )
         )
        }
      </div>
    </div>
  )
}
