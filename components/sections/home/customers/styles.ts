import styled from "styled-components";


export const Customers = styled.section`
  padding: 50px 0 80px;
  overflow: hidden;

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
