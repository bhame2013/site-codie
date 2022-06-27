import { Swiper, SwiperSlide } from "swiper/react";

import { Title } from "components/data/title";
import { Button } from "components/data/button";
import { Container } from "components/data/container";
import { Navigation } from "components/data/navigation";

import { IBlog } from "interfaces/models/conteudo/blog";

import * as S from "./styles";
import { NextImage } from "components/data/NextImage";

interface BlogProps {
  listBlog?: IBlog;
}

export function Blog({ listBlog }: BlogProps) {
  if (!listBlog || listBlog === null || !listBlog.posts || listBlog === null) {
    return <div></div>;
  }

  console.log();

  return (
    <S.Blog>
      <Swiper
        spaceBetween={0}
        loop
        slidesPerView={1}
        navigation={{
          nextEl: ".nav-right-blog",
          prevEl: ".nav-left-blog",
        }}
        effect={"fade"}
        allowTouchMove={false}
      >
        {listBlog.posts.map((blog) => {
          return (
            <SwiperSlide key={blog.id}>
              <div className="blog-item">
                {blog.imagem && (
                  <NextImage src={blog.imagem} layout="fill" isBaseUrl />
                )}

                <Container>
                  <div className="content">
                    {blog.subtitulo && blog.titulo && (
                      <Title
                        subTitle={{
                          size: 4,
                          text: blog.subtitulo,
                        }}
                        title={{
                          size: 3,
                          text: blog.titulo,
                        }}
                        color="light"
                        margin={40}
                      />
                    )}

                    {blog.url && (
                      <Button
                        href={"/blog" + blog.url}
                        textIn="ler mais"
                        textOut="ler mais"
                        color="--text-primary-color-light"
                      />
                    )}

                    <Navigation
                      theme="--text-primary-color-light"
                      left="nav-left-blog"
                      right="nav-right-blog"
                    />
                  </div>
                </Container>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </S.Blog>
  );
}
