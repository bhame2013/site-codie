import styled from "styled-components";

export const Blog = styled.section`
  .blog-item {
    aspect-ratio: 1920/1080;
    min-height: 500px;
    width: 100%;
    position: relative;

    > div {
      aspect-ratio: inherit;

      span {
        aspect-ratio: inherit;

        img {
          aspect-ratio: inherit;
        }
      }
    }

    .container {
      position: absolute;
      bottom: 110px;
      left: 0;
      right: 0;
      width: 100%;
      display: flex;
      align-items: flex-end;
      justify-content: space-between;

      .content {
        max-width: calc(100% - 150px);
        width: 100%;
      }
    }
  }

`;
