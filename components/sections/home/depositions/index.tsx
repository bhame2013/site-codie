import { Container } from "components/data/container";
import { Swiper, SwiperSlide } from "swiper/react";
import { Customer } from "./deposition";
import * as S from "./styles";

interface DepositionsProps {
  theme: "--primary-color" | "--secondary-color";
}

export function Depositions({ theme }: DepositionsProps) {
  const depositions = [
    {
      id: 1,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Venenatis cras sed felis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Venenatis cras sed felis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
      title: "rafaella kalimann",
      profession: "Digital influencer",
      category: "/Marketing digital",
    },
    {
      id: 2,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Venenatis cras sed felis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Venenatis cras sed felis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
      title: "tiago",
      profession: "Digital influencer2",
      category: "/Marketing digital2",
    },
  ];

  return (
    <S.Depositions theme={theme}>
      <Container>
        <div className="carousel">
          <h2 className="title-3-regular">
            <span className="-bold">o que nossos Clientes falam</span> <br />
            Sobre os serviços Da codie
          </h2>

          <div className="carousel-content">
            <Swiper
              spaceBetween={0}
              loop
              slidesPerView={1}
              navigation={{
                nextEl: ".nav-right",
                prevEl: ".nav-left",
              }}
              allowTouchMove={false}
            >
              {depositions.map((item) => {
                return (
                  <SwiperSlide key={item.id + "customer"}>
                    <Customer
                      description={item.description}
                      title={item.title}
                      profession={item.profession}
                      category={item.category}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>

            <div className="nav">
              <button type="button" className="nav-left">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="46"
                  height="46"
                  viewBox="0 0 46 46"
                >
                  <defs>
                    <clipPath id="e9zaa">
                      <path
                        fill="#fff"
                        d="M0 23C0 10.297 10.297 0 23 0s23 10.297 23 23-10.297 23-23 23S0 35.703 0 23z"
                      />
                    </clipPath>
                  </defs>
                  <g>
                    <g transform="rotate(-180 23 23)">
                      <g>
                        <path
                          fill="none"
                          strokeMiterlimit="20"
                          strokeWidth="4"
                          d="M0 23C0 10.297 10.297 0 23 0s23 10.297 23 23-10.297 23-23 23S0 35.703 0 23z"
                          clipPath='url("#e9zaa")'
                        />
                      </g>
                      <g transform="rotate(45 21.5 22.5)">
                        <path
                          fill="none"
                          strokeMiterlimit="20"
                          strokeWidth="2"
                          d="M11.767 15.944v0H26.16v14.392"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
              </button>
              <button type="button" className="nav-right">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="46"
                  height="46"
                  viewBox="0 0 46 46"
                >
                  <defs>
                    <clipPath id="hmrsa">
                      <path
                        fill="#fff"
                        d="M0 23C0 10.297 10.297 0 23 0s23 10.297 23 23-10.297 23-23 23S0 35.703 0 23z"
                      />
                    </clipPath>
                  </defs>
                  <g>
                    <g>
                      <g>
                        <path
                          fill="none"
                          strokeMiterlimit="20"
                          strokeWidth="4"
                          d="M0 23C0 10.297 10.297 0 23 0s23 10.297 23 23-10.297 23-23 23S0 35.703 0 23z"
                          clipPath='url("#hmrsa")'
                        />
                      </g>
                      <g transform="rotate(45 24.5 23.5)">
                        <path
                          fill="none"
                          strokeMiterlimit="20"
                          strokeWidth="2"
                          d="M11.767 15.944v0H26.16v14.392"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </Container>
    </S.Depositions>
  );
}
