import { Bell, Inbox, Search } from "lucide-react"

function Header() {
    return (
        <div className='w-full p-5 flex items-center justify-between  sticky bg-white top-0 left-0 z-30'>
           
            <div className="w-[30%]">
                <div className="bg-[#F4FFF4] border border-[#F3F3F3] rounded-full flex w-full items-center pr-5">
                    <input type="text" placeholder="Search ..." className="p-4 bg-[#F4FFF4] border-none rounded-full w-full"/>
                    <button>
                        <Search stroke="#C1C1C1"/>
                    </button>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <button>
                    <Inbox/>
                </button>
                <button>
                    <Bell/>
                </button>
                <div className="w-[40px] h-[40px]  bg-[#717171] rounded-full "></div>
            </div>
        </div>
    )
}

export default Header