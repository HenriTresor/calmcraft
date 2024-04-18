import { BotMessageSquare, Gamepad, LayoutDashboard, LucideLightbulb, LucideUserSquare } from "lucide-react"
import { Link } from "react-router-dom"
const asideItems = [
    { name: 'Dashboard', link: '/', icon: <LayoutDashboard /> },
    { name: 'Community', link: '/', icon: <LucideUserSquare /> },
    { name: 'Chat Bot', link: '/', icon: <BotMessageSquare /> },
    { name: "Health Tips", link: '/', icon: <LucideLightbulb /> },
    { name: "Gaming", link: '/', icon: <Gamepad /> }
]

function Aside() {
    return (
        <div className='w-[20%] gap-3  h-[100%] z-50 bg-white shadow-md'>
            <div className="flex items-center gap-3 p-5 mt-5">
                <img src="/logo.svg" width={50} />
                <h1 className="text-[#48A248] text-[1.2rem] font-bold">CalmCraft</h1>
            </div>

            <div className="w-full mt-28">
                {
                    asideItems.map((item) => {
                        return (
                            <a href={item.link} key={item.name} className={`w-full p-5 flex items-center gap-4 ${item.name == "Dashboard" && 'bg-[#48A248] text-white'}`}>
                                {item.icon}
                                {item.name}
                            </a>
                        )
                    })
                }
            </div>
            
        </div>
    )
}

export default Aside