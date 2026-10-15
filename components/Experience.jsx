import ExperienceContent from '../components/ExperienceContent'

function Experience(){
    return (
        <>
            <section id="experience" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
                <h2 className="text-2xl font-semibold tracking-tight">Experience</h2>
                <p className="mt-2 text-stone-600">Where I have learned and worked.</p>
                <ol className="mt-8 space-y-8 border-l border-stone-200">
                    <li className="pl-6">
                        <ExperienceContent 
                            time={"2024 - Present"}
                            job={"BSIT"}
                            place={"CIT"}
                            desc={"Taking up web development, databases, and systems analysis."}
                        />
                    </li>
                    <li className="pl-6">
                        <ExperienceContent
                            time={"2025"}
                            job={"Racer"}
                            place={"Daytona 300"}
                            desc={"Racing so much vro"}
                        />
                    </li>
                </ol>
            </section>
        </>
    )
}

export default Experience;