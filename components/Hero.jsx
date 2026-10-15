function HeroContent({href, label}){
    return (
        <>
            <a href={href} className="rounded-lg bg-stone-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-stone-700">{label}</a>
        </>
    )
}

function Hero(){
    return (
        <>
            <header id="top" className="max-w-4xl mx-auto px-6 pt-20 pb-16 scroll-mt-16">
                <p className="text-sm font-medium text-stone-500">Hi, I'm</p>
                <h1 className="mt-2 text-5xl font-semibold tracking-tight">The Goated One</h1>
                <p className="mt-4 max-w-xl text-lg leading-relaxed text-stone-600">
                A third year IT student who builds small web apps for the people around me.
                </p>
                <div className="mt-8 flex gap-3">
                    <HeroContent href={"#projects"} label={"Projects"}/>
                    <HeroContent href={"#contact"} label={"Contacts"}/>
                </div>
            </header>
        </>
    )
}

export default Hero;