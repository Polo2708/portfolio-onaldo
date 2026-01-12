import TimeLineItem from "../../../shared/time-line-item"
import { useProyectController } from "../controller/proyects-list-controller"

function ProyectsComponent() {
    const { proyects } = useProyectController()

    return (
        <div className="flex flex-col">
            {proyects.map((pro, index) => (
                <TimeLineItem key={index} date={pro.date} company={pro.company} title={pro.name} description={pro.description} />
            ))}
        </div>
    )
}

export default ProyectsComponent
