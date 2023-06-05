export default function ExperiencePage() {
    return (
        <section className="flex flex-col justify-between items-center">
            <div className='flex flex-col items-center justify-center gap-10 mt-20'>
                <h1 className='text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-5xl tracking-tight dark:text-white'>
                    Experiencia
                </h1>
                <div className="grid grid-cols-2">
                    <div className="bg-white rounded-md">
                        <p className="text-black">SoyOs</p>
                    </div>
                    <div className="bg-white rounded-md">
                        <p className="text-black">El Ultimo Tangle</p>
                    </div>
                </div>
            </div>
        </section>
    )
}