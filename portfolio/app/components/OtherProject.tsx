'use client'

interface Project {
    id: number;
    name: string;
    description: string;
    code: string;
    tecnologies: string[];
    deployment?: string;
    image?: string;
    imageType?: string;
}


export default function OtherProject({ project }: { project: Project }) {

    return (
        <div key={project.id} className={`item cursor-pointer rounded-md bg-cover ${project.imageType === 'mobile' ? 'bg-[center_bottom_-21rem]' : 'bg-top'}`} style={{ backgroundImage: `url(${project.image})` }} onClick={() => {
            document.getElementById("carousel")?.style.setProperty("--position", project.id.toString());
        }}>
            <a href={project.code} target='_blank' rel="noopener noreferrer" className="text-black block  bg-gray-100 rounded-t-md bg-opacity-60 py-2 px-4" key={project.id}>
                <span className="font-bold">{project.name}</span>
                <ul className="flex flex-wrap font-semibold gap-2">
                    {project.tecnologies.map((tecnology: string, index) => (
                        <li key={tecnology} className="text-center text-xs text-gray-800">{tecnology}</li>
                    ))}
                </ul>
            </a>

        </div>
    )
}