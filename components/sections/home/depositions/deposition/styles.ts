import styled from "styled-components";

export const Customer = styled.div`
 .description-customer {
    overflow: hidden;
    line-height: 25px;
    height: 125px;
    overflow: auto;
    margin-bottom: 30px;
    padding-right: 10px;
  }


  .bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-transform: lowercase;

    > div {
      display: flex;
      flex-direction: column;
    }

    .category {
      color: var(--text-primary-color-dark);
      opacity: 0.5;
    }
  }
`;
