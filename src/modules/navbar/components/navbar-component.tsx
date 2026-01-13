import { useNavbarController } from '../controller/navbar-controller'

function NavbarComponent() {
    const { options } = useNavbarController()

    return (
        <>
            <nav className="relative z-50 flex h-16 items-center justify-center mx-4">

                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <div className="hidden sm:ml-6 sm:block">
                        <div className="flex space-x-4">
                            {options.map((item) => (
                                <a href="#" aria-current="page" className="rounded-md px-3 py-2 text-sm text-white font-semibold" key={item.id}>{item.name}</a>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>
        </>

    )
}

export default NavbarComponent
