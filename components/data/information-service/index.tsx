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
    <S.InformationService theme={theme}>
      <Container>
        <div className="text-information">
          <h2 className="title-3-bold">{parser(title)}</h2>

          <ul>
            {listService.map((serviceItem) => {
              return (
                <li key={serviceItem}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35"><g><g><path fill="#00c427" d="M15.42 26.67c-.439.44-1.151.44-1.59 0l-7.313-7.312a1.125 1.125 0 0 1 0-1.591l1.591-1.591c.44-.44 1.152-.44 1.591 0l4.926 4.926L25.176 10.55c.44-.44 1.152-.44 1.591 0l1.591 1.59c.44.44.44 1.153 0 1.592L15.421 26.67zM17.439 0C7.806 0 0 7.807 0 17.437s7.807 17.438 17.438 17.438c9.63 0 17.437-7.807 17.437-17.438C34.875 7.807 27.068 0 17.437 0z"/></g></g></svg>
                  <span>
                  {parser(serviceItem)}
                  </span>
                </li>
              );
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
