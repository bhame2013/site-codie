import styled from "styled-components";

export const Input = styled.div`
  margin-bottom: 10px;

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

  input::placeholder,
  textarea::placeholder {
    color: var(--text-primary-color-dark);
  }

  input {
    height: 48px;
  }

  textarea {
    height: 158px;
    padding-top: 15px;
    resize: none;
  }

  @media only screen and (max-width: 1600px) {
    textarea {
      height: 148px;
    }
  }

  @media only screen and (max-width: 1400px) {
    input {
      height: 46px;
      padding-top: 2px;
    }

    textarea {
      height: 138px;
    }
  }

  @media only screen and (max-width: 1200px) {
    input {
      height: 44px;
    }

    textarea {
      height: 128px;
    }
  }

  @media only screen and (max-width: 1024px) {
    input,
    textarea {
      padding: 2px 18px;
    }

    input {
      height: 42px;
    }

    textarea {
      height: 118px;
      padding-top: 12px;
    }
  }

  @media only screen and (max-width: 768px) {
    input,
    textarea {
      padding: 2px 16px;
    }

    input {
      height: 40px;
    }

    textarea {
      height: 108px;
      padding-top: 10px;
    }
  }

  @media only screen and (max-width: 500px) {
    input,
    textarea {
      padding: 2px 14px;
    }

    textarea {
      height: 100px;
      padding-top: 8px;
    }

  }
`;
