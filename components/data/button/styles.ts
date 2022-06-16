import styled from "styled-components";

interface ButtonStyleProps {
  color?:
    | "--primary-color"
    | "--secondary-color"
    | "--text-primary-color-dark"
    | "--text-primary-color-light";
}

export const Button = styled.div<ButtonStyleProps>`

  a,
  button {
    color: ${(props) =>
      props.color ? `var(${props.color})` : `var(--text-primary-color-dark)`};
    min-width: 265px;
    height: 48px;
    border-radius: 39px;
    border: 2px solid currentColor;
    background-color: transparent;
    cursor: pointer;
    display: inline-flex;
    position: relative;

    .textIn,
    .textOut {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 0;
      right: 0;
      margin: 0 auto;
      text-align: center;
      transition: 0.3s;
      color: currentColor;
    }

    .textIn {
      opacity: 1;
    }

    .textOut {
      opacity: 0;
    }

    svg {
      height: 100%;
      width: auto;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      height: calc(100% - 16px);
      right: 8px;
      margin-right: 0;
      transition: 0.3s;
      fill: currentColor;
      stroke: currentColor;
    }
  }

  a:hover,
  button:hover {
    background-color: ${(props) =>
      props.color === "--text-primary-color-light"
        ? "var(--secondary-color)"
        : props.color
        ? `var(${props.color})`
        : `var(--text-primary-color-dark)`};
    border-color: #fff;
    transition: 0.3s;

    .textIn {
      opacity: 0;
      transition: 0.3s;
    }

    .textOut {
      opacity: 1;
      transition: 0.3s;
    }

    .textIn,
    .textOut {
      color: #fff;
    }

    svg {
      margin-right: calc(100% - 43px);
      transition: 0.3s;
      stroke: #fff;
      fill: #fff;
    }
  }
`;
