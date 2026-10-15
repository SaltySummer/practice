import ProjectsCard from "./ProjectsCard";

function Projects(){
    return (
        <>
            <section id="projects" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
                <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
                <p className="mt-2 text-stone-600">Things I have built.</p>
                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                    <ProjectsCard 
                        year={"2026"} 
                        label={"About me in React"} 
                        content={"My first React project, rebuilt from a plain HTML page."} 
                        framework={"React - Tailwind CSS"} 
                        href={"https://github.com/juandelacruz/CSIT340-Lab1-DelaCruz"} 
                        view={"View on GitHub"} 
                    />

                    <ProjectsCard 
                        year={"2025"}
                        label={"Ninja Racer"}
                        content={"VROOOOOOOOM"}
                        framework={"Unity - C# - Elden Ring"}
                        href={"https://youtu.be/wKQMQyLXm7c"}
                        view={"View on GitHub"}
                    />

                    <ProjectsCard 
                        year={"2025"}
                        label={"Monster Jam Racing"}
                        content={"Big Wheelz"}
                        framework={"Unity - C# - Elden Ring"}
                        href={"https://youtu.be/PHGwHp86Y1o"}
                        view={"View on GitHub"}
                    />
                </div>
            </section>
        </>
    )
}

export default Projects;