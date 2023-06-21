import { getProject } from "@/sanity/sanity.utils";

type Props = {
    params : {project: string}
}

export default async function Project({params}: Props) {
    console.log(params)
    const slug = params.project;
    const project = await getProject(slug);
    return <div 
    // className="max-w-3xl mx-auto py-20"
    >
        <header className="flex items-center justify-between">
        <h1 className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent text-5xl font-extrabold">{project.name}</h1>
       
        <a href={project.url} title="View Project" target="_blank" rel="noopener noreferrer" className="bg-gray-100 rounded-lg text-gray-500 font-bold py-3 px-4 whitespace-nowrap">View Project</a>
        </header>

        {/* content goes here */}

        {/* image goes here */}
        </div>
}