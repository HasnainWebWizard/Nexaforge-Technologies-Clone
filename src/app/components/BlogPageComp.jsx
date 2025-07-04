
function BlogPageComp({ title, para1, para2, para3, para4, src }) {

    return (
        <section className="my-10">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-5">{title}</h2>
            {/* <img src={src} alt="Blog Image" className="mb-4" /> */}
            <p className="text-lg text-gray-700 leading-relaxed">{para1}</p>
            <br />
            <p className="text-lg text-gray-700 leading-relaxed">{para2}</p>
            <br />
            <p className="text-lg text-gray-700 leading-relaxed">{para3}</p>
            <br />
            <p className="text-lg text-gray-700 leading-relaxed">{para4}</p>
        </section>
    );
}
export default BlogPageComp;