function FooterContent({content}){
    return (
        <>
            <div className="max-w-4xl mx-auto px-6 py-8 text-sm text-stone-500">
                {content}
            </div>
        </>
    )
}

function Footer(){
    return (
        <footer className="border-t border-stone-200">
           <FooterContent content={" © 2026 Da Goat. Built with React and Tailwind CSS for CSIT340."}/>
        </footer>
    )
}

export default Footer;