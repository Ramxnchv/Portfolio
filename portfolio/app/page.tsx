import Image from 'next/image'
import fotoperfil from '../public/fotoperfil.jpg'
import Navbar from './components/Navbar'
import MainPage from './components/MainPage'
import AboutPage from './components/AboutPage'
import EducationPage from './components/EducationPage'
import ProjectsPage from './components/ProjectsPage'
import CoursesPage from './components/CoursesPage'
import ContactPage from './components/ContactPage'
import ExperiencePage from './components/ExperiencePage'

export default function Home() {
  return (
    <div className='flex justify-center overflow-hidden selection:bg-darkblue selection:text-white'>
      <aside className='fixed left-16 z-20 py-16'>
        <Navbar />
      </aside>
      <main className="container scroll-container flex min-h-screen flex-col items-center sm:px-20 sm:pl-64">
        <MainPage />
        <AboutPage />
        <ProjectsPage />
        <CoursesPage />
        <ContactPage />
      </main>
    </div>
  )
}
