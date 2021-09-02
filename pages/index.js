import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home({posts}) {

  console.log("I am on the client")
  return (
    <div>
      <div>
          {
            posts && posts.map((post,i) => (
              <div key={i}>
              <h2 >{post.Title}</h2>
              <div>{post.User.username}</div>
              </div>
            ))
          }
      </div>
    </div>
  )
}


export async function getStaticProps(){
  console.log("I am on the server")

  const res = await fetch("http://localhost:1337/posts")
  const posts = await res.json()

  console.log(posts)

  return {
    props:{posts}
  }
}
