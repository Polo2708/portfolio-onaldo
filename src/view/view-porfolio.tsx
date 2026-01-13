import DescriptionComponent from '../modules/description/components/description-component'
import HeaderComponent from '../modules/header/components/header-component'
import ProyectsComponent from '../modules/proyects/components/proyects-component'
import SkillsComponent from '../modules/skills/components/skills-component'
import EducationComponent from '../modules/education/components/education-component'

function ViewPorfolio() {
    return (
        <div className='h-full flex flex-col gap-4 items-center w-5xl justify-center p-2'>
            <div className='w-full flex items-center p-2'>
                <HeaderComponent />
            </div>
            <div className='w-full text-center p-2'>
                <DescriptionComponent />
            </div>
            <div className='w-full flex flex-col items-start'>
                <ProyectsComponent />
            </div>

            <div className='w-full'>
                <SkillsComponent />
            </div>

            <div className='w-full'>
                <EducationComponent />
            </div>
        </div>
    )
}

export default ViewPorfolio
