import styled from "styled-components";

export const Input = styled.div`
  margin-bottom: 15px;

  input,
  textarea {
    background-color: #fff;
    border-radius: 10px;
    border: 0;
    width: 100%;
    padding: 0 20px;
    text-transform: lowercase;
    color: var(--text-primary-color-dark);
  }

  input::placeholder, textarea::placeholder {
    color: var(--text-primary-color-dark);
  }

  input {
    height: 48px;
  }

  textarea {
    height: 158px;
    padding-top: 15px;
  }
`;
