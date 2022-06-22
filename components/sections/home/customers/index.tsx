import React, { Fragment } from "react";


import { Title } from "components/data/title";
import { Container } from "components/data/container";
import { NextImage } from "components/data/NextImage";

import { IMarca } from "interfaces/models/catalogo/marca"

import * as S from "./styles";

interface CustomersProps {
  listCustomers?: IMarca[]
}

export function Customers({ listCustomers }: CustomersProps) {

  if(!listCustomers) {
    return <> </>
  }

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
          {listCustomers.map((customer) => {
            return (
              <Fragment key={customer.id +  "customer-1"}>
                <div className="slide">
                  <div>
                    <NextImage src={customer.imagem} layout="fill" isBaseUrl/>
                  </div>
                </div>
              </Fragment>
            );
          })}

        {listCustomers.map((customer) => {
            return (
              <Fragment key={customer.id +  "customer-2"}>
                <div className="slide">
                  <div>
                    <NextImage src={customer.imagem} layout="fill" isBaseUrl/>
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
