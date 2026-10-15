function AboutContent({label, content}){
    return (
        <>
            <div>
                <dt className="text-sm text-stone-500">{label}</dt>
                <dd className="mt-1 font-medium">{content}</dd>
            </div>
        </>
    )
}

export default AboutContent;