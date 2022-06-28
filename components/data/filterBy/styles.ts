import styled from "styled-components";

export const Filter = styled.div`
  width: 100%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  border-radius: 20px;
  background-color: #ffffff;
  padding: 50px 40px 30px;
  
  h3 {
    text-align: center;
    color: var(--secondary-color);
    text-transform: lowercase;
    margin-bottom: 25px;
  }

  button {
    background-color: transparent;
    border-width: 0 0 1px 0;
    border-color: rgba(0,0,0,0.25);
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding-bottom: 13px;
    padding-top: 13px;
    margin-bottom: 6px;

    span {
      display: flex;
      line-height: 16px;
      height: 12px;
      border-radius: 8px;
    }
  }

  button.active {
    background-color: var(--primary-color);
    color: #fff;
    border-color: var(--primary-color);
  }

  button:hover {
    background-color: var(--primary-color);
    color: #fff;
    border-color: var(--primary-color);
  }

  button:last-child {
    border-bottom: 0;
  }
`;
