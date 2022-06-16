import { Button } from "components/data/button";
import { Container } from "components/data/container";
import { Title } from "components/data/title";
import { BoxPortfolio } from "./box-portfolio";
import * as S from "./styles";

export function Portfolio() {
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
              margin={30}
            />

            <p className="paragraph-3-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div>
            <Button
              href=""
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
          <BoxPortfolio image="/images/banner.jpg" title="tarobá news  " />
          <BoxPortfolio image="/images/banner.jpg" title="ilumina solar" />
          <BoxPortfolio image="/images/banner.jpg" title="ecofood" />
          <BoxPortfolio image="/images/banner.jpg" title="leanwork" />
          <BoxPortfolio image="/images/banner.jpg" title="escola ieij" />
          <BoxPortfolio image="/images/banner.jpg" title="ponto rural" />
          <BoxPortfolio image="/images/banner.jpg" title="Banner " />
          <BoxPortfolio image="/images/banner.jpg" title="Banner " />
          <BoxPortfolio image="/images/banner.jpg" title="Banner " />
        </div>
      </Container>
    </S.Portfolio>
  );
}
