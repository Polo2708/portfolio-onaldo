import { ChevronLeft, Github } from 'lucide-react'
import type { SidebarProps } from '../interfaces/footer-props'

function SidebarFooterComponent({ closeSidebar }: SidebarProps) {
    return (
        <footer className="w-full border border-gray-200 h-full flex justify-between">
            <div className='border flex items-center p-1 rounded'>
                <button>
                    <a href="https://github.com/Polo2708">
                        <Github className='' />
                    </a>
                </button>
            </div>
            <button className="p-1 cursor-pointer" onClick={closeSidebar} >
                <ChevronLeft className='text-black size-8 hover:text-red-400' />
            </button>
        </footer>
    )
}

export default SidebarFooterComponent
