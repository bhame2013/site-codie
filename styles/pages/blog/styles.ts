import styled from "styled-components";

export const Blog = styled.section`
  .bg {
    aspect-ratio: 1920/856;
    z-index: 1;
    position: relative;
    display: flex;
    padding-bottom: 150px;

    .container {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    h1 {
      color: var(--text-primary-color-intermediary);
      text-transform: lowercase;
    }

    .box-right {
      display: flex;
      align-items: center;
      gap: 25px;
    }

    .search {
      display: flex;
      background-color: rgba(0, 0, 0, 0.3);
      backdrop-filter: blur(5px);
      border: 0;
      overflow: hidden;

      input {
        border: 0;
        background-color: unset;
        width: calc(100% - 50px);
        color: #fff;
      }

      button {
        width: 50px;
        background-color: transparent;
        border: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        svg {
          fill: #fff;
        }
      }

      button:hover {
        background-color: #fff;

        svg {
          fill: var(--primary-color);
        }
      }
    }

    select,
    .search {
      width: 349px;
      height: 41px;
      border: 1px solid #ffffff;
      backdrop-filter: blur(5px);
      border-radius: 50px;
      color: #fff;
      background-color: rgba(0, 0, 0, 0.3);
    }

    input::placeholder {
      color: #fff;
    }

    input {
      padding: 0 25px;
    }

    select {
      padding-left: 45px;
    }

    select {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      background-image: url("/images/arrow-bottom-select.png");
      background-size: 13px 7px;
      background-position: 20px 47%;
      background-repeat: no-repeat;
    }

    select::-ms-expand {
      display: none;
    }
  }

  .blog-content {
    display: flex;
    justify-content: space-between;
    gap: 30px;
    padding-bottom: 120px;
    position: relative;
    z-index: 2;
    margin-top: -200px;

    .list {
      max-width: 66.666666666%;
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 40px;

      .list-content {
        display: grid;
        grid-template-columns: repeat(2, 1fr);

        gap: 30px;
      }
    }

    .actions {
      max-width: 33.333333333333%;
      width: 100%;
    }
  }
`;
