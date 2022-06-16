import styled from "styled-components";

export const Banner = styled.section`
  .bg {
    min-height: 100vh;
    width: 100%;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    display: flex;

    .container {
      padding: calc(28px + clamp(40px, 7.41vh, 80px) + 15px) 15px;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      gap: clamp(20px, 2.35vw, 50px);
    }
  }

  p {
    min-height: 50px;
    max-width: 675px;
    width: 100%;
    color: #fff;
    margin-bottom: 0;
  }

  p + * {
    margin-top: 46px;
  }

  .scroll {
    display: inline-flex;
    align-items: center;
    gap: 9px;
    color: var(--text-primary-color-light);
  }

  .heightMenu {
    height: 20px;
  }

  .menu-banner {
    display: flex;
    align-items: center;
    gap: clamp(20px, 2.35vw, 50px);
    color: var(--text-primary-color-light);

    a {
      text-transform: lowercase;
      position: relative;
      color: currentColor;
    }

    a::after {
      content: "";
      width: 0;
      height: 2px;
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
`;
