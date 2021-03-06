import styled from "styled-components";

export const ServicesItem = styled.div`

  .bg {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }

  p {
    max-width: 675px;
    color: var(--text-primary-color-intermediary);
  }

  .container {
    aspect-ratio: 1920/800;
    min-height: 560px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-bottom: clamp(40px, 5.5vw, 100px);
  }
`;
