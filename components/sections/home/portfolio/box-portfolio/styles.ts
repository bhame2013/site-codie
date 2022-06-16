import styled from "styled-components";

export const BoxPortfolio = styled.a`
  position: relative;
  display: inline-block;
  width: 100%;
  overflow: hidden;
  aspect-ratio: 635/460;

  &:hover {
    img {
        transform: scale(1.07);
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
  }

  .shadow {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.74) 59%,
      #000000 100%
    );
    opacity: 0.6;
    z-index: 2;
  }

  h3 {
    text-align: center;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 30px;
    padding: 0 15px;
    margin: 0;
    text-transform: lowercase;
    color: var(--text-primary-color-light);
    z-index: 3;
  }
`;
