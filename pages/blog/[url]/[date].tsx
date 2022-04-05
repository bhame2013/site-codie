import { useRouter } from "next/router";

export default function BlogDetailPage(){
    
    const Router = useRouter();
    const Title = "Blog Title";
    const Image = "";
    const Descricao = "Lorem ipsum";

    return (
        <>
        <article>
            <section>
                <h1>{Title}</h1>
                <div>{Router.query.date}</div>
                <img src={Image} />
                <div>
                    {Descricao}
                </div>
            </section>
        </article>

        </>
    )
}