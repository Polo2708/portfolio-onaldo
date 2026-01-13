import { BriefcaseBusiness } from "lucide-react"
import TimeLineItem from "../../../shared/time-line-item"
import { useProyectController } from "../controller/proyects-list-controller"

function ProyectsComponent() {
    const { proyects } = useProyectController()

    return (
        <div className="flex flex-col gap-y-4">

            <div className="text-white flex items-center gap-x-2">
                <BriefcaseBusiness className='size-8' />
                <span className='text-xl '>
                    Experiencia laboral
                </span>
            </div>
            <div className="flex flex-col">
                {proyects.map((pro, index) => (
                    <TimeLineItem key={index} date={pro.date} company={pro.company} title={pro.name} description={pro.description} />
                ))}
            </div>
        </div>
    )
}

export default ProyectsComponent
