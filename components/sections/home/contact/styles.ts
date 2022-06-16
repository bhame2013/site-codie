import styled from "styled-components";

export const Contact = styled.section`
  padding: 100px 0 80px;
  background-color: var(--text-primary-color-intermediary);

  .container {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 20px;

  }

  .box-left {
    text-transform: lowercase;
  }

 .description-contact {
    margin-bottom: 0;
  }

  .description-contact + * {
    margin-top: 43px;
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
`;
