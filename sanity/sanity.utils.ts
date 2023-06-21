import { createClient, groq } from 'next-sanity';
import { Project } from '../types/Project'
// file where we fetch data

export async function getProjects(): Promise<Project[]> {
    // creating a client to read from content link
    const client = createClient({
        projectId: "ymim5lfe",
        dataset: "production",
        apiVersion: "2023-06-17"
    })

    return client.fetch(
        groq`*[_type == "project"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url

        }`
    )
}

export async function getProject(slug: string): Promise<Project> {
    // creating a client to read from content link
    const client = createClient({
        projectId: "ymim5lfe",
        dataset: "production",
        apiVersion: "2023-06-17"
    })

    return client.fetch(
        groq`*[_type == "project" && slug.current == $slug][0]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url

        }`,
        {slug}
    )
}