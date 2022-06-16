import styled from "styled-components";

interface TitleStyleProps {
  color?: "light" | "dark";
  margin: {
    max: number | "45" | "60" | "100";
    variable: number;
    min: number;
  } 
}

export const Title = styled.h2<TitleStyleProps>`
  margin-bottom: ${(props) => `clamp( ${props.margin.min}px ,${props.margin.variable}vw , ${props.margin.max}px)`};

  * {
    color: ${(props) =>
      props.color === "light"
        ? "var(--text-primary-color-light)"
        : "var(--text-primary-color-dark)"};
  }

  h1,
  h2 {
    line-height: 0.9;
    margin: 0;
  }
`;
