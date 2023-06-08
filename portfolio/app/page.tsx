import MainPage from './components/MainPage'
import AboutPage from './components/AboutPage'
import ProjectsPage from './components/ProjectsPage'
import CoursesPage from './components/CoursesPage'
import ContactPage from './components/ContactPage'
import MainContainer from './components/MainContainer'

export default function Home() {
  return (
    <MainContainer>
      <main className="container scroll-container flex min-h-screen flex-col items-center sm:px-20 sm:pl-64">
        <MainPage />
        <AboutPage />
        <ProjectsPage />
        <CoursesPage />
        <ContactPage />
      </main>
    </MainContainer>
  )
}
