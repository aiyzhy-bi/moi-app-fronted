import Link from 'next/link'
import Head from 'next/dist/shared/lib/head'
import {useRouter} from 'next/router'
import { MainLayout } from '../../components/MainLayout'

export default function Post({post}){
   // const router = useRouter()
    return(
        <MainLayout>
            <Head>
                <title>{post.title}</title>
                <link rel="icon" href="/gosuslugi.png"/> 
            </Head>
            <h1>{post.title}</h1>
            <hr/>
            <p>{post.body}</p>
            <Link href={'/posts'}><a>Вернуться ко всем новостям</a></Link>
        </MainLayout>
        
    )
}

Post.getInitialProps = async (ctx) =>{
    const response= await fetch(`http://localhost:4200/posts/${ctx.query.id}`)
    const post = await response.json()
    
    return {
        post
    }
}