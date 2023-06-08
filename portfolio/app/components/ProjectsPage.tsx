import OtherProject from "./OtherProject"
import path from "path";
import { promises as fs } from 'fs';

interface Project {
    id: number;
    name: string;
    description: string;
    code: string;
    deployment: string;
    image: string;
    tecnologies: string[];
}

interface OtherProjectData {
    id: number;
    name: string;
    description: string;
    code: string;
    tecnologies: string[];
    deployment?: string;
    image?: string;
    imageType?: string;
}

async function getProjects() {
    const jsonDirectory = path.join(process.cwd(), 'app/data');
    const fileContents = await fs.readFile(jsonDirectory + '/projects.json', 'utf8');
    const data = JSON.parse(fileContents);
    return data;
}

async function getOtherProjects() {
    const jsonDirectory = path.join(process.cwd(), 'app/data');
    const fileContents = await fs.readFile(jsonDirectory + '/otherprojects.json', 'utf8');
    const data = JSON.parse(fileContents);
    return data;
}

export default async function ProjectsPage() {

    const projectsRequest = getProjects()
    const otherprojectsRequest = getOtherProjects()
    const [projects, otherprojects] = await Promise.all([projectsRequest, otherprojectsRequest])

    return (
        <section className="flex flex-col justify-between overflow-hidden items-center" id="projects">
            <div className='flex flex-col items-center justify-center gap-10 lg:gap-20 mt-16 lg:mt-20'>
                <h1 className='text-white font-extrabold text-4xl sm:text-5xl lg:text-5xl tracking-tight'>
                    Mis Proyectos
                </h1>
                <div className="flex">
                    {projects.map((project: Project) => (
                        <div key={project.id} className="card bg-cover" style={{ backgroundImage: `url(${project.image})` }}>
                            {/* <h3 className="title">{project.name}</h3> */}
                        </div>
                    ))}
                </div>
                <h3 className="text-2xl">Otros proyectos</h3>
                <div className="carousel" id="carousel">
                    {otherprojects.map((project: OtherProjectData) => (
                        <OtherProject key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    )
}