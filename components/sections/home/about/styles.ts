import styled from "styled-components";

export const Contact = styled.section`
  background-color: var(--text-primary-color-dark);
  padding: 100px 0;
  position: relative;

  .about-bg {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
    z-index: 2;
    position: relative;
  }

  .text {
    max-width: 675px;
    width: 100%;
    
    h2 {
      color: var(--text-primary-color-light);
      margin-bottom: 35px;
    }

    p {
      color: var(--text-primary-color-intermediary);
      margin-bottom: 42px;
    }
  }

  .title-about {
    display: flex;
    align-items: flex-start;
    gap: 20px;

    h3 {
      color: var(--text-primary-color-light);
      text-transform: lowercase;
      line-height: 1.02;
    margin: 0;
    }
  }
`;
