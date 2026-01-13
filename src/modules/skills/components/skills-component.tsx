import { CodeXml } from "lucide-react"
import { useSkillsController } from "../controller/skills-controller"

function SkillsComponent() {
    const { skills } = useSkillsController()
    return (
        <div className="w-full text-white flex flex-col gap-2">
            <div className="text-white flex items-center gap-x-2">
                <CodeXml className="size-8" />
                <span className="text-xl font-medium">Habilidades</span>
            </div>
            <div className="grid grid-cols-4 gap-x-2">
                {skills.map((skill, index) => (
                    <div key={index} className="flex flex-col border border-white rounded-md shadow-xs p-2">
                        <div className="">
                            {skill.name}
                        </div>

                        <div className="">
                            {skill.experience}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SkillsComponent
