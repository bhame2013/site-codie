import { Button } from "components/data/button";
import { Container } from "components/data/container";
import { Title } from "components/data/title";
import { BoxPortfolio } from "./box-portfolio";

import { IPortfolio } from "interfaces/models/catalogo/portfolio"

import * as S from "./styles";

interface PortfolioProps {
  listPortfolio?: IPortfolio[]
}

export function Portfolio({ listPortfolio }: PortfolioProps) {

  if(!listPortfolio) {
    return <> </>
  }

  return (
    <S.Portfolio>
      <Container>
        <div className="top">
          <div>
            <Title
              subTitle={{
                size: 4,
                text: "/cases",
              }}
              title={{
                size: 2,
                text: "portfólio",
              }}
              color="dark"
              margin={45}
            />

            <p className="paragraph-3-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div>
            <Button
              href="/criacao-de-websites"
              textIn="cases de site"
              textOut="ver cases"
              color="--secondary-color"
            />

            <Button
              href=""
              textIn="cases de marketing"
              textOut="ver cases"
              color="--primary-color"
            />

            <Button
              href=""
              textIn="cases de design"
              textOut="ver cases"
              color="--secondary-color"
            />
          </div>
        </div>

        <div className="list-portfolio">
          {
            listPortfolio.map((portfolio) => {
              return <BoxPortfolio key={portfolio.id + "-portfolio"} image={portfolio.imagem} title={portfolio.titulo} />
            })
          }
        </div>
      </Container>
    </S.Portfolio>
  );
}
