
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";

import { Title } from "components/data/title";
import { Container } from "components/data/container";
import { NextImage } from "components/data/NextImage";
import { linksMenu } from "components/layout/header/linksMenu";

import { IBanner } from "interfaces/models/conteudo/banner";

import * as S from "./styles";

interface BannerProps {
  banners?: IBanner[];
}

export function Banner({ banners }: BannerProps) {

  if(!banners) {
    return <></>
  }

  return (
    <S.Banner>
      <div className="carousel-absolute">
        {banners.length === 0 ? (
          <div className="carousel-absolute">
            <div className="bg">
              <NextImage
                src="/images/banner.jpg"
                layout="fill"
              />
            </div>
          </div>
        ) : (
          <Swiper
            spaceBetween={0}
            loop
            slidesPerView={1}
            navigation={{
              nextEl: ".nav-right-blog",
              prevEl: ".nav-left-blog",
            }}
            effect={"fade"}
            autoplay={{
              delay: 2000,
            }}
            allowTouchMove={false}
          >
            {banners.map((banner) => {
              return (
                <SwiperSlide key={banner.id + "banner-home"}>
                  <div className="bg">
                    <NextImage
                      src={banner.imagem}
                      layout="fill"
                      isBaseUrl
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        )}
      </div>

      <Container>
        <div className="heightMenu"></div>

        <div>
          <Title
            subTitle={{
              size: 2,
              text: "um novo",
            }}
            title={{
              size: 1,
              text: "momento codie",
            }}
            color="light"
            margin="45"
            isMainTitle
          />

          <p className="paragraph-2-regular"></p>

          <a href="#scroll" className="scroll link-1-bold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="24"
              viewBox="0 0 18 24"
            >
              <defs>
                <clipPath id="arbda">
                  <path
                    fill="#fff"
                    d="M8 24a8 8 0 0 1-8-8V8a8 8 0 0 1 8-8h1.846a8 8 0 0 1 8 8v8a8 8 0 0 1-8 8z"
                  />
                </clipPath>
              </defs>
              <g>
                <g>
                  <g>
                    <path
                      fill="none"
                      stroke="#eee"
                      strokeMiterlimit="20"
                      strokeWidth="4"
                      d="M8 24a8 8 0 0 1-8-8V8a8 8 0 0 1 8-8h1.846a8 8 0 0 1 8 8v8a8 8 0 0 1-8 8z"
                      clipPath='url("#arbda")'
                    />
                  </g>
                  <g>
                    <path
                      fill="none"
                      stroke="#eee"
                      strokeMiterlimit="20"
                      strokeWidth="2"
                      d="M8.923 6.462v4.923"
                    />
                  </g>
                </g>
              </g>
            </svg>
            scroll para baixo
          </a>
        </div>

        <div className="heightMenu">
          <div className="menu-banner">
            {linksMenu.map((link) => {
              return (
                <Link key={link.text + link.href} href={link.href} passHref>
                  <a href="replaced" className="link-1-medium">
                    {link.text}
                  </a>
                </Link>
              );
            })}
          </div>
        </div>
      </Container>
    </S.Banner>
  );
}
