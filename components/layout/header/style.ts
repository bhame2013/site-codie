import styled from "styled-components";

export const Header = styled.header`
  position: fixed;
  top: clamp(30px, 7.41vh, 80px);
  left: 0;
  width: 100%;
  z-index: 4;

  .top--header {
    max-width: 89.6vw;
    width: 100%;
    margin: 0 auto;
    padding: 0 15px;
    display: flex;
    align-items: center;
    gap: clamp(60px, 6vw, 140px);

    .block-bar {
      display: flex;
      flex-direction: column;
      gap: 5px;
      width: 40px;
      cursor: pointer;

      div {
        background-color: #fff;
        height: 3.9px;
        width: 100%;
      }
    }

    .block-bar:hover {
      div {
        background-color: var(--primary-color);
      }
    }
  }

  .top--header.active {
    .block-bar {
      div {
        background-color: var(--secondary-color);
        transition: 0.3s;
      }

      div:first-child {
        transform: rotate(-45deg) translate(-9px,6px);
        transition: 0.3s;
      }

      div:nth-child(2) {
        opacity: 0;
      }

      div:last-child {
        transform: rotate(45deg) translate(-6px,-3px);
        transition: 0.3s;
      }
    }

    .block-bar:hover {
      div {
        background-color: var(--primary-color);
      }
    }
  }
`;
