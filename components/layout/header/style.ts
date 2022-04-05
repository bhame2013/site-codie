import styled from "styled-components"

interface HeaderProps {
    fontSize?:string
    headerType?: "home" | "internal"
}

export const Header = styled.header<HeaderProps> `

font-size:${props=>props.fontSize};

nav.principal {
    display:block;
}
`
