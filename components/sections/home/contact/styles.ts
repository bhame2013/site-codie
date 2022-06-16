import styled from "styled-components";

export const Contact = styled.section`
  padding: 100px 0 80px;
  background-color: var(--text-primary-color-intermediary);

  .box-left {
    text-transform: lowercase;
  }

  h2 + * {
    margin-top: 20px;
  }

  h2 {
    margin-bottom: 0;
  }

  p {
    margin-bottom: 0;
  }

  p + * {
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
`;
