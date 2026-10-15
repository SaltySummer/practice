function Navigation({href,label}){
    return (
        <>
            <a href={href} className="hover:text-stone-900">{label}</a>
        </>
    )
}

export default Navigation;