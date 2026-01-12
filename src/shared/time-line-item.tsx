

function TimeLineItem({ title, company, date, description }: { title: string, company: string, description: string, date: any }) {

    return (
        <div className="relative flex gap-6 pb-12 group ">

            <span className="absolute left-3 top-0 h-full w-px bg-white/20" />

            <div className="relative z-10 flex h-6 w-6 items-center justify-center">
                <span className="h-3 w-3 rounded-full bg-yellow-400 transition group-hover:scale-125" />
            </div>

            <div className="bg-white/5 px-4 py-2 rounded-lg hover:bg-white/10 transition grid grid-cols-2 w-full">
                <div className="flex flex-col gap-2 w-1/4">
                    <h3 className="text-yellow-400 font-semibold">
                        {title}
                    </h3>

                    <p className="text-white font-bold">
                        {company}
                    </p>

                    <p className="text-white/60 text-sm">
                        {date}
                    </p>

                </div>

                <p className="text-white/80 md:text-sm sm:text-xs w-full">
                    {description}
                </p>


            </div>
        </div>
    );
}

export default TimeLineItem
