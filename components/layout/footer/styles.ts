import styled from "styled-components";

export const Footer = styled.footer`
  background-color: var(--text-primary-color-dark);
  padding-top: clamp(40px, 4.43vw, 85px);
  padding-bottom: 18px;

  * {
    color: var(--text-primary-color-intermediary);
  }

  .flex-footer-itens {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 20px;
  }

  .logo-footer-mobile {
    display: none;
  }

  .flex-footer-itens + * {
    margin-top: 80px;
  }

  h3 {
    margin-bottom: 0;
    text-transform: lowercase;
  }

  h3 + * {
    margin-top: 8px;
  }

  li + li {
    margin-top: 7px;
  }

  li {
    a {
      text-transform: lowercase;
      position: relative;
      display: inline-flex;

      i {
        width: 20px;
        margin-right: 10px;

        img {
          max-width: 100%;
        }
      }

      span {
        max-width: 244px;
      }
    }

    a::after {
      content: "";
      width: 0;
      height: 1px;
      position: absolute;
      bottom: -3px;
      left: 0;
      background-color: currentColor;
      transition: 0.3s;
    }

    a:hover {
      color: currentColor;
    }

    a:hover::after {
      width: 100%;
    }
  }

  .logo {
    max-width: 52px;

    img {
      width: 100%;
    }
  }

  .bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;

    [class*="link"] {
      opacity: 0.5;
      color: currentColor;
      text-transform: lowercase;
    }

    [class*="link"]:hover {
      opacity: 1;
      color: currentColor;
    }

    [class*="link"] + * {
      margin-left: 70px;
    }
  }

  @media only screen and (max-width: 1600px) {
    .flex-footer-itens + * {
      margin-top: 70px;
    }
  }

  @media only screen and (max-width: 1400px) {
    .container {
      max-width: 85vw;
    }

    .flex-footer-itens + * {
      margin-top: 65px;
    }

    h3 + * {
      margin-top: 5px;
    }

    li+li {
      margin-top: 5px;
    }
  }

  @media only screen and (max-width: 1200px) {
    .container {
      max-width: 90vw;
    }

    .flex-footer-itens + * {
      margin-top: 55px;
    }
  }

  @media only screen and (max-width: 1024px) {
    .flex-footer-itens {
      flex-direction: column;
      align-items: center;

      ul {
        text-align: center;
      }

      div:nth-child(2){
        display: none;
      }

      div:nth-child(3){
        display: none;
      }
    }

    .logo-footer-mobile {
      display: block;
    }

    .institucional-footer {
      display: none;
    }

    .redes-footer, .contact-footer  {
      text-align: center;

      ul {
        display: flex;
        justify-content: center;
        gap: 10px;
      }

      li+li {
        margin-top: 0;
      }

      span {
        display: none;
      }

      a {
        display: flex;
        justify-content: center;

        i {
          margin-right: 0;
        }
      }
    }

    .flex-footer-itens + * {
      margin-top: 30px;
    }

    .bottom {
      justify-content: center;

      div {
        display: flex;
        flex-direction: column;
        text-align:center;
      }

      [class*="link"] + * {
        margin-left: 0;
      }

      .logo {
        display: none;
      }
    }
  }
`;
