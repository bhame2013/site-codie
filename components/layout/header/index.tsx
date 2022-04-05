import * as S from "./style"

interface HeaderProps {
    headerType?: 'home' | 'internal'
}


export function HeaderComponent( {headerType } : HeaderProps){

    return (
        <S.Header headerType={headerType} >
            <nav >
                <ul>
                    <li><a href="/">Início</a></li>
                    <li><a href="/blog">Blog</a></li>
                    <li><a href="/conta">Contato</a></li>
                </ul>
            </nav>
        </S.Header>
    )
}