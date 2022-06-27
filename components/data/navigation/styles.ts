import styled from "styled-components";

interface NavigationStyleProps {
    theme?: string;
}

export const Navigation = styled.div<NavigationStyleProps>`
   display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 20px;

    button {
      background-color: unset;
      border: 0;

      svg {
        stroke: ${(props) => `var(${props.theme})`};
      }
    }
`;
