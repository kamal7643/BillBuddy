// this is the commponent to show team members of this project. show profile photo, links to their profiles, resume and skills.

import Image from "next/image"

export default function Team() {
    const members = [
        {
            name: "Kamal Swami",
            title: "Software Engineer",
            image: "https://avatars.githubusercontent.com/u/67092345?v=4",
            description:
                "I'm Kamal Swami, a software engineer with a passion for building beautiful, responsive, and accessible websites. I'm currently working as a front-end engineer at the University of Michigan, where I'm learning React, Redux, and Next.js.",
            links: [
                {
                    name: "Github",
                    url: "https://github.com/kamal7643",
                },
                {
                    name: "LinkedIn",
                    url: "https://www.linkedin.com/in/michigandrew/",
                },
            ],
        },
        {
            name: "<NAME>",
            title: "Software Engineer",
            image: "https://avatars.githubusercontent.com/u/43999999?v=4",
            description:
                "I'm <NAME>, a software engineer with a passion for building beautiful, responsive, and accessible websites. I'm currently working as a front-end engineer at the University of Michigan, where I'm learning React, Redux, and Next.js.",
            links: [
                {
                    name: "Github",
                    url: "https://github.com/michigandrew",
                },
                {
                    name: "LinkedIn",
                    url: "https://www.linkedin.com/in/michigandrew/",
                },
            ],
        },
        {
            name: "<NAME>",
            title: "Software Engineer",
            image: "https://avatars.githubusercontent.com/u/43999999?v=4",
            description:
                "I'm <NAME>, a software engineer with a passion for building beautiful, responsive, and accessible websites. I'm currently working as a front-end engineer at the University of Michigan, where I'm learning React, Redux, and Next.js.",
            links: [
                {
                    name: "Github",
                    url: "https://github.com/michigandrew",
                },
                {
                    name: "LinkedIn",
                    url: "https://www.linkedin.com/in/michigandrew/",
                },
            ],
        }
    ];
    // return render 
    return(
        <div className="p-10 space-x-4 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {members.map((member) => (
                    <div key={member.name} className="bg-white rounded-lg shadow-lg">
                        <Image src={member.image} alt={member.name} className="rounded-t-lg" />
                        <div className="p-6">
                            <h2 className="text-lg font-semibold">{member.name}</h2>
                            <p className="text-gray-700">{member.title}</p>
                            <p className="text-gray-700">{member.description}</p>
                            <div className="flex flex-wrap justify-center mt-4">
                                {member.links.map((link) => (
                                    <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="mx-2 text-gray-700 hover:text-gray-900">
                                        {link.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}