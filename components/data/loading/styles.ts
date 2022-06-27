import styled from "styled-components";

interface LoadingProps {
  progress: number;
}

export const Loading = styled.div<LoadingProps>`
  height: 100vh;
  width: 100%;
  position: fixed;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--secondary-color);
  z-index: 99;
  transition: 0.5s ease-in;
  opacity: ${props => props.progress === 100 && 0};
  transform: ${props => props.progress === 100 && "translateY(-100%)"};


  h3 {
    color: #ffffff;
    letter-spacing: 35px;
    text-transform: uppercase;
    margin: 0;
    opacity: 0;
    animation: ${props => props.progress === 99 && "4s forwards animationHello"};
  }

  .loading {
    text-align: center;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    right: 0;
    animation: ${props => props.progress > 85 && "1s forwards noneLoading"};

    img {
      margin-bottom: 40px;
    }

    p {
      animation: 5s forwards animationLoadingLetters;
      color: #fff;
    }

    .progress-bar {
      width: 260px;
      margin: 0 auto;

      div {
        height: 5px;
        background-image: linear-gradient(270deg, #ff0042 0%, #f7f7f7 100%);
        width: 0;
        transition: 0.2s ease-in-out;
      }
    }
  }

  @keyframes animationHello {
    0% {
      opacity: 0;
      transform: translateX(-100%);
    }
    50% {
      opacity: 1;
      transform: translateX(0);
    }
    100% {
      opacity: 0;
      transform: translateY(-100%);
    }
  }

  @keyframes animationLoadingLetters {
    0% {
      letter-spacing: 0px;
    }
    50% {
      letter-spacing: 4px;
    }
    100% {
      letter-spacing: 8px;
    }
  }

  @keyframes noneLoading {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;
