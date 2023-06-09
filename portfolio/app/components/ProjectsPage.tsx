import OtherProject from "./OtherProject"
import path from "path";
import { promises as fs } from 'fs';
import { CodeBracketIcon } from "@heroicons/react/24/solid";
import { DevicePhoneMobileIcon } from "@heroicons/react/24/outline";

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
            <div className='flex flex-col items-center h-screen justify-around'>
                <h1 className='text-white font-extrabold text-4xl sm:text-5xl lg:text-5xl tracking-tight'>
                    Mis Proyectos
                </h1>
                <div className="flex">
                    {projects.map((project: Project) => (
                        <div key={project.id} style={{ backgroundImage: `url(${project.image})` }} className="card bg-cover h-72">
                            <div className="hidden-child flex flex-col gap-2 w-full items-center justify-evenly bg-black bg-opacity-70">
                                <h3 className="text-center font-bold tracking-tight [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] px-3">{project.name}</h3>
                                <ul className="grid grid-cols-2 italic">
                                    {project.tecnologies.map((tecnology: string) => (
                                        <li key={tecnology} className="text-center text-sm text-gray-200">{tecnology}</li>
                                    ))}
                                </ul>
                                <div className="flex flex-col gap-2">
                                    <div>
                                        {project.deployment && <a className="bg-gray-600 p-1 px-2 rounded-md text-sm flex gap-2" href={project.deployment} target='_blank' rel="noopener noreferrer">
                                            <span>Ver proyecto</span>
                                            <DevicePhoneMobileIcon className="w-5 h-5 text-white"></DevicePhoneMobileIcon>
                                        </a>}
                                    </div>
                                    <div>
                                        {project.code && <a className="bg-gray-900 p-1 px-2 rounded-md text-sm flex gap-2" href={project.code} target='_blank' rel="noopener noreferrer">
                                            <span>Ver código</span>
                                            <CodeBracketIcon className="w-5 h-5 text-white ml-auto"></CodeBracketIcon>
                                        </a>}
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
                <h3 className="text-2xl">Otros proyectos</h3>
                <div className="carousel mb-10 sm:mb-0" id="carousel">
                    {otherprojects.map((project: OtherProjectData) => (
                        <OtherProject key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    )
}