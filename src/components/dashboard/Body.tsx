import ConditionCard from "./reusables/ConditionCard"

function Body() {
    return (
        <div className="p-5">
            <h1 className="text-[1.5rem] font-semibold tracking-wide p-5">Hi, Name</h1>

            <div className="grid grid-cols-2 gap-5 mb-5">
                {
                    [1, 2, 3, 4, 5, 6].map(() => (
                        <ConditionCard />
                    ))
                }
            </div>
            <div className="flex justify-end">
                <button className="bg-[#008000B2] text-white p-3 rounded-md pl-7 pr-7">
                    Continue
                </button>
            </div>
        </div>
    )
}

export default Body