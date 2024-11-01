
import { EXPERIENCES } from "../constants"
export default function Experience() {
  return (
    <div className="border-b border-neutral-900 pb-4">
    <h1 className="text-center my-20 text-4xl">Experiences</h1>
      <div className="ms-3">
        {
            EXPERIENCES.map((experience,index) => (
                 <div key={index} className="mb-8 flex flex-wrap lg:justify-center" >

                  <div className="w-full lg:w-1/4">
                    <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
                  </div>

                  <div className="w-full max-w-xl lg:w-3/4">
                    <h6 className="mb-2 font-semibold">
                        {experience.role} - {" "}
                        <span className="text-sm text-purple-100">
                            {experience.company}
                        </span>
                    </h6>
                    <p className="mb-4 text-neutral-400">{experience.description}</p>
                    {experience.technologies.map((tech,index)=>(
                        <span key={index} className=" mr-2 text-sm text-gray-500 px-2 py-1">
                            {tech}
                        </span>
                    ))}
                  </div>
                  
                 </div>
            ))
        }
      </div>
    </div>
  )
}
