import { useProyectController } from "../controller/proyects-list-controller"

function ProyectsComponent() {
    const { proyectsList } = useProyectController()
    // console.log(proyectsList)
    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">
            {proyectsList.map((pro) => (
                <div key={pro.id} className="text-white">
                    <h1>{pro.name}</h1>

                </div>
            ))}
        </div>
    )
}

export default ProyectsComponent
