import Link from 'next/link'
//import style from '../styles/modestyle.css'
export function MainLayout({children}){
    return(
        <>
        <nav>
            <Link href={'/'}><a>Главная</a></Link>
            <Link href={'/'}><a>О министерстве</a></Link>
            <Link href={'/'}><a>Деятельность</a></Link>
            <Link href={'/'}><a>Контакты</a></Link>
            <Link href={'/posts'}><a>Новости</a></Link>
            <Link href={'/'}><a>Поиск по сайту___</a></Link>
            <label>
                <input type="checkbox"></input>
                <span className='check'></span>
            </label>
        </nav>
        <main>
            {children}
        </main>
        <style jsx>{`
            nav{
                position: fixed;
                height: 60px;
                left: 0;
                right:0;
                top:0;
                background: darkblue;
                display: flex;
                justify-content: space-around;
                align-items:center;
            }
            nav a{
                color:#fff;
                text-decoration: none;
            }
            main{
                margin-top: 60px;
                padding: 1rem;
            }
        `}</style>
        </>
    )
}
 