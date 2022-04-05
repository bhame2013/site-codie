import {
    createGlobalStyle,
    keyframes
}

from 'styled-components'

const spin=keyframes` from {
    transform: rotate(0deg);
}

to {
    transform: rotate(360deg);
}

` 
export const GlobalStyle=createGlobalStyle`:root {
    --primary-color: #643b7e; //roxo
    --secondary-color: #147981; //azul
    --tertiary-color: #212529; //black
    --error: #A91919;
}

.error-message {
    color: var(--error);
    font-size: 12px;
    font-family: Filson;
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

[class*="PrivateTabIndicator-colorPrimary"] {
    background-color: var(--primary-color) !important;
}

[class*="PrivateTabIndicator-colorSecondary"] {
    background-color: var(--primary-color) !important;
}




.container-guiadas {
    max-width: 1160px;
    width: 100%;
    padding-left: 15px;
    padding-right: 15px;
    margin-left: auto;
    margin-right: auto;
}

.modal-photo {
    max-width: 1250px;
    width: 95%;
    background-color: #ffffff;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    right: 0;
    margin: 0 auto;
    padding: 45px 50px 35px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;

    .photo-handle-area {
        margin-bottom: 30px;
        width: 100%;
        border-radius: 8px;
        border: 1px dashed #d2d7dc;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 70px 0 73px;
        cursor: pointer;


        .title-photo-handle-area {
            color: var(--tertiary-color);
            margin-bottom: 16px;
        }

        .description-photo-handle-area {
            margin-top: 13px;
            color: #90a4ae;
            margin-bottom: 0;
        }
    }

    .photo-preview-area {
        width: 250px;
        height: 250px;
        margin-bottom: 30px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: 0.3s;
        border: 1px dashed var(--secondary-color);
        padding: 30px;


        img {
            max-width: 100%;
            max-height: 100%;
            object-fit: contain;
            object-position: center center;
        }
    }

    .photo-preview-area:hover {
        opacity: 0.95;
        transition: 0.3s;
    }

    .save {
        padding: 0 65px;
    }

}


.form-guiadas {
    .inputs-row {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 24px;
    }

    label {
        color: var(--tertiary-color);
        margin-bottom: 2px;
    }

    input,
    textarea {
        width: 100%;
        border-width: 0 0 1px 0;
        border-style: solid;
        border-color: #868e96;
        color: #868e96;
    }

    input {
        height: 54px;
    }

    textarea {
        height: 110px;
        padding-top: 10px;
    }

    input::placeholder {
        color: #868e96;
    }

    textarea::placeholder {
        color: #868e96;
    }
}

.whatsapp-fixed {
    position: fixed;
    z-index: 99;
    right: 25px;
    bottom: 50px;
    width: 56px;

    svg {
        width: 100%;
        height: auto;

        .bg-whats {
            fill: #25d366;
            transition: 0.3s;
        }

        .icon-whats {
            fill: #fff;
        }
    }
}

.whatsapp-fixed:hover {
    svg {
        .bg-whats {
            transition: 0.3s;
            fill: var(--primary-color);
        }
    }
}

.container-carousel {
    position: relative;

    .swiper-button-disabled {
        opacity: 0;
    }

    .nav-generic {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 40px;


        #carousel-left-depoimentos,
        #carousel-right-depoimentos {
            margin: 0 15px;
        }

        #carousel-left-depoimentos {
            img {
                transform: rotate(-180deg);
            }
        }
    }

    .nav-position {

        [id*="carousel-left"],
        [id*="carousel-right"] {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            z-index: 3;
        }

        [id*="carousel-left"] {
            left: -34px;

            img {
                transform: rotate(-180deg);
            }
        }

        [id*="carousel-right"] {
            right: -34px;
        }
    }
}

#business-contact {
    text-align: center;
    background-color: #fafafa;
    padding: 70px 0 90px;

    h2 {
        color: var(--tertiary-color);
        max-width: 990px;
        margin: 0 auto;
    }

    h2+* {
        margin-top: 10px;
    }
}

.loader-fill {
    color: var(--primary-color);
    font-size: 25px;
    animation: ${spin} 1s linear infinite;
}

.filter {
    display: flex;
    align-items: center;
    justify-content: center;

    .form {
        margin-left: 30px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        

        input {
            width: calc(100% - 40px);
            border: 1px solid var(--primary-color);
            padding-left: 15px;
            height: inherit;

        }

        button {
            width: 40px;
            background-color: var(--primary-color);
            color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            height: inherit;
            border: 0#147981;
        }

        button:hover {
            background-color: var(--secondary-color);
        }
    }


}

.fadeOut-bg {
    height: 100vh;
    width: 100vw;
    background-color: transparent;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
}

.pesquisa-blog {
    border-bottom: 1px solid var(--secondary-color);
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 25px;

    input {
        border: 0;
        height: 30px;
        width: calc(100% - 18px);
    }
    input::placeholder {
        color: var(--secondary-color);
    }
    button {
        display: flex;
        svg {
            fill: var(--secondary-color);
        }
    }
}
.list-blog {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 40px;
    grid-row-gap: 50px;

    .box-blog {
        padding-top: 7px;
        border-top: 1px solid var(--primary-color);

        h3 {
            color: var(--tertiary-color);
            margin-bottom: 15px;
            height: 108px;
        }

        p {
            color: var(--tertiary-color);

            span {
                color: var(--secondary-color);
                text-decoration: underline;
                display: block;
                margin-bottom: 4px;
            }
        }
    }
}

.filter.mobile {
    display: none;
}

.list-itens + .list-itens {
    margin-top: 30px;
}



@media only screen and (max-width: 1400px) {

    [id*="carousel-right"],
    [id*="carousel-left"] {
        width: 50px;

        img {
            width: 100%;
        }
    }

    .form-guiadas {
        .inputs-row {
            grid-column-gap: 20px;
        }


        input {
            height: 52px;
        }

        textarea {
            height: 100px;
        }
    }

}

@media only screen and (max-width: 1200px) {
    .form-guiadas {
        .inputs-row {
            grid-column-gap: 18px;
        }


        input {
            height: 50px;
        }

        textarea {
            height: 90px;
        }
    }
}

@media only screen and (max-width: 1024px) {

    .form-guiadas {
        .inputs-row {
            grid-column-gap: 16px;
        }


        input {
            height: 48px;
        }

        textarea {
            height: 82px;
        }
    }

    .list-blog {
        max-width: 320px;
        margin: 0 auto;
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 20px;
        grid-row-gap: 23px;
    }
}


@media only screen and (max-width: 768px) {
    .modal-photo {
        padding: 35px 30px;

        .photo-handle-area {
            margin-bottom: 20px;
            padding: 40px 0;



            .description-photo-handle-area {
                margin-top: 10px;
            }
        }

        .photo-preview-area {
            width: 200px;
            height: 200px;
            margin-bottom: 20px;
            padding: 15px;
        }

        .save {
            padding: 0 45px;
        }

    }

    .form-guiadas {
        .inputs-row {
            grid-column-gap: 15px;
        }


        input {
            height: 46px;
        }

        textarea {
            height: 75px;
        }
    }

    .lista-blog {
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 25px;
        grid-row-gap: 30px;
    }
}

@media only screen and (max-width: 650px) {
    .logo {
        margin-right: 10px;
    }
    .filter  {
        .form {
            margin-left: 10px;
            input {
                width: 100px;
            }
        }
    }
}

@media only screen and (max-width: 520px) {
   
       
    .filter  {
     display:  none;
    }
    .filter.mobile {
        display: flex !important;
    }
}


@media only screen and (max-width: 420px) {
    .modal-photo {
        padding: 25px 15px;

        .photo-handle-area {
            margin-bottom: 15px;
            padding: 30px 0;



            .description-photo-handle-area {
                margin-top: 8px;
            }
        }

        .photo-preview-area {
            width: 180px;
            height: 180px;
            margin-bottom: 15px;
            padding: 10px;
        }

        .save {
            padding: 0 40px;
        }

    }

}

.remove-link-style {
    color: inherit;

    &:hover {
        color: inherit;
    }
}

`