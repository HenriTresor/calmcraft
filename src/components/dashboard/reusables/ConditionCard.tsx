function ConditionCard() {
    return (
        <div className="w-auto p-4 shadow-md rounded-md pt-7 pb-7 flex items-center gap-5 justify-between">
            <div className=" flex items-center gap-5">
                <div className="w-[50px] h-[50px] bg-[#D9D9D9] rounded-full"></div>
                <div>
                    <h1 className="font-medium text-[1.1rem]">Heart Rate</h1>
                    <p> <span className="font-bold">98</span> bpm</p>
                </div>
           </div>
            <img src="/graph.svg" width={100} className="justify-self-end"/>
        </div>
    )
}

export default ConditionCard