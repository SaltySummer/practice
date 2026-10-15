import ContactContent from './ContactContent'

function ContactSection(){
    return (
        <>
            <section id="contact" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
                <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
                <p className="mt-2 text-stone-600">Say hi.</p>
                <ul className="mt-8 space-y-3">
                    <ContactContent label={"Email"} href={"mailto:hynesgavin2006@gmail.com"} content={"hynesgavin.dagoat@cit.edu"}/>
                    <ContactContent label={"Github"} href={"https://github.com/SaltySummer"} content={"SaltySummer"}/>
                    <ContactContent label={"LinkedIn"} href={"https://www.hatchmag.com/articles/tigerfish-101/7715082"} content={"GoatBro"}/>
                </ul>
            </section>
        </>
    )
}

export default ContactSection;