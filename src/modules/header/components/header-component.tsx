import { useHeaderController } from "../controller/header-controller"

function HeaderComponent() {

    const { } = useHeaderController()
    return (
        <div className="w-full flex items-center p-4 border-b border-gray-200">
            <div className="flex flex-col items-center border border-blue-100 xl:w-60  rounded-md pt-4 px-4 gap-2">
                <img src="/img/image.png" alt="onaldo-polo" className="w-60 h-60 rounded-full" />
                <div className="w-full border-t text-center flex justify-center items-center p-2">
                    <p className="">ONALDO POLO</p>
                </div>
            </div>

            <div>

            </div>
        </div>
    )
}

export default HeaderComponent
