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
`;
