import styled from "styled-components";

export const CardBlog = styled.div`
  width: 100%;
  display: block;
  padding: 20px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  border-radius: 20px;
  background-color: #ffffff;

  .image {
    aspect-ratio: 390/260;
    width: 100%;
    border-radius: 12px;
    display: block;
    background-color: red;
    overflow: hidden;
    > div {
      aspect-ratio: inherit;
      span {
        aspect-ratio: inherit;
        img {
          aspect-ratio: inherit;
        }
      }
    }

    img {
      transition: 0.3s;
    }
  }

  .image:hover {
    img {
      transform: scale(1.1);
      transition: 0.3s;
    }
  }

  .image + * {
    margin-top: 18px;
  }

  .text-card-blog {
    text-align: center;

    h4 {
      color: var(--primary-color);
      letter-spacing: 1.6px;
      text-transform: uppercase;
      display: inline-block;
      height: 24px;
      overflow: hidden;
    }

    h4 + * {
      margin-top: 20px;
    }

    h3 {
      color: #414141;
      height: calc(36px * 3);
      overflow: hidden;
      line-height: 36px;
      margin-bottom: 12px;
    }

    h3:hover {
      color: var(--secondary-color);
      transition: 0.3s;
    }

    p {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3; /* number of lines to show */
      -webkit-box-orient: vertical;
      line-height: 1.5;
      color: #414141;
      height: 72px;
    }

    p + * {
      margin-top: 25px;
    }

    .read-more {
      color: var(--primary-color);
      text-decoration: underline !important;
    }

    .read-more:hover {
      color: var(--secondary-color);
    }
  }
`;
