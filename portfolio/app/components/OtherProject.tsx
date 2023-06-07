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
            <p className="text-black py-2 px-4" key={project.id}>{project.name}</p>
        </div>
    )
}