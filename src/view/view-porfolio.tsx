
import DescriptionComponent from '../modules/description/components/description-component'
import HeaderComponent from '../modules/header/components/header-component'
import ProyectsComponent from '../modules/proyects/components/proyects-component'

function ViewPorfolio() {
    return (
        <div className='h-full overflow-hidden flex flex-col items-center'>
            <div >
                <HeaderComponent />
            </div>
            <div className='w-full xl:flex xl:items-center p-2'>
                <DescriptionComponent />
            </div>
            <div className='w-full'>
                <ProyectsComponent />
            </div>
        </div>
    )
}

export default ViewPorfolio
