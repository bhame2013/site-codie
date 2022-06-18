import React, { Fragment } from "react";
import { Container } from "components/data/container";
import { Title } from "components/data/title";

import * as S from "./styles";



export function Customers() {


  const listaDeImagens = [
    {
      id: 1,
      imagem: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png",
    },
    {
      id: 2,
      imagem: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png",
    },
    {
      id: 3,
      imagem: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png",
    },
    {
      id: 4,
      imagem: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png",
    },
    {
      id: 5,
      imagem: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png",
    },
    {
      id: 6,
      imagem: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png",
    },
    {
      id: 7,
      imagem: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png",
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
                    <img src={lista.imagem} height="100" width="250" />
                  </div>
                </div>
                <div className="slide">
                  <div>
                    <img src={lista.imagem} height="100" width="250" />
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
