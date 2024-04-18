import Aside from "../components/dashboard/Aside"
import Header from "../components/dashboard/Header"

function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <section className="flex h-[100dvh]">
                <Aside />
            <div className='w-full flex flex-col h-[100dvh] overflow-hidden'>
            <Header />

                <div className={`w-full  h-[100%] overflow-auto`}>
                    {children}
                </div>
            </div>
        </section>
    )
}

export default DashboardLayout