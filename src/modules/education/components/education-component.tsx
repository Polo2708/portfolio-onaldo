import { GraduationCap } from "lucide-react"
import { useEducationController } from "../controller/education-controller"

function EducationComponent() {
  const { educations } = useEducationController()
  return (
    <div className="">
      <div className="text-white text-xl font-medium flex items-center gap-x-2">
        <GraduationCap className="size-8" />
        <span>
          Educación
        </span>
      </div>
      <div className="border border-white rounded-md w-full h-40 p-2 grid grid-cols-3 gap-x-2">
        {educations.map((e, index) => (
          <div key={index} className="flex flex-col gap-2 border border-white rounded-md shadow-white shadow-md">
            <div className="text-white p-2">
              <p>
                Escuela: <br/>
                {e.institution}
              </p>
              <p>
                Titulo: 
                {e.title}
              </p>
              <p>
                Finalizado: 
                {e.finalDate}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default EducationComponent
