function BlogHeroComp({ bgImg, heading }) {
    return (
        <>
            <section
                className={`bg-cover bg-center min-h-100 w-screen ml-[calc(50%-50vw)] flex flex-col justify-center items-center px-5 sm:p-10 md:px-18 lg:px-20 mb-20`}
                 style={{ backgroundImage: `url(${bgImg})` }}
            >
                <h1 className="text-white text-4xl lg:text-5xl font-bold">{heading}</h1>
            </section>
        </>
    );
}

export default BlogHeroComp;
