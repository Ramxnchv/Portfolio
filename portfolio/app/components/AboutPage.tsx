import Image from 'next/image'
import fotoperfil from '../../public/fotoperfil.jpg'
import { play } from '../fonts'
import { EnvelopeIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

export default function AboutPage() {
    return (
        <section className="flex flex-col justify-between items-center">
            <div className='flex flex-col sm:flex-row items-center justify-center gap-10 mt-20'>
                <h1 className='text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-5xl tracking-tight dark:text-white'>
                    Sobre mí
                </h1>
            </div>
        </section>
    )
}