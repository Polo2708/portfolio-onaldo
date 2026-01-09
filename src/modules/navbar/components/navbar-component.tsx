import { useSidebarStore } from '../../../store/sidebar-store'
import SidebarComponent from '../../sidebar/components/sidebar-component'
import { useNavbarController } from '../controller/navbar-controller'

function NavbarComponent() {
    const { options } = useNavbarController()
    const { showSidebar, state } = useSidebarStore()

    return (
        <>
            <nav className="relative z-50">
                <div className="flex h-16 items-center justify-center mx-4">
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                {options.map((item) => (
                                    <a href="#" aria-current="page" className="rounded-md px-3 py-2 text-sm text-white font-semibold" key={item.id}>{item.name}</a>
                                ))}
                            </div>
                        </div>

                        <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                            <button onClick={() => showSidebar(!state)} type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 focus:outline-2 focus:outline-none cursor-pointer">
                                <span className="absolute -inset-0.5"></span>
                                <span className="sr-only">Open main menu</span>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" className="size-6 in-aria-expanded:hidden">
                                    <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" className="size-6 not-in-aria-expanded:hidden">
                                    <path d="M6 18 18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
            <div className='md:hidden'>
                <SidebarComponent />
            </div>
        </>

    )
}

export default NavbarComponent
