import * as projects from "../data/projects.json"
import * as otherprojects from "../data/otherprojects.json"
import OtherProject from "./OtherProject"

export default async function ProjectsPage() {

    return (
        <section className="flex flex-col justify-between overflow-hidden  items-center" id="projects">
            <div className='flex flex-col items-center justify-center gap-10 lg:gap-20 mt-10 lg:mt-20'>
                <h1 className='text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-5xl tracking-tight dark:text-white'>
                    Mis Proyectos
                </h1>
                <div className="flex">
                    {projects.map((project) => (
                        <div key={project.id} className="card bg-cover" style={{ backgroundImage: `url(${project.image})` }}>
                            {/* <h3 className="title">{project.name}</h3> */}
                        </div>
                    ))}
                </div>
                <h3 className="text-2xl">Otros proyectos</h3>
                <div className="carousel" id="carousel">
                    {otherprojects.map((project) => (
                        <OtherProject key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    )
}