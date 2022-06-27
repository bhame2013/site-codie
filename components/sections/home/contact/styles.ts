import styled from "styled-components";

interface ContactStyleProps {
  theme?: "--secondary-color" | "--secondary-color"
}


export const Contact = styled.section<ContactStyleProps>`
  padding: ${props => props.theme ? "200px 0 80px" : "100px 0 80px"};
  background-color: ${props => props.theme ? `var(${props.theme})`: "var(--text-primary-color-intermediary)"};
  color:  ${props => props.theme ? "#fff !important" : "unset"};
  
  .container {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 20px;
  }

  .box-left {
    text-transform: lowercase;
    width: 100%;
  }

  .description-contact {
    margin-bottom: 0;
  }

  .description-contact + * {
    margin-top: 35px;
  }

  ul {
    display: flex;
    flex-direction: column;

    li {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      cursor: pointer;
      transition: 0.3s;
      span {
        span {
          font-weight: bold;
        }
      }

      img {
        max-width: 20px;
        width: 100%;
        object-fit: contain;
      }
    }

    li:hover {
      gap: 6px;
    }

    li + li {
      margin-top: 5px;
      cursor: pointer;
    }
  }

  form {
    max-width: 680px;
    width: 100%;

    .actions {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

  @media only screen and (max-width: 1600px) {
    padding: ${props => props.theme ? "185px 0 70px" : "85px 0 70px"};

    .container {
      gap: 65px;
    }

    form {
      max-width: 470px;
    }

    .item-list-contact {
      padding-top: 3px;
    }

    .description-contact + * {
      margin-top: 30px;
    }
  }

  @media only screen and (max-width: 1400px) {
    padding: ${props => props.theme ? "170px 0 65px" : "70px 0 65px"};

    .container {
      gap: 30px;
    }

    form {
      max-width: 430px;
    }

    .item-list-contact {
      padding-top: 2px;
    }

    ul {
      li {
        img {
          max-width: 19px;
        }
      }
    }
  }

  @media only screen and (max-width: 1200px) {
    padding: ${props => props.theme ? "150px 0 55px" : "60px 0 55px"};

    form {
      max-width: 390px;
    }

    .description-contact + * {
      margin-top: 25px;
    }
  }

  @media only screen and (max-width: 1024px) {
    padding: ${props => props.theme ? "140px 0 45px" : "35px 0 45px"};

    .container {
      flex-direction: column;
      align-items: center;
      gap: 25px;
    }

    .box-left {
      text-align: center;
    }

    .box-left,
    form {
      max-width: 430px;
    }

    p {
      max-width: 345px;
      margin: 0 auto;
    }

    .description-contact + * {
      margin-top: 20px;
    }

    form {
      .actions {
        justify-content: center;
      }
    }

    input,
    textarea {
      max-width: 100%;
    }
  }

  @media only screen and (max-width: 768px) {
    padding: ${props => props.theme ? "140px 0 25px" : "30px 0 25px"};

    .box-left {
      div {
        margin-bottom: 5px;
      }
    }

    ul {
      li {
        img {
          max-width: 17px;
        }
      }
    }
  }

  @media only screen and (max-width: 500px) {
    padding: ${props => props.theme ? "140px 0 20px" : "20px 0"};

    .container {
      max-width: 90vw;
    }

    .box-left {
      max-width: 330px;
    }

    ul {
      max-width: 300px;
      margin: 0 auto;

      li {
        gap: 7px;

        img {
          max-width: 15px;
        }
      }
    }

    .description-contact + * {
      margin-top: 15px;
    }

    form {
      max-width: 360px;
    }
  }
`;
