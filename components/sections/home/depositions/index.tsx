import { Swiper, SwiperSlide } from "swiper/react";

import { Container } from "components/data/container";
import { Navigation } from "components/data/navigation";
import { IDepoimento } from "interfaces/models/conteudo/depoimento";

import { Customer } from "./deposition";

import * as S from "./styles";

interface DepositionsProps {
  theme: "--primary-color" | "--secondary-color";
  listDepoiments?: IDepoimento[];
}

export function Depositions({ theme, listDepoiments }: DepositionsProps) {
  if (!listDepoiments) {
    return <div></div>;
  }

  if (listDepoiments.length === 0) {
    return <div></div>;
  }

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
                nextEl: ".nav-right-depositions",
                prevEl: ".nav-left-depositions",
              }}
              allowTouchMove={false}
            >
              {listDepoiments.map((item) => {
                return (
                  <SwiperSlide key={item.id + "customer"}>
                    <Customer
                      description={item.descricao}
                      title={item.titulo}
                      profession={item.subtitulo}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>

            <Navigation
              theme={theme}
              left="nav-left-depositions"
              right="nav-right-depositions"
            />
          </div>
        </div>
      </Container>
    </S.Depositions>
  );
}
