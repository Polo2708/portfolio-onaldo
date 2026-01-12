
import { BriefcaseBusiness } from 'lucide-react'
import DescriptionComponent from '../modules/description/components/description-component'
import HeaderComponent from '../modules/header/components/header-component'
import ProyectsComponent from '../modules/proyects/components/proyects-component'

function ViewPorfolio() {
    return (
        <div className='h-full flex flex-col items-center w-5xl justify-center p-2 overflow-x-hidden no-scrollbar'>

            <div className=''>
                <HeaderComponent />
            </div>
            <div className='w-full text-center p-2'>
                <DescriptionComponent />
            </div>
            <div className='w-full flex flex-col items-start gap-8 px-20 py-2'>
                <div className='flex items-center mb-6 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white'>
                    <BriefcaseBusiness className='size-8'/>
                    <span className='text-xl '>
                        Experiencia laboral
                    </span>
                </div>

                <ProyectsComponent />
            </div>
        </div>
    )
}

export default ViewPorfolio
