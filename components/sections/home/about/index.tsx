import { Button } from "components/data/button";
import { Container } from "components/data/container";
import * as S from "./styles";

export function About() {
  return (
    <S.Contact>
      <img
        className="about-bg"
        src="/images/bg-about-home.png"
        alt="about home"
      />

      <Container>
        <div className="text">
          <h2 className="title-3-bold">sobre nós</h2>

          <p className="paragraph-3-regular">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et.
          </p>

          <Button
            href="/sobre"
            color="--text-primary-color-light"
            textIn="ver mais"
            textOut="ver mais"
          />
        </div>

        <div className="title-about">
          <img src="/images/about-detail-icon.png" alt="about detail icon" />

          <h3 className="title-3-light">
            DESIGN <br/> TECNOLOGIA <br/> programação  <br/>marketing <br/>
            <span className="-bold">movimento</span>
          </h3>
        </div>
      </Container>
    </S.Contact>
  );
}
