import path from "path";
import { promises as fs } from 'fs';
import { play } from '../fonts'

async function getCertifications() {
    const jsonDirectory = path.join(process.cwd(), 'app/data');
    const fileContents = await fs.readFile(jsonDirectory + '/certifications.json', 'utf8');
    const data = JSON.parse(fileContents);
    return data;
}

interface Certification {
    id: number;
    name: string;
    certifier: string;
    date: string;
    link: string;
}

export default async function CoursesPage() {

    const certifications = await getCertifications();

    return (
        <section id="courses" className="flex flex-col justify-between items-center">
            <div className='flex flex-col items-center h-screen justify-around '>
                <h1 className='text-white font-extrabold text-4xl sm:text-5xl lg:text-5xl tracking-tight '>
                    Certificaciones
                </h1>
                <div className="h-[650px] lg:h-[750px] overflow-y-auto ">
                    <ol className="relative mx-5 border-l border-gray-200 dark:border-gray-700">
                        {certifications.map((certification: Certification) => (
                            <li key={certification.id} className="mb-6 ml-4">
                                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{certification.date}</time>
                                <a href={certification.link} target='_blank' rel="noopener noreferrer">
                                    <h3 className="text-lg font-semibold text-gray-200">{certification.name}</h3>
                                </a>
                                <p className={`${play.className} mb-4 text-base font-normal text-gray-400`}>{certification.certifier}</p>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </section>
    )
}