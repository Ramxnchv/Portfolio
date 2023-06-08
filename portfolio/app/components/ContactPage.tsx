export default function ContactPage() {
    return (
        <section className="flex flex-col justify-between items-center" id="contact">
            <div className='flex flex-col items-center h-screen justify-around'>
                <h1 className='text-white font-extrabold text-4xl sm:text-5xl lg:text-5xl tracking-tight'>
                    Contacto
                </h1>
                <form className="flex flex-col gap-5">
                    <input type="text" className="rounded-md" />
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </section>
    )
}