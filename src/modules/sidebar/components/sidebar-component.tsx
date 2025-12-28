import { navbarOptions } from "../../../libs/navbar-options";
import { useSidebarStore } from "../../../store/sidebar-store"
import SidebarFooterComponent from "./sidebar-footer";

function SidebarComponent() {
    const { state, showSidebar } = useSidebarStore()
    const { options } = navbarOptions();

    return (
        <>
            {state && (
                <div className="fixed inset-0 z-40">
                    {/* Sidebar */}
                    <div className="fixed top-16 left-0 h-[calc(100vh-4rem)] w-full bg-gray-200 p-4 border border-white flex flex-col justify-between">
                        <div>
                            {options.map((item) => (
                                <p
                                    key={item.id}
                                    className="py-2 font-semibold text-black/85 cursor-pointer"
                                >
                                    {item.name}
                                </p>
                            ))}
                        </div>

                        <div className="h-10 w-full">
                            <SidebarFooterComponent closeSidebar={() => showSidebar(false)} />
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}


export default SidebarComponent
