import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    --primary-color: #ff0042;
    --secondary-color: #0000ef;
    --text-primary-color-dark: #232323;
    --text-primary-color-intermediary: #eeeeee;
    --text-primary-color-light: #fff; 
}

body {
    background-color: var(--text-primary-color-intermediary);
}

.error-message {
    color: var(--error);
    font-size: 12px;
}

html {
    scroll-behavior: smooth !important;
}

*:focus {
    outline: transparent !important;
}

.uppercase {
    text-transform: uppercase;
}

a,
button {
    cursor: pointer;
    text-decoration: none !important;
    transition: 0.25s;

    svg,
    img {
        transition: 0.25s;
    }
}

a:hover,
button:hover {
    transition: 0.25s;

    svg,
    img {
        transition: 0.25s;
    }
}

a::after,
a::before {
    transition: 0.3s;
}

a:hover::after,
a:hover::before {
    transition: 0.3s;
}

ol,
ul {
    list-style: none !important;
    padding-left: 0 !important;
    margin-bottom: 0 !important;
}


.container {
    max-width: 72vw;
    width: 100%;
    padding-left: 15px;
    padding-right: 15px;
    margin-left: auto;
    margin-right: auto;
}

.menu--header {
    min-height: 100vh;
    background-color: #fff;
    transition: 0.3s;
    position: fixed;
    z-index: 3;
    top: 0;
    left: 0;
    width: 100%;
    transform: translateX(-100%);
    display: flex;

    .container {
        display: flex;
        align-items: center;
        padding: calc(7.41vh + 27px + 15px) 0 ;
    }

    li + li {
        margin-top: 2.78vh;
    }

    a {
        color: var(--secondary-color);
        font-size: clamp(30px, 4.63vh, 50px);
    }

    a:hover {
        color: var(--primary-color);
    }
}

.menu--header.active {
    transform: translateX(0%);
    transition: 0.3s;
}

.phone--header {
    position: fixed;
    left: 3.9vw;
    top: 50%;
    transform: translateY(-50%) rotate(-90deg);
    color: var(--text-primary-color-light);
    z-index: 4;
    transition: 0.3s;

    &:hover {
        color: var(--primary-color) !important;
    }
}

.midias--header {
    position: fixed;
    right: 3.9vw;
    top: 50%;
    transform: translateY(-50%) rotate(90deg);
    z-index: 4;

    a {
        color: var(--text-primary-color-light);
        transition: 0.3s;
    }
    
    a + a {
        margin-left: clamp(20px, 3.7vh , 40px);
    }

    a:hover {
        color: var(--primary-color) !important;
    }
}

.midias--header.active {
    a {
        color: var(--secondary-color);
    }
}

.phone--header.active {
    color: var(--secondary-color);
    transition: 0.3s;
}

@media only screen and (max-width: 1600px) {
    .phone--header {
        left: 3.5vw;
    }

    .midias--header {
        right: 3.5vw;
    }

    .container {
        max-width: 75vw;
    }
}

@media only screen and (max-width: 1400px) {
    .phone--header {
        left: 2vw;
    }

    .midias--header {
        right: 2vw;
    }
}



@media only screen and (max-width: 1024px) {
    .phone--header {
        display: none;
    }

    .midias--header {
        display: none;
    }
}


`;
