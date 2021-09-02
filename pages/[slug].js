export default function Post({post}){
    return (<div>{post.Title}</div>)
}

export async function getStaticPaths(){
    const res = await fetch("http://localhost:1337/posts")
    const posts = await res.json()

    const paths = posts.map((post) => ({
        params: {slug: post.Slug}
    }

    ))

    return {
        /*
        paths: [
            {
                params: {
                    slug: post.Slug
                }


            }
        ]*/
        paths,
        fallback: false
    }
}

export async function getStaticProps({params}){
    const {slug} = params

    const res = await fetch(`http://localhost:1337/posts?Slug=${slug}`)
    const data = await res.json()
    const post = data[0]

    return {
        props: {post}
    }
}