import styled from "styled-components";

interface InformationStyleService {
  theme: "--primary-color" | "--secondary-color";
}

export const InformationService = styled.section<InformationStyleService>`
  padding-top: 90px;

  .container {
    display: flex;
    align-items: flex-start;
    gap: 120px;
  }

  h2 {
    text-transform: lowercase;
    margin-bottom: 65px;
    line-height: 1.05;

    p {
      font-size: inherit;
      font-weight: inherit;
    }

    span {
      color: ${(props) => (props.theme ? `var(${props.theme})` : "#000")};
      font-size: inherit;
      font-weight: inherit;
    }
  }

  ul {
    li {
      display: flex;
      gap: 30px;
      align-items: flex-start;

      img, svg {
        width: 35px;
        height: auto;
      }

      span {
        width: calc(100% - 35px - 30px);
        span {
          font-weight: 700;
        }
      }
    }

    li + li {
      margin-top: 40px;
    }
  }

  .image {
    max-width: 565px;
    width: 100%;
    position: relative;

    span {
      width: 100%;
      position: relative !important;

      img {
        position: relative !important;
        width: auto !important;
        height: auto !important;
      }
    }
  }
`;
