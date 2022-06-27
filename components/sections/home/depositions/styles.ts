import styled from "styled-components";

interface DepositionsStyleProps {
  theme: "--primary-color" | "--secondary-color";
}

export const Depositions = styled.section<DepositionsStyleProps>`
  padding: 40px 0 80px;
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

`;
