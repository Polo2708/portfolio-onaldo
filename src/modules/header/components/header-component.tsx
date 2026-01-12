import { useHeaderController } from "../controller/header-controller"


function HeaderComponent() {
    const { } = useHeaderController()


    return (
        <header className="w-full py-8 px-4 md:py-12">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
                <div className="flex">
                    <img
                        src="/img/image.png"
                        alt="Onaldo Polo - Desarrollador Front-End"
                        className="h-48 w-48 md:h-64 md:w-64 lg:h-80 lg:w-80 rounded-full object-cover shadow-lg"
                    />
                </div>

                <div className="flex flex-col items-center md:items-start text-center md:text-left gap-3">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white shadow-2xl">
                        Onaldo Polo
                    </h1>
                    <p className="text-xl md:text-2xl text-white font-light">
                        Desarrollador Front-End
                    </p>
                </div>
            </div>
        </header>
    )
}

export default HeaderComponent