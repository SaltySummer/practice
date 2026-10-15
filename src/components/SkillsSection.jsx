import SkillsContent from "./SkillsContent";

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
                            <SkillsContent content={"HTML"}/>
                            <SkillsContent content={"CSS"}/>
                            <SkillsContent content={"JavaScript"}/>
                            <SkillsContent content={"Java"}/>
                        </div>
                    </div>
                    <div>
                        <SkillsHeader content={"Frameworks"}/>
                        <div className="mt-3 flex flex-wrap gap-2">
                            <SkillsContent content={"React"}/>
                            <SkillsContent content={"Tailwind CSS"}/>
                            <SkillsContent content={"Springboot"}/>
                        </div>
                    </div>
                    <div>
                        <SkillsHeader content={"Tools"}/>
                        <div className="mt-3 flex flex-wrap gap-2">
                            <SkillsContent content={"Git"}/>
                            <SkillsContent content={"VS Code"}/>
                            <SkillsContent content={"MySQL"}/>
                            <SkillsContent content={"Figma"}/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SkillsSection;