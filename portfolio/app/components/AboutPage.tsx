import laptop from '../../public/laptop.png'
import Image from 'next/image'

export default function AboutPage() {
    return (
        <section className="flex flex-col justify-between items-center" id="about">
            <div className='flex flex-col items-center justify-center gap-10 lg:gap-20 mt-16 lg:mt-20'>
                <h1 className='text-white font-extrabold text-4xl sm:text-5xl lg:text-5xl tracking-tight'>
                    Sobre mí
                </h1>
                <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:gap-16 xl:gap-20">
                    <div className='hidden lg:block lg:relative'>
                        <Image src={laptop} alt="Ordenador portátil" />
                        <div className='w-9/12 rounded-md overflow-hidden absolute lg:top-[3.5rem] lg:left-10 xl:top-[4.75rem] xl:left-14 2xl:top-[5.35rem] 2xl:left-[4.25rem] z-[-10] shadow-inner'>
                            <video src="programming.mp4" autoPlay={true} loop={true}></video>
                        </div>
                    </div>
                    <div className='flex flex-col gap-5 lg:w-8/12 xl:w-6/12 text-lg px-10 sm:px-2'>
                        <p>
                            Soy graduado en Ingeniería del Software con aproximadamente 1 año de experiencia laboral como desarrollador web.
                            He trabajado en múltiples proyectos, tanto universitarios en equipos colaborativos como profesionales por cuenta propia,
                            que me han permitido desarrollar habilidades de resolución de problemas, comunicación efectiva y gestión del tiempo,
                            aspectos esenciales para el éxito en el desarrollo de software.
                        </p>
                        <p>
                            Me considero una persona proactiva, con ganas de seguir aprendiendo y mejorar día a día. Es por ello que trato de mantenerme
                            actualizado con las últimas tecnologías y tendencias del sector. Mi objetivo es seguir creciendo profesionalmente y poder aportar valor
                            y buenas prácticas a los productos que desarrolle.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}