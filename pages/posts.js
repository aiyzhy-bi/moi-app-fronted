import React from 'react'
import {useState,useEffect} from 'react'
import Link from "next/link"
import Head from 'next/dist/shared/lib/head'
import { MainLayout } from '../components/MainLayout'
import styles from "../styles/Home.module.css"
import myimage from '/public/gosu.jpg'

export default function Posts({posts}){
    /*const [posts, setPosts] = useState([])

    useEffect(() => {
        async function load(){
            const response= await fetch('http://localhost:4200/posts')
            const json = await response.json()
            setPosts(json)
        }

        load()
    }, [])*/
    return(
        <MainLayout>
            <Head>
                <title>Новости | Госуслуги</title>
                <link rel="icon" href="/gosuslugi.png"/> 
            </Head>
            <>
                <h1>Posts news gosuslugi</h1>
                <link rel="myimage" href="/gosu.jpg"/>                 
                    {posts.map(post => (
                        <div key={post.id} className={styles.card}>
                            
                            <Link href={`/post/[id]`} as={`/post/${post.id}`}>
                            <a><h3>{post.title}</h3>
                                <p>{post.body}</p>
                            </a>
                            
                            </Link>
                        </div>
                    ))}               
            </>
        </MainLayout>
    )
}

Posts.getInitialProps = async () => {
    const response= await fetch('http://localhost:4200/posts')
    const posts = await response.json()
    
    return {
        posts
    }
}