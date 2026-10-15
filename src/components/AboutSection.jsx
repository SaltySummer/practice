import AboutContent from "./AboutContent" 

function AboutSection(){
    return (
        <>
            <section id="about" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
                <h2 className="text-2xl font-semibold tracking-tight">About</h2>
                <p className="mt-2 text-stone-600">A little about who I am.</p>
                <p className="mt-6 max-w-2xl leading-relaxed text-stone-700">
                    I grew up in Talisay and moved to Cebu City for college. I picked IT because I
                    wanted to build things people actually open. So far my favorite part is the moment
                    something finally runs.
                </p>
                <dl className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
                    <AboutContent label={"Course"} content={"BS Information Technology"} />
                    <AboutContent label={"Year Level"} content={"Third Year"} />
                    <AboutContent label={"School"} content={"CIT-U"} />
                    <AboutContent label={"Based in"} content={"Cebu City"} />
                </dl>
            </section>
        </>
    )
}

export default AboutSection;