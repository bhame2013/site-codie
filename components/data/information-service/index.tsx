import NextImage from "next/image";

import parser from "html-react-parser";

import { Container } from "../container";

import * as S from "./styles";

interface InformationService {
  theme: "--primary-color" | "--secondary-color";
  title: string;
  listService: string[];
  image: string;
}

export function InformationService({
  theme,
  title,
  listService,
  image,
}: InformationService) {
  return (
    <S.InformationService>
      <Container>
        <div className="text">
          <h2 className="title-3-bold">{parser(title)}</h2>

          <ul>
            {listService.map((serviceItem) => {
              <li>
                <img src="/images/check.png" alt="check" />
                {parser(serviceItem)}
              </li>;
            })}
          </ul>
        </div>

        <div className="image">
          <NextImage
            src={`/images/service/${image}.png`}
            alt={"imagem de" + image}
            layout="fill"
          />
        </div>
      </Container>
    </S.InformationService>
  );
}
