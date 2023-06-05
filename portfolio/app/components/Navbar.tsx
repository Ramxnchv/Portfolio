import Image from 'next/image'
import fotoperfil from '../../public/fotoperfil.jpg'
import NavLink from './NavLink'

export default function Navbar() {
    return (
        <div className='hidden sm:flex sm:flex-col sm:w-48 sm:z-10'>
            <a href='#main'>
                <h1 className='text-slate-900 flex items-center font-extrabold text-xl sm:text-2xl lg:text-3xl tracking-tight text-center dark:text-white'>
                    Ramón Rosa
                </h1>
                <div className='flex text-sm'>
                    <span>&gt;</span>
                    <p className='ml-2 text-slate-600 max-w-3xl mx-auto dark:text-slate-400'>
                        <span>Desarrollador Full-Stack </span>
                        <span className='animate-ping'>_</span>
                    </p>
                </div>
            </a>
            <nav className="flex flex-col gap-6 mt-10">
                <NavLink href='#about' text='Sobre mí' width={70} />
                <NavLink href='#projects' text='Mis Proyectos' width={105} />
                <NavLink href='#courses' text='Certificaciones' width={115} />
                <NavLink href='#contact' text='Contacto' width={70} />
            </nav>
        </div>
    )
}