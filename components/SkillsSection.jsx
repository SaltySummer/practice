function SkillsHeader({content}){
    return (
        <>
            <h3 className="text-sm font-medium text-stone-500">{content}</h3>
        </>
    )
}

function SkillsSection(){
    return (
        <>
            <section id="skills" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
                <h2 className="text-2xl font-semibold tracking-tight">Skills</h2>
                <p className="mt-2 text-stone-600">What I work with.</p>
                <div className="mt-8 grid gap-8 sm:grid-cols-3">
                    <div>
                        <SkillsHeader content={"Languages"}/>
                        <div className="mt-3 flex flex-wrap gap-2">
                        <span className="rounded-full border border-stone-300 px-3 py-1 text-sm">HTML</span>
                        <span className="rounded-full border border-stone-300 px-3 py-1 text-sm">CSS</span>
                        <span className="rounded-full border border-stone-300 px-3 py-1 text-sm">JavaScript</span>
                        <span className="rounded-full border border-stone-300 px-3 py-1 text-sm">Java</span>
                        </div>
                    </div>
                    <div>
                        <SkillsHeader content={"Languages"}/>
                        <div className="mt-3 flex flex-wrap gap-2">
                        <span className="rounded-full border border-stone-300 px-3 py-1 text-sm">React</span>
                        <span className="rounded-full border border-stone-300 px-3 py-1 text-sm">Tailwind CSS</span>
                        <span className="rounded-full border border-stone-300 px-3 py-1 text-sm">Bootstrap</span>
                        </div>
                    </div>
                    <div>
                        <SkillsHeader content={"Languages"}/>
                        <div className="mt-3 flex flex-wrap gap-2">
                        <span className="rounded-full border border-stone-300 px-3 py-1 text-sm">Git</span>
                        <span className="rounded-full border border-stone-300 px-3 py-1 text-sm">VS Code</span>
                        <span className="rounded-full border border-stone-300 px-3 py-1 text-sm">MySQL</span>
                        <span className="rounded-full border border-stone-300 px-3 py-1 text-sm">Figma</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SkillsSection;