import {
    createGlobalStyle
}

from 'styled-components'

export const FontStyle=createGlobalStyle`

@font-face {
    font-family: 'DMsans';
    src: url('/fonts/DMSans-Medium.ttf') format('truetype');
    font-weight: 500;
}

@font-face {
    font-family: 'Exo';
    src: url('/fonts/Exo-Bold.ttf') format('truetype');
    font-weight: 700;
}

@font-face {
    font-family: 'Filson';
    src: url('/fonts/FilsonProBlack.otf') format('truetype');
    font-weight: 900;
}

@font-face {
    font-family: 'Filson';
    src: url('/fonts/FilsonProMedium.otf') format('truetype');
    font-weight: 500;
}

@font-face {
    font-family: 'Filson';
    src: url('/fonts/FilsonProRegular.otf') format('truetype');
    font-weight: 400;
}

@font-face {
    font-family: 'Filson';
    src: url('/fonts/FilsonProRegularItalic.otf') format('truetype');
    font-weight: 400;
    font-style: italic;
}


.dmsans {
    font-family: DMsans !important;
}

.exo {
    font-family: Exo !important;
}

.filson {
    font-family: Filson !important;
}

h1,
h2,
h3,
h4,
h5,
p,
span,
strong,
time,
address,
i,
a,
b,
label,
li,
td {
    text-rendering: optimizeLegibility !important;
}

[class*="-italic"] {
    font-style: italic;
}

[class*="-black"] {
    font-weight: 900;
}

[class*="-bold"] {
    font-weight: 700;
}

[class*="-semibold"] {
    font-weight: 600;
}

[class*="-medium"] {
    font-weight: 500;
}

[class*="-regular"] {
    font-weight: 400;
}

[class*="-light"] {
    font-weight: 300;
}

[class*="titulo1"] {
    font-size: 96px;
}

[class*="titulo2"] {
    font-size: 48px;
}

[class*="titulo3"] {
    font-size: 36px;
}

[class*="titulo4"] {
    font-size: 24px;
}

[class*="titulo5"] {
    font-size: 18px;
}

[class*="paragrafo1"] {
    font-size: 18px;
}

[class*="paragrafo2"] {
    font-size: 14px;
}

[class*="paragrafo3"] {
    font-size: 12px;
}

[class*="link1"] {
    font-size: 18px;
}

[class*="link2"] {
    font-size: 14px;
}

[class*="link3"] {
    font-size: 12px;
}

.letter-s-1 {
    letter-spacing: 1.44px;
}

@media only screen and (max-width: 1400px) {
    [class*="titulo1"] {
        font-size: 85px;
    }

    [class*="titulo2"] {
        font-size: 45px;
    }

    [class*="titulo3"] {
    font-size: 32px;
}
    [class*="titulo4"] {
    font-size: 23px;
}

    [class*="paragrafo1"] {
        font-size: 17px;
    }


    [class*="link1"] {
        font-size: 17px;
    }
}

@media only screen and (max-width: 1200px) {
    [class*="titulo1"] {
        font-size: 75px;
    }

    [class*="titulo2"] {
        font-size: 42px;
    }
      [class*="titulo3"] {
    font-size: 29px;
}
        [class*="titulo4"] {
    font-size: 21px;
}

    [class*="paragrafo1"] {
        font-size: 16px;
    }

    [class*="link1"] {
        font-size: 16px;
    }
}

@media only screen and (max-width: 1024px) {
    [class*="titulo1"] {
        font-size: 55px;
    }

    [class*="titulo2"] {
        font-size: 39px;
    }
        [class*="titulo3"] {
    font-size: 27px;
}
    [class*="titulo4"] {
    font-size: 20px;
}
    [class*="paragrafo1"] {
        font-size: 15px;
    }

    [class*="link1"] {
        font-size: 15px;
    }
}

@media only screen and (max-width: 768px) {
    [class*="titulo1"] {
        font-size: 43px;
    }

    [class*="titulo2"] {
        font-size: 35px;
    }
     [class*="titulo3"] {
    font-size: 25px;
}
  [class*="titulo4"] {
    font-size: 19px;
}
    [class*="paragrafo1"] {
        font-size: 14px;
    }

    [class*="link1"] {
        font-size: 14px;
    }
}

`