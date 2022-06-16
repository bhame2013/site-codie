import styled from "styled-components";

export const Portfolio = styled.section`
  padding-top: 100px;

  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 80px;

    > div:first-child {
      max-width: 580px;
    }

    > div:last-child {
      > div {
      margin-top: 20px;
    }
    }

   
  }

  .list-portfolio {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`;
