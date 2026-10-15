import Navigation from './Navigation';

function Name({label,name}){
    return (
        <>
            <a href={label} className="font-semibold">{name}</a>
        </>
    )
}

function Navbar(){
    return (
        <>
            <nav className="sticky top-0 z-10 border-b border-stone-200 bg-white">
                <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
                    <Name label = {"#top"} name = {"Hynes Gavin Da Goat"}/>
                <div className="flex gap-6 text-sm text-stone-600">
                    <Navigation href={"#about"} label={"About"}/>
                    <Navigation href={"#skills"} label={"Skills"} />
                    <Navigation href={"#projects"} label={"Projects"} />
                    <Navigation href={"#experience"} label={"Experience"} />
                    <Navigation href={"#contact"} label={"Contact"} />
                </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;