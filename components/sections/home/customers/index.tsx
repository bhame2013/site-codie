import React, { Fragment } from "react";
import { Container } from "components/data/container";
import { Title } from "components/data/title";

import * as S from "./styles";
import { NextImage } from "components/data/NextImage";

export function Customers() {
  const listaDeImagens = [
    {
      id: 1,
      imagem: "/images/logo-marca-default.png",
    },
    {
      id: 2,
      imagem: "/images/logo-marca-default.png",
    },
    {
      id: 3,
      imagem: "/images/logo-marca-default.png",
    },
    {
      id: 4,
      imagem: "/images/logo-marca-default.png",
    },
    {
      id: 5,
      imagem: "/images/logo-marca-default.png",
    },
    {
      id: 6,
      imagem: "/images/logo-marca-default.png",
    },
    {
      id: 7,
      imagem: "/images/logo-marca-default.png",
    },
  ];

  return (
    <S.Customers>
      <Container>
        <Title
          title={{
            size: 2,
            text: "nossos clientes",
          }}
          color="dark"
          margin={80}
        />
      </Container>

      <div className="slider">
        <div className="slide-track">
          {listaDeImagens.map((lista) => {
            return (
              <Fragment key={lista.id}>
                <div className="slide">
                  <div>
                    <NextImage src={lista.imagem} layout="fill" />
                  </div>
                </div>
                <div className="slide">
                  <div>
                    <NextImage src={lista.imagem} layout="fill" />
                  </div>
                </div>
              </Fragment>
            );
          })}
        </div>
      </div>
    </S.Customers>
  );
}
