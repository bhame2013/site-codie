import styled from "styled-components";

interface CustomerStyleProps {
  theme: "--primary-color" | "--secondary-color";
}

export const Customers = styled.section<CustomerStyleProps>`
  padding: 50px 0 80px;
  overflow: hidden;

  .carousel {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
  }
  .carousel {
    h2 {
      max-width: 442px;
      width: 100%;
      color: var(--text-primary-color-dark);
      line-height: 1.05;
      text-transform: lowercase;
    }
  }

  .name,
  .profession {
    color: ${(props) => `var(${props.theme})`};
  }

  .description-customer::-webkit-scrollbar {
    width: 5px;
  }
  .description-customer::-webkit-scrollbar-track {
    background: transparent;
  }
  .description-customer::-webkit-scrollbar-thumb {
    background: ${(props) => `var(${props.theme})`};
    border-radius: 10px;
  }
  .description-customer::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  .carousel-content {
    max-width: 674px;
    width: 100%;
  }

  .nav {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 20px;

    button {
      background-color: unset;
      border: 0;

      svg {
        stroke: ${(props) => `var(${props.theme})`};
      }
    }
  }

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-250px * 7));
    }
  }

  .slider {
    overflow: hidden;
    position: relative;
    width: 100%;
    margin-bottom: 120px;
    .slide-track {
      animation: scroll 40s linear infinite;
      display: flex;
      width: calc(330px * 14);
    }

    .slide {
      height: 165px;
      width: 330px;
      padding: 0 15px;

      div {
        width: 100%;
        height: 100%;
      background-color: #fff;

      }

      img {
        height: 100%;
        object-fit: contain;
        width: 100%;
      }
    }
  }
`;
